import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SearchBar } from "@/components/stories/SearchBar";
import { StoryCard } from "@/components/stories/StoryCard";
import { ErrorMessage, LoadingSpinner } from "@/components/ui/feedback";
import { useFilteredStories } from "@/hooks/useFilteredStories";
import { stories as mockStories, type Story } from "@/data/storiesData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PeopleStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Story | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    const t = window.setTimeout(() => {
      if (cancelled) return;
      try {
        setStories(mockStories);
        setError(null);
      } catch {
        setError("Unable to load stories.");
      } finally {
        setLoading(false);
      }
    }, 600);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  const filtered = useFilteredStories(stories, query);

  const currentIndex = selected
    ? filtered.findIndex((s) => s.id === selected.id)
    : -1;
  const goTo = (offset: number) => {
    if (currentIndex < 0) return;
    const next = filtered[currentIndex + offset];
    if (next) setSelected(next);
  };

  return (
    <>
      <Helmet>
        <title>People's Stories | Men Matter</title>
        <meta
          name="description"
          content="Real stories from men, families, and communities transformed through Men Matter programs."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container px-4 pb-16 pt-28">
          <header className="mb-8 text-center">
            <h1 className="font-heading text-3xl font-bold text-primary sm:text-5xl">
              People's Stories
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Voices of courage, healing, and hope from our community.
            </p>
          </header>

          <div className="mb-8 flex justify-center">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search by title or author…"
            />
          </div>

          {loading && <LoadingSpinner label="Loading stories…" />}
          {error && !loading && <ErrorMessage message={error} />}

          {!loading && !error && (
            <section aria-label="Stories">
              {filtered.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  No stories match "{query}".
                </p>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((s) => (
                    <StoryCard key={s.id} story={s} onReadMore={setSelected} />
                  ))}
                </div>
              )}
            </section>
          )}
        </main>

        <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
          <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl text-primary">
                    {selected.title}
                  </DialogTitle>
                  <DialogDescription>
                    By {selected.author} ·{" "}
                    {new Date(selected.date).toLocaleDateString()}
                  </DialogDescription>
                </DialogHeader>
                {selected.image && (
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="max-h-72 w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                )}
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {selected.body.split("\n\n").map((p, i) => (
                    <p key={i}>{p.trim()}</p>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between gap-3 border-t border-border pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goTo(-1)}
                    disabled={currentIndex <= 0}
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Previous
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    {currentIndex + 1} of {filtered.length}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goTo(1)}
                    disabled={currentIndex >= filtered.length - 1}
                  >
                    Next
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </div>
    </>
  );
};

export default PeopleStories;
