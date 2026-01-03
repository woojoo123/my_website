
# Personal Portfolio & Technical Notes

A static personal portfolio website built with React, Vite, and Markdown.

## Features
- **Static Content**: All projects and notes are loaded from local Markdown files.
- **Fast Performance**: Built with Vite and TypeScript for optimal speed.
- **Clean UI**: Minimalist design focused on content and readability.
- **Troubleshooting Notes**: Dedicated section for technical problem-solving records.
- **Responsive**: Fully accessible on mobile and desktop.

## Content Management
To add new content, simply create a `.md` file in:
- `src/content/projects/` for projects.
- `src/content/notes/` for technical notes.

### Frontmatter Schema
Ensure your Markdown files include the required frontmatter:

**Notes:**
```yaml
---
title: "Title"
date: "YYYY-MM-DD"
tags: ["Tag1", "Tag2"]
summary: "Short summary..."
---
```

**Projects:**
```yaml
---
title: "Project Title"
period: "YYYY.MM - YYYY.MM"
role: "Role"
stack: ["React", "Spring Boot"]
summary: "Summary..."
links:
  github: "URL"
  demo: "URL"
---
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Scripts
- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run preview`: Preview the production build.
- `npm run new:note "Title"`: Helper to create a new note (Template implementation).
- `npm run new:project "Title"`: Helper to create a new project (Template implementation).
