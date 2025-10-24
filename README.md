# Andrew Mulkey Fitness

A modern, professional fitness coaching website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **UGA Branding**: University of Georgia color scheme (Red & Black)
- **SEO Optimized**: Metadata and semantic HTML for better search rankings
- **Performance**: Optimized images and code splitting
- **Sections**:
  - Hero with social links
  - About section with credentials
  - Services/Training programs
  - Client testimonials
  - Blog with full article modal
  - Contact form
  - Professional footer

## Tech Stack

- **Framework**: Next.js 15.1.4 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter, Montserrat)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/ZachTorres/Andrew-Mulkey-Fitness.git
cd Andrew-Mulkey-Fitness
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel (Recommended)

This project is optimized for zero-config deployment to Vercel:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Alternatively, use the Vercel CLI:

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
andrew-mulkey-fitness/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services/programs
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Blog.tsx            # Blog section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
\`\`\`

## Color Scheme

- **UGA Red**: #BA0C2F
- **UGA Black**: #000000
- **UGA Silver**: #A6AAAB

## Social Media

- Instagram: [@andrewmulkeycoach](https://www.instagram.com/andrewmulkeycoach/)
- TikTok: [@andrew.mulkey](https://www.tiktok.com/@andrew.mulkey)
- YouTube: [Andrew Mulkey Channel](https://www.youtube.com/channel/UCt_qkqdYfJ4JOLL5voOlXAg)

## License

© 2025 Andrew Mulkey Fitness. All rights reserved.
