# Personal Website – Data Engineer Portfolio

Built with Vite + React + Tailwind CSS  
Deployed manually to GitHub Pages (username.github.io)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit: http://localhost:5173

## 🚀 Deploy to GitHub Pages

### SSH Setup (Recommended)

1. Generate an SSH key (if not already done):

```bash
ssh-keygen -t ed25519 -C "liam.nomad34@gmail.com"
```

2. Add your public SSH key to GitHub:  
Go to **Settings → SSH and GPG Keys → New SSH Key**

3. Change your remote URL to SSH:

```bash
git remote set-url origin git@github.com:LiamNomad/LiamNomad.github.io.git
```

---

### One-click deploy

You can use the provided `deploy.sh` script to build and deploy:

```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Steps (optional)

If you prefer to do it manually:
```bash
npm run build
cp -r dist/* ./
rm -rf dist
git add .
git commit -m "Manual deploy"
git push origin main
```

Then check your website live at:  
➡️ https://liamnomad.github.io
