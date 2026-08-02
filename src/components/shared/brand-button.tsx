import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

import { cn } from "@/lib/utils";

const brandButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-wide uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        solid: "bg-gradient-brand text-brand-foreground shadow-brand hover:-translate-y-0.5",
        neu: "neu-card text-heading hover:text-brand hover:shadow-neu-sm",
        outline:
          "border border-brand text-brand hover:bg-gradient-brand hover:text-brand-foreground hover:border-transparent",
        ghost: "text-body hover:text-brand",
      },
      size: {
        sm: "h-10 px-5 text-xs",
        md: "h-12 px-7 text-xs sm:text-sm",
        lg: "h-14 px-9 text-sm",
        icon: "size-12 p-0",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

export interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof brandButtonVariants> {
  asChild?: boolean;
}

export const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(brandButtonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
BrandButton.displayName = "BrandButton";

export { brandButtonVariants };
