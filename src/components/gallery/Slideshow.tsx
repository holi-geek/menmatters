import { memo, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GallerySlide } from "@/data/galleryData";
import { useSlideshow } from "@/hooks/useSlideshow";
import { cn } from "@/lib/utils";

interface SlideshowProps {
  slides: GallerySlide[];
}

const SlideshowComponent = ({ slides }: SlideshowProps) => {
  const { index, next, prev, goTo, setPaused } = useSlideshow({ total: slides.length });
  const regionRef = useRef<HTMLElement>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Arrow-key navigation when the slideshow region is focused.
  useEffect(() => {
    const el = regionRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    setTouchStartX(null);
  };

  return (
    <section
      ref={regionRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Men Matter gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative w-full overflow-hidden rounded-2xl bg-card shadow-lg focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <figure
            key={slide.id}
            className="relative w-full flex-shrink-0"
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-[60vh] max-h-[600px] w-full object-cover sm:h-[70vh]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white sm:p-6">
              <h2 className="font-heading text-xl font-bold sm:text-2xl">{slide.title}</h2>
              {slide.caption && <p className="mt-1 text-sm text-white/90 sm:text-base">{slide.caption}</p>}
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-foreground shadow-md transition hover:bg-white sm:left-4 sm:p-3"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-foreground shadow-md transition hover:bg-white sm:right-4 sm:p-3"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute inset-x-0 bottom-24 flex justify-center gap-2 sm:bottom-28" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "w-8 bg-primary" : "w-2.5 bg-white/70 hover:bg-white",
            )}
          />
        ))}
      </div>
    </section>
  );
};

export const Slideshow = memo(SlideshowComponent);
