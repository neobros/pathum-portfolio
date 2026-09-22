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
public/favicon.svg           PT monogram site icon
public/assets/                the two photos (see Assets below)
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
| Page load | Terminal boot log — laravel / node / mysql / redis / socket.io / api resolve one per tick from a pulsing dot to a green check, then the whole panel slides up off screen |
| Cursor | White dot tracks instantly, ring lags on a spring and swells over anything clickable (desktop only) |
| Background | Three blurred colour orbs on slow loops, plus film grain |
| Nav | Drops in on load; the active pill slides between items via `layoutId`; blurs into glass once you scroll |
| Hero name | "Pathum" / "Thennakoon" rise out of a clipping mask, surname in gradient |
| Hero role | Typewriter cycling four titles |
| **Portrait** | Reveals with a bottom-up clip-path wipe, then floats on a 6.5s bob; follows the mouse with a 3D tilt; a light bar scans across it; bottom edge fades into the page |
| **Tech icons** | Two counter-rotating orbit rings around the portrait — each icon pops in on a spring and counter-spins so it stays upright. Radius shrinks per breakpoint |
| **Code cards** | Three syntax-highlighted snippets float on independent drift loops |
| Marquee | Infinite tech strip, pauses on hover |
| Section headings | Word-by-word rise from a mask |
| Cards | Stagger in with a blur-to-sharp reveal; lift on hover; a highlight follows the cursor across the surface |
| Headshot | Framed in a gradient hairline; slow zoom on hover, role pill with a live dot |
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

Built from **CV_Pathum Thennakoon.pdf** (the 5+ years version). What changed from
the earlier draft, in case you compare them:

- Title is now **Software Engineer**, not "Backend Software Engineer" — the
  profile leads with full-stack and *focuses* on backend. That string drives the
  page title, OG tags, the manifest and the About pill, so it is set once in
  `profile.role`.
- **4 years -> 5+ years**, reflected in the stats, hero copy and section headings.
- **Payment Notification & Payout System is gone** — it is not in this CV. The
  earlier duplicate-listing problem no longer applies.
- **Inventory & Order Management System now has its own real bullets**, replacing
  the placeholder text I had written when the old CV pasted the payout bullets
  into it. Nothing invented remains in the projects.
- **New project: Construction Workforce & Job Management Platform (UK)** —
  multi-tenant, .NET + React, Socket.IO chat, AI chatbot, SMTP. It carries a
  `region` field that renders as the "UK" tag on the card.
- **New tech surfaced across the site**: .NET, Python, PostgreSQL, AWS, CI/CD,
  MetaMask. The hero orbit, marquee and preloader boot log were re-picked to
  match, so the icons reflect the stack actually listed in the CV.
- **Address dropped to just "Sri Lanka"** — that is all this CV gives. The old
  full street address is no longer shown anywhere.

The four stat tiles are now derived from the CV rather than invented: 5+ years,
4 employers, 4 projects listed, and 15+ distinct technologies counted across the
per-role technology stacks.

## Assets

| File | Use |
|---|---|
| `public/favicon.svg` | circular headshot in a gradient ring (photo embedded as base64 WebP) — the site icon |
| `public/assets/pathum.webp` | transparent standing cut-out, hero |
| `public/assets/pathum-profile.webp` | 512px circular cut-out, About portrait |
| `public/assets/pathum-avatar.webp` | 128px circular cut-out, navbar + footer mark |
| `public/icon-*.webp`, `apple-touch-icon.png` | PWA / iOS icons, generated from the same photo |
| `public/site.webmanifest` | installable-app metadata |

All three photos are WebP. Paths are set in `src/data/content.js` (`profile.photo`,
`profile.avatar` and `profile.mark`); the favicon is referenced from `index.html`.
