# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Vite for fast development
- 📱 Mobile-friendly interface
- 🎭 Smooth animations with Framer Motion
- 🗺️ Interactive maps with Leaflet
- 🎯 TypeScript for better development experience

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: Leaflet with React Leaflet
- **Icons**: Lucide React

## Development

### Prerequisites

- Node.js (version 18 or higher)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shaikabdulkhadar1/shaikabdulkhadar1.github.io.git
   cd shaikabdulkhadar1.github.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages (manual deployment)

## Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages. The deployment workflow is configured in `.github/workflows/deploy.yml`.

### Automatic Deployment

- Every push to the `main` branch triggers an automatic deployment
- The site is built and deployed to GitHub Pages automatically
- You can view the deployment status in the "Actions" tab of your repository

### Manual Deployment

If you need to deploy manually, you can run:

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/          # React components
│   ├── AboutSection.tsx
│   ├── BlogSection.tsx
│   ├── ContactSection.tsx
│   ├── EducationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   ├── PortfolioSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ResumeSection.tsx
│   ├── SectionTitle.tsx
│   ├── ServiceCard.tsx
│   ├── Sidebar.tsx
│   └── TestimonialsSection.tsx
├── images/             # Static images
├── App.tsx            # Main App component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit and push to your branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
