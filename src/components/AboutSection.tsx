import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Heart, Users, Ribbon, Target, CheckCircle,
  ChevronRight, Ear, Sparkles, Eye, Shield
} from "lucide-react";
import { LampContainer } from "@/components/ui/lamp";

// ----- Value data (updated) -----
const values = [
  { icon: Heart, label: "Compassion", desc: "We walk alongside people not ahead of them." },
  { icon: Ear, label: "Listening", desc: "Every meaningful conversation begins with listening." },
  { icon: Users, label: "Community", desc: "Stronger communities create stronger people." },
  { icon: Sparkles, label: "Hope", desc: "Every conversation can be the beginning of hope." },
];

const objectives = [
  "Promote men's mental health and emotional wellbeing.",
  "Prevent sexual and gender based violence through education, accountability and positive masculinity.",
  "Provide safe spaces for men to discuss mental health and life challenges.",
  "Strengthen men's roles in families and communities as protectors and advocates for dignity.",
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const AboutSection = () => {
  // --- Shooting Stars (using ref to avoid re-renders) ---
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorsRef = useRef<Array<{
    x: number; y: number; speed: number; length: number; opacity: number;
  }>>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = 25;
    meteorsRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 2 + Math.random() * 6,
      length: 60 + Math.random() * 100,
      opacity: 0.2 + Math.random() * 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const meteors = meteorsRef.current;
      for (let i = 0; i < meteors.length; i++) {
        const m = meteors[i];
        m.x -= m.speed * 1.2;
        m.y += m.speed * 0.8;

        if (m.x < -200 || m.y > canvas.height + 200) {
          m.x = canvas.width + 100 + Math.random() * 300;
          m.y = -50 - Math.random() * 100;
          m.speed = 2 + Math.random() * 6;
          m.length = 60 + Math.random() * 100;
          m.opacity = 0.2 + Math.random() * 0.6;
        }

        // Use green accent for meteors
        const gradient = ctx.createLinearGradient(m.x, m.y, m.x + m.length * 0.7, m.y - m.length * 0.5);
        gradient.addColorStop(0, `rgba(74, 222, 128, ${m.opacity})`);
        gradient.addColorStop(0.4, `rgba(74, 222, 128, ${m.opacity * 0.3})`);
        gradient.addColorStop(1, `rgba(74, 222, 128, 0)`);

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + m.length * 0.7, m.y - m.length * 0.5);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2 + Math.random() * 1.5;
        ctx.shadowColor = 'rgba(74, 222, 128, 0.5)';
        ctx.shadowBlur = 10;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(m.x, m.y, 2 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${m.opacity})`;
        ctx.shadowColor = 'rgba(74, 222, 128, 0.8)';
        ctx.shadowBlur = 15;
        ctx.fill();
      }

      animationIdRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // --- Typing Effect for Objectives ---
  const [startTyping, setStartTyping] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (startTyping) {
      setDisplayedLines([]);
      setLineIndex(0);
      setCharIndex(0);
      setIsComplete(false);
    }
  }, [startTyping]);

  useEffect(() => {
    if (!startTyping || isComplete) return;

    if (lineIndex >= objectives.length) {
      setIsComplete(true);
      return;
    }

    const currentText = objectives[lineIndex];

    if (charIndex <= currentText.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[lineIndex]) newLines[lineIndex] = '';
          newLines[lineIndex] = currentText.slice(0, charIndex);
          return newLines;
        });
        setCharIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [startTyping, lineIndex, charIndex, isComplete]);

  const onObjectivesViewportEnter = useCallback(() => {
    setStartTyping(true);
  }, []);

  return (
    <section id="about" className="bg-stone-950 pb-24 overflow-hidden relative">
      
      {/* --- Shooting Stars Canvas --- */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />

      {/* --- LAMP HERO HEADER --- */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center justify-center max-w-4xl z-50"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Ribbon size={36} className="text-green-400" />
              <h2 className="font-playfair italic bg-gradient-to-br from-stone-100 via-green-100 to-stone-300 py-4 bg-clip-text text-center text-4xl md:text-6xl font-bold tracking-tight text-transparent drop-shadow-[0_0_30px_rgba(74,222,128,0.3)]">
                Our Story
              </h2>
            </div>

            <p className="text-stone-300 text-lg md:text-xl text-center leading-relaxed max-w-3xl">
              Everyday men are expected to be strong, silent and resilient. Yet many silently struggle with depression, anxiety, trauma, addiction and suicide.
              Men Matter exist because no man should have to suffer alone.
              We create safe spaces where men can talk, heal, learn and support one another.
            </p>
          </motion.div>
        </LampContainer>

        {/* Glow overlay – green accent */}
        <div className="absolute inset-0 pointer-events-none animate-pulse-glow" />
      </motion.div>

      {/* --- CONTENT GRID --- */}
      <div className="container px-4 relative z-10 -mt-20 md:-mt-40">

        {/* Mission / Vision / Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="group bg-stone-900/80 rounded-xl p-8 border border-stone-800 transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-[1.02] hover:rotate-[0.5deg]"
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ rotateX: 2, rotateY: 0, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-1 bg-green-500 rounded-full mb-6 transition-all duration-300 group-hover:w-16" />
            <div className="flex items-center gap-3 mb-4">
              <Target size={24} className="text-green-400" />
              <h3 className="font-heading text-xl font-bold text-stone-100">Mission</h3>
            </div>
            <p className="text-stone-300 leading-relaxed">
              To equip communities to recognize mental health challenges early, create safe spaces for honest conversations,
              connect people to appropriate care and advocate for mentally healthier communities through the Men Matter model.
            </p>
            {/*<div className="mt-6">
              <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
                Read more <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>*/}
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="group bg-stone-900/80 rounded-xl p-8 border border-stone-800 transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-[1.02] hover:rotate-[0.5deg]"
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ rotateX: 2, rotateY: 0, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-1 bg-green-500 rounded-full mb-6 transition-all duration-300 group-hover:w-16" />
            <div className="flex items-center gap-3 mb-4">
              <Eye size={24} className="text-green-400" />
              <h3 className="font-heading text-xl font-bold text-stone-100">Vision</h3>
            </div>
            <p className="text-stone-300 leading-relaxed">
              To build emotionally healthy, responsible and accountable men who actively prevent sexual and gender-based violence (SGBV), promote mental wellbeing and contribute positively to families and communities.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={itemVariants}
            className="group bg-stone-900/80 rounded-xl p-8 border border-stone-800 transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.15)] hover:scale-[1.02] hover:rotate-[0.5deg]"
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ rotateX: 2, rotateY: 0, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-1 bg-green-500 rounded-full mb-6 transition-all duration-300 group-hover:w-16" />
            <div className="flex items-center gap-3 mb-4">
              <Shield size={24} className="text-green-400" />
              <h3 className="font-heading text-xl font-bold text-stone-100">Values</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {values.map(({ icon: Icon, label, desc }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium tracking-wide text-stone-200 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 transition-all duration-200 hover:scale-105 hover:bg-green-500/20 cursor-help"
                  title={desc}
                >
                  <Icon size={16} className="text-green-400" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* --- OBJECTIVES CARD (with Typing Effect) --- */}
        <motion.div
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          onViewportEnter={onObjectivesViewportEnter}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Glowing backdrop – green */}
          <div className="absolute -inset-8 bg-green-500/10 blur-3xl rounded-full -z-10 opacity-60 animate-pulse" />

          <div className="bg-stone-900/90 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-green-500/30 shadow-2xl shadow-green-500/10 hover:border-green-500/70 transition-all duration-500">

            <div className="flex items-center justify-center gap-3 mb-8">
              <Target size={28} className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]" />
              <h3 className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                Our Objectives
              </h3>
            </div>

            <ul className="space-y-5 min-h-[280px]">
              {objectives.map((_, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-stone-200 leading-relaxed text-lg font-medium"
                >
                  <CheckCircle
                    size={24}
                    className="text-green-400 mt-0.5 shrink-0 drop-shadow-[0_0_6px_rgba(74,222,128,0.5)]"
                  />
                  <span className="relative">
                    {displayedLines[index] || ''}
                    {lineIndex === index && !isComplete && startTyping && (
                      <span className="inline-block w-0.5 h-5 bg-green-400 align-middle ml-1 animate-pulse" />
                    )}
                  </span>
                </li>
              ))}

              {isComplete && (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-end text-green-400/60 text-sm font-mono mt-2"
                >
                  {/*▸ All objectives loaded*/}
                </motion.li>
              )}
            </ul>
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-glow {
          animation: pulseGlow 3s ease-in-out infinite;
          background: radial-gradient(circle at center, rgba(74,222,128,0.12) 0%, transparent 70%);
        }
        .group:hover .animate-pulse-glow {
          animation-duration: 1.5s;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-pulse {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;