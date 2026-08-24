import { getTranslations } from "next-intl/server";
import { getFeaturedNewsPosts } from "@/lib/news";
import { NewsCard } from "@/components/content/news-card";
import { Reveal } from "@/components/motion/reveal";

// Three latest reads teasing the "články" hub. Card language (image,
// headline, short text, expansion arrow only — no "read more" button) lives
// in NewsCard, shared with the /clanky listing itself.
export async function ArticlesPreview() {
  const t = await getTranslations("home");
  const posts = await getFeaturedNewsPosts(3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-wide text-muted">
          {t("articlesEyebrow")}
        </p>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 0.06}>
            <NewsCard post={post} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
