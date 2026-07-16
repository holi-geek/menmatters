export interface Story {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  body: string;
  date: string;
  image?: string;
}

export const stories: Story[] = [
  {
    id: "1",
    title: "Finding My Voice Again",
    author: "Brian O.",
    excerpt:
      "For years I carried silent burdens. A community dialogue session changed everything.",
    body: "Brian shares how he moved from isolation to open conversation after joining a Men Matter dialogue circle in HomaBay.",
    date: "2025-03-12",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    title: "A Father's New Chapter",
    author: "Kevin M.",
    excerpt:
      "Learning to talk with my children about feelings rebuilt our home.",
    body: "Kevin describes the tools he learned in the Family Conversations program and how they transformed his relationships.",
    date: "2025-04-02",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "From Prison to Purpose",
    author: "Samuel K.",
    excerpt:
      "The Prison Outreach team met me at my lowest and walked with me back to dignity.",
    body: "Samuel's journey from incarceration to becoming a peer mentor for other reintegrating men.",
    date: "2025-05-18",
    image:
      "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Speaking Up on Air",
    author: "Grace A.",
    excerpt:
      "Our weekly radio show reaches thousands with a simple message: it's okay to talk.",
    body: "Grace, a Media Advocacy volunteer, on breaking stigma across Kenyan airwaves.",
    date: "2025-06-07",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Choosing Non-Violence",
    author: "Peter N.",
    excerpt:
      "The GBV Prevention workshops taught me a different kind of strength.",
    body: "Peter reflects on the accountability circle that helped him build healthier relationships.",
    date: "2025-07-21",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    title: "A Young Leader Emerges",
    author: "Daniel W.",
    excerpt:
      "The Leadership Academy gave me the skills to hold space for my peers.",
    body: "Daniel graduated from the Men Matter Leadership Academy and now facilitates youth dialogue in his village.",
    date: "2025-08-30",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
];
