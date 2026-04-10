import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityById, getCategoryInfo, getCitiesByCategory } from "@/data/cities";

export function generateStaticParams() {
  return cities.map((city) => ({ id: city.id }));
}

export default function CityPage({ params }: { params: { id: string } }) {
  const city = getCityById(params.id);
  if (!city) return notFound();

  const catInfo = getCategoryInfo(city.category);
  const siblings = getCitiesByCategory(city.category);
  const currentIndex = siblings.findIndex((c) => c.id === city.id);
  const prev = currentIndex > 0 ? siblings[currentIndex - 1] : null;
  const next = currentIndex < siblings.length - 1 ? siblings[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-sm text-parchment/40 hover:text-gold transition-colors mb-8"
        >
          <span>&larr;</span>
          <span>Back to constellation</span>
        </Link>

        {/* Category */}
        <p
          className="font-sans text-xs tracking-[0.2em] uppercase mb-3"
          style={{ color: catInfo?.color }}
        >
          {catInfo?.label} {city.number}
        </p>

        {/* City name */}
        <h1
          className="font-serif text-5xl md:text-6xl italic mb-6"
          style={{ color: catInfo?.color }}
        >
          {city.name}
        </h1>

        {/* Decorative line */}
        <div
          className="w-16 h-px mb-8"
          style={{ backgroundColor: catInfo?.color }}
        />

        {/* Quote */}
        <blockquote
          className="font-serif text-xl italic text-parchment/80 leading-relaxed mb-8"
        >
          &ldquo;{city.quote}&rdquo;
        </blockquote>

        {/* Category description */}
        <p className="font-sans text-sm text-parchment/40 mb-12">
          {catInfo?.description}
        </p>

        {/* Navigation between siblings */}
        <div className="flex justify-between items-center border-t border-parchment/10 pt-6">
          {prev ? (
            <Link
              href={`/city/${prev.id}`}
              className="font-serif italic text-parchment/50 hover:text-gold transition-colors"
            >
              &larr; {prev.name}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/city/${next.id}`}
              className="font-serif italic text-parchment/50 hover:text-gold transition-colors"
            >
              {next.name} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
}
