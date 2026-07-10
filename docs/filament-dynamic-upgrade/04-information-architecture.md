# 04 Information Architecture & Migration Map

## Purpose
This document maps the migration of the existing monolithic `App.jsx` single-page structure into the matured, multi-page routed architecture dictated by the presentation ecosystem and company profile.

---

## 1. Final Route Architecture

| Route | Title | Primary Source | Content Summary |
|-------|-------|----------------|-----------------|
| `/` | Home | Slides & Existing | Productivity problem, approach preview, evidence preview, contact CTA. |
| `/about` | About | Company Profile | Who We Are, Vision, Mission, Values, Business Philosophy, Win-Win-Win. |
| `/what-we-do` | What We Do | Reconciled | Capability Areas, Improvement Services, Execution Disciplines. |
| `/our-approach` | Our Approach | Slides | The System Constraint, TOC 5 Steps, Lean Transformation, Sustainment. |
| `/people` | People | Company Profile | Leadership (Monique, Vincent) & Enterprise Partner Bench. |
| `/insights` | Insights | Slides/Data | Data-driven insights structure. |
| `/contact` | Contact | Existing & New | Real webform architecture and social integration. |

---

## 2. Existing Site Migration Map (App.jsx)

### Section: Hero
- **Current State:** Mining Sector Productivity.
- **Migration Action:** **Retain & Rewrite**.
- **Target Route:** `/` (Home).
- **Reasoning:** Visually strong, but copy must be updated to align with Slide 1: "Productivity Transformation, One Person at a Time."

### Section: The Challenge (`#challenge`)
- **Current State:** General mining challenges.
- **Migration Action:** **Merge & Rewrite**.
- **Target Route:** `/` (Home) -> "The Productivity Problem".
- **Reasoning:** Will be enriched using Slide Intelligence: The Employer Dilemma, VUCA, and the Interdependent Mining System.

### Section: What We Do (`#what-we-do`)
- **Current State:** List of services.
- **Migration Action:** **Move & Restructure**.
- **Target Route:** `/what-we-do`.
- **Reasoning:** Will be expanded into a dedicated route reconciling Capabilities, Services, and Execution Disciplines without presenting them as competing menus.

### Section: The Model & Approach (`#approach`)
- **Current State:** Basic model description.
- **Migration Action:** **Move & Rewrite completely**.
- **Target Route:** `/our-approach`.
- **Reasoning:** Must be driven by the Slides: TOC (Theory of Constraints), 5 Focusing Steps, Flowline logic, and Lean 5-year transformation.

### Section: Graduate Development (`#graduate-dev`)
- **Current State:** Standalone section.
- **Migration Action:** **Merge**.
- **Target Route:** `/our-approach` (Sustainment) & `/about` (Win-Win-Win).
- **Reasoning:** Will be integrated into the transformation logic as the "Sustainment Engine" (Chasm Bridge logic).

### Section: Evidence of Impact (`#evidence`)
- **Current State:** Claims and results.
- **Migration Action:** **Retain / Verify**.
- **Target Route:** `/` (Home preview) & `/insights` (Detailed).
- **Reasoning:** Retain MDS5 figures (+38% face advance, R6.4m uplift) and reference letters *pending explicit publication approval*.

### Section: Why Mines Benefit
- **Current State:** Value propositions.
- **Migration Action:** **Archive / Merge**.
- **Target Route:** `/what-we-do` (Value Uplift - The 4Ps: Promise, Proof, Process, Price).
- **Reasoning:** The 4Ps methodology from the slides replaces generic benefits with a structured value model.

### Section: Technical Credibility (`#technical-credibility`)
- **Current State:** Affiliations and partners.
- **Migration Action:** **Move**.
- **Target Route:** `/people` & `/about`.
- **Reasoning:** Belongs in the partner bench and corporate snapshot.

### Section: Contact Us (`#contact`)
- **Current State:** UI only (mailto or basic link).
- **Migration Action:** **Retain UI, Build Functionality**.
- **Target Route:** `/contact` & Footer.
- **Reasoning:** Will implement a real, server-side validated contact form structure.

## 3. Data-Driven Frontend Abstraction
Instead of hardcoding in JSX, content will be migrated into:
- `src/data/siteConfig.js`
- `src/data/capabilities.js`
- `src/data/methodologies.js`
- `src/data/team.js`
- `src/data/insights.js`
- `src/data/evidence.js`
