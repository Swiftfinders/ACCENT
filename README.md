# ACCENT - Premium Accent Wall Installation Website

![ACCENT Logo](https://img.shields.io/badge/ACCENT-ELEVATE%20THE%20ORDINARY-d4af37?style=for-the-badge&labelColor=0f0f0f)

> **ELEVATE THE ORDINARY** - A luxury static website for ACCENT, Ontario's premier accent wall installation and design company.

---

## 🌟 Overview

ACCENT is a premium, fully responsive static website showcasing luxury accent wall installation services. Built with a sophisticated black and gold color scheme, the site embodies high-end craftsmanship and modern design excellence.

**Live Demo**: [Coming Soon]

---

## ✨ Features

### Design & Aesthetics
- 🎨 **Premium Color Scheme**: Black (#0f0f0f) and Gold (#d4af37) luxury branding
- 💎 **Luxury Minimalism**: Sophisticated, clean design with generous whitespace
- 📱 **Fully Responsive**: Optimized for all devices (320px - 1920px)
- ✨ **Smooth Animations**: Scroll-based reveals, hover effects, and transitions
- 🖼️ **Professional Typography**: Playfair Display (headings) + Montserrat (body)

### Functionality
- 🎯 **Portfolio Filtering**: Dynamic JavaScript-based category filtering (7 categories)
- 📝 **Netlify Forms**: Integrated contact/quote form with spam protection
- 🧭 **Smooth Navigation**: Fixed navbar with scroll spy and active states
- 📊 **SEO Optimized**: Semantic HTML5, meta tags, and accessibility features
- 🚀 **Performance**: Optimized assets, lazy loading, and debounced scroll events

---

## 📋 Table of Contents

- [Features](#-features)
- [Website Structure](#-website-structure)
- [Installation](#-installation)
- [Deployment](#-deployment)
- [Image Setup](#-image-setup)
- [Customization](#-customization)
- [Technology Stack](#-technology-stack)
- [Browser Support](#-browser-support)
- [License](#-license)

---

## 🏗️ Website Structure

### 1. **Navigation**
- Fixed/sticky header with scroll effects
- Mobile-responsive hamburger menu
- Active section highlighting
- Smooth scroll to sections

### 2. **Hero Section**
- Full-screen immersive design
- Dynamic background with overlay
- Prominent CTA button
- Animated scroll indicator

### 3. **Services Section** (6 Cards)
- Accent Wall Installation
- Repairs & Restoration
- Professional Painting
- Design Consultation
- Material Selection
- LED Accent Lighting

### 4. **Why ACCENT Section** (4 Value Props)
- Premium Craftsmanship
- Attention to Detail
- Tailored Designs
- Timely Completion

### 5. **Portfolio Gallery**
- 18 project images
- 7 filterable categories:
  - Modern
  - Geometric
  - Wood Slat
  - Textured
  - Painted
  - LED Integration
  - All Projects
- Responsive grid (3/2/1 columns)
- Hover overlays with project details

### 6. **Testimonials** (4 Reviews)
- 5-star luxury client reviews
- Gold quotation marks
- Professional styling

### 7. **About Section**
- Company story and mission
- Stats showcase (500+ projects, 15+ years)
- Dual CTA buttons
- Professional imagery

### 8. **Quote Request Form**
- Netlify Forms integration
- Fields:
  - Full Name
  - Email & Phone
  - Project Type (dropdown)
  - Wall Type Interest (dropdown)
  - Project Description (textarea)
  - Preferred Timeline
  - Newsletter Signup
- Form validation
- Success message handling
- Rate limiting protection

### 9. **Footer**
- Service area information
- Quick links
- Social media icons (gold themed)
- Contact information
- Copyright notice

---

## 🚀 Installation

### Prerequisites
- Web browser
- Code editor (VS Code recommended)
- Basic understanding of HTML/CSS/JS
- Node.js (optional, for local server)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ACCENT.git
   cd ACCENT
   ```

2. **File Structure**
   ```
   ACCENT/
   ├── index.html          # Main HTML file
   ├── styles.css          # All styling
   ├── script.js           # JavaScript functionality
   ├── README.md           # This file
   └── images/             # Image assets
       ├── IMAGE-SOURCES.md
       ├── hero/
       ├── portfolio/
       ├── about/
       └── services/
   ```

3. **Add Images**
   - See `images/IMAGE-SOURCES.md` for detailed image sourcing guide
   - Download professional stock images from Unsplash/Pexels
   - Optimize images before adding to project
   - Place in appropriate folders

4. **Local Development**

   **Option A: VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

   **Option B: Python Server**
   ```bash
   # Python 3
   python -m http.server 8000
   ```

   **Option C: Node.js HTTP Server**
   ```bash
   npx http-server
   ```

5. **Open in Browser**
   - Navigate to `http://localhost:8000` (or appropriate port)

---

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. **Via Git (Automatic Deployment)**
   - Push code to GitHub/GitLab
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your repository
   - Deploy!

2. **Via Drag & Drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag your project folder
   - Instant deployment!

3. **Netlify Forms Setup** (Already Configured)
   - Forms automatically work on Netlify
   - View submissions in Netlify dashboard: Site → Forms
   - Enable spam filtering in settings

### Deploy to GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select branch and folder
4. Save and deploy

**Note**: GitHub Pages doesn't support Netlify Forms. You'll need to integrate an alternative form service (FormSpree, Getform, etc.)

### Deploy to Vercel

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import repository
4. Deploy with one click

---

## 🖼️ Image Setup

### Quick Image Guide

1. **Read the detailed guide**: `images/IMAGE-SOURCES.md`

2. **Download images from**:
   - [Unsplash](https://unsplash.com)
   - [Pexels](https://pexels.com)
   - [Pixabay](https://pixabay.com)

3. **Required Images**:
   - 1 hero image (1920x1080)
   - 18 portfolio images (1200x900)
   - 1 about image (1000x1200)

4. **Optimize**:
   - Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Target: <300KB per image

5. **Name correctly**: Match filenames in `index.html`

### Search Terms Examples:
- "luxury modern accent wall"
- "wood slat wall interior"
- "LED backlit wall panels"
- "geometric wall design"
- "textured feature wall"

---

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #d4af37;        /* Gold */
    --color-primary-dark: #b8941e;   /* Dark Gold */
    --color-secondary: #0f0f0f;      /* Black */
    --color-white: #ffffff;
    /* ... more colors ... */
}
```

### Typography

Change fonts in `index.html` Google Fonts link and CSS:

```css
:root {
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Montserrat', sans-serif;
}
```

### Content

1. **Company Information**
   - Edit text directly in `index.html`
   - Update phone numbers, email, addresses
   - Modify service descriptions

2. **Testimonials**
   - Replace client names and reviews
   - Update locations

3. **Portfolio Projects**
   - Add/remove portfolio items
   - Update project descriptions
   - Change category filters

### Form Fields

Modify form in `index.html` (Quote Form Section):
- Add/remove fields
- Change dropdown options
- Update form name for Netlify

---

## 💻 Technology Stack

### Core Technologies
- **HTML5**: Semantic markup
- **CSS3**: Modern styling (Grid, Flexbox, Custom Properties)
- **JavaScript (ES6+)**: Vanilla JS, no frameworks

### External Resources
- **Google Fonts**: Playfair Display, Montserrat
- **Font Awesome 6.4.0**: Icons
- **Netlify Forms**: Form handling

### Key Features
- CSS Grid & Flexbox layout
- CSS Custom Properties (variables)
- Intersection Observer API
- Smooth scrolling
- LocalStorage (form rate limiting)

---

## 🌍 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Minimum Support**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 📱 Responsive Breakpoints

```css
Mobile:      320px - 640px
Tablet:      641px - 1024px
Desktop:     1025px - 1920px+
```

---

## ⚡ Performance Optimization

- ✅ Optimized images (<300KB each)
- ✅ Minified CSS and JS (for production)
- ✅ Lazy loading images
- ✅ Debounced scroll events
- ✅ Efficient animations (transform/opacity only)
- ✅ No render-blocking resources

### Production Build

Before deployment, consider:

1. **Minify CSS**
   - Use [CSS Minifier](https://cssminifier.com)

2. **Minify JavaScript**
   - Use [JavaScript Minifier](https://javascript-minifier.com)

3. **Optimize Images**
   - Compress all images
   - Use WebP format for better compression

---

## 🔧 Maintenance

### Regular Updates
- Update copyright year (auto-updated in `script.js`)
- Refresh portfolio images
- Update testimonials
- Check all links work

### Form Testing
- Test form submissions monthly
- Check Netlify form settings
- Verify email notifications

---

## 📞 Contact Information

Update these in `index.html`:

```html
Phone: (416) 555-1234
Email: info@accentwalls.ca
Service Area: Ontario, Canada
```

---

## 🎯 SEO Checklist

- ✅ Semantic HTML structure
- ✅ Meta descriptions
- ✅ Alt text for images
- ✅ Heading hierarchy (H1-H6)
- ✅ Descriptive link text
- ✅ Mobile-friendly
- ✅ Fast loading speed
- ⬜ Submit sitemap to Google
- ⬜ Google Analytics integration (optional)

---

## 🐛 Troubleshooting

### Forms Not Working
- Ensure deployed on Netlify
- Check form name matches: `name="quote-request"`
- Verify `data-netlify="true"` attribute exists

### Images Not Loading
- Check file paths are correct
- Ensure images are in correct folders
- Verify image filenames match HTML references
- Check image file extensions (.jpg, .png)

### Styling Issues
- Clear browser cache
- Check CSS file is linked correctly
- Inspect browser console for errors

---

## 📄 File Reference

| File | Purpose | Lines of Code |
|------|---------|---------------|
| `index.html` | Main HTML structure | ~800 |
| `styles.css` | All styling and responsive design | ~1200 |
| `script.js` | Interactivity and functionality | ~500 |
| `images/IMAGE-SOURCES.md` | Image sourcing guide | Documentation |

---

## 🎓 Learning Resources

- [HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [JavaScript ES6+](https://javascript.info/)
- [Netlify Forms Docs](https://docs.netlify.com/forms/setup/)

---

## 🤝 Contributing

This is a commercial project for ACCENT. For suggestions or improvements, please contact the development team.

---

## 📜 License

© 2024 ACCENT. All rights reserved.

This website is proprietary software created for ACCENT accent wall installation services.

---

## 🙏 Acknowledgments

- **Design Inspiration**: Avileve, Epic Wall Designs, AccentWallsPro
- **Stock Photos**: Unsplash, Pexels contributors
- **Icons**: Font Awesome
- **Fonts**: Google Fonts

---

## 📝 Changelog

### Version 1.0.0 (December 2024)
- ✅ Initial release
- ✅ Full responsive design
- ✅ 9 complete sections
- ✅ Portfolio filtering system
- ✅ Netlify Forms integration
- ✅ Smooth scroll animations
- ✅ Mobile navigation

---

## 🚀 Future Enhancements

Potential features for future versions:
- [ ] Lightbox for portfolio images
- [ ] Before/After slider
- [ ] Google Maps integration
- [ ] Blog section
- [ ] Multi-language support (English/French)
- [ ] Live chat integration
- [ ] Customer portal
- [ ] Online booking system

---

## 📧 Support

For technical support or questions:
- **Developer Contact**: [Your contact info]
- **Company Website**: [accentwalls.ca]
- **Email**: info@accentwalls.ca

---

<div align="center">

**Built with ❤️ and precision**

**ACCENT - ELEVATE THE ORDINARY**

[![Netlify Status](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify)](https://netlify.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()

</div>
