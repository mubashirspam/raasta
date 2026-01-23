# Quick Setup Guide - Sanity Webhook Revalidation

## What You Need to Do After Deployment

### 1️⃣ Add Secret to Vercel (2 minutes)

1. Open Vercel Dashboard: https://vercel.com
2. Go to your project → **Settings** → **Environment Variables**
3. Click **Add New**
4. Fill in:
   ```
   Name: REVALIDATION_SECRET
   Value: raasta-realty-webhook-secret-2026
   ```
   (You can use any random string you want)
5. Select all environments (Production, Preview, Development)
6. Click **Save**
7. **Important:** Go to **Deployments** → Click **Redeploy** (needed for env var to work)

---

### 2️⃣ Configure Sanity Webhook (3 minutes)

1. Open Sanity Dashboard: https://sanity.io/manage
2. Select your **Raasta Realty** project
3. Go to **API** tab → **Webhooks**
4. Click **+ Create webhook**
5. Fill in the form:

   **Name:**

   ```
   Vercel Revalidation
   ```

   **URL:** (Replace YOUR-SITE with your actual Vercel URL)

   ```
   https://YOUR-SITE.vercel.app/api/revalidate?secret=raasta-realty-webhook-secret-2026
   ```

   Example: `https://raasta-realty.vercel.app/api/revalidate?secret=raasta-realty-webhook-secret-2026`

   **Dataset:**

   ```
   production
   ```

   **Trigger on:**
   - ✅ Create
   - ✅ Update
   - ✅ Delete

   **HTTP method:**

   ```
   POST
   ```

   **API version:**

   ```
   v2021-06-07
   ```

   **Include drafts:**

   ```
   No (unchecked)
   ```

   **Filter (optional but recommended):**

   ```groq
   _type in ["testimonial", "property", "agent", "teamMember", "developer", "galleryItem"]
   ```

6. Click **Save**

---

### 3️⃣ Test It! (1 minute)

1. Go to your Sanity Studio: `your-site.com/studio`
2. Edit any testimonial or property
3. Click **Publish**
4. Go to Sanity Dashboard → API → Webhooks → Click on your webhook
5. Check **Deliveries** tab - should show a successful delivery (green checkmark, 200 status)
6. Refresh your website - new content should appear immediately!

---

## That's It! 🎉

Now whenever you publish content in Sanity:

- ✅ Webhook automatically triggers
- ✅ Website regenerates affected pages
- ✅ New content appears instantly
- ✅ No manual rebuilds needed
- ✅ Minimal API usage (only when you publish)

---

## Quick Test Command

Test if the webhook endpoint is working:

```bash
curl "https://YOUR-SITE.vercel.app/api/revalidate?secret=raasta-realty-webhook-secret-2026"
```

Should return:

```json
{
  "message": "Revalidation endpoint is working",
  "usage": "Send POST request with Sanity webhook payload"
}
```

---

## Need Help?

If webhook shows errors in Sanity:

1. Check the secret matches in both Vercel env var and webhook URL
2. Make sure you redeployed after adding the env var
3. Check Vercel function logs for error messages
4. Try the curl test command above

---

**Remember:** The secret in the webhook URL must match the `REVALIDATION_SECRET` in Vercel!
