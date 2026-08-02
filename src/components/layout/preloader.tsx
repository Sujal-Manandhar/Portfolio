"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { PERSON } from "@/constants/site";

/** Brief brand loader shown on first client paint. */
export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="bg-background fixed inset-0 z-[60] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
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
