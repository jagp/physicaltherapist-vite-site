/* Ambient types for vite-imagetools query imports.
   `?...&as=srcset` returns a ready srcset string; a plain format query
   returns the emitted asset URL. */
declare module '*&as=srcset' {
  const srcset: string;
  export default srcset;
}
declare module '*&format=jpeg' {
  const src: string;
  export default src;
}
declare module '*&format=webp' {
  const src: string;
  export default src;
}
