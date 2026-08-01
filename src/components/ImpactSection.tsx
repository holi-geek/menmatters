import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Ribbon, MessageSquareQuote, Users, Heart, MessageSquare,
  GraduationCap, Handshake, School, MapPin, X, ChevronLeft, ChevronRight
} from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

// Utility
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

// ----- STATS DATA (your actual impact numbers) -----
const stats = [
  {
    icon: Users,
    number: 523,
    label: "Community Members Reached",
    detail: "Across Homabay, Kisumu, Migori and Siaya through community dialogue, schools, churches and media engagement."
  },
  {
    icon: Heart,
    number: 147,
    label: "Men Referred for Care",
    detail: "Through Men Matter referral network to counselling, psychiatric assessment and specialised mental health services."
  },
  {
    icon: MessageSquare,
    number: 13,
    label: "Community Listening Sessions",
    detail: "Every session contributes to understanding local challenges affecting men's mental wellbeing."
  },
  {
    icon: GraduationCap,
    number: 5,
    label: "Men Matter Champions",
    detail: "Graduates to the leadership academy now serving their own communities."
  },
  {
    icon: Handshake,
    number: 9,
    label: "Strategic Partnerships",
    detail: "Working alongside hospitals, schools, faith organisations, county departments and community groups."
  },
  {
    icon: School,
    number: 9,
    label: "Schools Visited",
    detail: "Worked with learners, teachers and school communities to promote mental health awareness, encourage early help‑seeking and equip young people with practical coping skills."
  },
  {
    icon: MapPin,
    number: 8,
    label: "Counties Reached",
    detail: "Our work has expanded across eight counties through community engagement, partnerships and advocacy, extending the message that every conversation about mental health has the power to change lives."
  }
];

// ----- TESTIMONIALS -----
const testimonialItems = [
  {
    image: "/AO.jpg", // Path relative to the public folder
    quote: "Men Matter helped me understand my own mental health and taught me emotional regulation and active listening. Today, I can support others to realize that many emotional struggles are not witchcraft—they are mental health challenges, and help is available",
    name: "Alphonce Onyango",
    title: "Men Matter Peer Champion",
  },
  {
    image: "/avatar2.jpg", // Path relative to the public folder
    quote: "The dialogue sessions changed how I see mental health. It's okay to not be okay.",
    name: "Youth Participant",
    title: "Community Program",
  },
  {
    image: "/avatar3.jpg", // Path relative to the public folder
    quote: "Having a safe space to share without judgment completely shifted my outlook on life and brotherhood.",
    name: "Workshop Attendee",
    title: "Nairobi Chapter",
  },
];

// ----- INFINITE MOVING CARDS (Testimonials) -----
interface InfiniteMovingCardsProps {
  items: typeof testimonialItems;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const InlineInfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-25 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-3xl border border-white/20 bg-white/70 backdrop-blur-xl p-8 shadow-2xl shadow-emerald-900/5 md:w-[450px]"
            key={`${item.name}-${idx}`}
          >
            <span className="absolute -top-4 -left-2 text-8xl font-serif text-emerald-900/5 select-none">“</span>
            <blockquote className="relative z-10">
              <span className="text-sm leading-relaxed font-normal text-gray-700 italic">"{item.quote}"</span>
              <div className="relative z-10 mt-6 flex flex-row items-center gap-4">
                {/* Circular Image Container */}
                <div className="shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-200 shadow-md"
                    onError={(e) => {
                      e.currentTarget.src = `https://api.dicebear.com/8.x/initials/svg?seed=${item.name}`;
                    }}
                  />
                </div>
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-emerald-950">{item.name}</span>
                  <span className="text-xs text-gray-500">{item.title}</span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ----- COUNTER HOOK -----
function useCountUp(target: number, duration = 2000, shouldStart: boolean) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated) return;
    if (target === 0) {
      setHasAnimated(true);
      return;
    }

    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
        setHasAnimated(true);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [shouldStart, target, duration, hasAnimated]);

  return count;
}

// ----- TIMELINE ITEM -----
interface TimelineItemProps {
  stat: typeof stats[0];
  index: number;
  onClick: (index: number) => void;
}

const TimelineItem = ({ stat, index, onClick }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });
  const isListeningSession = stat.number === 0;
  const count = useCountUp(
    isListeningSession ? 0 : stat.number,
    1800,
    isInView && !isListeningSession
  );

  const isEven = index % 2 === 0;
  const IconComponent = stat.icon;

  return (
    <div
      ref={itemRef}
      className="relative flex items-center w-full group py-3"
      style={{ minHeight: '120px' }}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-emerald-200/30 -z-10 hidden md:block" />
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-lg z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-emerald-600 hidden md:block" />
      <div className={cn(
        "w-11/12 md:w-5/12 mx-auto md:mx-0 p-4 md:p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/30 shadow-lg shadow-emerald-900/5 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/10 cursor-pointer",
        isEven ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"
      )}
      onClick={() => onClick(index)}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-xl bg-emerald-50/80 text-emerald-700 border border-emerald-200/30">
              <IconComponent size={20} strokeWidth={1.8} />
            </div>
            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                {isListeningSession ? (
                  <span className="font-serif text-2xl md:text-3xl font-bold text-emerald-700">—</span>
                ) : (
                  <span className="font-serif text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-400 bg-clip-text text-transparent">
                    {count}
                  </span>
                )}
                <span className="text-xs font-semibold tracking-wide uppercase text-emerald-800/70">
                  {stat.label}
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed line-clamp-2">
            {stat.detail}
          </p>
          <div className="mt-2 text-[10px] text-emerald-500/40 font-medium flex items-center gap-1">
            <span>Click to expand</span>
            <span className="text-base">→</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// ----- MAIN IMPACT SECTION -----
const ImpactSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev !== null ? (prev - 1 + stats.length) % stats.length : 0));
        e.preventDefault();
      }
      if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev !== null ? (prev + 1) % stats.length : 0));
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const SelectedIcon = selectedIndex !== null ? stats[selectedIndex].icon : Users;

  return (
    <section
      id="impact"
      className="relative pt-24 md:pt-32 px-4 md:px-12 overflow-hidden pb-0"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(16,185,129,0.06) 0%, transparent 60%),
          radial-gradient(circle at 80% 70%, rgba(16,185,129,0.04) 0%, transparent 50%),
          #FBF9F5
        `
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-3 bg-emerald-50/80 backdrop-blur-sm rounded-full px-5 py-2 border border-emerald-200/30 shadow-sm mb-6">
            <Ribbon size={18} className="text-emerald-700" />
            <span className="text-xs font-bold tracking-widest uppercase text-emerald-800">Our Impact</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-emerald-950 tracking-tight">
            Making a Difference
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-emerald-300 to-emerald-600 rounded-full" />
          <p className="mt-6 text-gray-500 max-w-2xl text-base md:text-lg font-light">
            A journey of impact – each milestone tells a story of change.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-emerald-200/30 -z-10 hidden md:block" />
          {stats.map((stat, index) => (
            <TimelineItem
              key={stat.label}
              stat={stat}
              index={index}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-emerald-200/30" />
          </div>
          <div className="relative flex items-center justify-center bg-[#FBF9F5] px-6">
            <span className="text-xs font-medium tracking-widest uppercase text-emerald-600/60">
              Voices that matter
            </span>
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-emerald-950/10 pb-6 mb-8 px-2 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-emerald-800">
                <MessageSquareQuote size={16} />
                <span>Testimonials</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-emerald-950 tracking-tight">
                What Brotherhood Sounds Like
              </h3>
            </div>
            <p className="text-sm text-gray-500 max-w-xs md:text-right font-medium">
              Real reflections from safe spaces across the community.
            </p>
          </div>

          <div className="w-full flex items-center justify-center relative overflow-hidden py-2">
            <InlineInfiniteMovingCards
              items={testimonialItems}
              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full p-8 md:p-12 border border-white/20"
              initial={{ scale: 0.8, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-emerald-50 transition-colors text-gray-400 hover:text-emerald-700"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <button
                onClick={() => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + stats.length) % stats.length : 0))}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-emerald-50 transition-colors text-gray-400 hover:text-emerald-700"
                aria-label="Previous card"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % stats.length : 0))}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-emerald-50 transition-colors text-gray-400 hover:text-emerald-700"
                aria-label="Next card"
              >
                <ChevronRight size={28} />
              </button>

              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-emerald-50/80 text-emerald-700 border border-emerald-200/30">
                    <SelectedIcon size={32} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-5xl font-serif font-bold bg-gradient-to-r from-emerald-700 to-emerald-400 bg-clip-text text-transparent">
                      {stats[selectedIndex].number === 0 ? '—' : stats[selectedIndex].number}
                    </div>
                    <div className="text-sm font-semibold tracking-wide uppercase text-emerald-800/70 mt-1">
                      {stats[selectedIndex].label}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg font-light">
                  {stats[selectedIndex].detail}
                </p>
                <div className="w-full h-px bg-gradient-to-r from-emerald-200/50 to-transparent" />
                <div className="text-xs text-gray-400 flex items-center gap-2">
                  <span>Card {selectedIndex + 1} of {stats.length}</span>
                  <span className="w-1 h-1 rounded-full bg-emerald-300" />
                  <span>Press ← → to navigate</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @keyframes scroll {
          to {
            transform: translateX(calc(-50% - 0.75rem));
          }
        }
        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ImpactSection;