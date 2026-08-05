export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  /** Optional alt text override; falls back to a descriptive default. */
  alt?: string;
  linkedin?: string;
  email?: string;
  category?: TeamCategory;
}

export type TeamCategory =
  | "Leadership"
  | "Programs & Operations"
  | "Community / Field Team"
  | "Advisors / Partners";

/** Order in which categories render. Remove entries to hide a group. */
export const teamCategories: TeamCategory[] = [
  "Leadership",
  "Programs & Operations",
  "Community / Field Team",
  "Advisors / Partners",
];

/** Founder video — replace with a real YouTube/Vimeo embed URL or a local file. */
export const founderVideo = {
  /** Embed URL (YouTube/Vimeo) or a path to a local mp4 under /public. */
  url: "/founder.mp4",
  /** Poster / thumbnail image shown before playback. */
  poster:
    "/logo.png",
  title: "A Message From Our Founder",
  /** Optional WebVTT captions file for local video sources. */
  captionsSrc: "",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Georgina Achieng Otieno",
    role: "Founder & Executive Director",
    bio: "A psychiatric nurse who founded Men Matter to open honest conversations about men's mental health across Kenya.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    email: "menmatters254@gmail.com",
    category: "Leadership",
  },
  {
    name: "Daniel Ochieng",
    role: "Programs Director",
    bio: "Leads the design and delivery of our dialogue circles and youth mental health programming.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    category: "Leadership",
  },
  {
    name: "Mercy Wanjiku",
    role: "Operations Manager",
    bio: "Keeps our field teams resourced and our partnerships running smoothly day to day.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    category: "Programs & Operations",
  },
  {
    name: "Brian Otieno",
    role: "Monitoring & Evaluation Officer",
    bio: "Tracks the reach and outcomes of every programme so our impact stays measurable and honest.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    category: "Programs & Operations",
  },
  {
    name: "Sarah Atieno",
    role: "Community Facilitator",
    bio: "Hosts safe-space sessions in HomaBay, guiding men through peer conversations and referrals.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    category: "Community / Field Team",
  },
  {
    name: "Kevin Omondi",
    role: "Outreach Coordinator",
    bio: "Builds relationships with schools, prisons, and boda boda groups to bring support closer to home.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    category: "Community / Field Team",
  },
  {
    name: "Dr. Alice Njeri",
    role: "Clinical Advisor",
    bio: "Consultant psychiatrist advising on screening protocols and safe referral pathways.",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    category: "Advisors / Partners",
  },
  {
    name: "Peter Kimani",
    role: "Partnerships Advisor",
    bio: "Connects Men Matter with county health services and community-based partners.",
    image:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=800&q=80",
    category: "Advisors / Partners",
  },
];
