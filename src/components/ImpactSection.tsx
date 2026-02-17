import { motion } from "framer-motion";
import { Quote, Ribbon } from "lucide-react";

const stats = [
  { value: "500+", label: "Lives Reached" },
  { value: "150+", label: "Counseling Sessions" },
  { value: "30+", label: "Community Events" },
  { value: "10+", label: "Partner Organizations" },
];

const testimonials = [
  {
    quote: "Men Matter gave me the courage to speak about my struggles. I'm no longer alone.",
    author: "Community Member, Kisumu",
  },
  {
    quote: "The dialogue sessions changed how I see mental health. It's okay to not be okay.",
    author: "Youth Participant",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 gradient-section">
      <div className="container px-4">
        <motion.div
          className="flex items-center justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Ribbon size={28} className="text-primary" />
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary text-center">
            Making a Difference
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card border border-border shadow-sm card-hover"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="font-heading text-3xl md:text-4xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-card rounded-xl p-8 border border-border shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <Quote size={32} className="text-primary/30 mb-4" />
              <p className="text-foreground mb-4 italic leading-relaxed">
                "{t.quote}"
              </p>
              <p className="text-sm text-secondary font-semibold">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
