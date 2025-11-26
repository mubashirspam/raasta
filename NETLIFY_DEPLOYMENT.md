# Netlify Deployment Guide for Raasta Realty

## Prerequisites

- Netlify account connected to your GitHub repository
- Sanity project credentials

## Environment Variables Setup

Go to your Netlify site dashboard → **Site settings** → **Environment variables** and add the following:

### Required Variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=8dj8qon7
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Optional (if using authenticated Sanity requests):

```
SANITY_API_TOKEN=your_sanity_token_here
```

## Build Settings

The `netlify.toml` file is already configured with:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 20
- **Next.js plugin**: Enabled

## Deployment Steps

1. **Push your code to GitHub** (already done)

   ```bash
   git add .
   git commit -m "Add Netlify configuration"
   git push origin main
   ```

2. **In Netlify Dashboard**:
   - Go to **Site configuration** → **Environment variables**
   - Add all the environment variables listed above
   - Go to **Deploys** → **Trigger deploy** → **Deploy site**

3. **Verify deployment**:
   - Check the deploy logs for any errors
   - Visit your site URL to confirm it's working

## Common Issues & Solutions

### Issue: "An unknown error has occurred"

**Solution**: Check that all environment variables are set correctly in Netlify dashboard.

### Issue: Build fails with module errors

**Solution**: Clear cache and retry deployment:

- Go to **Deploys** → **Deploy settings** → **Clear cache and retry deploy**

### Issue: Images not loading

**Solution**: Verify `next.config.ts` has correct image domains configured.

### Issue: Sanity content not showing

**Solution**:

- Verify Sanity project ID and dataset are correct
- Check that Sanity project is published and accessible
- Ensure API version is set

## Testing Locally Before Deploy

```bash
# Build the project
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to test the production build locally.

## Support

If issues persist:

1. Check Netlify deploy logs for specific errors
2. Verify all environment variables are set
3. Ensure your Sanity project is accessible
4. Check that the build completes successfully locally

## Next Steps After Successful Deployment

- Set up custom domain (if needed)
- Configure SSL certificate (automatic with Netlify)
- Set up form submissions (if using Netlify Forms)
- Configure redirects and headers (if needed)
