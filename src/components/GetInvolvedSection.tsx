import { motion } from "framer-motion";
import { HandHeart, Handshake, Gift } from "lucide-react";

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

        {/* Contact CTA */}
        <motion.div
          id="contact"
          className="max-w-xl mx-auto text-center bg-card rounded-2xl p-10 border border-primary/30 shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">
            Get in Touch
          </h3>
          <p className="text-muted-foreground mb-6 text-sm">
            Reach out to learn more, volunteer, or partner with us.
          </p>
          <div className="space-y-2 text-sm text-muted-foreground mb-8">
            <p>
              📧{" "}
              <a href="mailto:menmatter@gmail.com" className="text-primary hover:underline">
                menmatter@gmail.com
              </a>
            </p>
            <p>📍 Kisumu, Kenya</p>
          </div>
          <a
            href="mailto:menmatter@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-heading font-bold text-sm tracking-wider gradient-green text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            CONTACT US
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
