import { memo } from "react";
import type { Story } from "@/data/storiesData";

interface StoryCardProps {
  story: Story;
  onReadMore: (story: Story) => void;
}

const StoryCardComponent = ({ story, onReadMore }: StoryCardProps) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {story.image && (
        <div className="h-48 w-full overflow-hidden bg-emerald-50">
          <img
            src={story.image}
            alt={story.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = `https://api.dicebear.com/8.x/initials/svg?seed=${story.author || "Story"}`;
            }}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary">
          {story.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          By {story.author} · {new Date(story.date).toLocaleDateString()}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {story.excerpt}
        </p>
        <button
          onClick={() => onReadMore(story)}
          className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline text-left cursor-pointer"
          aria-label={`Read more about ${story.title}`}
        >
          Read more →
        </button>
      </div>
    </article>
  );
};

export const StoryCard = memo(StoryCardComponent);