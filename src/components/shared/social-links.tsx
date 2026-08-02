import { Facebook, Linkedin, Instagram } from "lucide-react";

import { SOCIALS } from "@/constants/site";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ElementType> = {
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {SOCIALS.map((social) => {
        const Icon = ICONS[social.icon] || Facebook;
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
              className="neu-card text-subtle hover:text-brand flex size-12 items-center justify-center transition-all duration-300 hover:-translate-y-1"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
