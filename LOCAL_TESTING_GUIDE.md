# Local Testing Guide

Your development environment is now fully configured for local testing!

## 🎉 What's Set Up

- ✅ **Mock Database** - JSON files in `/data` folder
- ✅ **Sample Staff Data** - 3 test doctors already loaded
- ✅ **Email Logging** - Emails print to console instead of sending
- ✅ **Zero Configuration** - Works immediately without Supabase or email setup

## 🚀 Start Testing

### 1. Start the Development Server

```bash
npm run dev
```

Server will run at: **http://localhost:3000**

### 2. Test All Features

#### Test Homepage
1. Visit: http://localhost:3000
2. Check: Navigation, hero section, services, links work

#### Test Staff Directory
1. Visit: http://localhost:3000/team
2. You should see **3 sample doctors**:
   - MUDr. Jan Novák
   - MUDr. Eva Svobodová
   - MUDr. Petr Dvořák, Ph.D.
3. Click on any doctor to see their detail page

#### Test Staff Detail Page
1. Visit: http://localhost:3000/team/1
2. Should show Dr. Novák's full profile
3. Try: http://localhost:3000/team/2 and http://localhost:3000/team/3

#### Test Contact Form
1. Visit: http://localhost:3000/contact
2. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: (optional)
   - Message: This is a test message
3. Click "Odeslat zprávu"
4. ✅ Form should show success message
5. ✅ Check your terminal - you'll see the email logged like this:

```
==================== EMAIL (DEV MODE) ====================
From: not-configured@example.com
To: doctor@kardiologiebrandys.cz
Reply-To: test@example.com
Subject: Nová zpráva z webu - Test User
-----------------------------------------------------------
Jméno: Test User
Email: test@example.com

Zpráva:
This is a test message
===========================================================
```

6. ✅ Check: `/data/contact_messages.json` - your message is saved!

#### Test Other Pages
- Visit: http://localhost:3000/about
- Visit: http://localhost:3000/services

## 📁 Mock Database Files

Your local data is stored in JSON files:

### Staff Database
File: `/data/staff.json`

```json
[
  {
    "id": 1,
    "name": "MUDr. Jan Novák",
    "title": "Kardiolog",
    ...
  }
]
```

### Contact Messages
File: `/data/contact_messages.json`

- Initially empty `[]`
- Gets populated when you submit contact form
- **Not tracked in git** (so you can test freely)

## ✏️ Customize Test Data

### Add More Staff Members

Edit: `/data/staff.json`

```json
[
  ...existing staff...,
  {
    "id": 4,
    "name": "MUDr. Your Name",
    "title": "Specialist",
    "specialization": "Your specialty",
    "bio": "Your bio text",
    "photo_url": null,
    "email": "you@example.com",
    "phone": "+420 XXX XXX XXX",
    "created_at": "2025-01-01T00:00:00Z"
  }
]
```

### View Submitted Messages

Open: `/data/contact_messages.json`

You'll see all messages submitted through the contact form.

### Reset Test Data

```bash
# Clear contact messages
echo "[]" > data/contact_messages.json

# Reset to original staff
git checkout data/staff.json
```

## 🔄 How It Works

### Development Mode (Now)
- No Supabase credentials needed
- Uses JSON files in `/data` folder
- Emails log to console
- Perfect for testing

### Production Mode (After Deployment)
- Uses real Supabase database
- Sends actual emails
- Auto-switches when you add credentials

## 🐛 Troubleshooting

### "Cannot find module '@/lib/mockDb'"
```bash
# Restart the dev server
npm run dev
```

### Staff Not Showing
1. Check `/data/staff.json` exists
2. Verify JSON is valid
3. Check browser console for errors

### Contact Form Error
1. Check `/data/contact_messages.json` is writable
2. Look at terminal for error messages
3. Verify JSON syntax in data files

## 📝 Console Logs to Watch

When using the site, watch your terminal for these helpful logs:

```
[DEV MODE] Using mock database, loaded 3 staff members
[DEV MODE] Using mock database, loaded staff member: MUDr. Jan Novák
[DEV MODE] Saved contact message to local JSON database
==================== EMAIL (DEV MODE) ====================
```

## 🎯 Next Steps

Once you're happy with local testing:

1. **Set up Supabase** - See `DEPLOYMENT_GUIDE.md`
2. **Configure email** - Add SMTP credentials
3. **Deploy to Vercel** - Push to production

The code automatically switches from mock to real database when you add Supabase credentials!

## 💡 Tips

- **Live reload**: Changes to code refresh automatically
- **Data persistence**: Your JSON data stays between restarts
- **Safe testing**: Data files not committed to git
- **Easy reset**: Delete `/data` folder to start fresh

Happy testing! 🚀
