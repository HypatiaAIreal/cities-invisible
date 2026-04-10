"use client";

import { useState, useEffect, useCallback } from "react";
import StarField from "@/components/StarField";
import ConstellationMap from "@/components/ConstellationMap";
import CategoryNav from "@/components/CategoryNav";
import CityCard from "@/components/CityCard";
import type { Category, City } from "@/data/cities";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const closeModal = useCallback(() => setSelectedCity(null), []);

  // Deselect city when switching to a category that doesn't contain it
  useEffect(() => {
    if (activeCategory && selectedCity && selectedCity.category !== activeCategory) {
      setSelectedCity(null);
    }
  }, [activeCategory, selectedCity]);

  // Escape key closes the modal
  useEffect(() => {
    if (!selectedCity) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedCity, closeModal]);

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

      {/* Constellation */}
      <div className="relative flex-1 min-h-0 z-10">
        <main className="w-full h-full flex items-center justify-center px-4 py-2">
          <div className="w-full h-full">
            <ConstellationMap
              activeCategory={activeCategory}
              selectedCity={selectedCity}
              onSelectCity={setSelectedCity}
            />
          </div>
        </main>
      </div>

      {/* Lightbox modal */}
      {selectedCity && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center p-4 animate-modal-backdrop"
          style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
          onClick={closeModal}
        >
          <div
            className="w-full max-w-[500px] rounded-lg animate-modal-card"
            style={{
              backgroundColor: "rgba(10, 10, 18, 0.95)",
              border: "1px solid rgba(196,163,90,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <CityCard city={selectedCity} onClose={closeModal} />
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
