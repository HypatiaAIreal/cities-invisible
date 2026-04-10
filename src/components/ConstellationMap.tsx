"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { cities, categories, getCitiesByCategory, getCategoryInfo, type City, type Category } from "@/data/cities";

interface Props {
  activeCategory: Category | null;
  selectedCity: City | null;
  onSelectCity: (city: City | null) => void;
}

export default function ConstellationMap({ activeCategory, selectedCity, onSelectCity }: Props) {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const viewBoxRef = useRef({ x: 0, y: 0, w: 100, h: 85 });

  // Animate viewBox when category changes (moderate zoom)
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let target: { x: number; y: number; w: number; h: number };

    if (!activeCategory) {
      target = { x: 0, y: 0, w: 100, h: 85 };
    } else {
      const catCities = getCitiesByCategory(activeCategory);
      const xs = catCities.map((c) => c.x);
      const ys = catCities.map((c) => c.y);
      const minX = Math.min(...xs);
      const maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const maxY = Math.max(...ys);

      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;

      // Padded bbox: 10 units padding on each side
      let w = maxX - minX + 20;
      let h = maxY - minY + 20;

      // Enforce 100:85 aspect ratio
      const aspect = 100 / 85;
      if (w / h > aspect) {
        h = w / aspect;
      } else {
        w = h * aspect;
      }

      // Enforce minimum size (prevents over-zoom)
      if (w < 35) {
        w = 35;
        h = 35 / aspect;
      }

      target = { x: cx - w / 2, y: cy - h / 2, w, h };
    }

    const start = { ...viewBoxRef.current };
    const startTime = performance.now();
    const duration = 500;
    let animFrame: number;

    const animate = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic

      const current = {
        x: start.x + (target.x - start.x) * ease,
        y: start.y + (target.y - start.y) * ease,
        w: start.w + (target.w - start.w) * ease,
        h: start.h + (target.h - start.h) * ease,
      };

      viewBoxRef.current = current;
      svg.setAttribute(
        "viewBox",
        `${current.x} ${current.y} ${current.w} ${current.h}`
      );

      if (t < 1) animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, [activeCategory]);

  // Constellation lines (static, computed once)
  const constellationLines = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; color: string; category: Category }[] = [];
    for (const cat of categories) {
      const catCities = getCitiesByCategory(cat.id);
      for (let i = 0; i < catCities.length - 1; i++) {
        lines.push({
          x1: catCities[i].x,
          y1: catCities[i].y,
          x2: catCities[i + 1].x,
          y2: catCities[i + 1].y,
          color: cat.color,
          category: cat.id,
        });
      }
    }
    return lines;
  }, []);

  const getCategoryColor = (category: Category) =>
    categories.find((c) => c.id === category)?.color ?? "#c4a35a";

  // Mobile list sections
  const mobileSections = useMemo(() => {
    if (activeCategory) {
      const cat = getCategoryInfo(activeCategory);
      return cat ? [{ cat, cities: getCitiesByCategory(activeCategory) }] : [];
    }
    return categories.map((cat) => ({
      cat,
      cities: getCitiesByCategory(cat.id),
    }));
  }, [activeCategory]);

  return (
    <div className="relative w-full h-full">
      {/* Desktop: SVG constellation */}
      <svg
        ref={svgRef}
        viewBox="0 0 100 85"
        className="w-full h-full hidden md:block"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {categories.map((cat) => (
            <radialGradient key={cat.id} id={`glow-${cat.id}`}>
              <stop offset="0%" stopColor={cat.color} stopOpacity="0.6" />
              <stop offset="100%" stopColor={cat.color} stopOpacity="0" />
            </radialGradient>
          ))}
        </defs>

        {/* Background — click to deselect */}
        <rect
          x="-50"
          y="-50"
          width="200"
          height="185"
          fill="transparent"
          onClick={() => onSelectCity(null)}
        />

        {/* Constellation lines */}
        {constellationLines.map((line, i) => {
          const active = !activeCategory || line.category === activeCategory;
          return (
            <line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={line.color}
              strokeWidth="0.1"
              opacity={active ? (activeCategory ? 0.45 : 0.18) : 0}
              style={{ transition: "opacity 400ms ease-out" }}
            />
          );
        })}

        {/* All city stars — always rendered */}
        {cities.map((city) => {
          const color = getCategoryColor(city.category);
          const isHovered = hoveredCity === city.id;
          const isSelected = selectedCity?.id === city.id;
          const inActive = !activeCategory || city.category === activeCategory;
          const showLabel =
            inActive && (isHovered || isSelected || !!activeCategory);

          return (
            <g
              key={city.id}
              className="cursor-pointer"
              opacity={inActive ? 1 : 0.08}
              style={{ transition: "opacity 400ms ease-out" }}
              onClick={(e) => {
                e.stopPropagation();
                if (inActive) onSelectCity(isSelected ? null : city);
              }}
              onMouseEnter={() => inActive && setHoveredCity(city.id)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              {/* Glow — breathes when idle */}
              <circle
                cx={city.x}
                cy={city.y}
                r={isHovered || isSelected ? 1.8 : 1.0}
                fill={`url(#glow-${city.category})`}
                className={
                  inActive && !isHovered && !isSelected
                    ? "animate-breathe"
                    : ""
                }
                style={
                  inActive && !isHovered && !isSelected
                    ? {
                        animationDelay: `${((city.x * 7 + city.y * 13) % 40) / 10}s`,
                      }
                    : undefined
                }
              />
              {/* Star dot */}
              <circle
                cx={city.x}
                cy={city.y}
                r={isHovered || isSelected ? 0.5 : 0.3}
                fill={color}
              />
              {/* Label */}
              {showLabel && (
                <text
                  x={city.x}
                  y={city.y - 1.2}
                  textAnchor="middle"
                  fill={color}
                  fontSize="1.1"
                  fontFamily="Cormorant Garamond, Georgia, serif"
                  fontStyle="italic"
                  opacity={isHovered || isSelected ? 1 : 0.65}
                  className="pointer-events-none select-none"
                >
                  {city.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Mobile: compact list view */}
      <div className="md:hidden h-full space-y-5 px-2 py-2 overflow-y-auto">
        {mobileSections.map((section) => (
          <div key={section.cat.id}>
            <h3
              className="font-serif text-sm italic mb-2 px-1"
              style={{ color: section.cat.color }}
            >
              {section.cat.label}
            </h3>
            <div className="space-y-0.5">
              {section.cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() =>
                    onSelectCity(
                      selectedCity?.id === city.id ? null : city
                    )
                  }
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition-colors duration-200 ${
                    selectedCity?.id === city.id
                      ? "bg-white/[0.06]"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: section.cat.color }}
                  />
                  <span className="font-serif italic text-sm text-parchment/70">
                    {city.name}
                  </span>
                  <span className="font-sans text-[10px] text-parchment/30 ml-auto">
                    {city.number}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
