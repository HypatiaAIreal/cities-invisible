"use client";

import { useState, useMemo } from "react";
import { cities, categories, getCitiesByCategory, type City, type Category } from "@/data/cities";
import CityCard from "./CityCard";

interface Props {
  activeCategory: Category | null;
}

export default function ConstellationMap({ activeCategory }: Props) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const visibleCities = useMemo(() => {
    if (!activeCategory) return cities;
    return getCitiesByCategory(activeCategory);
  }, [activeCategory]);

  const constellationLines = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; color: string }[] = [];
    for (const cat of categories) {
      const catCities = getCitiesByCategory(cat.id);
      for (let i = 0; i < catCities.length - 1; i++) {
        lines.push({
          x1: catCities[i].x,
          y1: catCities[i].y,
          x2: catCities[i + 1].x,
          y2: catCities[i + 1].y,
          color: cat.color,
        });
      }
    }
    return lines;
  }, []);

  const visibleLines = useMemo(() => {
    if (!activeCategory) return constellationLines;
    const cat = categories.find((c) => c.id === activeCategory);
    if (!cat) return [];
    const catCities = getCitiesByCategory(activeCategory);
    const lines: typeof constellationLines = [];
    for (let i = 0; i < catCities.length - 1; i++) {
      lines.push({
        x1: catCities[i].x,
        y1: catCities[i].y,
        x2: catCities[i + 1].x,
        y2: catCities[i + 1].y,
        color: cat.color,
      });
    }
    return lines;
  }, [activeCategory, constellationLines]);

  const getCategoryColor = (category: Category) => {
    return categories.find((c) => c.id === category)?.color ?? "#c4a35a";
  };

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 100 85"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {categories.map((cat) => (
            <radialGradient key={cat.id} id={`glow-${cat.id}`}>
              <stop offset="0%" stopColor={cat.color} stopOpacity="0.8" />
              <stop offset="100%" stopColor={cat.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Constellation lines */}
        {visibleLines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.color}
            strokeWidth="0.15"
            strokeOpacity={activeCategory ? 0.5 : 0.2}
            className="transition-opacity duration-700"
          />
        ))}

        {/* City stars */}
        {visibleCities.map((city) => {
          const color = getCategoryColor(city.category);
          const isHovered = hoveredCity === city.id;
          const isSelected = selectedCity?.id === city.id;
          const dimmed = activeCategory && city.category !== activeCategory;

          return (
            <g
              key={city.id}
              className="cursor-pointer transition-opacity duration-500"
              opacity={dimmed ? 0.15 : 1}
              onClick={() => setSelectedCity(isSelected ? null : city)}
              onMouseEnter={() => setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              {/* Glow */}
              <circle
                cx={city.x}
                cy={city.y}
                r={isHovered || isSelected ? 2.5 : 1.5}
                fill={`url(#glow-${city.category})`}
                className="transition-all duration-300"
              />
              {/* Star dot */}
              <circle
                cx={city.x}
                cy={city.y}
                r={isHovered || isSelected ? 0.7 : 0.45}
                fill={color}
                className="transition-all duration-300"
              />
              {/* Label */}
              {(isHovered || isSelected || activeCategory) && !dimmed && (
                <text
                  x={city.x}
                  y={city.y - 1.5}
                  textAnchor="middle"
                  fill={color}
                  fontSize="1.4"
                  fontFamily="Cormorant Garamond, Georgia, serif"
                  fontStyle="italic"
                  opacity={isHovered || isSelected ? 1 : 0.7}
                  className="pointer-events-none select-none"
                >
                  {city.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* City detail card */}
      {selectedCity && (
        <CityCard
          city={selectedCity}
          onClose={() => setSelectedCity(null)}
        />
      )}
    </div>
  );
}
