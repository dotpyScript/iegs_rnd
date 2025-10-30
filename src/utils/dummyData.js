// Dummy data for the dashboard

export const kpiData = {
  activeProjects: {
    value: 24,
    change: 12,
    trend: 'up',
  },
  engineers: {
    value: 47,
    change: 3,
    trend: 'up',
  },
  testFlights: {
    value: 156,
    change: 8,
    trend: 'up',
  },
  budgetUtilization: {
    value: 78,
    change: -5,
    trend: 'down',
  },
};

export const budgetDistribution = [
  { name: 'Hardware', value: 35, color: '#0ea5e9' },
  { name: 'Software', value: 25, color: '#8b5cf6' },
  { name: 'Testing', value: 20, color: '#06b6d4' },
  { name: 'Personnel', value: 15, color: '#a78bfa' },
  { name: 'Other', value: 5, color: '#64748b' },
];

export const monthlyProgress = [
  { month: 'Jan', projects: 18, completed: 12 },
  { month: 'Feb', projects: 22, completed: 15 },
  { month: 'Mar', projects: 20, completed: 17 },
  { month: 'Apr', projects: 25, completed: 19 },
  { month: 'May', projects: 28, completed: 22 },
  { month: 'Jun', projects: 24, completed: 20 },
];

export const flightHoursData = [
  { month: 'Jan', hours: 245 },
  { month: 'Feb', hours: 312 },
  { month: 'Mar', hours: 289 },
  { month: 'Apr', hours: 356 },
  { month: 'May', hours: 423 },
  { month: 'Jun', hours: 398 },
];

export const recentProjects = [
  {
    id: 1,
    name: 'Autonomous Navigation System',
    status: 'in-progress',
    progress: 75,
    lead: 'Sarah Chen',
    deadline: '2024-12-15',
    priority: 'high',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
  },
  {
    id: 2,
    name: 'Thermal Imaging Module',
    status: 'in-progress',
    progress: 60,
    lead: 'Michael Rodriguez',
    deadline: '2024-11-30',
    priority: 'medium',
    image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400',
  },
  {
    id: 3,
    name: 'Long-Range Communication Protocol',
    status: 'testing',
    progress: 90,
    lead: 'Emily Watson',
    deadline: '2024-11-20',
    priority: 'high',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
  },
  {
    id: 4,
    name: 'Battery Optimization Research',
    status: 'planning',
    progress: 25,
    lead: 'James Park',
    deadline: '2025-01-10',
    priority: 'low',
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400',
  },
  {
    id: 5,
    name: 'Collision Avoidance AI',
    status: 'completed',
    progress: 100,
    lead: 'Sarah Chen',
    deadline: '2024-10-30',
    priority: 'high',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400',
  },
];

export const teamMembers = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Lead Engineer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    status: 'online',
    projects: 3,
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Hardware Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    status: 'online',
    projects: 2,
  },
  {
    id: 3,
    name: 'Emily Watson',
    role: 'Software Developer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    status: 'away',
    projects: 4,
  },
  {
    id: 4,
    name: 'James Park',
    role: 'Research Scientist',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    status: 'offline',
    projects: 1,
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Flight Test Engineer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100',
    status: 'online',
    projects: 2,
  },
];

export const recentActivity = [
  {
    id: 1,
    type: 'project',
    user: 'Sarah Chen',
    action: 'updated project status',
    target: 'Autonomous Navigation System',
    time: '2 hours ago',
    icon: 'FileText',
  },
  {
    id: 2,
    type: 'test',
    user: 'Lisa Anderson',
    action: 'completed flight test',
    target: 'Test Flight #156',
    time: '4 hours ago',
    icon: 'CheckCircle',
  },
  {
    id: 3,
    type: 'comment',
    user: 'Michael Rodriguez',
    action: 'commented on',
    target: 'Thermal Imaging Module',
    time: '6 hours ago',
    icon: 'MessageSquare',
  },
  {
    id: 4,
    type: 'upload',
    user: 'Emily Watson',
    action: 'uploaded new document',
    target: 'Communication Protocol Specs',
    time: '1 day ago',
    icon: 'Upload',
  },
  {
    id: 5,
    type: 'milestone',
    user: 'James Park',
    action: 'reached milestone',
    target: 'Battery Research Phase 1',
    time: '2 days ago',
    icon: 'Award',
  },
];

export const droneInventory = [
  {
    id: 1,
    model: 'Phantom X-Pro',
    type: 'Quadcopter',
    status: 'operational',
    flightHours: 245,
    lastMaintenance: '2024-10-15',
    condition: 'excellent',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300',
  },
  {
    id: 2,
    model: 'Hawk-Eye 500',
    type: 'Fixed Wing',
    status: 'maintenance',
    flightHours: 512,
    lastMaintenance: '2024-10-20',
    condition: 'good',
    image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=300',
  },
  {
    id: 3,
    model: 'Swift Racer',
    type: 'Racing Drone',
    status: 'operational',
    flightHours: 89,
    lastMaintenance: '2024-10-10',
    condition: 'excellent',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300',
  },
  {
    id: 4,
    model: 'Surveyor Pro',
    type: 'Mapping Drone',
    status: 'operational',
    flightHours: 367,
    lastMaintenance: '2024-10-18',
    condition: 'good',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=300',
  },
  {
    id: 5,
    model: 'Cargo Max',
    type: 'Heavy Lift',
    status: 'retired',
    flightHours: 1245,
    lastMaintenance: '2024-09-30',
    condition: 'fair',
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=300',
  },
];

export const accountingData = {
  revenue: [
    { month: 'Jan', amount: 125000 },
    { month: 'Feb', amount: 145000 },
    { month: 'Mar', amount: 132000 },
    { month: 'Apr', amount: 168000 },
    { month: 'May', amount: 189000 },
    { month: 'Jun', amount: 176000 },
  ],
  expenses: [
    { category: 'Equipment', amount: 245000, percentage: 35 },
    { category: 'Salaries', amount: 280000, percentage: 40 },
    { category: 'Materials', amount: 105000, percentage: 15 },
    { category: 'Facilities', amount: 70000, percentage: 10 },
  ],
  budgetOverview: {
    total: 1000000,
    spent: 700000,
    remaining: 300000,
    projected: 850000,
  },
};

export const notifications = [
  {
    id: 1,
    title: 'Project Milestone Reached',
    message: 'Autonomous Navigation System reached 75% completion',
    type: 'success',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 2,
    title: 'Flight Test Scheduled',
    message: 'Test Flight #157 scheduled for tomorrow at 09:00',
    type: 'info',
    time: '3 hours ago',
    read: false,
  },
  {
    id: 3,
    title: 'Maintenance Alert',
    message: 'Hawk-Eye 500 requires routine maintenance',
    type: 'warning',
    time: '5 hours ago',
    read: true,
  },
  {
    id: 4,
    title: 'Budget Update',
    message: 'Q4 budget allocation has been approved',
    type: 'info',
    time: '1 day ago',
    read: true,
  },
];

