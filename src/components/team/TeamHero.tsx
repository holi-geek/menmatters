import { motion } from "framer-motion";
import { Ribbon } from "lucide-react";

const TeamHero = () => (
  <section className="relative overflow-hidden border-b border-border bg-muted/40">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:22px_22px]"
    />
    <div className="container relative px-4 pb-16 pt-28 text-center sm:pb-20 sm:pt-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
          <Ribbon size={14} aria-hidden="true" />
          Our People
        </span>
        <h1 className="mt-5 font-heading text-3xl font-bold text-foreground sm:text-5xl">
          Meet Our Team
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Men Matter is powered by people — nurses, facilitators, advocates and
          volunteers — committed to creating meaningful, lasting impact in
          communities across Kenya.
        </p>
      </motion.div>
    </div>
  </section>
);

export default TeamHero;
