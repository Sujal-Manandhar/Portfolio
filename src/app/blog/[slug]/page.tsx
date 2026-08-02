import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock3 } from "lucide-react";
import Image from "next/image";

import { BLOG_POSTS } from "@/constants/blogs";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="py-20 lg:py-28 flex-1 mt-20">
        <article className="mx-auto max-w-[800px] px-5 sm:px-8">
          <Link
            href="/"
            className="text-subtle hover:text-brand mb-10 inline-flex items-center gap-2 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          
          <header className="mb-12">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <span className="bg-brand/10 text-brand rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase">
                {post.category}
              </span>
              <span className="text-subtle flex items-center gap-1.5 text-sm">
                <Clock3 className="size-4" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </header>

          <div className="mb-12 overflow-hidden rounded-xl border border-white/5">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={630}
              priority
              className="aspect-[2/1] w-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-brand max-w-none">
            {post.content ? post.content : <p className="text-subtle">{post.excerpt}</p>}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
