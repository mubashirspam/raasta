# Raasta Realty - Deployment Guide

## Project Structure
Single Next.js application with embedded Sanity Studio:
- **Website**: `raastarealty.com`
- **Admin Panel**: `raastarealty.com/studio`

## Vercel Deployment Setup

### Single Project Deployment

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your existing project or create new
3. Import your GitHub repository: `mubashirspam/raasta`
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: Leave empty (project root)
   - **Build Command**: `pnpm build`
   - **Install Command**: `pnpm install`

5. Deploy the project
6. Add custom domains:
   - `raastarealty.com`
   - `www.raastarealty.com`

## Access Points

- **Main Website**: `https://raastarealty.com`
- **Admin Panel (CMS)**: `https://raastarealty.com/studio`

## Domain Configuration

### DNS Settings (in your domain registrar)

```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Build Commands (Local Testing)

```bash
# Install dependencies
pnpm install

# Development
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start
```

## Deployment Triggers

- Auto-deploys on push to `main` branch

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Test build locally: `pnpm build`

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Check DNS settings in domain registrar
- Verify domain is added in Vercel project settings

### Images Not Loading
- Ensure `next.config.js` has correct image domains
- Check Unsplash is in remotePatterns

## Contact Information
- WhatsApp: +971 52 936 8338
- Email: Connect@raastarealty.com
- Address: 1610, 16th Floor, The Prism Tower, Business Bay, Dubai, UAE
