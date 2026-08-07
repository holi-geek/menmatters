import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ProgramsSection from "@/components/ProgramsSection";
import FrameworkSection from "@/components/FrameworkSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Men Matter Programs & Framework</title>
        <meta
          name="description"
          content="Explore Men Matter's mental health services: community dialogue, youth support, prison outreach, GBV prevention and our awareness-to-action framework."
        />
        <link rel="canonical" href="https://menmatters.lovable.app/services" />
        <meta property="og:title" content="Our Services | Men Matter Programs & Framework" />
        <meta
          property="og:description"
          content="Community dialogue, youth mental health, prison outreach, GBV prevention and more from Men Matter in Homa Bay, Kenya."
        />
        <meta property="og:url" content="https://menmatters.lovable.app/services" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Men Matter Programs & Framework" />
        <meta
          name="twitter:description"
          content="Community dialogue, youth mental health, prison outreach, GBV prevention and more from Men Matter."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
        <Navbar />
        <main className="pt-16">
          <ProgramsSection />
          <FrameworkSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
