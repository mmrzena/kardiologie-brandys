# Kardiologie Brandýs - Website

Modern website for cardiology practice built with Next.js, Supabase, and Vercel.

## Tech Stack

- **Frontend**: Next.js 13 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (Serverless Functions)
- **Database**: Supabase (PostgreSQL)
- **Email**: Nodemailer
- **Deployment**: Vercel

## Features

- ✅ Homepage with services overview
- ✅ Staff directory with individual detail pages
- ✅ Contact form (saves to database + sends email)
- ✅ Static pages (About, Services)
- ✅ Responsive design
- ✅ TypeScript for type safety
- ✅ SEO optimized

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. Go to **SQL Editor** and run the SQL from `supabase-schema.sql` file
4. Go to **Settings** → **API** and copy:
   - Project URL
   - Anon/Public key

### 3. Configure Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and fill in:

```env
# Supabase (from step 2)
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=doctor@kardiologiebrandys.cz
```

**Gmail Setup:**

- Use Gmail App Password (not your regular password)
- Generate at: https://myaccount.google.com/apppasswords

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option 1: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

### Option 2: Via GitHub

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables (from `.env.local`)
6. Deploy!

**Important:** Add all environment variables in Vercel dashboard under **Settings** → **Environment Variables**

## Project Structure

```
kardiologie-brandys/
├── src/
│   ├── app/
│   │   ├── api/              # API routes (serverless functions)
│   │   │   ├── contact/      # Contact form endpoint
│   │   │   └── staff/        # Staff endpoints
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── services/         # Services page
│   │   ├── team/             # Staff directory
│   │   │   └── [id]/         # Staff detail page
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/
│   │   └── Navigation.tsx    # Navigation component
│   └── lib/
│       └── supabase.ts       # Supabase client
├── .env.local.example        # Environment variables template
├── supabase-schema.sql       # Database schema
└── vercel.json               # Vercel configuration
```

## Database Schema

The project uses two tables:

1. **staff** - Store team members
   - id, name, title, specialization, bio, photo_url, email, phone

2. **contact_messages** - Store contact form submissions
   - id, name, email, phone, message, status, created_at

## Managing Content

### Add Staff Members

1. Go to your Supabase dashboard
2. Navigate to **Table Editor** → **staff**
3. Click **Insert row** → **Insert Row**
4. Fill in the details

### View Contact Messages

1. Go to your Supabase dashboard
2. Navigate to **Table Editor** → **contact_messages**
3. View all submitted messages

## Future Enhancements

- Add mobile menu
- Add admin panel for content management
- Integrate with appointment booking system
- Add blog/news section
- Add image gallery
- Implement full CMS (Sanity.io or Strapi)

## Support

For issues or questions, refer to:

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
