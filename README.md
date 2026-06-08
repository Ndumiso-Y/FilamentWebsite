# Filament Landing Page (Phase 1)

> **Brand Tagline:** Productivity Transformation One Person at a time
> 
> **Positioning:** Productivity Transformation and operational excellence in the mining sector, with an evidenced graduate-development model.

This is the static landing page for Filament (Pty) Ltd. It has been built using **React**, **Vite**, and **Tailwind CSS**, strictly focusing on executive, technical, and structured corporate presentation.

---

## Technical Stack
- **Core:** React 19, JavaScript (ES6+), HTML5
- **Styling:** Tailwind CSS v3 (Custom palette aligned with the orange, deep blue, and charcoal Filament brand colors)
- **Icons:** Lucide React
- **Build Tool:** Vite v8

---

## Deployment & Hosting Setup

The landing page is designed to run seamlessly in the following environments:
1. **Local Host** (for local development and QA)
2. **GitHub Pages** (deployed at the repository sub-directory path `/FilamentWebsite/`)
3. **Vercel** (deployed at root `/` and connected to custom domain `filament-transformation.com`)

### 1. Localhost Development
To run the project locally:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```
By default, the server will launch on `http://localhost:5173/` (or another available port).

### 2. Testing Production Build Locally
To verify the production compilation:

```bash
# Build the application
npm run build

# Preview the built production files locally
npm run preview
```
This runs the production bundle locally on `http://localhost:4173/` for validation.

### 3. Deploying to GitHub Pages
Because GitHub Pages serves assets from a sub-directory matching the repository name (`/FilamentWebsite/`), Vite is configured to conditionally set the base path based on the `GITHUB_PAGES` environment variable.

#### Build Command for GitHub Pages:
- **Windows (PowerShell):**
  ```powershell
  $env:GITHUB_PAGES="true"; npm run build; Remove-Item Env:\GITHUB_PAGES
  ```
- **macOS/Linux (Bash):**
  ```bash
  GITHUB_PAGES=true npm run build
  ```

This output in `dist/` can be pushed directly to your `gh-pages` branch.
- **GitHub Pages URL:** `https://Ndumiso-Y.github.io/FilamentWebsite/`

### 4. Deploying to Vercel
Vercel hosts the application at the root (`/`) path, which is the default build mode.

- **Vercel Deployment Settings:**
  - **Framework Preset:** Vite
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
  - **Root Directory:** `./`
- **Vercel Custom Domain Configuration:**
  1. Add the domain `filament-transformation.com` in your Vercel Project under Settings > Domains.
  2. Update your DNS settings at your domain registrar (e.g. GoDaddy, Namecheap) to point to Vercel's DNS or A Record (`76.76.21.21`).
  3. Vercel will automatically provision SSL certificates and route the domain directly to the root bundle.

---

## Public Copy Alignment & Brand Guidelines
To maintain responsible communication and legal alignment:
- **No Guaranteed Employment:** The Graduate Development model is evidence-backed, but is explicitly documented as case-specific. Do not guarantee future employment outcomes.
- **No Current Mine Partnerships Beyond Confirmed Evidence:** Specifically refer to the **Two Rivers Platinum Mine** / **Wits School of Mining Engineering** program as a documented historical case study (March 2025 – February 2026), rather than implying ongoing active mine-wide partnerships.
- **Branding Separation:** Filament (Pty) Ltd and Chasm Bridge Charity are kept distinct. Filament operates the operational-excellence and mine-exposure engineering consult; Chasm Bridge Charity manages the wider graduate-development support.
