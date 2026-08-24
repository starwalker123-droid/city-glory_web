import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type ContentImage = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Long-form text that alternates image-left/text-right, then text-left/
 * image-right, and so on — paragraphs beyond the image count fall back to
 * plain full-width text. Any images left over after pairing show below as a
 * small gallery grid. Shared by the article detail page and the "na mieru"
 * page — anywhere a story needs to read as more than a wall of text.
 */
export async function AlternatingContent({
  paragraphs,
  images,
}: {
  paragraphs: string[];
  images: ContentImage[];
}) {
  const tClanky = await getTranslations("clanky");
  const leftoverImages = images.slice(paragraphs.length);

  return (
    <>
      <div className="space-y-10">
        {paragraphs.map((paragraph, i) => {
          const image = images[i];
          const imageOnLeft = i % 2 === 0;

          if (!image) {
            return (
              <Reveal key={i}>
                <p className="text-base leading-relaxed text-ink">{paragraph}</p>
              </Reveal>
            );
          }

          return (
            <Reveal key={i}>
              <div className="grid items-center gap-6 sm:grid-cols-2 sm:gap-10">
                <p
                  className={cn(
                    "text-base leading-relaxed text-ink sm:row-start-1",
                    imageOnLeft ? "sm:col-start-2" : "sm:col-start-1",
                  )}
                >
                  {paragraph}
                </p>
                <div
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-lg bg-mist sm:row-start-1",
                    imageOnLeft ? "sm:col-start-1" : "sm:col-start-2",
                  )}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {leftoverImages.length > 0 && (
        <Reveal>
          <div className="mt-10">
            <p className="text-xs uppercase tracking-wide text-muted">
              {tClanky("galleryTitle")}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {leftoverImages.map((image) => (
                <div
                  key={image.url}
                  className="relative aspect-square overflow-hidden rounded-lg bg-mist"
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </>
  );
}
