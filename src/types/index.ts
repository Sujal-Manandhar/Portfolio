import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string | StaticImageData;
  likes: number;
  client: string;
  role: string;
  year: string;
  tools: string[];
  liveUrl?: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  meta: string;
  description: string;
  bullets?: string[];
}

export interface SkillGroup {
  title: string;
  icon?: string;
  skills: string[];
}



export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string | StaticImageData;
  excerpt: string;
  content?: React.ReactNode | string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}
