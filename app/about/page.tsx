import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import RitualCard from "@/components/RitualCard";
import {
  matangiCore, matangiAttributes, matangiForms, matangiSiddhis, originStory,
} from "@/lib/matangi-content";
import {
  dasaMahavidyaIntro, shivaShaktiTeaching, tantraTeaching,
  matangiVaikhari, purushaRthas, dasaMahavidyaOrigin,
} from "@/lib/dasa-mahavidya";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Mātaṅgī is, and where she stands among the ten Mahāvidyās — the ninth wisdom goddess, of speech and the forbidden.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About · Temple of Ma Matangi",
    description:
      "Who Mātaṅgī is, and where she stands among the ten Mahāvidyās — the ninth wisdom goddess, of speech and the forbidden.",
    url: "/about",
    type: "website",
  },
};

const MAHAVIDYAS: { n: string; name: string; domain: string; active?: boolean }[] = [
  { n: "I",    name: "Kali",              domain: "Time · Liberation" },
  { n: "II",   name: "Tara",              domain: "Compassion · Navigation" },
  { n: "III",  name: "Tripura Sundari",   domain: "Beauty · Desire" },
  { n: "IV",   name: "Bhuvaneshvari",     domain: "Space · World-Form" },
  { n: "V",    name: "Bhairavi",          domain: "Destruction · Fire" },
  { n: "VI",   name: "Chhinnamasta",      domain: "Sacrifice · Paradox" },
  { n: "VII",  name: "Dhumavati",         domain: "Void · Smoke" },
  { n: "VIII", name: "Bagalamukhi",       domain: "Paralysis · Silence" },
  { n: "IX",   name: "Matangi",           domain: "Speech · Forbidden", active: true },
  { n: "X",    name: "Kamala",            domain: "Abundance · Lotus" },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      <PageHero
        label="Who Is Ma Matangi"
        title="The Outcaste"
        titleAccent="Oracle"
        subtitle="Ninth Mahavidya — goddess of speech, music, wisdom, creativity, and the knowledge that lives outside every sanctioned boundary"
        variant="emerald"
        geometry
        image="/images/heroes/about.jpg"
      />

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="section-padding border-b border-white/[0.04]">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <p className="text-label text-gold/50">Origin & Identity</p>
                <h2 className="font-display text-3xl md:text-4xl text-ivory/90 font-light leading-tight">
                  Dark mirror of Saraswati. Tongue of the Absolute.
                </h2>
                <div className="space-y-4 text-ivory/60 leading-relaxed">
                  <p>
                    Matangi is the ninth of the Ten Mahavidyas — the tantric manifestations of Mahadevi, the supreme
                    goddess. Where her counterpart Saraswati governs sanctioned knowledge, pure learning, and
                    institutionally acceptable wisdom, Matangi rules what is forbidden, transgressive, and marginal.
                  </p>
                  <p>
                    She is specifically identified as a Chandali — the feminine outcast who lives outside the
                    village boundary, beyond the walls of conventional society. This is not a flaw in her mythology.
                    It is the central teaching: the highest wisdom does not flow through authorized channels.
                    It flows through the margins, the discarded, the supposedly contaminated.
                  </p>
                  <p>
                    She accepts ucchishta — offerings that have been touched, eaten, made impure by contact with
                    life. In doing so, she inverts the entire logic of purity-based worship: the sacred dwells not
                    in the pristine, but in what has been fully lived.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-3">
                <p className="text-label text-gold/50 mb-4">Core Attributes</p>
                {Object.entries(matangiCore).map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b border-white/[0.05] py-3">
                    <span className="text-label text-ivory/30 w-32 shrink-0 pt-0.5">
                      {k.replace(/([A-Z])/g, " $1").replace("_", " ").toUpperCase()}
                    </span>
                    <span className="text-ivory/65 text-sm">{v}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Origin Story ─────────────────────────────────── */}
      <section className="section-padding relative">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(107,70,193,0.07) 0%, transparent 70%)" }} />
        <div className="section-container relative z-10 max-w-3xl">
          <ScrollReveal>
            <p className="text-label text-gold/50 mb-4 text-center">Origin Myth</p>
            <h2 className="font-display text-3xl md:text-4xl text-ivory/90 font-light text-center mb-12">
              {originStory.title}
            </h2>
            {originStory.body.split("\n\n").map((para, i) => (
              <p key={i} className="font-display text-lg text-ivory/65 italic leading-relaxed mb-5">{para}</p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Attributes grid ──────────────────────────────── */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-label text-gold/50 mb-4">Sacred Iconography</p>
            <h2 className="font-display text-3xl text-ivory/90 font-light">Her Sacred Attributes</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {matangiAttributes.map((a, i) => (
              <RitualCard key={a.name} title={a.name} subtitle={a.Sanskrit} delay={i * 0.06} variant="parchment">
                <p className="text-ivory/55 text-sm leading-relaxed mb-3">{a.meaning}</p>
                <p className="text-label text-gold/40">{a.symbolism}</p>
              </RitualCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Five Forms ───────────────────────────────────── */}
      <section className="section-padding bg-[rgba(0,0,0,0.2)] border-t border-b border-white/[0.04]">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-label text-gold/50 mb-4">Five Sacred Forms</p>
            <h2 className="font-display text-3xl text-ivory/90 font-light">Manifestations of the Goddess</h2>
            <p className="font-display text-base text-ivory/40 italic mt-4 max-w-xl mx-auto">
              Each form governs a different aspect of the same domain — five octaves of the same fundamental transmission.
            </p>
          </ScrollReveal>
          <div className="space-y-4">
            {matangiForms.map((f, i) => (
              <ScrollReveal key={f.id} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                <div className="grid md:grid-cols-4 gap-6 card-parchment rounded-sm p-6 md:p-8 hover:border-gold/20 transition-all duration-500">
                  <div>
                    <div className="w-2 h-2 rounded-full mb-3" style={{ background: f.color }} />
                    <h3 className="font-display text-lg text-ivory/90">{f.name}</h3>
                    <p className="text-ivory/40 text-xs font-mono mt-1">{f.subtitle}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-ivory/60 text-sm leading-relaxed">{f.description}</p>
                  </div>
                  <div>
                    <p className="text-label text-ivory/30 mb-2">POWERS</p>
                    <p className="text-ivory/50 text-xs leading-relaxed">{f.powers}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Siddhis ──────────────────────────────────────── */}
      <section className="section-padding">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-label text-gold/50 mb-4">Spiritual Gifts</p>
            <h2 className="font-display text-3xl text-ivory/90 font-light">Siddhis — Attainments of Practice</h2>
            <p className="font-display text-base text-ivory/40 italic mt-4 max-w-xl mx-auto">
              Presented as contemplative ideals and directional qualities of development — not supernatural promises.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matangiSiddhis.map((s, i) => (
              <RitualCard key={s.name} title={s.name} variant="emerald" delay={i * 0.07}>
                <p className="text-ivory/55 text-sm">{s.desc}</p>
              </RitualCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mahavidya constellation ──────────────────────── */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-label text-gold/50 mb-4">Divine Context</p>
            <h2 className="font-display text-3xl text-ivory/90 font-light">The Ten Mahavidyas</h2>
            <p className="font-display text-base text-ivory/40 italic mt-4 max-w-xl mx-auto">
              Matangi is the ninth — the penultimate transgression before the final integration.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-3xl mx-auto">
            {MAHAVIDYAS.map((m, i) => (
              <ScrollReveal key={m.n} delay={i * 0.04}>
                <div className={`p-4 rounded-sm text-center border transition-all duration-300 ${
                  m.active
                    ? "border-emerald-600/50 bg-emerald-950/30 shadow-emerald-glow"
                    : "border-white/[0.06] bg-white/[0.02]"
                }`}>
                  <div className={`font-display text-2xl mb-1 ${m.active ? "text-emerald-300" : "text-ivory/25"}`}>{m.n}</div>
                  <div className={`font-mono text-[10px] tracking-wider leading-tight mb-1 ${m.active ? "text-emerald-300" : "text-ivory/50"}`}>{m.name}</div>
                  <div className="text-ivory/25 text-[9px] font-mono leading-tight">{m.domain}</div>
                  {m.active && <div className="mt-1.5 text-[9px] font-mono text-emerald-500 tracking-widest">◈ YOU ARE HERE</div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dasa Mahavidya Philosophy ─────────────────────── */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="section-container">
          <ScrollReveal className="text-center mb-14">
            <p className="text-label text-gold/50 mb-4">Tantric Context</p>
            <h2 className="font-display text-3xl text-ivory/90 font-light">Daśa Mahāvidyā — The Ten Disciplines</h2>
            <p className="font-display text-base text-ivory/40 italic mt-4 max-w-2xl mx-auto">
              {dasaMahavidyaIntro}
            </p>
          </ScrollReveal>

          {/* Śiva-Śaktī teaching */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {[shivaShaktiTeaching, tantraTeaching].map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 0.1}>
                <div className="card-parchment rounded-sm p-6 hover:border-gold/20 transition-all duration-400 h-full">
                  <h3 className="font-display text-xl text-gold/80 mb-4">{t.title}</h3>
                  {t.body.split("\n\n").map((p, j) => (
                    <p key={j} className="font-display text-sm text-ivory/60 italic leading-relaxed mb-3">{p}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Vaikhari teaching */}
          <ScrollReveal className="mb-10">
            <div className="glass-emerald rounded-sm p-6 md:p-8">
              <h3 className="font-display text-2xl text-emerald-300 mb-5">{matangiVaikhari.title}</h3>
              {matangiVaikhari.body.split("\n\n").map((p, i) => (
                <p key={i} className="font-display text-sm text-ivory/65 italic leading-relaxed mb-3">{p}</p>
              ))}
            </div>
          </ScrollReveal>

          {/* Four stages of sound */}
          <ScrollReveal className="mb-10">
            <div className="text-label text-ivory/25 mb-4 text-center">THE FOUR STAGES OF SOUND</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { stage: "Parā",      num: "I",   desc: "Transcendent vibration beyond perception — the absolute before any manifestation", color: "border-violet-500/30 text-violet-300" },
                { stage: "Paśyantī", num: "II",  desc: "The seeing stage — where intention forms and the impulse to speak arises", color: "border-blue-500/30 text-blue-300" },
                { stage: "Madhyamā", num: "III", desc: "The middle stage — inner speech, thought forming before articulation", color: "border-emerald-600/30 text-emerald-300" },
                { stage: "Vaikharī", num: "IV",  desc: "The delivered speech — Mātaṅgī's domain — sound fully materialized in time and space", color: "border-gold/30 text-gold" },
              ].map(s => (
                <div key={s.stage} className={`p-4 border ${s.color.split(" ")[0]} bg-black/30 rounded-sm text-center`}>
                  <div className="font-display text-2xl mb-1 text-white/20">{s.num}</div>
                  <div className={`font-display text-lg mb-2 ${s.color.split(" ")[1]}`}>{s.stage}</div>
                  <p className="text-ivory/40 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Purusharthas */}
          <ScrollReveal className="mb-10">
            <div className="text-label text-ivory/25 mb-6 text-center">THE FOUR PURUṢĀRTHAS</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {purushaRthas.map((p, i) => (
                <RitualCard key={p.name} title={p.name} subtitle={p.Sanskrit}
                  variant={(["emerald","gold","violet","parchment"] as const)[i]} delay={i * 0.08}>
                  <p className="text-ivory/55 text-sm mb-2">{p.meaning}</p>
                  <p className="text-ivory/40 text-xs italic leading-relaxed">{p.note}</p>
                </RitualCard>
              ))}
            </div>
          </ScrollReveal>

          {/* Origin of ten goddesses */}
          <ScrollReveal>
            <div className="glass rounded-sm p-6 md:p-8">
              <div className="text-label text-gold/40 mb-3">Origin of the Daśa Mahāvidyās</div>
              {dasaMahavidyaOrigin.split("\n\n").map((p, i) => (
                <p key={i} className="font-display text-sm text-ivory/55 italic leading-relaxed mb-3">{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 border-t border-white/[0.04] text-center">
        <div className="section-container">
          <ScrollReveal>
            <p className="font-display text-xl text-ivory/50 italic mb-8">
              Understanding who she is prepares you to receive what she teaches.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/philosophy" className="btn-ritual">Explore Teachings</Link>
              <Link href="/mantras" className="btn-ritual-emerald btn-ritual">Begin Practice</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
