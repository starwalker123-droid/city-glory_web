import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { NewsPost } from "@/lib/news";

/**
 * Same card language as ArticlesPreview / ImprovementIdeas: image, headline,
 * short text, expansion arrow only — no "read more" button (per the brief).
 * Shared by the homepage teaser and the /clanky listing.
 */
export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link
      href={`/clanky/${post.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-ink/20"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={post.image.url}
          alt={post.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 p-5 sm:p-6">
        {/* Fixed to 2/3 lines (not just clamped) so a short title or excerpt
            doesn't leave this card shorter than its neighbours in the row. */}
        <h3 className="line-clamp-2 min-h-[2lh] text-lg lowercase tracking-tight text-ink sm:text-xl">
          {post.title}
        </h3>
        <p className="line-clamp-3 min-h-[3lh] text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <ChevronDown
          className="mt-2 size-5 text-ink transition-transform duration-200 group-hover:translate-y-0.5"
          aria-hidden
        />
      </div>
    </Link>
  );
}
