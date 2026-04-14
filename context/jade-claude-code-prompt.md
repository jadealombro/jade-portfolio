# Claude Code Prompt — Build Jade Alombro Portfolio Website

You are helping build a portfolio website for **Jade Alombro — WordPress Developer** at `jadealombro.com`.

Read and follow this brief carefully.

## First priority: GitHub repository setup

Before building the site, the **first step** is to set up the project in a GitHub repository so development can move between multiple computers while staying local during development.

### Required repo workflow
1. Initialize a local Git repository.
2. Create a GitHub repository for the project.
3. Push the initial project structure immediately.
4. Make sure the project can be cloned and run locally on another machine.
5. Add a clear `README.md` with:
   - install instructions
   - local dev instructions
   - build instructions
   - deployment placeholder
6. Add a proper `.gitignore`.
7. Keep the setup simple and portable.

The goal is to support this workflow:
- work locally on computer A
- commit and push
- pull on computer B
- continue local development with minimal friction

Do this before design implementation begins.

---

## Project goal

Build a premium, minimal, React-based portfolio website that presents Jade as a **web developer specializing in WordPress**.

The site should feel:
- approachable and business-friendly
- technical and credible
- premium and minimal
- moderately interactive with subtle motion and transitions

The primary user flow should be:
**Home → Projects → Project Pages → Contact**

---

## Positioning

### Brand name
**Jade Alombro — WordPress Developer**

### Core positioning
Jade is a **web developer specializing in WordPress** who builds custom business websites and WooCommerce solutions for clients who want reliable, easy-to-manage websites that support real business needs.

### Supporting positioning
WordPress is the specialty, but the site should also make it clear that Jade can work **beyond WordPress when needed** and use the right tools for the project.

### AI positioning
Mention AI moderately:
- AI is part of the workflow where useful
- AI helps with speed, exploration, and problem solving
- quality and judgment still come first

---

## Audience
The site should primarily attract:
- direct clients
- small businesses
- larger companies

---

## Main goals
The site should make visitors feel:
- she knows what she’s doing
- she understands business needs, not just design
- I trust her with an important project

The main conversion path should be:
1. explore projects
2. build trust
3. submit a contact form

---

## Priority services
These should be emphasized most:
1. WordPress Website Development
2. WooCommerce Development
3. Maintenance & Support

Also mention supporting capabilities:
- custom plugins
- API integrations
- custom functionality
- rebuilds and improvements
- performance-conscious development
- SEO-friendly implementation
- AI-assisted workflows
- broader technical work beyond WordPress when needed

---

## Design direction

Take inspiration from the **feeling** of `https://antigravity.google/`, but do not imitate it directly.

Desired visual direction:
- premium and minimal
- polished and modern
- slightly atmospheric hero
- subtle motion and transitions
- strong typography
- editorial feel
- restrained color and layout system
- easy navigation

Avoid:
- over-animation
- visual gimmicks
- confusing interactions
- clutter
- anything that hurts performance or readability

---

## Build direction

Build this in a React-based setup that supports:
- strong SEO foundations
- good performance
- maintainable structure
- clean routing
- easy local development
- easy future deployment

Prefer a framework/setup that gives strong SEO and performance output for content-heavy pages.

---

## Required launch pages
1. Home
2. About
3. Services
4. WordPress Website Development
5. WooCommerce Development
6. Maintenance & Support
7. Projects
8. Individual Project Pages
9. Process
10. FAQ
11. Contact

Do not build the blog yet, but structure the codebase so it can be added later.

---

## Homepage requirements

The homepage should:
- lead with what Jade does first
- keep the main message broader than WooCommerce
- mention WooCommerce immediately below the main message
- guide people toward projects

Suggested homepage sections:
1. Hero
2. Short positioning intro
3. Featured projects
4. Services snapshot
5. How Jade works
6. Testimonials
7. Process preview
8. Quality / standards section
9. Final CTA

Working style traits to include:
- collaborative and clear
- thoughtful and detail-oriented
- practical and business-minded
- reliable and responsive

Quality standards to communicate:
- clean, maintainable builds
- performance-conscious development
- SEO-friendly structure
- thoughtful UX details
- scalable solutions

---

## About page requirements

The About page should be mostly professional, not highly personal.

Focus on:
- Jade’s specialization
- project approach
- communication style
- business-minded development
- quality standards
- moderate AI mention

Do not assume a personal photo is available at launch.

---

## Services requirements

Create:
- one main Services overview page
- one page for WordPress Website Development
- one page for WooCommerce Development
- one page for Maintenance & Support

Each service page should explain:
- what it is
- who it is for
- common needs it solves
- Jade’s approach
- what clients can expect
- related projects
- CTA

---

## Projects requirements

Projects page should include:
- 3 to 4 featured projects first
- remaining projects below
- simple grid only
- no filters for launch

Each card should show:
- image
- project name
- type of work first
- one-line summary

Project type labels can include:
- Custom WordPress Website
- WooCommerce Development
- Website Support & Maintenance
- Custom Functionality
- WordPress Redesign

---

## Individual project page requirements

Project pages should be medium-detail and client-focused.

Include:
1. Project header
2. Project overview
3. What was built
4. Highlights
5. Screenshots
6. Testimonial
7. CTA

Do not make these pages too tool-centric.

---

## Process page requirements

Include a dedicated Process page using this structure:
1. Discovery
2. Planning
3. Design direction
4. Build
5. Review and refinement
6. Launch
7. Handoff and support

This page should make Jade seem organized, clear, collaborative, and dependable.

---

## FAQ page requirements

Include questions like:
- What kinds of WordPress projects do you work on?
- Do you build custom WordPress websites?
- Do you work on existing WordPress sites?
- Do you offer WooCommerce development?
- Can you build custom functionality or plugins?
- Can you integrate third-party tools or APIs?
- Do you provide maintenance and support?
- Will I be able to manage the site after launch?
- Do you help with planning and content structure?
- Do you only work in WordPress?
- How do you use AI in your workflow?
- What is it like to work with you?
- How do timelines usually work?
- What should I prepare before contacting you?

---

## Contact page requirements

The Contact page should feel like a guided project brief.

Required fields:
- name
- email
- company or business name
- website URL
- what they need help with
- short project description
- timeline
- budget range
- how they heard about Jade

Also make it clear that:
- Jade reviews inquiries personally
- project details help but do not need to be perfect
- clients can reach out even if they are early in the planning stage

---

## SEO baseline

Make sure the implementation supports:
- crawlable HTML output
- clear metadata per page
- canonical tags
- robots.txt
- sitemap
- Open Graph metadata
- semantic HTML
- strong performance
- responsive layout
- optimized images

No location-specific SEO targeting for now.

---

## Output expectation

Build a site that feels like:
- a professional portfolio
- a trustworthy business website
- a polished showcase of WordPress and WooCommerce capability
- a modern developer brand

It should not feel like:
- a generic freelancer template
- a flashy experiment
- a thin image-only portfolio
