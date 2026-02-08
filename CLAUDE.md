# Studio - Next.js Website Template

## Project Overview

This is a **Tailwind Plus** premium site template called "Studio" - a modern, animated agency/studio website built with Next.js 15, React 19, and Tailwind CSS v4. It's designed as a showcase template for a development studio with case studies, blog posts, and service pages.

**Template Origin**: Downloaded from Tailwind UI (commercial product)
**License**: Tailwind Plus license
**Theme**: Dark, professional agency website with sophisticated animations

---

## Technology Stack

### Core Framework
- **Next.js 15.5.10** - Using App Router architecture
- **React 19.2.4** - Latest version with Server Components
- **TypeScript 5.8.3** - Full type safety

### Styling
- **Tailwind CSS 4.1.15** - Utility-first CSS framework
- **@tailwindcss/postcss 4.1.15** - PostCSS integration
- **Framer Motion 12.23.11** - Animation library for smooth transitions

### Content & MDX
- **@next/mdx 15** - MDX support for Next.js
- **@mdx-js/loader 3.1.0** & **@mdx-js/react 3.1.0** - MDX compilation
- **remark-gfm 4.0.1** - GitHub Flavored Markdown support
- **rehype-shiki 2.2.1** - Syntax highlighting for code blocks
- **recma-import-images 0.0.3** - Import images in MDX files
- **rehype-unwrap-images 1.0.0** - Unwrap images from paragraphs
- **remark-rehype-wrap 0.0.5** - Wrap content with custom components

### Utilities
- **clsx 2.1.1** - Conditional classname utility
- **fast-glob 3.3.3** - Fast file globbing for MDX discovery
- **sharp 0.34.3** - Image optimization

---

## Project Structure

```
severuz-nextjs-website/
├── src/
│   ├── app/                    # Next.js 15 App Router pages
│   │   ├── layout.tsx         # Root layout (HTML wrapper)
│   │   ├── page.tsx           # Homepage
│   │   ├── not-found.tsx      # 404 page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── blog/              # Blog with MDX articles
│   │   │   ├── page.tsx       # Blog listing page
│   │   │   ├── wrapper.tsx    # MDX wrapper for articles
│   │   │   └── [slug]/
│   │   │       └── page.mdx   # Individual blog posts
│   │   ├── work/              # Case studies with MDX
│   │   │   ├── page.tsx       # Case studies listing
│   │   │   ├── wrapper.tsx    # MDX wrapper for case studies
│   │   │   └── [client]/
│   │   │       └── page.mdx   # Individual case studies
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── process/
│   │       └── page.tsx
│   │
│   ├── components/            # Reusable React components
│   │   ├── RootLayout.tsx    # Main layout with header/nav/footer
│   │   ├── MDXComponents.tsx # Custom MDX component mappings
│   │   ├── FadeIn.tsx        # Animation component (Framer Motion)
│   │   ├── Container.tsx     # Max-width container wrapper
│   │   ├── Button.tsx        # CTA button component
│   │   ├── Logo.tsx          # Company logo with hover states
│   │   ├── Footer.tsx        # Site footer
│   │   ├── GridPattern.tsx   # Decorative background pattern
│   │   ├── ContactSection.tsx
│   │   ├── Testimonial.tsx
│   │   ├── PageIntro.tsx
│   │   ├── SectionIntro.tsx
│   │   ├── PageLinks.tsx
│   │   ├── StylizedImage.tsx
│   │   ├── GrayscaleTransitionImage.tsx
│   │   ├── Border.tsx
│   │   ├── Blockquote.tsx
│   │   ├── List.tsx
│   │   ├── GridList.tsx
│   │   ├── TagList.tsx
│   │   ├── StatList.tsx
│   │   ├── Offices.tsx
│   │   └── SocialMedia.tsx
│   │
│   ├── lib/                   # Utility functions
│   │   ├── mdx.ts            # MDX file loading utilities
│   │   └── formatDate.ts     # Date formatting helper
│   │
│   ├── images/               # Static images
│   │   ├── clients/          # Client logos (light/dark variants)
│   │   └── team/             # Team member photos
│   │
│   ├── fonts/                # Custom font files
│   │
│   └── styles/               # Global styles
│       ├── tailwind.css      # Tailwind imports & custom utilities
│       ├── typography.css    # MDX typography styles
│       └── base.css          # Base CSS resets
│
├── next.config.mjs           # Next.js configuration with MDX setup
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── mdx-components.tsx        # Global MDX components
├── package.json              # Dependencies
└── README.md                 # Setup instructions
```

---

## Architecture Patterns

### 1. **App Router (Next.js 15)**
- Uses the modern App Router with file-based routing
- All routes are in `src/app/` with `page.tsx` files
- Leverages Server Components by default
- Client Components marked with `'use client'` directive (e.g., `RootLayout.tsx`, `FadeIn.tsx`)

### 2. **MDX Integration**
The project has sophisticated MDX handling for blog posts and case studies:

**MDX Configuration** (`next.config.mjs`):
- Uses conditional layouts based on directory
- Blog posts (`src/app/blog/*/page.mdx`) get the `@/app/blog/wrapper` layout
- Case studies (`src/app/work/*/page.mdx`) get the `@/app/work/wrapper` layout
- Custom rehype/remark plugins for syntax highlighting, image handling, and typography wrapping

**MDX File Structure**:
```typescript
// Example: src/app/blog/[slug]/page.mdx
export const article = {
  date: '2024-01-15',
  title: 'Article Title',
  description: 'Short description',
  author: {
    name: 'Author Name',
    role: 'Job Title',
    image: { src: importedImage }
  }
}

// Markdown content here...
```

**MDX Loading** (`src/lib/mdx.ts`):
- `loadArticles()` - Dynamically loads all blog articles from `src/app/blog/*/page.mdx`
- `loadCaseStudies()` - Dynamically loads all case studies from `src/app/work/*/page.mdx`
- Uses `fast-glob` to find all MDX files
- Extracts metadata exports (`article`, `caseStudy`) from each file
- Sorts by date (newest first)
- Generates `href` property for routing

### 3. **Component Patterns**

**Layout Hierarchy**:
```
app/layout.tsx (Root HTML wrapper)
  └─ RootLayout.tsx (Header + Navigation + Footer)
      └─ Page content
```

**Animation Patterns** (Framer Motion):
- `<FadeIn>` - Fade-in animation for single elements
- `<FadeInStagger>` - Staggered fade-in for lists of items
- `<MotionConfig>` - Global animation configuration
- Respects `prefers-reduced-motion` for accessibility

**Container Pattern**:
- `<Container>` component provides consistent max-width and padding
- Can render as different HTML elements via `as` prop

**Image Patterns**:
- `<StylizedImage>` - Images with decorative border styling
- `<GrayscaleTransitionImage>` - Images that transition from grayscale to color on hover
- Uses Next.js `<Image>` component for optimization

### 4. **TypeScript Patterns**

**Path Aliases** (tsconfig.json):
- `@/*` maps to `./src/*`
- Example: `import { Container } from '@/components/Container'`

**Type Definitions**:
- `Article` interface for blog posts
- `CaseStudy` interface for portfolio work
- `MDXEntry<T>` wrapper type that adds `href` and `metadata` properties

### 5. **Styling Approach**

**Tailwind CSS v4**:
- Utility-first approach throughout codebase
- Custom utilities in `src/styles/tailwind.css`
- Typography styles for MDX content in `src/styles/typography.css`
- Dark theme focused (neutral-950 background, white text)
- Responsive design with sm/md/lg/xl breakpoints

**Color Palette**:
- Primary: `neutral-950` (very dark gray, almost black)
- Text: `neutral-950` for light backgrounds, `white` for dark backgrounds
- Accents: `neutral-600`, `neutral-800`, `neutral-900`
- Transitions between grayscale tones

**Custom Classes**:
- `font-display` - Custom display font family
- `rounded-4xl` - Extra large border radius for cards/sections
- `text-balance` - Balance text wrapping

---

## Key Pages & Routes

### Homepage (`/`)
**File**: `src/app/page.tsx`
- Hero section with title and intro
- Client logos grid
- Featured case studies (first 3)
- Testimonial component
- Services section with image
- Contact section

### About (`/about`)
**File**: `src/app/about/page.tsx`
- Company story and values
- Team members grid
- Office locations

### Work (`/work`)
**File**: `src/app/work/page.tsx`
- Portfolio/case studies listing
- Individual case studies at `/work/[client]` (MDX files)
- Example: `/work/family-fund`, `/work/phobia`, `/work/unseal`

### Blog (`/blog`)
**File**: `src/app/blog/page.tsx`
- Blog articles listing
- Individual articles at `/blog/[slug]` (MDX files)
- Example: `/blog/future-of-web-development`

### Process (`/process`)
**File**: `src/app/process/page.tsx`
- Company's process and methodology

### Contact (`/contact`)
**File**: `src/app/contact/page.tsx`
- Contact form and information

---

## Component Library

### Layout Components
- **RootLayout** - Main app layout with animated header/nav, handles mobile menu
- **Container** - Content width constraint (max-w-7xl)
- **Footer** - Site footer with navigation and newsletter signup
- **PageIntro** - Page title and intro section
- **SectionIntro** - Section headers with eyebrow text
- **ContactSection** - Reusable contact CTA section

### UI Components
- **Button** - Primary CTA button (can be link or button)
- **Border** - Decorative border element
- **Logo** - Company logo with Logomark variant
- **GridPattern** - Animated SVG background pattern

### Content Components
- **FadeIn/FadeInStagger** - Framer Motion animation wrappers
- **StylizedImage** - Images with decorative styling
- **GrayscaleTransitionImage** - Hover effect images
- **Testimonial** - Client testimonial card
- **Blockquote** - Styled blockquote for MDX
- **List/ListItem** - Styled list component
- **GridList** - Icon + title + description grid layout
- **TagList** - Horizontal tag/badge list
- **StatList** - Statistics display grid
- **PageLinks** - Related pages navigation

### Special Components
- **MDXComponents** - Custom component mappings for MDX content
- **Offices** - Office locations display
- **SocialMedia** - Social media links

---

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev           # Runs on http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## MDX Content Guidelines

### Adding a Blog Post
1. Create a new directory: `src/app/blog/[slug]/`
2. Add `page.mdx` file
3. Include metadata export at the top:
```tsx
export const article = {
  date: 'YYYY-MM-DD',
  title: 'Post Title',
  description: 'Brief description',
  author: {
    name: 'Author Name',
    role: 'Job Title',
    image: { src: authorImage }
  }
}
```
4. Write content in Markdown
5. The wrapper layout will be automatically applied

### Adding a Case Study
1. Create a new directory: `src/app/work/[client-name]/`
2. Add `page.mdx` file
3. Include metadata export:
```tsx
export const caseStudy = {
  date: 'YYYY-MM-DD',
  client: 'Client Name',
  title: 'Project Title',
  description: 'Brief description',
  summary: ['Point 1', 'Point 2', 'Point 3'],
  logo: clientLogo,
  image: { src: heroImage },
  service: 'Service Category',
  testimonial: {
    author: { name: 'Name', role: 'Title' },
    content: 'Testimonial text'
  }
}
```
4. Write case study content in Markdown

---

## Important Configuration Files

### next.config.mjs
- Configures MDX compilation
- Sets up Shiki syntax highlighting theme
- Applies remark/rehype plugins
- Conditionally wraps blog/work content with layouts

### tsconfig.json
- Path aliases: `@/*` → `./src/*`
- Strict TypeScript mode enabled
- ES6 target with modern features

### postcss.config.js
- Integrates Tailwind CSS via `@tailwindcss/postcss`

### prettier.config.js
- Auto-formats code
- Tailwind class sorting via `prettier-plugin-tailwindcss`

---

## Key Conventions

1. **Server Components First**: All components are Server Components by default unless they need client-side interactivity (marked with `'use client'`)

2. **Animation Philosophy**: Uses Framer Motion for smooth, professional animations. All animations respect `prefers-reduced-motion`

3. **Image Handling**: Uses Next.js Image component for optimization. Many images are marked as `unoptimized` (likely because they're SVGs)

4. **Dark Theme**: The design is dark-first with `bg-neutral-950` as the primary background

5. **Responsive Design**: Mobile-first approach with Tailwind's responsive prefixes (sm:, md:, lg:, xl:)

6. **Type Safety**: Full TypeScript coverage with strict mode enabled

7. **Path Structure**: Use `@/` prefix for all imports from `src/` directory

---

## Customization Notes

- The template includes placeholder content and humorous copy
- Client logos are stored in `src/images/clients/[client-name]/` with light/dark variants
- Team photos are in `src/images/team/`
- The color scheme and fonts can be customized in `src/styles/tailwind.css`
- Main brand color is neutral-950 (very dark gray)
- Typography styles for MDX are in `src/styles/typography.css`

---

## Common Tasks

### Update Site Metadata
Edit `src/app/layout.tsx` - modify the `metadata` object

### Change Navigation Links
Edit `src/components/RootLayout.tsx` - modify the `Navigation` component

### Add a New Page
1. Create `src/app/[page-name]/page.tsx`
2. Import and use `<RootLayout>` wrapper
3. Add to navigation in `RootLayout.tsx`

### Modify Footer
Edit `src/components/Footer.tsx`

### Change Logo
Edit `src/components/Logo.tsx` or replace the SVG paths

---

## Performance Considerations

- Server Components used where possible to reduce client-side JavaScript
- Image optimization via Next.js Image component
- Static generation for most pages
- MDX files are pre-compiled at build time
- Framer Motion animations are optimized and respect reduced motion preferences
