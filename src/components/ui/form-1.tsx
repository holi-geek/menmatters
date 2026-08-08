import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { User, Mail, MessageSquare, Send, ChevronDown, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const TOPICS = [
  "General inquiry",
  "Volunteer",
  "Partner",
  "Donate / Support",
  "Become a Champion",
] as const;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  topic: z.enum(TOPICS, { message: "Please select a topic" }),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const initialTopic = searchParams.get("topic") ?? "";
  const validTopic = TOPICS.includes(initialTopic as (typeof TOPICS)[number])
    ? (initialTopic as (typeof TOPICS)[number])
    : "General inquiry";

  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: validTopic,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const { name, email, topic, message } = result.data;
    const subject = encodeURIComponent(`Contact from ${name} — ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`
    );
    window.location.href = `mailto:menmatter@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening your email app",
      description: "Please send the pre-filled message to complete your inquiry.",
    });
    setForm({ name: "", email: "", topic: "General inquiry", message: "" });
    setSubmitting(false);
  };

  return (
    <div
      id="contact-form"
      className="w-full max-w-xl mx-auto bg-card rounded-2xl p-8 md:p-10 border border-primary/30 shadow-md scroll-mt-24"
    >
      <p className="text-xs font-heading font-bold tracking-widest text-primary mb-2 uppercase">
        Contact Us
      </p>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
        Let's Get In Touch.
      </h3>
      <p className="text-sm text-muted-foreground mb-8">
        Or just reach out manually at{" "}
        <a href="mailto:menmatter@gmail.com" className="text-primary hover:underline">
          menmatter@gmail.com
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              maxLength={100}
              className="pl-9"
            />
          </div>
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              maxLength={255}
              className="pl-9"
            />
          </div>
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="topic">How can we help?</Label>
          <div className="relative">
            <Tag size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <select
              id="topic"
              value={form.topic}
              onChange={(e) =>
                setForm({ ...form, topic: e.target.value as (typeof TOPICS)[number] })
              }
              className="flex h-10 w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
            >
              {TOPICS.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
          {errors.topic && <p className="text-xs text-destructive">{errors.topic}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <div className="relative">
            <MessageSquare size={16} className="absolute left-3 top-3 text-muted-foreground" />
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="How can we help?"
              maxLength={1000}
              rows={5}
              className="pl-9"
            />
          </div>
          {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={submitting}
          className="w-full gradient-green text-primary-foreground font-heading font-bold tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
        >
          Submit Form
          <Send size={16} className="ml-2" />
        </Button>
      </form>
    </div>
  );
}
