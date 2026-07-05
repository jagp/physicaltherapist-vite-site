/* One reviewed home for the responsive-image rules:
   AVIF → WebP → JPEG cascade, srcset/sizes, intrinsic dimensions (CLS),
   and the LCP-vs-lazy policy. Pages never hand-write <picture>. */

interface ResponsiveImageProps {
  /** srcset string for AVIF sources (from `?...&format=avif&as=srcset`). */
  avifSrcSet: string;
  /** srcset string for WebP sources. */
  webpSrcSet: string;
  /** Fallback URL (JPEG/PNG) for the plain <img>. */
  src: string;
  /** Truthful layout sizes, written against the real CSS. */
  sizes: string;
  alt: string;
  /** Intrinsic pixel dimensions of the fallback asset (reserves ratio). */
  width: number;
  height: number;
  /** The page's LCP image: fetchpriority=high and never lazy. One per page. */
  priority?: boolean;
  className?: string;
}

export function ResponsiveImage({
  avifSrcSet,
  webpSrcSet,
  src,
  sizes,
  alt,
  width,
  height,
  priority = false,
  className,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={src}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        fetchPriority={priority ? 'high' : undefined}
        loading={priority ? undefined : 'lazy'}
        decoding={priority ? undefined : 'async'}
        className={className}
      />
    </picture>
  );
}
