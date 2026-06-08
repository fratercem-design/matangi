export interface Mantra {
  id: string;
  type: string;
  sanskrit: string;
  transliteration: string;
  meaning: string;
  purpose: string;
  repetitions: number;
  timing?: string;
}

export const mantras: Mantra[] = [
  {
    id: "moola",
    type: "Moola Mantra",
    sanskrit: "ॐ ह्रीं ऐं भगमालिन्यै नमः",
    transliteration: "Om Hreem Aim Bhagamalinyai Namaha",
    meaning: "Salutation to the Garland-Wearer, invoked through the seed sounds of Maya (Hreem) and Saraswati (Aim).",
    purpose: "Root invocation — establishes the energetic connection to Matangi's current. Foundation of all other practices.",
    repetitions: 108,
    timing: "Dawn or midnight",
  },
  {
    id: "matangi-bija",
    type: "Bija Mantra",
    sanskrit: "ॐ ह्रीं मातङ्ग्यै फट् स्वाहा",
    transliteration: "Om Hreem Matangyai Phat Svaha",
    meaning: "Invoking Matangi with the cutting sound Phat (severs obstacles) and Svaha (offering into sacred fire).",
    purpose: "For overcoming opposition, gaining mastery over speech, cutting through obstacles to creative expression.",
    repetitions: 108,
    timing: "Tuesday or Sunday",
  },
  {
    id: "ucchishta",
    type: "Ucchishta Invocation",
    sanskrit: "ॐ श्रीं ह्रीं क्लीं उच्छिष्टचण्डालिन्यै नमः",
    transliteration: "Om Shreem Hreem Kleem Ucchishta-Chandalinyai Namaha",
    meaning: "Invoking the Ucchishta Chandali form through three great Shakti bija seeds: Shreem, Hreem, Kleem.",
    purpose: "Transgressive invocation for liberation from purity obsession, transformation of shame, accessing forbidden knowledge.",
    repetitions: 108,
    timing: "Dark moon, midnight",
  },
  {
    id: "gayatri",
    type: "Matangi Gayatri",
    sanskrit: "ॐ शुकपुत्र्यै विद्महे संगीतप्रियायै धीमहि\nतन्नो मातङ्गी प्रचोदयात्",
    transliteration: "Om Shukaputryai Vidmahe Sangeetapriyayai Dheemahi\nTanno Matangi Prachodayat",
    meaning: "We come to know the daughter of the parrot, we meditate on she who loves music — may Matangi illuminate us.",
    purpose: "Illumination through music and speech. Opens the channel of creative inspiration.",
    repetitions: 108,
    timing: "Dawn",
  },
  {
    id: "raja-matangi",
    type: "Raja-Matangi Mantra",
    sanskrit: "ॐ ऐं ह्रीं श्रीं राजमातङ्ग्यै नमः",
    transliteration: "Om Aim Hreem Shreem Rajamatangyai Namaha",
    meaning: "Invoking the royal form through the triple goddess seeds of Saraswati, Maya, and Lakshmi.",
    purpose: "Authority in public speech, command in performance, mastery over arts.",
    repetitions: 108,
    timing: "Before performance, public speaking, or creative work",
  },
  {
    id: "vak-siddhi",
    type: "Vak Siddhi Mantra",
    sanskrit: "ॐ ह्रीं मातङ्गि चामुण्डे क्रीं स्वाहा",
    transliteration: "Om Hreem Matangi Chamunde Kreem Svaha",
    meaning: "Invoking Matangi in her Chamunda aspect with the Kali bija Kreem.",
    purpose: "Perfection of speech as a magical act. For Vak Siddhi — words that manifest in reality.",
    repetitions: 1008,
    timing: "40 consecutive days practice",
  },
];

export const breathingSequence = [
  { phase: "Inhale",  duration: 4, instruction: "Receive the mantra into the body" },
  { phase: "Hold",    duration: 4, instruction: "Let it saturate every cell" },
  { phase: "Exhale",  duration: 6, instruction: "Release as sacred offering" },
  { phase: "Rest",    duration: 2, instruction: "Rest in the silence between words" },
];

export const exercises = [
  {
    id: "unspoken",
    title: "The Unspoken Truth",
    prompt: "Speak one truth you normally hide. Not to anyone — into the silence. Matangi is listening.",
    duration: 60,
  },
  {
    id: "inversion",
    title: "Inversion Speech",
    prompt: "Write a sentence that contains its own opposite. What you write as one thing is also its shadow.",
    duration: 90,
  },
  {
    id: "noise-listening",
    title: "Prophetic Listening",
    prompt: "Close your eyes. Listen to all sound around you without naming it. Do not say 'car' or 'voice.' Just: sound. Stay for one minute.",
    duration: 60,
  },
  {
    id: "leftover",
    title: "The Leftover Practice",
    prompt: "Write three things you have discarded about yourself. Look at each one. She is in everything you rejected.",
    duration: 120,
  },
  {
    id: "forbidden-word",
    title: "The Forbidden Word",
    prompt: "What word do you avoid saying? Say it now. Say it three times. Notice what changes in the room.",
    duration: 30,
  },
];
