# Sujal Manandhar — Personal Portfolio 🚀

A modern, high-performance, and SEO-optimized personal portfolio and blog built with **Next.js (App Router)**, **React 19**, and **Tailwind CSS**. 

Designed to be lighting fast and accessible, this portfolio showcases projects, services, a dynamic resume timeline, and markdown-based blog posts—all wrapped in a stunning glassmorphic UI with smooth animations.

---

## ✨ Key Features

- **Blazing Fast Performance:** Built on Next.js Turbopack for near-instant HMR and lightning-fast production builds.
- **Top-Tier SEO:** Fully optimized with dynamic Open Graph (OG) tags, Twitter Cards, semantic HTML, and Next.js Image component to achieve 90+ Lighthouse scores.
- **Dynamic Routing:** Integrated Next.js App Router for type-safe routing, seamless server-side rendering, and scalable architecture.
- **Modern UI/UX:** Styled using Tailwind CSS v4, featuring a custom color palette, glassmorphism (`backdrop-blur`), and interactive micro-animations powered by `motion/react`.
- **Integrated Blog System:** Fully functional blog architecture with estimated read times, categorical tagging, and rich rendering.
- **Dark/Light Theme:** Native system-preference detection with a manual toggle.
- **Fully Responsive:** Perfectly scaled for mobile, tablet, and ultra-wide desktop viewports.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js App Router](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript

---

## 🚀 Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/Sujal-Manandhar/portfolio.git
cd portfolio
```

### 2. Install dependencies
Make sure you have Node.js installed, then run:
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
You can then start the production server locally:
```bash
npm run start
```

---

## 📁 Project Structure

├── public/                 # Static assets (Favicons, CV)
├── src/
│   ├── app/                # Next.js App Router pages and layouts
│   ├── assets/             # Images and optimized media
│   ├── components/         # Reusable React components
│   │   ├── layout/         # Navbar, Footer, Mobile Menu
│   │   ├── sections/       # Hero, Portfolio, Resume, Blog blocks
│   │   ├── shared/         # Buttons, Reveal animations, Badges
│   │   └── ui/             # Shadcn-style base primitives
│   ├── constants/          # Static data (Site content, Blog posts, Projects)
│   ├── context/            # Global state (ThemeContext)
│   ├── hooks/              # Custom React hooks (useTypewriter)
│   └── types/              # Global TypeScript interfaces
├── eslint.config.js        # ESLint configuration
├── postcss.config.mjs      # PostCSS configuration for Tailwind
└── next.config.ts          # Next.js configuration
```

---

## 👨‍💻 Author

**Sujal Manandhar**
- **Role:** Web Developer & UI/UX Designer
- **Email:** sujalmanandhar11@gmail.com
- **LinkedIn:** [sujal-manandhar07](https://www.linkedin.com/in/sujal-manandhar07/)
- **GitHub:** [Sujal-Manandhar](https://github.com/Sujal-Manandhar)

---

*Designed and engineered with ❤️ by Sujal Manandhar.*
