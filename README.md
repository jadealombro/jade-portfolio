# Jade Alombro — Portfolio Website

Portfolio website for [jadealombro.com](https://jadealombro.com). Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Project overview

A premium, minimal portfolio website presenting Jade Alombro as a WordPress developer specializing in custom business websites, WooCommerce solutions, and long-term site support.

**Primary visitor flow:** Home → Projects → Contact

---

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Forms:** React Hook Form
- **Sitemap:** next-sitemap

---

## Prerequisites

- Node.js 20+
- npm 10+

---

## Install

```bash
git clone https://github.com/YOUR_USERNAME/jade-portfolio.git
cd jade-portfolio
npm install
```

---

## Local development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Build

```bash
npm run build
npm run start
```

---

## Generate sitemap

The sitemap and robots.txt are generated automatically after build via `next-sitemap`. To generate manually:

```bash
npm run postbuild
```

Output: `public/sitemap.xml` and `public/robots.txt`

---

## Project structure

```
src/
├── app/             # Pages (Next.js App Router)
├── components/
│   ├── layout/      # Nav, Footer
│   ├── ui/          # Shared UI primitives
│   ├── home/        # Homepage sections
│   ├── projects/    # Project card + grid
│   └── contact/     # Contact form
├── data/            # Site content (projects, testimonials, FAQ)
└── lib/             # Types, metadata helpers
```

---

## Multi-computer workflow

```bash
# On computer A — after making changes
git add .
git commit -m "your message"
git push

# On computer B — to continue
git pull
npm install   # only if package.json changed
npm run dev
```

---

## Deployment

Deployment instructions to be added. Site is intended for deployment to Vercel or similar static/edge hosting.

Recommended steps (Vercel):
1. Connect the GitHub repository in the Vercel dashboard
2. Set environment variables if needed
3. Vercel will auto-deploy on every push to `main`
