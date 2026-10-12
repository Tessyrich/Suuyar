# Suuyar — website concept

A spec redesign of [suuyar.com](https://suuyar.com) for Suuyar, the Nigerian suya grill in Peckham (24A Peckham Rye, the Rye Lane stall, and Catford). Built as a pitch: one fast, mobile-first page that leads with the weekend buffet, the chef, and a readable menu, and keeps their existing TheFork booking widget as the reservation backend.

## Stack

- Next.js 16 (App Router, static output, Cache Components on)
- React 19, TypeScript
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- Motion (`motion/react`) for reveals, the menu tab indicator and the mobile nav
- lucide-react icons
- Fonts via `next/font`: Bricolage Grotesque (display), Geist (body), Instrument Serif (italic accents)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Where things live

| Path | What |
| --- | --- |
| `src/app/page.tsx` | Section order + Restaurant JSON-LD |
| `src/app/layout.tsx` | Fonts, metadata, viewport |
| `src/lib/data.ts` | Menu, prices, locations, hours, press quotes, contact, TheFork widget URL |
| `src/components/*` | One file per section (Hero, Ticker, Grill, Buffet, MenuSection, Story, Hire, Press, Locations, Booking, Footer) |
| `public/images` | Photos pulled from the client's current site, resized |
| `research/` | Audit of the current site and before/after screenshots |

All copy, prices and hours come from the client's own menu flyers and site as of October 2026. Edit `src/lib/data.ts` to change them.

## Known placeholders

- Hero photo is a grilled-fish shot from their site. A real shot of beef suya on the oil-drum grill would be stronger.
- The booking panel embeds TheFork's widget in an iframe. TheFork blocks headless browsers, so it shows as blank in automated screenshots but works in a normal browser.
- Instagram link points at the chef's personal account, which is what their current site links to.
