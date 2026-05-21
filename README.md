# The Wardrobe Shillong - Shopify Theme

A clean, minimal Shopify 2.0 theme built for **The Wardrobe Shillong** — a premium ecommerce store selling sneakers, apparel, and accessories.

## Features

- **Shopify 2.0 compatible** with JSON templates and sections everywhere
- **Hero slideshow** with autoplay and manual navigation
- **Featured collection** sections with configurable product grid (2/3/4 columns)
- **Featured product** section with add-to-cart
- **Image with text** section for top picks and collection highlights
- **Scrolling marquee banner** for promotions
- **Customer testimonials** section with photos and star ratings
- **Announcement bar** with rotating messages
- **Mobile-responsive** design with hamburger menu and drawer navigation
- **Search drawer** overlay
- **Product page** with image gallery, variant selector, quantity selector
- **Collection page** with sorting and filtering
- **Cart page** with quantity updates
- **Customer account** pages (login, register, account, order)
- **Contact page** with form
- **Newsletter subscription** in footer

## Theme Structure

```
├── assets/
│   ├── theme.css          # Main stylesheet
│   └── theme.js           # Theme JavaScript
├── config/
│   ├── settings_data.json # Theme settings data
│   └── settings_schema.json # Theme settings schema
├── layout/
│   └── theme.liquid       # Main layout
├── locales/
│   └── en.default.json    # English translations
├── sections/
│   ├── header.liquid      # Header with announcement bar
│   ├── footer.liquid      # Footer with newsletter
│   ├── hero-slideshow.liquid
│   ├── featured-collection.liquid
│   ├── featured-product.liquid
│   ├── image-with-text.liquid
│   ├── marquee-banner.liquid
│   ├── testimonials.liquid
│   ├── main-collection.liquid
│   ├── main-product.liquid
│   ├── main-cart.liquid
│   ├── main-page.liquid
│   ├── main-contact.liquid
│   ├── main-search.liquid
│   └── main-404.liquid
├── snippets/
│   ├── product-card.liquid
│   └── product-card-placeholder.liquid
└── templates/
    ├── index.json
    ├── collection.json
    ├── product.json
    ├── cart.json
    ├── page.json
    ├── page.contact.json
    ├── search.json
    ├── 404.json
    └── customers/
        ├── login.liquid
        ├── register.liquid
        ├── account.liquid
        └── order.liquid
```

## Installation

1. In your Shopify admin, go to **Online Store > Themes**
2. Click **Add theme** > **Upload zip file**
3. Upload this theme as a `.zip` file
4. Click **Customize** to configure sections, colors, and content

## Customization

All sections are fully configurable through the Shopify theme editor:

- **Colors**: Primary, secondary, accent, background, and text colors
- **Typography**: Custom heading and body fonts via Shopify font picker
- **Header**: Logo, navigation menu, announcement bar messages
- **Homepage**: Hero slides, featured collections, featured product, testimonials
- **Social media**: Instagram, Facebook, Twitter links
- **Footer**: Newsletter heading, policy links

## Design Reference

Inspired by [City of Saints](https://cityofsaintsin.myshopify.com/) — adapted for sneakers and apparel.
