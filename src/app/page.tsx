import dynamic from "next/dynamic";

import { Navbar } from "@/components/layout/navbar";
import { Preloader } from "@/components/layout/preloader";
import { Hero } from "@/components/sections/hero";

// Below-fold sections: lazily loaded after the critical above-fold paint
const Services = dynamic(() => import("@/components/sections/services").then((m) => m.Services));
const Portfolio = dynamic(() => import("@/components/sections/portfolio").then((m) => m.Portfolio));
const Resume = dynamic(() => import("@/components/sections/resume").then((m) => m.Resume));
const Blog = dynamic(() => import("@/components/sections/blog").then((m) => m.Blog));
const Contact = dynamic(() => import("@/components/sections/contact").then((m) => m.Contact));
const Footer = dynamic(() => import("@/components/layout/footer").then((m) => m.Footer));
const BackToTop = dynamic(() => import("@/components/layout/back-to-top").then((m) => m.BackToTop));

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
