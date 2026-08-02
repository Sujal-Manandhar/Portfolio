import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { BLOG_POSTS } from "@/constants/blogs";

export function Blog() {
  return (
    <section id="blog" className="py-12 lg:py-16">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Visit my blog and keep your feedback" title="My Blog" />
        </Reveal>

        <ul className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, index) => (
            <Reveal
              as="li"
              key={post.slug}
              delay={index * 0.08}
              className="group neu-card overflow-hidden transition-transform duration-500 hover:-translate-y-2"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <article className="flex flex-col h-full">
                  <div className="overflow-hidden">
                    <img
                      src={typeof post.image === "string" ? post.image : post.image.src}
                      alt={post.title}
                      width={696}
                      height={512}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-5 pt-5 pb-5 flex-1 flex flex-col">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-brand text-[11px] font-medium tracking-[0.16em] uppercase">
                        {post.category}
                      </span>
                      <span className="text-subtle flex items-center gap-1.5 text-xs">
                        <Clock3 className="size-3.5" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="group-hover:text-brand mt-3 flex items-start gap-2 text-lg leading-snug transition-colors duration-300">
                      <span className="min-w-0">{post.title}</span>
                      <ArrowUpRight
                        className="text-brand mt-1 size-4 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </h3>
                    <p className="text-body mt-3 text-sm leading-7 flex-1">{post.excerpt}</p>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
