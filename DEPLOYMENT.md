# ACCENT Website - Quick Deployment Guide

## 🚀 Fast Track to Launch

### Step 1: Add Images (IMPORTANT!)

Before deploying, you **must** add images to make the website look professional.

1. Go to `images/IMAGE-SOURCES.md` for detailed instructions
2. Download 20 images total:
   - 1 hero image → `images/hero/luxury-accent-wall-hero.jpg`
   - 18 portfolio images → `images/portfolio/[specific names]`
   - 1 about image → `images/about/team-workspace.jpg`

**Quick image sources:**
- [Unsplash.com](https://unsplash.com) - Search "luxury accent wall"
- [Pexels.com](https://pexels.com) - Search "modern interior wall"

**Optimize images:**
- Use [TinyPNG.com](https://tinypng.com) to compress
- Target: <300KB per image

---

### Step 2: Customize Content

Edit `index.html` to update:

1. **Contact Information** (search for these in the file):
   - Phone: `(416) 555-1234` → Your real number
   - Email: `info@accentwalls.ca` → Your real email
   - Social media links in footer

2. **Company Information**:
   - Update testimonials with real client reviews (if available)
   - Modify service descriptions if needed
   - Update About section with your company story

3. **Optional Customizations**:
   - Change color scheme in `styles.css` (`:root` variables)
   - Modify fonts in `index.html` (Google Fonts link)

---

### Step 3: Deploy to Netlify (Recommended - FREE!)

**Option A: Drag & Drop (Fastest - 2 minutes)**

1. Open https://app.netlify.com/drop
2. Drag the entire ACCENT folder into the browser
3. Wait for upload to complete
4. Your site is live! 🎉

**Option B: Git Deploy (Best for updates)**

1. Push this code to GitHub:
   ```bash
   git add .
   git commit -m "Initial ACCENT website"
   git push
   ```

2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Click "Deploy site"
6. Done! 🎉

**After Deployment:**
- Forms will automatically work (Netlify Forms)
- Get submissions in: Dashboard → Forms
- Add custom domain in: Site settings → Domain management

---

### Step 4: Configure Forms (Already Done!)

Forms are pre-configured for Netlify. After deployment:

1. Go to Netlify Dashboard → Your Site → Forms
2. Set up email notifications:
   - Click "Form notifications"
   - Add email address for form submissions
3. Enable spam filtering (recommended)

---

### Step 5: Custom Domain (Optional)

If you have a custom domain (e.g., accentwalls.ca):

1. In Netlify: Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic & free with Netlify)

**DNS Settings** (add these at your domain registrar):
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: [your-site].netlify.app
```

---

## 🔧 Alternative Deployments

### Deploy to Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Note:** For forms, you'll need to replace Netlify Forms with a service like FormSpree.

### Deploy to GitHub Pages

1. Push code to GitHub
2. Repository Settings → Pages
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Save

**Note:** Forms won't work on GitHub Pages. Use FormSpree or similar.

---

## ✅ Pre-Deployment Checklist

Before going live, verify:

- [ ] All 20 images are added and optimized
- [ ] Contact information is updated (phone, email)
- [ ] Social media links are correct
- [ ] Test form submission works
- [ ] Mobile responsiveness looks good
- [ ] All links work (test navigation)
- [ ] Replace placeholder content with real content
- [ ] Spell-check all text
- [ ] Portfolio images show real projects (or professional stock)
- [ ] Testimonials are real or removed

---

## 📱 Test Your Site

After deployment, test on:

1. **Desktop browsers:**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Mobile devices:**
   - iPhone (Safari)
   - Android (Chrome)

3. **Test these features:**
   - Navigation menu works
   - All sections scroll smoothly
   - Portfolio filter buttons work
   - Form submits successfully
   - Mobile menu toggles
   - All images load
   - Hover effects work

---

## 🎯 SEO & Analytics (Post-Launch)

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add your website
3. Verify ownership
4. Submit sitemap (optional)

### Google Analytics (Optional)
1. Create account at https://analytics.google.com
2. Get tracking code
3. Add to `index.html` before `</head>`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR-TRACKING-ID');
   </script>
   ```

---

## 🆘 Troubleshooting

### Images not showing
- Check file paths match exactly
- Ensure images are in correct folders
- Verify file extensions (.jpg, not .JPG)
- Clear browser cache

### Forms not working
- Only works when deployed to Netlify
- Check `data-netlify="true"` is in form tag
- Verify form name is `quote-request`
- Test on live site, not localhost

### Site looks broken on mobile
- Clear browser cache
- Check CSS file loaded correctly
- Test in incognito/private mode
- View browser console for errors

### Portfolio filter not working
- Check JavaScript loaded correctly
- Open browser console for errors
- Ensure script.js is linked properly

---

## 🔄 Making Updates

After initial deployment:

1. Edit files locally
2. Test changes locally (use Live Server or similar)
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
4. Netlify/Vercel will auto-deploy (if connected via Git)

**Or** for quick updates:
- Drag & drop updated folder to Netlify

---

## 📊 Performance Tips

### Before Launch:
1. Compress all images (<300KB each)
2. Test site speed: https://pagespeed.web.dev
3. Check mobile-friendliness: https://search.google.com/test/mobile-friendly

### After Launch:
- Monitor Core Web Vitals
- Optimize any slow-loading images
- Consider adding lazy loading to more images

---

## 💡 Next Steps After Launch

1. **Social Media:**
   - Update social media bios with new website
   - Share website launch post
   - Add website to Google My Business

2. **Marketing:**
   - Add website to email signature
   - Print on business cards
   - Add to vehicle wraps/signage

3. **Content Updates:**
   - Add real project photos to portfolio
   - Collect and add client testimonials
   - Consider adding a blog section

4. **Technical:**
   - Set up Google Analytics
   - Submit to Google Search Console
   - Create and submit XML sitemap
   - Set up email forwarding for info@accentwalls.ca

---

## 📞 Need Help?

Common resources:
- Netlify Docs: https://docs.netlify.com
- Netlify Support: https://answers.netlify.com
- Web hosting help: See README.md

---

**Remember:** The website is fully functional and ready to deploy right now! Just add images and customize the content, and you're good to go! 🚀

**Estimated Time to Launch:**
- With images ready: 15 minutes
- With image sourcing: 1-2 hours
- Full customization: 2-4 hours

---

**Good luck with your launch! 🎉**

*ACCENT - ELEVATE THE ORDINARY*
