import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Learning from "@/components/Learning";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MotionConfig } from "framer-motion";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <Background />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Learning />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
