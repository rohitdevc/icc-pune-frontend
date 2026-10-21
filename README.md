# ICC Pune — Frontend

The frontend application for the **International Convention Centre (ICC), Pune**, presenting its commercial developments, hospitality offerings, amenities, facilities, and corporate information.

- **Live Website:** https://icc-pune.netlify.app/
- **Repository:** https://github.com/rohitdevc/icc-pune-frontend

## Overview

ICC Pune is a real-estate and hospitality destination developed by ICC Realty (I) Pvt. Ltd. This website provides visitors with information about its developments, facilities, location, management, and project-related resources.

The frontend delivers a structured browsing experience across the ICC Tech Park, ICC Trade Tower, JW Marriott Pune, and The Pavillion, with dedicated pages for amenities, specifications, plans, image galleries, and related information.

## Features

- **About ICC Pune** — Overview, management, location, and occupants.
- **ICC Tech Park** — Development information, amenities, specifications, plans, and image gallery.
- **ICC Trade Tower** — Commercial development details, facilities, plans, and gallery.
- **JW Marriott Pune** — Hotel information, restaurants, lounges, Quan Spa, guest suites, Sabha Ballroom, and Marriott Club.
- **The Pavillion** — Development overview, amenities, specifications, plans, and gallery.
- **Project Developer** — Information about the organization behind the development.
- **Image Galleries** — Lightbox-enabled image viewing.
- **Dynamic Content** — Shared API service modules for website content.
- **SEO Metadata** — Page metadata and configurable canonical and social URLs.
- **Responsive Interface** — Layouts styled with Tailwind CSS.
- **Reusable Components** — Shared components and TypeScript types for maintainable development.

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 | Application framework and routing |
| React 19 | User interface |
| TypeScript | Type-safe development |
| Tailwind CSS 4 | Styling |
| `html-react-parser` | HTML content parsing |
| `yet-another-react-lightbox` | Image gallery lightboxes |
| Lodash | Utility functions |
| `nl2br` | Newline formatting |
| Validator | Input validation |
| React Icons | Interface icons |
| ESLint | Code quality |
| npm | Dependency management |
| Docker | Containerized deployment |
| Netlify | Hosting |

## Getting Started

### Prerequisites

- Node.js 22 or a compatible supported version
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rohitdevc/icc-pune-frontend.git
cd icc-pune-frontend
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Configure environment variables

Create a `.env` file in the project root and configure the required values for your environment.

```dotenv
NEXT_PUBLIC_PATH=
BASEPATH_PREFIX=
ASSET_PREFIX=
API_DOMAIN_NAME=
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_PATH` | Public asset path configuration |
| `BASEPATH_PREFIX` | Optional application base-path configuration |
| `ASSET_PREFIX` | Optional static asset prefix |
| `API_DOMAIN_NAME` | API domain used by the application |

Use the appropriate values for local development or deployment. Check the service modules and Next.js configuration to confirm whether additional variables are required.

Do not commit real credentials, access tokens, or other sensitive configuration to the repository.

### 4. Start the development server

```bash
npm run dev
```

Open the application at:

http://localhost:2978

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server on port `2978` |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server on port `2978` |
| `npm run lint` | Runs ESLint |

## Project Structure

```text
icc-pune-frontend/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── app/                 # Next.js routes, layouts, and styles
├── components/          # Reusable UI components
├── lib/                 # API services and shared utilities
├── public/              # Static assets
├── types/               # TypeScript type definitions
├── Dockerfile            # Multi-stage production image
├── docker-compose.yml    # Docker Compose configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies and npm scripts
├── package-lock.json     # Locked npm dependency versions
├── eslint.config.mjs     # ESLint configuration
└── tsconfig.json         # TypeScript configuration
```

## Production Build

To create and run a production build locally:

```bash
npm run build
npm run start
```

The application uses port `2978` by default.

## Docker Deployment

The repository includes a multi-stage Dockerfile based on Node.js 22 Alpine. It installs dependencies, builds the Next.js application, and runs its standalone production output.

### Build and start

After configuring the required environment variables in `.env`, run:

```bash
docker compose up -d --build
```

### View logs

```bash
docker compose logs -f icc-web
```

### Stop the application

```bash
docker compose down
```

The Docker Compose service is named `icc-web`, and the container name is `icc-frontend`. The default configuration exposes port `2978`.

## Netlify Deployment

The live website is hosted on Netlify.

To deploy the project to a Netlify site:

1. Connect the GitHub repository to Netlify.
2. Configure the build environment and required variables in Netlify site settings.
3. Use a compatible Node.js version.
4. Verify the Next.js build and deployment integration.
5. Deploy and test all major routes, image galleries, API-driven content, and static assets.

If deploying under a subpath or using a custom domain, ensure `BASEPATH_PREFIX`, `ASSET_PREFIX`, and `NEXT_PUBLIC_PATH` are configured consistently with the Next.js settings.

## Development Guidelines

- Follow the existing component and application structure.
- Keep API integration logic in the appropriate modules under `lib/`.
- Use TypeScript for component properties and API data.
- Run `npm run lint` before submitting changes.
- Run `npm run build` to verify production compilation.
- Test gallery interactions and navigation across the supported pages.
- Keep environment-specific values and secrets out of committed files.

## License

No explicit open-source license is documented in this README. Contact the repository owner for permission before redistributing or reusing the source code.

---

**Project:** International Convention Centre, Pune — Frontend  
**Framework:** Next.js · React · TypeScript · Tailwind CSS  
**Hosting:** Netlify  
**Repository:** https://github.com/rohitdevc/icc-pune-frontend