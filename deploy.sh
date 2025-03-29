#!/bin/bash

echo "🚀 Building your website..."
npm run build

echo "🗂️  Copying build output to root directory..."
cp -r dist/* ./

echo "🧹 Cleaning up dist folder..."
rm -rf dist

echo "📄 Staging changes..."
git add .

echo "✅ Committing..."
git commit -m "Manual deploy of personal website"

echo "⬆️ Pushing to GitHub..."
git push origin main

echo "🎉 Deployment complete! Your website should be live at https://liamnomad.github.io"
