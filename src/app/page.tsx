"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
     <Navbar />
      <Hero id="hero" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Skills id="skills" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}
