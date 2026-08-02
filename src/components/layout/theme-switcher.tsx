import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/context/theme-context";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "neu-card text-subtle hover:text-brand relative flex size-11 items-center justify-center transition-all duration-300",
        className,
      )}
    >
      <Sun
        className={cn(
          "absolute size-5 transition-all duration-500",
          theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
        )}
        aria-hidden="true"
      />
      <Moon
        className={cn(
          "absolute size-5 transition-all duration-500",
          theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
        )}
        aria-hidden="true"
      />
    </button>
  );
}
