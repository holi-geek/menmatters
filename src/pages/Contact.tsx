import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Men Matter | Talk to Our Team in Homa Bay</title>
        <meta
          name="description"
          content="Reach the Men Matter team in Homa Bay, Kenya. Send a message, call, or email us about mental health support, partnerships and volunteering."
        />
        <link rel="canonical" href="https://menmatters.lovable.app/contact" />
        <meta property="og:title" content="Contact Men Matter | Talk to Our Team" />
        <meta
          property="og:description"
          content="Reach the Men Matter team in Homa Bay, Kenya for support, partnerships and volunteering."
        />
        <meta property="og:url" content="https://menmatters.lovable.app/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Men Matter | Talk to Our Team" />
        <meta
          name="twitter:description"
          content="Reach the Men Matter team in Homa Bay, Kenya for support, partnerships and volunteering."
        />
      </Helmet>

      <div className="min-h-screen bg-[#FDFBF7] flex flex-col">
        <Navbar />
        <main className="pt-16">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
