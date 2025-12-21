import { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Building2,
  FolderKanban,
  Plane,
  DollarSign,
  Package,
  Users,
  MessageSquare,
  BarChart3,
  Shield,
  Settings,
  ChevronDown,
  ChevronRight,
  LayoutGrid,
  TrendingUp,
  Activity,
  Bell,
  Cog,
  Globe,
  Ruler,
  FileText,
  Briefcase,
  UserCircle,
  Cpu,
  ShoppingCart,
  // Truck,
  ClipboardList,
  Calendar,
  CheckSquare,
  Clock,
  Target,
  FilePlus,
  PlaneTakeoff,
  Camera,
  TestTube,
  Upload,
  Wallet,
  Receipt,
  // CreditCard,
  Coins,
  Building,
  Banknote,
  Box,
  Wrench,
  Battery,
  AlertTriangle,
  Plus,
  Store,
  UserPlus,
  CalendarDays,
  TrendingDown,
  // Mail,
  Folder,
  Send,
  BarChart2,
  Download,
  Link,
  UserCog,
  Lock,
  Layers,
  // Key,
  BookOpen,
  Archive,
  Moon,
  Languages,
  BellRing,
  Trash2,
  LogOut,
  FlaskConical,
  Map,
  Database,
  // Route,
} from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Add navigation handler
  const handleNavigation = (route, action) => {
    if (action) {
      navigate(`${route}?view=${action}`);
    } else {
      navigate(route);
    }
  };

  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';
  const [activeMenu, setActiveMenu] = useState('home');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    home: true,
    departments: true,
    'gis-dept': false,
    'rnd-dept': false,
    'survey-dept': false,
    'business-dept': false,
    'it-dept': false,
    'procurement-dept': false,
    projects: true,
    drone: true,
    accounting: true,
    inventory: true,
    hr: true,
    communication: true,
    reports: true,
    admin: true,
    settings: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // IEGS Admin Sidebar Menu Content
  const menuContent = {
    home: {
      title: 'Home',
      sections: [
        {
          id: 'home',
          label: 'COMPANY OVERVIEW',
          items: [
            {
              icon: LayoutGrid,
              label: 'Overview',
              color: 'text-blue-600',
              route: '/overview',
            },
            // {
            //   icon: TrendingUp,
            //   label: 'Analytics',
            //   color: 'text-teal-600',
            //   route: '/analytics',
            // },
            // {
            //   icon: Activity,
            //   label: 'Activity Feed',
            //   color: 'text-orange-500',
            //   route: '/activity',
            // },
            // {
            //   icon: Bell,
            //   label: 'Notifications',
            //   color: 'text-red-500',
            //   badge: '5',
            //   route: '/notification',
            // },
          ],
        },
      ],
    },
    departments: {
      title: 'Departments',
      sections: [
        {
          id: 'gis-dept',
          label: 'GIS Department',
          icon: Globe,
          color: 'text-green-600',
          hasDropdown: true,
          items: [
            {
              icon: Map,
              label: 'Department Overview',
              color: 'text-green-600',
              route: '/GISDashboard',
            },
            {
              icon: Briefcase,
              label: 'Projects',
              color: 'text-green-600',
              route: '/GISProjects',
              action: 'projects',
            },
            {
              icon: Globe,
              label: 'Map Viewer',
              color: 'text-green-600',
              route: '/GISMapViewer',
              action: 'map-viewer',
            },
            {
              icon: Database,
              label: 'Datasets',
              color: 'text-green-600',
              route: '/GISDataSet',
              action: 'datasets',
            },
            {
              icon: BarChart3,
              label: 'Analysis',
              color: 'text-green-600',
              route: '/GISAnalysis',
              action: 'analysis',
            },
            {
              icon: Box,
              label: 'Equipment',
              color: 'text-green-600',
              route: '/GISEquipment',
              action: 'equipment',
            },
          ],
        },
        {
          id: 'rnd-dept',
          label: 'R&D UAS Department',
          icon: Cog,
          color: 'text-purple-600',
          hasDropdown: true,
          items: [
            {
              icon: Cog,
              label: 'Department Overview',
              color: 'text-purple-600',
              route: '/RnDDashboard',
            },
            {
              icon: FlaskConical,
              label: 'Experiments',
              color: 'text-purple-600',
              route: '/RnDExperiments',
              action: 'experiments',
            },
            {
              icon: Briefcase,
              label: 'Projects',
              color: 'text-purple-600',
              route: '/RnDProjects',
              action: 'projects',
            },
            {
              icon: Plane,
              label: 'Prototypes',
              color: 'text-purple-600',
              route: '/RnDPrototypes',
              action: 'prototypes',
            },
            {
              icon: BookOpen,
              label: 'Research',
              color: 'text-purple-600',
              route: '/RnDResearch',
              action: 'research',
            },
            {
              icon: Database,
              label: 'Equipment',
              color: 'text-purple-600',
              route: '/RnDEquipments',
              action: 'equipment',
            },
          ],
        },
        {
          id: 'survey-dept',
          label: 'Survey Department',
          icon: Ruler,
          color: 'text-blue-500',
          hasDropdown: false,
          items: [
            {
              icon: Ruler,
              label: 'Survey Dashboard',
              color: 'text-blue-500',
              route: '/survey',
            },
          ],
        },
        {
          id: 'business-dept',
          label: 'Business Development',
          icon: Briefcase,
          color: 'text-indigo-600',
          hasDropdown: false,
          items: [
            {
              icon: Briefcase,
              label: 'Business Dashboard',
              color: 'text-indigo-600',
              route: '/business',
            },
          ],
        },
        {
          id: 'it-dept',
          label: 'IT & Systems',
          icon: Cpu,
          color: 'text-cyan-600',
          hasDropdown: false,
          items: [
            {
              icon: Cpu,
              label: 'Systems Dashboard',
              color: 'text-cyan-600',
              route: '/system',
            },
          ],
        },
        {
          id: 'procurement-dept',
          label: 'Procurement & Logistics',
          icon: ShoppingCart,
          color: 'text-amber-600',
          hasDropdown: false,
          items: [
            {
              icon: ShoppingCart,
              label: 'Procurement Dashboard',
              color: 'text-amber-600',
              route: '/procurement',
            },
          ],
        },
      ],
    },
    projects: {
      title: 'Projects & Tasks',
      sections: [
        {
          id: 'projects',
          label: 'PROJECT MANAGEMENT',
          items: [
            {
              icon: Folder,
              label: 'Projects Overview',
              color: 'text-blue-600',
              route: '/project/projects',
            },
            // {
            //   icon: Calendar,
            //   label: 'Active Projects',
            //   color: 'text-green-600',
            //   badge: '12',
            //   route: '/projects/active',
            // },
            // {
            //   icon: Clock,
            //   label: 'Pending / Upcoming',
            //   color: 'text-yellow-600',
            //   badge: '8',
            //   route: '/projects/active',
            // },
            // {
            //   icon: CheckSquare,
            //   label: 'Completed Projects',
            //   color: 'text-gray-600',
            //   badge: '24',
            //   route: '/projects/completed',
            // },
            // {
            //   icon: Users,
            //   label: 'Assigned Teams',
            //   color: 'text-purple-600',
            //   route: '/project/assignedTeams',
            // },
            // {
            //   icon: Target,
            //   label: 'Milestones & Deliverables',
            //   color: 'text-orange-600',
            //   route: '/project/milestone',
            // },
            // {
            //   icon: FilePlus,
            //   label: 'Create New Project',
            //   color: 'text-teal-600',
            //   route: '/project/newProject',
            // },
          ],
        },
      ],
    },
    drone: {
      title: 'Drone Operations',
      sections: [
        {
          id: 'drone',
          label: 'UAV DATA & ANALYTICS',
          items: [
            {
              icon: PlaneTakeoff,
              label: 'Flight Logs',
              color: 'text-sky-600',
              route: '/drone/droneOverview',
              // FlightLogsPage
            },
            // {
            //   icon: BarChart3,
            //   label: 'Telemetry Analytics',
            //   color: 'text-blue-600',
            //   route: '/drone/telemetry',
            // },
            // {
            //   icon: Camera,
            //   label: 'Flight Media',
            //   color: 'text-purple-600',
            //   route: '/drone/media',
            // },
            // {
            //   icon: TestTube,
            //   label: 'Test Reports',
            //   color: 'text-green-600',
            //   route: '/drone/testReport',
            // },
            // {
            //   icon: Upload,
            //   label: 'Upload Flight Data',
            //   color: 'text-orange-600',
            //   route: '/drone/uploadData',
            // },
          ],
        },
      ],
    },
    accounting: {
      title: 'Accounting & Finance',
      sections: [
        {
          id: 'accounting',
          label: 'FINANCIAL MANAGEMENT',
          items: [
            {
              icon: Wallet,
              label: 'Overview',
              color: 'text-emerald-600',
              route: '/accounting/accountingOverview',
            },
            // {
            //   icon: TrendingDown,
            //   label: 'Expenditures',
            //   color: 'text-red-600',
            //   route: '/accounting/expenditure',
            // },
            // {
            //   icon: Receipt,
            //   label: 'Invoices & Receipts',
            //   color: 'text-blue-600',
            //   route: '/accounting/invoice',
            // },
            // {
            //   icon: FileText,
            //   label: 'Expense Categories',
            //   color: 'text-indigo-600',
            //   route: '/accounting/expense',
            // },
            // {
            //   icon: Coins,
            //   label: 'Fund Requests',
            //   color: 'text-yellow-600',
            //   route: '/accounting/fundRequest',
            // },
            // {
            //   icon: Building,
            //   label: 'Departmental Budgets',
            //   color: 'text-purple-600',
            //   route: '/accounting/budget',
            // },
            // {
            //   icon: Banknote,
            //   label: 'Payments & Payroll',
            //   color: 'text-green-600',
            //   route: '/accounting/payments',
            // },
          ],
        },
      ],
    },
    inventory: {
      title: 'Inventory & Assets',
      sections: [
        {
          id: 'inventory',
          label: 'INVENTORY MANAGEMENT',
          items: [
            {
              icon: Box,
              label: 'Inventory Overview',
              color: 'text-blue-600',
              route: '/inventory/inventoryOverview',
            },
            // {
            //   icon: Wrench,
            //   label: 'Equipment & Hardware',
            //   color: 'text-gray-600',
            //   route: '/inventory/equipment',
            // },
            // {
            //   icon: Battery,
            //   label: 'Consumables & Parts',
            //   color: 'text-green-600',
            //   route: '/inventory/battery',
            // },
            // {
            //   icon: ClipboardList,
            //   label: 'Procurement Requests',
            //   color: 'text-orange-600',
            //   route: '/inventory/procurementRequest',
            // },
            // {
            //   icon: AlertTriangle,
            //   label: 'Low Stock Alerts',
            //   color: 'text-red-600',
            //   badge: '3',
            //   route: '/inventory/lowStock',
            // },
            // {
            //   icon: Plus,
            //   label: 'Add Inventory Item',
            //   color: 'text-teal-600',
            //   route: '/inventory/addInventory',
            // },
            // {
            //   icon: Store,
            //   label: 'Vendors & Suppliers',
            //   color: 'text-purple-600',
            //   route: '/inventory/store',
            // },
          ],
        },
      ],
    },
    hr: {
      title: 'Human Resources',
      sections: [
        {
          id: 'hr',
          label: 'STAFF MANAGEMENT',
          items: [
            {
              icon: Users,
              label: 'Employee Dashboard ', //Directory
              color: 'text-blue-600',
              route: '/hr/StaffManagement',
            },
            // {
            //   icon: Building2,
            //   label: 'Departments & Roles',
            //   color: 'text-purple-600',
            //   route: '/hr/roles',
            // },
            // {
            //   icon: CalendarDays,
            //   label: 'Attendance & Leave',
            //   color: 'text-green-600',
            //   route: '/hr/attendance',
            // },
            // {
            //   icon: BarChart2,
            //   label: 'Performance Reports',
            //   color: 'text-orange-600',
            //   route: '/hr/performance',
            // },
            // {
            //   icon: DollarSign,
            //   label: 'Payroll & Salary Info',
            //   color: 'text-emerald-600',
            //   route: '/hr/salaryInfo',
            // },
            // {
            //   icon: UserPlus,
            //   label: 'Add New Employee',
            //   color: 'text-teal-600',
            //   route: '/hr/addNew',
            // },
          ],
        },
      ],
    },
    communication: {
      title: 'Communication Hub',
      sections: [
        {
          id: 'communication',
          label: 'COLLABORATION TOOLS',
          items: [
            {
              icon: MessageSquare,
              label: 'Chat',
              color: 'text-blue-600',
              badge: '9',
              route: '/communication/communication',
            },
            // { icon: Bell, label: 'Announcements', color: 'text-red-600' },
            {
              icon: Calendar,
              label: 'Meeting Scheduler',
              color: 'text-purple-600',
              route: '/communication/meeting',
            },
            // {
            //   icon: Folder,
            //   label: 'Shared Files',
            //   color: 'text-gray-600',
            //   route: '/communication/sharedFiles',
            // },
            // {
            //   icon: Send,
            //   label: 'Email Broadcasts',
            //   color: 'text-teal-600',
            //   route: '/communication/meeting',
            // },
          ],
        },
      ],
    },
    reports: {
      title: 'Reports & Analytics',
      sections: [
        {
          id: 'reports',
          label: 'DATA VISUALIZATION',
          items: [
            {
              icon: BarChart3,
              label: 'Reports Overview',
              color: 'text-blue-600',
              route: '/data/reportsOverview',
            },
            // {
            //   icon: Building2,
            //   label: 'Department Reports',
            //   color: 'text-purple-600',
            //   route: '/data/departmentReport',
            // },
            // {
            //   icon: DollarSign,
            //   label: 'Financial Reports',
            //   color: 'text-green-600',
            //   route: '/data/financialtReport',
            // },
            // {
            //   icon: FolderKanban,
            //   label: 'Project Performance',
            //   color: 'text-orange-600',
            //   route: '/data/projectsReport',
            // },
            // {
            //   icon: Plane,
            //   label: 'Drone Analytics',
            //   color: 'text-sky-600',
            //   route: '/data/droneReport',
            // },
            // {
            //   icon: Download,
            //   label: 'Export Reports',
            //   color: 'text-gray-600',
            //   route: '/data/exportReport',
            // },
            // {
            //   icon: Link,
            //   label: 'Sync to Main Portal',
            //   color: 'text-teal-600',
            //   route: '/data/sync',
            // },
          ],
        },
      ],
    },
    admin: {
      title: 'Administration',
      sections: [
        {
          id: 'admin',
          label: 'SYSTEM ADMINISTRATION',
          items: [
            {
              icon: UserCog,
              label: 'User Management',
              color: 'text-blue-600',
              route: '/admin/TeamPage',
              // route: '/admin/userManagement',
            },
            // {
            //   icon: Shield,
            //   label: 'Roles & Permissions',
            //   color: 'text-purple-600',
            //   route: '/admin/permissions',
            // },
            // {
            //   icon: Building2,
            //   label: 'Organization Structure',
            //   color: 'text-gray-600',
            //   route: '/admin/structure',
            // },
            // {
            //   icon: Lock,
            //   label: 'Authentication & Security',
            //   color: 'text-red-600',
            //   route: '/admin/security',
            // },
            // {
            //   icon: Cog,
            //   label: 'System Configurations',
            //   color: 'text-orange-600',
            //   route: '/admin/configuration',
            // },
            // {
            //   icon: Layers,
            //   label: 'Integrations',
            //   color: 'text-teal-600',
            //   route: '/admin/integration',
            // },
            // {
            //   icon: BookOpen,
            //   label: 'Audit Logs',
            //   color: 'text-indigo-600',
            //   route: '/admin/audit',
            // },
            // {
            //   icon: Archive,
            //   label: 'Backups & Data Recovery',
            //   color: 'text-green-600',
            //   route: '/admin/backup',
            // },
          ],
        },
      ],
    },
    settings: {
      title: 'Settings',
      sections: [
        {
          id: 'settings',
          label: 'USER PREFERENCES',
          items: [
            {
              icon: Moon,
              label: 'Theme',
              color: 'text-indigo-600',
              route: '/settings/settings',
              // route: '/settings/userReference',
            },
            {
              icon: Languages,
              label: 'Language & Region',
              color: 'text-blue-600',
              route: '/settings/language',
            },
            {
              icon: BellRing,
              label: 'Notifications Settings',
              color: 'text-orange-600',
              route: '/settings/notification',
            },
            {
              icon: Settings,
              label: 'Preferences',
              color: 'text-gray-600',
              route: '/settings/preference',
            },
            {
              icon: Trash2,
              label: 'Clear Cache',
              color: 'text-yellow-600',
              route: '/settings/clearCache',
            },
            {
              icon: LogOut,
              label: 'Logout',
              color: 'text-red-600',
              route: '/settings/logout',
            },
          ],
        },
      ],
    },
  };

  const sidebarIcons = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'departments', icon: Building2, label: 'Departments' },
    { id: 'projects', icon: FolderKanban, label: 'Projects & Tasks' },
    { id: 'drone', icon: Plane, label: 'Drone Operations' },
    { id: 'accounting', icon: DollarSign, label: 'Accounting & Finance' },
    { id: 'inventory', icon: Package, label: 'Inventory & Assets' },
    { id: 'hr', icon: Users, label: 'Human Resources' },
    { id: 'communication', icon: MessageSquare, label: 'Communication Hub' },
    { id: 'reports', icon: BarChart3, label: 'Reports & Analytics' },
    { id: 'admin', icon: Shield, label: 'Administration' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const currentMenu = menuContent[activeMenu];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Icon Sidebar */}
      <div
        className={`w-14 flex flex-col items-center py-4 space-y-3 relative ${isDarkMode ? 'bg-black' : 'bg-black'
          }`}
      >
        {/* Logo */}
        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isCollapsed ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xl mb-4 transition-all duration-300 hover:bg-gray-700"
          title="Toggle Sidebar"
        >
          <span>≡</span>
        </motion.button>

        {/* Navigation Icons */}
        {sidebarIcons.map((item) => (
          <div key={item.id} className="relative w-full flex justify-center">
            <motion.button
              onClick={() => {
                setActiveMenu(item.id);
                setIsCollapsed(false);
              }}
              whileHover={activeMenu === item.id ? {} : { scale: 1.05 }}
              whileTap={activeMenu === item.id ? {} : { scale: 0.95 }}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10 ${activeMenu === item.id
                ? isDarkMode
                  ? 'bg-white text-black'
                  : 'bg-white text-black'
                : isDarkMode
                  ? 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              title={item.label}
            >
              <item.icon size={20} />
            </motion.button>

            <AnimatePresence>
              {activeMenu === item.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute right-0 top-0 h-10 w-6 overflow-hidden"
                >
                  <div className="absolute right-0 top-0 h-10 w-12 bg-white rounded-l-full"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Main Sidebar Content */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 256 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="bg-white border-r border-gray-200 overflow-hidden relative"
          >
            <div className="w-64 overflow-y-auto h-screen">
              <div className="absolute left-0 top-0 w-3 h-full pointer-events-none">
                {sidebarIcons.map((item, index) => {
                  const topPosition = 64 + index * 56;
                  return activeMenu === item.id ? (
                    <div
                      key={item.id}
                      className="absolute w-3 h-10 bg-white dark:bg-white rounded-l-lg transition-all duration-300"
                      style={{ top: `${topPosition}px` }}
                    ></div>
                  ) : null;
                })}
              </div>

              <div className="p-4 pl-6">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={activeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-semibold text-gray-800 mb-6"
                  >
                    {currentMenu.title}
                  </motion.h2>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {currentMenu.sections.map((section) => (
                      <div key={section.id} className="mb-6">
                        {/* For department sections with dropdown */}
                        {section.hasDropdown ? (
                          <div>
                            <button
                              onClick={() => toggleSection(section.id)}
                              className={`flex items-center justify-between py-2 px-2 text-sm rounded-md cursor-pointer transition-all duration-200 w-full ${expandedSections[section.id]
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700 hover:bg-black hover:text-gray-100'
                                }`}
                            >
                              <div className="flex items-center flex-1">
                                {expandedSections[section.id] ? (
                                  <ChevronDown size={14} className="mr-2" />
                                ) : (
                                  <ChevronRight size={14} className="mr-2" />
                                )}
                                {section.icon && (
                                  <section.icon
                                    size={14}
                                    className={`mr-2 ${section.color || 'text-gray-400'
                                      }`}
                                  />
                                )}
                                <span className="font-semibold text-xs uppercase tracking-wider">
                                  {section.label}
                                </span>
                              </div>
                            </button>

                            <AnimatePresence>
                              {expandedSections[section.id] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="space-y-1 ml-4 mt-2"
                                >
                                  {section.items.map((item, index) => (
                                    <div
                                      key={index}
                                      onClick={() => handleNavigation(item.route, item.action)}
                                      className={`flex items-center justify-between py-2 px-2 text-sm rounded-md cursor-pointer transition-all duration-200 ${location.pathname === item.route
                                        ? 'bg-teal-50 text-teal-600'
                                        : 'text-gray-700 hover:bg-black hover:text-gray-100'
                                        }`}
                                    >
                                      <div className="flex items-center flex-1">
                                        <item.icon
                                          size={14}
                                          className={`mr-2 ${item.color || 'text-gray-400'
                                            }`}
                                        />
                                        <span>{item.label}</span>
                                      </div>
                                      {item.badge && (
                                        <span className="ml-2 px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded-full">
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          /* For regular sections without dropdown */
                          <div>
                            <button
                              onClick={() => toggleSection(section.id)}
                              className="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 w-full hover:text-gray-700"
                            >
                              {expandedSections[section.id] ? (
                                <ChevronDown size={14} className="mr-1" />
                              ) : (
                                <ChevronRight size={14} className="mr-1" />
                              )}
                              {section.label}
                            </button>

                            <AnimatePresence>
                              {expandedSections[section.id] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="space-y-1 ml-2"
                                >
                                  {section.items.map((item, index) => (
                                    <div key={index}>
                                      <div

                                        onClick={() => handleNavigation(item.route)}
                                        className={`flex items-center justify-between py-2 px-2 text-sm rounded-md cursor-pointer transition-all duration-200 ${location.pathname === item.route
                                          ? 'bg-teal-50 text-teal-600'
                                          : 'text-gray-700 hover:bg-black hover:text-gray-100'
                                          }`}
                                      >
                                        <div className="flex items-center flex-1">
                                          <item.icon
                                            size={14}
                                            className={`mr-2 ${item.color || 'text-gray-400'
                                              }`}
                                          />
                                          <span>{item.label}</span>
                                        </div>
                                        {item.badge && (
                                          <span className="ml-2 px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded-full">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
