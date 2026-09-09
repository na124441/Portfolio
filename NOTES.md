# Design & Architecture Assumptions — Portfolio v0.1

This document records the design choices and architectural assumptions implemented for **v0.1** of Nayant Srivastava's personal engineering portfolio.

---

## 1. Candidate Positioning & Aesthetic
- **Positioning**: Primary identity as **AI / ML Engineer** specializing in **Reinforcement Learning + Intelligent Systems**, with secondary foundations in **Software Engineering & Systems (DSA, System Design, Concurrency, Applied Math)**.
- **Aesthetic**: "Technical Editorial". Explicitly avoided flashy agency animations, 3D Canvas scenes, cyberpunk neon accents, or generic SaaS marketing cards. Instead, the site takes inspiration from mathematical papers, systems architecture documentation, and high-density engineering dashboards.
- **Palette**: Strict tricolor system:
  - Black (`#010a0b`): Dominant canvas and primary dark surfaces.
  - White (`#feffff`): Typography and crisp structural lines (`rgba(254, 255, 255, 0.1)`).
  - Metallic Gold (`#d4af37` / `#dfb15b` with `#edd899` specular highlights & `#997328` bronze undertones): Realized as genuine metallic gold with directional gradients (`linear-gradient(135deg, #c5a059 0%, #fdf0cd 35%, #d4af37 65%, #997328 100%)`), specular highlights, and brushed metal bevels, eliminating flat "cyber yellow" in favor of authentic gilded metal luster. Used strictly as a semantic accent.

## 2. Typography System
- **Display / Headings**: `Comfortaa` (geometric sans-serif) loaded via `next/font/google` for human warmth and distinct identity without compromising technical structure.
- **Body & Editorial Narrative**: `Inter` for optimal paragraph readability across all screen densities.
- **Code, Metadata, Timestamps, & Metrics**: `JetBrains Mono` for tabular alignment, numbers, tags, and technical schemas.

## 3. Flagship Project Selection
- **Case Study Choice**: As highlighted in `Portfolio_Doc.pdf`, **Self-Aware Spacecraft: Telemetry Anomaly Detection & System Reasoning** was selected as the flagship Tier-S project.
- **12 Case Study Sections**: Every one of the 12 required sections (`Problem`, `Motivation`, `Approach`, `System`, `Technical Deep Dive`, `The Hard Part`, `Experiments`, `Results`, `Failure`, `Evolution`, `Lessons`, `Future`, plus `Stack` and `Links`) is populated with realistic technical editorial text rather than generic lorem ipsum.
- **The Failure Principle**: Explicitly highlighted with a 5-step autopsy sequence (`Attempt → Failure → Diagnosis → Modification → Result`) covering how \(O(N^2)\) full self-attention memory overhead was replaced by sparse temporal graph representations.

## 4. Scalable Data Model
- Structured in `src/data/projects.ts` and typed via `src/types/project.ts`.
- Adding future projects (e.g. `Animath`, `Omnix`) requires only adding an object to the TypeScript file; the dynamic router at `/projects/[slug]` handles rendering automatically.

## 5. Contact & Mock Backend
- The contact form on the homepage is wired with a client-side mock submission handler and responsive validation. When ready for v0.2, it can be replaced with a Next.js Server Action or API route handler without touching the form component layout.
