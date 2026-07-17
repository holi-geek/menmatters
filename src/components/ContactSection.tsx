import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ui/form-1";
import logo from "@/assets/logo.png";

const contactInfo = [
  { icon: Mail, label: "Email", value: "hello@menmatter.org", href: "mailto:hello@menmatter.org" },
  { icon: Phone, label: "Phone", value: "254 721 302 058", href: "tel:+254721302058" },
  { icon: MapPin, label: "Address", value: "Homa Bay, Kenya", href: "https://maps.google.com/?q=Homa+Bay+Kenya" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri, 8:00 AM – 6:00 PM" },
];

const tagline = "One man. One conversation. One community at a time";
const words = tagline.split(" ");

const ContactInfoList = ({ className = "" }) => (
  <ul className={`space-y-5 ${className}`}>
    {contactInfo.map((item) => (
      <li key={item.label} className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
          <item.icon size={18} className="text-emerald-600" />
        </div>
        <div>
          <p className="text-sm text-stone-500">{item.label}</p>
          {item.href ? (
            <a href={item.href} target={item.label === "Address" ? "_blank" : undefined} rel="noopener noreferrer" className="text-stone-800 font-medium hover:text-emerald-600 transition-colors">
              {item.value}
            </a>
          ) : (
            <p className="text-stone-800 font-medium">{item.value}</p>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const LogoTagline = () => (
  <div className="flex flex-col items-center">
    <img src={logo} alt="Men Matter Logo" className="w-20 h-20 rounded-full object-cover bg-white shadow-sm mb-3" />
    <p className="text-center text-sm text-emerald-700 font-light italic leading-relaxed max-w-[200px]">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </p>
  </div>
);

export default function ContactSectionVariant9WithMap() {
  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="container px-4 mx-auto">
        {/* Animated Line Split Layout */}
        <div className="relative grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vertical animated line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-400 to-transparent" />

          {/* Left – Contact Info */}
          <div className="space-y-6 pr-0 md:pr-8">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-600">We'd love to hear from you.</p>
            <ContactInfoList />
            <LogoTagline />
          </div>

          {/* Right – Form */}
          <div className="pl-0 md:pl-8">
            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl p-2 shadow-sm overflow-hidden border border-stone-200/60">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63800.45115310677!2d34.43034718371574!3d-0.525583449353668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1835f7b3dfe50437%3A0xda88f69e45e2b67c!2sHoma%20Bay!5e0!3m2!1sen!2ske!4v1712345678901!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Men Matter Office – Homa Bay"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}