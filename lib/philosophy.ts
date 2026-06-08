// ═══════════════════════════════════════════════════════════
// PHILOSOPHY — Long-form teachings
// ═══════════════════════════════════════════════════════════

export interface PhilosophyEntry {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  quote: string;
  quoteSource: string;
  body: string[];
  keyPrinciples: string[];
}

export const philosophyEntries: PhilosophyEntry[] = [
  {
    id: "power-of-speech",
    title: "The Power of Speech",
    subtitle: "Vak — the primal creative force",
    category: "Foundation",
    readTime: "7 min",
    quote: "Speech is not what the mouth does. Speech is what reality listens to.",
    quoteSource: "Tantric teaching on Vak",
    body: [
      "In the cosmological understanding that gave rise to Matangi's worship, speech is not a secondary phenomenon — a mere coding of pre-existing thoughts into sounds. Speech is ontologically primary. The universe comes into being through vibration, through what the Sanskrit tradition calls Shabda Brahman: the supreme word-sound that underlies all existence.",
      "This is not metaphor. The tradition means it literally, and modern physics has begun to arrive at something adjacent: the universe at its most fundamental level is vibration. Mass is a kind of slowed-down frequency. What we experience as solid matter is pattern, rhythm, resonance.",
      "Matangi governs speech in its primal state — not polished language, not curated communication, but the raw emergence of thought-as-sound before self-censorship intervenes. The word spoken in grief that contains more truth than the carefully managed sentences around it. The song hummed without awareness. The name whispered in desire. These are her domain.",
      "What the tradition calls Vak Siddhi — the perfection of speech — is not about eloquence or persuasion. It is about alignment: the practitioner's words become truthful in the deepest sense, not because they are trying to be truthful, but because the gap between inner knowing and outer expression has dissolved. They speak, and what they speak is so.",
      "This is why Matangi is associated with the veena rather than, say, a book. The veena player does not first decide what note to play and then play it. At a certain level of mastery, the hands know before the mind decides. Matangi governs that pre-reflective level — the place where knowing and expressing are not yet two things.",
    ],
    keyPrinciples: [
      "Speech is ontologically primary, not a secondary coding of thought",
      "Vak Siddhi is alignment between inner knowing and outer expression",
      "The most powerful speech is pre-reflective — it precedes the censor",
      "The universe itself is vibration; speech participates in that vibration",
    ],
  },
  {
    id: "art-of-listening",
    title: "The Art of Listening",
    subtitle: "Karna-Matangi and the receptive intelligence",
    category: "Practice",
    readTime: "6 min",
    quote: "Before you can speak with power, you must learn to hear what is not being said.",
    quoteSource: "Teaching on Karna-Matangi",
    body: [
      "Of Matangi's five forms, the least known and perhaps the most essential is Karna-Matangi — the ear-form, the goddess of sacred listening. The Sanskrit word karna means ear, and this form of Matangi governs not the production of speech but its reception.",
      "This points to something the tradition understood clearly: mastery of expression begins with mastery of reception. The practitioner who cannot hear deeply cannot speak truly. What passes as speech between people who do not listen is not communication but parallel monologue — two people waiting for their turn to talk.",
      "Sacred listening, as the tradition understands it, is not passive. It requires the same quality of attention as any advanced practice. The listening mind must be still enough to receive what is actually being transmitted, not just the words but the frequency beneath the words — the emotional tone, the unspoken fear, the suppressed knowing that a person is circling without being able to approach directly.",
      "Matangi as ear-goddess governs clairaudience in the traditional sense — not the supernatural hearing of hidden sounds, but the natural capacity to hear more than most people allow themselves to hear. The overheard fragment that answers the question you were sitting with. The quality of silence after something is said. The note in someone's voice that contradicts their words.",
      "The training in this form of Matangi practice consists primarily of removing the obstacles to ordinary listening — the commentary, the evaluation, the preparation of response that most people run continuously while nominally attending to another person. When that inner noise quiets, what remains is remarkably rich.",
    ],
    keyPrinciples: [
      "Mastery of expression begins with mastery of reception",
      "Sacred listening requires stillness, not passivity",
      "Hearing beneath words — tone, frequency, the unspoken — is a trainable capacity",
      "Clairaudience means hearing what is actually there, not what we expect",
    ],
  },
  {
    id: "knowledge-beyond-convention",
    title: "Knowledge Beyond Convention",
    subtitle: "The Chandali doctrine — wisdom from outside the gate",
    category: "Philosophy",
    readTime: "8 min",
    quote: "What was rejected contains exactly what is missing.",
    quoteSource: "Ucchishta teaching",
    body: [
      "The most radical aspect of Matangi's teaching is her explicit identification as a Chandali — the untouchable outcast woman, she who lives outside the village gate and is considered spiritually contaminating by proximity alone. In a culture organized around ritual purity and caste hierarchy, this identification is a declaration.",
      "What the tradition is asserting: the highest wisdom does not flow through sanctioned lineages. It does not arrive through authorized teachers in proper institutional settings. It flows through the marginal, the excluded, the supposedly contaminated. It arrives from the direction no one is watching.",
      "The specific language of 'purity' is used because purity is the controlling concept of the system being subverted. The Brahmin establishment maintained authority partly through control of what counted as spiritually valid — which texts, which teachers, which practices, which practitioners were legitimate. Matangi's worship explicitly inverts this: she accepts the leftover, she welcomes the outcast, she lives at the crossroads where the village's order ends.",
      "Translated beyond its historical context: how much knowledge do you have that you dismiss because it didn't arrive through legitimate channels? The insight that came in a dream rather than a book. The wisdom you received from someone society considers unreliable. The understanding that emerged from your own transgressive experience — the thing you did that you weren't supposed to do, that turned out to illuminate something crucial.",
      "Matangi's teaching does not endorse abandoning discernment. It does not say all suppressed knowledge is valid. It says: the principle by which you dismiss certain knowledge may itself be the mechanism of suppression. The question to ask of any piece of knowing is not 'where did it come from' but 'is it true?'",
      "The ucchishta practice extends this: she accepts the touched, the used, the leftover. Applied to knowledge: the idea that seemed useless, the creative project you abandoned, the understanding you suppressed because it was inconvenient. She is in all of it. The leftover may be the most potent offering.",
    ],
    keyPrinciples: [
      "Sanctioned channels are not the only source of genuine wisdom",
      "The principle of dismissal may be the mechanism of suppression",
      "The question is not provenance but truth",
      "Discarded knowledge — the idea abandoned, the insight dismissed — may carry the most important transmission",
    ],
  },
  {
    id: "creative-expression",
    title: "Creative Expression as Devotional Practice",
    subtitle: "Art as a form of accurate prayer",
    category: "Practice",
    readTime: "6 min",
    quote: "Your most transgressive creative act is your most accurate prayer.",
    quoteSource: "Contemporary teaching on Matangi",
    body: [
      "In the understanding that gave rise to Matangi's worship, artistic creation is not a leisure activity or a form of self-expression. It is an act of participation in the cosmic creative process — the same vibration that produced the universe, expressed through a human instrument.",
      "This does not mean that all art is sacred or that the artist has special status. It means that when artistic expression is genuinely aligned — when the creator is not performing but actually transmitting — it participates in the Shabda Brahman. The poem that finds you rather than the poem you construct. The painting that reveals something you didn't know you knew. The music that surprises the musician.",
      "Matangi governs the specific register of creative expression that bypasses the censoring mind — the work that emerges from the transgressive angle, from the forbidden perspective, from the margin of what is considered acceptable. Her special domain is the art that would not have been made if the maker had been fully rule-following.",
      "This is not a mandate for gratuitous transgression. It is a recognition that genuine creative work almost always involves some departure from what was expected, some willingness to go to the uncomfortable place, some art that makes at least part of the audience uncomfortable because it is too true.",
      "The devotional dimension: every act of genuine creative expression — every moment when a creator sets down what they actually perceive rather than what they are supposed to perceive — is an act of worship at Matangi's threshold. You do not need to know her name. The act itself is the prayer.",
    ],
    keyPrinciples: [
      "Genuine artistic creation participates in the cosmic creative process",
      "Matangi governs the creative impulse that bypasses the censoring mind",
      "True creative work involves some departure from the expected",
      "Every act of genuine expression is devotional, regardless of the creator's awareness",
    ],
  },
  {
    id: "truth-and-transformation",
    title: "Truth and Transformation",
    subtitle: "How honest speech changes the one who speaks it",
    category: "Foundation",
    readTime: "5 min",
    quote: "To speak the truth is not merely to be accurate. It is to allow reality to reorganize itself around the fact of being seen.",
    quoteSource: "Teaching on Vak Siddhi",
    body: [
      "The Tantric tradition's understanding of Vak Siddhi has an unusual implication that is rarely discussed: the transformation is not merely in the listener. The speaker is transformed by speaking truly, perhaps more than anyone.",
      "Most people do not know what they think or feel until they attempt to articulate it. The act of trying to find words for an experience is not a translation operation — it is a cognitive operation, a structuring operation, sometimes an origination. You discover what you know by trying to say it.",
      "If this is true, then the suppression of authentic speech is not merely a social problem. It is a cognitive problem — a failure to complete the circuit through which knowing becomes fully knowing. The thought that is never spoken, the feeling that is never named, the insight that is perpetually almost-formulated — these remain in a kind of perpetual potential state, never fully real.",
      "Matangi's teaching is that speaking truly — even difficult truths, even transgressive truths, even truths that arrive from unconventional sources — completes a process. The transformation that follows is not merely in the social environment (though it may be there too). It is in the speaker, who has now brought the knowing into full reality through the act of speaking.",
      "This is the deepest meaning of Vak Siddhi: not that the words become magically powerful, but that the practitioner has aligned so completely with truth that speaking and reality have become the same act.",
    ],
    keyPrinciples: [
      "Speaking truly transforms the speaker, not just the listener",
      "We often discover what we know through the act of articulation",
      "Suppressed speech leaves knowing in perpetual potential, never fully real",
      "Vak Siddhi is alignment between speaking and truth, not magical word-power",
    ],
  },
  {
    id: "sacred-word",
    title: "The Sacred Word",
    subtitle: "Mantra as living vibration",
    category: "Practice",
    readTime: "5 min",
    quote: "A mantra is not a prayer said to a deity. It is a frequency tuned to a specific quality of consciousness.",
    quoteSource: "Tantric teaching on mantra-shastra",
    body: [
      "In the Tantric understanding, a mantra is not a request addressed to an external being. It is a precise vibrational technology — a specific sequence of sounds that, when produced correctly and with appropriate attention, resonates with a corresponding quality of consciousness.",
      "The Sanskrit system of sacred sound is built on the understanding that specific syllable combinations produce specific effects on the nervous system, the subtle body, and ultimately on awareness itself. The bija mantras — the seed syllables like Aim, Hreem, Shreem, Kleem — are understood as the fundamental vibrational seeds from which more complex effects unfold.",
      "Matangi's primary bija is Aim — the same seed associated with Saraswati. The tradition's point: her frequency and Saraswati's are fundamentally the same, expressed through different channels. Aim, when vocalized with attention, produces a quality of alert receptivity — the mind poised to receive, to understand, to create.",
      "The practice dimension: repetition (japa) is not about accumulating merit through quantity. It is about using repetition to deepen the quality of attention. The first repetition is cognitive — you are aware of saying the mantra. By the fiftieth, the mantra is beginning to repeat itself. By the hundred-and-eighth, if the attention has been genuine, something else is happening — the practitioner is inside the vibration rather than producing it.",
      "This is the threshold Matangi invites practitioners toward: the point where the distinction between the one who speaks and the speech itself begins to dissolve. Not as a supernatural event, but as a natural consequence of deeply sustained attention to the vibration she governs.",
    ],
    keyPrinciples: [
      "Mantra is vibrational technology, not petition to an external being",
      "Bija syllables resonate with specific qualities of consciousness",
      "Repetition deepens attention quality, not merit accumulation",
      "The goal is dissolution of the gap between speaker and speech",
    ],
  },
  {
    id: "wisdom-of-silence",
    title: "The Wisdom of Silence",
    subtitle: "What the goddess of speech says about not speaking",
    category: "Philosophy",
    readTime: "4 min",
    quote: "Silence is not the absence of sound. Silence is what sound is embedded in.",
    quoteSource: "Teaching on Karna-Matangi",
    body: [
      "It may seem paradoxical that a goddess of speech has a teaching about silence. But the paradox resolves when we understand what Matangi's relationship to sound actually is.",
      "She does not simply govern the production of sound. She governs sound in its full reality — which includes the silence from which it emerges and into which it returns. A note is not just the vibration; it is the vibration against the background of silence that makes the vibration perceptible. Remove the silence and you have noise. Noise is not music.",
      "The tradition has a name for the silence that makes speech meaningful: Sphota — the flash of meaning that occurs at the moment of recognition, before the individual phonemes are fully processed. The Sphota is what the hearer already knows before they consciously know they know it — the meaning that arrives before the analysis completes.",
      "Matangi governs Sphota. She is present at the moment when silence becomes speech and speech becomes silence. This is why her practice includes periods of genuine silence — not as deprivation but as return to the ground from which speech emerges.",
      "The practical teaching: before speaking, allow a moment of actual silence. Not planning what to say — silence. What emerges from that silence will be different from what would have emerged from the continuous inner monologue. Not always more eloquent, but more true. She is in the silence before the word.",
    ],
    keyPrinciples: [
      "Sound and silence are not opposites but complements — sound requires silence to be perceptible",
      "The Sphota is the flash of meaning at the threshold of speech",
      "Matangi governs both speech and the silence from which it emerges",
      "True speech arises from genuine silence, not continuous inner noise",
    ],
  },
];

export const philosophyCategories = ["All", "Foundation", "Practice", "Philosophy"] as const;
