# Krave Microgreens 🌱

> Premium organic microgreens website — Next.js 14, TailwindCSS, Framer Motion

A modern, premium, production-ready website for **Krave Microgreens**, Coimbatore's premier organic microgreens farm.

---

## 🌿 Features

- **8 Pages**: Home, About, Microgreens Catalog, Product Detail, Subscriptions, Workshops, Blog, Contact
- **Markdown Blog System**: Local `.md` files with frontmatter support
- **Framer Motion Animations**: Cinematic fade-ups, stagger effects, floating elements, parallax
- **WhatsApp Integration**: Floating button + pre-filled messages throughout
- **SEO Optimized**: Dynamic metadata, sitemap.xml, robots.txt, structured data, local business schema
- **Mobile-First**: Responsive at 375px, 768px, 1280px+
- **Dark Green Design**: Deep forest green + sage + cream palette

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
krave-microgreens/
├── app/                      # Next.js App Router pages
│   ├── page.js               # Home page
│   ├── about/page.js         # About page
│   ├── microgreens/
│   │   ├── page.js           # Products catalog
│   │   └── [slug]/page.js    # Product detail
│   ├── subscriptions/page.js # Subscription plans
│   ├── workshops/page.js     # Workshops & training
│   ├── blog/
│   │   ├── page.js           # Blog listing
│   │   └── [slug]/page.js    # Blog post
│   ├── contact/page.js       # Contact page
│   ├── sitemap.js            # Dynamic sitemap
│   ├── robots.js             # robots.txt
│   ├── layout.js             # Root layout + metadata
│   └── globals.css           # Global styles
├── components/               # Reusable UI components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── HeroSection.js
│   ├── ProductCard.js
│   ├── BlogCard.js
│   ├── TestimonialCard.js
│   ├── FAQAccordion.js
│   ├── CTABanner.js
│   ├── WhatsAppButton.js
│   └── AnimatedSection.js
├── content/
│   └── blog/                 # Markdown blog posts
│       ├── broccoli-microgreens-benefits.md
│       ├── microgreens-vs-sprouts.md
│       ├── daily-smoothie-recipes.md
│       ├── why-microgreens-are-nutrient-dense.md
│       └── how-to-store-microgreens.md
├── lib/
│   ├── products.js           # Product data for all microgreens
│   └── blog.js               # Blog utility functions
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind design system
├── next.config.js            # Next.js configuration
└── package.json
```

---

## ✏️ Adding Blog Posts

Create a new file in `content/blog/` with this frontmatter:

```markdown
---
title: "Your Post Title"
slug: "url-friendly-slug"
date: "2025-03-01"
author: "Krave Microgreens Team"
category: "Health & Nutrition"
tags: ["microgreens", "nutrition", "health"]
excerpt: "A brief 1-2 sentence summary of your post."
featuredImage: "/images/blog/your-image.jpg"
---

# Your article starts here...
```

The blog system automatically discovers and displays new posts.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `forest` | `#1a3d2b` | Primary headings, dark backgrounds |
| `leafy` | `#2d6a4f` | CTAs, links, accents |
| `sage` | `#74b49b` | Soft highlights, borders |
| `beige` | `#f5efe6` | Section backgrounds |
| `cream` | `#faf8f5` | Page background |

**Fonts**: Playfair Display (headings) + Inter (body)

---

## 📱 WhatsApp Integration

WhatsApp number: `+919360123917`

All CTAs link to:
```
https://wa.me/919360123917?text=<pre-filled message>
```

---

## 🚀 Deployment (Vercel)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy — zero configuration required

```bash
# Build locally
npm run build
npm run start
```

---

## 📊 SEO

- Dynamic page metadata per route
- Local Business structured data (Schema.org)
- Auto-generated sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- OpenGraph + Twitter card meta tags
- Semantic HTML throughout

---

## 🌐 Contact

**Krave Microgreens**  
Coimbatore, Tamil Nadu, India  
📱 WhatsApp: [+91 93601 23917](https://wa.me/919360123917)  
📧 Email: grow@kravemicrogreens.in

---

*Made with 💚 for healthy living in Coimbatore*
