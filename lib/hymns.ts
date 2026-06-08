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
