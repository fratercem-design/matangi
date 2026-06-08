// ═══════════════════════════════════════════════════════════
// MEDITATIONS — Four guided visualization practices
// ═══════════════════════════════════════════════════════════

export interface MeditationStage {
  id: string;
  title: string;
  duration: number; // seconds
  instruction: string;
  ambientColor: string;
  breathInstruction?: string;
}

export interface Meditation {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  duration: string;
  level: "Opening" | "Intermediate" | "Deep" | "Advanced";
  theme: string;
  description: string;
  intention: string;
  ambientPalette: string[];
  stages: MeditationStage[];
  closing: string;
  afterpractice: string;
}

export const meditations: Meditation[] = [
  {
    id: "emerald-temple",
    number: 1,
    title: "The Emerald Temple",
    subtitle: "A visualization of sacred arrival",
    duration: "15–20 min",
    level: "Opening",
    theme: "Arrival, permission, sacred space",
    description: "A foundational practice of visualization — constructing the inner image of Matangi's temple and arriving within it. This meditation establishes the inner relationship with her presence without requiring any prior knowledge.",
    intention: "To arrive — not to understand, not to acquire, not to achieve, but simply to arrive at the threshold of a different quality of knowing.",
    ambientPalette: ["#0c2419", "#2d6a4f", "#52b788", "#b8962e"],
    stages: [
      {
        id: "preparation",
        title: "Preparation",
        duration: 120,
        instruction: "Find a position where your spine can be upright without strain. If you need to lie down, do so. The practice will meet you where you are.\n\nClose your eyes. Take three breaths without trying to change them — just notice what your breathing is already doing. Notice the texture of the air entering and leaving. Notice the brief, natural stillness between exhale and the next inhale.\n\nThat stillness between breaths — that is where this practice begins.",
        ambientColor: "#0a0a0f",
        breathInstruction: "Natural, uncontrolled breathing",
      },
      {
        id: "descent",
        title: "The Descent",
        duration: 180,
        instruction: "Imagine a path descending from wherever you are now into the ground itself. Not a threatening descent — a descent into richness, into depth, into the earth's own luminosity.\n\nThe path is made of dark stone, polished smooth by generations of those who came before. The walls on either side are hung with emerald moss that produces its own faint light. The air grows cooler and more alive as you descend.\n\nYou are not going anywhere dangerous. You are going somewhere that has been waiting.\n\nWith each breath, go a little deeper. The light around you shifts from the ordinary light of above-ground toward something older and greener and entirely its own.",
        ambientColor: "#0c2419",
        breathInstruction: "Slow inhale (4 counts) · hold (2) · slow exhale (6)",
      },
      {
        id: "threshold",
        title: "The Threshold",
        duration: 180,
        instruction: "At the bottom of the path, there is a doorway. It is not grand — a simple arch of dark stone, with a single emerald lamp burning at its apex.\n\nOn either side of the arch, the same inscription in an ancient script. You cannot read it, but you understand it completely: 'Enter only if you are willing to hear what has not been said.'\n\nStand here for a moment. You do not have to enter. But you have come here, and you already know what you will do.\n\nWhen you are ready — and you are ready — step through.",
        ambientColor: "#163d28",
        breathInstruction: "Pause at the threshold on the exhale before stepping through",
      },
      {
        id: "interior",
        title: "The Interior",
        duration: 300,
        instruction: "Inside, the temple is not what you expected. It is both larger and more intimate than the entrance suggested.\n\nThe floor is dark stone, cool underfoot. The ceiling is far above — and from it hang thousands of tiny lights, like stars or like the reflected light of a deep lake. The walls are hung with living green — not decorative, but actual forest, the trees somehow growing inward here.\n\nAt the center of the space, on a simple raised platform, a woman sits in the posture of a musician who has paused between pieces. She is emerald-dark and luminous simultaneously. She holds a veena, and her parrot sits at her shoulder.\n\nShe is not performing. She is simply present. And her presence radiates a quality of attention — the sense that she is genuinely interested in what you might say, in what you actually know.\n\nApproach her at whatever pace feels true. There is no correct form for this meeting.",
        ambientColor: "#2d6a4f",
        breathInstruction: "Allow the breath to find its own rhythm here",
      },
      {
        id: "offering",
        title: "The Offering",
        duration: 240,
        instruction: "Matangi's worship involves the offering of what has been used, touched, lived-in. Not the pristine gift but the honest one.\n\nSit now in the inner space of her presence and offer her what is actually there. Not your best version of yourself — your actual self. The unresolved creative impulse. The words you haven't found. The knowing you haven't trusted. The art that hasn't been made. The truth that hasn't been spoken.\n\nShe accepts all of it. She is specifically the goddess of the used and the leftover. Everything you considered too small or too compromised for any other altar is exactly what belongs here.\n\nThere is nothing to say. The offering is simply your attention — the act of being fully present with whatever is there, without management or curation.",
        ambientColor: "#1e4d33",
        breathInstruction: "Let the breath be an offering on each exhale",
      },
      {
        id: "reception",
        title: "The Reception",
        duration: 300,
        instruction: "She plays a single phrase on the veena. Just a few notes. Nothing elaborate. The phrase drops into the silence of the temple and seems to continue, though she has stopped playing — as if the stone itself is remembering the sound.\n\nDo not try to understand the phrase. Simply let it be in the space.\n\nNow there is silence. Real silence — not the absence of sound but the presence of attention. Stay inside this silence. Whatever arises — thought, feeling, image, sensation, impulse — let it arise. Do not dismiss it. Do not grasp it. Let it arrive and let it move through.\n\nShe is here. You are here. That is sufficient.",
        ambientColor: "#256040",
        breathInstruction: "Natural breathing, very slow",
      },
      {
        id: "return",
        title: "The Return",
        duration: 180,
        instruction: "When the time comes to return — you will know; there will be a natural shift in the quality of the attention — take your leave simply. Bow if that feels genuine. Or simply turn and walk back toward the doorway.\n\nAs you pass through the arch again, bring with you whatever arrived during the practice. Not as a captured thing, but as a quality — a slight change in the temperature of your awareness.\n\nAscend the polished path back toward the ordinary world. The green moss still glows as you pass it.\n\nAt the top, let the world of above-ground gradually return. Hear the sounds of your physical environment. Feel the weight of your body. When you are ready, let your eyes open.",
        ambientColor: "#163d28",
        breathInstruction: "Gradually deepen and animate the breath as you ascend",
      },
    ],
    closing: "Sit for a few moments before moving. Matangi's presence does not require dramatic outcomes. What has been opened will continue to work quietly in the days that follow.",
    afterpractice: "If something arose during the practice — an image, a phrase, an impulse — write it down before it dissolves. She speaks in the language of the immediate, the almost-forgotten. Catch it while it is still present.",
  },
  {
    id: "river-of-speech",
    number: 2,
    title: "The River of Sacred Speech",
    subtitle: "Sound as the stream of consciousness",
    duration: "20–25 min",
    level: "Intermediate",
    theme: "Language, music, the living quality of sound",
    description: "A meditation on Matangi's domain of speech itself — tracing the full arc from primordial sound through language and music back to silence. For practitioners seeking a deeper relationship with their own voice and its creative capacities.",
    intention: "To experience speech not as the output of thinking but as a living stream that the speaker participates in but does not control.",
    ambientPalette: ["#0a0a0f", "#0f1729", "#2d6a4f", "#6b46c1"],
    stages: [
      {
        id: "silence-baseline",
        title: "The Silence Before",
        duration: 180,
        instruction: "Begin in complete silence — not suppressed silence but intentional silence. As if you have chosen to be completely still before a great concert begins.\n\nClose your eyes. With your eyes closed, become aware of how much sound is actually present in any 'silence.' The sound of your own breathing. The ambient sound of the space around you. The occasional outer noise that passes through walls.\n\nLet these sounds exist without naming them. Do not say 'traffic' or 'wind.' Let the sounds be just: sound. Vibration. Frequency. They are not interruptions. They are the medium.",
        ambientColor: "#07070d",
      },
      {
        id: "primordial-om",
        title: "The First Vibration",
        duration: 240,
        instruction: "The tradition holds that before all differentiated sound, there is Om — the resonance from which all other sounds arise and into which they return.\n\nSilently, without vocalizing, feel the vibration of Om as if it were arising in your chest. Not a thought about Om — a sensation. A vibration in the sternum and throat that you are only imagining but that, as you attend to it, becomes increasingly real.\n\nLet it pulse with your heartbeat, or with your breath, or at its own frequency. There is no correct tempo. Let it find its own rate.\n\nNotice: even this silent, imagined vibration has an effect on the body. The chest is slightly warmer. The throat feels more open. The mind has quieted somewhat from the stimulation of this focused interior attention.",
        ambientColor: "#0f1729",
        breathInstruction: "Long, slow exhalations synchronized with the imagined vibration",
      },
      {
        id: "bija-emergence",
        title: "The Seeds of Speech",
        duration: 300,
        instruction: "From the primordial vibration, specific seed sounds begin to emerge. Silently, internally, hear and feel each one as it arises:\n\nAim — the seed of Matangi and Saraswati. The alert receptivity. The mind poised to receive and create. Feel it resonate at the level of the throat and the space between the eyebrows.\n\nHreem — the seed of Maya, of transformative power. Feel it as a warmth in the heart center, a sensation of the heart itself listening.\n\nOm — not the Om you began with, but a slightly different version — now heard against the silence and the two bija sounds, it has a different quality. More spacious. As if the sound itself knows it is the ground.\n\nLet these three alternate without effort. You are not conducting them — you are listening to them arise and subside in their own rhythm.",
        ambientColor: "#163d28",
        breathInstruction: "Each bija sound on an exhale, naturally",
      },
      {
        id: "matangi-veena",
        title: "The Veena Music",
        duration: 360,
        instruction: "Matangi takes up the veena. You do not see her — you hear the instrument beginning to produce a sound that is unlike any specific musical style. It is more like the sound of language-before-language: the emotional quality of speech without the semantic content. Pure meaning without words.\n\nLet this imagined music play without trying to construct it. The mind, given this instruction, often produces something genuinely surprising. Let whatever arises arise.\n\nAt some point, the music may shift from something you are imagining to something that feels as if it is arriving. This transition — if it occurs — is the threshold Matangi's practice works toward. Do not try to force it. Simply remain receptive.\n\nThe music plays. You listen. This is the full scope of this stage.",
        ambientColor: "#2d6a4f",
        breathInstruction: "Breathing into the music — let the breath and the imagined sound move together",
      },
      {
        id: "parrot-teaching",
        title: "The Parrot's Echo",
        duration: 240,
        instruction: "Matangi's parrot repeats whatever is spoken into the space. This is not mere mimicry — it is a teaching.\n\nSomething arises in you — an impulse toward a word, a phrase, an image, a sound. Something you almost know but haven't said yet.\n\nLet it be said — silently, internally, to the parrot.\n\nThe parrot repeats it. And in the repetition, something shifts — the thing is more real now. It has been heard. Even this internal hearing, this self-witnessing, changes the reality of what was said.\n\nRepeat this as many times as impulses arise. There is no pressure to produce anything. If nothing arises, simply remain in the presence of the river of sound.",
        ambientColor: "#256040",
      },
      {
        id: "dissolution",
        title: "Into the River",
        duration: 240,
        instruction: "Gradually, let the specific sounds and images begin to dissolve back into the primordial vibration that was there at the beginning.\n\nAll the bija sounds — all the music, all the words — dissolving back into Om, and Om dissolving back into the silence from which it came.\n\nYou are floating in that silence now. The river of speech is still there — it is always there — but you are resting on its bank rather than being carried by it.\n\nThis is the silence that makes speech possible. You can be here as long as feels natural.",
        ambientColor: "#0f1729",
        breathInstruction: "Very slow, very deep, very even",
      },
      {
        id: "return-river",
        title: "Return",
        duration: 120,
        instruction: "Slowly return to the awareness of your body, your breath, the sounds of your physical environment.\n\nNotice whether anything has shifted in the quality of your awareness. Not looking for something dramatic — noticing whether the texture of ordinary consciousness has any slightly different quality after this practice.\n\nOpen your eyes when ready. The river continues.",
        ambientColor: "#0a0a0f",
      },
    ],
    closing: "This meditation works with the living quality of sound itself. The effect tends to be subtle — a slight increase in sensitivity to language, both what is said and what is left unsaid. This often persists for several hours after the practice.",
    afterpractice: "You may find that words seem slightly more charged for a while after this practice — that the words of others land with more weight, or that your own words feel more considered before they arrive. This is Matangi's gift from this practice.",
  },
  {
    id: "listening-mind",
    number: 3,
    title: "The Listening Mind",
    subtitle: "Cultivating deep receptivity",
    duration: "25–30 min",
    level: "Deep",
    theme: "Receptivity, hearing beyond words, the wisdom already present",
    description: "A practice for developing the specific quality of attention that Karna-Matangi governs — the listening that hears beneath words, between words, and in the silence that surrounds them.",
    intention: "To empty the listening apparatus of its constant preparation for response, creating space for genuine reception.",
    ambientPalette: ["#0a0a0f", "#100d1a", "#3a2268", "#6b46c1"],
    stages: [
      {
        id: "clearing-commentary",
        title: "Clearing the Commentary",
        duration: 300,
        instruction: "Sit comfortably. Close your eyes.\n\nFor the first few minutes, simply notice the inner commentary — the continuous voice that evaluates, plans, remembers, anticipates. Do not try to stop it. Simply observe it as if from a slight distance: 'Ah, there is the planning mind. There is the evaluating mind. There is the memory of this morning.'\n\nYou are not your commentary. The commentary is a weather pattern in consciousness. You are the sky through which it moves.\n\nGradually, as you continue to observe it rather than participate in it, the commentary often begins to slow. Not because you suppressed it — because you stopped feeding it with attention. Let this happen at its own pace.",
        ambientColor: "#100d1a",
      },
      {
        id: "external-listening",
        title: "Listening Outward",
        duration: 300,
        instruction: "Now bring attention to the sounds in your environment. Whatever is present.\n\nThe practice: hear each sound completely, without naming it. Naming is a form of filing — once you say 'traffic,' you have processed the sound and can stop attending to it. Instead, stay with the raw sound.\n\nThe sound near you and the sound far away. The rhythmic and the arrhythmic. The constant and the sudden.\n\nYou are not analyzing. You are not filing. You are simply present to the full acoustic environment, including everything that is usually filtered out as 'background.'\n\nThe 'background' is actually the continuous transmission. Matangi is the patron of this listening.",
        ambientColor: "#1e1040",
        breathInstruction: "Let the breath become part of the auditory landscape — just another sound",
      },
      {
        id: "internal-listening",
        title: "Listening Inward",
        duration: 360,
        instruction: "Turn the same quality of listening inward.\n\nWhat is happening inside? Not thoughts about what is happening — the actual texture of the inner experience. The quality of the breath. The sensations in the body. The emotional tone, if there is one — not the story about the emotion, just its quality. Warm? Heavy? Restless? Clear?\n\nAnd beneath those: is there a knowing that is present before thoughts about it? A sense of what is true in this moment — not abstract truth but the specific truth of this specific moment — that exists prior to your thinking about it?\n\nThis is what Matangi governs in her Karna form: the knowing that arrives before articulation. The wisdom that is always already present, waiting for the thinking mind to go quiet enough to receive it.",
        ambientColor: "#2d1a5e",
        breathInstruction: "Breathe as if listening to the breath, rather than controlling it",
      },
      {
        id: "the-unspoken",
        title: "Hearing the Unspoken",
        duration: 360,
        instruction: "This is the core practice of Karna-Matangi.\n\nBring to awareness someone in your life — not a problem, not a conflict, simply someone. Let their presence arise in your awareness as fully as it can.\n\nNow: what are they not saying? Not what you want them to say, or what you fear they think, or what you project onto them. But what, in your most honest perception, might they be struggling to say?\n\nStay with this. Let it be uncertain. You may be wrong. The practice is not about accuracy — it is about the quality of attention. You are practicing hearing beneath the surface, without the defensive reflex of making the other person's unsaid words into a problem for you.\n\nMatangi's listening is not strategic. It is simply more present than ordinary hearing.",
        ambientColor: "#3a2268",
        breathInstruction: "Each inhalation draws the awareness deeper; each exhalation releases the reflex to respond",
      },
      {
        id: "silence-wisdom",
        title: "The Wisdom in Silence",
        duration: 300,
        instruction: "Release the person you brought to awareness. Let the attention become diffuse again — present to the whole interior and exterior acoustic environment, without focusing anywhere in particular.\n\nRemain in this diffuse, open, listening state.\n\nNotice what arrives. Not what you produce — what arrives. The thought that appears without preparation. The image. The feeling. The fragment of knowing. The sudden clear seeing of something you have been circling for weeks.\n\nMatangi is the patron of what arrives when the mind stops talking to itself.\n\nStay here for as long as feels genuine.",
        ambientColor: "#4a2d8a",
      },
      {
        id: "integration",
        title: "Integration",
        duration: 180,
        instruction: "Gradually return to ordinary waking awareness. Let the sounds of the environment reassert themselves as background. Let the inner commentary return — it will; there is no elimination of the ordinary mind in this practice.\n\nBut notice: after time spent in the listening state, the commentary often returns at a slightly different quality. Slightly less compulsive. Slightly more spacious. The inner space is a little larger than it was before.\n\nThis is Karna-Matangi's gift from this practice.",
        ambientColor: "#1e1040",
      },
    ],
    closing: "The listening practice is cumulative. Done regularly, it begins to affect ordinary daily listening — conversations feel different, the quality of attention one brings to others shifts. This is not a spiritual achievement. It is simply the natural consequence of having exercised the capacity.",
    afterpractice: "For the remainder of this day, practice the listening quality in at least one conversation — not as a technique, but as a sincere intention to hear more than the words being said.",
  },
  {
    id: "library-beyond-time",
    number: 4,
    title: "The Library Beyond Time",
    subtitle: "A journey into the archive of all knowledge",
    duration: "30–35 min",
    level: "Advanced",
    theme: "Esoteric knowledge, the Akashic tradition, wisdom beyond ordinary access",
    description: "The most expansive of the four practices — a visualization of the mythic library that contains all knowledge, including what has been suppressed, discarded, or not yet discovered. Matangi as the keeper and guide.",
    intention: "To experience the quality of knowing that is available when the categories of 'legitimate' and 'illegitimate' knowledge dissolve.",
    ambientPalette: ["#0a0a0f", "#0c1a12", "#2d6a4f", "#b8962e"],
    stages: [
      {
        id: "approach",
        title: "The Approach",
        duration: 240,
        instruction: "Begin by imagining yourself at the edge of an enormous forest at dusk. Not a threatening forest — a deep one, old, full of intelligence. The kind of forest that has been here since before human memory.\n\nYou have been walking for some time and you are not lost — you are arriving. There is a path you have been following, and it has led you to this edge.\n\nThe light inside the forest is already different from the light outside it. Greener. More alive. As if photosynthesis has been happening here so long that the light itself has taken on the quality of living intelligence.\n\nYou step into it.",
        ambientColor: "#0a0a0f",
      },
      {
        id: "forest-path",
        title: "The Forest Path",
        duration: 300,
        instruction: "The path winds deeper. On either side, the trees are enormous — the kind whose canopy is so high that it functions as its own weather system. The undergrowth is wild but not impenetrable. You walk easily.\n\nAs you walk, notice that the trees have markings — not carved but grown, as if the tree itself formed these symbols in its bark over decades. You cannot read them, but you recognize some of them. A spiral. A veena. A parrot in flight. A woman's form, standing at a doorway.\n\nThe night creatures are beginning. Their sounds are not disturbing here but welcoming — as if your passage has been noted and is not unwelcome.\n\nYou are going toward something. You do not know exactly what it is, but the quality of your anticipation is not anxious. It is the quality of a scholar approaching a library, or a musician approaching a concert, or a practitioner approaching the threshold of a very old practice.",
        ambientColor: "#0c1a12",
        breathInstruction: "Breathe with the rhythm of walking",
      },
      {
        id: "discovery",
        title: "The Discovery",
        duration: 240,
        instruction: "At the heart of the forest, where the trees are oldest and the canopy thickest, the path opens onto a clearing.\n\nIn the clearing stands a structure that should not exist here — a library. Not a modern library. An ancient one, its architecture like no single tradition but somehow containing the aesthetic logic of many. Its walls are dark stone, covered with the same symbols you saw on the trees. Its windows glow with a warm light that has the quality of many candles in a very deep space.\n\nThe door stands open.\n\nMatangi stands just inside the threshold, as if she has been expecting you — which, in the logic of this space, she has. She is not performing a greeting. She is simply there, interested, present, holding the space.\n\nShe gestures — not commanding but inviting — deeper inside.",
        ambientColor: "#163d28",
      },
      {
        id: "interior-library",
        title: "Inside the Library",
        duration: 420,
        instruction: "The interior is impossible in the best way. The building from outside suggested a certain size. The interior is much larger. The shelves rise to heights that should exceed the building's walls. The space somehow contains a forest inside it — or the forest extends through the walls without contradiction.\n\nThe shelves do not contain only books. They contain other forms of stored knowledge: scrolls, tablets, objects, instruments, vessels, things that are not yet nameable. Every system of recording knowledge that human beings have ever used seems to be represented, along with systems you don't recognize.\n\nMatangi moves among the shelves as a scholar moves in her own library — with the ease of genuine belonging. She shows you something you didn't expect: a section that has no category label, no organizing system. A place where the rejected knowledge is stored. The texts that were burned. The knowledge that was suppressed. The discoveries that were made and then denied. The wisdom that arrived through channels considered illegitimate and was therefore never recorded in the official archives.\n\nThis section is enormous.\n\nSpend time here. Let your attention be drawn to whatever draws it, without evaluation. This is a library — you are not committing to anything by picking something up and looking at it. You are simply browsing in the archive of everything that has been dismissed.",
        ambientColor: "#1e4d33",
        breathInstruction: "Slow and deep, as in sustained concentration",
      },
      {
        id: "matangi-reading",
        title: "Matangi Reads to You",
        duration: 360,
        instruction: "Matangi leads you to a place to sit — a reading alcove with a window overlooking the part of the forest the library is growing within. The forest and the library are the same thing; you understand this now.\n\nShe takes something from the shelves — you cannot see what it is exactly — and she begins to read to you.\n\nYou do not hear specific words. You receive what the words are about. The content arrives as understanding rather than as language. This is how she reads.\n\nLet whatever understanding arrives, arrive. Do not try to hold it too tightly — it is not a transmission you need to memorize or analyze. It will remain in you in the form it needs to remain in you, which may not be articulable for some time.\n\nShe reads until she is done. You will know when she is done because the quality of the air in the alcove shifts slightly — a breath, a completion.",
        ambientColor: "#256040",
        breathInstruction: "Let the breath become very quiet and still, as in deep reading",
      },
      {
        id: "gift",
        title: "The Gift",
        duration: 240,
        instruction: "Before you leave, Matangi offers you something from the library. It may be visible — an object, a text, an instrument. Or it may be invisible — a quality, a permission, an understanding.\n\nReceive it without questioning whether you deserve it or are qualified to hold it. She knows what she is offering. Your only task is to receive.\n\nHold it for a moment. Feel its weight, its texture, its quality. You will carry this back with you.",
        ambientColor: "#2d6a4f",
      },
      {
        id: "departure",
        title: "The Departure",
        duration: 240,
        instruction: "Take your leave of the library — of Matangi, of the space. There is no formal ceremony. Simply turn toward the door.\n\nAs you walk back through the forest path, notice that it is lighter than it was when you arrived. Not daylight — the forest's own light, which is the light of sustained intelligence over long time.\n\nThe path leads you back to the edge where you entered. You step out of the forest into the ordinary world.\n\nThe ordinary world is the same. You are slightly different.\n\nReturn to the room, the breath, the body. Take whatever time you need.",
        ambientColor: "#163d28",
        breathInstruction: "Breathe life back into the body as you return",
      },
    ],
    closing: "This meditation works with the mythic dimension — the layer of imagination that operates through symbol and story. The library and the gift are not literally real in the ordinary sense, but they are not merely symbolic either. The understanding that arrives through this kind of practice has its own validity.",
    afterpractice: "The gift received in this practice often becomes clear over the following days rather than immediately. Pay attention to what feels newly available, newly permitted, newly possible in the domain of knowledge and expression.",
  },
];
