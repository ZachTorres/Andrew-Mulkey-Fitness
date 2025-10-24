# Deployment Guide

## Deploying to Vercel (Recommended)

This website is optimized for **zero-configuration deployment** to Vercel. Follow these simple steps:

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click "Add New" → "Project"
3. Import the repository: `ZachTorres/Andrew-Mulkey-Fitness`
4. Vercel will automatically detect Next.js settings
5. Click "Deploy"
6. Your site will be live in ~2 minutes!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project directory
cd "Andrew-Mulkey-Fitness"

# Deploy
vercel

# For production deployment
vercel --prod
```

## Post-Deployment Steps

### 1. Custom Domain (Optional)
- In Vercel dashboard, go to your project → Settings → Domains
- Add your custom domain (e.g., `andrewmulkey.com`)
- Follow DNS configuration instructions

### 2. Environment Variables (If Needed)
Currently no environment variables are required. If you add form submission backend or analytics:
- Go to Settings → Environment Variables
- Add your variables
- Redeploy for changes to take effect

### 3. Performance Optimization
The site is already optimized with:
- Static generation for fast loading
- Image optimization built-in
- Automatic code splitting
- CDN distribution via Vercel Edge Network

## Continuous Deployment

Once deployed, any push to the `main` branch will automatically trigger a new deployment on Vercel.

### Preview Deployments
- Every pull request gets its own preview URL
- Test changes before merging to production

## Monitoring

Vercel provides built-in analytics:
- Go to your project dashboard
- Click "Analytics" to see traffic and performance
- Upgrade to Vercel Pro for advanced analytics

## Build Times

- Initial build: ~30 seconds
- Subsequent builds: ~15-20 seconds (with cache)

## Troubleshooting

### Build fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Test locally with `npm run build`

### Images not loading
- Images from external sources need HTTPS
- Update `next.config.ts` if adding new image domains

## Support

For deployment issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)

## Current Deployment Status

✅ Repository: https://github.com/ZachTorres/Andrew-Mulkey-Fitness
✅ Build Status: Passing
✅ Ready for Vercel deployment
