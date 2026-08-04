import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamHero from "@/components/team/TeamHero";
import FounderVideo from "@/components/team/FounderVideo";
import TeamGrid from "@/components/team/TeamGrid";
import { teamMembers } from "@/data/teamData";

const PAGE_URL = "https://menmatters.lovable.app/team";
const DESCRIPTION =
  "Meet the Men Matter team — the nurses, facilitators and advocates behind Kenya's community-led men's mental health movement.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Our Team | Men Matter",
  url: PAGE_URL,
  about: {
    "@type": "Organization",
    name: "Men Matter",
    url: "https://menmatters.lovable.app/",
    employee: teamMembers.map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      description: m.bio,
      image: m.image,
    })),
  },
};

const Team = () => (
  <>
    <Helmet>
      <title>Our Team | Men Matter</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content="Our Team | Men Matter" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={PAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Our Team | Men Matter" />
      <meta name="twitter:description" content={DESCRIPTION} />
      <link rel="canonical" href={PAGE_URL} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <TeamHero />
        <FounderVideo />
        <TeamGrid />
      </main>
      <Footer />
    </div>
  </>
);

export default Team;
