# Personal Website – Data Engineer Portfolio

Built with Vite + React + Tailwind CSS  
Includes: Markdown-based Blog & versioned footer  
Deployed to GitHub Pages using `/docs` folder.

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

---

## ✏️ Adding Blog Posts

Add new `.md` files in the `/posts` folder like:

```md
---
title: "Your Post Title"
date: "2025-03-29"
---

Your post content here.
```

Posts will appear automatically in the Blog section.

---

## 🚀 Deploy to GitHub Pages

Make sure GitHub Pages is set to serve from `main` branch → `/docs` folder.

Then:

```bash
chmod +x deploy.sh
./deploy.sh
```

Your site will be live at:  
➡️ https://liamnomad.github.io
