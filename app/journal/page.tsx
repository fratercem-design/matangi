"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { journalPrompts, journalCategories, journalDepths } from "@/lib/journal-prompts";
import { Save, Trash2, BookOpen, ChevronDown, ChevronUp, RefreshCw } from "lucide-react";

interface Entry {
  id: string;
  promptId: string;
  promptTitle: string;
  content: string;
  timestamp: number;
}

const STORAGE_KEY = "matangi_journal";

function loadEntries(): Entry[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]"); } catch { return []; }
}
function saveEntries(entries: Entry[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); } catch {}
}

// ── Prompt card ───────────────────────────────────────────────
function PromptCard({ prompt, onWrite, index }: {
  prompt: typeof journalPrompts[0];
  onWrite: (p: typeof journalPrompts[0]) => void;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const DEPTH_STYLES = {
    Surface:      "border-emerald-600/30 text-emerald-400/80",
    Deep:         "border-gold/30 text-gold/80",
    Transformative:"border-violet-500/30 text-violet-400/80",
  };
  const CAT_ICONS = { Speech:"⊕", Creativity:"✦", Wisdom:"◈", Truth:"⬡", Listening:"◉", Threshold:"⟁" } as const;

  return (
    <ScrollReveal delay={index * 0.06}>
      <div className="card-parchment rounded-sm overflow-hidden hover:border-gold/20 transition-all duration-500">
        <div className="p-5 md:p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm border border-white/[0.07] flex items-center justify-center text-gold/40 shrink-0">
              <span className="text-base">{CAT_ICONS[prompt.category as keyof typeof CAT_ICONS] ?? "◈"}</span>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-label text-ivory/30">{prompt.category}</span>
                <span className={`text-label px-2 py-0.5 border rounded-sm ${DEPTH_STYLES[prompt.depth]}`}>
                  {prompt.depth}
                </span>
                <span className="text-label text-ivory/20">{prompt.duration}</span>
              </div>
              <h3 className="font-display text-lg text-ivory/90">{prompt.title}</h3>
            </div>
            <button onClick={() => setExpanded(!expanded)}
              className="text-ivory/30 hover:text-ivory/60 p-1 transition-colors">
              {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>

          <p className="font-display text-base text-ivory/60 italic mt-3 leading-relaxed">{prompt.prompt}</p>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }}>
              <div className="px-5 md:px-6 pb-6 border-t border-white/[0.05] pt-4 space-y-4">
                {/* Sub-prompts */}
                <div>
                  <div className="text-label text-ivory/25 mb-3">Reflection Questions</div>
                  <ul className="space-y-2">
                    {prompt.subPrompts.map((sp, i) => (
                      <li key={i} className="flex gap-3 text-sm text-ivory/50">
                        <span className="text-gold/40 shrink-0 mt-0.5">◈</span> {sp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Matangi context */}
                <div className="glass-emerald rounded-sm p-4">
                  <div className="text-label text-emerald-500/50 mb-1">Matangi Context</div>
                  <p className="text-ivory/50 text-xs leading-relaxed">{prompt.matangiContext}</p>
                </div>

                <button onClick={() => onWrite(prompt)} className="btn-ritual-emerald btn-ritual text-xs gap-2">
                  <BookOpen size={11} /> WRITE TO THIS PROMPT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

// ── Writing interface ─────────────────────────────────────────
function WritingInterface({ prompt, onSave, onClose }: {
  prompt: typeof journalPrompts[0];
  onSave: (content: string) => void;
  onClose: () => void;
}) {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!text.trim()) return;
    onSave(text);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const words = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <motion.div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/[0.06]">
        <div>
          <div className="text-label text-ivory/25 mb-0.5">{prompt.category} · {prompt.depth}</div>
          <h2 className="font-display text-xl text-ivory/90">{prompt.title}</h2>
        </div>
        <div className="flex gap-3 items-center">
          <span className="text-label text-ivory/20">{words} words</span>
          <button onClick={handleSave}
            className={`btn-ritual gap-1.5 text-xs ${saved ? "border-emerald-600/60 text-emerald-400" : ""}`}>
            <Save size={11} /> {saved ? "SAVED" : "SAVE"}
          </button>
          <button onClick={onClose} className="text-label text-ivory/30 hover:text-ivory/60 transition-colors border border-white/10 px-3 py-2 rounded-sm">
            CLOSE
          </button>
        </div>
      </div>

      {/* Prompt context */}
      <div className="px-4 md:px-8 py-4 border-b border-white/[0.04] bg-white/[0.01]">
        <p className="font-display text-base text-ivory/50 italic max-w-3xl">{prompt.prompt}</p>
      </div>

      {/* Writing area */}
      <div className="flex-1 p-4 md:p-8 overflow-auto">
        <textarea
          autoFocus
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Begin writing here. The silence is ready to receive..."
          className="w-full h-full min-h-[400px] resize-none bg-transparent font-display text-lg text-ivory/80
                     placeholder-ivory/15 outline-none leading-loose border-none"
          style={{ caretColor: "#b8962e" }}
        />
      </div>

      {/* Word count bar */}
      <div className="px-4 md:px-8 py-3 border-t border-white/[0.04] flex items-center justify-between">
        <div className="flex gap-1">
          {[50, 150, 300, 500].map(w => (
            <div key={w} className={`h-1 w-8 rounded-full transition-all duration-300 ${
              words >= w ? "bg-gold/60" : "bg-white/10"
            }`} />
          ))}
        </div>
        <span className="text-label text-ivory/20">{words} words written</span>
      </div>
    </motion.div>
  );
}

export default function JournalPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [writing, setWriting] = useState<typeof journalPrompts[0] | null>(null);
  const [cat, setCat] = useState<string>("All");
  const [depth, setDepth] = useState<string>("All");
  const [showEntries, setShowEntries] = useState(false);
  const [randomPrompt, setRandomPrompt] = useState<typeof journalPrompts[0] | null>(null);

  useEffect(() => { setEntries(loadEntries()); }, []);

  const handleSave = (content: string) => {
    if (!writing) return;
    const entry: Entry = {
      id: Date.now().toString(),
      promptId: writing.id,
      promptTitle: writing.title,
      content,
      timestamp: Date.now(),
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    saveEntries(updated);
  };

  const deleteEntry = (id: string) => {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    saveEntries(updated);
  };

  const filtered = journalPrompts.filter(p =>
    (cat === "All" || p.category === cat) &&
    (depth === "All" || p.depth === depth)
  );

  const pickRandom = () => {
    setRandomPrompt(filtered[Math.floor(Math.random() * filtered.length)]);
  };

  return (
    <div className="page-enter">
      <PageHero
        label="Reflection & Contemplation"
        title="The"
        titleAccent="Journal"
        subtitle="Ten contemplative writing prompts for cultivating authentic speech, creative expression, and genuine self-knowing"
        variant="gold"
        geometry
      />

      <section className="section-padding">
        <div className="section-container">
          {/* Random prompt feature */}
          <ScrollReveal>
            <div className="glass-gold rounded-sm p-5 mb-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-label text-gold/50 mb-1">Random Prompt</div>
                  {randomPrompt ? (
                    <h3 className="font-display text-lg text-ivory/90">{randomPrompt.title}</h3>
                  ) : (
                    <p className="font-display text-base text-ivory/50 italic">
                      Let the temple choose your practice for today.
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button onClick={pickRandom} className="btn-ritual gap-1.5 text-xs">
                    <RefreshCw size={10} /> DRAW PROMPT
                  </button>
                  {randomPrompt && (
                    <button onClick={() => setWriting(randomPrompt)} className="btn-ritual-emerald btn-ritual text-xs">
                      WRITE →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Filters */}
          <ScrollReveal className="space-y-3 mb-12">
            <div className="flex flex-wrap gap-2">
              {journalCategories.map(c => (
                <button key={c} onClick={() => setCat(c)}
                  className={`text-label px-3 py-1.5 border rounded-sm transition-all duration-300 ${
                    cat === c ? "border-gold/60 text-gold bg-gold/5" : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                  }`}>{c}</button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {journalDepths.map(d => (
                <button key={d} onClick={() => setDepth(d)}
                  className={`text-label px-3 py-1.5 border rounded-sm transition-all duration-300 ${
                    depth === d ? "border-emerald-600/60 text-emerald-400 bg-emerald-950/20" : "border-white/10 text-ivory/40 hover:border-white/25 hover:text-ivory/70"
                  }`}>{d}</button>
              ))}
            </div>
          </ScrollReveal>

          {/* Prompts */}
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {filtered.map((p, i) => (
              <PromptCard key={p.id} prompt={p} onWrite={setWriting} index={i} />
            ))}
          </div>

          {/* Saved entries */}
          {entries.length > 0 && (
            <div className="mt-20 max-w-4xl mx-auto">
              <ScrollReveal>
                <button onClick={() => setShowEntries(!showEntries)}
                  className="flex items-center gap-3 w-full text-left py-4 border-t border-white/[0.06]">
                  <span className="font-display text-xl text-ivory/70">Your Entries ({entries.length})</span>
                  {showEntries ? <ChevronUp size={16} className="text-ivory/40" /> : <ChevronDown size={16} className="text-ivory/40" />}
                </button>
              </ScrollReveal>

              <AnimatePresence>
                {showEntries && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}>
                    <div className="space-y-4 pb-8">
                      {entries.map(entry => (
                        <div key={entry.id} className="glass rounded-sm p-5">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <h4 className="font-display text-base text-ivory/80">{entry.promptTitle}</h4>
                              <p className="text-label text-ivory/25 mt-0.5">
                                {new Date(entry.timestamp).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                              </p>
                            </div>
                            <button onClick={() => deleteEntry(entry.id)}
                              className="p-1.5 text-ivory/20 hover:text-red-400/60 transition-colors">
                              <Trash2 size={12} />
                            </button>
                          </div>
                          <p className="font-display text-sm text-ivory/50 italic leading-relaxed line-clamp-4">
                            {entry.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {writing && (
          <WritingInterface prompt={writing} onSave={handleSave} onClose={() => setWriting(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
