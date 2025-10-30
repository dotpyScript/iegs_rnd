# 🚀 Quick Start - 3 Minutes to Launch!

## Step 1: Install (1 min)
```bash
cd iegs-rnd-admin-dashboard
npm install
```

## Step 2: Configure (30 sec)
```bash
# Copy environment file
cp env.txt .env
```

## Step 3: Launch! (30 sec)
```bash
npm run dev
```

**That's it!** Open http://localhost:3000 🎉

---

## 🎯 What You'll See

### ✅ Dashboard Overview
- Live KPI cards showing metrics
- Beautiful charts with analytics
- Recent projects & activity
- Team snapshot

### 🎨 Features Ready to Use
- **Dark/Light Mode** - Click moon/sun icon in navbar
- **Navigation** - Click sidebar items to explore
- **Responsive** - Resize window to test mobile view
- **Animations** - Smooth transitions everywhere

---

## 📱 Pages Available

| Page | Route | What's There |
|------|-------|--------------|
| **Overview** | `/` | Dashboard home, KPIs, charts |
| **Projects** | `/projects` | Project cards with progress |
| **Drone Ops** | `/drone-ops` | Fleet status, flight hours |
| **Inventory** | `/inventory` | Equipment table, alerts |
| **Accounting** | `/accounting` | Budget, expenses, revenue |
| **Team** | `/team` | Team members, departments |
| **Reports** | `/reports` | Report listing, downloads |
| **Settings** | `/settings` | Theme, notifications, profile |

---

## 🎨 Try These Features

### 1. Toggle Dark Mode
- Click the moon/sun icon in top right
- See the entire UI smoothly transition

### 2. Navigate Pages
- Use sidebar to explore all sections
- Notice smooth page transitions

### 3. Interact with Charts
- Hover over chart data points
- See detailed tooltips

### 4. Test Responsiveness
- Open browser DevTools (F12)
- Use device toolbar to test mobile
- Watch sidebar collapse on small screens

### 5. Search & Filter
- Go to Projects page
- Use search bar
- Filter by status

---

## 🔧 Common Tasks

### Change Port
Edit `vite.config.js` line 44:
```js
port: 3001  // Your preferred port
```

### Update Colors
Edit `tailwind.config.js` starting line 8:
```js
primary: {
  500: '#YOUR_COLOR'
}
```

### Add Your Logo
Replace `public/logo.svg` with your file

### Connect API
Edit `.env`:
```
VITE_API_BASE_URL=http://your-api.com/api
```

---

## 📦 Build for Production

When ready to deploy:

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

Files will be in `dist/` folder.

---

## 🆘 Troubleshooting

**Port in use?**
- Vite will auto-select next available port

**Blank page?**
- Check browser console (F12)
- Ensure all dependencies installed

**Charts not showing?**
- They use dummy data - should work out of box
- Check console for errors

**Dark mode not working?**
- Click moon icon in navbar
- Check localStorage in DevTools

---

## 📚 Next Steps

1. ✅ Explore all pages
2. ✅ Test features
3. ✅ Check responsive design
4. 📖 Read README.md for details
5. 📖 See INSTALLATION.md for deployment
6. 📖 Check PROJECT_SUMMARY.md for overview

---

## 🎉 You're All Set!

The dashboard is running with:
- ✅ 8 complete pages
- ✅ Beautiful UI components
- ✅ Interactive charts
- ✅ Dark/Light themes
- ✅ Dummy data for demo
- ✅ PWA structure ready

**Enjoy your new dashboard!** 🚀

---

*Questions? Check the other documentation files or contact the dev team.*

