"use client";

import Link from "next/link";
import { type City, getCategoryInfo } from "@/data/cities";

interface Props {
  city: City;
  onClose: () => void;
}

export default function CityCard({ city, onClose }: Props) {
  const catInfo = getCategoryInfo(city.category);

  return (
    <div className="relative max-h-[80vh] overflow-y-auto p-6">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-parchment/40 hover:text-parchment transition-colors text-lg leading-none"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Category label */}
      <p
        className="font-sans text-[10px] tracking-[0.2em] uppercase mb-2"
        style={{ color: catInfo?.color }}
      >
        {catInfo?.label} {city.number}
      </p>

      {/* City name */}
      <h2
        className="font-serif text-3xl italic mb-3"
        style={{ color: catInfo?.color }}
      >
        {city.name}
      </h2>

      <div
        className="w-10 h-px mb-4"
        style={{ backgroundColor: `${catInfo?.color}40` }}
      />

      {/* Quote */}
      <blockquote
        className="font-serif text-base italic text-parchment/80 leading-relaxed border-l-2 pl-4 mb-4"
        style={{ borderColor: `${catInfo?.color}30` }}
      >
        &ldquo;{city.quote}&rdquo;
      </blockquote>

      {/* Category description */}
      <p className="text-xs text-parchment/35 font-sans mb-5">
        {catInfo?.description}
      </p>

      {/* Link to full page */}
      <Link
        href={`/city/${city.id}`}
        className="inline-flex items-center gap-1.5 font-sans text-xs tracking-wide transition-opacity hover:opacity-80"
        style={{ color: catInfo?.color }}
      >
        <span>Explore {city.name}</span>
        <span>&rarr;</span>
      </Link>
    </div>
  );
}
