import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronUp } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllNewsPosts, getNewsPostBySlug } from "@/lib/news";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Reveal } from "@/components/motion/reveal";
import { AlternatingContent } from "@/components/content/alternating-content";

export async function generateStaticParams() {
  const posts = await getAllNewsPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPostBySlug(slug);
  if (!post) return {};

  return { title: post.title, description: post.excerpt };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getNewsPostBySlug(slug);
  if (!post) notFound();

  setRequestLocale(locale);

  const t = await getTranslations("nav");
  const tCategory = await getTranslations("newsCategory");
  const tClanky = await getTranslations("clanky");

  return (
    <article id="clanok" className="mx-auto max-w-3xl scroll-mt-8 px-4 py-12 sm:py-16">
      <Reveal>
        <Breadcrumb
          items={[
            { label: t("clanky"), href: "/clanky" },
            { label: tCategory(post.category), href: `/clanky?kategoria=${post.category}` },
          ]}
        />
      </Reveal>

      <Reveal>
        <h1 className="text-3xl font-semibold lowercase tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{post.excerpt}</p>
      </Reveal>

      <Reveal>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg bg-mist">
          <Image
            src={post.image.url}
            alt={post.image.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      </Reveal>

      <div className="mt-10">
        <AlternatingContent paragraphs={post.body ?? []} images={post.gallery ?? []} />
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#clanok"
          aria-label={tClanky("backToTop")}
          className="flex size-10 items-center justify-center rounded-full border border-border text-ink/70 transition-colors hover:border-ink/30 hover:text-ink"
        >
          <ChevronUp className="size-4" aria-hidden />
        </a>
      </div>
    </article>
  );
}
