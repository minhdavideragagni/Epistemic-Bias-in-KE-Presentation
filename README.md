# Making Epistemic Bias Explicit — Reveal.js prototype

First visual/narrative prototype for the introduction of the PhD Research Proposal presentation.

## What is in this prototype

- 10 slides: title + conceptual introduction + first slide of the PhD framework.
- Reveal.js 5.2.1.
- Visual language adapted from the INFINITY Media Kit: dark `#282828`, off-white `#F0F0F0`, yellow `#FFDC64`, green `#6EB98C`, purple `#B48CD7`, pink `#EB6E8C`; Roboto + Instrument Serif.
- Abstract geometric icons drawn as inline SVG/CSS.
- A persistent pulsing red dot used as the narrative representation of a possible bias signal. Its position animates between slides.
- Speaker notes (`S` in Reveal.js) with a short speaking cue and sources.

## Local preview

This first prototype loads Reveal.js and the web fonts from CDNs, so an internet connection is required.

```bash
cd epistemic-bias-reveal-prototype
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

Navigation:

- Arrow keys: next / previous
- `Esc`: overview
- `S`: speaker notes
- `F`: fullscreen (browser support permitting)

## Publish on Codeberg Pages

Codeberg's current Pages service supports repository websites from a public repository with a `pages` branch and a Forgejo webhook.

1. Create a public Codeberg repository, e.g. `epistemic-bias-slides`.
2. Push these files to a branch called `pages`.
3. Repository → **Settings → Webhooks → Add webhook → Forgejo**.
4. Target URL: `https://YOUR-USERNAME.codeberg.page/epistemic-bias-slides/`
5. Branch filter: `pages`.
6. Push an update to the `pages` branch.

Official documentation: https://docs.codeberg.org/codeberg-pages/

## Publish on GitHub Pages

1. Create a repository and push these files.
2. Repository → **Settings → Pages**.
3. Select deployment from a branch and choose the repository root.

## Next iteration

For the final conference/panel version I recommend vendoring Reveal.js locally instead of using a CDN, so the deck works fully offline. The current prototype intentionally keeps the repository small while we agree on the narrative and visual language.
