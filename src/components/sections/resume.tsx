"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Code2, Database, Palette, Wrench, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { EDUCATION, EXPERIENCE, SKILL_GROUPS } from "@/constants/site";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/types";

import { BrandButton } from "@/components/shared/brand-button";

type TabId = "education" | "skills" | "experience" | "cv";

const TABS: { id: TabId; label: string }[] = [
  { id: "education", label: "Education" },
  { id: "skills", label: "Professional Skills" },
  { id: "experience", label: "Experience" },
  { id: "cv", label: "CV" },
];

const SKILL_ICONS: Record<string, LucideIcon> = {
  "code-2": Code2,
  database: Database,
  palette: Palette,
  wrench: Wrench,
};

function Timeline({
  range,
  heading,
  entries,
}: {
  range?: string;
  heading: string;
  entries: TimelineEntry[];
}) {
  return (
    <div>
      {range && <span className="eyebrow block">{range}</span>}
      <h3 className="mt-2 text-2xl">{heading}</h3>

      <ol className="border-border/70 mt-8 space-y-6 border-l pl-6">
        {entries.map((entry, index) => (
          <Reveal as="li" key={entry.id} delay={index * 0.08} className="relative">
            <span className="bg-gradient-brand absolute -ml-[31px] mt-2 block size-2.5 rounded-full" />
            <div className="neu-card p-6">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <h4 className="inline-block text-lg font-bold">{entry.title}</h4>
                  {entry.meta && <span className="text-subtle italic">, {entry.meta}</span>}
                </div>
                {entry.description && (
                  <span className="text-subtle whitespace-nowrap text-right text-sm">
                    {entry.description}
                  </span>
                )}
              </div>
              {entry.bullets && entry.bullets.length > 0 && (
                <ul className="text-subtle mt-3 list-disc space-y-1 pl-5 text-sm">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Resume() {
  const [tab, setTab] = useState<TabId>("education");

  return (
    <section id="resume" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="3+ Years of Experience" title="My Resume" align="center" />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <div
            role="tablist"
            aria-label="Resume sections"
            className="neu-card mx-auto flex w-full max-w-3xl flex-wrap justify-center gap-2 p-2"
          >
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                aria-controls={`resume-panel-${item.id}`}
                id={`resume-tab-${item.id}`}
                onClick={() => setTab(item.id)}
                className={cn(
                  "flex-1 rounded-md px-4 py-3 text-[11px] font-medium tracking-[0.12em] whitespace-nowrap uppercase transition-all duration-300 sm:text-xs",
                  tab === item.id
                    ? "bg-gradient-brand text-brand-foreground shadow-brand"
                    : "text-subtle hover:text-brand",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          className="mt-12"
          role="tabpanel"
          id={`resume-panel-${tab}`}
          aria-labelledby={`resume-tab-${tab}`}
        >
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {tab === "education" && <Timeline heading="Education Quality" entries={EDUCATION} />}

            {tab === "experience" && <Timeline heading="Job Experience" entries={EXPERIENCE} />}

            {tab === "skills" && (
              <div className="grid gap-7 lg:grid-cols-2">
                {SKILL_GROUPS.map((group) => {
                  const Icon = group.icon ? SKILL_ICONS[group.icon] : null;
                  return (
                    <div key={group.title} className="neu-card p-8">
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <span className="neu-inset text-brand flex size-10 items-center justify-center rounded-lg shrink-0">
                            <Icon className="size-5" />
                          </span>
                        )}
                        <h3 className="text-xl">{group.title}</h3>
                      </div>
                      <ul className="mt-6 space-y-4 text-sm text-subtle">
                        {group.skills.map((skill, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <span className="block size-1.5 rounded-full bg-subtle/40" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}

            {tab === "cv" && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="neu-card p-10 text-center max-w-md w-full">
                  <h3 className="text-2xl font-bold mb-4">Curriculum Vitae</h3>
                  <p className="text-subtle mb-8">
                    Download my detailed CV to learn more about my experience and skills.
                  </p>
                  <BrandButton asChild size="lg">
                    <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" download="cv.pdf">
                      Download CV
                    </a>
                  </BrandButton>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
