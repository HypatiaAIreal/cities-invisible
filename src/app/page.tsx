"use client";

import { useState, useEffect, useRef } from "react";
import StarField from "@/components/StarField";
import ConstellationMap from "@/components/ConstellationMap";
import CategoryNav from "@/components/CategoryNav";
import CityCard from "@/components/CityCard";
import type { Category, City } from "@/data/cities";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Deselect city when switching to a category that doesn't contain it
  useEffect(() => {
    if (activeCategory && selectedCity && selectedCity.category !== activeCategory) {
      setSelectedCity(null);
    }
  }, [activeCategory, selectedCity]);

  // Smooth-scroll to card when a city is selected
  useEffect(() => {
    if (selectedCity && cardRef.current) {
      const timer = setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedCity]);

  const handleCloseCard = () => {
    setSelectedCity(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
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

      {/* Sticky category navigation */}
      <div className="sticky top-0 z-20 py-2.5 bg-background/80 backdrop-blur-sm border-b border-parchment/[0.04]">
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </div>

      {/* Constellation — fills remaining viewport height, vertically centered */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-2 min-h-0">
        <div className="w-full h-full">
          <ConstellationMap
            activeCategory={activeCategory}
            selectedCity={selectedCity}
            onSelectCity={setSelectedCity}
          />
        </div>
      </main>

      {/* City detail card — normal flow below constellation */}
      {selectedCity && (
        <div ref={cardRef} className="relative z-10 py-8">
          <CityCard
            key={selectedCity.id}
            city={selectedCity}
            onClose={handleCloseCard}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-5 px-4">
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
