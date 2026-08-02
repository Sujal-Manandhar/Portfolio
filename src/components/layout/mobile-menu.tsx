"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { SocialLinks } from "@/components/shared/social-links";
import { NAV_ITEMS, PERSON } from "@/constants/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ open, onClose, activeSection }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="bg-background/80 fixed inset-0 z-40 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="bg-surface shadow-neu fixed top-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col gap-8 overflow-y-auto px-7 py-8 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-heading text-lg font-bold tracking-[0.2em]">
                {PERSON.brand}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="neu-card text-subtle hover:text-brand flex size-11 items-center justify-center transition-colors"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, index) => {
                const linkHref =
                  item.href.startsWith("#") && pathname !== "/"
                    ? `/${item.href}`
                    : item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * index + 0.1 }}
                  >
                    <a
                      href={linkHref}
                      onClick={onClose}
                      className={cn(
                        "hover:text-brand block border-b border-border/60 py-4 text-sm font-medium tracking-[0.14em] uppercase transition-colors",
                        activeSection === item.href.slice(1) ? "text-brand" : "text-body",
                      )}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-auto">
              <span className="eyebrow block">Find with me</span>
              <SocialLinks className="mt-4" />
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
