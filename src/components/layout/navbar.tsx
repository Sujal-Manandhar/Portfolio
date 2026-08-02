"use client";

import { Menu } from "lucide-react";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
import { BrandButton } from "@/components/shared/brand-button";
import { NAV_ITEMS, PERSON } from "@/constants/site";
import { useActiveSection, useScrollPosition } from "@/hooks/use-viewport";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.href.slice(1)), []);
  const activeSection = useActiveSection(sectionIds);
  const isStuck = scrollY > 40;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-all duration-500",
          isStuck ? "bg-background/90 shadow-neu-sm backdrop-blur-md" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1320px] items-center gap-4 px-5 sm:px-8 lg:h-24">
          <a
            href="#home"
            className="flex min-w-0 shrink-0 items-center gap-3"
            aria-label={`${PERSON.brand} home`}
          >
            <div className="bg-brand text-brand-foreground shadow-brand flex size-12 shrink-0 items-center justify-center rounded-xl font-bold text-xl tracking-tighter">
              SM
            </div>
            <span className="text-heading truncate text-lg font-bold tracking-[0.22em]">
              {PERSON.brand}
            </span>
          </a>

          <nav aria-label="Primary navigation" className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {NAV_ITEMS.map((item) => {
                const linkHref =
                  item.href.startsWith("#") && pathname !== "/"
                    ? `/${item.href}`
                    : item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={linkHref}
                      className={cn(
                        "nav-link text-[11px] font-medium tracking-[0.16em] uppercase xl:text-xs",
                        activeSection === item.href.slice(1) && "nav-link-active",
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-3 lg:ml-6">
            <ThemeSwitcher />
            <BrandButton asChild variant="neu" size="sm" className="hidden sm:inline-flex">
              <a href={pathname !== "/" ? "/#contact" : "#contact"}>Hire me</a>
            </BrandButton>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="neu-card text-subtle hover:text-brand flex size-11 items-center justify-center transition-colors lg:hidden"
            >
              <Menu className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
