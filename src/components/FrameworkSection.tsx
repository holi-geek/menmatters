import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// --- TypeScript Interfaces ---
interface QuadrantData {
  id: string;
  title: string;
  icon: string;
  desc: string;
  shortDesc: string;
  fullText: string;
  gradient: string;
  position: string;
  hover: string;
  titleBg: string;
  titleAfter: string;
}

// --- Data ---
const quadrants: QuadrantData[] = [
  {
    id: "awareness",
    title: "Awareness",
    icon: "👁️",
    desc: "Understanding & Recognizing Challenges",
    shortDesc: "Recognize & Understand Mental Health",
    fullText: "Awareness is the vital first step. By recognizing the signs of mental health struggles—such as depression, anxiety, or burnout—we can intervene early. This pillar focuses on educating communities, breaking down cultural misconceptions, and ensuring individuals can identify when they or their loved ones need help.",
    gradient: "from-[#f98436] to-[#E66F20]",
    position: "top-0 left-0 border-r-2 border-b-2 border-white/50 origin-bottom-right",
    hover: "hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[5px_5px_15px_rgba(230,111,32,0.4)]",
    titleBg: "bg-[#E66F20]",
    titleAfter: "after:border-t-[#E66F20]",
  },
  {
    id: "safespaces",
    title: "Safe Spaces",
    icon: "💬",
    desc: "Creating Open & Trusting Environments",
    shortDesc: "Create Places for Honest Conversations",
    fullText: "Vulnerability requires safety. We establish judgment-free zones where men and youth can speak openly about their emotional burdens. Through peer support groups, community dialogues, and private counseling spaces, we ensure that no one has to suffer in silence or fear of being seen as 'weak'.",
    gradient: "from-[#5ba848] to-[#4D9241]",
    position: "top-0 right-0 border-l-2 border-b-2 border-white/50 origin-bottom-left",
    hover: "hover:translate-x-2 hover:-translate-y-2 hover:shadow-[-5px_5px_15px_rgba(77,146,65,0.4)]",
    titleBg: "bg-[#4D9241]",
    titleAfter: "after:border-t-[#4D9241]",
  },
  {
    id: "support",
    title: "Support",
    icon: "🤝",
    desc: "Providing Tools & Resources",
    shortDesc: "Offer Practical Help & Guidance",
    fullText: "Support moves beyond conversation into actionable care. This involves connecting individuals with psychiatric professionals, offering coping mechanisms, facilitating access to therapy, and providing continuous mentorship. We walk alongside our community members on their healing journey.",
    gradient: "from-[#2484cb] to-[#0076A8]",
    position: "bottom-0 left-0 border-r-2 border-t-2 border-white/50 origin-top-right",
    hover: "hover:-translate-x-2 hover:translate-y-2 hover:shadow-[5px_-5px_15px_rgba(0,118,168,0.4)]",
    titleBg: "bg-[#0076A8]",
    titleAfter: "after:border-t-[#0076A8]",
  },
  {
    id: "advocacy",
    title: "Advocacy",
    icon: "📢",
    desc: "Breaking Stigma & Promoting Change",
    shortDesc: "Champion Mental Health Rights",
    fullText: "Systemic change is necessary for lasting impact. Our advocacy efforts aim to dismantle societal stigmas, influence health policies, and champion mental wellness rights at the community and national levels. We empower individuals to become ambassadors for mental health in their own circles.",
    gradient: "from-[#d13137] to-[#C1272D]",
    position: "bottom-0 right-0 border-l-2 border-t-2 border-white/50 origin-top-left",
    hover: "hover:translate-x-2 hover:translate-y-2 hover:shadow-[-5px_-5px_15px_rgba(193,39,45,0.4)]",
    titleBg: "bg-[#C1272D]",
    titleAfter: "after:border-t-[#C1272D]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const FrameworkSection: React.FC = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<QuadrantData | null>(null);

  return (
    <section 
      id="framework" 
      className="relative py-24 overflow-hidden bg-stone-950"
      style={{
        background: 'radial-gradient(ellipse at 50% 80%, rgba(251, 191, 36, 0.08) 0%, transparent 70%), radial-gradient(ellipse at 20% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 50%), #0c0a09'
      }}
    >
      {/* --- Storytelling Ambient Glows --- */}
      {/* Warm Amber Glow - represents hope, resilience, the first light of dawn */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      {/* Calming Green Glow - represents healing, growth, support */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2" />
      
      {/* Soft Center Spotlight - draws focus to the "From Silence to Support" model */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 flex justify-center">
        {/* Glassmorphic Container - Adapted for dark storytelling background */}
        <div className="max-w-4xl w-full bg-stone-900/60 backdrop-blur-md p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.5)] border border-stone-800/50 rounded-3xl">
          
          {/* Header Section */}
          <motion.header
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center border-b-2 border-stone-700/60 pb-6 mb-12"
          >
            <h1 className="font-heading text-3xl md:text-5xl font-bold mb-3 tracking-tight text-transparent bg-gradient-to-br from-stone-100 via-amber-50 to-stone-300 bg-clip-text">
              FROM SILENCE TO SUPPORT
            </h1>
            <p className="text-stone-300 text-lg md:text-xl">
              A community mental health model 
              developed by psychiatric nurse <span className="text-amber-400 font-medium">Georgina Achieng Otieno</span>.
            </p>
          </motion.header>

          {/* Interactive Wheel - Spinning */}
          <div className="flex justify-center items-center mb-16 relative">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[320px] h-[320px] md:w-[460px] md:h-[460px] rounded-full relative overflow-hidden shadow-2xl bg-stone-800/30 border border-stone-700/30"
            >
              {/* Spinning container for quadrants */}
              <div className="absolute inset-0 animate-spin-slow hover:animate-spin-pause will-change-transform">
                {quadrants.map((q, i) => (
                  <motion.div
                    key={q.id}
                    onClick={() => setSelectedQuadrant(q)}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.6, type: "spring" }}
                    className={`absolute w-1/2 h-1/2 flex flex-col justify-center items-center text-white text-center p-4 md:p-6 cursor-pointer transition-all duration-500 ease-out bg-gradient-to-br ${q.gradient} ${q.position} ${q.hover} group`}
                    style={{ willChange: 'transform' }}
                  >
                    {/* Counter-rotating content to keep text upright */}
                    <div className="animate-counter-spin-slow flex flex-col items-center justify-center">
                      <div className="text-3xl md:text-4xl mb-2 drop-shadow-md transition-transform duration-300 group-hover:scale-125">
                        {q.icon}
                      </div>
                      <h3 className="text-lg md:text-2xl font-bold mb-1 tracking-wide">{q.title}</h3>
                      <p className="text-xs md:text-sm opacity-90 max-w-[140px] leading-snug hidden md:block">
                        {q.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Inner Hub - Fixed Overlap (does not spin) */}
              <motion.div
                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                viewport={{ once: true }}
                transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
                className="absolute top-1/2 left-1/2 w-[120px] h-[120px] md:w-[190px] md:h-[190px] bg-stone-950/90 backdrop-blur-md rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center text-center p-2 border-[6px] border-stone-700 z-10 pointer-events-none"
              >
                <h2 className="font-heading text-stone-300 text-xs md:text-xl font-black leading-tight">
                  From<br />Silence to
                </h2>
                <p className="font-heading text-amber-400 text-sm md:text-xl font-bold mt-1 border-t border-stone-700 pt-1 w-[90%]">
                  Support
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {quadrants.map((q) => (
              <motion.div
                key={`card-${q.id}`}
                onClick={() => setSelectedQuadrant(q)}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-stone-800/60 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl overflow-hidden text-center border border-stone-700/50 flex flex-col transition-shadow duration-300 cursor-pointer group"
              >
                <div className={`text-white text-base md:text-lg font-bold py-3 px-2 relative ${q.titleBg} ${q.titleAfter} after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:border-l-[6px] after:border-r-[6px] after:border-t-[6px] after:border-l-transparent after:border-r-transparent`}>
                  {q.title}
                </div>
                <div className="p-5 text-sm text-stone-300 font-semibold leading-relaxed flex-grow flex items-center justify-center bg-gradient-to-b from-stone-800/0 to-stone-900/30">
                  {q.shortDesc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Glassmorphic Modal Pop-up */}
      <AnimatePresence>
        {selectedQuadrant && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedQuadrant(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden bg-stone-900/95 backdrop-blur-xl border border-stone-700/50 rounded-2xl shadow-2xl"
            >
              <div className={`p-6 text-white bg-gradient-to-br ${selectedQuadrant.gradient} flex items-center gap-4`}>
                <div className="text-4xl drop-shadow-md">{selectedQuadrant.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold tracking-wide">{selectedQuadrant.title}</h3>
                  <p className="text-white/80 text-sm font-medium">{selectedQuadrant.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedQuadrant(null)}
                  className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-stone-200 leading-relaxed text-lg">
                  {selectedQuadrant.fullText}
                </p>
                <button
                  onClick={() => setSelectedQuadrant(null)}
                  className={`mt-8 w-full py-3 px-4 rounded-xl text-white font-bold transition-transform active:scale-95 bg-gradient-to-r ${selectedQuadrant.gradient} shadow-md hover:shadow-lg`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
          will-change: transform;
        }
        .animate-counter-spin-slow {
          animation: counter-spin-slow 30s linear infinite;
          will-change: transform;
        }
        .animate-spin-slow:hover {
          animation-play-state: paused;
        }
        .animate-spin-slow:hover .animate-counter-spin-slow {
          animation-play-state: paused;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default FrameworkSection;