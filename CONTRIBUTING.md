# Contributing

Thanks for taking the time. This plugin is deliberately small; the main rule is
**don't make it depend on anything**.

## Setup

```bash
git clone https://github.com/JAKE1266/dsh-nailong-ui.git
cd dsh-nailong-ui
node scripts/build.mjs
node test/run-all.mjs
```

No `npm install`. Zero dependencies; the built artifact `client/client.js` is
committed.

## The one workflow rule

`src/*.mjs` are the **source**; `client/client.js` is **generated**. After any
change to `src/`:

```bash
node scripts/build.mjs && node test/run-all.mjs
```

CI rejects a PR where the committed artifact differs from a fresh build.

## Version consistency

Three places must agree, and the test suite enforces it:

| Location | Purpose |
| --- | --- |
| `package.json` → `version` | npm / marketplace |
| `src/tokens.mjs` → `SKIN_VERSION` | injected as `<html data-dsh-nailong-skin>` |
| `client/client.js` | the embedded value (proves you rebuilt) |

Plus `CHANGELOG.md` must contain a `## [version]` section.

## Changing colours

Everything lives in `src/tokens.mjs`. **Hard requirement:** the light and dark
palettes must have identical key sets — the test suite fails otherwise.

### Provenance discipline (important for this plugin)

This theme's colours are **derived, not measured** — Nailong has no published CSS
tokens. See `docs/DESIGN.md` §0.

If you ever obtain authoritative values, say so explicitly in the PR and update
`docs/DESIGN.md` plus the header comment in `src/tokens.mjs`. Do not silently
upgrade a derived value to look measured — the whole point of the current
labelling is that readers can tell the difference.

## Rules for selectors

1. **Never target a DSH CSS Module hash class name.** Use `:root`, `body`, or a
   `data-*` anchor.
2. Only use anchors listed as measured in `docs/DESIGN.md` §3.
3. Prefer a token override over an element rule.
4. Do not override `:focus-visible` outlines directly; override
   `--dsw-focus-ring-color` instead.
5. Never guess message roles (user vs AI).

## Compliance rules (specific to this plugin)

- **Never add character artwork.** No images, no emoji, no traced outlines of
  Nailong, no official palette files.
- The brand mark must stay a *generic* silhouette. If a proposed change makes it
  recognisable as a specific copyrighted character, it will be rejected.
- Keep the "derived, not measured" labelling in all four places (README,
  CHANGELOG, token header, in-app About page).

## Safety

The DSH client loader does not isolate entry factories: one throwing factory can
white-screen the whole shell. Therefore:

- Keep every initialization path inside `try`.
- Any missing host capability must degrade to an inert module, not throw.
- **Never `require('react')` at module top level** — use `bindReact()`.
- **Never `module.exports = {...}`** in `src/client.mjs` — the bundler fails the
  build if you do.
- `ctx.effect` must return a teardown that removes the style tags.

## Tests

Add a check to `test/run-all.mjs` for any new invariant. Keep it dependency-free
(`node:assert`, `node:fs`, `node:path`, `node:vm` only).
