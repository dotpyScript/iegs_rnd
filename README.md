# IEGS R&D Admin Dashboard

A modern, sleek Progressive Web App (PWA) for the R&D Department of the IEGS Global Project Management Platform.

## 🚀 Features

- ✨ **Modern UI/UX** - Inspired by Linear, Vercel, and Notion aesthetics
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 📊 **Advanced Analytics** - Beautiful charts and data visualizations using Recharts
- 🎨 **Smooth Animations** - Powered by Framer Motion
- 📦 **PWA Ready** - Installable and works offline
- ⚡ **Fast & Optimized** - Built with Vite for lightning-fast performance
- 🎯 **Type-Safe** - Modern React 18 with hooks
- 🔐 **Authentication Ready** - Context-based auth system
- 🛠️ **Modular Architecture** - Clean, maintainable code structure

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: TailwindCSS 3+
- **Routing**: React Router v6
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Date Formatting**: date-fns
- **PWA**: vite-plugin-pwa

## 📁 Project Structure

```
iegs-rnd-admin-dashboard/
├── public/
│   ├── icons/              # PWA icons
│   ├── manifest.json       # PWA manifest
│   └── logo.svg           # App logo
├── src/
│   ├── assets/            # Images and static assets
│   ├── components/        # React components
│   │   ├── cards/        # Card components (KPI, Project, Team)
│   │   ├── charts/       # Chart components (Line, Bar, Pie)
│   │   ├── layout/       # Layout components (Sidebar, Footer)
│   │   └── ui/           # Reusable UI components (Button, Input, etc.)
│   ├── context/          # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── routes/           # App routing configuration
│   ├── services/         # API services
│   ├── styles/           # Global styles and themes
│   └── utils/            # Utility functions and dummy data
├── .env.example          # Environment variables template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   cd iegs-rnd-admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and configure your API base URL and other settings.

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 PWA Installation

The app can be installed as a Progressive Web App:

1. Open the app in a supported browser (Chrome, Edge, Safari)
2. Click the install icon in the address bar
3. Follow the prompts to install
4. Launch the app from your home screen or desktop

## 🎨 Dashboard Pages

1. **Overview** - Dashboard home with KPIs, charts, and activity feed
2. **Projects** - Project management and tracking
3. **Drone Operations** - Fleet management and flight operations
4. **Inventory** - Equipment and drone inventory tracking
5. **Accounting** - Budget tracking and financial reports
6. **Team** - Team member management
7. **Reports** - Generate and download reports
8. **Settings** - App preferences and user settings

## 🎯 Key Features Breakdown

### Dashboard Analytics
- Real-time KPI cards with trend indicators
- Interactive charts (Line, Bar, Pie) with tooltips
- Budget distribution visualization
- Flight hours tracking
- Project progress monitoring

### Project Management
- Visual project cards with progress bars
- Status filtering and search
- Priority indicators
- Team assignments
- Deadline tracking

### Drone Operations
- Fleet status overview
- Flight hours analytics
- Maintenance scheduling
- Upcoming flight tests
- Drone condition tracking

### Team Management
- Team member profiles
- Online status indicators
- Project assignments
- Department organization

## 🌐 API Integration

The app is configured to work with a REST API. Update the `VITE_API_BASE_URL` in your `.env` file to point to your backend.

API services are located in `src/services/` and include:
- `projectService.js` - Project CRUD operations
- `teamService.js` - Team member management
- `droneService.js` - Drone fleet operations
- `reportService.js` - Report generation and downloads

## 🎨 Theming

The app supports light and dark themes with:
- Automatic theme detection
- Manual theme toggle
- Persistent theme preference
- Custom color schemes defined in `tailwind.config.js`

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🚀 Deployment

The app can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Example Vercel deployment:
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

This is a proprietary project for IEGS Global Project Management Platform.

## 📄 License

Copyright © 2024 IEGS Global Project Management Platform. All rights reserved.

## 🆘 Support

For support, contact the development team or refer to the internal documentation.

---

**Built with ❤️ for the IEGS R&D Department**

