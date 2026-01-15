import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { ProblemSplit } from "@/components/sections/ProblemSplit";
import { FormatSpec } from "@/components/sections/FormatSpec";
import { SessionFlow } from "@/components/sections/SessionFlow";
import { Coaches } from "@/components/sections/Coaches";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { DenverLaunch } from "@/components/sections/DenverLaunch";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <ProblemSplit />
        <FormatSpec />
        <SessionFlow />
        <Coaches />
        <WhoItsFor />
        <DenverLaunch />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
