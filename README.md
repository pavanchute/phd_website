# Pavan Home Decor Website

A modern, responsive website for Pavan Home Decor - a professional interior design and home decor company.

## Features

- **Modern Design**: Clean, professional layout with construction-themed color palette
- **Responsive**: Optimized for all devices from mobile to desktop
- **Single Page Application**: Smooth scrolling navigation between sections
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Contact Form**: Professional inquiry form with validation
- **Service Showcase**: Comprehensive display of home decor services
- **Company Information**: About section with testimonials and achievements

## Sections

- **Home**: Hero section with compelling value proposition
- **What We Do**: Detailed services including residential construction, commercial work, and interior finishing
- **About**: Company history, achievements, and client testimonials
- **Contact**: Contact form, business information, and location details

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for development and building
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pavan-home-decor-website
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # What We Do section
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Customization

### Colors
The website uses a professional color palette defined in Tailwind CSS:
- Primary Blue: `#1E40AF` (blue-700)
- Accent Orange: `#D97706` (orange-600)
- Background Gray: `#F9FAFB` (gray-50)

### Content
Update company information in the respective component files:
- Contact details in `Contact.tsx`
- Company description in `About.tsx`
- Services in `Services.tsx`

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

This project is private and proprietary to Pavan Home Decor.

## Contact

For questions about this website, please contact:
- Email: info@pavanhomedecor.com
- Phone: (555) 123-4567