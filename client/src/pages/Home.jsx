import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import HowItWorks from "../components/how-it-works/HowItWorks";
import ContactUs from "../components/contactus/ContactUs";
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
        <ContactUs />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}