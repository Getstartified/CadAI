# CadAI

A modern, responsive landing page for CadAI built with React and Tailwind CSS.

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first configuration)
- **Build Tool:** Vite
- **Icons:** Custom SVG + Heroicons (via code)
- **Font:** Inter (Google Fonts)

## Project Structure

```
Cad-AI/
├── public/                 # Static assets (images, favicon)
├── src/
│   ├── components/         # React components
│   │   ├── home/           # Homepage-specific components (Hero, FeatureCarousel)
│   │   ├── layout/         # Layout components (Header, Footer, Layout)
│   │   └── ui/             # Reusable UI components (Button, Modal, Icons)
│   ├── context/            # Global state context (ModalContext)
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles and Tailwind configuration
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind theme configuration
└── vite.config.ts          # Vite configuration
```

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```
