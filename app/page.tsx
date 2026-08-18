import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SignatureAmenities } from "@/components/SignatureAmenities";
import { WhyDapoli } from "@/components/WhyDapoli";
import { WhySapphire } from "@/components/WhySapphire";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SignatureAmenities />
        <WhyDapoli />
        <WhySapphire />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
