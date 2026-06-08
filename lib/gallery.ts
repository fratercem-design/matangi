export interface Portrait {
  id: string;
  title: string;
  subtitle: string;
  form: string;
  palette: string[];
  description: string;
  symbolism: string[];
  aura: string;
}

export const portraits: Portrait[] = [
  {
    id: "ucchishta-form",
    title: "Ucchishta-Matangini",
    subtitle: "The Unbound",
    form: "Standing, wild hair, four arms, wine cup raised",
    palette: ["#7c3aed", "#1a0030", "#00e5ff", "#ff00cc"],
    description: "She stands at the boundary. Hair unbound. Eyes red with intoxication — not with wine, with the knowledge that purity is a power structure, not a truth. She holds what has been used.",
    symbolism: ["Wild unbound hair — freedom from convention", "Red eyes — intoxication of forbidden knowledge", "Leftover offering — sacredness of the used"],
    aura: "violet",
  },
  {
    id: "raja-form",
    title: "Raja-Matangi",
    subtitle: "The Sovereign",
    form: "Seated on jeweled throne, veena in hand, parrots surrounding",
    palette: ["#059669", "#022c22", "#00e5ff", "#fbbf24"],
    description: "The queen of all who work with language. Silence arrives when she enters. The parrots repeat her mantras into eternity. The veena strings vibrate at frequencies that reorganize reality.",
    symbolism: ["Jeweled throne — sovereignty over all forms of expression", "Veena — the instrument through which the universe was tuned", "Parrots — infinite repetition that creates reality"],
    aura: "emerald",
  },
  {
    id: "chandali-form",
    title: "Matangi as Chandali",
    subtitle: "The Outcast Priestess",
    form: "Standing at the crossroads, midnight, red garments, crow on shoulder",
    palette: ["#991b1b", "#0f0f0f", "#ff00cc", "#a3a3a3"],
    description: "She is standing at the crossroads at midnight. Not waiting — presiding. The crow on her shoulder whispers what it has seen from above: everything. She is outside every gate but the one that matters.",
    symbolism: ["Crossroads — liminality, the space between all states", "Crow — the bird of omen, carrier of dark wisdom", "Midnight — when the boundary between worlds thins"],
    aura: "crimson",
  },
  {
    id: "veena-form",
    title: "Matangi with the Veena",
    subtitle: "The Musician",
    form: "Half-figure, eyes closed, fingers on veena strings, third eye open",
    palette: ["#0d9488", "#042f2e", "#00e5ff", "#ff00cc"],
    description: "The third eye is open because music bypasses the two ordinary eyes entirely. What she plays cannot be heard by the physical ear — or rather, it can, but only once the listening has gone deep enough that the boundary between sound and silence dissolves.",
    symbolism: ["Closed eyes — inner vision activated", "Open third eye — trans-sensory perception", "Veena strings — the vibrational structure of reality"],
    aura: "teal",
  },
  {
    id: "parrot-form",
    title: "Matangi with the Parrot",
    subtitle: "The Oracle",
    form: "Profile view, parrot at ear, eyes wide, gesture of speech",
    palette: ["#00cc44", "#001a08", "#ff00cc", "#fbbf24"],
    description: "The parrot is at her ear, not on her hand. It is telling her something. What the parrot repeats are mantras — but what the parrot whispers are answers. She is the oracle who first receives the transmission before she gives it.",
    symbolism: ["Parrot at ear — receiving before transmitting", "Speech gesture (Vak mudra) — the word becoming form", "Green on green — camouflage of sacred within natural"],
    aura: "green",
  },
  {
    id: "constellation-form",
    title: "Matangi in the Constellation",
    subtitle: "Mahavidya IX",
    form: "Abstract cosmic form — her figure as a star within the Mahavidya constellation",
    palette: ["#1e1b4b", "#312e81", "#00e5ff", "#ff00cc"],
    description: "In the constellation of ten goddesses, she is the ninth point. Not the last — Kamala follows. She is the penultimate: the transgression that prepares for the final integration. You cannot reach the tenth without passing through the ninth's fire.",
    symbolism: ["Star form — each Mahavidya as a node of cosmic intelligence", "IX — the number of completion before return", "Constellation — the ten as a single distributed organism"],
    aura: "indigo",
  },
];
