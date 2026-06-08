// ═══════════════════════════════════════════════════════════
// JOURNAL PROMPTS — Contemplative reflection framework
// ═══════════════════════════════════════════════════════════

export interface JournalPrompt {
  id: string;
  title: string;
  category: "Speech" | "Creativity" | "Wisdom" | "Truth" | "Listening" | "Threshold";
  depth: "Surface" | "Deep" | "Transformative";
  prompt: string;
  subPrompts: string[];
  matangiContext: string;
  duration: string;
}

export const journalPrompts: JournalPrompt[] = [
  {
    id: "unspoken-truth",
    title: "The Unspoken Truth",
    category: "Speech",
    depth: "Deep",
    prompt: "Write about one truth you have been circling without saying directly. Not to someone specific — to the silence itself.",
    subPrompts: [
      "What is the truth you have been approaching from every angle except straight on?",
      "What is the cost of not having said it?",
      "What would change if you said it? What are you afraid would change?",
      "Is the fear of what would change the reason you haven't said it, or is there something else?",
    ],
    matangiContext: "Matangi governs the speech that exists before self-censorship. This exercise works with the gap between what is known and what is expressed.",
    duration: "20–30 minutes",
  },
  {
    id: "discarded-knowing",
    title: "The Knowledge You Dismissed",
    category: "Wisdom",
    depth: "Deep",
    prompt: "Write about something you know that arrived through a channel you don't trust. The dream. The impulse. The source society considers unreliable. The knowing that bypassed the authorized route.",
    subPrompts: [
      "What source of knowing do you most often dismiss? Why?",
      "What has arrived through that channel that turned out to be true?",
      "What are you currently knowing through that channel that you haven't allowed yourself to fully hold?",
    ],
    matangiContext: "The Chandali doctrine: wisdom flows through the marginal, the excluded, the supposedly contaminated. What knowledge has been suppressed in you by the principle of legitimate channels?",
    duration: "25–35 minutes",
  },
  {
    id: "leftover-creative",
    title: "The Abandoned Work",
    category: "Creativity",
    depth: "Surface",
    prompt: "Write about a creative project you abandoned, or an idea you discarded. Treat it as the ucchishta offering — the leftover that carries the most charge.",
    subPrompts: [
      "What was the creative impulse behind it, before it became something you were trying to produce?",
      "Why did you abandon or dismiss it?",
      "If you trusted that the abandoned thing contained exactly what you needed, what would you find in it?",
      "What is the fragment of that project that most deserves to survive?",
    ],
    matangiContext: "The ucchishta doctrine applied to creative work: the discarded contains the sacred charge of real creative impulse. The abandoned project may hold what the completed project lost.",
    duration: "20–30 minutes",
  },
  {
    id: "listening-inventory",
    title: "What You Actually Heard",
    category: "Listening",
    depth: "Surface",
    prompt: "Recall a recent conversation. Write not what was said but what was not said — the subtext, the frequency beneath the words, what you perceived but filtered out in the moment.",
    subPrompts: [
      "What did you hear that you decided not to address? Why?",
      "What did you feel the other person was actually asking for or communicating, beneath the literal content?",
      "What would have changed if you had responded to the underlying transmission rather than the surface words?",
    ],
    matangiContext: "Karna-Matangi governs the hearing beneath words. This exercise trains the retrospective version of that listening — discovering in reflection what was available in the moment but not fully received.",
    duration: "15–20 minutes",
  },
  {
    id: "speech-audit",
    title: "The Audit of Your Speech",
    category: "Speech",
    depth: "Surface",
    prompt: "Review today's (or yesterday's) speaking honestly. Where did your words align with your actual knowing? Where did they diverge?",
    subPrompts: [
      "When did you say something you didn't fully believe? What was the actual truth behind it?",
      "When did you speak from your most genuine understanding? What made that possible?",
      "What did you not say that you knew? What prevented the saying?",
      "If your speech perfectly reflected your actual understanding today, what would have been different?",
    ],
    matangiContext: "Vak Siddhi practice includes the regular audit of one's speech — not as self-judgment but as calibration, tracking the gap between inner knowing and outer expression.",
    duration: "20–25 minutes",
  },
  {
    id: "threshold-question",
    title: "The Question at the Threshold",
    category: "Threshold",
    depth: "Transformative",
    prompt: "Write about the question you are standing at the edge of — the one you are circling without quite entering. The liminal question. The one that, if you truly entered it, would change something.",
    subPrompts: [
      "What is the question you are not quite asking?",
      "What would you need to surrender to fully enter that question?",
      "What are you afraid the answer might be?",
      "What would be possible on the other side of having asked it completely?",
    ],
    matangiContext: "Matangi's domain is the threshold — the liminal space between states. The questions that live at the threshold are her particular province. This exercise approaches her through the form of the unanswered question.",
    duration: "30–40 minutes",
  },
  {
    id: "forbidden-creativity",
    title: "The Work You Were Not Supposed to Make",
    category: "Creativity",
    depth: "Transformative",
    prompt: "Write about a piece of creative work you want to make but have told yourself you shouldn't. Not for lack of skill — for other reasons. Because it's too honest. Because it would reveal something. Because someone might be hurt or offended or frightened.",
    subPrompts: [
      "What is the creative work you have been suppressing? Describe it as clearly as you can.",
      "Who is the arbiter you are deferring to? Whose permission are you waiting for?",
      "What is the worst realistic outcome of making this work?",
      "What is the cost of not making it?",
    ],
    matangiContext: "The transgressive creative act as the most accurate prayer. Matangi is the patron of the work you were told not to make. This journal entry is not permission — she is asking you to find out whether you can give yourself permission.",
    duration: "30–40 minutes",
  },
  {
    id: "noise-wisdom",
    title: "The Wisdom in the Noise",
    category: "Listening",
    depth: "Surface",
    prompt: "For 10 minutes before this exercise, listen to the environmental sounds around you without naming them. Then write about what was there.",
    subPrompts: [
      "What arrived in the listening that you would normally have filtered out?",
      "Was there anything in the ambient sound that felt like information, however irrational that seems?",
      "What does it feel like to hold the full acoustic environment as transmission rather than background?",
    ],
    matangiContext: "Noise is untrained prophecy. Matangi's practice includes learning to receive from the full spectrum of the sensory environment, not just from clearly meaningful signals.",
    duration: "10 min listening + 20 min writing",
  },
  {
    id: "name-of-your-creativity",
    title: "What Your Creativity Is Actually About",
    category: "Creativity",
    depth: "Deep",
    prompt: "Beneath your creative work — all of it — what is it actually about? Not the subjects or forms, but the underlying question or obsession or wound or wonder that drives everything you make.",
    subPrompts: [
      "If all your creative work were asking a single question, what would it be?",
      "If all your creative work were healing a single wound, what would it be?",
      "If all your creative work were celebrating a single quality of existence, what would it be?",
      "Who would you be if you no longer needed to make things?",
    ],
    matangiContext: "Matangi governs the creative impulse before it becomes a project — the originary question or need that generates all the specific works. This exercise traces the thread back to its source.",
    duration: "35–45 minutes",
  },
  {
    id: "truth-you-know",
    title: "A Truth You Have Not Given Yourself Permission to Know",
    category: "Truth",
    depth: "Transformative",
    prompt: "Write about something you know but haven't allowed yourself to fully know. The thing you keep almost-knowing. The understanding that keeps surfacing and being submerged.",
    subPrompts: [
      "What is it?",
      "How long have you been almost-knowing it?",
      "What would change if you allowed it to be fully known?",
      "What is the cost of the almost-knowing — of perpetually not-quite arriving at this truth?",
    ],
    matangiContext: "Matangi is the goddess of the knowledge that exists but hasn't been fully received — the insight waiting in the threshold between almost-known and known. This exercise is an invitation to cross that threshold.",
    duration: "30–40 minutes",
  },
];

export const journalCategories = ["All", "Speech", "Creativity", "Wisdom", "Truth", "Listening", "Threshold"] as const;
export const journalDepths = ["All", "Surface", "Deep", "Transformative"] as const;
