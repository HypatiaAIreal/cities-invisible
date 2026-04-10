"use client";

import { useState } from "react";
import StarField from "@/components/StarField";
import ConstellationMap from "@/components/ConstellationMap";
import CategoryNav from "@/components/CategoryNav";
import type { Category } from "@/data/cities";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col">
      <StarField />

      {/* Header */}
      <header className="relative z-10 text-center pt-8 pb-4 px-4">
        <h1 className="font-serif text-4xl md:text-5xl italic text-gold animate-fade-in">
          Invisible Cities
        </h1>
        <p className="font-sans text-sm text-parchment/50 mt-2 tracking-widest uppercase animate-fade-in-slow">
          A Constellation of Calvino&apos;s Cities
        </p>
      </header>

      {/* Category navigation */}
      <div className="relative z-10 py-4 animate-fade-in-slow">
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Constellation map */}
      <main className="relative z-10 flex-1 px-4 pb-8">
        <ConstellationMap activeCategory={activeCategory} />
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center pb-6 px-4">
        <p className="font-serif text-xs italic text-parchment/30">
          &ldquo;Elsewhere is a negative mirror. The traveler recognizes the little that is his,
          discovering the much he has not had and will never have.&rdquo;
        </p>
        <p className="font-sans text-[10px] text-parchment/20 mt-2 tracking-widest uppercase">
          Italo Calvino, 1972
        </p>
      </footer>
    </div>
  );
}
