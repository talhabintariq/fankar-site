# Fankar

A creative-tech consultancy site built with Next.js, Tailwind CSS, Sanity CMS, and Framer Motion.

## 🧱 Architecture Overview

**Tech Stack:**

- **Next.js 14+** (App Router) — SSR, SEO-friendly, fast
- **Tailwind CSS** — Utility-first modern styling
- **Sanity.io** — Hosted headless CMS for structured content
- **Framer Motion** — Animations and transitions
- **ShadCN UI** — Pre-built accessible UI components
- **Vercel** — Deployment platform

**Folder Structure:**

```
fankar/
├── app/
│   ├── page.tsx                     // Home Page
│   ├── about/page.tsx              // About Page
│   ├── contact/page.tsx            // Contact Page
│   ├── quick-links/page.tsx        // External Links
│   └── service/                    // Individual Service Pages
│       ├── web-development/page.tsx
│       ├── mobile-app-development/page.tsx
│       ├── custom-app-development/page.tsx
│       ├── ai-ml/page.tsx
│       ├── security/page.tsx
│       ├── ui-ux-design/page.tsx
│       ├── quality-assurance/page.tsx
│       ├── dev-ops/page.tsx
│       └── game-development/page.tsx
├── components/                     // Reusable UI
├── sanity/                         // Sanity Studio & schemas
├── lib/                            // CMS client (GROQ)
├── styles/                         // Tailwind styles
├── public/                         // Static assets
├── tailwind.config.js
├── next.config.js
└── package.json
```

**Sanity Schemas:**

- `service`: title, slug, description, tech stack, icon/image
- `siteSettings`: logo, social links, meta info

## 🌳 Branching Strategy

We follow a structured Git workflow to maintain clean code and organized development:

### Branch Types:

- **`main`** — Production branch with CI/CD (protected)
- **`master`** — Default branch for staging/testing (protected)
- **`develop`** — Integration branch for features
- **`R{n}-{feature-name}`** — Feature branches with round numbering

### Workflow:

1. **Create Feature Branch:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b R0-new-feature-name
   ```

2. **Work & Commit:**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

3. **Push & Create PR:**
   ```bash
   git push -u origin R0-new-feature-name
   ```
   Then create Pull Request: `R0-new-feature-name` → `develop`

4. **After PR Approval:**
   - Merge to `develop`
   - Delete feature branch
   - When ready for staging: merge `develop` → `master`
   - When ready for production: merge `master` → `main` (triggers CI/CD)

### Commit Convention:
- `feat:` — New features
- `fix:` — Bug fixes  
- `docs:` — Documentation updates
- `style:` — Code formatting
- `refactor:` — Code restructuring
- `test:` — Adding tests

## ▶️ Run Locally

### 1. Clone the Repo
```bash
git clone https://github.com/talhabintariq/fankar.git
cd fankar
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Next.js Dev Server
```bash
npm run dev
```
Go to http://localhost:3000

### 4. Set Up Sanity Studio (in /sanity)
```bash
cd sanity
npx sanity login
sanity dev
```
Studio runs at http://localhost:3333

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Go to https://vercel.com
3. Import project and connect to fankar repo
4. Set environment variables if needed
5. Click Deploy

## 📩 Content Editing

Use Sanity Studio to update:

- Services
- Site metadata
- Hero text / CTA
