"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { PERSON } from "@/constants/site";

/** Brief brand loader — only shown on the very first visit per session. */
export function Preloader() {
  // Skip entirely on repeat visits within the same session
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const seen = sessionStorage.getItem("preloader-seen");
    if (seen) return false;
    sessionStorage.setItem("preloader-seen", "1");
    return true;
  });

  useEffect(() => {
    if (!visible) return;
    // 350ms display + 250ms fade = LCP unblocked well under 600ms total
    const timer = window.setTimeout(() => setVisible(false), 350);
    return () => window.clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="bg-background fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.span
              className="border-brand/25 border-t-brand size-14 rounded-full border-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            />
            <span className="eyebrow">{PERSON.brand}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
