# 🚀 Dev Portfolio — React

A modern, responsive, dark-themed developer portfolio website.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## ✏️ Personalising (Takes 5 minutes!)

**Edit `src/portfolioData.js`** — this single file controls EVERYTHING:

| Field | What to change |
|-------|---------------|
| `personal` | Your name, title, email, social links, bio |
| `education` | Your college/school details, grades, subjects |
| `skills` | Your tech skills by category |
| `projects` | Your projects with descriptions, tech, links |
| `experience` | Your work/internship history |
| `achievements` | Awards, hackathons, highlights |
| `stats` | Numbers to show on the hero section |

## 📁 Adding Your Content

### Profile Photo
Set `personal.avatar` in `portfolioData.js` to your image URL or place it in `/public/` folder.

### Resume PDF
1. Place your resume as `resume.pdf` in the `/public/` folder
2. The download button will automatically work

### Project Images & Videos
In `portfolioData.js`, for each project add:
```js
images: ["/projects/myapp1.png", "/projects/myapp2.png"],
video: "/projects/demo.mp4",  // optional
```
Place files in the `/public/projects/` folder.

## 🎨 Customising Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #7c6aff;   /* Purple — main accent */
  --accent2: #ff6b6b;  /* Red — secondary */
  --accent3: #00d4aa;  /* Green — status/success */
}
```

## 📬 Contact Form
The form currently opens the default mail client. To use a proper backend:
- **Formspree**: Replace the `handleSubmit` function in `Contact.js`
- **EmailJS**: Add the EmailJS SDK and configure credentials

## 🌐 Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag & drop the /build folder to netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add "homepage": "https://yourusername.github.io/portfolio" to package.json
npm run build && npx gh-pages -d build
```

## 📦 Tech Stack
- React 18
- Pure CSS (no UI library — fully custom)
- Google Fonts (Syne + DM Mono + Instrument Serif)
- No external dependencies beyond React

---
Made with ❤️ — edit `portfolioData.js` and it's yours!
