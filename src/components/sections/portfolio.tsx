"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Heart } from "lucide-react";
import { useMemo, useState } from "react";

import { BrandButton } from "@/components/shared/brand-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { PROJECTS, PROJECT_FILTERS } from "@/constants/site";
import { cn } from "@/lib/utils";

export function Portfolio() {
  const [filter, setFilter] = useState<string>(PROJECT_FILTERS[0]);

  const visible = useMemo(
    () =>
      filter === "All Project"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <section id="portfolio" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Visit my portfolio and keep your feedback"
              title="My Portfolio"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ul
              role="tablist"
              aria-label="Filter projects by type"
              className="flex flex-wrap gap-2"
            >
              {PROJECT_FILTERS.map((item) => (
                <li key={item} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={filter === item}
                    onClick={() => setFilter(item)}
                    className={cn(
                      "rounded-md px-4 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-all duration-300",
                      filter === item
                        ? "bg-gradient-brand text-brand-foreground shadow-brand"
                        : "neu-card text-body hover:text-brand",
                    )}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <motion.ul layout className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group neu-card overflow-hidden"
              >
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative overflow-hidden bg-subtle/10 flex items-center justify-center">
                      <img
                        src={typeof project.image === "string" ? project.image : project.image.src}
                        alt={project.title}
                        width={696}
                        height={512}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="bg-background/70 text-subtle absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] backdrop-blur-sm">
                        <Heart className="text-brand size-3.5" aria-hidden="true" />
                        {project.likes}
                      </span>
                    </div>

                    <div className="px-5 pt-5 pb-5">
                      <div className="flex justify-between items-center">
                        <span className="eyebrow">{project.category}</span>
                        {project.year && (
                          <span className="text-xs text-subtle">{project.year}</span>
                        )}
                      </div>
                      <h3 className="group-hover:text-brand mt-3 flex items-start gap-2 text-lg leading-snug transition-colors duration-300">
                        <span className="min-w-0">{project.title}</span>
                        <ArrowUpRight
                          className="text-brand mt-1 size-4 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </h3>
                      {project.tools && project.tools.length > 0 && (
                        <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <li
                              key={tool}
                              className="text-[10px] uppercase tracking-wider bg-subtle/10 text-body px-2 py-1 rounded-md"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className="block">
                    <div className="relative overflow-hidden bg-subtle/10 flex items-center justify-center">
                      <img
                        src={typeof project.image === "string" ? project.image : project.image.src}
                        alt={project.title}
                        width={696}
                        height={512}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="bg-background/70 text-subtle absolute top-3 right-3 flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] backdrop-blur-sm">
                        <Heart className="text-brand size-3.5" aria-hidden="true" />
                        {project.likes}
                      </span>
                    </div>

                    <div className="px-5 pt-5 pb-5">
                      <div className="flex justify-between items-center">
                        <span className="eyebrow">{project.category}</span>
                        {project.year && (
                          <span className="text-xs text-subtle">{project.year}</span>
                        )}
                      </div>
                      <h3 className="group-hover:text-brand mt-3 flex items-start gap-2 text-lg leading-snug transition-colors duration-300">
                        <span className="min-w-0">{project.title}</span>
                      </h3>
                      {project.tools && project.tools.length > 0 && (
                        <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <li
                              key={tool}
                              className="text-[10px] uppercase tracking-wider bg-subtle/10 text-body px-2 py-1 rounded-md"
                            >
                              {tool}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <Reveal className="mt-14 flex justify-center" delay={0.1}>
          <BrandButton asChild variant="outline" size="lg">
            <a href="#blog">See more</a>
          </BrandButton>
        </Reveal>
      </div>
    </section>
  );
}
