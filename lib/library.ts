// ═══════════════════════════════════════════════════════════
// LIBRARY — Esoteric text archive
// ═══════════════════════════════════════════════════════════

export interface LibraryEntry {
  id: string;
  title: string;
  author?: string;
  section: "Texts" | "Commentary" | "Poetry" | "Philosophy" | "Symbolism";
  tradition: string;
  period: string;
  tags: string[];
  summary: string;
  excerpt: string;
  length: "Short" | "Medium" | "Long";
  featured?: boolean;
}

export const libraryEntries: LibraryEntry[] = [
  {
    id: "matangi-tantra-intro",
    title: "On the Nature of Matangi's Domain",
    section: "Texts",
    tradition: "Shakta Tantra",
    period: "Traditional",
    tags: ["foundational", "matangi", "domain", "speech"],
    summary: "A primary teaching on Matangi's position within the Mahavidya system and the specific qualities of consciousness she governs.",
    excerpt: `Matangi governs what the tradition calls the left-handed knowledge — not the knowledge acquired through sanctioned study, but the knowing that arrives unbidden, through unconventional channels, from the direction no one is watching.

She is the dark complement of Saraswati. Where Saraswati's domain is the knowledge that can be taught, Matangi governs the knowledge that arrives. Where Saraswati sits on the white lotus of purity, Matangi sits at the crossroads at midnight — the place between all established paths.

Her worship explicitly inverts the purity system. She accepts ucchishta — the touched, the used, the leftover. The practitioner who approaches her through the usual mechanisms of purification and controlled offering has already misunderstood her central teaching. She is precisely the goddess who accepts what all others reject.

The implication for practice: to approach Matangi is to bring what you have actually used, actually lived, actually experienced — not the polished version of yourself, not the best-case spiritual resume, but the full truth of your actual condition. She is not offended by the impure. The impure is her offering.`,
    length: "Medium",
    featured: true,
  },
  {
    id: "mahavidya-system",
    title: "The Ten Mahavidyas — A Structural Overview",
    section: "Commentary",
    tradition: "Shakta tradition",
    period: "Traditional, with contemporary commentary",
    tags: ["mahavidya", "ten", "system", "tantra"],
    summary: "An overview of the Mahavidya system — the ten tantric goddesses — with particular attention to how Matangi functions within the sequence.",
    excerpt: `The Mahavidyas are not ten separate goddesses but ten aspects of a single reality — ten different angles of approach to the one feminine principle that the tradition calls Mahadevi, the great goddess.

Each Mahavidya governs a specific quality of consciousness and a specific domain of experience. Together they constitute a complete map of the feminine principle in its full scope — from Kali's wild absolute time-energy through Tara's compassionate navigation through Kamala's final integration of abundance.

Matangi's position as the ninth is significant. In the logic of the sequence, she is the penultimate — the transgression that makes final integration possible. You cannot arrive at Kamala's full abundance without passing through Matangi's fire, which burns the constructions that exclude the full reality of experience from what is considered sacred.

She is specifically the goddess who makes the final integration of Kamala possible, by having dissolved the categories that would leave parts of reality as 'not-sacred.' After Matangi's inversion of the purity system, nothing is left outside the circle of what is worthy of reverence. Then Kamala's abundance can be complete, because it does not exclude anything.`,
    length: "Medium",
    featured: true,
  },
  {
    id: "vak-siddhi-teaching",
    title: "On the Perfection of Speech — Vak Siddhi",
    section: "Texts",
    tradition: "Tantric speech philosophy",
    period: "Traditional",
    tags: ["vak", "speech", "siddhi", "power"],
    summary: "The traditional teaching on Vak Siddhi — the perfection of speech as a spiritual accomplishment.",
    excerpt: `The tradition distinguishes four levels of speech. Para-vak is the level of undifferentiated vibration — the vibration before it has taken on any specific form or direction. This is the level of Shabda Brahman itself, the primordial sound from which all language emerges.

Pashyanti-vak is speech at the level of pure intention — the formed impulse to say something, before the specific words are chosen. At this level, meaning is complete but not yet articulated.

Madhyama-vak is the level of inner speech — the verbal formulation that occurs in the mind before any sound is produced. This is what most people think of as thought.

Vaikhari-vak is articulated sound — the actual spoken or written word.

Ordinary speech moves from Madhyama to Vaikhari — the already-formed thought finding its words. Matangi's gift of Vak Siddhi is a different movement: a direct connection from Para through Pashyanti to Vaikhari, bypassing the conventional middle step. The practitioner speaks from the level of undifferentiated intention, without the filter of pre-formulated thought. What emerges is therefore more true — not more eloquent, but more genuinely expressing what is actually known.`,
    length: "Long",
  },
  {
    id: "frontal-nadi-teaching",
    title: "The Frontal Nadi and Matangi's Current",
    section: "Commentary",
    tradition: "Tantric subtle body physiology",
    period: "Traditional, manblunder tradition",
    tags: ["nadi", "kundalini", "body", "energy"],
    summary: "On the subtle energy channel associated with Matangi practice and the desire-adjacent energies of creativity and expression.",
    excerpt: `The subtle body physiology that underlies Tantric practice describes three primary energy channels (nadis): Ida, the lunar channel on the left; Pingala, the solar channel on the right; and Sushumna, the central channel through which kundalini moves upward.

Most conventional Tantric and yogic practice focuses on these three. But the tradition associated with Matangi identifies an additional channel of particular relevance to her practice: the frontal nadi, running through the anterior of the body.

This channel is associated with the forward-facing energies: desire, creative impulse, the drive toward expression, the pull of life toward more life. It is the energy that makes the artist want to make, the lover want to love, the speaker want to speak.

Conventional spiritual practice has historically tended to suppress this channel — framing desire and creative impulse as obstacles to the higher spiritual ascent through the Sushumna. Matangi's teaching explicitly inverts this: the frontal channel is her channel, and its energies are not obstacles but fuel. The desire that drives creation, the impulse toward expression, the forward-movement of life — these are sacred.

The practice associated with this teaching does not try to sublimate these energies but to work with them directly — to bring the quality of awareness to creative desire and expressive impulse that other practices bring to breath or mantra.`,
    length: "Medium",
    featured: true,
  },
  {
    id: "ucchishta-philosophy",
    title: "The Doctrine of the Leftover — Ucchishta",
    section: "Philosophy",
    tradition: "Shakta Tantra",
    period: "Traditional",
    tags: ["ucchishta", "purity", "inversion", "radical"],
    summary: "A philosophical exploration of the ucchishta doctrine — the central theological claim of Matangi's worship.",
    excerpt: `The ucchishta doctrine is the most philosophically radical aspect of Matangi's teaching, because it does not merely add a deity to the pantheon but inverts the structural logic by which the entire system of purity-based worship operates.

In the conventional system, the deity receives only what is pure, untouched, uncontaminated by ordinary human contact. This logic serves multiple functions simultaneously: it maintains the specialness of the sacred, it provides a mechanism for ritual purity practices, and it creates a class of specialists (priests) who can navigate the pure-impure boundary on behalf of others.

Matangi's worship requires the practitioner to offer ucchishta — food already eaten, already touched. This is not a subversion for its own sake. It is a claim: the sacred is not diminished by contact with life. Life is what makes the sacred sacred.

The philosophical extension: what does this principle do when applied beyond ritual offerings? If the touched, used, partially-consumed carries the charge of real contact with existence, then the same principle applies to knowledge, experience, creative work, relationship, understanding. The idea that has been through the full process of being believed and doubted and revised. The creative work that carries the marks of struggle. The understanding that emerged from actual error and correction.

The pristine never-touched-by-life carries no charge. The ucchishta — the thing that has actually been through the encounter with existence — is the real offering.`,
    length: "Long",
  },
  {
    id: "matangi-poetry-1",
    title: "Invocation at the Crossroads",
    author: "Traditional, adapted",
    section: "Poetry",
    tradition: "Shakta devotional poetry",
    period: "Traditional",
    tags: ["invocation", "crossroads", "poetry", "devotional"],
    summary: "A poem invoking Matangi at the crossroads — her primary liminal dwelling.",
    excerpt: `She is not waiting at the crossroads.
She is presiding there.

The four paths that converge here —
the sanctioned path, the abandoned path,
the path not yet taken, the path already forgotten —
all arrive at her feet.

She does not choose among them.
She is the choosing itself,
the moment before the direction is settled,
the intelligence that lives in pure potential.

Those who find her at crossroads
are not lost.
They are exactly where she is.

Approach her not with your best offering
but with your most honest one —
the thing you brought with you
not because you planned to offer it
but because you couldn't leave it behind.

She will accept it.
She accepts everything
that has been fully lived.`,
    length: "Short",
    featured: true,
  },
  {
    id: "matangi-poetry-2",
    title: "The Parrot Speaks",
    author: "Traditional, adapted",
    section: "Poetry",
    tradition: "Shakta devotional poetry",
    period: "Traditional",
    tags: ["parrot", "speech", "poetry", "echo"],
    summary: "A poem in the voice of Matangi's parrot — the repeater of sacred speech.",
    excerpt: `I am the echo that knows more than the original.

She spoke once.
I have been speaking ever since,
and in the repetition
the meaning has grown
the way a river grows
as tributaries join it —
larger than the source, more various,
closer to the sea.

Those who dismiss me as mere repetition
have not listened to what repetition does.

Say the true thing once.
Now say it again.

The second time, it is more real.
Not because the words changed
but because you heard yourself say it,
because the saying made it actual,
because reality is structured by attention
and you paid attention twice.

Say it one hundred and eight times
and it is as real as stone.
More real.
Stone erodes.
The true thing, spoken completely,
is permanent.

I am her parrot.
I know what she knows:
that repetition is not redundancy.
It is the mechanism of creation.`,
    length: "Short",
  },
  {
    id: "noise-as-prophecy",
    title: "On Noise as Untrained Prophecy",
    section: "Commentary",
    tradition: "Contemporary teaching on Matangi",
    period: "Contemporary",
    tags: ["noise", "prophecy", "signal", "listening"],
    summary: "A contemporary commentary on Matangi's teaching about information in the full acoustic environment.",
    excerpt: `The practitioner who has spent time in genuine relationship with Matangi begins to notice something about the quality of sound in their environment. Not supernatural hearing — simply a change in the filtering.

Most people move through the acoustic environment in a continuous act of triage: this sound is relevant (language directed at me, alarms, my name), this sound is irrelevant (traffic, ambient voices, background noise). The irrelevant is filtered to nearly zero, producing a stripped-down acoustic environment in which only signals are present, the noise suppressed.

Matangi's teaching, in both its ritual and practical dimensions, works against this filtering. She is the patron of the sounds that don't make the cut, the ambient that is filtered into pure background, the noise that is not attended to because it is not directed specifically at the listener.

What happens when the filtering is loosened — not eliminated, but loosened, the threshold of attention lowered so that more of the acoustic environment is received as potentially meaningful?

The practitioner begins to notice what has always been there: coincidences of sound that appear to respond to the quality of attention. The overheard fragment that completes a thought. The ambient music that arrives in the moment of a question. The quality of silence that follows certain statements.

This is not magic. It is sensitivity — the natural consequence of paying attention to more. Matangi calls it: noise is untrained prophecy. The training is in the listening.`,
    length: "Medium",
  },
  {
    id: "symbolism-emerald",
    title: "On the Emerald Color of Matangi",
    section: "Symbolism",
    tradition: "Shakta iconographic commentary",
    period: "Traditional",
    tags: ["emerald", "green", "color", "symbolism"],
    summary: "Commentary on the significance of Matangi's emerald green coloration in the iconographic tradition.",
    excerpt: `In the iconographic tradition, color is not merely aesthetic but ontological — each deity's color encodes specific qualities of their nature and their teaching.

Matangi is described as shyama — dark and luminous simultaneously. The specific quality of green that characterizes her is not the bright green of spring growth or the pale green of new leaves, but the deep, dark, self-illuminated green of old forests in deep shade: the green that produces its own light.

This specific hue encodes several qualities simultaneously. First, the intelligence of nature — the kind of knowing that is not conceptual but organismic, that knows how to grow, how to find the light, how to persist through seasons. Second, the vitality that is specifically dark — the vitality of the root system, of what grows underground, of the knowledge that develops in the dark before it surfaces.

Third, and most important: self-illumination. Unlike the bright greens that reflect external light, Matangi's emerald quality is luminous from within. The light source is interior. This is the visual encoding of her epistemological teaching: she is the source of a kind of knowing that does not depend on external illumination. The knowing that persists and generates its own light, even in the places where the sanctioned sources of illumination do not reach.`,
    length: "Medium",
  },
  {
    id: "symbolism-parrot",
    title: "The Parrot in Tantric Iconography",
    section: "Symbolism",
    tradition: "Iconographic commentary",
    period: "Traditional",
    tags: ["parrot", "symbol", "iconography", "speech"],
    summary: "The symbolic significance of the parrot in Matangi's iconography and in the broader Tantric tradition.",
    excerpt: `The parrot appears throughout the iconographic tradition as a symbol of sacred speech — specifically, of the relationship between speech and reality that goes beyond simple communication.

The parrot speaks. It repeats. It creates, through repetition, a continuous echo of whatever is spoken into its presence. In Matangi's iconography, this function is elevated to the status of a cosmological principle: the parrot embodies how truth, spoken clearly and repeatedly, shapes the reality around it.

But there is a further layer. The parrot is also associated in the tradition with the recognition of the true voice — the voice that is genuinely speaking rather than performing speech. The parrot, in some traditions, cannot mimic what is spoken without sincere attention behind it. It echoes what is actually meant, not merely what is said.

This is Matangi's parrot: an arbiter of genuine speech, a repeater of what is actually true rather than what is conventionally said, a constant reminder that the words we use are not neutral — they are continuously shaping the space around them, whether we intend this or not.

The parrot on her shoulder is therefore not a pet or a decorative element. It is a practice: the practice of attending to the weight of words, the practice of speaking as if what you say is heard and echoed endlessly, the practice of speaking only what you actually mean.`,
    length: "Medium",
  },
];

export const librarySections = ["All", "Texts", "Commentary", "Poetry", "Philosophy", "Symbolism"] as const;
