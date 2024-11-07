"use client";
import Image from "next/image";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { Lato } from 'next/font/google';
import Content from "./components/Content"
import Hero from "./components/Hero";
import About from "./components/About";
import PicSection from "./components/PicSection";
import ContactInfo from "./components/ContactInfo";


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
});

export default function Home() {
  return (
<div className={lato.className}>
<Nav />
<Hero />
<About />
<Content />
<Services />
<Testimonials />
<PicSection />
<Contact />
<Footer />
</div>
  );
}
