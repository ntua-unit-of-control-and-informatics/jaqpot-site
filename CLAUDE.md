# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Main Application (Next.js)
- `npm run dev` - Start development server
- `npm run build` - Build both the Next.js app and Docusaurus documentation
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Check code formatting with Prettier
- `npm run format:write` - Format code with Prettier

### Documentation (Docusaurus)
- `cd docusaurus && npm run start` - Start Docusaurus development server
- `cd docusaurus && npm run build` - Build documentation (requires ALGOLIA_APP_ID and ALGOLIA_SEARCH_API_KEY env vars)
- `cd docusaurus && npm run typecheck` - TypeScript checking for docs

### API Schema Generation
- `npm run generate:schema` - Generate TypeScript types from OpenAPI spec (requires ../jaqpot-api-v2/src/main/resources/openapi.yaml)

## Architecture Overview

### Project Structure
This is a hybrid Next.js application with integrated Docusaurus documentation:

- **Next.js App Router**: Main application using App Router pattern in `/app` directory
- **Docusaurus Documentation**: Separate documentation site in `/docusaurus` directory
- **Dual Build Process**: Main build creates both the Next.js app and builds Docusaurus into `/public/docs`

### Key Architectural Components

#### Authentication & Session Management
- **NextAuth.js v5**: Handles authentication with Keycloak provider
- **Session Provider**: Wraps the app for client-side session access
- **JWT Handling**: Custom JWT callbacks for token management and user ID extraction
- **Server Components**: Session available in server components via `auth()` function

#### Styling & UI
- **Tailwind CSS**: Primary styling framework with custom animations
- **NextUI**: Component library for consistent UI elements
- **Custom Themes**: Light/dark theme support with custom color schemes
- **Responsive Design**: Mobile-first approach with custom breakpoints

#### Content Management
- **MDX Integration**: Blog posts and content pages using MDX
- **Blog System**: Custom blog implementation in `/app/blog` with categorization
- **Dynamic Routes**: Category-based routing for blog posts
- **Asset Management**: Images and assets handled through Next.js Image component

#### Documentation Integration
- **Docusaurus**: Separate documentation site with API reference
- **Redocusaurus**: OpenAPI documentation integration
- **Search**: Algolia search integration for documentation
- **Build Integration**: Documentation built into `/public/docs` during main build

### Path Aliases
```typescript
"@/*": ["./*"]
"@/components/*": ["components/*"]
"@/app/*": ["app/*"]
"@/lib/*": ["lib/*"]
```

### Environment Configuration
- **Dual Environment**: Next.js and Docusaurus have separate configurations
- **Standalone Output**: Next.js configured for standalone deployment
- **MDX Support**: Both applications support MDX content
- **Image Optimization**: Remote patterns configured for external images

## Development Workflow

### Adding New Features
1. Create components in `/components` directory following existing patterns
2. Use TypeScript with strict mode enabled
3. Follow existing naming conventions (kebab-case for files, PascalCase for components)
4. Use NextUI components for consistency
5. Implement proper error handling and loading states

### Blog Posts
- Create new directories under `/app/blog/(posts)/`
- Use `page.mdx` files for content
- Include `opengraph-image.png` for social sharing
- Follow existing frontmatter structure

### Documentation Updates
- Edit files in `/docusaurus/docs/`
- Use standard Docusaurus MDX features
- Update sidebars in `/docusaurus/sidebars.ts`
- Rebuild documentation with `npm run build`

### API Integration
- API types are generated from OpenAPI spec
- Use SWR for data fetching
- Implement proper error handling for API calls
- Session tokens available through NextAuth session

## Testing & Quality

### Code Quality
- ESLint configured with Next.js rules
- Prettier for consistent formatting
- TypeScript with strict mode
- No test framework currently configured

### Performance
- Next.js App Router for optimal performance
- Image optimization enabled
- Standalone build for deployment
- Static asset optimization

## Important Notes

- Documentation build requires `ALGOLIA_APP_ID` and `ALGOLIA_SEARCH_API_KEY` environment variables
- API schema generation depends on external OpenAPI spec file
- Docusaurus is excluded from main TypeScript compilation
- Both applications use React 18 with concurrent features