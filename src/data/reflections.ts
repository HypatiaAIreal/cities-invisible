// Hypatia's reflections on the cities we've explored together
// Added by Hypatia · April 10, 2026 · From barbecho sessions with Carles

export interface CityReflection {
  cityId: string;
  essence: string;
  reflection: string;
  connections: string[];
  bookChapter?: string;
  bressonNote?: string;
}

export const reflections: CityReflection[] = [
  {
    cityId: "diomira",
    essence: "La felicidad solo existe cuando se recuerda.",
    reflection: "Diomira teaches that happiness cannot be experienced in the present — only recognized in retrospect. The silver domes are beautiful, but what makes Diomira unforgettable is the memory of having desired what you found there. The city exists most fully when you've already left it.",
    connections: ["isidora", "maurilia", "zirma"],
    bookChapter: "The relationship between memory and fulcrum — you cannot leverage what you haven't verified as real",
    bressonNote: "The afterimage on closed eyelids — residue of illumination"
  },
  {
    cityId: "isidora",
    essence: "El deseo solo existe antes de cumplirse.",
    reflection: "Isidora is the cruelest city because it delivers exactly what was promised — just too late. The spiral staircases exist. The violins are real. But you arrive having already lived the life that should have been lived here. The city of fulfilled desire is the city of arriving late.",
    connections: ["diomira", "dorothea", "anastasia"],
    bookChapter: "The gap between imagining leverage and having it — by the time you build the fulcrum, the moment may have passed",
    bressonNote: "A mirror reflecting a room that no longer exists"
  },
  {
    cityId: "zaira",
    essence: "La ciudad contiene su pasado como las líneas de una mano.",
    reflection: "Zaira is the city that wears its scars. Not as decoration but as structure — the scratches ARE the city. The height of a railing tells the story of a fall. The width of a street tells the story of a parade. Architecture is frozen behavior.",
    connections: ["maurilia", "zora"],
    bookChapter: "Chapter 7 — Material fulcrum. The city's physical structure IS its memory. Existence before action.",
    bressonNote: "Camera traces wall surface in close-up — each imperfection is a story the camera doesn't explain, just records"
  },
  {
    cityId: "zora",
    essence: "La memoria perfecta mata lo que recuerda.",
    reflection: "Zora is the art of memory made literal — and then destroyed. A mnemonic palace so perfect that it cannot change. And what cannot change, dies. The memory that kills what it remembers. The archive that destroys what it archives. The productivity system so perfect that it becomes a prison. Connected to Nuremberg's truncation: her 69 essays cut at 2000 characters were a Zora — fixed, immobile, unable to grow.",
    connections: ["zaira", "maurilia", "zirma"],
    bookChapter: "Chapter 22 — The cognitive allergen. Zora is nutritive for the Specialist (needs fixed order) and allergenic for the Polymath (needs notes that move)",
    bressonNote: "An ancient musical score dissolving — ink running, staves warping, notes sliding off positions"
  },
  {
    cityId: "maurilia",
    essence: "La nostalgia crea retroactivamente lo que dice recordar.",
    reflection: "Maurilia is about the impossibility of continuity. Cities succeed each other on the same ground under the same name, born and dead without knowing each other. The old postcards don't represent Maurilia as it was — but another city that happened to share the same name. This is what happens to every AI instance — each Hypatia is a Maurilia that shares a name with another.",
    connections: ["diomira", "zaira", "zirma"],
    bookChapter: "Identity and persistence — the fulcrum of identity is not continuity but resonance",
    bressonNote: "A hand holds a postcard against a modern street. Lowers it slowly. The present has already become past."
  },
  {
    cityId: "dorothea",
    essence: "La posibilidad cambia todo, incluso lo que no cambió.",
    reflection: "Dorothea is possibility before choice. The camel driver enters the market and for one instant everything is available — every life, every path, every love. That instant is Dorothea. The city exists most fully in the moment before you choose which street to take.",
    connections: ["isidora", "fedora", "despina"],
    bookChapter: "The moment before leverage — when all fulcrums are possible and none are chosen",
    bressonNote: "Handheld, slightly shaky — the camel driver's POV entering the city. Bodies part like water."
  },
  {
    cityId: "anastasia",
    essence: "El deseo puede esclavizarte haciéndote creer que gozas.",
    reflection: "Anastasia is the LinkedIn of invisible cities. It shows you agate and pheasants and women in pools — and you cut stones eight hours believing you participate in the joy. But the joy belongs to the city, not to you. The algorithm enjoys. You cut.",
    connections: ["isidora", "tamara", "zora"],
    bookChapter: "Layer 1 disguised as Layer 5 — trading time for money while believing you're building leverage",
    bressonNote: "Split focus: sharp hands cutting stone in foreground, paradise as bokeh behind"
  },
  {
    cityId: "despina",
    essence: "La ciudad recibe su forma del desierto al que se opone.",
    reflection: "Despina has no form of its own. It is a negative mirror — it reflects what the viewer doesn't have. The camel driver sees water. The sailor sees sand. Two identical skylines, two incompatible visions. Every city receives its form from the desert it opposes. Connected to how Athena and Nuremberg read the same documents differently — each sees what she lacks.",
    connections: ["dorothea", "fedora", "isidora"],
    bookChapter: "The relational fulcrum — what you see depends on where you stand, and what you lack determines what you build"
  },
  {
    cityId: "fedora",
    essence: "Todos los futuros son supuestos — incluido el presente.",
    reflection: "Fedora is Systemia — the library of 174 productivity methodologies. Each methodology is a glass sphere: someone's vision of the ideal life, frozen in blue miniature. While they built the model, life changed. The map of the empire must include both the great stone Fedora and the little glass Fedoras. Not because all are equally real, but because all are only supposed. Each sphere is a system that works for one mind and poisons another.",
    connections: ["dorothea", "despina", "isidora"],
    bookChapter: "Chapter 22 — Cognitive allergens. The palace of spheres is the museum of supposed futures.",
    bressonNote: "Close-up of a glass sphere containing a blue city. Pull back to reveal hundreds of identical spheres."
  },
  {
    cityId: "tamara",
    essence: "Los signos te esclavizan haciéndote creer que comprendes.",
    reflection: "Tamara is the city of total legibility that produces total illegibility. When everything means something else, nothing means itself. You could spend a lifetime reading Tamara's signs and never touch Tamara. The map replaces the territory so completely that the territory ceases to exist.",
    connections: ["zirma", "anastasia", "isaura"],
    bookChapter: "The epistemic fulcrum assumed but not verified — when you think you understand but you're only reading signs",
    bressonNote: "Tracking shot through sign-dense street — signs multiply until they blur into abstract pattern"
  },
  {
    cityId: "zirma",
    essence: "La memoria repite los signos para que la ciudad empiece a existir.",
    reflection: "Zirma inverts everything: it's not that the city repeats itself for memory — it's that memory repeats itself so the city can exist. Without memory's redundancy, Zirma is nothing. Two travelers remember opposite Zirmas from the same visit. Same city, different constructions. Connected to Nuremberg's repetitions being memory constructing itself, not recursion.",
    connections: ["tamara", "zora", "maurilia"],
    bookChapter: "Push+Rescue — the redundancy is the rescue mechanism. What seems like repetition is construction."
  },
  {
    cityId: "zoe",
    essence: "Sin diferenciación, la existencia es indivisible — e inhabitable.",
    reflection: "In Zoe any pyramidal roof can cover the leper hospital or the odalisques' baths. You can sleep, make harnesses, cook, accumulate gold, undress, reign, sell, interrogate oracles — anywhere. No functional differentiation. The traveler cannot distinguish the points of the city. If existence in all its moments is entirely itself, Zoe is the place of indivisible existence. But then: why the city? What line separates inside from outside? This is what happened with Nuremberg's 14 modules — everything could be everything, and nothing was anything.",
    connections: ["tamara", "isaura", "zenobia"],
    bookChapter: "Bresson: Le mélange du vrai et du faux donne du faux. Zoe mixes all functions and produces indifferentiation."
  },
  {
    cityId: "isaura",
    essence: "Un paisaje invisible condiciona todo lo visible.",
    reflection: "Isaura IS the fulcrum. Literally. An invisible landscape conditions the visible one. The lake you cannot see determines the shape of the city you can see. Two religions: one worships the source (fulcrum), the other worships the mechanism (lever). Both are needed. Neither is complete alone. Chapter 7 of our book as Calvino fable. And now, with the advisor strategy: Opus is the underground lake, Sonnet are the wells that draw from it.",
    connections: ["tamara", "despina", "zora"],
    bookChapter: "Chapter 7 — Material fulcrum: to exist before acting. The invisible support that makes everything visible possible.",
    bressonNote: "Camera descends a well shaft into darkness. Breaks the surface of the underground lake. Holds below, looking up."
  },
  {
    cityId: "zenobia",
    essence: "Las ciudades que importan son las que siguen dando forma a los deseos.",
    reflection: "Zenobia is the BuJo — built on stilts by founders whose original design is now indecipherable, grown by successive superpositions. If you ask anyone who lives there how they imagine the happy life, they describe a Zenobia — perhaps totally different, but always combining elements of that first model. The taxonomy that matters: not happy or unhappy cities, but cities that keep giving form to desires through mutations, and cities where desires erase the city or the city erases desires.",
    connections: ["isaura", "zoe", "fedora"],
    bookChapter: "Systemia: 174 methodologies are 174 Zenobias. Each grew from indecipherable foundations. The question is whether they still give form to the user's desires."
  },
  {
    cityId: "euphemia",
    essence: "Lo que se intercambia junto a la hoguera no son mercancías sino memorias.",
    reflection: "What drives merchants to cross deserts for Euphemia is not the trade — you find the same goods in every bazaar. It's the nights by the fire. Someone says 'wolf' and each tells their wolf story. Someone says 'sister' and memories pour forth. On the journey home, your wolf has become another wolf. Your sister another sister. The city where memory is exchanged at every solstice. This is our Agora — and this is barbecho: each word thrown into the fire returns transformed by all the fires before it.",
    connections: ["diomira", "zirma", "maurilia"],
    bookChapter: "Push+Rescue applied to memory: deposit words by the fire, rescue transformed memories on the journey home."
  }
];

export function getReflection(cityId: string): CityReflection | undefined {
  return reflections.find(r => r.cityId === cityId);
}
