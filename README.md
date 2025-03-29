# Personal Website – Data Engineer Portfolio

Built with Vite + React + Tailwind CSS  
Deployed manually to GitHub Pages (username.github.io)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

## 🔧 Configuration

Make sure `vite.config.js` is set with:
```js
base: '/'
```

Check that your `index.html` does **not** contain hardcoded paths like `/LiamNomad.github.io/assets/...`

## 🚀 Deploy to GitHub Pages (User Page)

### One-click deploy via SSH

```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deploy (Alternative)

```bash
npm run build
cp -r dist/* ./
rm -rf dist
git add .
git commit -m "Deploy manually"
git push origin main
```

Then visit 👉 https://liamnomad.github.io
