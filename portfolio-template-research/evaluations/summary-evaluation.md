# Synthesis & Adaptation Recommendation

## Key Findings from Research
1. **Design Systems > Ad-hoc Styling**: Production templates succeed when they rely on a strict set of design tokens (space, typography, color, radius, elevation) rather than unconstrained CSS gradients or random glassmorphism.
2. **Type-Safe Content Schema**: Using Astro's native `astro:content` with Zod validation guarantees that missing images, empty arrays, or missing optional fields fail gracefully at build time instead of crashing client-side.
3. **Graceful Optional Sections**: Sections (Certifications, Experience, Projects) must render conditionally only when valid content items exist.
4. **Accessibility (a11y)**: Must include proper focus rings (`:focus-visible`), skip-to-content links, dynamic color contrast check, and `aria-expanded` attributes.

## Commercial Product Strategy
We will combine the **type-safe content architecture of AstroPaper**, the **rich design system of Astrolus**, and the **modular CMS integration of Astrofy** into a bespoke, commercial-grade portfolio engine built directly in our repository.
