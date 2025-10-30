# Installation Guide - IEGS R&D Admin Dashboard

## Quick Start Guide

Follow these steps to get your dashboard up and running:

### Step 1: Prerequisites

Ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm**, **yarn**, or **pnpm** package manager

Check your Node.js version:
```bash
node --version
```

### Step 2: Install Dependencies

Navigate to the project directory and install all dependencies:

```bash
cd iegs-rnd-admin-dashboard
npm install
```

This will install:
- React 18
- Vite
- TailwindCSS
- Recharts
- Framer Motion
- React Router
- Axios
- Lucide Icons
- date-fns
- And all other required packages

### Step 3: Environment Configuration

1. **Rename the environment file:**
   ```bash
   # On Windows:
   copy env.txt .env
   
   # On Mac/Linux:
   cp env.txt .env
   ```

2. **Edit the `.env` file** with your specific configuration:
   ```env
   VITE_API_BASE_URL=http://your-api-url.com/api
   ```

### Step 4: Start Development Server

Run the development server:

```bash
npm run dev
```

The app will open at: **http://localhost:3000**

You should see:
- ✅ Modern, responsive dashboard
- ✅ Sidebar navigation
- ✅ Interactive charts
- ✅ Light/Dark theme toggle

### Step 5: Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Step 6: Preview Production Build

Test the production build locally:

```bash
npm run preview
```

---

## PWA Icons Setup

To enable full PWA functionality, you need to add icon files:

1. Navigate to `public/icons/`
2. Add PNG icon files in these sizes:
   - icon-72x72.png
   - icon-96x96.png
   - icon-128x128.png
   - icon-144x144.png
   - icon-152x152.png
   - icon-192x192.png
   - icon-384x384.png
   - icon-512x512.png

**Quick Icon Generation:**
- Use [PWA Builder Image Generator](https://www.pwabuilder.com/imageGenerator)
- Upload your logo
- Download all sizes
- Place them in `public/icons/`

---

## Deployment Options

### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Option 3: Traditional Hosting

After building (`npm run build`), upload the contents of the `dist/` folder to your web server.

---

## Troubleshooting

### Port Already in Use

If port 3000 is taken, Vite will automatically use the next available port.

To specify a custom port, edit `vite.config.js`:
```js
server: {
  port: 3001, // Your custom port
  open: true
}
```

### Module Not Found Errors

Clear node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### PWA Not Installing

1. Ensure you're using HTTPS (or localhost)
2. Check that all icon files are present in `public/icons/`
3. Verify `manifest.json` is correctly configured
4. Use Chrome DevTools > Application > Manifest to debug

### API Connection Issues

1. Check your `.env` file has the correct `VITE_API_BASE_URL`
2. Ensure your API server is running
3. Check browser console for CORS errors
4. Verify API endpoints match the service files in `src/services/`

---

## Development Tips

### Hot Module Replacement (HMR)

Vite provides instant HMR. Save any file and see changes immediately without full page reload.

### Dark Mode Testing

Toggle between light/dark mode using the moon/sun icon in the navbar.

### Responsive Testing

Use browser DevTools (F12) to test different screen sizes:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1280px+

### Code Structure

- **Components**: Reusable UI elements in `src/components/`
- **Pages**: Full page views in `src/pages/`
- **Services**: API integration in `src/services/`
- **Utils**: Helper functions in `src/utils/`
- **Styles**: Global styles in `src/styles/`

---

## Next Steps

1. ✅ **Customize Branding**: Update colors in `tailwind.config.js`
2. ✅ **Connect API**: Point to your real backend in `.env`
3. ✅ **Add Icons**: Generate and place PWA icons
4. ✅ **Deploy**: Choose your hosting platform
5. ✅ **Monitor**: Set up analytics and error tracking

---

## Support

For technical support or questions:
- Check the main README.md
- Review component documentation in code comments
- Contact the development team

**Happy coding! 🚀**

