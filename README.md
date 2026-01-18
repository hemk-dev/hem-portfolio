# Backend Engineer Portfolio

A production-ready portfolio website showcasing backend engineering experience, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Homepage Sections**: Hero, About, Experience, Skills, Services, Case Studies Preview, Integrations
- **Case Studies**: Detailed case studies with markdown content
- **Technical Writing**: Blog-style articles on backend engineering topics
- **Responsive Design**: Mobile-first, fully responsive layout
- **Performance**: Optimized for fast loading and SEO

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown files for case studies and articles
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── case-studies/       # Case studies pages
│   ├── technical-writing/  # Technical writing articles
│   └── contact/           # Contact page
├── components/             # React components
│   ├── layout/            # Header, Footer, Navigation
│   ├── sections/          # Homepage sections
│   ├── case-study/        # Case study components
│   └── ui/                # Reusable UI components
├── content/                # Markdown content
│   ├── case-studies/      # Case study markdown files
│   ├── technical-writing/ # Article markdown files
│   └── data/              # JSON data files
└── lib/                   # Utility functions
```

## Adding Content

### Case Studies

Add markdown files to `content/case-studies/` with frontmatter:

```markdown
---
title: "Case Study Title"
slug: "case-study-slug"
date: "2024-01-01"
technologies: ["Node.js", "PostgreSQL"]
metrics:
  - label: "Metric Name"
    value: "Metric Value"
---

Your case study content here...
```

### Technical Articles

Add markdown files to `content/technical-writing/` with frontmatter:

```markdown
---
title: "Article Title"
date: "2024-01-01"
description: "Article description"
tags: ["Tag1", "Tag2"]
readingTime: "5 min read"
---

Your article content here...
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically on push

### Other Platforms

Build the production bundle:
```bash
npm run build
npm start
```

## Customization

- Update contact information in `app/contact/page.tsx`
- Modify data files in `content/data/` for skills, services, experience
- Update metadata in `app/layout.tsx`
- Customize colors in `tailwind.config.ts`

## License

MIT
