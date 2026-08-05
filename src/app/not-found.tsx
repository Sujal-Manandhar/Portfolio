"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, ArrowLeft, Search } from "lucide-react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {mounted &&
            Array.from({ length: 20 }).map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full opacity-20"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  background: "var(--brand)",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
                }}
              />
            ))}
        </div>

        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.07] blur-[100px]"
          style={{ background: "var(--brand)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 -right-32 w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[80px]"
          style={{ background: "var(--brand)" }}
          aria-hidden="true"
        />

        <div
          className={`relative z-10 mx-auto max-w-2xl px-5 sm:px-8 text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Glitch-style 404 number */}
          <div className="relative mb-6 select-none">
            <h1
              className="text-[10rem] sm:text-[14rem] lg:text-[18rem] font-bold leading-none tracking-tighter"
              style={{
                background:
                  "linear-gradient(145deg, var(--brand), oklch(0.65 0.2 275))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "none",
              }}
            >
              404
            </h1>
            {/* Shadow layer for depth */}
            <span
              className="absolute inset-0 text-[10rem] sm:text-[14rem] lg:text-[18rem] font-bold leading-none tracking-tighter opacity-[0.08] blur-[2px] pointer-events-none"
              aria-hidden="true"
              style={{ color: "var(--brand)" }}
            >
              404
            </span>
          </div>

          {/* Decorative line */}
          <div className="hairline mx-auto max-w-[200px] mb-8" />

          {/* Message */}
          <h2 className="text-heading text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-subtle text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2.5 rounded-md font-medium tracking-wide uppercase transition-all duration-300 bg-gradient-brand text-brand-foreground shadow-brand hover:-translate-y-0.5 h-12 px-7 text-xs sm:text-sm w-full sm:w-auto"
            >
              <Home className="size-4 transition-transform duration-300 group-hover:scale-110" />
              Back to Home
            </Link>
            <Link
              href="/#blog"
              className="group inline-flex items-center justify-center gap-2.5 rounded-md font-medium tracking-wide uppercase transition-all duration-300 neu-card text-heading hover:text-brand hover:shadow-neu-sm h-12 px-7 text-xs sm:text-sm w-full sm:w-auto"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              View Blog
            </Link>
          </div>

          {/* Helpful hint card */}
          <div className="mt-14 neu-card p-6 sm:p-8 text-left max-w-lg mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="neu-inset flex size-10 shrink-0 items-center justify-center rounded-full">
                <Search className="size-4 text-brand" />
              </span>
              <h3 className="text-heading text-sm font-semibold tracking-wide uppercase">
                Looking for something?
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-subtle">
              <li className="flex items-start gap-2">
                <span
                  className="mt-1.5 size-1.5 rounded-full shrink-0"
                  style={{ background: "var(--brand)" }}
                />
                <span>
                  Check the URL for typos and try again
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-1.5 size-1.5 rounded-full shrink-0"
                  style={{ background: "var(--brand)" }}
                />
                <span>
                  Navigate to the{" "}
                  <Link href="/" className="text-brand hover:underline font-medium">
                    homepage
                  </Link>{" "}
                  and explore from there
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-1.5 size-1.5 rounded-full shrink-0"
                  style={{ background: "var(--brand)" }}
                />
                <span>
                  Browse the{" "}
                  <Link href="/#blog" className="text-brand hover:underline font-medium">
                    blog section
                  </Link>{" "}
                  for latest articles
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
