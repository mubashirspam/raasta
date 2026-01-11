# Raasta Realty - Deployment Guide

## Project Structure

This is a monorepo containing two applications:

- **`apps/web`** - Main website (Next.js)
- **`apps/studio`** - Sanity Studio admin panel

## Vercel Deployment Setup

### 1. Main Website (raastarealty.com)

**Create New Project in Vercel:**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import your GitHub repository: `mubashirspam/raasta`
4. Configure the project:
   - **Project Name**: `raasta-web`
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web`
   - **Build Command**: Leave default (uses vercel.json)
   - **Install Command**: Leave default (uses vercel.json)
   - **Output Directory**: Leave default

5. **Environment Variables** (if needed):

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

6. Deploy the project
7. Add custom domain: `raastarealty.com` and `www.raastarealty.com`

### 2. Admin Panel (admin.raastarealty.com)

**Create Second Project in Vercel:**

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" → "Project"
3. Import the SAME GitHub repository: `mubashirspam/raasta`
4. Configure the project:
   - **Project Name**: `raasta-admin`
   - **Framework Preset**: Other
   - **Root Directory**: `apps/studio`
   - **Build Command**: Leave default (uses vercel.json)
   - **Install Command**: Leave default (uses vercel.json)
   - **Output Directory**: `dist`

5. **Environment Variables**:

   ```
   SANITY_STUDIO_PROJECT_ID=your_project_id
   SANITY_STUDIO_DATASET=production
   ```

6. Deploy the project
7. Add custom domain: `admin.raastarealty.com`

## Domain Configuration

### DNS Settings (in your domain registrar)

**For raastarealty.com:**

```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For admin.raastarealty.com:**

```
Type: CNAME
Name: admin
Value: cname.vercel-dns.com
```

## Git Workflow

### Pushing to Main Branch

```bash
# Make sure you're on phase_3 branch
git checkout phase_3

# Pull latest main to avoid conflicts
git checkout main
git pull origin main

# Merge phase_3 into main
git merge phase_3

# Push to main
git push origin main
```

### If you get conflicts:

```bash
git pull origin main --rebase
# Resolve any conflicts
git add .
git rebase --continue
git push origin main
```

## Build Commands (Local Testing)

```bash
# Test web build
pnpm build:web

# Test studio build
pnpm build:studio

# Test both
pnpm build
```

## Deployment Triggers

- **Main Website**: Deploys automatically on push to `main` branch
- **Admin Panel**: Deploys automatically on push to `main` branch

Both projects will build independently from the same repository.

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Test build locally: `pnpm build:web` or `pnpm build:studio`

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
