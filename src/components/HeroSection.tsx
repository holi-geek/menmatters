import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Ribbon } from "lucide-react";

// Calming, restrained breathing/floating animation for the badge
const tagVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    y: [0, -4, 0],
    transition: {
      opacity: { duration: 0.8, delay: 0.5 },
      scale: { duration: 0.8, delay: 0.5 },
      y: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  },
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Soft, weighted mouse parallax drift (high damping, low stiffness)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 90, stiffness: 60 });
  const smoothY = useSpring(mouseY, { damping: 90, stiffness: 60 });

  const bgX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    mouseX.set((e.clientX - rect.left) / width - 0.5);
    mouseY.set((e.clientY - rect.top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Infinite looping typewriter identity array for the lower line
  const rotatingSubheads = ["Men Matter.", "Fathers Matter.", "Brothers Matter.", "Leaders Matter."];
  const [subheadText, setSubheadText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    const currentFullText = rotatingSubheads[loopIndex % rotatingSubheads.length];
    const typingSpeed = isDeleting ? 50 : 100;

    const handleTypewriter = () => {
      if (!isDeleting) {
        setSubheadText(currentFullText.substring(0, subheadText.length + 1));
        if (subheadText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause at full word before deleting
        }
      } else {
        setSubheadText(currentFullText.substring(0, subheadText.length - 1));
        if (subheadText === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTypewriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [subheadText, isDeleting, loopIndex, startTyping]);

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 perspective-1000 bg-stone-950"
    >
      {/* Restrained, slow parallax background layer */}
      <motion.div
        className="absolute inset-0 w-full h-full scale-105 pointer-events-none transition-transform duration-1000"
        style={{ x: bgX, y: bgY }}
      >
        <img
          src={heroBg}
          alt=""
          role="presentation"
          width="1920"
          height="1080"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-90"
        />
      </motion.div>

      {/* Optimized focal radial gradient mask for AAA text contrast legibility */}
      <div className="absolute inset-0 bg-radial-gradient from-black/50 via-foreground/85 to-foreground/95 backdrop-blur-[2px]" />

      <div className="relative container max-w-4xl text-center py-24 px-4 sm:px-6 z-10">
        
        {/* Stable Cognitive-Safe Primary Headline */}
        <motion.h1
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-black text-primary-foreground mb-6 leading-[1.1] flex flex-col items-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">Mental Health Matters.</span>
          <span className="block mt-2 text-accent drop-shadow-[0_0_25px_rgba(0,0,0,0.6)] min-h-[1.1em]">
            {subheadText}
            <span className="inline-block w-1.5 h-[0.8em] bg-accent ml-1.5 animate-pulse align-middle" />
          </span>
        </motion.h1>

        {/* Supporting Narrative */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          Building emotionally healthier men, stronger families, and resilient communities across Kenya. We are moulding a generation of men who listen, speak, heal, lead, and help others do the same.
        </motion.p>

        {/* Psychological Anchor / Mission Badge */}
        <motion.div
          className="inline-flex items-center justify-center gap-3 px-6 py-2.5 rounded-full bg-accent/10 border border-accent/30 text-accent mb-12 shadow-[0_0_20px_rgba(0,0,0,0.2)] cursor-default"
          variants={tagVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.02, backgroundColor: "rgba(var(--accent), 0.15)" }}
        >
          <Ribbon size={16} />
          <span className="font-heading text-xs sm:text-sm tracking-[0.3em] uppercase font-bold">
            think · talk · thrive
          </span>
          <Ribbon size={16} />
        </motion.div>

        {/* Streamlined Fitts's Law CTA Action Hierarchy */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Primary Action Button (High Prominence) */}
          <motion.a
            href="#get-involved"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl font-heading font-bold text-sm tracking-wider gradient-green text-primary-foreground shadow-xl hover:shadow-2xl transition-all"
          >
            GET INVOLVED
          </motion.a>

          {/* Secondary Action Button (Demoted Ghost/Outline) */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 rounded-xl font-heading font-bold text-sm tracking-wider border border-primary-foreground/30 text-primary-foreground/90 hover:text-primary-foreground transition-all"
          >
            CONTACT US
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

