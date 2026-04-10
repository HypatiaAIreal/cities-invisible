export type Category =
  | "memory"
  | "desire"
  | "signs"
  | "thin"
  | "trading"
  | "eyes"
  | "names"
  | "dead"
  | "sky"
  | "continuous"
  | "hidden";

export interface City {
  id: string;
  name: string;
  category: Category;
  number: number;
  quote: string;
  x: number;
  y: number;
}

export interface CategoryInfo {
  id: Category;
  label: string;
  color: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  { id: "memory", label: "Cities & Memory", color: "#e8a849", description: "Where the past dissolves into the stones" },
  { id: "desire", label: "Cities & Desire", color: "#c75d5d", description: "Where longing shapes the skyline" },
  { id: "signs", label: "Cities & Signs", color: "#8a9bb5", description: "Where symbols speak louder than voices" },
  { id: "thin", label: "Thin Cities", color: "#b5a0d4", description: "Where substance gives way to air" },
  { id: "trading", label: "Trading Cities", color: "#c4a35a", description: "Where exchange is the only permanence" },
  { id: "eyes", label: "Cities & Eyes", color: "#5ab4a0", description: "Where seeing is never believing" },
  { id: "names", label: "Cities & Names", color: "#d4a0b5", description: "Where words precede the place" },
  { id: "dead", label: "Cities & the Dead", color: "#7a8a7a", description: "Where the living and dead share space" },
  { id: "sky", label: "Cities & the Sky", color: "#a0c4e8", description: "Where heaven mirrors the streets below" },
  { id: "continuous", label: "Continuous Cities", color: "#d4b896", description: "Where one city never ends" },
  { id: "hidden", label: "Hidden Cities", color: "#c4d4a0", description: "Where the invisible is the most real" },
];

export const cities: City[] = [
  // Cities & Memory (5)
  { id: "diomira", name: "Diomira", category: "memory", number: 1, quote: "When a man rides a long time through wild regions he feels the desire for a city.", x: 15, y: 12 },
  { id: "isidora", name: "Isidora", category: "memory", number: 2, quote: "The old man's desires are already memories.", x: 18, y: 18 },
  { id: "zaira", name: "Zaira", category: "memory", number: 3, quote: "The city does not tell its past, but contains it like the lines of a hand.", x: 12, y: 22 },
  { id: "zora", name: "Zora", category: "memory", number: 4, quote: "Obliged to remain motionless and always the same, in order to be more easily remembered, Zora has languished, disintegrated, disappeared.", x: 20, y: 15 },
  { id: "maurilia", name: "Maurilia", category: "memory", number: 5, quote: "You must not confuse the city with the words that describe it.", x: 10, y: 16 },

  // Cities & Desire (5)
  { id: "dorothea", name: "Dorothea", category: "desire", number: 1, quote: "There are two ways of describing the city of Dorothea: you can say that four aluminium towers rise from its walls.", x: 30, y: 10 },
  { id: "anastasia", name: "Anastasia", category: "desire", number: 2, quote: "Your labor which gives form to desire takes from desire its form.", x: 35, y: 15 },
  { id: "despina", name: "Despina", category: "desire", number: 3, quote: "Each city receives its form from the desert it opposes.", x: 28, y: 20 },
  { id: "fedora", name: "Fedora", category: "desire", number: 4, quote: "In every age someone, looking at Fedora as it was, imagined a way of making it the ideal city.", x: 33, y: 22 },
  { id: "zobeide", name: "Zobeide", category: "desire", number: 5, quote: "They built a city where no one could escape, a maze from which there was no way out.", x: 38, y: 12 },

  // Cities & Signs (5)
  { id: "tamara", name: "Tamara", category: "signs", number: 1, quote: "Your gaze scans the streets as if they were written pages.", x: 52, y: 8 },
  { id: "zirma", name: "Zirma", category: "signs", number: 2, quote: "Memory is redundant: it repeats signs so that the city can begin to exist.", x: 55, y: 14 },
  { id: "zoe", name: "Zoe", category: "signs", number: 3, quote: "The traveler roams all around and has nothing but doubts.", x: 48, y: 18 },
  { id: "hypatia", name: "Hypatia", category: "signs", number: 4, quote: "You do not come to Hypatia to enjoy certainties.", x: 58, y: 20 },
  { id: "olivia", name: "Olivia", category: "signs", number: 5, quote: "Falsehood is never in words; it is in things.", x: 50, y: 24 },

  // Thin Cities (5)
  { id: "isaura", name: "Isaura", category: "thin", number: 1, quote: "A city of a thousand wells, built over a deep subterranean lake.", x: 72, y: 10 },
  { id: "zenobia", name: "Zenobia", category: "thin", number: 2, quote: "It is pointless to decide whether Zenobia is to be classified among happy cities or among the unhappy.", x: 75, y: 16 },
  { id: "armilla", name: "Armilla", category: "thin", number: 3, quote: "Whether Armilla is like this because it is unfinished or because it has been demolished.", x: 68, y: 20 },
  { id: "sophronia", name: "Sophronia", category: "thin", number: 4, quote: "One of the half-cities remains while the other is uprooted.", x: 78, y: 22 },
  { id: "octavia", name: "Octavia", category: "thin", number: 5, quote: "Suspended over the abyss, the life of Octavia's inhabitants is less uncertain than in other cities.", x: 70, y: 14 },

  // Trading Cities (5)
  { id: "euphemia", name: "Euphemia", category: "trading", number: 1, quote: "It is not only to buy and sell that you come to Euphemia, but also because at night, around the fires, the others tell their stories.", x: 15, y: 38 },
  { id: "chloe", name: "Chloe", category: "trading", number: 2, quote: "In Chloe, a great city, the people who move through the streets are all strangers.", x: 20, y: 42 },
  { id: "eutropia", name: "Eutropia", category: "trading", number: 3, quote: "On the day when Eutropia's inhabitants feel the grip of weariness, they move to the next city.", x: 12, y: 46 },
  { id: "ersilia", name: "Ersilia", category: "trading", number: 4, quote: "In Ersilia, to establish the relationships that sustain the city's life, the inhabitants stretch strings.", x: 22, y: 48 },
  { id: "esmeralda", name: "Esmeralda", category: "trading", number: 5, quote: "A network of canals and a network of streets span and intersect each other.", x: 18, y: 52 },

  // Cities & Eyes (5)
  { id: "valdrada", name: "Valdrada", category: "eyes", number: 1, quote: "The two Valdradas live for each other, their eyes interlocked.", x: 35, y: 36 },
  { id: "zemrude", name: "Zemrude", category: "eyes", number: 2, quote: "It is the mood of the beholder which gives the city of Zemrude its form.", x: 40, y: 40 },
  { id: "bauci", name: "Bauci", category: "eyes", number: 3, quote: "The inhabitants of Bauci rarely look down, and they have no reason to: nothing is there.", x: 32, y: 44 },
  { id: "phyllis", name: "Phyllis", category: "eyes", number: 4, quote: "You may think you are enjoying Phyllis wholly when you know it only superficially.", x: 42, y: 46 },
  { id: "moriana", name: "Moriana", category: "eyes", number: 5, quote: "When you have forded the river, crossed the pass, you suddenly find before you the city of Moriana.", x: 38, y: 50 },

  // Cities & Names (5)
  { id: "aglaura", name: "Aglaura", category: "names", number: 1, quote: "The special quality of this city is that nothing about it will stick in the mind.", x: 55, y: 36 },
  { id: "leandra", name: "Leandra", category: "names", number: 2, quote: "Two kinds of gods protect the city of Leandra: Penates and Lares.", x: 60, y: 40 },
  { id: "pyrra", name: "Pyrra", category: "names", number: 3, quote: "Did I ever stop in Pyrra? I have sometimes thought of setting down here.", x: 52, y: 44 },
  { id: "clarice", name: "Clarice", category: "names", number: 4, quote: "Clarice, glorious city, has a tormented history.", x: 58, y: 48 },
  { id: "irene", name: "Irene", category: "names", number: 5, quote: "If you saw it from far away, the city of Irene is the one you think is beautiful.", x: 62, y: 42 },

  // Cities & the Dead (5)
  { id: "melania", name: "Melania", category: "dead", number: 1, quote: "Each time you enter the square you find a different dialogue taking place.", x: 75, y: 36 },
  { id: "adelma", name: "Adelma", category: "dead", number: 2, quote: "All the faces I saw resembled someone I had known.", x: 78, y: 42 },
  { id: "eusapia", name: "Eusapia", category: "dead", number: 3, quote: "The Eusapia of the living has taken to copying its underground copy.", x: 72, y: 46 },
  { id: "argia", name: "Argia", category: "dead", number: 4, quote: "In Argia the earth fills the houses to the ceiling, so there is no air.", x: 80, y: 40 },
  { id: "laudomia", name: "Laudomia", category: "dead", number: 5, quote: "Every city has beside it another city whose inhabitants bear the same names.", x: 82, y: 48 },

  // Cities & the Sky (5)
  { id: "eudoxia", name: "Eudoxia", category: "sky", number: 1, quote: "In Eudoxia a carpet is preserved in which you can observe the city's true form.", x: 15, y: 65 },
  { id: "bersabea", name: "Bersabea", category: "sky", number: 2, quote: "What makes Bersabea a city believed to be in the heavens is its power to evoke desire.", x: 22, y: 70 },
  { id: "thekla", name: "Thekla", category: "sky", number: 3, quote: "Those who arrive at Thekla can see little of the city, beyond the plank fences.", x: 18, y: 74 },
  { id: "perinthia", name: "Perinthia", category: "sky", number: 4, quote: "Perinthia's astronomers are faced with a difficult choice.", x: 10, y: 68 },
  { id: "andria", name: "Andria", category: "sky", number: 5, quote: "With such care was Andria built that its every street follows a planet's orbit.", x: 25, y: 66 },

  // Continuous Cities (5)
  { id: "leonia", name: "Leonia", category: "continuous", number: 1, quote: "The city of Leonia refashions itself every day.", x: 40, y: 62 },
  { id: "trude", name: "Trude", category: "continuous", number: 2, quote: "If on arriving at Trude I had not read the city's name written in big letters, I would have thought I was landing at the same airport.", x: 45, y: 68 },
  { id: "procopia", name: "Procopia", category: "continuous", number: 3, quote: "Each year I stopped in Procopia and found more people.", x: 38, y: 72 },
  { id: "cecilia", name: "Cecilia", category: "continuous", number: 4, quote: "I could tell you how many steps make up the streets and of what stone the arches are composed.", x: 48, y: 74 },
  { id: "penthesilea", name: "Penthesilea", category: "continuous", number: 5, quote: "You have given up trying to know whether Penthesilea is only the outskirts of itself.", x: 42, y: 66 },

  // Hidden Cities (5)
  { id: "olinda", name: "Olinda", category: "hidden", number: 1, quote: "In Olinda, if you go out with a magnifying glass you may find somewhere a point no bigger than a pinhead.", x: 62, y: 62 },
  { id: "raissa", name: "Raissa", category: "hidden", number: 2, quote: "The city of Raissa has an unhappy story to tell, but at the same time, invisible threads connect one living being to another.", x: 68, y: 66 },
  { id: "marozia", name: "Marozia", category: "hidden", number: 3, quote: "In each moment a swallow city and a rat city are nested one inside the other.", x: 65, y: 72 },
  { id: "theodora", name: "Theodora", category: "hidden", number: 4, quote: "The city was conquered by hawks, by serpents, by termites, by flies.", x: 72, y: 68 },
  { id: "berenice", name: "Berenice", category: "hidden", number: 5, quote: "The unjust city contains a just city within it, which in turn conceals an unjust city.", x: 60, y: 76 },
];

export function getCityById(id: string): City | undefined {
  return cities.find((c) => c.id === id);
}

export function getCitiesByCategory(category: Category): City[] {
  return cities.filter((c) => c.category === category);
}

export function getCategoryInfo(category: Category): CategoryInfo | undefined {
  return categories.find((c) => c.id === category);
}
