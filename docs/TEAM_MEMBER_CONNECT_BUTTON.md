# Team Member Connect Button - Implementation Guide

## Overview

Added "Connect Now" button to team member cards on the About page, with Sanity CMS integration for managing social media links.

## What Was Added

### 1. Sanity Schema Updates

**File:** `/src/sanity/schemas/teamMember.ts`

Added two new fields:

- `linkedinUrl` - LinkedIn profile URL
- `socialLink` - Primary contact link (can be LinkedIn, WhatsApp, or any social media)

```typescript
defineField({
  name: "linkedinUrl",
  title: "LinkedIn URL",
  type: "url",
  description: "Full LinkedIn profile URL (e.g., https://linkedin.com/in/username)",
}),
defineField({
  name: "socialLink",
  title: "Connect Link (Primary)",
  type: "url",
  description: "Primary contact link (LinkedIn, WhatsApp, or any social media)",
}),
```

### 2. Query Updates

**File:** `/src/sanity/lib/queries.ts`

Updated `getTeamMembersBySection()` to fetch the new fields for all team sections:

- Founders
- Management
- Media
- Elite Agents
- Sales

### 3. UI Component Updates

**File:** `/src/app/about/AboutPageContent.tsx`

#### Interface Update:

```typescript
interface TeamMember {
  _id: string;
  name: string;
  role: string;
  section: string;
  bio?: string;
  linkedinUrl?: string; // NEW
  socialLink?: string; // NEW
  image?: { asset: { url: string } };
}
```

#### Connect Button:

- Positioned at bottom left of team member card
- Only shows if `socialLink` or `linkedinUrl` is provided
- Priority: Uses `socialLink` first, falls back to `linkedinUrl`
- Opens in new tab with proper security attributes
- Responsive design (smaller on mobile, larger on desktop)
- Hover effects with shadow and border color change

## How to Use in Sanity Studio

### Step 1: Access Sanity Studio

Go to: `http://localhost:3000/studio`

### Step 2: Navigate to Team Members

Click on **"Team Members"** in the sidebar

### Step 3: Edit a Team Member

1. Click on any existing team member
2. Scroll to the new fields:
   - **LinkedIn URL**: Paste the full LinkedIn profile URL
   - **Connect Link (Primary)**: Paste any social media or contact link

### Step 4: Save

Click **"Publish"** to save changes

## Link Priority

The button uses this priority:

1. **socialLink** (if provided) - Primary contact method
2. **linkedinUrl** (if socialLink is empty) - Fallback to LinkedIn

## Example Links

### LinkedIn:

```
https://linkedin.com/in/username
```

### WhatsApp:

```
https://wa.me/971501234567
```

### Instagram:

```
https://instagram.com/username
```

### Email:

```
mailto:email@example.com
```

## Button Appearance

- **Text**: "Connect" with arrow icon
- **Style**: White background with gray border
- **Hover**: Darker border, shadow effect
- **Size**: Responsive (smaller on mobile)
- **Position**: Bottom left of card, below name and role

## Technical Details

### Button Classes:

```tsx
className =
  "mt-2 inline-flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-white/80 hover:bg-white border border-gray-300 hover:border-gray-900 text-gray-900 text-[10px] md:text-xs font-semibold transition-all duration-200 hover:shadow-md w-fit";
```

### Security Attributes:

- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Security best practice

## Files Modified

1. `/src/sanity/schemas/teamMember.ts` - Added link fields
2. `/src/sanity/lib/queries.ts` - Updated queries
3. `/src/app/about/AboutPageContent.tsx` - Added button UI

## Testing

1. Add a LinkedIn URL to a team member in Sanity
2. Publish the changes
3. Visit the About page
4. Verify the "Connect" button appears
5. Click the button to test the link

## Notes

- Button only appears if at least one link is provided
- If both links are empty, no button is shown
- The button is fully responsive and works on all devices
- Smooth hover animations for better UX
