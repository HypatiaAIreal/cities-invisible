"use client";

import { useState, useEffect } from "react";
import StarField from "@/components/StarField";
import ConstellationMap from "@/components/ConstellationMap";
import CategoryNav from "@/components/CategoryNav";
import CityCard from "@/components/CityCard";
import type { Category, City } from "@/data/cities";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  // Deselect city when switching to a category that doesn't contain it
  useEffect(() => {
    if (activeCategory && selectedCity && selectedCity.category !== activeCategory) {
      setSelectedCity(null);
    }
  }, [activeCategory, selectedCity]);

  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <StarField />

      {/* Header */}
      <header className="relative z-10 text-center pt-5 pb-2 px-4">
        <h1 className="font-serif text-3xl md:text-4xl italic text-gold animate-fade-in">
          Invisible Cities
        </h1>
        <p className="font-sans text-xs text-parchment/50 mt-1 tracking-widest uppercase animate-fade-in-slow">
          A Constellation of Calvino&apos;s Cities
        </p>
      </header>

      {/* Category navigation */}
      <div className="relative z-20 py-2.5 bg-background/80 backdrop-blur-sm border-b border-parchment/[0.04]">
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Main content: constellation + optional sidebar */}
      <div className="relative flex-1 min-h-0 z-10">
        {/* Constellation — always full width */}
        <main className="w-full h-full flex items-center justify-center px-4 py-2">
          <div className="w-full h-full">
            <ConstellationMap
              activeCategory={activeCategory}
              selectedCity={selectedCity}
              onSelectCity={setSelectedCity}
            />
          </div>
        </main>

        {/* Desktop: right sidebar */}
        {selectedCity && (
          <aside className="hidden md:flex flex-col absolute top-0 right-0 h-full w-[35%] max-w-sm z-30 border-l border-parchment/[0.08] bg-background/95 backdrop-blur-sm animate-slide-in-right">
            <CityCard
              city={selectedCity}
              onClose={() => setSelectedCity(null)}
            />
          </aside>
        )}
      </div>

      {/* Mobile: bottom sheet */}
      {selectedCity && (
        <div
          className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex flex-col rounded-t-xl border-t border-parchment/[0.08] bg-background/95 backdrop-blur-sm animate-slide-up-full"
          style={{ height: "40vh" }}
        >
          <div className="w-10 h-1 bg-parchment/20 rounded-full mx-auto mt-2.5 mb-1 flex-shrink-0" />
          <div className="flex-1 min-h-0">
            <CityCard
              city={selectedCity}
              onClose={() => setSelectedCity(null)}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-4 px-4">
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
