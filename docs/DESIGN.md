---
name: Amazonia Heritage & Horizon
colors:
  surface: '#fbf9f4'
  surface-dim: '#dbdad5'
  surface-bright: '#fbf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ee'
  surface-container: '#f0eee9'
  surface-container-high: '#eae8e3'
  surface-container-highest: '#e4e2dd'
  on-surface: '#1b1c19'
  on-surface-variant: '#424843'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ec'
  outline: '#727972'
  outline-variant: '#c2c8c1'
  surface-tint: '#466551'
  primary: '#001408'
  on-primary: '#ffffff'
  primary-container: '#0b2b1a'
  on-primary-container: '#73947d'
  inverse-primary: '#accfb5'
  secondary: '#745853'
  on-secondary: '#ffffff'
  secondary-container: '#fed7d0'
  on-secondary-container: '#795c57'
  tertiary: '#190f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#332300'
  on-tertiary-container: '#aa8843'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c7ebd1'
  primary-fixed-dim: '#accfb5'
  on-primary-fixed: '#012111'
  on-primary-fixed-variant: '#2e4d3a'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#e3beb8'
  on-secondary-fixed: '#2b1613'
  on-secondary-fixed-variant: '#5b403c'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf9f4'
  on-background: '#1b1c19'
  surface-variant: '#e4e2dd'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 64px
    fontWeight: '500'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

This design system is built for a premium tourism gateway into Northern Brazil, targeting high-net-worth individuals seeking authentic but ultra-luxurious ecological experiences. The brand personality is "The Sophisticated Explorer"—authoritative, culturally rooted, and impeccably refined.

The design style leans into **Minimalism** with **Tactile** accents. It avoids the cluttered "travel agency" look in favor of an editorial, gallery-like experience. Generous whitespace (macro-typography) acts as a canvas for high-definition nature photography. The emotional goal is to evoke a sense of "Quiet Luxury" where trust is established through technical precision and aesthetic restraint.

## Colors

The palette is derived from the Amazonian canopy and the mineral wealth of the region.

*   **Primary (Deep Forest Green):** Used for navigation, primary buttons, and heavy typographic elements to anchor the brand in the jungle landscape.
*   **Secondary (Rich Earthy Brown):** Used for accents, dividers, and secondary UI elements to provide warmth and stability.
*   **Tertiary (Metallic Gold):** Used sparingly for call-to-actions, luxury markers, and premium status indicators. It should never be used for large surfaces.
*   **Neutral (Cream/Off-White):** The foundation of the UI. This replaces pure white to reduce eye strain and provide a softer, more organic feel.
*   **Text:** Primary text should be the Deep Forest Green (#0B2B1A) rather than black to maintain a cohesive atmospheric tone.

## Typography

The typographic strategy balances heritage and utility. 

**EB Garamond** provides the luxury editorial feel required for headings. It should be set with slightly tighter letter-spacing for large displays to appear more cohesive. 

**Hanken Grotesk** is chosen for its modern, precise architecture. It handles technical data—like travel durations, coordinates, and prices—with clarity. Use the `label-caps` style for small metadata or section overline headers to create a rhythmic hierarchy.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). 

The spacing philosophy is "breathability." Vertical gaps between major sections (`section-gap`) are intentionally large to signify exclusivity and prevent the interface from feeling "salesy." 

*   **Desktop:** 12 columns, 24px gutters, with a max-width of 1280px to ensure readability.
*   **Mobile:** 4 columns, 16px gutters, 20px side margins.
*   **Rhythm:** All margins and paddings should be increments of the 8px base unit.

## Elevation & Depth

To maintain a sophisticated and modern feel, this design system avoids heavy drop shadows. Instead, it utilizes **Tonal Layers** and **Low-Contrast Outlines**.

*   **Surface Hierarchy:** The base layer is the Cream background. Floating elements (like cards) use the same background color but are defined by a 1px border in a very light Earthy Brown at 10% opacity.
*   **Depth:** When depth is required (e.g., for navigation menus), use a "Whisper Shadow"—an extremely diffused, large-radius shadow (30px-40px) with very low opacity (5%) tinted with the Primary Forest Green. 
*   **Glassmorphism:** Use subtle backdrop blurs (10px) on navigation bars to allow the high-quality photography to bleed through as the user scrolls, creating a sense of immersion.

## Shapes

The shape language is "Soft-Geometric." While the overall structure is clean and professional, we incorporate **Subtle Organic Shapes** through mask overlays on photography. 

*   **Corner Radius:** We use a "Soft" setting (0.25rem/4px) for most UI elements (buttons, inputs). This maintains a sharp, professional look while removing the "aggressive" edges of pure 0px corners.
*   **Photography:** Use large-radius clipping (rounded-xl) or organic "pebble" masks for featured imagery to mimic natural forms like river stones or leaves.

## Components

*   **Buttons:** Primary buttons are solid Deep Forest Green with Gold text or Cream text. They should have a high horizontal padding (2.5x the height) to feel expansive and premium. 
*   **Inputs:** Minimalist bottom-border only or very light Earthy Brown outlines. Focus states transition the border to Gold.
*   **Cards:** Use a "Frameless" approach for destination cards. The image should be dominant, with typography placed either directly below with generous padding or overlaid using a subtle gradient fade.
*   **Chips:** Used for "Experience Tags" (e.g., "Private Jetty," "Eco-Certified"). These should be Earthy Brown outlines with Hanken Grotesk labels.
*   **Navigation:** A centered, minimal top-bar. Use a "Gold Accent" dot or underline for the active page state.
*   **Specialty Component (The Itinerary Timeline):** A vertical, thin line in Gold with small Forest Green nodes to represent journey points, combining practicality with a high-end aesthetic.