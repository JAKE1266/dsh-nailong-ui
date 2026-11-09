# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] - 2026-11-09

### Added

- Initial release: a Nailong-inspired (明黄 / egg-yolk yellow) theme for
  DeepSeek Harness Web.
- **208 semantic tokens** covering light and dark, with enforced key-set parity
  between the two palettes (`test/run-all.mjs` fails if a token is forgotten in
  dark mode).
- Brand palette: egg-yolk `#FFC629` / `#FFB300` with warm-orange accents
  `#FF9F1C` / `#F08000` on cream surfaces `#FFF8E7`.
- **Warm-brown text** `#4A3510` instead of pure black — black on a warm yellow
  ground reads harsh and dirty.
- **Dark theme uses deep warm brown** `#1A1610`, not cold black: bright yellow
  is glaring on pure black but reads like a night light on warm brown.
- **Rounded geometry throughout**: radii 8/12/16/20/24/26/28px with no 4px sharp
  corners; cartoon feel comes from the absence of sharp angles.
- **Springy motion**: `cubic-bezier(.34, 1.4, .64, 1)` gives an overshoot; pills
  and the send button lift-and-scale on hover and squash on press.
- Sidebar split: `#FBF1DA` (cream-yellow) vs `#FFFDF7` (cream) in light;
  `#15110C` vs `#1A1610` in dark.
- Warm-tinted shadows `rgba(120, 82, 10, …)` rather than neutral black.
- Scrollbars, brand-tinted `::selection`, brand-accented blockquotes, brand focus
  ring.
- Component layer via official `ctx.slots`: abstract rounded-dinosaur mark,
  hero mark, four quick-action pills, and an About page.
- Zero runtime and build dependencies; a zero-dep bundler produces the committed
  `client/client.js`.
- `scripts/preview.mjs`: renders the real skin CSS against a simulated layout
  via headless Edge.
- Self-contained verification suite (19 checks) and GitHub Actions CI.

### Compliance

- **No Nailong artwork is included.** No character art, no emoji, no official
  palette file, no logo. The plugin borrows only the abstract "bright yellow +
  rounded geometry" visual language — colours and corner radii are not
  copyrightable.
- The brand mark is a self-drawn *generic* rounded-dinosaur silhouette (circle
  head, two back spikes, two eyes). It is not a tracing of any specific
  character.
- All colours are **derived from visual inspection, not measured**. Nailong is a
  film/short-video IP with no published CSS design tokens; web searches found no
  authoritative colour specification. This is stated in the README,
  `docs/DESIGN.md`, the token file header, and the in-app About page.
