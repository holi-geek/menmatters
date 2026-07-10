import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FrameworkSection from "@/components/FrameworkSection";
import ProgramsSection from "@/components/ProgramsSection";
import ImpactSection from "@/components/ImpactSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://menmatters.lovable.app/" />
        <meta property="og:title" content="Men Matter | Mental Health Matters" />
        <meta property="og:description" content="Men Matter is a Kenyan community-based mental health initiative improving wellbeing among men and youth through education, dialogue, and advocacy." />
        <meta property="og:url" content="https://menmatters.lovable.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Men Matter | Mental Health Matters" />
        <meta name="twitter:description" content="Men Matter is a Kenyan community-based mental health initiative improving wellbeing among men and youth through education, dialogue, and advocacy." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ImpactSection />
        <GetInvolvedSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
