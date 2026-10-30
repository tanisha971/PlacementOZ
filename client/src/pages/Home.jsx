
import { useEffect, useState } from "react";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import HowItWorks from "../components/how-it-works/HowItWorks";
import Companies from "../components/companies/Companies";
import ContactUs from "../components/contactus/ContactUs";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";
import Loader from "../components/common/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Demo loading screen; adjust the duration if needed.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader message="Loading PlacementOZ..." />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Companies />
        <ContactUs />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
