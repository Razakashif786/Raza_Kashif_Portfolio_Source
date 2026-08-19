# Raza Kashif — Portfolio

A single-page portfolio styled as a personal CI test suite — sticky pipeline navigation,
test-case-formatted experience section, animated pass-rate chart, and count-up stats.

No build tools, no npm install, no framework. Plain HTML, CSS, and JavaScript — it will
run forever with zero maintenance.

## Files

```
portfolio/
├── index.html     → structure & content (edit text here)
├── styles.css      → all visual styling, colors, animations
├── script.js       → data arrays + interactivity (pipeline nav, reveals, stats, etc.)
└── README.md       → this file
```

Keep all three files in the same folder — `index.html` loads the other two by relative
path (`<link href="styles.css">` and `<script src="script.js">`), so if you move one, move
all three together.

---

## 1. Preview it locally

### Option A — just double-click it (fastest)
Double-click `index.html`. It opens in your default browser and works fully — animations,
hover effects, and the pipeline nav all run fine directly from disk.

### Option B — run a local server (recommended if you plan to keep editing)
Opening via `file://` works, but a local server behaves closer to how it'll act once
deployed, and avoids occasional browser restrictions on local files. Pick whichever you
already have:

**Using Node.js** (you already have this, per your stack):
```bash
cd portfolio
npx serve .
```
Then open the URL it prints (usually `http://localhost:3000`).

**Using Python** (also fine if installed):
```bash
cd portfolio
python3 -m http.server 5500
```
Then open `http://localhost:5500`.

**Using VS Code:**
Install the **Live Server** extension → right-click `index.html` → "Open with Live Server".
This also auto-refreshes the page whenever you save a file, which is the most convenient
option while you're actively editing.

---

## 2. Editing content

Everything you're likely to change lives in **`script.js`**, at the top, as plain data
arrays — you don't need to touch the HTML or CSS to update your info:

| What you want to change            | Where in `script.js`      |
|-------------------------------------|----------------------------|
| Job titles, dates, pipeline labels  | `STAGES`                   |
| Hero terminal lines                 | `HERO_LINES`               |
| Experience step-by-step bullets     | `EXPERIENCE_STEPS`         |
| Skills grouped by category          | `SKILL_GROUPS`             |
| Project cards                       | `PROJECTS`                 |
| Certifications                      | `CERTIFICATIONS`           |
| Awards/recognition pills            | `RECOGNITION`               |

For anything that isn't data-driven — your name, role line, email, phone, LinkedIn URL,
location — search for the text directly in `index.html` (they're plain, readable HTML,
no templating).

**Colors, fonts, spacing, animations** all live in `styles.css`. The main palette is
defined once at the top as CSS variables:

```css
:root {
  --teal: #2dd4bf;   /* pass / success accent */
  --amber: #fbbf24;  /* active / in-progress accent */
  --rose: #fb7185;   /* "before" state, used sparingly */
  ...
}
```
Change a value here and it updates everywhere that color is used.

---

## 3. Putting it online (optional)

Once you're happy with it, here are the three easiest free options — no server
management, no cost:

### GitHub Pages (good if you want a `github.io` link)
```bash
# inside the portfolio folder
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```
Then on GitHub: **Settings → Pages → Source: `main` branch, `/ (root)`** → Save.
Your site goes live at `https://<your-username>.github.io/portfolio/`.

### Netlify (fastest — drag and drop, no git required)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `portfolio` folder onto the page
3. Done — it gives you a live URL instantly, and you can rename it in site settings

### Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repo (if you pushed it there) or drag-and-drop the folder
3. Deploy — no configuration needed since there's no build step

Any of these three work well; Netlify's drag-and-drop is the fastest if you just want a
link to share today, GitHub Pages is nice if you're already comfortable with git.

---

## 4. A note on browser support

Everything here — CSS Grid, `IntersectionObserver`, CSS custom properties — has been
supported in Chrome, Firefox, Edge, and Safari for years. This will work correctly in any
modern browser without polyfills or transpilation.
