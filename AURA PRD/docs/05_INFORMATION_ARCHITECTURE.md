# AURA — Information Architecture

> **Engineering Better Digital Experiences.**
> **Build. Learn. Evolve. Repeat.**

---

## 1. Purpose

This document defines the information structure of AURA.

It establishes:

* Main sections
* Navigation hierarchy
* Content relationships
* Page structure
* URL strategy
* Content organization
* Discovery paths

The architecture must make AURA easy to explore while preserving its immersive product experience.

---

# 2. Information Architecture Principles

AURA follows these principles:

### Discoverability

Important information should be easy to find.

### Progressive Disclosure

Show essential information first and deeper information when the visitor chooses to explore.

### Clear Hierarchy

Visitors should always understand where they are.

### Minimal Navigation

Do not create unnecessary pages or navigation levels.

### Consistent Naming

Use AURA terminology consistently.

### Content Relationships

Projects, engineering capabilities, journey milestones, AI workflows, and innovation should connect logically.

---

# 3. Primary Information Structure

```text id="0e8v7x"
AURA
│
├── Arrival
│
├── Identity
│
├── Journey
│
├── Engineering
│
├── Products
│   ├── Product Overview
│   └── Product Case Study
│
├── AI Lab
│
├── Innovation
│
├── Connect
│
└── Launchpad
```

---

# 4. Primary Navigation

The primary navigation should expose the most important destinations:

```text id="h1jv1v"
AURA
├── Identity
├── Journey
├── Engineering
├── Products
├── AI Lab
├── Innovation
└── Connect
```

**Arrival** represents the home experience and does not necessarily need a visible navigation label.

---

# 5. Arrival

### Purpose

Introduce AURA and establish immediate context.

### Information

* AURA identity
* Tagline
* Short introduction
* Engineering focus
* Featured action
* Selected products
* Key capabilities
* Entry points into deeper experiences

### Primary CTAs

* Explore AURA
* View Products
* Connect

---

# 6. Identity

### Purpose

Explain who Aryan is as an engineer.

### Information

```text id="r3m0p2"
Introduction
↓
Engineering Philosophy
↓
Values
↓
Strengths
↓
Current Focus
↓
Interests
↓
Future Vision
```

Identity should provide enough personal context without becoming a traditional résumé biography.

---

# 7. Journey

### Purpose

Explain how Aryan's engineering mindset has evolved.

### Information

```text id="h0xvpi"
The Spark
↓
Building Foundations
↓
Building Products
↓
Engineering Mindset
↓
Future Vision
```

Each milestone may connect to related:

* Projects
* Technologies
* Lessons
* Skills
* Experiments

---

# 8. Engineering

### Purpose

Demonstrate technical capabilities through practical context.

### Categories

```text id="5st0xq"
Mobile Engineering
Product Engineering
Backend & Cloud
AI-Assisted Engineering
Architecture
Performance
Testing
Engineering Practices
```

Each category should connect to relevant products or experiences whenever possible.

Example:

```text id="xdy7zo"
Flutter
↓
Product
↓
Engineering Decision
↓
Implementation
↓
Learning
```

This prevents Engineering from becoming a simple technology list.

---

# 9. Products

### Purpose

Provide evidence of engineering and product-building ability.

### Product Structure

```text id="f7ddr5"
Products
│
├── Featured Products
│
├── Production Products
│
├── Learning Projects
│
└── Product Case Studies
```

### Current Product Organization

**Flagship**

* InflueNex
* FitLife

**Production**

* MySpend
* SplitMate
* MyInventory

**Learning**

* MedCare
* Todo
* Notes

Project classification should remain flexible as projects evolve.

---

# 10. Product Case Study Structure

Each detailed product should follow:

```text id="4x2jgz"
Overview
↓
Problem
↓
Goal
↓
Role
↓
Research
↓
Architecture
↓
Technology
↓
Features
↓
Engineering Decisions
↓
Challenges
↓
Results
↓
Lessons
↓
Future Improvements
```

The case study should support both quick scanning and deep technical exploration.

---

# 11. AI Lab

### Purpose

Explain how AI is integrated into engineering.

### Information

```text id="j8t4qv"
AI Philosophy
↓
Engineering Workflow
↓
Tools & Techniques
↓
AI-Assisted Development
↓
Human Review
↓
Testing & Validation
↓
Lessons
↓
Future AI Exploration
```

AI content should connect to real engineering practices and projects.

---

# 12. Innovation

### Purpose

Represent experimentation and future possibilities.

### Structure

```text id="m7z4y0"
NOW
↓
NEXT
↓
FUTURE
```

### Content Types

* Experiments
* Ideas
* Technology exploration
* Product concepts
* Engineering questions
* Future projects
* Startup/product ambitions

Innovation content should be clearly distinguished from completed products.

---

# 13. Connect

### Purpose

Convert visitor interest into meaningful action.

### Audience Paths

```text id="n5c6qu"
Recruiter
→ Resume / LinkedIn / Email

Founder
→ Collaboration / Email

Developer
→ GitHub / Technical Discussion

Student
→ Learning / Connection

Open Source
→ GitHub / Collaboration
```

### Contact Information

* Email
* LinkedIn
* GitHub
* Resume
* Contact form

---

# 14. Launchpad

Launchpad is the final information and navigation center.

It should contain:

* Primary navigation
* Social links
* Resume
* Contact
* Theme controls
* Important resources
* Legal information
* Copyright

Launchpad should provide a final clear path to continue exploring or leave AURA.

---

# 15. Content Relationships

AURA content should be interconnected.

Example:

```text id="8v5qpi"
Product
  ↓
Technology
  ↓
Engineering Capability
  ↓
Journey Milestone
  ↓
AI Workflow
  ↓
Learning
```

This allows visitors to discover related information naturally.

For example, a visitor exploring a Flutter project should be able to discover the related engineering capability and development experience.

---

# 16. URL Structure

Use clean, predictable URLs.

Suggested structure:

```text id="6ec6r0"
/
 /identity
 /journey
 /engineering
 /products
 /products/[slug]
 /ai
 /innovation
 /connect
```

Avoid unnecessary nested routes.

Product URLs should use stable slugs.

Example:

```text
/products/influenex
/products/fitlife
```

---

# 17. Content Model

Content should be structured so it can evolve without requiring major UI changes.

### Product

```text id="g0r3o0"
id
slug
name
description
category
status
role
technologies
features
images
links
caseStudy
featured
```

### Journey Milestone

```text id="w4z2x8"
id
title
period
description
learning
relatedProjects
```

### Engineering Capability

```text id="j6h2bq"
id
name
description
technologies
experience
relatedProjects
```

### Innovation Item

```text id="h5v8jp"
id
title
description
status
category
links
```

The exact implementation model may evolve during technical architecture.

---

# 18. Search & Discovery

If search is implemented, it should prioritize:

* Products
* Engineering capabilities
* Journey milestones
* AI topics
* Innovation
* Resources

Search results should provide context rather than simply displaying titles.

---

# 19. Navigation States

Navigation should clearly communicate:

* Current section
* Active route
* Available destinations
* Back/forward context where applicable

Deep pages should provide an obvious path back to the main experience.

---

# 20. Mobile Information Architecture

Mobile navigation should simplify the desktop structure.

Recommended model:

```text id="qv8m4h"
AURA
│
├── Identity
├── Journey
├── Engineering
├── Products
├── AI
├── Innovation
└── Connect
```

Avoid creating additional mobile-only content structures unless required by usability.

---

# 21. Information Priority

When screen space is limited, prioritize:

### Priority 1

* Identity
* Engineering
* Products
* Connect

### Priority 2

* Journey
* AI Lab

### Priority 3

* Innovation
* Supporting resources

This ensures recruiters and professional visitors can quickly reach the most valuable information.

---

# 22. SEO Information Structure

Each important route should have:

* Unique page title
* Meta description
* Canonical URL
* Open Graph metadata
* Structured headings
* Semantic content
* Appropriate structured data where useful

Product case studies should be individually discoverable through search engines.

---

# 23. Accessibility Structure

Information architecture must support:

* Logical heading hierarchy
* Semantic navigation
* Breadcrumb/context where useful
* Keyboard navigation
* Screen-reader landmarks
* Descriptive link names

Visitors should be able to understand the structure without relying on visual styling.

---

# 24. Scalability

The architecture must allow AURA to grow.

Future additions may include:

* More products
* Articles
* Engineering notes
* Open-source projects
* Experiments
* Resources
* Speaking
* Certifications
* Community contributions
* Interactive technical demos

New content should fit into the existing architecture rather than creating unrelated navigation patterns.

---

# 25. Information Architecture Quality Standard

Before adding a new section, verify:

* Does it have a clear purpose?
* Does it belong in the existing hierarchy?
* Does it provide meaningful visitor value?
* Can visitors discover it naturally?
* Does it use AURA terminology?
* Does it work on mobile?
* Does it support accessibility?
* Does it avoid unnecessary navigation complexity?

---

# 26. Final Architecture

The final AURA information model is:

```text id="j8c6sq"
                         AURA
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
     Identity          Journey          Engineering
        │                 │                 │
        └─────────────────┼─────────────────┘
                          │
                       Products
                          │
                  ┌───────┴───────┐
                  │               │
             Case Studies      Technology
                          │
              ┌───────────┼───────────┐
              │           │           │
            AI Lab    Innovation    Connect
              │           │           │
              └───────────┼───────────┘
                          │
                       Launchpad
```

AURA's information architecture should ultimately make the visitor feel:

> **Everything is connected, but nothing feels complicated.**

**Build. Learn. Evolve. Repeat.**
