# Raasta - Real Estate Platform

A modern real estate platform built with Next.js, Sanity CMS, and Turbo monorepo architecture.

## Project Structure

This is a monorepo managed with Turbo and pnpm that includes:

- **`apps/web`** - Next.js frontend application
- **`apps/studio`** - Sanity CMS studio for content management
- **`packages/sanity`** - Shared Sanity schemas and utilities

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v9.15.0)
- Git

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Setup

Create environment files as needed for each application:

```bash
# For the web app
cp apps/web/.env.example apps/web/.env.local

# For Sanity studio
cp apps/studio/.env.example apps/studio/.env.local
```

## Development Commands

### Start All Applications

```bash
pnpm dev
```

Starts both the web app and Sanity studio in development mode.

### Start Individual Applications

**Web App (Next.js):**

```bash
pnpm dev:web
# or
cd apps/web && pnpm dev
```

- Runs on `http://localhost:3000`
- Uses Turbopack for faster builds

**Sanity Studio:**

```bash
pnpm dev:studio
# or
cd apps/studio && pnpm dev
```

- Runs on `http://localhost:3003`

## Build Commands

### Build All Applications

```bash
pnpm build
```

Builds all applications in the correct dependency order.

### Build Individual Applications

**Web App:**

```bash
pnpm build:web
# or
cd apps/web && pnpm build
```

**Sanity Studio:**

```bash
pnpm build:studio
# or
cd apps/studio && pnpm build
```

## Production

### Start Production Server

```bash
cd apps/web && pnpm start
```

Starts the production server after building.

### Deploy Sanity Studio

```bash
cd apps/studio && pnpm deploy
```

Deploys the Sanity studio to Sanity's hosting.

## Development Tools

### Linting

```bash
# Lint all applications
pnpm lint

# Lint specific application
cd apps/web && pnpm lint
cd apps/studio && pnpm lint
cd packages/sanity && pnpm lint
```

### Cleaning

```bash
pnpm clean
```

Removes all build artifacts and node_modules.

## Package Management

This project uses **pnpm** as the package manager. All commands should use `pnpm` instead of `npm` or `yarn`.

### Common pnpm Commands

```bash
# Add a dependency to web app
cd apps/web && pnpm add package-name

# Add a dev dependency
cd apps/web && pnpm add -D package-name

# Add dependency to root
pnpm add -D package-name

# Update dependencies
pnpm update

# Check for outdated packages
pnpm outdated
```

## Technology Stack

### Frontend (apps/web)

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **GSAP** - Advanced animations
- **Lucide React** - Icons

### CMS (apps/studio)

- **Sanity** - Headless CMS
- **React 18** - UI library
- **Styled Components** - Styling

### Shared (packages/sanity)

- **Sanity** - CMS utilities
- **Next Sanity** - React integration

### Development Tools

- **Turbo** - Monorepo build system
- **pnpm** - Package manager
- **ESLint** - Code linting
- **TypeScript** - Type checking

## Environment Variables

### Web App (apps/web/.env.local)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=your-dataset
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
```

### Sanity Studio (apps/studio/.env.local)

```
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=your-dataset
SANITY_STUDIO_API_VERSION=2023-05-03
```

## Deployment

### Vercel (Recommended for Web App)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Sanity Hosting

1. Run `pnpm deploy` in the studio directory
2. Follow the prompts to deploy to Sanity's hosting

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Turbo Documentation](https://turbo.build/repo/docs)
- [pnpm Documentation](https://pnpm.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and proprietary.
