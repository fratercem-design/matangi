// ═══════════════════════════════════════════════════════════
// MATANGI ORACLE — Readings, Transmissions, Visual Frames
// ═══════════════════════════════════════════════════════════

export type OracleTheme =
  | "speech"
  | "threshold"
  | "inversion"
  | "silence"
  | "forbidden"
  | "music"
  | "the-wild"
  | "vak"
  | "leftover"
  | "night"
  | "parrot"
  | "emerald";

export interface OracleCard {
  id: string;
  theme: OracleTheme;
  title: string;
  symbol: string;
  symbolSanskrit: string;
  number: number; // 1–54
  upright: {
    headline: string;
    body: string;
    shadow: string; // the hard truth within the reading
  };
  reversed: {
    headline: string;
    body: string;
  };
  mantraFragment: string;
  mantraFragmentDev: string;
  colorPrimary: string;
  colorSecondary: string;
  artwork: OracleArtwork;
}

export interface OracleArtwork {
  variant:
    | "veena"
    | "parrot"
    | "crossroads"
    | "yantra"
    | "crown"
    | "flame"
    | "river"
    | "eye"
    | "skull"
    | "lotus"
    | "serpent"
    | "moon"
    | "forest"
    | "temple"
    | "void";
  palette: [string, string, string, string];
  motif: string; // one-word symbol for the generative art
}

export const oracleCards: OracleCard[] = [
  {
    id: "vak-awakens",
    theme: "vak",
    title: "Vāk Awakens",
    symbol: "◈",
    symbolSanskrit: "वाक्",
    number: 1,
    upright: {
      headline: "The word you have been holding is ready to be spoken.",
      body: "Something has been forming in you for a long time — gathering shape, gaining weight. Matangi does not deal in the perfectly articulated. She deals in the true. The reading says: the perfectly chosen moment never comes. Speak from the imperfect moment that is right now. The word does not need to be beautiful. It needs to be real.",
      shadow: "Ask yourself what you are protecting by staying silent. Sometimes silence is wisdom. Sometimes it is the ego dressed as wisdom.",
    },
    reversed: {
      headline: "Words have been spoken without truth behind them.",
      body: "Something was said that you did not fully mean, or something true was said in a way that weaponized it. Return to the intention behind the expression. The channel is open — what flows through it is your responsibility.",
    },
    mantraFragment: "ॐ ऐं नमः",
    mantraFragmentDev: "oṃ aiṃ namaḥ",
    colorPrimary: "#2d6a4f",
    colorSecondary: "#b8962e",
    artwork: {
      variant: "veena",
      palette: ["#2d6a4f", "#52b788", "#b8962e", "#0a0a0f"],
      motif: "string",
    },
  },
  {
    id: "ucchishta-offering",
    theme: "leftover",
    title: "The Ucchiṣṭa",
    symbol: "⊕",
    symbolSanskrit: "उच्छिष्ट",
    number: 2,
    upright: {
      headline: "What you considered worthless is the actual offering.",
      body: "Matangi accepts the leftover — the touched, the used, the partially consumed. The reading points directly at whatever you have dismissed about yourself or your work: the abandoned project, the suppressed knowing, the unfinished thing you have been ashamed of. She is asking for exactly that. Not your best. Your most honest.",
      shadow: "The dismissal of your own experience is a kind of self-vandalism. What has been lived through carries charge that pristine, untested ideas never have.",
    },
    reversed: {
      headline: "Clinging to what should be released.",
      body: "Sometimes the leftover should remain past. Discrimination: what is worth reclaiming and what has genuinely served its purpose. Not everything discarded is treasure. Some things are simply finished.",
    },
    mantraFragment: "ॐ श्रीं ह्रीं क्लीं",
    mantraFragmentDev: "oṃ śrīṃ hrīṃ klīṃ",
    colorPrimary: "#6b46c1",
    colorSecondary: "#b8962e",
    artwork: {
      variant: "skull",
      palette: ["#6b46c1", "#9d77f5", "#b8962e", "#0a0a0f"],
      motif: "vessel",
    },
  },
  {
    id: "crossroads-queen",
    theme: "threshold",
    title: "The Crossroads",
    symbol: "⟁",
    symbolSanskrit: "संधि",
    number: 3,
    upright: {
      headline: "You are at the center point. Not lost — presiding.",
      body: "Matangi stands at crossroads at midnight, not because she is between destinations but because the crossroads is itself a location — a place where all paths arrive and the question of direction remains genuinely open. The reading says: you have reached a real threshold. The uncertainty is not a problem to solve. It is the exact condition in which her kind of knowing becomes available. Stay here a moment longer.",
      shadow: "The desire to resolve the uncertainty quickly may be the obstacle. Premature resolution forecloses the transmission that is available only in the unresolved.",
    },
    reversed: {
      headline: "Refusing the threshold.",
      body: "There is a crossing to be made and it is being deferred. The reasons feel legitimate — they usually do. The reading asks: what would have to be true for you to take the first step? And: is it actually true?",
    },
    mantraFragment: "ॐ ह्रीं मातङ्ग्यै",
    mantraFragmentDev: "oṃ hrīṃ mātaṃgyai",
    colorPrimary: "#991b1b",
    colorSecondary: "#b8962e",
    artwork: {
      variant: "crossroads",
      palette: ["#991b1b", "#d97706", "#b8962e", "#0a0a0f"],
      motif: "path",
    },
  },
  {
    id: "dark-saraswati",
    theme: "forbidden",
    title: "Dark Sarasvatī",
    symbol: "✦",
    symbolSanskrit: "श्यामा",
    number: 4,
    upright: {
      headline: "The knowledge you need did not arrive through approved channels.",
      body: "Sarasvatī sits on the white lotus of sanctioned learning. Matangi sits at the crossroads at midnight. They govern the same domain — knowledge, arts, speech — but they take radically different routes. This card appears when the wisdom you are receiving is coming through an unconventional source: a dream, an unexpected person, an overlooked experience. Do not disqualify it because of its provenance. The question is not where it came from. The question is whether it is true.",
      shadow: "Discernment remains essential. Not all unconventional knowledge is wisdom. Some of it is noise. Matangi does not exempt you from the requirement of judgment — she changes the criteria by which you judge.",
    },
    reversed: {
      headline: "Mistaking conventional authority for truth.",
      body: "Over-reliance on what has been authorized, certified, academically approved. There is legitimate knowledge there. But some essential thing is being missed because the search is limited to the sanctioned map.",
    },
    mantraFragment: "ॐ ऐं ह्रीं श्रीं",
    mantraFragmentDev: "oṃ aiṃ hrīṃ śrīṃ",
    colorPrimary: "#0d9488",
    colorSecondary: "#52b788",
    artwork: {
      variant: "eye",
      palette: ["#0d9488", "#14b8a6", "#052e16", "#b8962e"],
      motif: "sight",
    },
  },
  {
    id: "parrot-speaks",
    theme: "parrot",
    title: "The Parrot Speaks",
    symbol: "◉",
    symbolSanskrit: "शुक",
    number: 5,
    upright: {
      headline: "What you repeat is what you build.",
      body: "Matangi's parrot does not merely mimic — it recites. The distinction matters. In the Tantric understanding, repetition is not redundancy. It is the mechanism by which possibility becomes actuality. What have you been repeating? The narrative about what is impossible, or the vision of what is true? The parrot amplifies whatever it is given. This reading asks you to become conscious of what you are feeding the echo chamber of your own attention.",
      shadow: "What story about yourself have you been repeating so long it has calcified into fact? Matangi's parrot is loyal but not discriminating. It will amplify both truth and falsity with equal fidelity.",
    },
    reversed: {
      headline: "The repetition has become a trap.",
      body: "A mantra that once opened a door is now keeping you inside the room. Something that was useful has become automatic. Silence the parrot for a moment. What do you actually know, underneath the rehearsed narrative?",
    },
    mantraFragment: "ॐ शुकप्रियायै नमः",
    mantraFragmentDev: "oṃ śukapriyāyai namaḥ",
    colorPrimary: "#15803d",
    colorSecondary: "#fbbf24",
    artwork: {
      variant: "parrot",
      palette: ["#15803d", "#4ade80", "#fbbf24", "#0a0a0f"],
      motif: "echo",
    },
  },
  {
    id: "veena-silence",
    theme: "music",
    title: "Before the First Note",
    symbol: "⬡",
    symbolSanskrit: "वीणा",
    number: 6,
    upright: {
      headline: "The silence before you begin contains the complete work.",
      body: "Matangi holds the veena but this card appears in the moment before she plays. The strings are tuned. The hands are positioned. The full music is already present as potential. The reading points to something in your creative life or your inner life that is fully formed and waiting — not for improvement, but for the act of beginning. The preparation is complete. What remains is only the willingness to let it sound.",
      shadow: "Perfectionism is often the refusal to allow the thing to be what it is. At a certain point, continued preparation is avoidance dressed in the language of craft.",
    },
    reversed: {
      headline: "Beginning before ready.",
      body: "The impulse to act is real but the foundation is not yet stable. The music that pours out now will be technically competent but will not carry the charge that comes from true readiness. Return to the tuning. Spend a little more time with the silence.",
    },
    mantraFragment: "ॐ वीणावत्यै नमः",
    mantraFragmentDev: "oṃ vīṇāvatyai namaḥ",
    colorPrimary: "#1d4ed8",
    colorSecondary: "#93c5fd",
    artwork: {
      variant: "veena",
      palette: ["#1d4ed8", "#3b82f6", "#b8962e", "#0a0a0f"],
      motif: "string",
    },
  },
  {
    id: "emerald-flame",
    theme: "emerald",
    title: "The Emerald Flame",
    symbol: "◈",
    symbolSanskrit: "मरकत",
    number: 7,
    upright: {
      headline: "The green fire is not consuming. It is illuminating.",
      body: "Matangi's emerald is not the bright green of new growth — it is the deep, self-luminous green of the old forest, of things that have been alive so long they generate their own light. This card arrives when a creative or spiritual fire has reached the stage of self-sustaining luminescence. It no longer needs the constant fuel of external validation. Something in you has crossed the threshold from needing encouragement to simply being what it is.",
      shadow: "Self-sufficiency taken too far becomes isolation. The emerald flame that lights only its own interior illuminates nothing for the world.",
    },
    reversed: {
      headline: "The light is blocked, not absent.",
      body: "The capacity is fully present. Something is obscuring it — a belief, a habit, a relationship that no longer serves the luminosity. This is not about acquiring more. It is about removing the obstruction.",
    },
    mantraFragment: "ॐ मरकतश्यामायै नमः",
    mantraFragmentDev: "oṃ marakataśyāmāyai namaḥ",
    colorPrimary: "#065f46",
    colorSecondary: "#34d399",
    artwork: {
      variant: "flame",
      palette: ["#065f46", "#34d399", "#d97706", "#0a0a0f"],
      motif: "fire",
    },
  },
  {
    id: "river-of-sound",
    theme: "speech",
    title: "The River of Sound",
    symbol: "⊕",
    symbolSanskrit: "नाद",
    number: 8,
    upright: {
      headline: "You are not the speaker. You are the riverbank.",
      body: "In Tantric understanding, the great practitioner of speech does not manufacture words — she becomes available to what wants to be said. The river of Vāk flows through the practitioner the way a river flows through its banks: the banks give it form but do not generate the water. The reading asks: are you trying to produce the transmission, or are you learning to be the place it flows through?",
      shadow: "Surrender in creative practice is not the same as passivity. The riverbank is active — it holds the form. But it does not pretend to be the source.",
    },
    reversed: {
      headline: "Fighting the current.",
      body: "Something wants to flow and is being controlled too tightly. The attempt to manage the creative or communicative impulse into perfect safety is causing stagnation. Some things must be let through.",
    },
    mantraFragment: "ॐ ह्रीं नादरूपिण्यै नमः",
    mantraFragmentDev: "oṃ hrīṃ nādarūpiṇyai namaḥ",
    colorPrimary: "#0369a1",
    colorSecondary: "#38bdf8",
    artwork: {
      variant: "river",
      palette: ["#0369a1", "#38bdf8", "#2d6a4f", "#0a0a0f"],
      motif: "flow",
    },
  },
  {
    id: "noise-prophecy",
    theme: "the-wild",
    title: "The Noise Oracle",
    symbol: "⟁",
    symbolSanskrit: "घोष",
    number: 9,
    upright: {
      headline: "The answer is in the ambient. You are filtering it out.",
      body: "Matangi governs what the tradition calls the intelligence in the full acoustic environment — the overheard fragment, the song that plays at the exact moment, the random phrase that lands with the weight of a direct answer. The reading asks you to lower the threshold of what you count as signal. Stop waiting for the clear transmission and notice what is arriving in the noise around you right now. It has been there this whole time.",
      shadow: "There is a difference between prophetic attention and magical thinking. The practice is to receive more, not to hallucinate meaning into everything. Discernment remains.",
    },
    reversed: {
      headline: "Over-reading coincidence.",
      body: "The attention has become too charged — seeing oracle in everything, which paradoxically makes it harder to recognize the genuine moments of transmission. Return to the ordinary. Let the signal-to-noise ratio recalibrate.",
    },
    mantraFragment: "ॐ ह्रीं मातङ्गिन्यै नमः",
    mantraFragmentDev: "oṃ hrīṃ mātaṃginyai namaḥ",
    colorPrimary: "#7c3aed",
    colorSecondary: "#c4b5fd",
    artwork: {
      variant: "void",
      palette: ["#7c3aed", "#a78bfa", "#0a0a0f", "#1e1b4b"],
      motif: "wave",
    },
  },
  {
    id: "chandali-gate",
    theme: "inversion",
    title: "The Chandali Gate",
    symbol: "✦",
    symbolSanskrit: "चण्डाल",
    number: 10,
    upright: {
      headline: "The gate you were not supposed to enter is the right one.",
      body: "The Chandali lives outside the village boundary. She is the one who was excluded by the structures of power and purity — not because she is lesser, but because what she carries is too disruptive to the existing order. This card appears when the conventional path, the approved route, the sanctioned channel has run dry. It asks you to look at what you have been told to avoid, what has been socially marked as 'not for you' or 'not legitimate.' The transmission is there. The crossing is the practice.",
      shadow: "Transgression for its own sake is not wisdom. The Chandali crosses the boundary because truth is on the other side — not because crossing is inherently virtuous.",
    },
    reversed: {
      headline: "Mistaking the boundary for protection.",
      body: "Something is being kept out that actually needs to come in. A version of yourself, a way of knowing, a creative impulse — something has been refused entry. The boundary may have been appropriate once. The reading asks whether it still serves.",
    },
    mantraFragment: "ॐ उच्छिष्टचण्डालिन्यै नमः",
    mantraFragmentDev: "oṃ ucchiṣṭacaṇḍālinyai namaḥ",
    colorPrimary: "#9f1239",
    colorSecondary: "#fb7185",
    artwork: {
      variant: "temple",
      palette: ["#9f1239", "#fb7185", "#b8962e", "#0a0a0f"],
      motif: "gate",
    },
  },
  {
    id: "lunar-knowing",
    theme: "night",
    title: "The Crescent Hour",
    symbol: "◉",
    symbolSanskrit: "चन्द्र",
    number: 11,
    upright: {
      headline: "Between the dark and the light is where she lives.",
      body: "Matangi wears the crescent moon — not the full moon of complete illumination, nor the new moon of absolute dark. The crescent is the state of becoming, of the threshold between states, where the old form has partially dissolved and the new form has not yet fully coalesced. The reading honours a liminal time. What you are in the middle of is not a malfunction — it is the crescent phase. The light is growing. Trust the process that is not yet visible in full.",
      shadow: "Liminality can become a permanent residence if the crossing is never completed. At some point the crescent becomes the full moon. Endless becoming without arrival is its own trap.",
    },
    reversed: {
      headline: "Rushing the emergence.",
      body: "The crescent is being forced toward the full moon before its time. Something is pressuring a premature resolution. The natural timing of the emergence is wisdom. Protect it.",
    },
    mantraFragment: "ॐ शशिशेखरायै नमः",
    mantraFragmentDev: "oṃ śaśiśekharāyai namaḥ",
    colorPrimary: "#1e1b4b",
    colorSecondary: "#a5b4fc",
    artwork: {
      variant: "moon",
      palette: ["#1e1b4b", "#4338ca", "#a5b4fc", "#0a0a0f"],
      motif: "crescent",
    },
  },
  {
    id: "the-forbidden-word",
    theme: "forbidden",
    title: "The Forbidden Word",
    symbol: "⬡",
    symbolSanskrit: "अव्यक्त",
    number: 12,
    upright: {
      headline: "The word you avoid contains the most power.",
      body: "There is a specific word, phrase, or truth that carries unusual charge in your life — something you route around, soften, defer. Not because it is destructive, but because saying it clearly would require something of you. Matangi's gift is Vāk Siddhi: the perfection of speech. This perfection is not eloquence. It is the ability to say the thing you actually mean. The reading asks you to identify the word you are not saying and consider what would change if you said it.",
      shadow: "Power is not the same as freedom from consequence. The forbidden word may have real impact when spoken. The question is whether the cost of speaking it is less than the cost of continued silence.",
    },
    reversed: {
      headline: "The word has been weaponized.",
      body: "Something that was true and needed saying has been expressed in a way that became an attack rather than a transmission. Truth without compassion is a blade without a handle. Return to the intention.",
    },
    mantraFragment: "ॐ वाक्सिद्ध्यै नमः",
    mantraFragmentDev: "oṃ vāksiddhyai namaḥ",
    colorPrimary: "#7c2d12",
    colorSecondary: "#f97316",
    artwork: {
      variant: "flame",
      palette: ["#7c2d12", "#f97316", "#b8962e", "#0a0a0f"],
      motif: "word",
    },
  },
  {
    id: "yantra-activation",
    theme: "vak",
    title: "The Living Yantra",
    symbol: "◈",
    symbolSanskrit: "यन्त्र",
    number: 13,
    upright: {
      headline: "Your attention is itself the sacred geometry.",
      body: "The Matangi yantra is a map of how she concentrates energy — bindu at center, triangles of Vāk, lotus petals marking the directions of sound. But the deepest teaching is that the yantra is not a diagram of something external. It is a map of what happens when genuine attention is brought to bear. The focal point (bindu) is attention itself. The triangles are its modes. The reading says: your attention, brought with full sincerity to what matters most right now, is a ritual act. You do not need a temple.",
      shadow: "The geometric perfection of the yantra does not mean that spiritual life is clean or organized. The map is not the territory. Do not confuse having the form with living the substance.",
    },
    reversed: {
      headline: "The form without the spirit.",
      body: "Something is being done correctly on the surface while the inner alignment is absent. The ritual without the attention, the structure without the presence. Return to the bindu — the single point where everything begins.",
    },
    mantraFragment: "ॐ ह्रीं क्लीं हूं मातङ्ग्यै फट् स्वाहा",
    mantraFragmentDev: "oṃ hrīṃ klīṃ hūṃ mātaṃgyai phaṭ svāhā",
    colorPrimary: "#b8962e",
    colorSecondary: "#fde68a",
    artwork: {
      variant: "yantra",
      palette: ["#b8962e", "#fde68a", "#2d6a4f", "#0a0a0f"],
      motif: "center",
    },
  },
  {
    id: "lotus-below",
    theme: "inversion",
    title: "The Inverted Lotus",
    symbol: "⊕",
    symbolSanskrit: "पद्म",
    number: 14,
    upright: {
      headline: "What grows in the dark is not less sacred.",
      body: "The lotus grows from the mud. This is the standard reading. But Matangi's lotus grows somewhere deeper — in the utterly dark mud, the material that conventional spirituality considers too impure to touch. The reading honors something in your life that has emerged from genuine difficulty, genuine loss, genuine contact with the dark material of experience. Do not rush to spiritualize it, explain it, or make it into a lesson. Let it simply be what it is: real growth from real ground.",
      shadow: "The danger of the 'lotus from the mud' narrative is that it can be used to justify or romanticize unnecessary suffering. Not all darkness is generative. Discern what is genuinely needed struggle and what is simply destructive.",
    },
    reversed: {
      headline: "Avoiding the necessary descent.",
      body: "Something important can only be found by going deeper into difficulty rather than around it. The surface-level resolution will not hold. The reading asks you to go down.",
    },
    mantraFragment: "ॐ पद्मालयायै नमः",
    mantraFragmentDev: "oṃ padmālayāyai namaḥ",
    colorPrimary: "#166534",
    colorSecondary: "#86efac",
    artwork: {
      variant: "lotus",
      palette: ["#166534", "#4ade80", "#b8962e", "#0a0a0f"],
      motif: "root",
    },
  },
  {
    id: "forest-intelligence",
    theme: "the-wild",
    title: "The Forest Intelligence",
    symbol: "⟁",
    symbolSanskrit: "वन",
    number: 15,
    upright: {
      headline: "The intelligence you seek is not conceptual.",
      body: "Matangi is adorned with forest flowers — not garden flowers, not cultivated blooms. Wild. Grown outside the maintained spaces. There is a kind of knowing that the body carries, that instinct carries, that the uncurated experience of the natural world carries, that no amount of conceptual study produces. This card appears when the answer is available through direct contact with something rather than analysis of it. The forest knows. Your body knows. The thinking mind may be the last to understand.",
      shadow: "Intuition is not infallible. The body carries not only wisdom but trauma, bias, and conditioned fear. The non-conceptual knowing requires as much discernment as the conceptual kind, just different instruments.",
    },
    reversed: {
      headline: "Lost in the forest.",
      body: "The non-conceptual has become disorienting. The instinctive impulses are contradicting each other. This is a moment for a small amount of structure — not to suppress the wild intelligence, but to give it a temporary form in which to cohere.",
    },
    mantraFragment: "ॐ वनमालिन्यै नमः",
    mantraFragmentDev: "oṃ vanamālinyai namaḥ",
    colorPrimary: "#14532d",
    colorSecondary: "#16a34a",
    artwork: {
      variant: "forest",
      palette: ["#14532d", "#15803d", "#0a0a0f", "#b8962e"],
      motif: "leaf",
    },
  },
  {
    id: "the-silence-between",
    theme: "silence",
    title: "The Sphota",
    symbol: "✦",
    symbolSanskrit: "स्फोट",
    number: 16,
    upright: {
      headline: "The meaning exists in the silence between the words.",
      body: "In Sanskrit philosophy, the Sphota is the flash of meaning — the moment of recognition that occurs before conscious analysis, the knowing that arrives complete before the thinking mind has finished processing. Matangi governs this threshold. The reading says you are in a Sphota moment: something has arrived, whole, already understood at a deeper level than you have yet articulated to yourself. Do not rush to put it into words. Let the knowing settle into form at its own pace.",
      shadow: "The belief that something must be articulated to be real can cause the practitioner to miss the transmission itself in the effort to record it. Some knowing is best held in the body rather than the mind.",
    },
    reversed: {
      headline: "Grasping at the flash.",
      body: "The intuitive transmission is being grabbed too hard and thereby distorted. The act of trying to capture the Sphota immediately changes it. Relax the grip. Let it arrive in its own form.",
    },
    mantraFragment: "ॐ ह्रीं श्रीं मातङ्गिन्यै",
    mantraFragmentDev: "oṃ hrīṃ śrīṃ mātaṃginyai",
    colorPrimary: "#1e1b4b",
    colorSecondary: "#818cf8",
    artwork: {
      variant: "void",
      palette: ["#1e1b4b", "#6366f1", "#e0e7ff", "#0a0a0f"],
      motif: "flash",
    },
  },
  {
    id: "three-eyed-vision",
    theme: "forbidden",
    title: "The Third Eye Opens",
    symbol: "◉",
    symbolSanskrit: "त्रिनेत्र",
    number: 17,
    upright: {
      headline: "You are seeing something that cannot be unseen.",
      body: "Matangi's third eye does not see the future or reveal hidden information. It sees through construction — through the assembled stories about reality, through the social consensus about what is pure, what is acceptable, what is true. The opening of this eye is not comfortable. What it reveals is simply what is, without the usual editorial layer. The reading says: trust the perception that is arriving now, even if it disrupts the organized narrative. What you are seeing is real.",
      shadow: "The deconstruction of all constructs is not an end in itself. At some point, the seeing must be followed by a way of living with what was seen. Pure perception without integration can become its own kind of dissociation.",
    },
    reversed: {
      headline: "The eye is closed.",
      body: "Something is being deliberately not-seen. Not from incapacity but from the choice not to look. The reading is not a judgment. It is a question: what would change if you looked directly at what you are currently looking away from?",
    },
    mantraFragment: "ॐ नेत्रत्रयायै नमः",
    mantraFragmentDev: "oṃ netratrayāyai namaḥ",
    colorPrimary: "#312e81",
    colorSecondary: "#a5b4fc",
    artwork: {
      variant: "eye",
      palette: ["#312e81", "#6366f1", "#e0e7ff", "#0a0a0f"],
      motif: "iris",
    },
  },
  {
    id: "serpent-kundalini",
    theme: "vak",
    title: "The Frontal Current",
    symbol: "⬡",
    symbolSanskrit: "नाडी",
    number: 18,
    upright: {
      headline: "The energy that creates is the energy that must be honored.",
      body: "The frontal nāḍī — Matangi's channel — runs through the anterior body and is associated with creative desire, the drive toward expression, the pull of life toward more life. Conventional spiritual traditions have often suppressed this energy in favor of the upward path through the central channel. Matangi's teaching: the creative drive is not an obstacle. It is fuel. The desire to make, to express, to speak — these are sacred energies, not lesser impulses to be transcended. Honor the frontal channel.",
      shadow: "Creative desire without discipline disperses into noise. The frontal channel is powerful — it needs a container, a form, a direction. The energy is sacred; it still requires skill to work with.",
    },
    reversed: {
      headline: "The creative energy is blocked.",
      body: "Something is suppressing the natural creative drive — a judgment, a belief, an external prohibition that has been internalized. The reading asks you to locate where in the body the creative impulse feels stopped and to breathe into that place.",
    },
    mantraFragment: "ॐ वाग्देव्यै नमः",
    mantraFragmentDev: "oṃ vāgdevyai namaḥ",
    colorPrimary: "#047857",
    colorSecondary: "#6ee7b7",
    artwork: {
      variant: "serpent",
      palette: ["#047857", "#10b981", "#fbbf24", "#0a0a0f"],
      motif: "coil",
    },
  },
  {
    id: "vak-siddhi",
    theme: "vak",
    title: "Vāk Siddhi",
    symbol: "◈",
    symbolSanskrit: "वाक्सिद्धि",
    number: 19,
    upright: {
      headline: "Your words have become a form of action.",
      body: "Vāk Siddhi — the perfection of speech — is not about eloquence or impressive language. It is the state in which the gap between inner knowing and outer expression has closed. The practitioner speaks, and what they speak corresponds so precisely to what is true that reality reorganizes itself around the statement. Not through magic — through the weight of aligned truth. The reading marks a moment when what you say carries unusual power. Speak carefully. Speak truly.",
      shadow: "The perfection of speech carries responsibility. What you say with this kind of presence lands with force. Careless speech in this state causes harm that casual speech does not.",
    },
    reversed: {
      headline: "Speaking without alignment.",
      body: "Words are coming out faster than understanding. The speech has disconnected from the knowing. Slow down. Return to silence. Speak only from the place where you genuinely know.",
    },
    mantraFragment: "ॐ ह्रीं मातङ्गेश्वर्यै नमः",
    mantraFragmentDev: "oṃ hrīṃ mātaṃgeśvaryai namaḥ",
    colorPrimary: "#b8962e",
    colorSecondary: "#fef3c7",
    artwork: {
      variant: "crown",
      palette: ["#b8962e", "#fef3c7", "#2d6a4f", "#0a0a0f"],
      motif: "sovereign",
    },
  },
  {
    id: "night-crown",
    theme: "night",
    title: "The Midnight Crown",
    symbol: "⟁",
    symbolSanskrit: "निशा",
    number: 20,
    upright: {
      headline: "The goddess does not sleep. Neither does the work.",
      body: "Matangi is a deity of midnight — the hour when the social order loosens, when the careful management of appearance relaxes, when what has been suppressed during the day finds its way to the surface. The reading says: something important is happening in the unattended hours. In dreams, in the liminal state before sleep, in the thoughts that arise when the constructed self stops performing. Pay attention to what comes in the dark.",
      shadow: "The night is also when fears run unchecked, when catastrophizing distorts perception. The midnight transmission is real, but so is the 3 AM distortion. The task is to receive the former without being captured by the latter.",
    },
    reversed: {
      headline: "Refusing the night work.",
      body: "The inner life is being managed too tightly — not allowed to run its course in the dark hours. The control that serves so well during the day is being extended into the territory where it does not belong and cannot help.",
    },
    mantraFragment: "ॐ निशाचर्यै नमः",
    mantraFragmentDev: "oṃ niśācaryai namaḥ",
    colorPrimary: "#0f0f2e",
    colorSecondary: "#818cf8",
    artwork: {
      variant: "moon",
      palette: ["#0f0f2e", "#1e1b4b", "#818cf8", "#b8962e"],
      motif: "midnight",
    },
  },
  {
    id: "saraswati-shadow",
    theme: "inversion",
    title: "The Shadow of Sarasvatī",
    symbol: "✦",
    symbolSanskrit: "विद्या",
    number: 21,
    upright: {
      headline: "The knowledge that could not be learned is arriving.",
      body: "Matangi is the dark complement of Sarasvatī — not her enemy but her completion. Where Sarasvatī's knowledge comes through study, technique, and legitimate transmission, Matangi's knowledge arrives unbidden, from the direction no one was watching. The reading marks the arrival of understanding that cannot be attributed to a source — it is simply there, whole, in your awareness. Receive it without demanding a credential.",
      shadow: "The arrival of unbidden knowing can be confused with wishful thinking or with the voice of fear. The instrument of reception matters. What is the quality of attention through which this knowledge arrived?",
    },
    reversed: {
      headline: "The shadow knowledge is being suppressed.",
      body: "Something that has arrived through unconventional channels is being dismissed rather than examined. The reading asks for a second look — not necessarily acceptance, but genuine examination.",
    },
    mantraFragment: "ॐ विद्येश्यै नमः",
    mantraFragmentDev: "oṃ vidyeśyai namaḥ",
    colorPrimary: "#1d4ed8",
    colorSecondary: "#93c5fd",
    artwork: {
      variant: "eye",
      palette: ["#1d4ed8", "#bfdbfe", "#0a0a0f", "#b8962e"],
      motif: "knowing",
    },
  },
  {
    id: "forest-crown",
    theme: "the-wild",
    title: "Garland of the Wild",
    symbol: "⊕",
    symbolSanskrit: "वनमाला",
    number: 22,
    upright: {
      headline: "The sacred is in what grows without cultivation.",
      body: "Matangi wears a garland of forest flowers — not the cultivated offerings of formal worship but what grows wild, at the margins, without human management. The reading honors the uncurated aspects of your creative or spiritual life: the things you do that have no audience, no purpose beyond themselves, no strategy. The forest garland says these are sacred. Perhaps more sacred than the carefully maintained.",
      shadow: "The romantic valorization of the uncultivated can become its own aesthetic pose. True wildness is uncomfortable, unpredictable, sometimes ugly. If your wild is always beautiful, examine it.",
    },
    reversed: {
      headline: "Over-cultivation.",
      body: "Everything has been made strategic, presentable, managed. There is no wilderness left in the creative life. The reading asks where you can afford to let something grow without management.",
    },
    mantraFragment: "ॐ वनमालाधारिण्यै नमः",
    mantraFragmentDev: "oṃ vanamālādhāriṇyai namaḥ",
    colorPrimary: "#365314",
    colorSecondary: "#a3e635",
    artwork: {
      variant: "forest",
      palette: ["#365314", "#4d7c0f", "#a3e635", "#b8962e"],
      motif: "bloom",
    },
  },
];

export const oracleIntro = `The Oracle of Matangi does not predict. She transmits.

She is the goddess of speech, liminal knowledge, the sacred in the discarded. She accepts what others reject. Her transmissions arrive at the threshold — the place between what you have said and what you have not yet allowed yourself to know.

Draw a card. Stay with what arrives. The reading is not a prescription. It is a mirror held at a specific angle.

She has been waiting for exactly this question.`;

export const oracleInstructions = [
  "Sit quietly for a moment before drawing.",
  "Hold your question — not as words, but as a feeling or situation.",
  "Draw when you feel ready. Do not overthink.",
  "Read slowly. Let the discomfort, if any, be part of the reading.",
  "The shadow section is the most honest part.",
];

export type ReadingSpread = "single" | "three" | "cross";

export interface SpreadPosition {
  id: string;
  label: string;
  description: string;
}

export const spreads: Record<ReadingSpread, SpreadPosition[]> = {
  single: [
    { id: "center", label: "The Transmission", description: "What Matangi brings to this moment" },
  ],
  three: [
    { id: "past",    label: "What Has Been",     description: "The root — what brought you here" },
    { id: "present", label: "The Threshold",      description: "Where you stand right now" },
    { id: "future",  label: "The Direction",      description: "What is available if you listen" },
  ],
  cross: [
    { id: "center",  label: "The Question",    description: "What is at the heart of the matter" },
    { id: "above",   label: "What Speaks",     description: "The conscious understanding" },
    { id: "below",   label: "What Is Silent",  description: "The unconscious knowing" },
    { id: "left",    label: "What Must Go",    description: "What the crossing requires releasing" },
    { id: "right",   label: "What Arrives",    description: "What becomes available through the crossing" },
  ],
};
