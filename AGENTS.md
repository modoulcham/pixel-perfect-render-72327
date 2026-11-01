# Project conventions

- Work photos live as real JPEG files in `src/assets/work/` and are imported statically in `src/lib/work-photos.ts`, which is the single shared source for the gallery and featured site images (Git sync pushes them to the repository).
- Display the supplied work-photo collection alongside administrator-uploaded photos so new uploads do not hide the original portfolio.