import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <span className="eyebrow block">{eyebrow}</span>
      <h2 className="mt-3 text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
