# Jade Alombro Portfolio Website Work Plan

## Purpose

This document is meant to be used as the starting brief for Claude Code to help build `jadealombro.com`.

The website should present Jade Alombro as a **web developer specializing in WordPress** who builds custom business websites, WooCommerce solutions, and reliable long-term site support.

The site should feel:

- approachable and business-friendly
- technical and credible
- premium and minimal
- moderately interactive, with subtle motion and transitions

The primary visitor flow should be:

**Home → Projects → Individual Project Pages → Contact**

---

## Important development instruction for Claude Code

Before building the site itself, the **first step** should be to set the project up in a **GitHub repository** so development can continue across multiple computers while still remaining local during development.

### Required setup approach

1. Initialize the project in a local Git repository.
2. Create a GitHub repository for the project.
3. Push the initial project structure to GitHub immediately.
4. Keep the project runnable locally on any computer by cloning the repository and installing dependencies.
5. Use GitHub as the source of truth during development so work can move between computers with simple `push` and `pull` workflows.
6. Include a clear `README.md` with:
   - project setup instructions
   - install command
   - local dev command
   - build command
   - deployment notes placeholder
7. Add a sensible `.gitignore`.
8. Keep the stack and setup simple enough that the project can be started on another machine with minimal friction.

### Development workflow goal

The project should support this workflow:

- work locally on computer A
- commit and push to GitHub
- pull on computer B
- continue development locally without losing progress

This repository setup should happen **before** design implementation begins.

---

## Project overview

### Brand name
**Jade Alombro — WordPress Developer**

### Domain
`jadealombro.com`

### Audience
The site should primarily attract:

- direct clients
- small businesses
- larger companies

### SEO location targeting
No location-specific SEO targeting for now.

### Main business goal
Encourage visitors to:

1. view projects first
2. build trust through the work
3. contact Jade through a guided project inquiry form

---

## Positioning

### Core positioning
Jade Alombro is a **web developer specializing in WordPress** who builds custom business websites and WooCommerce solutions for clients who want a reliable, easy-to-manage site that supports real business needs.

### Supporting positioning
WordPress is the specialization, but the site should also make it clear that Jade can work **beyond WordPress when needed** and use other tools when the project calls for it.

### AI positioning
AI should be mentioned **moderately**, not as the main hook.

The framing should be:

- AI is part of the workflow where it adds value
- AI can help with speed, exploration, and problem solving
- quality, implementation, and judgment still come first

---

## Messaging priorities

The site should make visitors feel:

- she knows what she’s doing
- she understands business needs, not just design
- I trust her with an important project

### Messaging pillars

1. **Business-first thinking**
   - The work should be framed around business goals and practical needs, not just visuals.

2. **Custom WordPress expertise**
   - Emphasize custom builds, not generic cookie-cutter work.

3. **Reliable execution**
   - Show thoughtfulness, professionalism, and technical depth.

4. **Maintainable outcomes**
   - Mention that sites should be manageable after launch, but keep this as a secondary trust point.

5. **Clear communication**
   - Make communication style and process visible.

6. **Modern, practical workflow**
   - Mention AI and broader technical ability without making them the centerpiece.

---

## Site style direction

The site should take inspiration from the **feeling** of `https://antigravity.google/`, but should not imitate it too literally.

### Desired visual direction

- premium and minimal
- polished and modern
- slightly atmospheric in the hero
- clean editorial layout
- subtle motion and transitions
- strong typography
- restrained visual system
- clear and easy to navigate

### Interaction style

The site should be **moderately interactive**, not highly immersive.

Use:

- subtle entrance motion
- refined hover states
- polished transitions
- smooth scrolling behavior if appropriate
- motion that supports the experience without distracting from content

Avoid:

- excessive visual tricks
- confusing navigation
- animation that hurts performance
- interaction that makes the site feel like an experiment instead of a professional portfolio

---

## Build direction

The site is expected to be built in **React**.

Claude Code should choose a modern React-based setup that supports:

- strong SEO foundations
- good performance
- maintainable code structure
- easy local development
- straightforward deployment later

### Strong preference
Choose a setup that balances:

- developer simplicity
- performance
- SEO readiness
- maintainability

If a framework decision is needed, prioritize an approach that gives good SEO output and clean routing.

---

## Recommended sitemap

### Launch pages

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

### Later phase
12. Articles / Insights / Blog

Do not build the blog in version 1 unless it is trivial to scaffold for later use.

---

## Priority services

The most important services to emphasize are:

1. **WordPress Website Development**
2. **WooCommerce Development**
3. **Maintenance & Support**

### Supporting capabilities to mention
These should appear on the site as supporting expertise:

- custom plugin development
- API integrations
- custom functionality
- website rebuilds and improvements
- performance-conscious development
- SEO-friendly implementation
- AI-assisted workflows
- broader development support beyond WordPress when needed

---

## Homepage requirements

The homepage should be the strongest conversion page and should guide users toward the projects.

### Hero direction
The hero should lead with **what Jade does first**, not abstract brand language.

It should stay broader than WooCommerce in the main headline, with WooCommerce introduced immediately below.

### Hero feel
- slightly atmospheric
- premium
- clear and readable
- not too dense

### Hero content direction
The hero should communicate:

- custom WordPress websites for businesses
- business-oriented development
- WordPress specialization
- WooCommerce and broader capability just below the main headline

### Suggested homepage structure

1. **Hero**
   - clear positioning
   - slightly atmospheric presentation
   - primary CTA toward projects

2. **Short positioning / intro**
   - Jade is a web developer specializing in WordPress
   - builds reliable, easy-to-manage business websites
   - can work beyond WordPress when needed

3. **Featured projects**
   - feature 3 to 4 strongest projects first

4. **Services snapshot**
   - WordPress Website Development
   - WooCommerce Development
   - Maintenance & Support
   - brief references to plugins, integrations, custom functionality

5. **How Jade works**
   - collaborative and clear
   - thoughtful and detail-oriented
   - practical and business-minded
   - reliable and responsive

6. **Testimonials**
   - show a few strong testimonials on the homepage

7. **Process preview**
   - short summary with link to full Process page

8. **Quality / standards section**
   - clean, maintainable builds
   - performance-conscious development
   - SEO-friendly structure
   - thoughtful UX details
   - scalable solutions

9. **Final CTA**
   - direct users to projects or contact

---

## Navigation direction

The navigation should feel **slightly editorial**, while staying clean and business-friendly.

It should not feel corporate-heavy or overly app-like.

Possible navigation structure:

- Home
- About
- Services
- Projects
- Process
- FAQ
- Contact

A prominent CTA can be included in the header, but projects should remain the primary discovery path.

---

## About page requirements

The About page should be **mostly professional**, not highly personal.

It should focus on:

- Jade’s specialization
- how Jade thinks about client work
- how Jade approaches quality and maintainability
- communication style
- business-minded development
- clear process and support

### Suggested About page structure

1. Professional introduction
2. What Jade specializes in
3. Approach to client projects
4. Working style
5. Communication and collaboration
6. Quality and development standards
7. Short AI statement

### Traits to include
- collaborative and clear
- thoughtful and detail-oriented
- practical and business-minded
- reliable and responsive

### Communication points to include
- clear timelines and expectations
- straightforward communication
- collaborative feedback
- guided handoff and support

### Photo
Do **not** assume a personal photo is available at launch.
Design the page so a photo can be added later if desired.

---

## Services page requirements

The Services section should include:

### Main Services page
A clean overview page that introduces all services and links into dedicated pages.

### Dedicated service pages
Build separate pages for:

1. **WordPress Website Development**
2. **WooCommerce Development**
3. **Maintenance & Support**

These pages should have enough written depth to support trust and SEO.

### Supporting services
The main Services page should also mention:

- custom plugins
- API integrations
- rebuilds and site improvements
- performance-conscious development
- SEO-friendly implementation
- AI-assisted workflows
- broader web development capability where relevant

---

## Recommended service page content structure

Each major service page should include:

1. clear headline
2. short explanation of the service
3. who it is for
4. common needs/problems it solves
5. how Jade approaches it
6. what clients can expect
7. related projects
8. CTA

---

## Projects page requirements

The Projects page should be simple and elegant.

### Structure
- 3 to 4 featured projects first
- remaining projects below
- simple grid only
- no filters for launch

### Featured project selection criteria
Choose the featured projects based on the best mix of:

- strong visual design
- custom WordPress depth
- business usefulness
- recognizable or trust-building value

### Project card requirements
Each project card should include:

- image
- project name
- type of work first
- one-line summary

### Type of work labels
Lead with the type of work, for example:

- Custom WordPress Website
- WooCommerce Development
- Website Support & Maintenance
- Custom Functionality
- WordPress Redesign

The one-line summary below can explain the business context.

---

## Individual project page requirements

Project pages should be **medium-detail**, client-focused, and easy to scan.

They should not read like technical documentation.

### Required project page sections

1. **Project header**
   - name
   - type of work
   - short summary

2. **Project overview**
   - who it was for
   - what they needed
   - context of the project

3. **What was built**
   - main scope
   - features
   - custom functionality if relevant
   - WooCommerce or integration details if relevant

4. **Highlights**
   - useful improvements
   - business-relevant features
   - maintainability or usability wins

5. **Screenshots / visuals**
   - show enough imagery to build confidence

6. **Testimonial**
   - if available

7. **CTA**
   - each project page should end with a project-related CTA

### Important note
Do **not** make project pages too tool-centric.
The writing should stay client-focused, not stack-focused.

---

## Process page requirements

The site should include a dedicated Process page.

Use a **detailed 5 to 7-step process**.

### Recommended process

1. Discovery
2. Planning
3. Design direction
4. Build
5. Review and refinement
6. Launch
7. Handoff and support

### Process page goals
It should communicate that Jade is:

- organized
- clear
- collaborative
- dependable

---

## FAQ page requirements

Include a dedicated FAQ page.

### Suggested FAQ topics

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

The Contact page should feel like a **guided project brief**, not just a generic contact form.

It should still feel welcoming and easy to complete.

### Contact page goals
- make it easy to reach out
- encourage better project details
- support qualified conversations
- stay approachable

### Required form fields
- name
- email
- company or business name
- website URL
- what they need help with
- short project description
- timeline
- budget range
- how they heard about Jade

### Contact page copy direction
Make it clear that:
- Jade personally reviews inquiries
- project details are helpful but do not need to be perfect
- clients can still reach out even if they are early in the planning stage

---

## Trust-building content requirements

Trust is one of the main goals of the site.

The site should build trust through:

- real project examples
- thoughtful writing
- strong homepage testimonials
- more specific testimonials inside project pages
- clear explanation of process
- business-minded copy
- understated but confident design
- visible quality standards
- visible communication standards

### Important note
Do **not** rely on stats strips or loud credibility banners.
Trust should feel earned through the quality of the portfolio and the clarity of the content.

---

## Development standards to communicate on the site

The content should reinforce these standards:

- clean, maintainable builds
- performance-conscious development
- SEO-friendly structure
- thoughtful UX details
- scalable solutions

These can appear across the homepage, services, about, and process pages.

---

## SEO baseline requirements

The site should launch with a strong SEO baseline, even without location targeting.

### On-page SEO
Each main page should have:

- a clear H1
- logical heading hierarchy
- descriptive title tag
- custom meta description
- clean URL
- strong intro copy
- internal links
- good image alt text

### Technical SEO
The site should include:

- crawlable HTML output
- indexable page content
- canonical tags
- robots.txt
- XML sitemap
- Open Graph metadata
- semantic markup
- responsive layout
- optimized images
- good performance fundamentals

### Content SEO
The written content should support topics like:

- WordPress website development
- custom WordPress development
- WooCommerce development
- WordPress maintenance and support
- custom WordPress solutions
- WordPress developer for businesses

### Important technical note
Because the site will likely be React-based, Claude Code should make sure the final implementation is SEO-friendly and not dependent on weak client-only rendering for core content.

---

## Blog / articles

Do **not** include a full blog in version 1.

However, Claude Code can structure the project so an Articles or Insights section can be added later without a large rebuild.

---

## Design system guidance

The design system should support:

- premium minimal presentation
- strong typography
- comfortable spacing
- subtle motion
- clear hierarchy
- polished project presentation
- restrained color usage

### Avoid
- visual clutter
- too many accent styles
- decorative noise
- over-animated sections
- portfolio gimmicks

---

## Content priorities for launch

When preparing content, prioritize the following first:

1. homepage messaging
2. services copy
3. featured project summaries
4. individual project page content
5. about page copy
6. testimonials
7. process page copy
8. FAQ
9. contact page copy

---

## Suggested implementation phases for Claude Code

### Phase 1 — Repository and project setup
- initialize repo
- create GitHub repository
- push initial structure
- set up README
- set up local dev environment
- confirm project can be cloned and run on another machine

### Phase 2 — Foundation and architecture
- choose framework/setup
- create page structure
- define routing
- create shared layout
- define design tokens / theme basics
- set up SEO utilities

### Phase 3 — Core page design and development
- homepage
- services overview
- service detail template
- projects grid
- project detail template
- about
- process
- FAQ
- contact

### Phase 4 — Content population
- add final copy
- add projects
- add testimonials
- add imagery
- refine CTAs

### Phase 5 — Polish and optimization
- motion refinement
- responsive checks
- accessibility review
- SEO review
- performance checks
- metadata and sitemap
- final cleanup

---

## Final output goal

The finished site should feel like:

- a high-quality professional portfolio
- a trustworthy business-facing website
- a modern developer brand
- a polished showcase of custom WordPress capability
- a site that leads naturally from trust to inquiry

It should not feel like:
- a generic freelancer template
- an overly personal creator site
- a flashy experimental microsite
- a thin portfolio with only visuals

---

## Instruction summary for Claude Code

Build a React-based portfolio website for **Jade Alombro — WordPress Developer** with a premium minimal aesthetic, subtle motion, strong project presentation, solid SEO baseline, and a trust-first structure.

Prioritize:

- GitHub repository setup first
- local development across multiple computers via push/pull workflow
- homepage → projects → contact journey
- custom WordPress and WooCommerce positioning
- approachable, business-friendly, technically credible tone
- medium-detail project pages
- service overview plus dedicated top service pages
- guided project contact form
- strong SEO and performance baseline
- blog deferred until later
