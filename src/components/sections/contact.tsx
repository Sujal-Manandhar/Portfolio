"use client";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { BrandButton } from "@/components/shared/brand-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SocialLinks } from "@/components/shared/social-links";
import { PERSON } from "@/constants/site";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const FIELDS = [
  { name: "name", label: "Your Name", type: "text" },
  { name: "email", label: "Your Email", type: "email" },
] as const;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "68d3a100-88fa-453f-9537-27e9b5cf530f",
          ...data,
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        toast.success("Thanks! Your message has been sent.");
        form.reset();
      } else {
        toast.error(json.message || "Something went wrong! Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Contact Me" align="center" />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          {/* Left Column: Contact Info */}
          <Reveal className="neu-card flex flex-col justify-center p-8 lg:p-12">
            <h3 className="text-heading text-3xl font-bold leading-tight sm:text-4xl">
              Let's work <span className="text-brand">together!</span>
            </h3>
            <p className="text-body mt-6 text-base leading-relaxed">{PERSON.contactBlurb}</p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="neu-inset flex size-12 shrink-0 items-center justify-center rounded-full text-brand">
                  <Phone className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-subtle text-xs uppercase tracking-wider font-semibold block mb-1">
                    Phone
                  </span>
                  <a
                    href={`tel:${PERSON.phone.replace(/\s/g, "")}`}
                    className="text-heading hover:text-brand text-lg font-medium transition-colors"
                  >
                    {PERSON.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="neu-inset flex size-12 shrink-0 items-center justify-center rounded-full text-brand">
                  <Mail className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-subtle text-xs uppercase tracking-wider font-semibold block mb-1">
                    Email
                  </span>
                  <a
                    href={`mailto:${PERSON.email}`}
                    className="text-heading hover:text-brand text-lg font-medium transition-colors break-all"
                  >
                    {PERSON.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <span className="text-subtle text-xs uppercase tracking-wider font-semibold block mb-4">
                Find me on
              </span>
              <SocialLinks className="gap-4" />
            </div>
          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal delay={0.1} className="neu-card p-8 lg:p-12">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {FIELDS.slice(0, 2).map((field) => (
                  <div key={field.name}>
                    <label htmlFor={`contact-${field.name}`} className="eyebrow block">
                      {field.label}
                    </label>
                    <input
                      id={`contact-${field.name}`}
                      name={field.name}
                      type={field.type}
                      maxLength={255}
                      aria-invalid={Boolean(errors[field.name])}
                      className="neu-inset text-heading mt-3 w-full rounded-md px-5 py-4 text-sm outline-none transition-shadow focus:shadow-inner"
                    />
                    {errors[field.name] && (
                      <span className="text-destructive mt-2 block text-xs">
                        {errors[field.name]}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label htmlFor="contact-message" className="eyebrow block">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  maxLength={1000}
                  aria-invalid={Boolean(errors.message)}
                  className="neu-inset text-heading mt-3 w-full resize-none rounded-md px-5 py-4 text-sm outline-none transition-shadow focus:shadow-inner"
                />
                {errors.message && (
                  <span className="text-destructive mt-2 block text-xs">{errors.message}</span>
                )}
              </div>

              <BrandButton
                type="submit"
                size="lg"
                className="w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
                <Send className="size-4" aria-hidden="true" />
              </BrandButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
