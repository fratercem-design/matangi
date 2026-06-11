"use client";

// ═══════════════════════════════════════════════════════════
// AmbientSound — synthesized devotional drone (Web Audio API)
// No audio files: a veena-like tonic/fifth/octave drone over a
// filtered-noise atmosphere, with a slow "breathing" LFO and
// occasional synthesized parrot chirps. Starts only on a user
// gesture (browser autoplay policy); preference persists.
// ═══════════════════════════════════════════════════════════

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

// Shankarabharanam-flavoured tonic chord (C2 root): Sa · Pa · Sā
const DRONE_FREQS = [65.41, 98.0, 130.81, 196.0]; // C2, G2, C3, G3
const MASTER_VOLUME = 0.16;
const STORAGE_KEY = "matangi-ambient-on";

export default function AmbientSound() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<Array<OscillatorNode | AudioBufferSourceNode>>([]);
  const chirpTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Build the synth graph ────────────────────────────────
  const build = useCallback(() => {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new Ctx();
    ctxRef.current = ctx;

    const master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);
    masterRef.current = master;

    // Drone voices — slightly detuned sine/triangle pairs
    DRONE_FREQS.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i % 2 === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;
      osc.detune.value = (i - 1.5) * 4; // gentle chorus spread

      const g = ctx.createGain();
      g.gain.value = 0.5 / DRONE_FREQS.length;

      // Per-voice vibrato LFO
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07 + i * 0.013;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 2.2;
      lfo.connect(lfoGain).connect(osc.frequency);

      osc.connect(g).connect(master);
      osc.start();
      lfo.start();
      nodesRef.current.push(osc, lfo);
    });

    // Atmospheric filtered noise
    const noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.4;
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuf;
    noise.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = 380;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.05;
    noise.connect(noiseFilter).connect(noiseGain).connect(master);
    noise.start();
    nodesRef.current.push(noise);

    // Slow "breathing" swell on the master
    const breath = ctx.createOscillator();
    breath.frequency.value = 0.05; // ~20s cycle
    const breathGain = ctx.createGain();
    breathGain.gain.value = MASTER_VOLUME * 0.35;
    breath.connect(breathGain).connect(master.gain);
    breath.start();
    nodesRef.current.push(breath);

    return ctx;
  }, []);

  // ── Synthesized parrot chirp (random intervals) ──────────
  // Named function expression so the recursive re-schedule can reference itself
  const scheduleChirp = useCallback(function chirpLoop() {
    const ctx = ctxRef.current;
    const master = masterRef.current;
    if (!ctx || !master) return;
    const delay = 9000 + Math.random() * 13000;
    chirpTimer.current = setTimeout(() => {
      const t = ctx.currentTime;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sawtooth";
      const base = 1300 + Math.random() * 700;
      o.frequency.setValueAtTime(base, t);
      o.frequency.exponentialRampToValueAtTime(base * 1.6, t + 0.08);
      o.frequency.exponentialRampToValueAtTime(base * 0.9, t + 0.22);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.06, t + 0.03);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      const bp = ctx.createBiquadFilter();
      bp.type = "bandpass";
      bp.frequency.value = base;
      bp.Q.value = 6;
      o.connect(bp).connect(g).connect(master);
      o.start(t);
      o.stop(t + 0.32);
      chirpLoop();
    }, delay);
  }, []);

  // ── Teardown ─────────────────────────────────────────────
  const teardown = useCallback(() => {
    if (chirpTimer.current) clearTimeout(chirpTimer.current);
    const ctx = ctxRef.current;
    const master = masterRef.current;
    if (ctx && master) {
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8);
      const toClose = ctx;
      setTimeout(() => {
        nodesRef.current.forEach((n) => {
          try { n.stop(); } catch { /* already stopped */ }
        });
        nodesRef.current = [];
        toClose.close().catch(() => {});
      }, 900);
    }
    ctxRef.current = null;
    masterRef.current = null;
  }, []);

  const enable = useCallback(async () => {
    const ctx = build();
    await ctx.resume();
    const master = masterRef.current!;
    master.gain.cancelScheduledValues(ctx.currentTime);
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.linearRampToValueAtTime(MASTER_VOLUME, ctx.currentTime + 2.5);
    scheduleChirp();
  }, [build, scheduleChirp]);

  const toggle = useCallback(() => {
    setOn((prev) => {
      const next = !prev;
      if (next) enable();
      else teardown();
      try { localStorage.setItem(STORAGE_KEY, next ? "1" : "0"); } catch {}
      return next;
    });
  }, [enable, teardown]);

  // Re-arm a previously-enabled session on the first user gesture
  useEffect(() => {
    if (typeof window === "undefined") return;
    let wanted = false;
    try { wanted = localStorage.getItem(STORAGE_KEY) === "1"; } catch {}
    if (!wanted) return;
    const resume = () => {
      if (!ctxRef.current) {
        setOn(true);
        enable();
      }
      window.removeEventListener("pointerdown", resume);
      window.removeEventListener("keydown", resume);
    };
    window.addEventListener("pointerdown", resume);
    window.addEventListener("keydown", resume);
    return () => {
      window.removeEventListener("pointerdown", resume);
      window.removeEventListener("keydown", resume);
    };
  }, [enable]);

  useEffect(() => () => teardown(), [teardown]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      onClick={toggle}
      aria-label={on ? "Mute ambient sound" : "Play ambient sound"}
      title={on ? "Silence the temple" : "Awaken the drone"}
      className="fixed bottom-5 right-5 z-[60] grid place-items-center w-11 h-11 rounded-full
                 border border-gold/30 bg-[rgba(10,10,15,0.7)] backdrop-blur-md text-gold/70
                 hover:text-gold hover:border-gold/60 transition-colors duration-300
                 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
    >
      {on ? (
        <span className="relative flex items-center justify-center">
          <Volume2 size={17} />
          <span className="absolute -inset-2 rounded-full border border-emerald-500/40 animate-ping" />
        </span>
      ) : (
        <VolumeX size={17} />
      )}
    </motion.button>
  );
}
