import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import HowItWorks from "../components/how-it-works/HowItWorks";
import Companies from "../components/companies/Companies";
import AboutUs from "../components/aboutus/AboutUs";
import FAQ from "../components/faq/FAQ";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Companies />
        <AboutUs />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}