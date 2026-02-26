

# Awais Chaudhary — Cinematic Portfolio

A dark, immersive, single-page portfolio with bold typography, dramatic scroll-driven animations, and a cinematic visual language that feels like an award-winning creative agency site — not a generic dev portfolio.

---

## Design Language
- **Deep dark background** (#0a0a0a) with subtle grain/noise texture overlay for depth
- **Signature accent**: electric blue or cyan for interactive elements and highlights
- **Typography**: Oversized display headings (clamp-scaled), tight letter-spacing, uppercase labels — editorial feel
- **No cards with borders** — instead, content floats in open space with generous whitespace
- **Horizontal rules, dot separators, and monospace labels** as visual rhythm

---

## Sections & Layout

### 1. Hero — Full-viewport cinematic intro
- Name "AWAIS CHAUDHARY" as massive display text spanning the viewport, with a staggered letter-by-letter fade-in
- Subtitle "Building WebDev Solutions" in monospace, typewriter-style reveal beneath
- Subtle animated gradient orb or glow effect in the background that follows mouse movement
- Scroll indicator at bottom (animated chevron)

### 2. About — Split reveal
- Left side: large pull-quote from the philosophy text, animated line-by-line on scroll
- Right side: the full introduction text that fades in paragraph by paragraph
- Tech stack displayed as a horizontal scrolling marquee strip of logos/text — continuous, auto-scrolling

### 3. Projects — Immersive showcase (the centerpiece)
- Each project gets a full-width section that reveals on scroll
- Large project title with parallax movement
- Description text slides in from the side
- Tech tags appear as small monospace pills
- "View Project →" link with magnetic hover effect
- Projects separated by dramatic horizontal lines with project number (01, 02, 03, 04)

### 4. Experience — Timeline with presence
- Vertical timeline with glowing accent dot markers
- Each entry slides in alternating from left/right on scroll
- Role title in large text, company/context smaller, duration as a subtle badge
- Clean, minimal — no heavy card styling

### 5. Testimonials — Cinematic quotes
- Large quotation marks as decorative background elements
- Testimonial text in italic serif-style display, centered
- Author name and role below in monospace
- Auto-rotating or scroll-triggered transition between the two testimonials

### 6. Contact — Bold CTA
- "Let's work together" as a large, animated heading
- Social links displayed as a horizontal row of minimal text links (not icons) with underline hover animations
- Email as a prominent clickable element with a glow effect on hover

### 7. Navigation
- Fixed top nav bar, transparent initially, gains a frosted-glass blur background on scroll
- Minimal text links: Home / About / Work / Contact
- Smooth scroll to sections on click

---

## Animations & Interactions
- **Scroll-triggered reveals**: All sections use intersection observer to trigger staggered fade + translate animations
- **Parallax text**: Hero name and project titles shift at different scroll speeds
- **Mouse-follow glow**: A soft radial gradient follows the cursor on the hero section
- **Magnetic hover**: CTA buttons and links subtly pull toward the cursor on hover
- **Staggered staggers**: Lists and tech tags animate in one by one with slight delays
- **Smooth page transitions**: Content enters with cinematic easing curves

---

## Technical Approach
- Single-page React app with smooth scroll, no routing needed beyond the index
- All animations via CSS keyframes + intersection observer (no heavy animation libraries needed)
- Fully responsive — stacked layout on mobile, expanded on desktop
- Dark mode only (no toggle needed — the dark aesthetic IS the design)

