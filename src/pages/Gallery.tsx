import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Slideshow } from "@/components/gallery/Slideshow";
import { ErrorMessage, LoadingSpinner } from "@/components/ui/feedback";
import { gallerySlides, type GallerySlide } from "@/data/galleryData";

/**
 * Gallery page — orchestrates the async load and hands data to <Slideshow />.
 * Swap the mock loader for a real API call by replacing the useEffect body.
 */
const Gallery = () => {
  const [slides, setSlides] = useState<GallerySlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    const t = window.setTimeout(() => {
      if (cancelled) return;
      try {
        setSlides(gallerySlides);
        setError(null);
      } catch {
        setError("Unable to load gallery images.");
      } finally {
        setLoading(false);
      }
    }, 600);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Gallery | Men Matter</title>
        <meta
          name="description"
          content="Moments from Men Matter dialogues, workshops, and community outreach across Kenya."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container px-4 pb-16 pt-28">
          <header className="mb-8 text-center">
            <h1 className="font-heading text-3xl font-bold text-primary sm:text-5xl">
              Gallery
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A visual journey through our dialogues, workshops, and community moments.
            </p>
          </header>
          {loading && <LoadingSpinner label="Loading gallery…" />}
          {error && !loading && <ErrorMessage message={error} />}
          {!loading && !error && slides.length > 0 && <Slideshow slides={slides} />}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
