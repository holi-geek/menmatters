export interface GallerySlide {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption?: string;
}

export const gallerySlides: GallerySlide[] = [
  {
    id: "1",
    src: "/jela.jpg",
    alt: "Prison Visit",
    title: "A courtesy call at the Homabay G.K Prison",
    caption: "Men Matter founder with Chief Inspector in charge of human rights, after their session on mental resilience for young men behind bars, pause to reflect on the next steps.",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=80",
    alt: "Youth mental health workshop",
    title: "Youth Workshops",
    caption: "Building emotional resilience with young people",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=80",
    alt: "Community outreach team",
    title: "Outreach in Action",
    caption: "Meeting people where they are",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&q=80",
    alt: "Mental health advocate speaking",
    title: "Voices That Heal",
    caption: "Advocates leading the conversation",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=1600&q=80",
    alt: "Family gathering",
    title: "Family Conversations",
    caption: "Strengthening bonds at home",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    alt: "Group support session",
    title: "Peer Support",
    caption: "Together, we thrive",
  },
];
