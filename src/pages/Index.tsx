import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
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
      
      {/* Background set to soft cream, spacing gap removed to allow section padding to control layout */}
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ImpactSection />
        <GetInvolvedSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;