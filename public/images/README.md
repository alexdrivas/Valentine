# Your photos

Add your own images here and they’ll show up in the Valentine page:

- **us-1.jpg** – first photo
- **us-2.jpg** – second photo  
- **us-3.jpg** – third photo

Use large, portrait-style images (e.g. 800×1000px or similar) for best results.

After adding the files, update `IMAGE_SRCS` in `src/app/components/ValentinePage.tsx` to use local paths:

```ts
const IMAGE_SRCS = ["/images/us-1.jpg", "/images/us-2.jpg", "/images/us-3.jpg"];
```

Until then, the app uses placeholder images so it runs without any files here.
