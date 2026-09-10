# AURA | Digital Engineering Experience Platform

AURA is a product-minded digital engineering platform and portfolio. It serves as an architectural showcase, technical laboratory, and central node for digital interactions.

Built with Next.js 15+ (App Router), React, Tailwind CSS v4, Framer Motion, and React Three Fiber.

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
npm run start
```

## 🚢 Production Release (Vercel Deployment)

To deploy AURA to production, follow these manual steps:

1. **Push to GitHub**:
   Push this codebase to a public or private repository on your GitHub account.
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for AURA platform"
   git branch -M main
   git remote add origin https://github.com/aryan-dhandhukiya/aura-platform.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel.com](https://vercel.com/) and log in with your GitHub account.
   - Click **Add New** > **Project**.
   - Import your newly created `aura-platform` repository.
   - Vercel will automatically detect the Next.js framework. Leave the Build and Output Settings as default.

3. **Deploy**:
   - Click **Deploy**. Vercel will run `npm run build` (which automatically executes the `prebuild` script to fetch GitHub mock data and generates the static routes).
   - Once complete, you will be assigned a `.vercel.app` production domain.

## 🛠 Future Configurations (Post-MVP)

- **Contact Form (Resend/SendGrid)**: Update `src/app/api/contact/route.ts` with your actual email service API logic and add the required API keys to your Vercel Environment Variables.
- **GitHub Integration**: If you wish to fetch live data instead of mock data, update `scripts/fetch-github-data.ts` to use `fetch` with a GitHub Personal Access Token (PAT). Add `GITHUB_TOKEN` to your Vercel Environment Variables.

---
*Built with architecture in mind. Build. Learn. Evolve. Repeat.*
