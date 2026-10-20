import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WhyBimata from "./sections/WhyBimata";
import Process from "./sections/Process";
import Coverage from "./sections/Coverage";
import About from "./sections/About";
import Contact from "./sections/Contact";
import useRevealOnScroll from "./hooks/useRevealOnScroll";

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyBimata />
        <Process />
        <Coverage />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
