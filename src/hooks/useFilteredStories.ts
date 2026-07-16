import { useMemo } from "react";
import type { Story } from "@/data/storiesData";

export function useFilteredStories(stories: Story[], query: string): Story[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stories;
    return stories.filter(
      (s) => s.title.toLowerCase().includes(q) || s.author.toLowerCase().includes(q),
    );
  }, [stories, query]);
}
