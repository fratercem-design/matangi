# Images

Real artwork for the Temple. Everything here is served statically (no build step).
`next.config.ts` sets `images.unoptimized = true`, so any JPG/PNG/WebP works on Railway.

## Gallery artwork → `public/images/gallery/`

1. Drop a file, e.g. `public/images/gallery/raja-matangi.jpg`.
2. In `lib/gallery.ts`, add `image` to that item:

   ```ts
   {
     id: "raja-portrait",
     title: "Raja-Matangi",
     // ...
     image: "/images/gallery/raja-matangi.jpg",
   }
   ```

If `image` is omitted (or the file fails to load), the generative SVG artwork
is shown instead — so the gallery always looks intentional.

Recommended: portrait orientation, ~1000×1250px (4:5), under ~400 KB each.

## Page hero backgrounds → `public/images/heroes/`

Pass `image` to any `<PageHero>` (e.g. in `app/about/page.tsx`):

```tsx
<PageHero title="Who Is" titleAccent="Matangi" image="/images/heroes/about.jpg" />
```

The image renders at 30% opacity under a dark gradient so text stays readable.
Recommended: wide/landscape, ~1920×1080px.
