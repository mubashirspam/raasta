# 🔧 Fixing Form Submission Permission Error

## Problem

You're seeing this error:

```
Error creating contact submission: Error: transaction failed: Insufficient permissions; permission "create" required
```

## Solution

The forms need a **Sanity API Token** with write permissions to create submissions in your Sanity database.

### Step 1: Get Your Sanity API Token

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project (`raasta`)
3. Click on **API** in the sidebar
4. Click on **Tokens** tab
5. Click **Add API Token**
6. Fill in:
   - **Name**: `Production Write Token` (or any name you prefer)
   - **Permissions**: Select **Editor** (this allows read + write access)
7. Click **Add Token**
8. **COPY THE TOKEN** (you won't be able to see it again!)

### Step 2: Add Token to Your Project

1. Create a file named `.env.local` in your project root:

   ```bash
   touch .env.local
   ```

2. Add this line to `.env.local`:

   ```
   SANITY_API_TOKEN=your_copied_token_here
   ```

3. **Important**: Replace `your_copied_token_here` with the actual token you copied from Sanity

### Step 3: Restart Your Development Server

Stop your current server (Ctrl+C) and restart it:

```bash
pnpm run dev
```

### Step 4: Test the Forms

1. Go to your website (http://localhost:3000)
2. Try submitting a contact form or the consultation popup
3. Check Sanity Studio (`http://localhost:3000/studio`) → Form Submissions

You should now see the submissions appearing in Sanity! ✅

## Security Notes

- ✅ `.env.local` is already in `.gitignore` (won't be committed)
- ✅ The token is only used server-side (in API routes)
- ✅ Never expose your token in client-side code
- ✅ For production deployment, add `SANITY_API_TOKEN` to your hosting environment variables (Vercel, Netlify, etc.)

## Troubleshooting

### Still getting permission errors?

- Make sure the token has **Editor** permissions (not Viewer)
- Check that `.env.local` is in the project root (same level as `package.json`)
- Verify the token is correctly copy-pasted (no extra spaces)
- Restart your dev server after adding the token

### Token not working?

- The token might have been revoked - create a new one
- Make sure you're using the correct Sanity project ID

### Forms submitting but not appearing in Sanity?

- Check the browser console for errors
- Check the server terminal for error messages
- Verify the schema names match (`contactSubmission`, `consultationSubmission`)

## Need Help?

If you're still having issues, check:

1. Sanity Studio is accessible at `/studio`
2. You're logged into Sanity Studio
3. The schemas appear in Sanity Studio sidebar
4. Your Sanity project ID matches in `src/sanity/config.ts`
