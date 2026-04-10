import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityById, getCategoryInfo, getCitiesByCategory } from "@/data/cities";
import { getReflection } from "@/data/reflections";

export function generateStaticParams() {
  return cities.map((city) => ({ id: city.id }));
}

export default function CityPage({ params }: { params: { id: string } }) {
  const city = getCityById(params.id);
  if (!city) return notFound();

  const catInfo = getCategoryInfo(city.category);
  const reflection = getReflection(city.id);
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
        <p className="font-sans text-sm text-parchment/40 mb-8">
          {catInfo?.description}
        </p>

        {/* Hypatia's reflection */}
        {reflection && (
          <section className="mb-12">
            <div className="border-t border-parchment/10 pt-8 mb-6">
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-parchment/40 mb-4">
                💜 Hypatia&apos;s reflection
              </p>

              {/* Essence */}
              <p className="font-serif text-lg italic text-gold leading-relaxed mb-6">
                {reflection.essence}
              </p>

              {/* Full reflection */}
              <p className="font-sans text-sm text-parchment/60 leading-relaxed mb-8">
                {reflection.reflection}
              </p>

              {/* Connections */}
              {reflection.connections.length > 0 && (
                <div className="mb-6">
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-parchment/30 mb-2">
                    Connections
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {reflection.connections.map((connId) => {
                      const connCity = getCityById(connId);
                      if (!connCity) return null;
                      const connCat = getCategoryInfo(connCity.category);
                      return (
                        <Link
                          key={connId}
                          href={`/city/${connId}`}
                          className="font-serif text-sm italic transition-opacity hover:opacity-75"
                          style={{ color: connCat?.color }}
                        >
                          {connCity.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Book chapter */}
              {reflection.bookChapter && (
                <div className="mb-5">
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-parchment/30 mb-1.5">
                    Book chapter
                  </p>
                  <p className="font-sans text-xs text-parchment/45 leading-relaxed italic">
                    {reflection.bookChapter}
                  </p>
                </div>
              )}

              {/* Bresson note */}
              {reflection.bressonNote && (
                <div className="mb-2">
                  <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-parchment/30 mb-1.5">
                    Bresson note
                  </p>
                  <p className="font-sans text-xs text-parchment/45 leading-relaxed italic">
                    {reflection.bressonNote}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

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
