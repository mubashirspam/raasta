# Form Submissions System Documentation

## Overview

This system integrates all form submissions (Contact Form, Contact Modal, and Offer Popup) with Sanity CMS for centralized management, filtering, and export capabilities.

## Architecture

### 1. Components Structure

#### Forms

- **`ContactForm`** (`src/app/home/forms/ContactForm.tsx`)
  - Used in multiple locations across the site
  - Source can be `contact_form` or `contact_modal`
  - Shared component for consistent UX
- **`ContactModal`** (`src/app/home/ui/ContactModal.tsx`)
  - Uses `ContactForm` component with `source="contact_modal"`
  - Auto-closes on successful submission
- **`OffersPopup`** (`src/app/home/ui/OffersPopup.tsx`)
  - Independent form for offer submissions
  - Stores data separately in Sanity

### 2. API Routes

#### Contact Form Submission

**Endpoint:** `/api/submit-contact`

**Request Body:**

```json
{
  "fullName": "string",
  "email": "string",
  "countryCode": "string",
  "phone": "string",
  "purpose": "investment" | "career",
  "budgetRange": "string",
  "source": "contact_form" | "contact_modal"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Form submitted successfully",
  "submissionId": "string"
}
```

#### Offer Popup Submission

**Endpoint:** `/api/submit-offer`

**Request Body:**

```json
{
  "name": "string",
  "phone": "string",
  "email": "string",
  "budget": "string"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Form submitted successfully",
  "submissionId": "string"
}
```

### 3. Sanity Schemas

#### Contact Submission (`contactSubmission`)

Stores all contact form submissions with:

- Contact Information (fullName, email, phone, countryCode)
- Purpose (investment or career)
- Budget Range
- Source (contact_form or contact_modal)
- Status (new, contacted, qualified, converted, closed)
- Internal Notes
- Metadata (submittedAt, ipAddress, userAgent)

#### Offer Submission (`offerSubmission`)

Stores offer popup submissions with:

- Contact Information (name, email, phone)
- Budget Range
- Status (new, contacted, qualified, converted, closed)
- Internal Notes
- Metadata (submittedAt, ipAddress, userAgent)

### 4. Sanity Studio Organization

The Sanity Studio (`/studio`) has a custom desk structure that organizes content:

```
📁 Form Submissions
  ├─ 📄 Contact Submissions
  └─ 🎁 Offer Popup Submissions
─────────────────────────
🏢 Properties
👥 Agents
💼 Team Members
🖼️ Gallery
⭐ Testimonials
🏗️ Developers
```

## Features

### 1. Status Tracking

Each submission has a status field:

- **New**: Just submitted
- **Contacted**: Team has reached out
- **Qualified**: Verified as valid lead
- **Converted**: Became a client
- **Closed**: No longer active

### 2. Filtering & Search

In Sanity Studio, you can:

- Filter by date range
- Filter by status
- Filter by source (for contact submissions)
- Search by name, email, or phone
- Sort by submission date

### 3. Internal Notes

Add notes to any submission for team communication and follow-up tracking.

### 4. Metadata Tracking

Automatic capture of:

- Submission timestamp
- User's IP address
- Browser/device information (User Agent)

## Accessing Form Submissions

### In Sanity Studio

1. **Navigate to `/studio`** in your browser
2. **Click "Form Submissions"** in the left sidebar
3. **Choose the submission type:**
   - Contact Submissions (from contact form and modal)
   - Offer Popup Submissions

### Viewing Individual Submissions

Click on any submission to view:

- Full contact details
- Purpose/budget information
- Current status
- Internal notes
- Submission metadata

### Updating Status

1. Open a submission
2. Click the "Status" dropdown
3. Select new status
4. Click "Publish" to save

### Adding Notes

1. Open a submission
2. Scroll to "Internal Notes"
3. Add your notes
4. Click "Publish" to save

## Exporting to Excel

### Method 1: Using Sanity Vision (Built-in)

1. Go to "Vision" tab in Sanity Studio
2. Use this query for contact submissions:

```groq
*[_type == "contactSubmission"] | order(submittedAt desc) {
  fullName,
  email,
  "phone": countryCode + " " + phone,
  purpose,
  budgetRange,
  source,
  status,
  notes,
  submittedAt
}
```

3. Use this query for offer submissions:

```groq
*[_type == "offerSubmission"] | order(submittedAt desc) {
  name,
  email,
  phone,
  budget,
  status,
  notes,
  submittedAt
}
```

4. Click "Fetch" and copy the JSON
5. Use a JSON-to-CSV converter or import into Excel

### Method 2: Date Range Filtering

Filter by date range in Vision:

```groq
*[_type == "contactSubmission" && submittedAt >= "2026-01-01" && submittedAt <= "2026-01-31"] | order(submittedAt desc) {
  fullName,
  email,
  "phone": countryCode + " " + phone,
  purpose,
  budgetRange,
  source,
  status,
  submittedAt
}
```

### Method 3: Custom Export Plugin (Future Enhancement)

For a more user-friendly export experience, you can install the `sanity-plugin-export-excel` package:

```bash
npm install sanity-plugin-export-excel
```

Then add it to `sanity.config.ts`:

```typescript
import { exportPlugin } from "sanity-plugin-export-excel";

export default defineConfig({
  // ...
  plugins: [
    // ...
    exportPlugin(),
  ],
});
```

## Best Practices

### For Sales Team

1. **Check new submissions daily** - Filter by status="new"
2. **Update status** after each interaction
3. **Add detailed notes** for better team coordination
4. **Export weekly reports** for management review

### For Management

1. **Review conversion rates** - Track how many "new" become "converted"
2. **Analyze sources** - See which forms generate more leads
3. **Budget insights** - Understand customer budget ranges
4. **Response time** - Monitor time between submission and first contact

## Troubleshooting

### Form Not Submitting

1. Check browser console for errors
2. Verify all required fields are filled
3. Check network tab for API errors
4. Ensure Sanity client credentials are correct

### Data Not Appearing in Sanity

1. Check Sanity Studio dashboard
2. Verify API route is working (`/api/submit-contact` or `/api/submit-offer`)
3. Check server logs for errors
4. Verify Sanity projectId and dataset in config

### Export Issues

1. Ensure you have read permissions in Sanity
2. Try simplifying the GROQ query
3. Check for special characters in data
4. Use Vision tool to debug queries

## Security Notes

- IP addresses are logged but not exposed publicly
- User agents are stored for fraud prevention
- All API routes validate required fields
- Sanity permissions control who can view/edit submissions

## Future Enhancements

1. **Email Notifications** - Alert team when new submission arrives
2. **WhatsApp Integration** - Auto-send confirmation messages
3. **CRM Integration** - Sync with Salesforce/HubSpot
4. **Analytics Dashboard** - Visual reports in Sanity Studio
5. **Automated Follow-ups** - Schedule reminder emails
6. **Duplicate Detection** - Flag multiple submissions from same user

## Support

For technical issues or feature requests, contact the development team.
