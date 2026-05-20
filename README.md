# Churnfree — Pricing Landing Page

A faithful, responsive recreation of the Churnfree pricing page.

## Structure
```
churnfree-pricing/
├── index.html        # Page markup
├── css/styles.css    # All styles + @font-face declarations
├── js/script.js      # FAQ accordion behavior
├── fonts/            # Poppins (headings) + Manrope (body) TTFs
└── img/              # logo + placeholder avatar photos
```

## Run it
Because the fonts load via relative paths, open it through a local server
rather than double-clicking the file (browsers block local font files on file://).

VS Code: install the **Live Server** extension, right-click `index.html` → "Open with Live Server".

Or from a terminal in this folder:
```
python3 -m http.server 8000
```
then visit http://localhost:8000

## Fonts
- **Poppins** — headings / display
- **Manrope** — body text
- **Caveat** — handwritten script accents (loaded from Google Fonts via CDN)

## Notes
- The blog illustrations are inline SVG (no image files needed).
- Colors are defined as CSS variables in `:root` at the top of `styles.css`.
