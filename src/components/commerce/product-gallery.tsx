"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { ProductImage } from "@/lib/shopify/types";

/**
 * Main photo + thumbnail strip, with prev/next arrows over the main photo
 * itself (not the thumbnails) and a click-to-expand lightbox. Owns its own
 * "which image is active" state so it can be dropped anywhere a product's
 * image list needs browsing.
 */
export function ProductGallery({ images }: { images: ProductImage[] }) {
  const tp = useTranslations("product");
  const tc = useTranslations("common");
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const image = images[activeImage] ?? images[0];
  const hasMultiple = images.length > 1;

  const stepImage = (delta: 1 | -1) =>
    setActiveImage((i) => (i + delta + images.length) % images.length);

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") stepImage(-1);
      if (e.key === "ArrowRight") stepImage(1);
    }
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-mist">
        {image && (
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={tp("openImage")}
            className="absolute inset-0 block size-full cursor-zoom-in"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
              className="object-cover"
            />
          </button>
        )}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => stepImage(-1)}
              aria-label={tp("previousImage")}
              className="absolute left-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-sm transition-colors hover:bg-cream"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => stepImage(1)}
              aria-label={tp("nextImage")}
              className="absolute right-3 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-ink shadow-sm transition-colors hover:bg-cream"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="mt-3 flex justify-center gap-3">
          {images.map((img, i) => (
            <button
              key={img.url}
              type="button"
              onClick={() => setActiveImage(i)}
              aria-label={img.alt}
              aria-pressed={i === activeImage}
              className={cn(
                "relative size-16 shrink-0 overflow-hidden rounded-md bg-mist ring-2 transition-colors",
                i === activeImage ? "ring-ink" : "ring-transparent hover:ring-border",
              )}
            >
              <Image src={img.url} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && image && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label={tc("close")}
            className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <X className="size-5" />
          </button>

          <div
            className={cn(
              "relative max-h-full w-full max-w-2xl",
              hasMultiple && "cursor-pointer",
            )}
            style={{ aspectRatio: `${image.width} / ${image.height}` }}
            onClick={(e) => {
              e.stopPropagation();
              if (!hasMultiple) return;
              // Click side of the photo steps like the arrow buttons do —
              // left half = previous, right half = next.
              const rect = e.currentTarget.getBoundingClientRect();
              const clickedRight = e.clientX - rect.left > rect.width / 2;
              stepImage(clickedRight ? 1 : -1);
            }}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(min-width: 640px) 672px, 100vw"
              className="object-contain"
            />
          </div>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  stepImage(-1);
                }}
                aria-label={tp("previousImage")}
                className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-6"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  stepImage(1);
                }}
                aria-label={tp("nextImage")}
                className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-6"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
