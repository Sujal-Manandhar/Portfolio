"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Atom, Palette, Terminal, Figma } from "lucide-react";

import heroPortrait from "@/assets/sujal-portrait.jpg";
import { BrandButton } from "@/components/shared/brand-button";
import { SocialLinks } from "@/components/shared/social-links";
import { BEST_SKILLS, PERSON } from "@/constants/site";
import { useTypewriter } from "@/hooks/use-typewriter";

const SKILL_ICONS: Record<string, React.ElementType> = {
  photoshop: Palette,
  react: Atom,
  python: Terminal,
  figma: Figma,
};

export function Hero() {
  const typed = useTypewriter(PERSON.roles);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-12 lg:pt-28 lg:pb-16"
    >
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl xl:text-5xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient-brand">{PERSON.name}</span>
            <br />
            <span className="mt-3 inline-block whitespace-nowrap text-3xl font-bold sm:text-4xl xl:text-5xl">
              a {typed}
              <span className="text-brand animate-blink ml-1 font-light">
                |
              </span>
            </span>
          </h1>

          <p className="text-body mt-7 max-w-xl text-lg leading-relaxed">
            {PERSON.intro}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <BrandButton asChild size="lg">
              <a href="#contact">Hire me</a>
            </BrandButton>

            <BrandButton asChild variant="neu" size="lg">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="cv.pdf"
              >
                Download CV
              </a>
            </BrandButton>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div>
              <span className="eyebrow block">Find with me</span>
              <SocialLinks className="mt-4" />
            </div>

            <div>
              <span className="eyebrow block">Best skill on</span>

              <ul className="mt-4 flex items-center gap-4">
                {BEST_SKILLS.map((skill) => {
                  const Icon = SKILL_ICONS[skill.icon] || Palette;

                  return (
                    <li
                      key={skill.label}
                      className="neu-card text-brand flex size-12 items-center justify-center transition-transform duration-300 hover:-translate-y-1"
                      title={skill.label}
                    >
                      <Icon className="size-5" />
                      <span className="sr-only">{skill.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] xl:max-w-[440px]"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="neu-card animate-float relative overflow-hidden rounded-xl p-4">
            <div className="from-brand/12 rounded-lg bg-gradient-to-b to-transparent">
              <Image
                src={heroPortrait}
                alt={`${PERSON.name}, developer and UI/UX designer`}
                width={912}
                height={1104}
                priority
                className="mx-auto h-auto w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-[1320px] px-5 sm:px-8">
        <div className="hairline" />
      </div>
    </section>
  );
}