# Deployment Guide

Step-by-step guide to deploy your cardiology website.

## Step 1: Set Up Supabase (Database)

### 1.1 Create Supabase Account

1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with GitHub or email

### 1.2 Create New Project

1. Click "New Project"
2. Choose organization (or create new)
3. Enter project details:
   - **Name**: kardiologie-brandys
   - **Database Password**: (save this securely!)
   - **Region**: Europe (closest to Czech Republic)
4. Click "Create new project"
5. Wait 2-3 minutes for setup

### 1.3 Run Database Schema

1. In your Supabase dashboard, click "SQL Editor" (left sidebar)
2. Click "New Query"
3. Copy entire content from `supabase-schema.sql`
4. Paste into SQL Editor
5. Click "RUN" button
6. You should see: "Success. No rows returned"

### 1.4 Get API Credentials

1. Click "Settings" (left sidebar)
2. Click "API"
3. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (long string starting with `eyJ...`)

## Step 2: Set Up Email (Gmail)

### 2.1 Enable 2-Step Verification

1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled

### 2.2 Create App Password

1. Go to https://myaccount.google.com/apppasswords
2. Select app: "Mail"
3. Select device: "Other" → type "Kardiologie Website"
4. Click "Generate"
5. Copy the 16-character password (save it!)

## Step 3: Set Up Vercel (Hosting)

### 3.1 Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Sign up with GitHub (recommended)

### 3.2 Push Code to GitHub (if not done)

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create GitHub repo and push
gh repo create kardiologie-brandys --public --source=. --remote=origin --push
```

### 3.3 Deploy to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Framework Preset: **Next.js** (auto-detected)
5. Click "Deploy"

**Wait! Before clicking deploy, add environment variables:**

### 3.4 Add Environment Variables

1. Expand "Environment Variables" section
2. Add these variables:

```
NEXT_PUBLIC_SUPABASE_URL = [your Supabase URL from Step 1.4]
NEXT_PUBLIC_SUPABASE_ANON_KEY = [your Supabase anon key from Step 1.4]
EMAIL_HOST = smtp.gmail.com
EMAIL_PORT = 587
EMAIL_USER = [your Gmail address]
EMAIL_PASSWORD = [App Password from Step 2.2]
EMAIL_TO = [doctor's email address]
```

3. Click "Deploy"
4. Wait 2-3 minutes for deployment

### 3.5 Get Your URL

After deployment completes:

1. You'll see: "Congratulations! Your project has been deployed"
2. Your URL: `https://kardiologie-brandys.vercel.app` (or similar)
3. Click the URL to view your site!

## Step 4: Test Everything

### 4.1 Test Staff Directory

1. Go to your Supabase dashboard
2. Click "Table Editor" → "staff"
3. Add a test staff member
4. Visit `your-url.vercel.app/o-nas#nas-tym`
5. You should see the staff member

### 4.2 Test Contact Form

1. Visit `your-url.vercel.app/kontakt`
2. Fill out and submit the form
3. Check:
   - Supabase "contact_messages" table (should have new row)
   - Your email inbox (should receive email)

## Step 5: Connect Your Domain

### Option A: Point Existing Domain to Vercel

1. In Vercel dashboard, click your project
2. Click "Settings" → "Domains"
3. Add your domain: `kardiologiebrandys.cz`
4. Follow instructions to add DNS records at your domain provider (vedos.cz)
5. Typical records needed:
   - `A` record: point to Vercel IP
   - `CNAME` record: `www` → `cname.vercel-dns.com`

### Option B: Transfer Domain to Vercel

1. Transfer domain management to Vercel
2. Easier but requires domain transfer

## Troubleshooting

### Environment Variables Not Working

- Check they're added in Vercel dashboard
- Redeploy after adding variables
- Make sure no typos in variable names

### Contact Form Not Sending Email

- Verify Gmail App Password is correct
- Check email in Vercel logs: Dashboard → Deployments → [latest] → Functions
- Make sure 2-Step Verification is enabled

### Database Connection Issues

- Verify Supabase URL and key are correct
- Check Supabase project is not paused (free tier pauses after inactivity)
- Check RLS policies are created (run schema.sql again)

### Site Not Loading

- Check deployment status in Vercel
- Check build logs for errors
- Verify all environment variables are set

## Next Steps

1. **Add Staff Members**: Go to Supabase → Table Editor → staff
2. **Customize Content**: Edit pages in `src/app/`
3. **Update Styling**: Modify Tailwind classes
4. **Add More Pages**: Create new folders in `src/app/`
5. **Monitor Contact Forms**: Check Supabase regularly

## Maintenance

- **Free Tier Limits**:
  - Supabase: 500MB database, 2GB bandwidth/month
  - Vercel: 100GB bandwidth/month, serverless functions
- **Backups**: Supabase auto-backs up daily
- **Updates**: Push to GitHub, Vercel auto-deploys

## Support Resources

- Vercel Support: https://vercel.com/support
- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs
