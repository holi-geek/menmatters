import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { Ribbon } from "lucide-react";

const highlights = [
  "Community Dialogues",
  "Youth Mental Health",
  "Media Advocacy",
  "Prison Outreach",
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background image — above-the-fold LCP element */}
      <img
        src={heroBg}
        alt=""
        role="presentation"
        width="1920"
        height="1080"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative container text-center py-20 px-4">
        <motion.img
          src={logo}
          alt="Men Matter logo"
          width="112"
          height="112"
          fetchPriority="high"
          className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-primary shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        />

        <motion.h1
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-black text-primary-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Mental Health Matters.
          <br />
          <span className="text-accent">Men Matter.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          A community-based initiative improving mental wellbeing among men and
          youth through education, dialogue, and advocacy.
        </motion.p>

        <motion.p
          className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-10 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Ribbon size={16} /> think · talk · thrive <Ribbon size={16} />
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {highlights.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full border border-primary-foreground/30 text-sm text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="#get-involved"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-heading font-bold text-sm tracking-wider gradient-green text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            GET INVOLVED
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-heading font-bold text-sm tracking-wider border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
          >
            CONTACT US
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
