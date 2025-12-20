import { useState } from 'react';
import {
  Map,
  MapPin,
  Layers,
  Globe,
  // Satellite,
  // Navigation,
  TrendingUp,
  Users,
  Database,
  FileText,
  Download,
  Upload,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  X,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  Activity,
  BarChart3,
  PieChart,
  Ruler,
  Crosshair,
  Compass,
  Mountain,
  Waves,
  Trees,
  Home,
  Building,
  Route,
  Zap,
  Share2,
  Settings,
  Target,
  Radio,
  Camera,
  Image,
  FolderOpen,
  Archive,
  CloudRain,
  Sun,
  Wind,
  Thermometer,
  Droplets,
  MapPinned,
  ScanLine,
  Grid3x3,
  Maximize,
  Minimize,
  RefreshCw,
  Save,
  Send,
  Bell,
  Shield,
  Lock,
  Unlock,
  Link,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Info,
  HelpCircle,
  Award,
  Briefcase,
  ClipboardList,
  Box,
} from 'lucide-react';

const GISDashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [showProjectDialog, setShowProjectDialog] = useState(false);
  const [showDatasetDialog, setShowDatasetDialog] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [mapView, setMapView] = useState('satellite');

  // Mock Data
  const stats = [
    {
      icon: Map,
      label: 'Active Projects',
      value: '24',
      change: '+4',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Layers,
      label: 'Map Layers',
      value: '156',
      change: '+12',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Database,
      label: 'Datasets',
      value: '89',
      change: '+8',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Globe,
      label: 'Coverage Area',
      value: '2,450 km²',
      change: '+145',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const projects = [
    {
      id: 1,
      name: 'Lagos Urban Planning Initiative',
      type: 'Urban Development',
      status: 'in-progress',
      progress: 68,
      area: '1,171 km²',
      lead: 'Dr. Adebayo Okon',
      team: ['AO', 'TM', 'CK', 'FN'],
      startDate: '2024-01-15',
      endDate: '2024-12-30',
      priority: 'high',
      layers: 12,
      datasets: 24,
      lastUpdate: '2 hours ago',
      description:
        'Comprehensive mapping and analysis for urban expansion planning',
      coordinates: '6.5244° N, 3.3792° E',
      stakeholders: [
        'Lagos State Govt',
        'Ministry of Works',
        'Urban Dev. Board',
      ],
      deliverables: [
        {
          name: 'Base Map Generation',
          status: 'completed',
          date: '2024-03-01',
        },
        { name: 'Land Use Analysis', status: 'completed', date: '2024-05-15' },
        {
          name: 'Infrastructure Mapping',
          status: 'in-progress',
          date: '2024-08-20',
        },
        { name: 'Final Report', status: 'upcoming', date: '2024-12-15' },
      ],
      metrics: {
        mapped: 780,
        analyzed: 450,
        validated: 320,
      },
    },
    {
      id: 2,
      name: 'Niger Delta Coastal Erosion Study',
      type: 'Environmental',
      status: 'in-progress',
      progress: 45,
      area: '890 km²',
      lead: 'Dr. Chioma Eze',
      team: ['CE', 'BO', 'LI'],
      startDate: '2024-03-10',
      endDate: '2025-02-28',
      priority: 'high',
      layers: 8,
      datasets: 16,
      lastUpdate: '1 day ago',
      description:
        'Monitoring and analysis of coastal erosion patterns using multi-temporal satellite imagery',
      coordinates: '4.8156° N, 6.0986° E',
      stakeholders: ['NESREA', 'Coastal Communities', 'Environmental NGOs'],
      deliverables: [
        {
          name: 'Historical Data Collection',
          status: 'completed',
          date: '2024-04-30',
        },
        {
          name: 'Change Detection Analysis',
          status: 'in-progress',
          date: '2024-09-15',
        },
        { name: 'Risk Assessment', status: 'upcoming', date: '2024-12-01' },
        { name: 'Mitigation Strategy', status: 'upcoming', date: '2025-01-30' },
      ],
      metrics: {
        mapped: 620,
        analyzed: 280,
        validated: 180,
      },
    },
    {
      id: 3,
      name: 'Abuja Road Network Optimization',
      type: 'Transportation',
      status: 'planning',
      progress: 25,
      area: '420 km²',
      lead: 'Eng. Mohammed Yusuf',
      team: ['MY', 'AS', 'PO'],
      startDate: '2024-06-01',
      endDate: '2025-03-31',
      priority: 'medium',
      layers: 6,
      datasets: 10,
      lastUpdate: '3 days ago',
      description:
        'GIS-based analysis for traffic flow optimization and new road planning',
      coordinates: '9.0579° N, 7.4951° E',
      stakeholders: ['FCT Administration', 'FRSC', 'Transport Ministry'],
      deliverables: [
        {
          name: 'Traffic Flow Analysis',
          status: 'in-progress',
          date: '2024-08-15',
        },
        { name: 'Route Optimization', status: 'upcoming', date: '2024-11-30' },
        { name: 'Implementation Plan', status: 'upcoming', date: '2025-02-15' },
      ],
      metrics: {
        mapped: 180,
        analyzed: 95,
        validated: 45,
      },
    },
  ];

  const datasets = [
    {
      id: 1,
      name: 'Nigeria Administrative Boundaries',
      type: 'Vector',
      format: 'Shapefile',
      size: '45 MB',
      updated: '2024-11-01',
      status: 'Active',
      resolution: 'State Level',
      source: 'NBS',
      downloads: 156,
      quality: 95,
    },
    {
      id: 2,
      name: 'Landsat 8 Satellite Imagery',
      type: 'Raster',
      format: 'GeoTIFF',
      size: '2.4 GB',
      updated: '2024-12-10',
      status: 'Active',
      resolution: '30m',
      source: 'USGS',
      downloads: 89,
      quality: 92,
    },
    {
      id: 3,
      name: 'Road Network - Major Cities',
      type: 'Vector',
      format: 'GeoJSON',
      size: '128 MB',
      updated: '2024-10-15',
      status: 'Active',
      resolution: 'Street Level',
      source: 'OSM',
      downloads: 234,
      quality: 88,
    },
    {
      id: 4,
      name: 'Elevation Data - SRTM DEM',
      type: 'Raster',
      format: 'GeoTIFF',
      size: '890 MB',
      updated: '2024-09-20',
      status: 'Active',
      resolution: '30m',
      source: 'NASA',
      downloads: 67,
      quality: 97,
    },
    {
      id: 5,
      name: 'Land Use/Land Cover 2024',
      type: 'Vector',
      format: 'Shapefile',
      size: '356 MB',
      updated: '2024-08-05',
      status: 'Processing',
      resolution: '10m',
      source: 'Sentinel-2',
      downloads: 45,
      quality: 90,
    },
    {
      id: 6,
      name: 'Population Density Grid',
      type: 'Raster',
      format: 'GeoTIFF',
      size: '178 MB',
      updated: '2024-07-12',
      status: 'Active',
      resolution: '1km',
      source: 'WorldPop',
      downloads: 123,
      quality: 85,
    },
  ];

  const mapLayers = [
    {
      id: 1,
      name: 'Base Map - Streets',
      type: 'Base Layer',
      visible: true,
      opacity: 100,
      source: 'OpenStreetMap',
      style: 'Standard',
    },
    {
      id: 2,
      name: 'Administrative Boundaries',
      type: 'Vector',
      visible: true,
      opacity: 80,
      source: 'Local Database',
      style: 'Outlined',
    },
    {
      id: 3,
      name: 'Satellite Imagery',
      type: 'Raster',
      visible: false,
      opacity: 100,
      source: 'Landsat 8',
      style: 'True Color',
    },
    {
      id: 4,
      name: 'Road Networks',
      type: 'Vector',
      visible: true,
      opacity: 90,
      source: 'Transport Dept',
      style: 'Classified',
    },
    {
      id: 5,
      name: 'Land Use Classes',
      type: 'Vector',
      visible: false,
      opacity: 75,
      source: 'Sentinel-2',
      style: 'Categorized',
    },
    {
      id: 6,
      name: 'Elevation Contours',
      type: 'Vector',
      visible: false,
      opacity: 60,
      source: 'SRTM DEM',
      style: 'Gradient',
    },
  ];

  const analyses = [
    {
      id: 1,
      name: 'Urban Growth Analysis 2020-2024',
      type: 'Change Detection',
      status: 'Completed',
      date: '2024-11-28',
      area: '1,171 km²',
      findings: 'Urban area expanded by 18.5%',
      accuracy: 94,
      analyst: 'Dr. Adebayo Okon',
    },
    {
      id: 2,
      name: 'Flood Risk Assessment',
      type: 'Spatial Analysis',
      status: 'In Progress',
      date: '2024-12-15',
      area: '680 km²',
      findings: 'Preliminary results available',
      accuracy: 88,
      analyst: 'Dr. Chioma Eze',
    },
    {
      id: 3,
      name: 'Agricultural Land Suitability',
      type: 'Multi-Criteria',
      status: 'Completed',
      date: '2024-10-20',
      area: '2,340 km²',
      findings: '45% highly suitable for crops',
      accuracy: 91,
      analyst: 'Eng. Mohammed Yusuf',
    },
  ];

  const equipment = [
    {
      name: 'GPS RTK Base Station',
      status: 'Available',
      location: 'Field Office A',
      lastCalibration: '2024-11-01',
      accuracy: '±2cm',
    },
    {
      name: 'Total Station - Leica TS16',
      status: 'In Use',
      location: 'Lagos Site',
      lastCalibration: '2024-10-15',
      accuracy: '±1mm',
    },
    {
      name: 'UAV - DJI Phantom 4 RTK',
      status: 'Available',
      location: 'Equipment Room',
      lastCalibration: '2024-12-05',
      accuracy: '±5cm',
    },
    {
      name: 'Handheld GPS - Garmin GPSMAP',
      status: 'Available',
      location: 'Field Office B',
      lastCalibration: '2024-09-20',
      accuracy: '±3m',
    },
    {
      name: 'Laser Scanner - Faro Focus',
      status: 'Maintenance',
      location: 'Repair Center',
      lastCalibration: '2024-08-10',
      accuracy: '±2mm',
    },
    {
      name: 'Weather Station',
      status: 'Available',
      location: 'Roof Station',
      lastCalibration: '2024-11-25',
      accuracy: 'Standard',
    },
  ];

  const views = [
    {
      id: 'overview',
      label: 'Overview',
      icon: Map,
      tooltip: 'Dashboard Overview',
    },
    {
      id: 'projects',
      label: 'Projects',
      icon: Briefcase,
      tooltip: 'GIS Projects',
    },
    {
      id: 'map-viewer',
      label: 'Map Viewer',
      icon: Globe,
      tooltip: 'Interactive Map',
    },
    {
      id: 'datasets',
      label: 'Datasets',
      icon: Database,
      tooltip: 'Spatial Datasets',
    },
    {
      id: 'analysis',
      label: 'Analysis',
      icon: BarChart3,
      tooltip: 'Spatial Analysis',
    },
    {
      id: 'equipment',
      label: 'Equipment',
      icon: Box,
      tooltip: 'Survey Equipment',
    },
  ];

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return 'bg-green-600 text-white';
      case 'in-progress':
        return 'bg-slate-600 text-white';
      case 'planning':
        return 'bg-slate-500 text-white';
      case 'upcoming':
        return 'bg-gray-300 text-gray-700';
      case 'active':
        return 'bg-green-600 text-white';
      case 'processing':
        return 'bg-slate-500 text-white';
      case 'maintenance':
        return 'bg-orange-500 text-white';
      case 'available':
        return 'bg-green-600 text-white';
      case 'in use':
        return 'bg-slate-600 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-400';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:shadow-lg transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${stat.color} ${stat.bgColor}`}
              >
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 border-gray-200 rounded-lg p-5 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="text-blue-600" size={24} />
            <h3 className="text-lg font-bold text-gray-900">Active Mapping</h3>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-1">12</div>
          <div className="text-sm text-gray-600">Field operations ongoing</div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-gradient-to-br from-green-50 to-white">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 className="text-green-600" size={24} />
            <h3 className="text-lg font-bold text-gray-900">
              Completed This Month
            </h3>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-1">8</div>
          <div className="text-sm text-gray-600">Projects delivered</div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-gradient-to-br from-purple-50 to-white">
          <div className="flex items-center gap-3 mb-3">
            <Target className="text-purple-600" size={24} />
            <h3 className="text-lg font-bold text-gray-900">Accuracy Rate</h3>
          </div>
          <div className="text-3xl font-bold text-purple-600 mb-1">96%</div>
          <div className="text-sm text-gray-600">Average data quality</div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Projects */}
        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Projects</h3>
            <button
              onClick={() => setActiveView('projects')}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="space-y-3">
            {projects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="p-4 border-2 border-gray-100 rounded-lg hover:border-grey-800 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      {project.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <MapPin size={12} />
                      <span>{project.area}</span>
                      <span>•</span>
                      <Clock size={12} />
                      <span>{project.lastUpdate}</span>
                    </div>
                  </div>
                  <span
                    className={`w-2 h-2 rounded-full ${getPriorityColor(project.priority)}`}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">
                    {project.progress}% Complete
                  </span>
                  <div className="flex -space-x-2">
                    {project.team.slice(0, 3).map((member, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Activity */}
        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Recent Analysis
          </h3>
          <div className="space-y-3">
            {analyses.map((analysis, idx) => (
              <div
                key={idx}
                className="p-4 border-2 border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      {analysis.name}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-600">
                      <span className="flex items-center gap-1">
                        <BarChart3 size={12} />
                        {analysis.type}
                      </span>
                      <span>•</span>
                      <span>{analysis.area}</span>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(analysis.status)}`}
                  >
                    {analysis.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-gray-600">
                    Accuracy: {analysis.accuracy}%
                  </span>
                  <span className="text-xs text-gray-500">
                    {analysis.analyst}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            {
              icon: Plus,
              label: 'New Project',
              action: () => setShowProjectDialog(true),
              color: 'blue',
            },
            {
              icon: Upload,
              label: 'Upload Data',
              action: () => setShowDatasetDialog(true),
              color: 'green',
            },
            {
              icon: Map,
              label: 'Open Map',
              action: () => setActiveView('map-viewer'),
              color: 'purple',
            },
            {
              icon: BarChart3,
              label: 'Run Analysis',
              action: () => setActiveView('analysis'),
              color: 'orange',
            },
            {
              icon: Download,
              label: 'Export Data',
              action: () => { },
              color: 'indigo',
            },
            {
              icon: Share2,
              label: 'Share Map',
              action: () => { },
              color: 'pink',
            },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className={`flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-900 transition-all group`}
            >
              <item.icon
                size={24}
                className={`text-gray-600`}
              />
              <span className="text-xs font-medium text-gray-700 text-center">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <div className="flex items-center gap-3 mb-3">
            <Database className="text-gray-600" size={20} />
            <h4 className="text-sm font-semibold text-gray-900">
              Data Storage
            </h4>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">
            2.4 TB / 5 TB
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full"
              style={{ width: '48%' }}
            />
          </div>
          <div className="text-xs text-gray-600 mt-2">48% Used</div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="text-gray-600" size={20} />
            <h4 className="text-sm font-semibold text-gray-900">
              Processing Queue
            </h4>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-2">5 Tasks</div>
          <div className="text-xs text-gray-600">2 running, 3 pending</div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="text-gray-600" size={20} />
            <h4 className="text-sm font-semibold text-gray-900">
              System Health
            </h4>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 bg-gray-900 rounded-full animate-pulse" />
            <span className="text-2xl font-bold text-gray-900">Optimal</span>
          </div>
          <div className="text-xs text-gray-600">All systems operational</div>
        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="space-y-4 animate-fadeIn">
      {/* Search and Actions Bar */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-[200px] relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
          <Filter size={18} />
          Filter
        </button>
        <button
          onClick={() => setShowProjectDialog(true)}
          className="flex items-center gap-2 px-4 py-2.5 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="border-2 border-gray-200 rounded-lg bg-white hover:border-gray-900 hover:shadow-lg transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="p-5">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <button
                      onClick={() => toggleSection(project.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      {expandedSections[project.id] ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </button>
                    <h3 className="text-lg font-bold text-gray-900">
                      {project.name}
                    </h3>
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${getPriorityColor(project.priority)}`}
                    />
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                      {project.type}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}
                    >
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    {project.description}
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <MoreVertical size={18} className="text-gray-400" />
                </button>
              </div>

              {/* Project Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ml-8 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Area</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {project.area}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Lead</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {project.lead.split(' ')[1]}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Layers</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {project.layers}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Database size={16} className="text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Datasets</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {project.datasets}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Duration</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {Math.ceil(
                        (new Date(project.endDate) -
                          new Date(project.startDate)) /
                        (1000 * 60 * 60 * 24 * 30)
                      )}
                      m
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gray-400" />
                  <div>
                    <div className="text-xs text-gray-500">Updated</div>
                    <div className="text-sm font-semibold text-gray-900">
                      {project.lastUpdate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div className="flex items-center gap-3 ml-8 mb-4">
                <span className="text-xs text-gray-600">Team:</span>
                <div className="flex -space-x-2">
                  {project.team.map((member, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white hover:z-10 hover:scale-110 transition-transform cursor-pointer"
                    >
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 ml-8 mb-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">
                    {project.metrics.mapped}
                  </div>
                  <div className="text-xs text-gray-600">Features Mapped</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">
                    {project.metrics.analyzed}
                  </div>
                  <div className="text-xs text-gray-600">Analyzed</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-700">
                    {project.metrics.validated}
                  </div>
                  <div className="text-xs text-gray-600">Validated</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="ml-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    Overall Progress
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-slate-200 to-slate-900 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Expanded Section - Deliverables */}
            {expandedSections[project.id] && (
              <div className="px-5 pb-5 pt-2 border-t-2 border-gray-100">
                <div className="ml-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Deliverables
                  </h4>
                  <div className="space-y-2">
                    {project.deliverables.map((deliverable, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {deliverable.status === 'completed' ? (
                          <CheckCircle2 size={20} className="text-green-600" />
                        ) : deliverable.status === 'in-progress' ? (
                          <Activity size={20} className="text-blue-600" />
                        ) : (
                          <Clock size={20} className="text-gray-400" />
                        )}
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            {deliverable.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            Due:{' '}
                            {new Date(deliverable.date).toLocaleDateString()}
                          </div>
                        </div>
                        <span
                          className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(deliverable.status)}`}
                        >
                          {deliverable.status.replace('-', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Stakeholders
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.stakeholders.map((stakeholder, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                        >
                          {stakeholder}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-900 hover:border-gray-900 transition-all">
                      <Map size={14} />
                      View on Map
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-900 hover:border-gray-900  transition-all">
                      <FileText size={14} />
                      Project Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-900 hover:border-gray-900 transition-all">
                      <Share2 size={14} />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderMapViewer = () => (
    <div className="space-y-4 animate-fadeIn">
      {/* Map Controls */}
      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Base Map:</span>
          <div className="flex gap-2">
            {['Street', 'Satellite', 'Terrain', 'Hybrid'].map((type) => (
              <button
                key={type}
                onClick={() => setMapView(type.toLowerCase())}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${mapView === type.toLowerCase()
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="flex gap-2">
          <button
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-800 hover:border-gray-900 transition-all"
            title="Zoom In"
          >
            <Plus size={16} />
          </button>
          <button
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-800 hover:border-gray-900 transition-all"
            title="Zoom Out"
          >
            <Minimize size={16} />
          </button>
          <button
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-800 hover:border-gray-900 transition-all"
            title="Fit to Extent"
          >
            <Maximize size={16} />
          </button>
          <button
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-800 hover:border-gray-900 transition-all"
            title="Refresh"
          >
            <RefreshCw size={16} />
          </button>
        </div>
        <div className="h-6 w-px bg-gray-300" />
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-900 hover:border-gray-900 transition-all">
            <Ruler size={14} />
            Measure
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-900 hover:border-gray-900 transition-all">
            <MapPin size={14} />
            Add Point
          </button>
          <button className="flex items-center gap-2 px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-900 hover:border-gray-900 transition-all">
            <Download size={14} />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Map Display */}
        <div
          className="lg:col-span-3 border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-100 relative"
          style={{ height: '600px' }}
        >
          {/* Simulated Map */}
          <div className="w-full h-full bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Globe size={64} className="mx-auto text-gray-400" />
                <div className="text-lg font-semibold text-gray-700">
                  Interactive Map View
                </div>
                <div className="text-sm text-gray-600">
                  Map: {mapView} | Coordinate System: WGS 84
                </div>
                <div className="text-xs text-gray-500">
                  Current View: Nigeria (6.5244° N, 3.3792° E)
                </div>
              </div>
            </div>

            {/* Map Overlays */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 text-xs">
              <div className="font-semibold mb-1">Scale</div>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-gray-900" />
                <span>10 km</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
              <Compass size={48} className="text-gray-700" />
            </div>

            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-3 py-2 text-xs">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-600" />
                <span className="font-medium">6.5244° N, 3.3792° E</span>
              </div>
            </div>

            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg px-3 py-2 text-xs">
              <span className="font-medium">Zoom Level: 12</span>
            </div>
          </div>
        </div>

        {/* Layers Panel */}
        <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
          <div className="p-4 border-b-2 border-gray-200 bg-gray-50">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <Layers size={16} />
              Map Layers
            </h3>
          </div>
          <div className="p-3 max-h-[550px] overflow-y-auto">
            <div className="space-y-2">
              {mapLayers.map((layer) => (
                <div
                  key={layer.id}
                  className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={layer.visible}
                        onChange={() => { }}
                        className="w-4 h-4 text-slate-900 border-gray-300 rounded focus:ring-gray-900"
                      />
                      <span className="text-xs font-medium text-gray-900">
                        {layer.name}
                      </span>
                    </div>
                    <Eye
                      size={14}
                      className={
                        layer.visible ? 'text-black' : 'text-gray-400'
                      }
                    />
                  </div>
                  <div className="text-xs text-gray-500 mb-2 ml-6">
                    {layer.type} • {layer.source}
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>Opacity</span>
                      <span>{layer.opacity}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={layer.opacity}
                      onChange={() => { }}
                      className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Map Legend */}
      <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
        <h3 className="text-sm font-bold text-gray-900 mb-3">Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {[
            { color: 'bg-green-500', label: 'Forest/Vegetation' },
            { color: 'bg-blue-500', label: 'Water Bodies' },
            { color: 'bg-gray-500', label: 'Urban Areas' },
            { color: 'bg-yellow-500', label: 'Agricultural Land' },
            { color: 'bg-orange-500', label: 'Bare Soil' },
            { color: 'bg-red-500', label: 'Built-up Areas' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-4 h-4 ${item.color} rounded`} />
              <span className="text-xs text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDatasets = () => (
    <div className="space-y-4 animate-fadeIn">
      {/* Search and Actions */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-[200px] relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search datasets..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <select className="px-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Types</option>
          <option>Vector</option>
          <option>Raster</option>
        </select>
        <select className="px-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500">
          <option>All Formats</option>
          <option>Shapefile</option>
          <option>GeoTIFF</option>
          <option>GeoJSON</option>
        </select>
        <button
          onClick={() => setShowDatasetDialog(true)}
          className="flex items-center gap-2 px-4 py-2.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
        >
          <Upload size={18} />
          Upload Dataset
        </button>
      </div>

      {/* Datasets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datasets.map((dataset, idx) => (
          <div
            key={dataset.id}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                {dataset.type === 'Vector' ? (
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Grid3x3 size={20} className="text-green-600" />
                  </div>
                ) : (
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Image size={20} className="text-purple-600" />
                  </div>
                )}
                <div>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${getStatusColor(dataset.status)}`}
                  >
                    {dataset.status}
                  </span>
                </div>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <MoreVertical size={16} className="text-gray-400" />
              </button>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">
              {dataset.name}
            </h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium text-gray-900">
                  {dataset.type}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Format:</span>
                <span className="font-medium text-gray-900">
                  {dataset.format}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium text-gray-900">
                  {dataset.size}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Resolution:</span>
                <span className="font-medium text-gray-900">
                  {dataset.resolution}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">Source:</span>
                <span className="font-medium text-gray-900">
                  {dataset.source}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Data Quality</span>
                <span className="font-semibold text-gray-900">
                  {dataset.quality}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${dataset.quality >= 90
                    ? 'bg-green-600'
                    : dataset.quality >= 80
                      ? 'bg-blue-600'
                      : 'bg-yellow-600'
                    }`}
                  style={{ width: `${dataset.quality}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Download size={12} />
                <span>{dataset.downloads} downloads</span>
              </div>
              <span>
                Updated: {new Date(dataset.updated).toLocaleDateString()}
              </span>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <Eye size={12} />
                View
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <Download size={12} />
                Download
              </button>
              <button className="flex items-center justify-center px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <Share2 size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Storage Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <div className="flex items-center gap-3 mb-3">
            <Database className="text-blue-600" size={24} />
            <h3 className="text-sm font-bold text-gray-900">Total Datasets</h3>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">89</div>
          <div className="text-xs text-gray-600">56 Vector, 33 Raster</div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="text-green-600" size={24} />
            <h3 className="text-sm font-bold text-gray-900">Active Datasets</h3>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">76</div>
          <div className="text-xs text-gray-600">85% availability rate</div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <div className="flex items-center gap-3 mb-3">
            <Download className="text-purple-600" size={24} />
            <h3 className="text-sm font-bold text-gray-900">Total Downloads</h3>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">1,247</div>
          <div className="text-xs text-gray-600">+89 this month</div>
        </div>
      </div>
    </div>
  );

  const renderAnalysis = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Analysis Tools */}
      <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Analysis Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            {
              icon: ScanLine,
              label: 'Change Detection',
              desc: 'Multi-temporal analysis',
            },
            {
              icon: Target,
              label: 'Buffer Analysis',
              desc: 'Proximity analysis',
            },
            { icon: Grid3x3, label: 'Spatial Join', desc: 'Attribute merging' },
            { icon: BarChart3, label: 'Statistics', desc: 'Zonal statistics' },
            {
              icon: Crosshair,
              label: 'Interpolation',
              desc: 'Surface creation',
            },
            {
              icon: Route,
              label: 'Network Analysis',
              desc: 'Route optimization',
            },
            { icon: Waves, label: 'Hydrology', desc: 'Flow analysis' },
            {
              icon: Mountain,
              label: 'Terrain Analysis',
              desc: 'DEM processing',
            },
          ].map((tool, idx) => (
            <button
              key={idx}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
            >
              <tool.icon
                size={24}
                className="text-gray-600 group-hover:text-blue-600 mb-2"
              />
              <div className="text-sm font-semibold text-gray-900 mb-1">
                {tool.label}
              </div>
              <div className="text-xs text-gray-600">{tool.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Analyses */}
      <div className="border-2 border-gray-200 rounded-lg bg-white">
        <div className="p-5 border-b-2 border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">Recent Analyses</h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              <Plus size={18} />
              New Analysis
            </button>
          </div>
        </div>

        <div className="divide-y-2 divide-gray-100">
          {analyses.map((analysis, idx) => (
            <div key={idx} className="p-5 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    {analysis.name}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-gray-600 flex-wrap">
                    <span className="flex items-center gap-1">
                      <BarChart3 size={12} />
                      {analysis.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {analysis.area}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={12} />
                      {analysis.analyst}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(analysis.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(analysis.status)}`}
                >
                  {analysis.status}
                </span>
              </div>

              <div className="bg-gray-50 rounded-lg p-3 mb-3">
                <div className="text-xs font-medium text-gray-700 mb-1">
                  Key Findings:
                </div>
                <div className="text-sm text-gray-900">{analysis.findings}</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-xs text-gray-600">
                    Accuracy:{' '}
                    <span className="font-semibold text-gray-900">
                      {analysis.accuracy}%
                    </span>
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-green-600 h-1.5 rounded-full"
                      style={{ width: `${analysis.accuracy}%` }}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                    <Eye size={12} />
                    View
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                    <Download size={12} />
                    Export
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                    <Share2 size={12} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: 'Total Analyses',
            value: '145',
            sublabel: 'All time',
            icon: BarChart3,
            color: 'blue',
          },
          {
            label: 'This Month',
            value: '12',
            sublabel: '+3 from last month',
            icon: TrendingUp,
            color: 'green',
          },
          {
            label: 'Avg. Accuracy',
            value: '92%',
            sublabel: 'Quality metric',
            icon: Target,
            color: 'purple',
          },
          {
            label: 'Processing Time',
            value: '2.4h',
            sublabel: 'Average duration',
            icon: Clock,
            color: 'orange',
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:shadow-lg transition-all"
          >
            <div className={`p-2 bg-${stat.color}-100 rounded-lg w-fit mb-3`}>
              <stat.icon className={`text-${stat.color}-600`} size={20} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-gray-500">{stat.sublabel}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEquipment = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Equipment Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {equipment.map((equip, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:border-blue-500 hover:shadow-lg transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-lg ${equip.status === 'Available'
                    ? 'bg-green-100'
                    : equip.status === 'In Use'
                      ? 'bg-blue-100'
                      : 'bg-orange-100'
                    }`}
                >
                  <Radio
                    size={20}
                    className={
                      equip.status === 'Available'
                        ? 'text-green-600'
                        : equip.status === 'In Use'
                          ? 'text-blue-600'
                          : 'text-orange-600'
                    }
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {equip.name}
                  </h3>
                </div>
              </div>
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(equip.status)}`}
              >
                {equip.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600 flex items-center gap-1">
                  <MapPin size={12} />
                  Location:
                </span>
                <span className="font-medium text-gray-900">
                  {equip.location}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600 flex items-center gap-1">
                  <Target size={12} />
                  Accuracy:
                </span>
                <span className="font-medium text-gray-900">
                  {equip.accuracy}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600 flex items-center gap-1">
                  <Calendar size={12} />
                  Last Calibration:
                </span>
                <span className="font-medium text-gray-900">
                  {new Date(equip.lastCalibration).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <Calendar size={12} />
                Book
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <Eye size={12} />
                Details
              </button>
              <button className="flex items-center justify-center px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                <Settings size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Equipment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: 'Total Equipment',
            value: '18',
            sublabel: '6 categories',
            icon: Box,
            color: 'blue',
          },
          {
            label: 'Available',
            value: '12',
            sublabel: '67% ready',
            icon: CheckCircle2,
            color: 'green',
          },
          {
            label: 'In Use',
            value: '4',
            sublabel: 'Currently deployed',
            icon: Activity,
            color: 'orange',
          },
          {
            label: 'Maintenance',
            value: '2',
            sublabel: 'Being serviced',
            icon: Settings,
            color: 'red',
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white"
          >
            <div className={`p-2 bg-${stat.color}-100 rounded-lg w-fit mb-3`}>
              <stat.icon className={`text-${stat.color}-600`} size={20} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-gray-500">{stat.sublabel}</div>
          </div>
        ))}
      </div>

      {/* Calibration Schedule */}
      <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Upcoming Calibrations
        </h3>
        <div className="space-y-3">
          {[
            {
              equipment: 'GPS RTK Base Station',
              date: '2025-01-15',
              status: 'scheduled',
            },
            {
              equipment: 'UAV - DJI Phantom 4 RTK',
              date: '2025-02-05',
              status: 'scheduled',
            },
            {
              equipment: 'Laser Scanner - Faro Focus',
              date: '2025-01-28',
              status: 'urgent',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 border-2 border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gray-400" />
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {item.equipment}
                  </div>
                  <div className="text-xs text-gray-600">
                    Due: {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <span
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${item.status === 'urgent'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-blue-100 text-blue-700'
                  }`}
              >
                {item.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-gray-50 border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-center justify-center gap-6">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    GIS Department
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Geographic Information Systems & Spatial Analysis
                  </p>
                </div>
              </div>

              {/* View Switcher and Action Buttons Container */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                {/* View Switcher */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg overflow-x-auto">
                  {views.map((view) => (
                    <div key={view.id} className="relative group">
                      <button
                        onClick={() => setActiveView(view.id)}
                        className={`p-2 rounded transition-all whitespace-nowrap ${activeView === view.id
                          ? 'bg-white text-black'
                          : 'text-gray-600 hover:text-gray-900'
                          }`}
                        title={view.tooltip}
                      >
                        <view.icon size={18} />
                      </button>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {view.tooltip}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setShowDatasetDialog(true)}
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                    title="Upload Dataset"
                  >
                    <Upload size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium sm:hidden">Upload</span>
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Upload Dataset
                    </div>
                  </button>

                  <button
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                    title="Export Project"
                  >
                    <Download size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium sm:hidden">Export</span>
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Export Project
                    </div>
                  </button>

                  <button
                    onClick={() => setShowProjectDialog(true)}
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-200 font-medium"
                    title="New Project"
                  >
                    <Plus size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium hidden lg:inline">New Project</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto mt-8">
          <div className="max-w-7xl mx-auto px-6 py-6">
            {activeView === 'overview' && renderOverview()}
            {activeView === 'projects' && renderProjects()}
            {activeView === 'map-viewer' && renderMapViewer()}
            {activeView === 'datasets' && renderDatasets()}
            {activeView === 'analysis' && renderAnalysis()}
            {activeView === 'equipment' && renderEquipment()}
          </div>
        </div>

        {/* Project Dialog */}
        {showProjectDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-xl font-bold text-gray-900">
                  Create New Project
                </h2>
                <button
                  onClick={() => setShowProjectDialog(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label htmlFor='project-name' className="block text-sm font-medium text-gray-900 mb-2">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="Enter project name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor='project-type' className="block text-sm font-medium text-gray-900 mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                      <option>Urban Development</option>
                      <option>Environmental</option>
                      <option>Transportation</option>
                      <option>Agriculture</option>
                      <option>Infrastructure</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor='project-priority' className="block text-sm font-medium text-gray-900 mb-2">
                      Priority
                    </label>
                    <select className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                      <option>High</option>
                      <option>Medium</option>
                      <option>Low</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor='project-description' className="block text-sm font-medium text-gray-900 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    rows="4"
                    placeholder="Enter project description"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor='project-start-date' className="block text-sm font-medium text-gray-900 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor='project-end-date' className="block text-sm font-medium text-gray-900 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor='project-coverage-area' className="block text-sm font-medium text-gray-900 mb-2">
                      Coverage Area (km²)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="0.00"
                    />
                  </div>
                  <div>
                    <label htmlFor='project-lead' className="block text-sm font-medium text-gray-900 mb-2">
                      Project Lead
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="Enter lead name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor='project-coordinates' className="block text-sm font-medium text-gray-900 mb-2">
                    Coordinates (Lat, Long)
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="e.g., 6.5244° N, 3.3792° E"
                  />
                </div>
                <div>
                  <label htmlFor='project-stakeholders' className="block text-sm font-medium text-gray-900 mb-2">
                    Stakeholders
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="Comma-separated stakeholders"
                  />
                </div>
              </div>
              <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
                <button
                  onClick={() => setShowProjectDialog(false)}
                  className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                  Create Project
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dataset Dialog */}
        {showDatasetDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                <h2 className="text-xl font-bold text-gray-900">
                  Upload Dataset
                </h2>
                <button
                  onClick={() => setShowDatasetDialog(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label htmlFor='dataset-name' className="block text-sm font-medium text-gray-900 mb-2">
                    Dataset Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="Enter dataset name"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor='dataset-type' className="block text-sm font-medium text-gray-900 mb-2">
                      Type
                    </label>
                    <select className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                      <option>Vector</option>
                      <option>Raster</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor='dataset-format' className="block text-sm font-medium text-gray-900 mb-2">
                      Format
                    </label>
                    <select className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                      <option>Shapefile</option>
                      <option>GeoTIFF</option>
                      <option>GeoJSON</option>
                      <option>KML</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor='dataset-file' className="block text-sm font-medium text-gray-900 mb-2">
                    File Upload
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-black transition-colors cursor-pointer">
                    <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                    <div className="text-sm text-gray-600">
                      Drag & drop files here or click to browse
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Supports: .shp, .tif, .geojson, .kml
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor='dataset-resolution' className="block text-sm font-medium text-gray-900 mb-2">
                    Resolution
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="e.g., 30m, State Level"
                  />
                </div>
                <div>
                  <label htmlFor='dataset-source' className="block text-sm font-medium text-gray-900 mb-2">
                    Source
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="Data source"
                  />
                </div>
                <div>
                  <label htmlFor='dataset-description' className="block text-sm font-medium text-gray-900 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    rows="3"
                    placeholder="Enter dataset description"
                  ></textarea>
                </div>
              </div>
              <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
                <button
                  onClick={() => setShowDatasetDialog(false)}
                  className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                  Upload Dataset
                </button>
              </div>
            </div>
          </div>
        )}

        <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out backwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
      </div>
    </div>
  );
}



export default GISDashboard;
