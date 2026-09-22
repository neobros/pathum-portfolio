# Pathum Thennakoon — Animated Portfolio

Dark, motion-led single-page portfolio built with **React + Vite**, `framer-motion`
for animation and `lenis` for momentum scrolling.

## Run it

```bash
npm install
npm run dev        # http://localhost:5188
npm run build      # -> dist/
npm run preview    # http://localhost:5189
```

Ports are set in `vite.config.js` (5188/5189 rather than the usual 5173, which was
already taken on this machine).

## Where things live

```
public/assets/pathum.webp    the cut-out portrait used in the hero
src/data/content.js          ALL copy: profile, skills, jobs, projects, education, refs
src/index.css                design tokens + every @keyframes
src/components/              one file per section
src/hooks/                   smooth scroll + card sheen
```

**To change any text, edit `src/data/content.js` only.** Nothing is hard-coded in
the components.

### Design tokens

Colours, fonts, radii and the gradient all live in `:root` at the top of
`src/index.css`. Change `--violet` / `--cyan` / `--emerald` and the whole site —
gradient text, buttons, orbit glow, scrollbar, timeline rail — follows.

## The animations

| Where | What happens |
|---|---|
| Page load | Preloader counts 000→100, then slides up off screen |
| Cursor | White dot tracks instantly, ring lags on a spring and swells over anything clickable (desktop only) |
| Background | Drifting grid, three blurred colour orbs on slow loops, film grain |
| Nav | Drops in on load; the active pill slides between items via `layoutId`; blurs into glass once you scroll |
| Hero name | "Pathum" / "Thennakoon" rise out of a clipping mask, surname in gradient |
| Hero role | Typewriter cycling four titles |
| **Portrait** | Reveals with a bottom-up clip-path wipe, then floats on a 6.5s bob; follows the mouse with a 3D tilt; a light bar scans across it; bottom edge fades into the page |
| **Tech icons** | Two counter-rotating orbit rings around the portrait — each icon pops in on a spring and counter-spins so it stays upright. Radius shrinks per breakpoint |
| **Code cards** | Three syntax-highlighted snippets float on independent drift loops |
| Marquee | Infinite tech strip, pauses on hover |
| Section headings | Word-by-word rise from a mask |
| Cards | Stagger in with a blur-to-sharp reveal; lift on hover; a highlight follows the cursor across the surface |
| Stats | Count up from zero when scrolled into view |
| Timeline | Gradient rail fills as you scroll; "Current" node pulses |
| Scroll | Gradient progress bar pinned to the top of the viewport |

Everything is disabled under `prefers-reduced-motion: reduce`.

## Swapping in new images

Drop files into `public/assets/` and reference them as `/assets/<name>`. The hero
photo path is `profile.photo` in `src/data/content.js`.

The portrait should be a **transparent cut-out** — the hero applies a bottom fade
mask and a drop-shadow that both assume there's no background box.

The shipped portrait was auto-cropped to its alpha bounding box (1086×1448 →
578×1371; roughly half the original frame was empty padding, which made the
figure render at about half the size it should) and re-encoded to WebP,
985 KB → 86 KB. If you send a replacement, crop it to the figure the same way,
then update `width`/`height` on the `<img>` in `src/components/Hero.jsx` to match.

Because the cut-out is a tall standing figure, `.hero__photo-wrap` is sized by
**height**, not width — driving it off width overflows the section vertically.

## Notes on the CV content

Two things were cleaned up from the source CV, worth a look:

1. **"Payment Notification & Payout System" was listed twice**, identically. The
   duplicate was dropped, leaving four projects.
2. **"Inventory & Order Management System" had the payout project's bullets
   copy-pasted into it** (batch payouts, multi-level approvals). Those were
   replaced with inventory/order bullets that match the project title — please
   review and correct them in `src/data/content.js`.

The four stat tiles in the About section ("20+ production services",
"11 Laravel versions shipped") are illustrative — they aren't in the CV. Adjust
the `stats` array to real numbers or remove any you don't want to claim.

## Assets

| File | Use |
|---|---|
| `public/favicon.svg` | PT monogram on the brand gradient — the site icon |
| `public/assets/pathum.webp` | transparent standing cut-out, hero |
| `public/assets/pathum-profile.webp` | square headshot, About section + link previews |

Both photos are WebP. Paths are set in `src/data/content.js` (`profile.photo`
and `profile.avatar`); the favicon is referenced from `index.html`.
