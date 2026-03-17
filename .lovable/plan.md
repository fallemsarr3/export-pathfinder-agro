

# Plan: Add Canada zone image

## Problem
The Canada card on the Zones Export page displays a generic Globe icon placeholder instead of a photo, unlike the Africa and Europe cards which have real images.

## Solution
1. **Source a Canada image**: Copy a suitable warehouse/port/food import image to `src/assets/canada-warehouse.jpg` for the Canada card. Since no image was provided by the user, I'll need the user to provide one, OR we can use a publicly available royalty-free image.

2. **Update `src/pages/ZonesExport.tsx`** (lines 217-219): Replace the Globe icon placeholder with an `<img>` tag matching the pattern used for Africa (line 72-77) and Europe cards:
```tsx
// Replace:
<div className="relative h-48 overflow-hidden bg-secondary/10 flex items-center justify-center">
  <Globe className="w-16 h-16 text-secondary/40" />
  ...
</div>

// With:
<div className="relative h-48 overflow-hidden">
  <img src={canadaImage} alt="..." className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
</div>
```

## Question
Do you have a specific image to use for the Canada card, or should I find a suitable royalty-free one (e.g., a Canadian port, warehouse, or food market)?

**1 file modified:** `src/pages/ZonesExport.tsx`

