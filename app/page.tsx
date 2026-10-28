import { Colors } from "@/components/Colors";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Lifter } from "@/components/Lifter";
import { UseCases } from "@/components/UseCases";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { Proof } from "@/components/Proof";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <UseCases />
        <HowItWorks />
        <Lifter />
        <Colors />
        <Proof />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
