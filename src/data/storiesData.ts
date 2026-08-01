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
    title: "I Found Hope When I Thought There Was None",
    author: "Levis, Men Matter Participant",
    excerpt:
      "I was overwhelmed, drinking heavily and had begun thinking that life was no longer worth living. Men Matter became my turning point.",
    body: `When I first came across Men Matter, I was at one of the darkest moments of my life. I was overwhelmed, drinking heavily and had begun thinking that life was no longer worth living. Alcohol became my escape, but it slowly took away my peace, affected my family and eventually cost me my job.

Through Men Matter, I found something I had been missing for a long time—a safe space to talk without being judged. I was listened to, encouraged and connected to professional psychosocial support. That support helped me begin rebuilding my life.

Today, I have regained my job, my family is more peaceful and I have learned healthier ways to cope with life's challenges without becoming overwhelmed. I now understand that asking for help is not a sign of weakness but a step toward healing.

Finding a place where a man can speak openly without fear of stigma is rare. I am grateful that Men Matter gave me that opportunity. It became the turning point that helped me believe life could be different.`,
    date: "2025-03-12",
    image: "/Levin.jpg",
  },
  {
    id: "2",
    title: "A Father's New Chapter",
    author: "Kevin M.",
    excerpt:
      "Learning to talk with my children about feelings rebuilt our home.",
    body: `When the pressure of providing became too much, I used to shut down and isolate myself from my family. Communication with my children felt impossible because I didn't know how to express emotions other than frustration.

Through the Family Conversations program at Men Matter, I learned that vulnerability is not weakness, especially in front of your children. We started having small check-ins, and slowly, the heavy tension in our home lifted. 

Learning to talk with my children about feelings didn't just help them—it rebuilt our home from the ground up.`,
    date: "2025-04-02",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    title: "From Prison to Purpose",
    author: "Samuel K.",
    excerpt:
      "The Prison Outreach team met me at my lowest and walked with me back to dignity.",
    body: `Incarceration strips away a man's identity, leaving behind intense isolation and self-doubt. When I was inside, I felt like society had completely written me off. 

The Prison Outreach team met me at my lowest point. They didn't judge my past; they listened to my struggles and walked with me step-by-step back to dignity. 

Today, I use my experience to mentor other reintegrating men, showing them that a mistake does not define the rest of your life.`,
    date: "2025-05-18",
    image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    title: "Speaking Up on Air",
    author: "Grace A.",
    excerpt:
      "Our weekly radio show reaches thousands with a simple message: it's okay to talk.",
    body: `Stigma around mental health is often deeply rooted in cultural silence, particularly when it comes to men. As a Media Advocacy volunteer, I witness firsthand how powerful the airwaves can be.

Our weekly radio show reaches thousands of listeners across counties who might never step into a formal workshop. By discussing emotional struggles openly on air, we give callers the courage to break their silence. 

The simple message we repeat every week changes lives: it is okay to talk, and you are never alone.`,
    date: "2025-06-07",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Choosing Non-Violence",
    author: "Peter N.",
    excerpt:
      "The GBV Prevention workshops taught me a different kind of strength.",
    body: `Growing up, I believed that a man had to control everything through force and anger. Whenever life overwhelmed me, outbursts were my default response, which only hurt the people I loved most.

The GBV Prevention workshops challenged my entire perspective on masculinity. They taught me a different kind of strength—one rooted in emotional regulation, accountability, and active listening. 

Participating in the accountability circles helped me build healthier, more respectful relationships with my partner and children.`,
    date: "2025-07-21",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    title: "A Young Leader Emerges",
    author: "Daniel W.",
    excerpt:
      "The Leadership Academy gave me the skills to hold space for my peers.",
    body: `Young men in our villages face immense peer pressure and unemployment stress, often turning to harmful coping mechanisms because they have nowhere to turn.

The Leadership Academy gave me the practical skills to recognize mental health distress and hold safe, non-judgmental spaces for my peers. 

Graduating from the academy and facilitating youth dialogue circles in my community has been the most fulfilling journey of my life.`,
    date: "2025-08-30",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
];