# STKZ SC Website

Public-facing website for STKZ SC in Jacksonville, Texas / East Texas.

## Stack

- Next.js App Router
- React
- Vercel hosting
- GitHub source control
- `next/font` for Archivo Black and Cabin

## Local development

```bash
npm install
npm run dev
```

## Deploy

Import this GitHub repository into Vercel. Vercel will detect Next.js automatically. Once the preview is approved, add `stkzsc.org` and `www.stkzsc.org` in Vercel Domains and update the website DNS records at GoDaddy. Preserve all email/MX/SPF/DKIM records.

## Content updates

Shared club details live in `data/site.js`. Page-specific copy lives in each route under `app/`.

The site intentionally avoids publishing unverified team rosters, coach credentials, schedules, fees, achievements, or other time-sensitive claims. Those can be added through chat once confirmed.

## Forms

The initial forms generate a pre-filled email to `stkzsc@gmail.com`, so they work without a third-party form provider or environment variables. A server-side form handler (Resend, Supabase, etc.) can be added later without changing the page design.
