// ═══════════════════════════════════════════════════════════
// GALLERY — Generative SVG portrait definitions
// ═══════════════════════════════════════════════════════════

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Divine Portraits" | "Sacred Symbols" | "Temple Art" | "Visionary Art" | "Cosmic Landscapes";
  description: string;
  palette: string[];
  tags: string[];
  featured?: boolean;
  /**
   * Optional real artwork. Drop a file in `public/images/gallery/` and set the
   * path here, e.g. image: "/images/gallery/raja-matangi.jpg".
   * When omitted, the generative SVG artwork is shown instead.
   */
  image?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "raja-portrait",
    title: "Raja-Matangi",
    subtitle: "The Sovereign on Her Throne",
    category: "Divine Portraits",
    description: "The royal form — seated on a jeweled throne with parrots in attendance, the veena raised, sovereign authority radiating through her composed and undeceived gaze.",
    palette: ["#2d6a4f", "#52b788", "#b8962e", "#0a0a0f"],
    tags: ["sovereign", "veena", "parrots", "royal"],
    featured: true,
  },
  {
    id: "chandali-portrait",
    title: "The Chandali at the Crossroads",
    subtitle: "Wisdom from outside the gate",
    category: "Divine Portraits",
    description: "The outcast form — standing at the crossroads at midnight, red-clothed, wild-haired, presiding over the liminal space where the village's order ends and a deeper order begins.",
    palette: ["#991b1b", "#0f0f0f", "#ff00cc", "#a3a3a3"],
    tags: ["outcast", "crossroads", "midnight", "liminal"],
    featured: true,
  },
  {
    id: "emerald-form",
    title: "The Emerald Form",
    subtitle: "Shyama — the dark luminous one",
    category: "Divine Portraits",
    description: "Her most essential representation — emerald-dark and self-luminous, the color of living intelligence, the green that is the color of growth that breaks through stone.",
    palette: ["#00cc44", "#001a08", "#2d6a4f", "#b8962e"],
    tags: ["emerald", "luminous", "essential", "green"],
    featured: true,
  },
  {
    id: "veena-meditation",
    title: "The Musician in Stillness",
    subtitle: "Before the first note",
    category: "Divine Portraits",
    description: "Eyes closed, fingers resting on the strings, third eye open. The moment before music begins is when the musician hears most clearly. Matangi at rest between transmissions.",
    palette: ["#0d9488", "#042f2e", "#00e5ff", "#ff00cc"],
    tags: ["veena", "music", "meditation", "stillness"],
  },
  {
    id: "matangi-yantra",
    title: "Matangi Yantra",
    subtitle: "Sacred geometry of speech",
    category: "Sacred Symbols",
    description: "The geometric form of her energy — bindu at center, triangles representing the three aspects of Vak, eight lotus petals for the eight directions sound travels through space.",
    palette: ["#b8962e", "#f0d080", "#0a0a0f", "#2d6a4f"],
    tags: ["yantra", "geometry", "sacred", "symbol"],
    featured: true,
  },
  {
    id: "veena-glyph",
    title: "The Veena Symbol",
    subtitle: "Bridge between thought and manifestation",
    category: "Sacred Symbols",
    description: "The veena as a symbolic form — not the instrument but the principle it embodies. The resonant string stretched between poles, the tension that produces music, the medium through which intelligence becomes sound.",
    palette: ["#2d6a4f", "#b8962e", "#0a0a0f"],
    tags: ["veena", "symbol", "music", "transmission"],
  },
  {
    id: "parrot-glyph",
    title: "The Parrot of Sacred Echo",
    subtitle: "Repetition as creation",
    category: "Sacred Symbols",
    description: "The parrot in symbolic form — not the bird but the principle of sacred repetition. How truth, spoken repeatedly with full attention, begins to reshape the reality around it.",
    palette: ["#00cc44", "#fbbf24", "#0a0a0f"],
    tags: ["parrot", "echo", "repetition", "speech"],
  },
  {
    id: "temple-threshold",
    title: "The Threshold",
    subtitle: "Where the ordinary world ends",
    category: "Temple Art",
    description: "The doorway to the inner sanctuary — dark stone arch, emerald lamp above, the inscription visible but requiring a specific quality of sight to read.",
    palette: ["#0a0a0f", "#2d6a4f", "#b8962e", "#163d28"],
    tags: ["threshold", "doorway", "temple", "liminal"],
    featured: true,
  },
  {
    id: "inner-sanctum",
    title: "The Inner Sanctum",
    subtitle: "Where offerings are received",
    category: "Temple Art",
    description: "The interior of the temple — star-like ceiling lights, living forest walls, the platform at center where the goddess sits in the posture of one genuinely interested in what you bring.",
    palette: ["#0c1a12", "#2d6a4f", "#b8962e", "#1e4d33"],
    tags: ["sanctum", "interior", "sacred space"],
  },
  {
    id: "forest-library",
    title: "The Library at the Heart of the Forest",
    subtitle: "The archive of all knowledge",
    category: "Temple Art",
    description: "The impossible library — exterior suggesting one size, interior immeasurably larger. Ancient stone, symbol-covered walls, windows glowing with the warm light of a thousand years of candles.",
    palette: ["#163d28", "#2d6a4f", "#b8962e", "#0a0a0f"],
    tags: ["library", "forest", "archive", "knowledge"],
  },
  {
    id: "sound-wave-cosmos",
    title: "Sound as Cosmos",
    subtitle: "Shabda Brahman — the universe as vibration",
    category: "Visionary Art",
    description: "The traditional cosmological understanding made visible: reality as an interference pattern of vibrations, each object a standing wave, the whole cosmos a piece of music in which we are both audience and instrument.",
    palette: ["#0f1729", "#6b46c1", "#2d6a4f", "#b8962e"],
    tags: ["cosmos", "sound", "vibration", "visionary"],
    featured: true,
  },
  {
    id: "ucchishta-offering",
    title: "The Offered Leftover",
    subtitle: "The sacred in the used",
    category: "Visionary Art",
    description: "A meditation on the ucchishta doctrine — the thing considered used and impure, rendered in light, the sacred charge of real contact with lived experience visible as luminosity in what was discarded.",
    palette: ["#6b46c1", "#b8962e", "#0a0a0f", "#52b788"],
    tags: ["ucchishta", "sacred", "transformation", "light"],
  },
  {
    id: "vak-emergence",
    title: "Vak — Speech Emerging",
    subtitle: "The moment language becomes form",
    category: "Visionary Art",
    description: "The moment of speech's emergence — the precise threshold between thought and word, between potential and actual, depicted as a visual event as dramatic as creation itself.",
    palette: ["#0f1729", "#2d6a4f", "#b8962e", "#f0d080"],
    tags: ["vak", "speech", "emergence", "creation"],
  },
  {
    id: "mahavidya-constellation",
    title: "The Mahavidya Constellation",
    subtitle: "Ten faces of the absolute",
    category: "Cosmic Landscapes",
    description: "The ten Mahavidyas as a constellation of stellar intelligences — each a node of cosmic knowing, Matangi as the ninth, the transgressive threshold before the final integration of Kamala.",
    palette: ["#0a0a0f", "#100d1a", "#6b46c1", "#b8962e", "#2d6a4f"],
    tags: ["mahavidya", "ten", "constellation", "cosmic"],
    featured: true,
  },
  {
    id: "emerald-cosmos",
    title: "The Emerald Cosmos",
    subtitle: "Intelligence as the ground of existence",
    category: "Cosmic Landscapes",
    description: "The universe seen through Matangi's eyes — not a mechanical process but a living intelligence, green and dark and luminous, the same color as her own form.",
    palette: ["#0c1a12", "#163d28", "#2d6a4f", "#52b788"],
    tags: ["cosmos", "emerald", "intelligence", "living"],
  },
  {
    id: "midnight-crossroads",
    title: "The Midnight Crossroads",
    subtitle: "Where all paths meet",
    category: "Cosmic Landscapes",
    description: "The symbolic crossroads — not a physical location but a state of consciousness, where the question is genuinely open, where the direction is not yet determined, where the liminal goddess stands and presides.",
    palette: ["#0a0a0f", "#991b1b", "#2d6a4f", "#b8962e"],
    tags: ["crossroads", "midnight", "liminal", "threshold"],
  },
];

export const galleryCategories = [
  "All",
  "Divine Portraits",
  "Sacred Symbols",
  "Temple Art",
  "Visionary Art",
  "Cosmic Landscapes",
] as const;
