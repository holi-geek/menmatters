import { memo } from "react";
import type { Story } from "@/data/storiesData";

interface StoryCardProps {
  story: Story;
}

const StoryCardComponent = ({ story }: StoryCardProps) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {story.image && (
        <img
          src={story.image}
          alt=""
          loading="lazy"
          className="h-48 w-full object-cover"
        />
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
        <a
          href={`#story-${story.id}`}
          className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:underline"
          aria-label={`Read more about ${story.title}`}
        >
          Read more →
        </a>
      </div>
    </article>
  );
};

export const StoryCard = memo(StoryCardComponent);
