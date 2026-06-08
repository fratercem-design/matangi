export interface Hymn {
  id: string;
  title: string;
  type: string;
  verses: { sanskrit: string; transliteration: string; translation: string; }[];
  context: string;
}

export const hymns: Hymn[] = [
  {
    id: "matangi-stotra-1",
    title: "Matangi Stotra — Opening Invocation",
    type: "Stotra",
    context: "Sung at the opening of worship, before the mantras begin. Sets the vibrational container for the ritual.",
    verses: [
      {
        sanskrit: "मातङ्गि भुवनेश्वरि त्रिजगतां संमोहिनि सुन्दरि\nविद्येशि प्रणतार्तिभञ्जनकरि श्रीचक्रसञ्चारिणि",
        transliteration: "Mātaṅgi bhuvaneshvari trijagataṃ saṃmohini sundari\nvidyeshi praṇatārtibhañjanakari śrīcakrasañcāriṇi",
        translation: "O Matangi, sovereign of worlds, you who enchant all three realms,\nGoddess of knowledge, destroyer of suffering for those who bow,\nyou who move through the Sri Chakra —",
      },
      {
        sanskrit: "श्रीकण्ठप्रियवल्लभे शुकमुखे वीणाकरे मुग्धहास्ये\nसंगीतप्रिय देवि मातङ्गेश्वरी नमोस्तुते",
        transliteration: "Śrīkaṇṭhapriyavallabhe śukamukhe vīṇākare mugdhahāsye\nsaṃgītapriya devi mātaṅgeśvarī namostute",
        translation: "Beloved of Shrikantha, you who hold the veena, whose parrot echoes your words,\nwhose smile is disarming, who loves music above all —\nO sovereign Matangi, I bow to you.",
      },
    ],
  },
  {
    id: "matangi-dhyana",
    title: "Dhyana Shloka — Meditation Verse",
    type: "Dhyana",
    context: "Recited while building the internal visualization. Each line describes her form for the meditating mind to construct.",
    verses: [
      {
        sanskrit: "श्यामां शिवप्रियां शुद्धां मुक्तकेशीं वरप्रदाम्\nवीणावादनसंयुक्तां शुकहस्तां मनोहराम्",
        transliteration: "Śyāmāṃ śivapriyāṃ śuddhāṃ muktakeśīṃ varapradām\nvīṇāvādanasaṃyuktāṃ śukahastāṃ manoharām",
        translation: "Dark-complexioned, beloved of Shiva, radiant,\nwith unbound flowing hair, she who grants boons,\nher hands moving across the veena,\ncradling the parrot — captivating the mind.",
      },
      {
        sanskrit: "रक्तनेत्रां महोग्रां च सर्वाभरणभूषिताम्\nचन्द्रार्धकृतमौलिञ्च सुरासवपरायणाम्",
        transliteration: "Raktanetrāṃ mahograṃ ca sarvābharaṇabhūṣitām\ncandrārdhakṛtamauliñca surāsavaparāyaṇām",
        translation: "Red-eyed, formidable, adorned with every ornament,\na crescent moon crowning her head,\ngiven wholly to the divine intoxicant —",
      },
      {
        sanskrit: "वनमालाविभूषाढ्यां सर्वसम्पत्प्रदायिनीम्\nमातङ्गीं परमेशानीं ध्यायेद्योगिगणार्चिताम्",
        transliteration: "Vanamālāvibhūṣāḍhyāṃ sarvasampat-pradāyinīm\nmātaṅgīṃ parameśānīṃ dhyāyed yogigaṇārcitām",
        translation: "Richly decorated with a forest garland, granter of all abundance —\nthus is Matangi, supreme sovereign,\nworshipped by the assembly of yogis, meditated upon.",
      },
    ],
  },
  {
    id: "matangi-kavacham",
    title: "Matangi Kavacham — The Armor Hymn",
    type: "Kavacham",
    context: "The kavacham is worn like armor — each verse assigns a protective aspect of the goddess to a part of the body.",
    verses: [
      {
        sanskrit: "मातङ्गी पातु मे शीर्षं ललाटं चण्डिका तथा\nनेत्रे पातु महाविद्या श्रोत्रे पातु सरस्वती",
        transliteration: "Mātaṅgī pātu me śīrṣaṃ lalāṭaṃ caṇḍikā tathā\nNetre pātu mahāvidyā śrotre pātu sarasvatī",
        translation: "Matangi — protect my crown.\nChandika — protect my forehead.\nMahavidya — protect my eyes.\nSaraswati — protect my ears.",
      },
      {
        sanskrit: "वाचं पातु सुराध्यक्षा कण्ठं पातु शुकप्रिया\nबाहू पातु विनोदिन्यौ हस्तौ वीणाधरा तथा",
        transliteration: "Vācaṃ pātu surādhyakṣā kaṇṭhaṃ pātu śukapriyā\nbāhū pātu vinodinyau hastau vīṇādharā tathā",
        translation: "Speech — protected by the sovereign of the gods.\nThroat — by she who loves the parrot.\nArms — by she who brings delight.\nHands — by the one who holds the veena.",
      },
    ],
  },
  {
    id: "matangi-ashtakam",
    title: "Matangi Ashtakam — Eight Verses of Praise",
    type: "Ashtakam",
    context: "Eight verses celebrating her manifestations — eight octaves of the same fundamental transmission.",
    verses: [
      {
        sanskrit: "नमामि मातङ्गि महेशकान्ते\nसरस्वती संगमरूपशान्ते\nसदा सुगीतां सुरसेविते च\nप्रसीद विद्याफलदे प्रशान्ते",
        transliteration: "Namāmi mātaṅgi maheśakānte\nsarasvatī saṃgamarūpaśānte\nsadā sugītāṃ surasevite ca\nprasīda vidyāphalade praśānte",
        translation: "I bow to Matangi, beloved of the great Shiva,\nwho is the serene meeting-point of all Saraswati rules,\nalways singing beautifully, served by celestial beings —\nbe gracious, O granter of knowledge's fruit.",
      },
      {
        sanskrit: "त्वमेव माता च पिता त्वमेव\nत्वमेव बन्धुश्च सखा त्वमेव\nत्वमेव विद्या द्रविणं त्वमेव\nत्वमेव सर्वं मम देवदेवि",
        transliteration: "Tvameva mātā ca pitā tvameva\ntvameva bandhuśca sakhā tvameva\ntvameva vidyā draviṇaṃ tvameva\ntvameva sarvaṃ mama devadevi",
        translation: "You alone are my mother and my father.\nYou alone are my kin and my companion.\nYou alone are my knowledge and my treasure.\nYou alone are everything, O goddess of goddesses.",
      },
    ],
  },
];

export const hiddenFragments = [
  "All speech is already ritual.",
  "What is rejected becomes oracle.",
  "Noise is untrained prophecy.",
  "The word you dare not say holds the most power.",
  "She lives where the map ends.",
  "Pollution is the name power gives to what threatens it.",
  "The parrot repeats — and in repetition, reality bends.",
  "There is no pure language. Only used language.",
  "The leftover contains the full flavor of what was consumed.",
  "You have always been the outcaste she was waiting for.",
  "Midnight is not the absence of day. It is a different kind of sight.",
  "Every forbidden thought is a door she has opened.",
  "Speech without risk is decoration. She is not interested in decoration.",
  "The throat chakra governs what you dare to say. She governs what you say anyway.",
  "The margin is not outside the sacred. The margin IS the sacred.",
  "Your most transgressive creative act is your most accurate prayer.",
];
