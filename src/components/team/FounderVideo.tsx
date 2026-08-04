import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { founderVideo } from "@/data/teamData";

const isEmbed = (url: string) => /youtube|youtu\.be|vimeo/.test(url);

/**
 * Founder's welcome video. Replace `founderVideo.url` in src/data/teamData.ts
 * with a YouTube/Vimeo embed URL or a local file path (e.g. "/founder.mp4").
 */
const FounderVideo = () => {
  const [playing, setPlaying] = useState(false);
  const embed = isEmbed(founderVideo.url);

  return (
    <section aria-labelledby="founder-heading" className="container px-4 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
      >
        <div>
          <h2
            id="founder-heading"
            className="font-heading text-2xl font-bold text-foreground sm:text-3xl"
          >
            A Message From Our Founder
          </h2>
          <p className="mt-4 text-muted-foreground">
            Georgina Achieng Otieno, a psychiatric nurse and the founder of Men
            Matter, shares why this work began and what it means for the men and
            families we walk with every day.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Think. Talk. Thrive.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="relative aspect-video w-full bg-muted">
            {!playing ? (
              <>
                <img
                  src={founderVideo.poster}
                  alt="Men Matter founder Georgina Achieng Otieno"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Play the founder's welcome video"
                  className="absolute inset-0 flex items-center justify-center bg-foreground/30 transition-colors hover:bg-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-200 motion-safe:hover:scale-105">
                    <Play size={26} className="ml-1" aria-hidden="true" />
                  </span>
                </button>
              </>
            ) : embed ? (
              <iframe
                src={`${founderVideo.url}${founderVideo.url.includes("?") ? "&" : "?"}autoplay=1`}
                title={founderVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <video
                src={founderVideo.url}
                poster={founderVideo.poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full"
              >
                {founderVideo.captionsSrc && (
                  <track
                    kind="captions"
                    src={founderVideo.captionsSrc}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}
              </video>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderVideo;
