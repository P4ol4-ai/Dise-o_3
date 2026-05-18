---
name: Equipamiento Profesional
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4d4732'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e775f'
  outline-variant: '#d0c6ab'
  surface-tint: '#705d00'
  primary: '#705d00'
  on-primary: '#ffffff'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#e9c400'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5f5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#dbd9d9'
  on-tertiary-container: '#5f5f5f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

This design system is engineered for the high-end construction and industrial sector. It moves away from the cluttered, price-driven aesthetic of retail hardware stores and toward a "Precision Engineering" aesthetic. The visual style is **Corporate Modern** with a focus on structural integrity and clarity.

The UI should evoke the feeling of a professional toolset: reliable, durable, and highly organized. We prioritize high-quality machinery photography, technical specifications, and a clean interface that allows professionals to find specialized equipment without distraction. The atmosphere is architectural and authoritative, utilizing heavy contrast and generous whitespace to create an "industrial luxury" experience.

## Colors

The color palette is rooted in functional industrialism. 

- **Industrial Yellow (#FFD700):** Our primary action color. It signifies caution, visibility, and energy. It is used sparingly for primary CTAs and critical status indicators to ensure maximum impact.
- **Deep Black (#1A1A1A):** Used for primary surfaces, headers, and heavy typography. It provides the "solid" foundation of the brand.
- **Dark Gray (#333333):** Used for secondary text and structural elements like borders or icon backgrounds, providing depth without the harshness of pure black.
- **White (#FFFFFF):** The primary canvas color, ensuring the interface remains "clean" and professional rather than gritty.

The interaction model uses high-contrast states: Yellow elements transition to a deeper amber or black on hover, while dark elements utilize subtle opacity shifts.

## Typography

The typography strategy emphasizes authority and legibility. **Montserrat** is utilized for all headings to provide a strong, geometric, and urban feel that mirrors architectural blueprints. Headings should generally be set in SemiBold or Bold to maintain a "heavy duty" presence.

**Inter** is the workhorse for body copy and technical data. Its neutral, systematic design ensures that long lists of machinery specifications remain readable at any size. 

- Use uppercase labels for category headers and technical specs to reinforce the industrial documentation vibe.
- Maintain tight letter-spacing on display headings for a more modern, premium look.

## Layout & Spacing

The design system employs a **Fixed Grid** layout for desktop (1280px max-width) to maintain a controlled, professional presentation. The rhythmic spacing is based on an **8px baseline grid**, ensuring mathematical precision in the alignment of technical data and components.

- **Desktop:** 12-column grid with 24px gutters. Content is centered with generous outer margins.
- **Tablet:** 8-column grid with 24px gutters and 32px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Layouts should prioritize "Information Density" for product specs but "Breathable Luxury" for marketing hero sections. Use wide section padding (80px+) to separate distinct equipment categories.

## Elevation & Depth

To maintain the "Professional" vibe, depth is handled with extreme subtlety. We avoid heavy shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

- **Cards:** Use a 1px border (#E0E0E0) combined with a very soft, diffused ambient shadow (Y: 4px, Blur: 12px, Color: rgba(0,0,0,0.05)). This makes the equipment feel like it’s sitting on a clean workshop table.
- **Floating Elements:** Modals and dropdowns use a slightly more pronounced shadow (Y: 8px, Blur: 24px, Color: rgba(0,0,0,0.1)) to indicate hierarchy.
- **Interactive Surfaces:** Buttons do not use elevation; they rely on flat color fills and high-contrast transitions. On hover, cards may lift slightly (moving -4px on the Y-axis) to signal interactivity.

## Shapes

The shape language is **Soft (Level 1)**. This system avoids aggressive rounding to keep the aesthetic feeling "machined" and "engineered."

- **Standard Elements:** 0.25rem (4px) radius for buttons, input fields, and small cards. This provides just enough softness to feel modern without losing the "rigid" industrial character.
- **Large Components:** 0.5rem (8px) radius for primary containers or featured equipment images.
- **Icons:** Should be stroke-based with 2px weight, featuring slightly rounded terminal points to match the UI's corner radius.

## Components

### Buttons
- **Primary:** Solid Industrial Yellow (#FFD700) with Black (#1A1A1A) text. High-contrast, no gradient. Hover state: darken to #E6C200.
- **Secondary:** Solid Black with White text. Hover: shift to Dark Gray (#333333).
- **Ghost:** 2px Black border with transparent background.

### Cards
- White background with a 1px light gray border. Product images should be high-resolution with removed backgrounds (PNG) to appear as if they are integrated into the UI.

### Inputs & Forms
- Outlined style with 1px Dark Gray borders. Label text should use the uppercase `label-md` typography. Focus states use a 2px Industrial Yellow border.

### Data Tables
- Critical for technical specs. Use alternating row stripes in #F5F5F5 (Neutral). Typography should be Inter 14px for high density.

### Industrial Iconography
- Use custom, thick-stroke icons representing machinery, tools, and construction safety. Icons should always be monochromatic (Black or Dark Gray) unless indicating a specific status or warning.