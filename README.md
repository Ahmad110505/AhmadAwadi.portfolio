# Commercial Student Portfolio Engine

A production-grade, highly customizable portfolio template engine built with **Astro 4**, **TypeScript**, **Zod**, and **Decap CMS**. Designed for university students, early-career engineers, and creative professionals.

---

## 🏛️ Architecture Overview

```text
Design Tokens (tokens.css)
    ↓
Type-Safe Content Schema (src/content/config.ts with Zod)
    ↓
SEO & Accessibility Engine (SEO.astro + SkipLink.astro + Layout.astro)
    ↓
Defensive Section Components (Hero, About, Education, Experience, Projects, Skills, Certs, Contact)
    ↓
Data-Driven Page & Admin Composition (index.astro & admin.astro)
```

---

## ✨ Production Features

- **Design System Tokens**: CSS Custom Properties for spacing scales (`--space-2xs` to `--space-3xl`), fluid typography (`clamp()`), semantic color palettes, and elevation shadows.
- **Type-Safe Content Collections**: Strict Zod schema validation (`src/content/config.ts`) preventing runtime failures on missing fields.
- **Defensive & Optional Sections**: Sections (Certifications, Experience, Projects, Skills, About) automatically hide when 0 content items exist, eliminating awkward empty UI blocks.
- **Robust Edge Case Handling**: Image fallbacks for missing/broken images, 2-line title clamping, wrapping tech tags, and responsive timeline containers.
- **Commercial SEO & Social Sharing**: Complete OpenGraph, Twitter Cards, Canonical links, and Schema.org `Person` JSON-LD structured data script.
- **WCAG 2.1 AA Accessibility**: Skip-to-content keyboard link, high-contrast focus rings (`:focus-visible`), ARIA landmarks (`role="main"`, `aria-label`), and `prefers-reduced-motion` support.
- **Content Management**: Interactive Web Admin GUI ([`/admin`](file:///c:/Users/ahmad/Desktop/templates/src/pages/admin.astro)) + Decap CMS integration connected to GitHub repository `Ahmad110505/AhmadAwadi.portfolio`.

---

## 📁 Repository Structure

```text
student-portfolio-template/
├── src/
│   ├── components/
│   │   ├── SEO.astro              # Meta, OpenGraph & Schema.org JSON-LD
│   │   ├── SkipLink.astro         # Accessibility keyboard skip link
│   │   ├── Header.astro           # Responsive navigation header
│   │   ├── Hero.astro             # Hero section with avatar fallback
│   │   ├── About.astro            # Bio overview section
│   │   ├── Education.astro        # Academic background section
│   │   ├── Experience.astro       # Work experience timeline
│   │   ├── Projects.astro         # Projects grid with title clamping
│   │   ├── Skills.astro           # Categorized skills grid
│   │   ├── Certifications.astro   # Verified credentials
│   │   └── Contact.astro          # Direct email & social links
│   ├── content/
│   │   └── config.ts              # Zod Content Collections definitions
│   ├── layouts/
│   │   └── Layout.astro           # Root HTML layout with SEO & SkipLink
│   ├── pages/
│   │   ├── index.astro            # Main portfolio page
│   │   └── admin.astro            # Interactive Admin Panel GUI
│   └── styles/
│       ├── tokens.css             # Central Design Tokens
│       └── global.css             # Global CSS reset & utilities
├── content/                       # Content JSON files
├── public/                        # Static assets (images, CV files)
├── admin/                         # Decap CMS setup files
├── portfolio-template-research/   # Open-Source research & legal catalog
└── astro.config.mjs
```

---

## 🛠️ Development & Build Commands

```bash
# Install dependencies
npm install

# Run local dev server (http://localhost:4321)
npm run dev

# Run diagnostic type check across templates
npx astro check

# Build production bundle
npm run build
```

---

## 📚 Open-Source Research Catalog

Evaluated open-source portfolio repositories and legal licensing analyses are recorded in [`portfolio-template-research/`](file:///c:/Users/ahmad/Desktop/templates/portfolio-template-research/README.md).
