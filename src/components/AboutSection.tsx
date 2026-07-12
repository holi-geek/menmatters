import { motion } from "framer-motion";
import { Heart, Eye, Shield, Users, Ribbon, Target, CheckCircle } from "lucide-react";
import GlobeBackground from "@/components/ui/globe-background";

const values = [
  { icon: Heart, label: "Compassion" },
  { icon: Users, label: "Inclusion" },
  { icon: Shield, label: "Respect" },
  { icon: Eye, label: "Empowerment" },
];

const objectives = [
  "Promote men's mental health and emotional wellbeing.",
  "Prevent sexual and gender based violence through education, accountability and positive masculinity.",
  "Provide safe spaces for men to discuss mental health and life challenges.",
  "Strengthen men's roles in families and communities as protectors and advocates for dignity.",
];


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 gradient-section overflow-hidden">
      <div className="absolute inset-0 opacity-30 md:opacity-40">
        <GlobeBackground />
      </div>
      <div className="container px-4 relative z-10">
        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <Ribbon size={28} className="text-primary" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center">
            Our Story
          </h2>
        </motion.div>

        <motion.p
          className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-16 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Founded by psychiatric nurse <span className="text-secondary font-semibold">Georgina Achieng Otieno</span>, Men Matter
          addresses stigma, depression, and harmful coping mechanisms by
          creating safe spaces for conversation and healing. Our goal is to
          strengthen emotional wellbeing, promote mental health literacy, and
          empower men and youth in underserved communities.
        </motion.p>

        {/* Mission / Vision / Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            className="bg-card rounded-xl p-8 border border-border hover:border-primary/60 card-hover shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="font-heading text-xl font-bold text-primary mb-4">Mission</h3>
            <p className="text-muted-foreground">
              Promote emotional wellbeing and reduce stigma around mental health
              among men and youth through community engagement and education.
            </p>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl p-8 border border-border hover:border-primary/60 card-hover shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="font-heading text-xl font-bold text-primary mb-4">Vision</h3>
            <p className="text-muted-foreground">
              A community where men and youth speak openly about mental health
              and access the support they need without fear or judgment.
            </p>
          </motion.div>

          <motion.div
            className="bg-card rounded-xl p-8 border border-border hover:border-primary/60 card-hover shadow-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h3 className="font-heading text-xl font-bold text-primary mb-4">Values</h3>
            <div className="flex flex-wrap gap-3">
              {values.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 text-sm text-primary-foreground bg-primary rounded-full px-4 py-2"
                >
                  <Icon size={16} />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Objectives */}
        <motion.div
          className="max-w-4xl mx-auto bg-card rounded-xl p-8 md:p-10 border border-border hover:border-primary/60 card-hover shadow-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target size={28} className="text-primary" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center">
              Objectives
            </h3>
          </div>

          <p className="text-muted-foreground text-center mb-6">
            The objectives of the group shall be to:
          </p>

          <ul className="space-y-4">
            {objectives.map((objective, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

  );
};

export default AboutSection;
