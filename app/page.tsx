import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedServices from "./components/FeaturedServices";
import WhyChoose from "./components/WhyChoose";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <WhyChoose />
      <Results />
      <Testimonials />
      <Contact />
    </main>
  );
}