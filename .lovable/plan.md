

# Plan: Uniformize CTA buttons on Zones Export page

## Problem
The three zone CTA buttons have inconsistent sizes and styling. The Canada button has explicit sizing (`text-base font-semibold px-6 py-3 h-auto`), while Africa and Europe buttons rely on their variant defaults which are smaller.

## Solution
Update all three buttons in `src/pages/ZonesExport.tsx` to use the same explicit sizing classes, matching the Canada button style. Use `mt-auto` on a flex container to align them at the bottom of each card.

### Changes in `src/pages/ZonesExport.tsx`:

1. **Africa button (line 133):** Add `text-base font-semibold px-6 py-3 h-auto shadow-soft hover:shadow-elegant`
2. **Europe button (line 206):** Add `text-base font-semibold px-6 py-3 h-auto shadow-soft hover:shadow-elegant`  
3. **Ensure card content containers use `flex flex-col h-full`** so `mt-auto` on buttons pushes them to the same vertical position across all three cards.

This ensures all three buttons are the same height, same font size, and vertically aligned regardless of content length above them.

