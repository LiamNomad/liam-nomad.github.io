#!/bin/bash

echo "🚀 Building your website..."
npm run build

echo "🗂️  Copying build output to docs/ folder..."
rm -rf docs
cp -r dist docs

echo "📄 Staging changes..."
git add docs

echo "✅ Committing..."
git commit -m "Deploy website with blog to docs folder"

echo "⬆️ Pushing to GitHub..."
git push origin main

echo "🎉 Deployment complete! Your website should be live at https://liamnomad.github.io"
