// ═══════════════════════════════════════════════════════════
// MATANGI MANTRAS — Sacred sound practices
// Presented as devotional and contemplative — no supernatural claims
// ═══════════════════════════════════════════════════════════

export interface Mantra {
  id: string;
  name: string;
  type: "Moola" | "Bija" | "Gayatri" | "Vidya" | "Stuti";
  level: "Accessible" | "Intermediate" | "Deep";
  sanskrit: string;
  transliteration: string;
  wordByWord: { word: string; meaning: string }[];
  meaning: string;
  purpose: string;
  practice: string;
  repetitions: number;
  timing?: string;
  note?: string;
}

export const mantras: Mantra[] = [
  {
    id: "moola",
    name: "Matangi Moola Mantra",
    type: "Moola",
    level: "Accessible",
    sanskrit: "ॐ ह्रीं ऐं भगमालिन्यै नमः",
    transliteration: "Om Hreem Aim Bhagamalinyai Namaha",
    wordByWord: [
      { word: "ॐ (Om)",             meaning: "The primordial sound — the resonance underlying all existence" },
      { word: "ह्रीं (Hreem)",      meaning: "Bija of Maya — the seed of the great veiling power, also of the heart's truth" },
      { word: "ऐं (Aim)",           meaning: "Bija of Saraswati and Matangi — the seed sound of speech and creative intelligence" },
      { word: "भगमालिन्यै",        meaning: "To the garland-wearer — she who wears the garland of manifestation" },
      { word: "नमः (Namaha)",       meaning: "I bow — I surrender the constructed self to the greater intelligence" },
    ],
    meaning: "Salutation to the garland-wearer, invoked through the seed sounds of the heart's truth and creative intelligence.",
    purpose: "The foundational mantra for Matangi practice. Establishes the energetic connection, begins the process of aligning one's own speech with the deeper current she governs.",
    practice: "108 repetitions on mala beads. Allow each repetition to sink rather than rushing through. The quality of attention matters more than the quantity.",
    repetitions: 108,
    timing: "Dawn or before creative work",
  },
  {
    id: "bija",
    name: "Matangi Bija Mantra",
    type: "Bija",
    level: "Accessible",
    sanskrit: "ॐ ह्रीं मातङ्ग्यै फट् स्वाहा",
    transliteration: "Om Hreem Matangyai Phat Svaha",
    wordByWord: [
      { word: "ॐ (Om)",       meaning: "Primordial resonance" },
      { word: "ह्रीं (Hreem)",meaning: "Seed of the heart's truth and transformative power" },
      { word: "मातङ्ग्यै",   meaning: "To Matangi — the outcaste goddess of speech" },
      { word: "फट् (Phat)",   meaning: "The cutting sound — severs obstacles, clears the channel" },
      { word: "स्वाहा (Svaha)",meaning: "So be it — the offering into the sacred fire of transformation" },
    ],
    meaning: "Invoking Matangi through the seed sounds with the cutting force of Phat and the offering-seal of Svaha.",
    purpose: "For clearing obstacles in creative expression, overcoming the inner censor, cutting through the voices that suppress authentic speech.",
    practice: "108 repetitions. Can be used before difficult conversations, creative sessions, or any time the natural voice has been suppressed.",
    repetitions: 108,
    timing: "Tuesday or when facing obstacles to expression",
  },
  {
    id: "ucchishta",
    name: "Ucchishta-Matangini Mantra",
    type: "Vidya",
    level: "Intermediate",
    sanskrit: "ॐ श्रीं ह्रीं क्लीं उच्छिष्टचाण्डालिन्यै नमः",
    transliteration: "Om Shreem Hreem Kleem Ucchishta-Chandalinyai Namaha",
    wordByWord: [
      { word: "श्रीं (Shreem)", meaning: "Bija of Lakshmi — the seed of abundance and auspiciousness" },
      { word: "ह्रीं (Hreem)",  meaning: "Bija of Maya — transformative power" },
      { word: "क्लीं (Kleem)",  meaning: "Bija of Kali and Krishna — the seed of attraction, desire, and transformation" },
      { word: "उच्छिष्ट",      meaning: "Leftover, touched, the used — the sacred in the discarded" },
      { word: "चाण्डालिन्यै", meaning: "To the Chandali — the outcast feminine, she of the threshold" },
    ],
    meaning: "Invoking the outcast form who accepts the leftover through the three great Shakti bija seeds.",
    purpose: "For working with what has been rejected — in oneself, in one's creative work, in one's understanding. For transforming shame about unconventional knowing.",
    practice: "108 repetitions. Best practiced at night or during liminal times. Hold a sense of offering what you consider 'leftover' in yourself.",
    repetitions: 108,
    timing: "Dark moon, midnight, liminal hours",
    note: "This mantra works directly with the Ucchishta doctrine — the sacred in the touched and used. Approach with the understanding that what you have dismissed about yourself may carry the most important transmission.",
  },
  {
    id: "gayatri",
    name: "Matangi Gayatri",
    type: "Gayatri",
    level: "Accessible",
    sanskrit: "ॐ शुकपुत्र्यै विद्महे\nसंगीतप्रियायै धीमहि।\nतन्नो मातङ्गी प्रचोदयात्॥",
    transliteration: "Om Shukaputryai Vidmahe\nSangeetapriyayai Dheemahi.\nTanno Matangi Prachodayat.",
    wordByWord: [
      { word: "शुकपुत्र्यै",    meaning: "She who is associated with the parrot (the honest echoing of truth)" },
      { word: "विद्महे",        meaning: "We come to know, we seek to understand" },
      { word: "संगीतप्रियायै",  meaning: "She who loves music above formality" },
      { word: "धीमहि",          meaning: "We meditate, we hold in focused awareness" },
      { word: "प्रचोदयात्",      meaning: "May she illuminate, may she impel us toward understanding" },
    ],
    meaning: "We seek to know the one associated with the parrot's honest speech. We meditate on she who loves music. May Matangi illuminate our understanding.",
    purpose: "For opening the creative channel. Specifically beautiful for artists, musicians, writers, speakers — anyone seeking alignment between their expression and their deeper knowing.",
    practice: "108 repetitions at dawn. The Gayatri form is traditionally associated with illumination — bringing light to what was obscured.",
    repetitions: 108,
    timing: "Dawn, before creative practice",
  },
  {
    id: "vak-siddhi",
    name: "Vak Siddhi Mantra",
    type: "Vidya",
    level: "Deep",
    sanskrit: "ॐ ऐं ह्रीं श्रीं राजमातङ्ग्यै नमः",
    transliteration: "Om Aim Hreem Shreem Rajamatangyai Namaha",
    wordByWord: [
      { word: "ऐं (Aim)",     meaning: "Saraswati bija — seed of speech and creative intelligence" },
      { word: "ह्रीं (Hreem)",meaning: "Maya bija — transformative power" },
      { word: "श्रीं (Shreem)",meaning: "Lakshmi bija — seed of abundance and sovereignty" },
      { word: "राजमातङ्ग्यै", meaning: "To the Royal Matangi — the sovereign form" },
    ],
    meaning: "Invoking the royal sovereign form through the triple bija sequence of creative intelligence, transformation, and abundance.",
    purpose: "For developing the authority of authentic speech — the kind that moves people not through manipulation but through the weight of genuine truth.",
    practice: "1008 repetitions over 40 consecutive days for deep practice, or 108 before any public speaking or important creative work.",
    repetitions: 108,
    timing: "Before public speaking, performance, or important creative work",
    note: "The 40-day practice creates a sustained shift in the quality of one's speech. Practitioners report that their words begin to carry a different weight — not louder, but more real.",
  },
  {
    id: "chamunda",
    name: "Matangi-Chamunda Vidya",
    type: "Vidya",
    level: "Deep",
    sanskrit: "ॐ ह्रीं मातङ्गि चामुण्डे क्रीं स्वाहा",
    transliteration: "Om Hreem Matangi Chamunde Kreem Svaha",
    wordByWord: [
      { word: "चामुण्डे",    meaning: "Chamunda — the fierce reality-piercing aspect" },
      { word: "क्रीं (Kreem)",meaning: "Kali bija — the seed of radical transformation and time" },
    ],
    meaning: "Invoking Matangi in her fiercest aspect — the one that dissolves all false constructions — through the Kali bija.",
    purpose: "For deep work — confronting the places where conventional thinking has calcified, where the 'purity rules' of one's own mind prevent genuine knowing.",
    practice: "108 repetitions. This mantra invites intensity — use it when gentler practices have reached their limit.",
    repetitions: 108,
    timing: "Dark moon or intense creative/personal work",
    note: "The Chamunda aspect is fierce because reality is fierce. This mantra is for practitioners who are ready to encounter what has been suppressed without flinching.",
  },
];

export const breathingGuide = [
  { phase: "Inhale",        beats: 4, instruction: "Draw in as you receive the sound" },
  { phase: "Hold",          beats: 4, instruction: "Let the vibration saturate the body" },
  { phase: "Exhale slowly", beats: 6, instruction: "Release as sacred offering" },
  { phase: "Rest",          beats: 2, instruction: "Dwell in the silence between words" },
];

export const mantraLevels = ["All", "Accessible", "Intermediate", "Deep"] as const;
