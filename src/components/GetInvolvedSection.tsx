import { motion, AnimatePresence } from "framer-motion";
import { HandHeart, Handshake, Gift, ArrowRight, Crown, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const cards = [
  {
    icon: HandHeart,
    title: "Volunteer",
    topic: "Volunteer",
    desc: "Help facilitate community dialogues, youth sessions, and awareness programs across Kenya.",
    fullDesc: "As a volunteer, you'll receive training in mental health first aid, facilitation skills, and community engagement. You'll help run safe spaces, lead conversations, and support men in your community. No prior experience needed – just a heart for service.",
  },
  {
    icon: Handshake,
    title: "Partner",
    topic: "Partner",
    desc: "Collaborate with us to expand mental health outreach and strengthen community programs.",
    fullDesc: "Partnership opportunities include joint programming, resource sharing, co-hosting events, and cross-referral networks. We work with hospitals, schools, faith organizations, county departments, and community groups to maximize impact.",
  },
  {
    icon: Gift,
    title: "Donate / Support",
    topic: "Donate / Support",
    desc: "Your contributions help us reach more men and youth with life-changing mental health resources.",
    fullDesc: "Your donations fund community dialogues, school visits, training programs, and mental health referrals. Every contribution – big or small – helps us reach more men across Kenya with life-changing support and resources.",
  },
  {
    icon: Crown,
    title: "Become a Champion",
    topic: "Become a Champion",
    desc: "Join the Leadership Academy to train as a peer champion. Empower your community by supporting men's mental health and well‑being.",
    fullDesc: "The Men Matter Leadership Academy is a comprehensive 6-month program that trains you in mental health awareness, counseling skills, community facilitation, and advocacy. You'll graduate as a certified Men Matter Champion and lead change in your community.",
  },
];

// Gentle floating dots
const dots = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x: 10 + Math.random() * 80,
  y: 10 + Math.random() * 80,
  size: 3 + Math.random() * 4,
  delay: Math.random() * 4,
  duration: 5 + Math.random() * 5,
}));

const GetInvolvedSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="get-involved"
      className="relative py-20 overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-100"
    >
      {/* Gentle floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((d) => (
          <motion.div
            key={d.id}
            className="absolute rounded-full bg-emerald-200/60"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: d.size,
              height: d.size,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: d.duration,
              repeat: Infinity,
              delay: d.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading text-4xl md:text-5xl font-bold text-emerald-700 inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Join Us
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-emerald-400 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            />
          </motion.h2>
          <motion.p
            className="text-stone-600 mt-4 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            Every hand makes a difference. Choose how you'd like to help.
          </motion.p>
        </div>

        {/* ----- ACCORDION CARDS ----- */}
        <div className="space-y-4">
          {cards.map((card, index) => {
            const isExpanded = expandedIndex === index;
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                className={`
                  group relative bg-white rounded-2xl border transition-all duration-300
                  ${isExpanded 
                    ? 'border-emerald-300 shadow-xl shadow-emerald-100/50' 
                    : 'border-stone-200/80 hover:border-emerald-200 hover:shadow-md'
                  }
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                {/* Clickable header area */}
                <button
                  onClick={() => toggleCard(index)}
                  className="w-full text-left p-6 md:p-8 flex items-center gap-5"
                  aria-expanded={isExpanded}
                >
                  {/* Icon */}
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300
                    ${isExpanded 
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200/50' 
                      : 'bg-emerald-50 text-emerald-600 border border-emerald-200/50 group-hover:bg-emerald-100'
                    }
                  `}>
                    <Icon size={24} strokeWidth={isExpanded ? 2.5 : 2} />
                  </div>

                  {/* Title & preview description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-heading text-xl font-bold text-stone-800">
                        {card.title}
                      </h3>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`
                          p-1.5 rounded-full transition-colors
                          ${isExpanded ? 'text-emerald-600' : 'text-stone-400 group-hover:text-emerald-500'}
                        `}
                      >
                        <ChevronDown size={20} strokeWidth={2.5} />
                      </motion.div>
                    </div>
                    {/* Preview text - always visible */}
                    <p className="text-stone-500 text-sm mt-1 line-clamp-1 pr-4">
                      {card.desc}
                    </p>
                  </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 border-t border-stone-100">
                        <p className="text-stone-600 text-sm md:text-base leading-relaxed">
                          {card.fullDesc}
                        </p>
                        <MotionLink
                          to={`/contact?topic=${encodeURIComponent(card.topic)}#contact-form`}
                          className="mt-5 inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100/50 hover:shadow-emerald-200/50"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>Get started</span>
                          <ArrowRight size={16} />
                        </MotionLink>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;