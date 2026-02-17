import { motion } from "framer-motion";
import { MessageCircle, Brain, Radio, Building } from "lucide-react";

const programs = [
  {
    icon: MessageCircle,
    title: "Community Dialogues",
    desc: "Interactive forums that bring men, youth, and families together to discuss mental health, coping strategies, and prevention of violence.",
  },
  {
    icon: Brain,
    title: "Youth Mental Health",
    desc: "Targeted sessions for adolescents and young adults focusing on emotional regulation, resilience, and help-seeking.",
  },
  {
    icon: Radio,
    title: "Media Advocacy",
    desc: "Radio programs and call-in shows raising awareness and reducing stigma around mental health.",
  },
  {
    icon: Building,
    title: "Prison Outreach",
    desc: "Engagement with incarcerated men to promote emotional wellbeing, reduce isolation, and support reintegration.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container px-4">
        <motion.h2
          className="font-heading text-3xl md:text-5xl font-bold text-primary text-glow text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Programs
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-primary/60 transition-all duration-300 hover:box-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-lg gradient-pink flex items-center justify-center mb-5">
                <program.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
