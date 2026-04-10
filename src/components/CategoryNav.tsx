"use client";

import { categories, type Category } from "@/data/cities";

interface Props {
  activeCategory: Category | null;
  onCategoryChange: (cat: Category | null) => void;
}

export default function CategoryNav({ activeCategory, onCategoryChange }: Props) {
  return (
    <nav className="flex flex-wrap justify-center gap-2 px-4">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-300 border ${
          activeCategory === null
            ? "bg-gold/20 border-gold text-gold"
            : "border-parchment/10 text-parchment/40 hover:text-parchment/70 hover:border-parchment/30"
        }`}
      >
        All Constellations
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(activeCategory === cat.id ? null : cat.id)}
          className="px-3 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all duration-300 border"
          style={{
            borderColor: activeCategory === cat.id ? cat.color : "rgba(212,208,203,0.1)",
            color: activeCategory === cat.id ? cat.color : "rgba(212,208,203,0.4)",
            backgroundColor: activeCategory === cat.id ? `${cat.color}15` : "transparent",
          }}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}
