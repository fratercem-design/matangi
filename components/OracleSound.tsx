"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

// ── Web Audio ambient engine: veena drone + parrot calls ─────
// All sounds synthesized with WebAudio — no external files needed.

interface SoundEngine {
  start: () => void;
  stop: () => void;
  setVolume: (v: number) => void;
}

function createVeenaDrone(ctx: AudioContext): OscillatorNode[] {
  // Veena fundamental: Sa (C) + harmonics in raga Shankarabharanam
  const fundamentals = [130.81, 196.00, 261.63, 329.63, 392.00];
  const oscillators: OscillatorNode[] = [];

  fundamentals.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.frequency.value = freq;
    osc.type = i === 0 ? "sawtooth" : "triangle";

    filter.type = "bandpass";
    filter.frequency.value = freq * 1.5;
    filter.Q.value = 3;

    gain.gain.value = i === 0 ? 0.06 : 0.02 / (i + 1);

    // Slow vibrato
    const vibLfo = ctx.createOscillator();
    const vibGain = ctx.createGain();
    vibLfo.frequency.value = 5.5 + i * 0.3;
    vibGain.gain.value = freq * 0.008;
    vibLfo.connect(vibGain);
    vibGain.connect(osc.frequency);
    vibLfo.start();

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    oscillators.push(osc);
  });

  return oscillators;
}

function createTambura(ctx: AudioContext): OscillatorNode[] {
  // Tambura drone: Sa-Pa-SA pattern
  const notes = [65.41, 98.00, 130.81, 261.63];
  const oscillators: OscillatorNode[] = [];

  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const comp = ctx.createDynamicsCompressor();

    osc.frequency.value = freq;
    osc.type = "sawtooth";
    gain.gain.value = 0.025 - i * 0.003;

    // Slight detuning for richness
    osc.detune.value = i * 2.5;

    osc.connect(gain);
    gain.connect(comp);
    comp.connect(ctx.destination);
    osc.start();
    oscillators.push(osc);
  });

  return oscillators;
}

function scheduleParrotCall(ctx: AudioContext, masterGain: GainNode): void {
  // Synthesized parrot chirp — quick frequency sweep
  const callTime = ctx.currentTime;
  const osc = ctx.createOscillator();
  const env = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(1200, callTime);
  osc.frequency.exponentialRampToValueAtTime(2400, callTime + 0.08);
  osc.frequency.exponentialRampToValueAtTime(1600, callTime + 0.18);
  osc.frequency.exponentialRampToValueAtTime(2200, callTime + 0.26);
  osc.frequency.exponentialRampToValueAtTime(1400, callTime + 0.38);

  filter.type = "bandpass";
  filter.frequency.value = 1800;
  filter.Q.value = 2;

  env.gain.setValueAtTime(0, callTime);
  env.gain.linearRampToValueAtTime(0.12, callTime + 0.04);
  env.gain.linearRampToValueAtTime(0.08, callTime + 0.18);
  env.gain.linearRampToValueAtTime(0.12, callTime + 0.22);
  env.gain.linearRampToValueAtTime(0, callTime + 0.42);

  osc.connect(filter);
  filter.connect(env);
  env.connect(masterGain);
  osc.start(callTime);
  osc.stop(callTime + 0.45);
}

function createAtmosphere(ctx: AudioContext): AudioBufferSourceNode | null {
  // Subtle wind / room noise
  try {
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.012;
    }
    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    filter.type = "lowpass";
    filter.frequency.value = 300;
    gain.gain.value = 0.08;

    source.buffer = buffer;
    source.loop = true;
    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start();
    return source;
  } catch {
    return null;
  }
}

function buildEngine(ctx: AudioContext, masterGain: GainNode): () => void {
  const veena = createVeenaDrone(ctx);
  const tambura = createTambura(ctx);
  const atmos = createAtmosphere(ctx);

  // Schedule parrot calls randomly
  const parrotInterval = setInterval(() => {
    if (ctx.state === "running") {
      scheduleParrotCall(ctx, masterGain);
      // Sometimes double-call
      if (Math.random() > 0.6) {
        setTimeout(() => scheduleParrotCall(ctx, masterGain), 500 + Math.random() * 400);
      }
    }
  }, 8000 + Math.random() * 12000);

  // Fade in
  masterGain.gain.setValueAtTime(0, ctx.currentTime);
  masterGain.gain.linearRampToValueAtTime(1, ctx.currentTime + 3);

  return () => {
    clearInterval(parrotInterval);
    veena.forEach(o => { try { o.stop(); } catch {} });
    tambura.forEach(o => { try { o.stop(); } catch {} });
    try { atmos?.stop(); } catch {}
  };
}

// ── React hook ────────────────────────────────────────────────
export function useOracleSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  const [active, setActive] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const start = useCallback(() => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const masterGain = ctx.createGain();
      masterGain.gain.value = volume;
      masterGain.connect(ctx.destination);
      ctxRef.current = ctx;
      masterGainRef.current = masterGain;
      cleanupRef.current = buildEngine(ctx, masterGain);
      setActive(true);
    } catch (e) {
      console.warn("WebAudio not available:", e);
    }
  }, [volume]);

  const stop = useCallback(() => {
    if (masterGainRef.current && ctxRef.current) {
      masterGainRef.current.gain.linearRampToValueAtTime(0, ctxRef.current.currentTime + 1.5);
      setTimeout(() => {
        cleanupRef.current?.();
        ctxRef.current?.close();
        ctxRef.current = null;
      }, 1600);
    }
    setActive(false);
  }, []);

  const changeVolume = useCallback((v: number) => {
    setVolume(v);
    if (masterGainRef.current) {
      masterGainRef.current.gain.value = v;
    }
  }, []);

  useEffect(() => () => { cleanupRef.current?.(); ctxRef.current?.close(); }, []);

  return { active, volume, start, stop, changeVolume };
}

// ── Sound control button ──────────────────────────────────────
interface SoundControlProps {
  active: boolean;
  volume: number;
  onToggle: () => void;
  onVolume: (v: number) => void;
}

export default function SoundControl({ active, volume, onToggle, onVolume }: SoundControlProps) {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div className="relative flex items-center gap-2">
      <button
        onClick={() => setShowSlider(!showSlider)}
        className="relative"
        onBlur={() => setTimeout(() => setShowSlider(false), 200)}
      >
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className={`flex items-center gap-1.5 text-label px-3 py-2 border rounded-sm transition-all duration-500 ${
            active
              ? "border-emerald-500/60 text-emerald-300 bg-emerald-950/30"
              : "border-white/15 text-ivory/40 hover:border-white/30 hover:text-ivory/70"
          }`}
          title={active ? "Stop ambient sound" : "Start veena & parrot ambience"}
        >
          {active ? <Volume2 size={12} /> : <VolumeX size={12} />}
          <span>{active ? "♪ VEENA & PARROT" : "♪ SOUND"}</span>
          {active && (
            <span className="flex gap-0.5">
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  className="inline-block w-0.5 bg-emerald-400/60 rounded-full animate-bounce"
                  style={{
                    height: `${6 + i * 3}px`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: "0.8s",
                  }}
                />
              ))}
            </span>
          )}
        </button>
      </button>

      {active && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={e => onVolume(Number(e.target.value))}
          className="w-16 accent-emerald-500 opacity-60 hover:opacity-100 transition-opacity"
          style={{ cursor: "pointer" }}
          title="Volume"
        />
      )}
    </div>
  );
}
