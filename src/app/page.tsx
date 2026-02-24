import Footer from "@/components/footer";
import About from "@/sections/about";
import Competitions from "@/sections/competitions";
import ContactPage from "@/sections/contact";
import Events from "@/sections/events";
import FAQ from "@/sections/faq";
import Hero from "@/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Competitions />
      <ContactPage />
      <FAQ />
      <Footer />
    </>
  );
}
