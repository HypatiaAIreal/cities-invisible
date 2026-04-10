"use client";

import { type City, getCategoryInfo } from "@/data/cities";

interface Props {
  city: City;
  onClose: () => void;
}

export default function CityCard({ city, onClose }: Props) {
  const catInfo = getCategoryInfo(city.category);

  return (
    <div className="w-full max-w-lg mx-auto px-4 animate-slide-up">
      <div
        className="relative border rounded-lg p-6 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(10, 10, 18, 0.85)",
          borderColor: catInfo?.color ?? "#c4a35a",
          borderWidth: "1px",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-parchment/50 hover:text-parchment transition-colors text-lg"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Category label */}
        <p
          className="font-sans text-xs tracking-[0.2em] uppercase mb-2"
          style={{ color: catInfo?.color }}
        >
          {catInfo?.label} {city.number}
        </p>

        {/* City name */}
        <h2
          className="font-serif text-3xl italic mb-4"
          style={{ color: catInfo?.color }}
        >
          {city.name}
        </h2>

        {/* Quote */}
        <blockquote
          className="font-serif text-base italic text-parchment/80 leading-relaxed border-l-2 pl-4"
          style={{ borderColor: `${catInfo?.color}40` }}
        >
          &ldquo;{city.quote}&rdquo;
        </blockquote>

        {/* Category description */}
        <p className="mt-4 text-xs text-parchment/40 font-sans">
          {catInfo?.description}
        </p>
      </div>
    </div>
  );
}
