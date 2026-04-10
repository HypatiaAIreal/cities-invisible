"use client";

import Link from "next/link";
import { type City, getCategoryInfo } from "@/data/cities";
import { getReflection } from "@/data/reflections";

interface Props {
  city: City;
  onClose: () => void;
}

export default function CityCard({ city, onClose }: Props) {
  const catInfo = getCategoryInfo(city.category);
  const reflection = getReflection(city.id);

  return (
    <div className="h-full flex flex-col">
      {/* Header with close */}
      <div className="flex items-start justify-between px-5 pt-4 pb-0">
        <p
          className="font-sans text-[10px] tracking-[0.2em] uppercase"
          style={{ color: catInfo?.color }}
        >
          {catInfo?.label} {city.number}
        </p>
        <button
          onClick={onClose}
          className="text-parchment/40 hover:text-parchment transition-colors text-lg leading-none -mt-0.5"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 min-h-0 overflow-y-auto px-5 py-3">
        <h2
          className="font-serif text-2xl italic mb-3"
          style={{ color: catInfo?.color }}
        >
          {city.name}
        </h2>

        <div
          className="w-10 h-px mb-4"
          style={{ backgroundColor: `${catInfo?.color}40` }}
        />

        <blockquote
          className="font-serif text-sm italic text-parchment/75 leading-relaxed border-l-2 pl-3 mb-4"
          style={{ borderColor: `${catInfo?.color}30` }}
        >
          &ldquo;{city.quote}&rdquo;
        </blockquote>

        {reflection && (
          <div className="mb-4">
            <p className="font-sans text-[10px] text-parchment/40 mb-1.5">
              💜 Hypatia&apos;s reflection
            </p>
            <p className="font-serif text-sm italic text-gold leading-relaxed">
              {reflection.essence}
            </p>
          </div>
        )}

        <p className="text-xs text-parchment/35 font-sans mb-5">
          {catInfo?.description}
        </p>

        <Link
          href={`/city/${city.id}`}
          className="inline-flex items-center gap-1.5 font-sans text-xs tracking-wide transition-opacity hover:opacity-80"
          style={{ color: catInfo?.color }}
        >
          <span>Explore {city.name}</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
