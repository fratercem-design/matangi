// ═══════════════════════════════════════════════════════════
// MATANGI HYMNS — Sanskrit hymns with transliteration & translation
// ═══════════════════════════════════════════════════════════

export interface Hymn {
  id: string;
  title: string;
  type: "Stotra" | "Dhyana" | "Kavacham" | "Ashtakam" | "Stuti";
  tradition: string;
  context: string;
  verses: {
    number: number;
    sanskrit: string;
    transliteration: string;
    translation: string;
    commentary?: string;
  }[];
  closing?: string;
}

export const hymns: Hymn[] = [
  {
    id: "dhyana-shloka",
    title: "Matangi Dhyana Shloka",
    type: "Dhyana",
    tradition: "Shakta Tantra",
    context: "The dhyana shloka is recited before meditation to build the inner visualization of the goddess. Each line constructs one aspect of her form, until the full image is established in the practitioner's awareness.",
    verses: [
      {
        number: 1,
        sanskrit: "श्यामां शिवप्रियां शुद्धां\nमुक्तकेशीं वरप्रदाम्।\nवीणावादनसंयुक्तां\nशुकहस्तां मनोहराम्॥",
        transliteration: "Śyāmāṃ śivapriyāṃ śuddhāṃ\nmuktakeśīṃ varapradām.\nVīṇāvādanasaṃyuktāṃ\nśukahastāṃ manoharām.",
        translation: "Dark-complexioned, beloved of Shiva, radiant in her own nature,\nwith flowing unbound hair, she who grants the highest boon.\nHer hands moving across the veena's strings,\nthe parrot perched in her grasp — she who captivates the mind.",
        commentary: "The opening verse establishes her color (emerald-dark), her freedom (unbound hair symbolizes liberation from social constraint), her musicianship, and her companion the parrot.",
      },
      {
        number: 2,
        sanskrit: "रक्तनेत्रां महोग्रां च\nसर्वाभरणभूषिताम्।\nचन्द्रार्धकृतमौलिञ्च\nसुरासवपरायणाम्॥",
        transliteration: "Raktanetrāṃ mahograṃ ca\nsarvābharaṇabhūṣitām.\nCandrārdhakṛtamauliñca\nsurāsavaparāyaṇām.",
        translation: "Red-eyed — eyes that have seen through every construction —\nadorned with every ornament, majestic in her power.\nA crescent moon crowning her head at the liminal edge,\ngiven fully to the divine intoxicant that dissolves the ordinary mind.",
        commentary: "The red eyes do not signify rage but the visionary state — seeing through the ordinary. The crescent moon marks her as a liminal deity, living between states.",
      },
      {
        number: 3,
        sanskrit: "वनमालाविभूषाढ्यां\nसर्वसम्पत्प्रदायिनीम्।\nमातङ्गीं परमेशानीं\nध्यायेद्योगिगणार्चिताम्॥",
        transliteration: "Vanamālāvibhūṣāḍhyāṃ\nsarvasampat-pradāyinīm.\nMātaṅgīṃ parameśānīṃ\ndhyāyed yogigaṇārcitām.",
        translation: "Richly adorned with a garland of forest flowers —\nnot garden-cultivated but wild, from the margin.\nGranter of all true abundance — not material accumulation\nbut the wealth that cannot be taken: wisdom, creative power, authentic speech.\nThus the supreme sovereign Matangi is meditated upon\nby the assembly of yogis who have found the path through the threshold.",
        commentary: "Forest flowers specifically — wild, uncultivated, not offered in the usual form of 'pure' garden flowers — reinforcing her identity as the deity of what grows outside the gate.",
      },
    ],
    closing: "This meditation verse, when recited with sustained attention, builds the inner image of the goddess as the mind's eye begins to see in emerald and gold.",
  },
  {
    id: "matangi-stotra",
    title: "Matangi Stotra — Opening Praise",
    type: "Stotra",
    tradition: "Shakta Tantra",
    context: "Sung at the opening of worship to establish the vibrational container for all that follows.",
    verses: [
      {
        number: 1,
        sanskrit: "मातङ्गि भुवनेश्वरि\nत्रिजगतां संमोहिनि सुन्दरि।\nविद्येशि प्रणतार्तिभञ्जनकरि\nश्रीचक्रसञ्चारिणि॥",
        transliteration: "Mātaṅgi bhuvaneshvari\ntrijagataṃ saṃmohini sundari.\nVidyeshi praṇatārtibhañjanakari\nśrīcakrasañcāriṇi.",
        translation: "O Matangi — sovereign of all worlds,\nyou who enchant all three realms without effort.\nGoddess of all knowledge, destroyer of suffering for those who surrender,\nyou who move freely through the sacred geometric architecture of existence.",
      },
      {
        number: 2,
        sanskrit: "श्रीकण्ठप्रियवल्लभे\nशुकमुखे वीणाकरे मुग्धहास्ये।\nसंगीतप्रिय देवि\nमातङ्गेश्वरी नमोस्तुते॥",
        transliteration: "Śrīkaṇṭhapriyavallabhe\nśukamukhe vīṇākare mugdhahāsye.\nSaṃgītapriya devi\nmātaṅgeśvarī namostute.",
        translation: "Beloved of Shrikantha — the glorious-throated one —\nyou whose companion is the parrot, whose hands hold the veena,\nwhose smile is disarming in its naturalness.\nO goddess who loves music above formality —\nsovereign Matangi, I bow to you completely.",
      },
    ],
  },
  {
    id: "matangi-kavacham",
    title: "Matangi Kavacham — The Armor of Her Names",
    type: "Kavacham",
    tradition: "Tantric protective liturgy",
    context: "The kavacham is worn like armor — recited to invoke her protection over each region of the body. Each verse assigns a different aspect of the goddess to a different part of the practitioner's being.",
    verses: [
      {
        number: 1,
        sanskrit: "मातङ्गी पातु मे शीर्षं\nललाटं चण्डिका तथा।\nनेत्रे पातु महाविद्या\nश्रोत्रे पातु सरस्वती॥",
        transliteration: "Mātaṅgī pātu me śīrṣaṃ\nlalāṭaṃ caṇḍikā tathā.\nNetre pātu mahāvidyā\nśrotre pātu sarasvatī.",
        translation: "Matangi — protect my crown, the seat of knowledge.\nChandika — protect my forehead, where perception begins.\nMahavidya — protect my eyes, through which I read the world.\nSaraswati — protect my ears, through which her transmissions arrive.",
      },
      {
        number: 2,
        sanskrit: "वाचं पातु सुराध्यक्षा\nकण्ठं पातु शुकप्रिया।\nबाहू पातु विनोदिन्यौ\nहस्तौ वीणाधरा तथा॥",
        transliteration: "Vācaṃ pātu surādhyakṣā\nkaṇṭhaṃ pātu śukapriyā.\nBāhū pātu vinodinyau\nhastau vīṇādharā tathā.",
        translation: "My speech — protected by the sovereign of all learning.\nMy throat — guarded by she who loves the parrot's honest echo.\nMy arms — held by she who brings true delight.\nMy hands — cradled by the one who holds the veena,\nso that what they make may carry the divine vibration.",
      },
      {
        number: 3,
        sanskrit: "हृदयं मातृरूपिण्याः\nकुक्षिं पातु प्रियंवदा।\nनाभिं पातु वरारोहा\nपादौ पातु दिगम्बरी॥",
        transliteration: "Hṛdayaṃ mātṛrūpiṇyāḥ\nkukṣiṃ pātu priyaṃvadā.\nNābhiṃ pātu varārohā\npādau pātu digambarī.",
        translation: "My heart — protected by she who is the essence of the mother-form.\nMy center — guarded by she who speaks sweetly and without falsity.\nMy core — held by the goddess of the beautiful form.\nMy feet — that walk toward the margin, toward the threshold —\nprotected by she who wears the directions of space as her garment.",
      },
    ],
  },
  {
    id: "matangi-ashtakam",
    title: "Matangi Ashtakam — Eight Verses of Pure Praise",
    type: "Ashtakam",
    tradition: "Shakta devotional",
    context: "Eight verses celebrating eight aspects of her nature — eight octaves of the same fundamental transmission.",
    verses: [
      {
        number: 1,
        sanskrit: "नमामि मातङ्गि महेशकान्ते\nसरस्वती संगमरूपशान्ते।\nसदा सुगीतां सुरसेविते च\nप्रसीद विद्याफलदे प्रशान्ते॥",
        transliteration: "Namāmi mātaṅgi maheśakānte\nsarasvatī saṃgamarūpaśānte.\nSadā sugītāṃ surasevite ca\nprasīda vidyāphalade praśānte.",
        translation: "I bow to Matangi, beloved of the great Shiva,\nwho is the serene meeting-point of all Saraswati governs\nbut carries it into the wild place.\nAlways singing beautifully, attended by the celestial —\nbe gracious, O granter of the fruit of true knowledge, O tranquil one.",
      },
      {
        number: 2,
        sanskrit: "त्वमेव माता च पिता त्वमेव\nत्वमेव बन्धुश्च सखा त्वमेव।\nत्वमेव विद्या द्रविणं त्वमेव\nत्वमेव सर्वं मम देवदेवि॥",
        transliteration: "Tvameva mātā ca pitā tvameva\ntvameva bandhuśca sakhā tvameva.\nTvameva vidyā draviṇaṃ tvameva\ntvameva sarvaṃ mama devadevi.",
        translation: "You alone are the mother and the father.\nYou alone are the kinship that holds and the friendship that walks beside.\nYou alone are the knowledge — not information, but the living wisdom.\nYou alone are the true wealth — not what can be taken, but what cannot.\nYou are entirely everything, O goddess of goddesses.",
      },
    ],
    closing: "The Ashtakam ends in absolute identification — the realization that the goddess and the qualities of wisdom, creativity, and authentic speech are not external to the practitioner but already present within them, awaiting recognition.",
  },
  {
    id: "raja-matangi-stuti",
    title: "Raja Matangi Stuti",
    type: "Stuti",
    tradition: "Royal Shakta lineage",
    context: "The stuti for the royal form — Raja-Matangi — invoked by artists, performers, poets, and those who must speak in public with authority.",
    verses: [
      {
        number: 1,
        sanskrit: "राजमातङ्गि देवेशि\nवाक्सिद्धिप्रदायिनि।\nसर्वसंमोहिनि देवि\nनमस्ते परमेश्वरि॥",
        transliteration: "Rājamatāṅgi deveśi\nvāksiddhipradāyini.\nSarvasaṃmohini devi\nnamas te parameśvari.",
        translation: "O Royal Matangi, sovereign of the divine,\ngiver of the perfection of speech — Vak Siddhi.\nYou who enchant all — not through deception\nbut through the irresistible truth of authentic expression.\nI bow to you, O supreme sovereign.",
      },
      {
        number: 2,
        sanskrit: "गानविद्याविशारदे\nकाव्यशक्तिप्रदे शुभे।\nसर्वकलाविनोदिन्यै\nमातङ्ग्यै नमो नमः॥",
        transliteration: "Gānavidyāviśārade\nkāvyaśaktiprade śubhe.\nSarvakalāvinodinyai\nmātaṅgyai namo namaḥ.",
        translation: "You who are supremely skilled in the science of music,\nwho grants the power of poetry — the ability to say the true thing\nin the form that makes it land.\nO auspicious one, delighting in all the arts —\nto Matangi, again and again I bow.",
      },
    ],
  },
];

export const hymnCategories = ["All", "Stotra", "Dhyana", "Kavacham", "Ashtakam", "Stuti"] as const;


// ═══════════════════════════════════════════════════════════
// TRAILOKYA MANGALA KAVACHAM — Full canonical text
// Source: Nandyāvarta Tantram, Uttarakhaṇḍa
// Transliteration & commentary from manblunder.com / traditional
// ═══════════════════════════════════════════════════════════

export interface KavachamVerse {
  number: number;
  iast: string;
  devanagari: string;
  translation: string;
  commentary?: string;
  type?: "prologue" | "dialogue" | "viniyoga" | "nyasa" | "kavaca" | "phala" | "closing";
}

export interface NyasaStep {
  number: number;
  iast: string;
  devanagari: string;
  procedure: string;
}

export const kavacham = {
  id: "trailokya-mangala-kavacham",
  title: "Śrī Mātaṅgī Trailokya Maṅgala Kavacam",
  devanagari: "अथ मातङ्गी त्रैलोक्य मङ्गल कवचम्",
  source: "Nandyāvarta Tantram, Uttarakhaṇḍa",
  type: "Kavacham" as const,
  tradition: "Shakta Tantra",
  sage: "Śrī Dakṣiṇāmūrti",
  meter: "Virāṭ (विराट्)",
  deity: "Śrī Mātaṅgī",
  purpose: "Caturvarga siddhi — fulfillment of the four puruṣārthas (dharma, artha, kāma, mokṣa)",

  prologue: `Śrī Mātaṅgī Trailokya Maṅgala Kavacam is an armor hymn for obtaining success in all undertakings in any of the three realms. Nothing is impossible for the devotee who worships Her through this kavacam. She is associated with all supernatural siddhi-s and is considered very secretive. There are no restrictions in reciting this kavacam and no strict procedures required during the recitation period. Those who are attracted strongly towards the Divine Mother Śrī Mātaṅgī and initiated into any of Her mantras may recite this and gain its benefits. She is Ucchiṣṭa — ritually impure — and therefore has very few rituals associated with Her. There are no pre-requisites or qualifications required. All that She requires is pure devotion.`,

  viniyogaMantra: {
    iast: "oṃ asya śrīmātaṅgī kavacasya । śrīdakṣiṇāmūrtiḥ ṛṣiḥ । virāṭ chandaḥ । śrī mātaṅgī devatā । caturvarga siddhaye pāṭhe viniyogaḥ ॥",
    devanagari: "ॐ अस्य श्रीमातङ्गी कवचस्य । श्रीदक्षिणामूर्तिः ऋषिः । विराट् छन्दः । श्री मातङ्गी देवता । चतुर्वर्ग सिद्धये पाठे विनियोगः ॥",
    translation: "I pray to Śrī Mātaṅgī Devī through this Kavaca mantra. The sage who revealed it is Śrī Dakṣiṇāmūrti. The meter is Virāṭ. The deity is Śrī Mātaṅgī. May this kavacam fulfill all four coveted puruṣārthas — dharma, artha, kāma, and mokṣa.",
  },

  nyasaSteps: [
    {
      number: 1,
      iast: "śrīdakṣiṇā mūrti ṛṣaye namaḥ śirasi",
      devanagari: "श्रीदक्षिणा मूर्ति ऋषये नमः शिरसि",
      procedure: "Open the right palm and touch the top of the forehead with the ring and thumb fingers joined at the tip — saluting the sage Dakṣiṇāmūrti at the crown.",
    },
    {
      number: 2,
      iast: "virāṭ chandase namaḥ mukhe",
      devanagari: "विराट् छन्दसे नमः मुखे",
      procedure: "Touch the lips of the mouth with the above mudrā — establishing the meter Virāṭ at the face.",
    },
    {
      number: 3,
      iast: "śrī mātaṅgī devatāyai namaḥ hṛdi",
      devanagari: "श्री मातङ्गी देवतायै नमः हृदि",
      procedure: "Touch the heart with the right palm — invoking the deity Mātaṅgī at the heart center.",
    },
    {
      number: 4,
      iast: "caturvarga siddhaye jape viniyogāya namaḥ sarvāṅge",
      devanagari: "चतुर्वर्ग सिद्धये जपे विनियोगाय नमः सर्वाङ्गे",
      procedure: "Run both palms all over the body — dedicating the entire being to the fourfold purpose of this practice.",
    },
  ] as NyasaStep[],

  verses: [
    // ── Dialogue opening ──────────────────────────────────
    {
      number: 1,
      type: "dialogue" as const,
      iast: "sādhusādhu mahādeva kathayasva sureśvara ।\nmātaṅgī kavacaṃ divyaṃ sarva siddhi karaṃ nṛnām ॥",
      devanagari: "साधुसाधु महादेव कथयस्व सुरेश्वर ।\nमातङ्गी कवचं दिव्यं सर्व सिद्धि करं नृनाम् ॥ १ ॥",
      translation: "The Divine Mother Śaktī spoke — Oh Lord of the entire Creation, ardently worshipped by the celestials. Oh most virtuous one, can you please reveal all the secrets of the sacred Śrī Mātaṅgī Kavacam that accomplishes all tasks, bestows siddhi-s, and rings in auspiciousness all around?",
      commentary: "The prologue establishes the dialogue between Śiva and Śaktī — the classic Tantric frame. Śaktī asks the question so that the teaching has a legitimate receiver. The question itself is the first act of correct listening.",
    },
    {
      number: 2,
      type: "dialogue" as const,
      iast: "śṛṇu devī pravakṣyāmi mātaṅgī kavacaṃ śubhaṃ ।\ngopanīyaṃ mahādevī maunī jāpaṃ samācaret ॥",
      devanagari: "शृणु देवी प्रवक्ष्यामि मातङ्गी कवचं शुभं ।\nगोपनीयं महादेवी मौनी जापं समाचरेत् ॥ २ ॥",
      translation: "Lord Śiva spoke — Oh my dear Devi, I shall narrate the auspicious and sacred Śrī Mātaṅgī Kavacam. Please listen attentively, oh Mahādevī. This hymn is secretive and should not be easily revealed to all, and should be recited mentally.",
      commentary: "The instruction to recite mentally (maunī jāpaṃ) is significant — this is not primarily a vocal practice but an internal one. The armor is not worn externally but constructed inwardly through the quality of attention brought to each verse.",
    },

    // ── Kavaca body ────────────────────────────────────────
    {
      number: 3,
      type: "kavaca" as const,
      iast: "oṃ śiro mātaṅginī pātu bhuvaneśī tu cakṣuṣī ।\ntoḍalā karṇa-yugalaṃ tripurā vadanaṃ mama ॥",
      devanagari: "ॐ शिरो मातङ्गिनी पातु भुवनेशी तु चक्षुषी ।\nतोडला कर्णयुगलं त्रिपुरा वदनं मम ॥ ३ ॥",
      translation: "The head is protected by the spiritually intoxicating Divine Mother Mātaṅginī. The ruler of all Creation, Bhuvaneśvarī, protects the eyes. The karma-splitting Toḍalā protects both ears. The triad-manifesting Tripurā protects the face.",
      commentary: "Activation of the highest Sahasrāra and Ājñā cakras is implied. The assignment of goddesses to the uppermost regions of the body establishes that spiritual perception — seeing, hearing, and cognizing — is placed under divine protection first.",
    },
    {
      number: 4,
      type: "kavaca" as const,
      iast: "pātu kaṇṭhe mahāmāyā hṛdi maheśvarī tathā ।\ntripuṣpā pārśvayoḥ pātu gude kāmeśvarī mama ॥",
      devanagari: "पातु कण्ठे महामाया हृदि महेश्वरी तथा ।\nत्रिपुष्पा पार्श्वयोः पातु गुदे कामेश्वरी मम ॥ ४ ॥",
      translation: "The throat is protected by the reality-manifesting Mahāmāyā. The heart is under the mightiest Maheśvarī. The three-body manifesting Tripuṣpā protects the sides of the body, and the desire-fulfilling Kāmeśvarī protects the base.",
      commentary: "The Viśuddha (throat) cakra activation is directly implied — Mahāmāyā at the throat means the veiling power itself guards speech, ensuring that what is spoken is not mere illusion but genuine transmission.",
    },
    {
      number: 5,
      type: "kavaca" as const,
      iast: "ūrudvaye tathā caṇḍī jaṅghayośca harapriyā ।\nmahāmāyā pādayugme sarvāṅgeṣu kuleśvarī ॥",
      devanagari: "ऊरुद्वये तथा चण्डी जङ्घयोश्च हरप्रिया ।\nमहामाया पादयुग्मे सर्वाङ्गेषु कुलेश्वरी ॥ ५ ॥",
      translation: "Both thighs are protected by the duality-destroying Caṇḍī. The shanks are protected by Harapriyā, the consort of Lord Śiva. The feet are protected by Mahāmāyā. The sovereign of the sacred lineage, Kuleśvarī, protects the entire body.",
      commentary: "One gains a good standing in both spiritual and material realms, and the strength to withstand calamities. The feet — how one stands and moves through the world — are guarded by Mahāmāyā: the very power of manifestation itself.",
    },
    {
      number: 6,
      type: "kavaca" as const,
      iast: "aṅgaṃ pratyaṅgakaṃ caiva sadā rakṣatu vaiṣṇavī ।\nbrahma-randhre sadā rakṣen mātaṅgī nāma saṃsthitā ॥",
      devanagari: "अङ्गं प्रत्यङ्गकं चैव सदा रक्षतु वैष्णवी ।\nब्रह्मरन्ध्रे सदा रक्षेन् मातङ्गी नाम संस्थिता ॥ ६ ॥",
      translation: "All minor and internal organs are always protected by the omniscient Vaiṣṇavī. The brahma-randhra — the minute aperture at the crown, the seat of the Sahasrāra — is always protected by Mātaṅgī herself, established there by name.",
      commentary: "That Mātaṅgī herself guards the brahma-randhra is a profound statement: she who governs transgressive, liminal knowledge is specifically placed at the highest spiritual aperture. Forbidden wisdom is not below sacred wisdom — it sits at the crown.",
    },
    {
      number: 7,
      type: "kavaca" as const,
      iast: "rakṣen-nityaṃ lalāṭe sā mahā-piśācinīti ca ।\nnetrayoḥ sumukhī rakṣet devī rakṣatu nāsikām ॥",
      devanagari: "रक्षेन्नित्यं ललाटे सा महापिशाचिनीति च ।\nनेत्रयोः सुमुखी रक्षेत् देवी रक्षतु नासिकाम् ॥ ७ ॥",
      translation: "The forehead is always protected by the Goddess associated with extra-dimensional piśācis — the supreme Mahāpiśācinī. The eyes are protected by the stunningly beautiful Sumukhī. The nostrils are under the domain of Devī.",
      commentary: "The prāṇa, the flow of life-breath through the nostrils, is placed directly under Devī's care. Balanced breath leads to peace of mind, longevity, and happiness. Mahāpiśācinī at the forehead suggests that the extra-dimensional intelligence associated with Matangi guards perception itself.",
    },
    {
      number: 8,
      type: "kavaca" as const,
      iast: "mahāpiśācinī pāyān-mukhe rakṣatu sarvadā ।\nlajjā rakṣatu māṃ dantāñcauṣṭhau sammārjanī karā ॥",
      devanagari: "महापिशाचिनी पायान्मुखे रक्षतु सर्वदा ।\nलज्जा रक्षतु मां दन्ताञ्चौष्ठौ सम्मार्जनी करा ॥ ८ ॥",
      translation: "Mahāpiśācinī protects the mouth at all times. The modest and shy Lajjā protects the teeth and lips. The deep-cleansing Sammārjanī protects the hands.",
      commentary: "Lajjā — modesty, the right relationship to speech — guards the teeth and lips, the gates of utterance. This is the kavacham's teaching on right speech made architectural: the boundary between inner knowing and outer expression is guarded by the goddess of appropriate restraint.",
    },
    {
      number: 9,
      type: "kavaca" as const,
      iast: "cibuke kaṇṭhadeśe ca ṭhakāra tritayaṃ punaḥ ।\nsa-visargaṃ mahādevi hṛdayaṃ pātu sarvadā ॥",
      devanagari: "चिबुके कण्ठदेशे च ठकार त्रितयं पुनः ।\nसविसर्गं महादेवि हृदयं पातु सर्वदा ॥ ९ ॥",
      translation: "The bīja syllable ṭhaḥ occurring thrice in the Sumukhī Devī mantra — the triple ṭha with the halant visarga ḥ — protects the chin and throat. And the visarga ḥ, Oh Mahādevi, protects the heart at all times.",
      commentary: "Here the kavacham operates as a vibrational architecture: specific syllables are assigned to specific body regions. The visarga 'ḥ' — the open exhalation, the release — guards the heart. The out-breath, the offering, the release is what protects the Anāhata.",
    },
    {
      number: 10,
      type: "kavaca" as const,
      iast: "nābhiṃ rakṣatu māṃ lolā kālikā'vatu locane ।\nudare pātu cāmuṇḍā liṅge kātyāyanī tathā ॥",
      devanagari: "नाभिं रक्षतु मां लोला कालिकाऽवतु लोचने ।\nउदरे पातु चामुण्डा लिङ्गे कात्यायनी तथा ॥ १० ॥",
      translation: "The navel is protected by the vigorously vibrating Lolā. The eyes are protected by the Annihilator Kālikā. The belly is protected by the duality-destroying Cāmuṇḍā. The private parts are protected by Kātyāyanī, the remover of stubborn karmas.",
      commentary: "The Maṇipūra cakra (navel) activation grants immense courage and enhances will. The Svādhiṣṭhāna activation causes a resurgence in creative energy. Kālikā at the eyes — the power of time and dissolution guarding perception — means one sees through the constructions of ordinary reality.",
    },
    {
      number: 11,
      type: "kavaca" as const,
      iast: "ugratārā gude pātu pādau rakṣatucāṃbikā ।\nbhujau rakṣatu śarvāṇī hṛdayaṃ caṇḍabhūṣaṇā ॥",
      devanagari: "उग्रतारा गुदे पातु पादौ रक्षतुचांबिका ।\nभुजौ रक्षतु शर्वाणी हृदयं चण्डभूषणा ॥ ११ ॥",
      translation: "The enlightening Ugratārā protects the anal region. The feet are protected by the loving Aṃbikā. The arms are protected by the cakra-piercing Śarvāṇī. The heart is protected by the fierce and passionate Caṇḍabhūṣaṇā.",
      commentary: "Activation of the root Mūlādhāra cakra is implied, enabling the rise of kuṇḍalinī. The heart Anāhata cakra is protected again — this second mention of the heart emphasizes its centrality in the practice. The heart is armored twice: once through the throat's bīja, now through the fierce goddess.",
    },
    {
      number: 12,
      type: "kavaca" as const,
      iast: "jihvāyāṃ mātṛkā rakṣet-pūrve rakṣatu puṣṭikā ।\nvijayā dakṣiṇe pātu medhā rakṣatu varuṇe ॥",
      devanagari: "जिह्वायां मातृका रक्षेत्पूर्वे रक्षतु पुष्टिका ।\nविजया दक्षिणे पातु मेधा रक्षतु वरुणे ॥ १२ ॥",
      translation: "The tongue is protected by the Mātṛkā Devīs — the goddesses who wield the power of the Sanskrit alphabet and its sound vibrations. The East is protected by the satisfaction-generating Puṣṭikā. The South is under the domain of the victorious Vijayā. The intelligence-bestowing Medhā protects the West.",
      commentary: "The Mātṛkās — the letters of the Sanskrit alphabet as living goddesses — protect the tongue. This is among the most precise statements in the kavacham: the instrument of speech is guarded by the sacred sound-matrix itself. The directions then extend protection outward from the body into the world.",
    },
    {
      number: 13,
      type: "kavaca" as const,
      iast: "nairṛtye su-dayā rakṣed vāyavyāṃ pātu lakṣmaṇā ।\naiśānyāṃ rakṣenmāṃ devī mātaṅgī śubhakāriṇī ॥",
      devanagari: "नैरृत्ये सुदया रक्षेद् वायव्यां पातु लक्ष्मणा ।\nऐशान्यां रक्षेन्मां देवी मातङ्गी शुभकारिणी ॥ १३ ॥",
      translation: "The Southwest is protected by the most benevolent Dayā. The Northwest is protected by the fortune-bestowing Lakṣmaṇā. The auspicious Mātaṅgī herself — the fortune-bringing Goddess — protects the Northeast.",
      commentary: "Mātaṅgī's placement in the Northeast (Īśāna, the direction of Śiva and grace) is significant: the liminal, outcast goddess is assigned the direction of divine grace and spiritual elevation. Her domain is not the periphery but the direction of the highest sacred orientation.",
    },
    {
      number: 14,
      type: "kavaca" as const,
      iast: "rakṣet sureśī cāgneyyāṃ bagalā pātu cottare ।\nūrdhvaṃ pātu mahādevī devānāṃ hitakāriṇī ॥",
      devanagari: "रक्षेत् सुरेशी चाग्नेय्यां बगला पातु चोत्तरे ।\nऊर्ध्वं पातु महादेवी देवानां हितकारिणी ॥ १४ ॥",
      translation: "The Goddess of the celestials, Sureśī, protects the Southeast. The most potent Bagalā protects the North. The upward heavenly direction is under the Mahādevī, protector of all celestials and beings of the entire Creation.",
      commentary: "All ten directions are now covered — the four cardinal, four diagonal, and upward/downward. The practitioner stands at the center of a complete mandala of divine protection. Bagalā in the North, the direction of Kubera and material prosperity, brings her specific power of halting and victory.",
    },
    {
      number: 15,
      type: "kavaca" as const,
      iast: "pātāle pātu māṃ nityaṃ vaśinī viśvarūpiṇī ।\npraṇavaṃ ca tamo māyā kāmabījaṃ ca kūrcakam ॥",
      devanagari: "पाताले पातु मां नित्यं वशिनी विश्वरूपिणी ।\nप्रणवं च तमो माया कामबीजं च कूर्चकम् ॥ १५ ॥",
      translation: "The downward nether direction is always protected by the infinite Viśvarūpiṇī, who permeates and is the very form of all Creation. The auspiciousness-bestowing Praṇava oṃ, followed by the power-manifesting Māyā bīja hrīṃ, then the desire-fulfilling Kāma bīja klīṃ, and the attachment-removing kūrca bīja hūṃ —",
      commentary: "The verse begins the construction of the core mantra through its components. Below the earth, Viśvarūpiṇī — she who is all forms — holds the foundation. The bīja seeds then spell out the protective mantra's architecture, revealing that the armor is ultimately composed of sound itself.",
    },
    {
      number: 16,
      type: "kavaca" as const,
      iast: "mātaṅginī ṅeyutāstraṃ vahnijāyā'vadhirmanuḥ ।\nsārddhaukādaśa varṇā sā sarvatra pātu māṃ sadā ॥",
      devanagari: "मातङ्गिनी ङेयुतास्त्रं वह्निजायाऽवधिर्मनुः ।\nसार्द्धौकादश वर्णा सा सर्वत्र पातु मां सदा ॥ १६ ॥",
      translation: "Followed by 'mātaṅginyai,' then the enemy-eliminating astra bīja phaṭ, and the oblation-offering vahnijāyā bīja svāhā — completing the formation of the eleven-and-a-half-lettered mantra: oṃ hrīṃ klīṃ hūṃ mātaṅginyai phaṭ svāhā. This mantra of Śrī Mātaṅgī protects us everywhere at all times.",
      commentary: "The culminating mantra is revealed: oṃ hrīṃ klīṃ hūṃ mātaṅginyai phaṭ svāhā — eleven and a half letters. The kavacham itself is enclosed within this mantra, which is simultaneously the armor's lock and its key.",
    },

    // ── Phalaśruti ──────────────────────────────────────────
    {
      number: 17,
      type: "phala" as const,
      iast: "iti te kathitaṃ devi guhyād guhyataram param ।\ntrailokya maṅgalaṃ nāma kavacaṃ deva durlabham ॥",
      devanagari: "इति ते कथितं देवि गुह्याद् गुह्यतरम् परम् ।\nत्रैलोक्य मङ्गलं नाम कवचं देव दुर्लभम् ॥ १७ ॥",
      translation: "Oh dear Devi, this hymn is very secretive — among the greatest secrets. This kavacam is called 'Trailokya Maṅgala Kavacam' and is very hard to obtain even by the celestials. It will help one achieve success in all undertakings across all three realms.",
      commentary: "The kavacham is 'hard to obtain even by the celestials' (deva durlabham) — this is not elitism but an indication of its rarity and potency. What is genuinely powerful is not what is most common.",
    },
    {
      number: 18,
      type: "phala" as const,
      iast: "ya idaṃ prapaṭhen-nityaṃ jāyate sampadālayam ।\nparamaiśvaryam-atulaṃ prāpnuyānnātra saṃśayaḥ ॥",
      devanagari: "य इदं प्रपठेन्नित्यं जायते सम्पदालयम् ।\nपरमैश्वर्यमतुलं प्राप्नुयान्नात्र संशयः ॥ १८ ॥",
      translation: "One who recites this hymn daily will surely obtain all the wealth desired — material or spiritual or both. One will surely obtain the greatest possible spiritual elevation and the individual consciousness will merge with universal super-consciousness. Have no doubts. This is the plain Truth.",
      commentary: "The promise is unambiguous: the individual (jīva) merges with the universal (Śiva). The kavacham is not merely protective armor but a vehicle for the highest realization.",
    },
    {
      number: 19,
      type: "phala" as const,
      iast: "gurum-abhyarcya vidhivat kavacaṃ prapaṭhedyadi ।\naiśvaryaṃ su kavitvaṃ ca vāk siddhiṃ labhate dhruvam ॥",
      devanagari: "गुरुमभ्यर्च्य विधिवत् कवचं प्रपठेद्यदि ।\nऐश्वर्यं सु कवित्वं च वाक् सिद्धिं लभते ध्रुवम् ॥ १९ ॥",
      translation: "After paying due respects to one's guru, one who recites the kavacam properly will in due course obtain mastery over poetry and gain vāk siddhi — the unique power through which whatever one speaks manifests in reality. One will also surely gain sufficient wealth.",
      commentary: "Vāk siddhi is explicitly named: this kavacham is a direct vehicle for the perfection of speech. The guru's blessing is required not as bureaucratic requirement but because transmission of this kind of practice depends on a living lineage.",
    },
    {
      number: 20,
      type: "phala" as const,
      iast: "nityaṃ tasya tu mātaṅgī mahilā maṅgalaṃ caret ।\nbrahmā viṣṇuśca rudraśca ye devāḥ sura sattamāḥ ॥",
      devanagari: "नित्यं तस्य तु मातङ्गी महिला मङ्गलं चरेत् ।\nब्रह्मा विष्णुश्च रुद्रश्च ये देवाः सुर सत्तमाः ॥ २० ॥",
      translation: "One will never lose companionship with one's partner and there will be harmony in relationships. The trinity of Brahmā, Viṣṇu, and Rudra, as well as all the celestial gods —",
      commentary: "The social dimension of the kavacham's protection: harmonious relationships, stable partnership, and the support of the cosmic forces that maintain creation, preservation, and transformation.",
    },
    {
      number: 21,
      type: "phala" as const,
      iast: "brahma-rākṣasa vetālā grahādyā bhūta-jātayaḥ ।\ntaṃ dṛṣṭvā sādhakaṃ devi lajjā-yuktā bhavaṃti te ॥",
      devanagari: "ब्रह्मराक्षस वेताला ग्रहाद्या भूतजातयः ।\nतं दृष्ट्वा साधकं देवि लज्जायुक्ता भवंति ते ॥ २१ ॥",
      translation: "The great Brahma Rākṣasas, goblin-like Vetālās, the nine planetary grahās, the mischievous ghostly bhūtas and piśācas will look upon the sādhaka with jealousy, oh dear Devi. Such is the power of this hymn.",
      commentary: "In the symbolic language of the tradition, these entities represent the various forces — psychological, environmental, karmic — that obstruct the spiritual practitioner. The kavacham establishes such a field of protection that even these forces recognize the practitioner's standing.",
    },
    {
      number: 22,
      type: "phala" as const,
      iast: "kavacaṃ dhārayed-dyastu sarva-siddhiṃ labhed dhruvam ।\nrājāno'pi ca dāsāḥsyuḥ ṣaṭkarmāṇi ca sādhayet ॥",
      devanagari: "कवचं धारयेद्द्यस्तु सर्वसिद्धिं लभेद् ध्रुवम् ।\nराजानोऽपि च दासाःस्युः षट्कर्माणि च साधयेत् ॥ २२ ॥",
      translation: "One who wears and recites the kavacam regularly will gain all siddhi-s and sufficient wealth. One will be able to make even kings and people of high power submit to one's will through the six tantric acts (ṣaṭkarmas): śānti (peace), vaśya (attraction), stambhana (halting), vidveṣa (creating discord), uccāṭana (expulsion), māraṇa (defeat).",
      commentary: "The ṣaṭkarmas are presented here as natural consequences of complete siddhi — not techniques to be deployed aggressively but natural capacities that arise when one has fully internalized the kavacham's protection. Their primary application is self-mastery.",
    },
    {
      number: 23,
      type: "phala" as const,
      iast: "siddho bhavati sarvatra kim-anyair-bahu bhāṣitaiḥ ।\nidaṃ kavacam-ajñātvā mātaṅgī yo bhajen-naraḥ ॥",
      devanagari: "सिद्धो भवति सर्वत्र किमन्यैर्बहु भाषितैः ।\nइदं कवचमज्ञात्वा मातङ्गी यो भजेन्नरः ॥ २३ ॥",
      translation: "Why speak more, oh Devi? One achieves anything desired from the recitation of this kavacam. It is noted that one who worships Śrī Mātaṅgī without knowing this kavacam —",
      commentary: "The text is explicit: the kavacham is considered essential to any serious Mātaṅgī practice. It is the structural foundation upon which mantra repetition rests.",
    },
    {
      number: 24,
      type: "phala" as const,
      iast: "alpāyur-nirddhano mūrkhe bhavatyeva na saṃśayaḥ ।\ngurau bhaktiḥ sadā kāryā kavace ca dṛḍhā matiḥ ॥",
      devanagari: "अल्पायुर्निर्द्धनो मूर्खे भवत्येव न संशयः ।\nगुरौ भक्तिः सदा कार्या कवचे च दृढा मतिः ॥ २४ ॥",
      translation: "— will lose life longevity and wealth. Without doubt. One must maintain full and firm faith and sincere devotion to one's guru. With these, one will achieve success in all undertakings.",
      commentary: "The emphasis on the guru is consistent with all Tantric teaching: practice without transmission is a form of spiritual theft from oneself. The guru is the living link in the chain of awareness that the practice requires.",
    },
    {
      number: 25,
      type: "phala" as const,
      iast: "tasmai mātaṅginī devī sarva-siddhiṃ prayacchati ॥",
      devanagari: "तस्मै मातङ्गिनी देवी सर्वसिद्धिं प्रयच्छति ॥ २५ ॥",
      translation: "May the Divine Mother Śrī Mātaṅgī bestow complete success, all magical siddhi-s, wealth, auspiciousness, and prosperity to us all.",
      commentary: "The kavacham ends not with warning but with blessing — the final act is always the affirmation of grace. She gives everything. The entire structure of the kavacham has been building to this single sentence.",
    },
  ] as KavachamVerse[],

  closingVerse: {
    iast: "iti nandyāvarte uttarakhaṇḍe tvarita phaladāyinī mātaṅginī kavacaṃ samāptam",
    devanagari: "॥ इति नन्द्यावर्ते उत्तरखण्डे त्वरित फलदायिनी मातङ्गिनी कवचं समाप्तम् ॥",
    translation: "Thus ends the quick-yielding Śrī Mātaṅgī Trailokya Maṅgala Kavacam, derived from the Nandyāvarta Tantram, Uttarakhaṇḍa section.",
  },

  rootMantra: {
    iast: "oṃ hrīṃ klīṃ hūṃ mātaṅginyai phaṭ svāhā",
    devanagari: "ॐ ह्रीँ क्लीँ हूँ मातङ्गिन्यै फट् स्वाहा",
    letters: "Eleven and a half letters (sārddhaukādaśa varṇā)",
    components: [
      { bija: "oṃ (ॐ)", name: "Praṇava", meaning: "The primordial sound — ground of all existence" },
      { bija: "hrīṃ (ह्रीँ)", name: "Māyā bīja", meaning: "Transformative power — the seed of the great veil and the heart's truth" },
      { bija: "klīṃ (क्लीँ)", name: "Kāma bīja", meaning: "Desire-fulfilling seed — attraction, transformation, drawing what is needed" },
      { bija: "hūṃ (हूँ)", name: "Kūrca bīja", meaning: "Attachment-removing seed — fierce protective fire" },
      { bija: "mātaṅginyai", name: "Name", meaning: "To Mātaṅgī — the dative form, the offering-address" },
      { bija: "phaṭ", name: "Astra bīja", meaning: "The weapon-sound that cuts through and eliminates obstacles" },
      { bija: "svāhā", name: "Vahnijāyā bīja", meaning: "The oblation-seal — 'so be it,' the offering into the sacred fire" },
    ],
  },
};
