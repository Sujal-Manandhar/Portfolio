"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUp } from "lucide-react";

import { useScrollPosition } from "@/hooks/use-viewport";

export function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 600;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gradient-brand text-brand-foreground shadow-brand fixed right-5 bottom-6 z-30 flex size-12 items-center justify-center rounded-full sm:right-8"
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          whileHover={{ y: -4 }}
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
