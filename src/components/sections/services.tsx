"use client";
import {
  Briefcase,
  Code2,
  MonitorSmartphone,
  Search,
  Smartphone,
  TrendingUp,
  Laptop,
  Camera,
  Palette,
  Layout,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SERVICES, STATS } from "@/constants/site";
import { useCountUp } from "@/hooks/use-count-up";
import type { StatItem } from "@/types";

const ICONS: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  "code-2": Code2,
  briefcase: Briefcase,
  smartphone: Smartphone,
  search: Search,
  "monitor-smartphone": MonitorSmartphone,
  laptop: Laptop,
  camera: Camera,
  palette: Palette,
  layout: Layout,
};

function StatCounter({ stat }: { stat: StatItem }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="neu-card px-6 py-7 text-center">
      <span ref={ref} className="text-heading block text-3xl font-bold sm:text-4xl">
        {value}
        {stat.suffix}
      </span>
      <span className="text-subtle mt-2 block text-xs tracking-[0.16em] uppercase">
        {stat.label}
      </span>
    </div>
  );
}

export function Services() {
  return (
    <section id="features" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Features" title="What I Do" />
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon] ?? Code2;
            return (
              <Reveal
                as="li"
                key={service.id}
                delay={index * 0.08}
                className="group neu-card relative overflow-hidden p-8 transition-transform duration-500 hover:-translate-y-2"
              >
                <span className="bg-gradient-brand absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <span className="neu-inset text-brand flex size-14 items-center justify-center rounded-lg">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="group-hover:text-brand mt-7 text-xl transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-body mt-4 text-sm leading-7">{service.description}</p>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <StatCounter stat={stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
