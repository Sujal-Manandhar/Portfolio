import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_ITEMS, PERSON } from "@/constants/site";
import { SocialLinks } from "@/components/shared/social-links";

export function Footer() {
  return (
    <footer className="border-border/60 border-t py-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-8 lg:gap-16">
          {/* Column 1: Logo & Subscribe */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <div className="bg-brand text-brand-foreground shadow-brand flex size-12 shrink-0 items-center justify-center rounded-xl font-bold text-xl tracking-tighter">
                SM
              </div>
              <span className="text-heading text-lg font-bold tracking-[0.22em]">
                {PERSON.brand}
              </span>
            </a>

            <p className="text-subtle mt-6 max-w-md text-sm leading-relaxed">
              Combining technical expertise, design thinking, and data insights to build scalable,
              high-performance web applications and visually stunning interfaces. Let's collaborate
              and bring your ideas to life!
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-heading text-lg font-semibold tracking-wide">Quick Link</h4>
            <ul className="mt-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-subtle hover:text-brand text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-heading text-lg font-semibold tracking-wide">Contact</h4>
            <ul className="mt-6 flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <span className="neu-inset flex size-10 shrink-0 items-center justify-center rounded-full">
                  <Mail className="size-4 text-brand" />
                </span>
                <a
                  href={`mailto:${PERSON.email}`}
                  className="text-subtle hover:text-brand text-sm transition-colors"
                >
                  {PERSON.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="neu-inset flex size-10 shrink-0 items-center justify-center rounded-full">
                  <MapPin className="size-4 text-brand" />
                </span>
                <span className="text-subtle text-sm">Hetauda-04, Nepal</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="neu-inset flex size-10 shrink-0 items-center justify-center rounded-full">
                  <Phone className="size-4 text-brand" />
                </span>
                <a
                  href={`tel:${PERSON.phone}`}
                  className="text-subtle hover:text-brand text-sm transition-colors"
                >
                  {PERSON.phone}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <SocialLinks className="gap-3" />
            </div>
          </div>
        </div>

        <div className="hairline mt-16" />

        <p className="text-subtle mt-6 text-center text-xs">
          © {new Date().getFullYear()} {PERSON.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
