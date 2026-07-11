import { motion } from "framer-motion";
import { HandHeart, Handshake, Gift } from "lucide-react";
import ContactForm from "@/components/ui/form-1";

const cards = [
  {
    icon: HandHeart,
    title: "Volunteer",
    desc: "Help facilitate community dialogues, youth sessions, and awareness programs across Kenya.",
  },
  {
    icon: Handshake,
    title: "Partner",
    desc: "Collaborate with us to expand mental health outreach and strengthen community programs.",
  },
  {
    icon: Gift,
    title: "Donate / Support",
    desc: "Your contributions help us reach more men and youth with life-changing mental health resources.",
  },
];

const GetInvolvedSection = () => {
  return (
    <section id="get-involved" className="py-16 bg-background">
      <div className="container px-4">
        <motion.h2
          className="font-heading text-3xl md:text-5xl font-bold text-primary text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Join Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/60 card-hover shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-full gradient-green flex items-center justify-center mx-auto mb-5">
                <card.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
          <p className="text-center text-xs text-muted-foreground mt-4">📍 HomaBay, Kenya</p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
