# Architecture Overview - IEGS R&D Dashboard

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     IEGS R&D Dashboard                      │
│                     (Progressive Web App)                   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      React 18 App                           │
│  ┌───────────────────────────────────────────────────────┐  │
│  │            Theme & Auth Providers (Context)           │  │
│  │  • Dark/Light Mode  • User Authentication            │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Router (React Router v6)                 │
│  ┌───────────┬──────────┬──────────┬──────────────────┐    │
│  │ Overview  │ Projects │ DroneOps │ ... (8 routes)   │    │
│  └───────────┴──────────┴──────────┴──────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Layout Components                       │
│  ┌──────────┐  ┌─────────────────────────┐  ┌──────────┐  │
│  │ Sidebar  │  │   Main Content Area     │  │  Navbar  │  │
│  │          │  │  ┌───────────────────┐  │  │          │  │
│  │ • Nav    │  │  │   Page Component  │  │  │ • Search │  │
│  │ • Logo   │  │  │                   │  │  │ • Theme  │  │
│  │ • User   │  │  │   Charts, Cards,  │  │  │ • Notify │  │
│  │          │  │  │   Tables, Forms   │  │  │          │  │
│  └──────────┘  │  └───────────────────┘  │  └──────────┘  │
│                │  ┌───────────────────┐  │                 │
│                │  │      Footer       │  │                 │
│                │  └───────────────────┘  │                 │
│                └─────────────────────────┘                 │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Reusable Components                      │
│  ┌──────────┬──────────┬──────────┬──────────────────────┐ │
│  │  Cards   │  Charts  │  UI Kit  │  Custom Components  │ │
│  │ • KPI    │ • Line   │ • Button │  • ProjectCard      │ │
│  │ • Project│ • Bar    │ • Input  │  • TeamCard         │ │
│  │ • Team   │ • Pie    │ • Drop   │  • More...          │ │
│  └──────────┴──────────┴──────────┴──────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Services Layer (API)                     │
│  ┌──────────┬──────────┬──────────┬──────────────────────┐ │
│  │ Project  │  Team    │  Drone   │  Report   │   Auth  │ │
│  │ Service  │ Service  │ Service  │  Service  │ Service │ │
│  └──────────┴──────────┴──────────┴──────────────────────┘ │
│                      Axios Instance                         │
│            (Interceptors, Auth Headers, Error Handling)     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend API (Your Server)                │
│              RESTful endpoints for data operations          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔄 Data Flow

### Example: Loading Projects Page

```
User clicks "Projects"
        ↓
React Router navigates to /projects
        ↓
ProjectsPage component mounts
        ↓
useEffect calls projectService.getAll()
        ↓
Axios sends GET request to API
        ↓
API returns project data
        ↓
Component updates state
        ↓
ProjectCard components render with data
        ↓
Framer Motion animates entrance
```

---

## 🧩 Component Hierarchy

```
App.jsx (Root)
├── ThemeProvider
│   └── AuthProvider
│       └── Router
│           ├── Sidebar (persistent)
│           │   ├── Logo
│           │   ├── Navigation Links
│           │   └── User Profile
│           │
│           └── Main Layout
│               ├── Page Content (dynamic)
│               │   └── Current Route Component
│               │       ├── Overview Page
│               │       │   ├── KpiCard (x4)
│               │       │   ├── Charts
│               │       │   │   ├── PieChart
│               │       │   │   ├── BarChart
│               │       │   │   └── LineChart
│               │       │   ├── ProjectCard (multiple)
│               │       │   ├── Activity Feed
│               │       │   └── TeamCard (multiple)
│               │       │
│               │       ├── Projects Page
│               │       │   ├── Search/Filter
│               │       │   └── ProjectCard Grid
│               │       │
│               │       ├── ... (other pages)
│               │       └── Settings Page
│               │           ├── Profile Form
│               │           ├── Theme Toggle
│               │           ├── Notifications
│               │           └── Security
│               │
│               └── Footer (persistent)
```

---

## 📦 Module Organization

### Components (`src/components/`)
```
components/
├── cards/          # Data display cards
│   ├── KpiCard.jsx         → Metric displays
│   ├── ProjectCard.jsx     → Project previews
│   └── TeamCard.jsx        → Team member cards
│
├── charts/         # Data visualizations
│   ├── LineChart.jsx       → Trend analysis
│   ├── BarChart.jsx        → Comparisons
│   └── PieChart.jsx        → Distributions
│
├── layout/         # Layout structure
│   ├── Sidebar.jsx         → Navigation panel
│   └── Footer.jsx          → Bottom section
│
└── ui/             # Reusable UI elements
    ├── Button.jsx          → Styled buttons
    ├── Input.jsx           → Form inputs
    ├── Dropdown.jsx        → Select menus
    └── Tooltip.jsx         → Hover info
```

### Pages (`src/pages/`)
```
pages/
├── OverviewPage.jsx    → Dashboard home
├── ProjectsPage.jsx    → Project management
├── DroneOpsPage.jsx    → Fleet operations
├── InventoryPage.jsx   → Equipment tracking
├── AccountingPage.jsx  → Financial data
├── TeamPage.jsx        → Team management
├── ReportsPage.jsx     → Report center
└── SettingsPage.jsx    → User preferences
```

### Services (`src/services/`)
```
services/
├── api.js              → Axios configuration
├── projectService.js   → Project API calls
├── teamService.js      → Team API calls
├── droneService.js     → Drone API calls
└── reportService.js    → Report API calls
```

### Context (`src/context/`)
```
context/
├── ThemeContext.jsx    → Light/Dark mode state
└── AuthContext.jsx     → User authentication
```

### Utilities (`src/utils/`)
```
utils/
├── dummyData.js        → Mock data for demo
├── formatDate.js       → Date formatting
└── formatCurrency.js   → Number formatting
```

---

## 🎨 Styling Architecture

```
Styling Strategy
├── TailwindCSS Utilities (90%)
│   ├── Responsive classes
│   ├── Dark mode variants
│   ├── Hover/focus states
│   └── Custom theme colors
│
├── Global CSS (8%)
│   ├── Base styles
│   ├── Custom animations
│   └── Utility classes
│
└── Inline Styles (2%)
    └── Dynamic values only
```

### TailwindCSS Configuration
```javascript
// tailwind.config.js structure
{
  darkMode: 'class',           // Class-based dark mode
  theme: {
    extend: {
      colors: { ... },         // Custom color palette
      fontFamily: { ... },     // Custom fonts
      animation: { ... },      // Custom animations
      boxShadow: { ... }       // Soft shadows
    }
  }
}
```

---

## 🔐 State Management

### Global State (Context API)
```
ThemeContext
├── theme (light/dark)
├── toggleTheme()
└── Persisted in localStorage

AuthContext
├── user (object)
├── isAuthenticated (boolean)
├── login(userData)
├── logout()
└── Persisted in localStorage
```

### Local State (useState)
- Component-specific data
- Form inputs
- UI toggles
- Temporary values

### API State (Services)
- Fetched data
- Loading states
- Error handling
- Cache management

---

## 🚀 PWA Architecture

```
Progressive Web App Features
├── Service Worker
│   ├── Cache strategies
│   ├── Offline support
│   └── Background sync
│
├── Manifest
│   ├── App metadata
│   ├── Icons (8 sizes)
│   ├── Display mode
│   └── Theme colors
│
└── Install Prompt
    ├── Desktop support
    ├── Mobile support
    └── Auto-update
```

---

## 🔄 Build Process

```
Development (npm run dev)
├── Vite Dev Server
│   ├── Hot Module Replacement
│   ├── Fast refresh
│   └── Source maps
│
└── Output: http://localhost:3000

Production (npm run build)
├── Vite Build
│   ├── Code splitting
│   ├── Minification
│   ├── Tree shaking
│   └── Asset optimization
│
└── Output: dist/ folder
    ├── index.html
    ├── assets/
    │   ├── *.js (chunked)
    │   └── *.css
    └── Service Worker
```

---

## 📊 Performance Optimizations

### Code Splitting
- Route-based splitting
- Lazy loading components
- Dynamic imports

### Caching
- Service worker caching
- Browser caching
- API response caching

### Rendering
- React.memo for components
- useMemo for computations
- useCallback for functions
- Virtual scrolling for long lists

### Assets
- Image optimization
- SVG icons (lightweight)
- CSS purging (unused removed)
- Minified bundles

---

## 🔒 Security Considerations

```
Security Layers
├── API Authentication
│   ├── JWT tokens
│   ├── Interceptors
│   └── Secure storage
│
├── Route Protection
│   ├── Auth guards
│   ├── Role checks
│   └── Redirects
│
└── Data Validation
    ├── Input sanitization
    ├── Type checking
    └── Error boundaries
```

---

## 🧪 Testing Strategy (Recommended)

```
Testing Pyramid
├── E2E Tests (10%)
│   └── Cypress / Playwright
│
├── Integration Tests (30%)
│   └── React Testing Library
│
└── Unit Tests (60%)
    ├── Components
    ├── Utilities
    └── Services
```

---

## 📱 Responsive Breakpoints

```
Mobile First Approach
├── xs: < 640px    → Mobile phones
├── sm: 640px+     → Large phones
├── md: 768px+     → Tablets
├── lg: 1024px+    → Laptops
├── xl: 1280px+    → Desktops
└── 2xl: 1536px+   → Large screens

Sidebar Behavior:
- Mobile (< 1024px): Drawer overlay
- Desktop (≥ 1024px): Fixed sidebar
```

---

## 🎯 Deployment Options

```
Hosting Platforms
├── Vercel (Recommended)
│   ├── Auto-deploy from Git
│   ├── CDN edge network
│   └── Zero configuration
│
├── Netlify
│   ├── Drag & drop deploy
│   ├── Form handling
│   └── Serverless functions
│
├── AWS Amplify
│   ├── AWS integration
│   ├── CI/CD pipeline
│   └── Custom domains
│
└── Traditional Hosting
    ├── Build locally
    ├── Upload dist/ folder
    └── Configure server
```

---

## 🔧 Extension Points

### Add New Page
1. Create `NewPage.jsx` in `src/pages/`
2. Add route in `src/routes/AppRoutes.jsx`
3. Add nav item in `src/components/layout/Sidebar.jsx`

### Add New Component
1. Create in appropriate `src/components/` subfolder
2. Follow existing naming conventions
3. Use TailwindCSS for styling
4. Add PropTypes if needed

### Add New API Service
1. Create `newService.js` in `src/services/`
2. Import and use `api` instance
3. Export CRUD functions
4. Handle errors appropriately

---

## 📚 Technology Decision Rationale

| Technology | Why Chosen |
|------------|-----------|
| **Vite** | 10x faster than CRA, modern tooling |
| **React 18** | Industry standard, vast ecosystem |
| **TailwindCSS** | Rapid development, consistency |
| **Recharts** | React-friendly, customizable |
| **Framer Motion** | Best-in-class animations |
| **React Router** | Standard routing solution |
| **Axios** | Better than fetch, interceptors |
| **Context API** | Built-in, no extra deps |

---

*This architecture supports scalability, maintainability, and performance while following React and web development best practices.*

