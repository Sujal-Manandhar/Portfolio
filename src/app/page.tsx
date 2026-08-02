import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Preloader } from "@/components/layout/preloader";
import { Blog } from "@/components/sections/blog";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Portfolio } from "@/components/sections/portfolio";
import { Resume } from "@/components/sections/resume";
import { Services } from "@/components/sections/services";

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
