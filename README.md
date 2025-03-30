# portfolio
This is my portfolio website for NyxionTech.

# Struct

/nyxion-portfolio
│── /public                # Static assets (favicons, images, etc.)
│── /src
│   │── /components        # Reusable UI components
│   │   │── Header.tsx
│   │   │── Footer.tsx
│   │   │── Terminal.tsx   # VIM-like terminal interface
│   │   │── ProjectCard.tsx
│   │   │── ContactForm.tsx
│   │── /pages             # Next.js routing system
│   │   │── /api           # API routes (if needed)
│   │   │── index.tsx      # Landing page (asks if user is a dev)
│   │   │── dev.tsx        # VIM-style portfolio
│   │   │── normal.tsx     # Standard UI portfolio
│   │   │── /projects      # Projects section
│   │   │   │── index.tsx  # List all projects
│   │   │   │── [slug].tsx # Dynamic route for project details
│   │   │── about.tsx      # About page
│   │   │── contact.tsx    # Contact page
│   │── /styles            # Global and component styles
│   │   │── globals.css
│   │   │── terminal.css   # Styling for VIM terminal
│   │── /utils             # Helper functions
│   │   │── commands.ts    # Handles CLI commands for VIM terminal
│   │── /hooks             # Custom React hooks (if needed)
│── next.config.js         # Next.js configuration
│── tsconfig.json          # TypeScript configuration
│── package.json           # Dependencies and scripts
│── README.md              # Project documentation