import { useState } from 'react';
import {
  Cog,
  Plane,
  FlaskConical,
  GitBranch,
  TrendingUp,
  Users,
  Calendar,
  FileText,
  AlertCircle,
  CheckCircle2,
  Clock,
  Zap,
  Database,
  Shield,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  X,
  Send,
  Paperclip,
  MessageSquare,
  ChevronRight,
  ChevronDown,
  Target,
  BookOpen,
  Award,
  Cpu,
  Wifi,
  Battery,
  Radio,
  Camera,
  Navigation,
  Package,
} from 'lucide-react';

const RnDDashboard = () => {
  const [activeView, setActiveView] = useState('overview');
  const [showExperimentDialog, setShowExperimentDialog] = useState(false);
  const [showPrototypeDialog, setShowPrototypeDialog] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedExperiment, setSelectedExperiment] = useState(null);

  // Mock Data
  const stats = [
    {
      icon: FlaskConical,
      label: 'Active Experiments',
      value: '8',
      change: '+2',
      color: 'text-gray-900',
    },
    {
      icon: Plane,
      label: 'UAV Prototypes',
      value: '5',
      change: '+1',
      color: 'text-gray-700',
    },
    {
      icon: GitBranch,
      label: 'Research Projects',
      value: '12',
      change: '+3',
      color: 'text-gray-600',
    },
    {
      icon: Award,
      label: 'Patents Filed',
      value: '3',
      change: '+1',
      color: 'text-gray-500',
    },
  ];

  const experiments = [
    {
      id: 1,
      name: 'Autonomous Navigation System',
      type: 'Software',
      status: 'in-progress',
      progress: 75,
      lead: 'Dr. Sarah Chen',
      team: ['SC', 'JD', 'MK'],
      startDate: '2024-01-10',
      endDate: '2024-06-30',
      priority: 'high',
      budget: '₦15M',
      description: 'Development of AI-powered autonomous navigation for UAVs',
      milestones: [
        { name: 'Algorithm Design', status: 'completed', date: '2024-02-15' },
        { name: 'Simulation Testing', status: 'completed', date: '2024-03-20' },
        {
          name: 'Hardware Integration',
          status: 'in-progress',
          date: '2024-05-10',
        },
        { name: 'Field Testing', status: 'upcoming', date: '2024-06-15' },
      ],
      metrics: {
        tests: 45,
        successRate: 89,
        iterations: 12,
      },
    },
    {
      id: 2,
      name: 'Long-Range Battery System',
      type: 'Hardware',
      status: 'in-progress',
      progress: 60,
      lead: 'Dr. James Wilson',
      team: ['JW', 'AL', 'RP'],
      startDate: '2024-02-01',
      endDate: '2024-08-15',
      priority: 'high',
      budget: '₦20M',
      description:
        'High-capacity lithium polymer battery for extended flight time',
      milestones: [
        { name: 'Material Research', status: 'completed', date: '2024-03-01' },
        { name: 'Prototype Design', status: 'in-progress', date: '2024-05-15' },
        { name: 'Safety Testing', status: 'upcoming', date: '2024-07-01' },
        { name: 'Certification', status: 'upcoming', date: '2024-08-10' },
      ],
      metrics: {
        tests: 32,
        successRate: 78,
        iterations: 8,
      },
    },
    {
      id: 3,
      name: 'Multi-Spectral Imaging',
      type: 'Sensor',
      status: 'planning',
      progress: 25,
      lead: 'Dr. Emily Park',
      team: ['EP', 'TK'],
      startDate: '2024-03-10',
      endDate: '2024-12-20',
      priority: 'medium',
      budget: '₦12M',
      description:
        'Advanced multi-spectral camera system for precision agriculture',
      milestones: [
        {
          name: 'Requirements Analysis',
          status: 'completed',
          date: '2024-03-25',
        },
        { name: 'Sensor Selection', status: 'in-progress', date: '2024-05-01' },
        { name: 'Integration Testing', status: 'upcoming', date: '2024-08-15' },
        { name: 'Field Validation', status: 'upcoming', date: '2024-11-30' },
      ],
      metrics: {
        tests: 18,
        successRate: 85,
        iterations: 5,
      },
    },
  ];

  const prototypes = [
    {
      id: 1,
      name: 'Hawk-X Pro',
      type: 'Fixed-Wing',
      status: 'Testing',
      flightTime: '120 min',
      range: '50 km',
      payload: '2.5 kg',
      version: 'v3.2',
    },
    {
      id: 2,
      name: 'Falcon Swift',
      type: 'Quadcopter',
      status: 'Production',
      flightTime: '45 min',
      range: '15 km',
      payload: '1.8 kg',
      version: 'v2.1',
    },
    {
      id: 3,
      name: 'Eagle Scout',
      type: 'Hybrid VTOL',
      status: 'Development',
      flightTime: '90 min',
      range: '35 km',
      payload: '3.2 kg',
      version: 'v1.5',
    },
    {
      id: 4,
      name: 'Sparrow Mini',
      type: 'Nano Drone',
      status: 'Testing',
      flightTime: '25 min',
      range: '5 km',
      payload: '0.5 kg',
      version: 'v2.0',
    },
  ];

  const researchPapers = [
    {
      title: 'AI-Driven Flight Path Optimization',
      author: 'Dr. Sarah Chen',
      date: '2024-11-15',
      citations: 12,
      status: 'Published',
    },
    {
      title: 'Thermal Management in High-Density Batteries',
      author: 'Dr. James Wilson',
      date: '2024-10-22',
      citations: 8,
      status: 'Published',
    },
    {
      title: 'Multi-Sensor Data Fusion Techniques',
      author: 'Dr. Emily Park',
      date: '2024-12-01',
      citations: 5,
      status: 'Under Review',
    },
    {
      title: 'Swarm Intelligence for UAV Coordination',
      author: 'Dr. Sarah Chen',
      date: '2024-09-10',
      citations: 15,
      status: 'Published',
    },
  ];

  const views = [
    {
      id: 'overview',
      label: 'Overview',
      icon: Cog,
      tooltip: 'Department Overview',
    },
    {
      id: 'experiments',
      label: 'Experiments',
      icon: FlaskConical,
      tooltip: 'Active Experiments',
    },
    {
      id: 'prototypes',
      label: 'Prototypes',
      icon: Plane,
      tooltip: 'UAV Prototypes',
    },
    {
      id: 'research',
      label: 'Research',
      icon: BookOpen,
      tooltip: 'Research & Publications',
    },
    {
      id: 'equipment',
      label: 'Equipment',
      icon: Database,
      tooltip: 'Lab Equipment',
    },
  ];

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-gray-900 text-white';
      case 'in-progress':
        return 'bg-gray-700 text-white';
      case 'planning':
        return 'bg-gray-400 text-white';
      case 'upcoming':
        return 'bg-gray-200 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-gray-900';
      case 'medium':
        return 'bg-gray-600';
      case 'low':
        return 'bg-gray-400';
      default:
        return 'bg-gray-500';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={stat.color} size={24} />
              <span className="text-xs font-medium text-gray-600">
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Department Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Research Progress
          </h3>
          <div className="space-y-4">
            {experiments.slice(0, 3).map((exp) => (
              <div key={exp.id}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    {exp.name}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">
                    {exp.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-2 rounded-full transition-all duration-500"
                    style={{ width: `${exp.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Team Activity
          </h3>
          <div className="space-y-3">
            {[
              {
                name: 'Dr. Sarah Chen',
                activity: 'Updated navigation algorithm',
                time: '2h ago',
                avatar: 'SC',
              },
              {
                name: 'Dr. James Wilson',
                activity: 'Completed battery safety test',
                time: '4h ago',
                avatar: 'JW',
              },
              {
                name: 'Dr. Emily Park',
                activity: 'Published sensor calibration data',
                time: '1d ago',
                avatar: 'EP',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                  {item.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-gray-600 truncate">
                    {item.activity}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            {
              icon: FlaskConical,
              label: 'New Experiment',
              action: () => setShowExperimentDialog(true),
            },
            {
              icon: Plane,
              label: 'Add Prototype',
              action: () => setShowPrototypeDialog(true),
            },
            { icon: FileText, label: 'Lab Report', action: () => { } },
            { icon: Upload, label: 'Upload Data', action: () => { } },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all group"
            >
              <item.icon size={24} className="group-hover:text-white" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderExperiments = () => (
    <div className="space-y-4 animate-fadeIn">
      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search experiments..."
            className="w-full pl-10 pr-4 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white transition-all">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Experiments List */}
      <div className="space-y-3">
        {experiments.map((exp, idx) => (
          <div
            key={exp.id}
            className="border-2 border-gray-200 rounded-lg bg-white hover:border-black transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <button
                      onClick={() => toggleSection(exp.id)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      {expandedSections[exp.id] ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </button>
                    <h3 className="text-lg font-bold text-gray-900">
                      {exp.name}
                    </h3>
                    <span
                      className={`w-2 h-2 rounded-full ${getPriorityColor(exp.priority)}`}
                    />
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-gray-200 text-gray-700">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    {exp.description}
                  </p>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                  <MoreVertical size={18} className="text-gray-400" />
                </button>
              </div>

              {/* Experiment Info */}
              <div className="flex items-center gap-6 ml-8 mb-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-400" />
                  <span className="text-xs text-gray-600">{exp.lead}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-xs text-gray-600">
                    {new Date(exp.startDate).toLocaleDateString()} -{' '}
                    {new Date(exp.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Target size={16} className="text-gray-400" />
                  <span className="text-xs text-gray-600">{exp.budget}</span>
                </div>
                <div className="flex -space-x-2">
                  {exp.team.map((member, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white"
                    >
                      {member}
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 ml-8 mb-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {exp.metrics.tests}
                  </div>
                  <div className="text-xs text-gray-600">Tests Run</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {exp.metrics.successRate}%
                  </div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">
                    {exp.metrics.iterations}
                  </div>
                  <div className="text-xs text-gray-600">Iterations</div>
                </div>
              </div>

              {/* Progress */}
              <div className="ml-8">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">
                    Overall Progress
                  </span>
                  <span className="text-xs font-semibold text-gray-900">
                    {exp.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-black h-2 rounded-full transition-all duration-500"
                    style={{ width: `${exp.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Expanded - Milestones */}
            {expandedSections[exp.id] && (
              <div className="px-5 pb-5 pt-2 border-t-2 border-gray-100">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 ml-8">
                  Milestones
                </h4>
                <div className="space-y-2 ml-8">
                  {exp.milestones.map((milestone, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {milestone.status === 'completed' ? (
                        <CheckCircle2 size={18} className="text-gray-900" />
                      ) : milestone.status === 'in-progress' ? (
                        <AlertCircle size={18} className="text-gray-600" />
                      ) : (
                        <Clock size={18} className="text-gray-400" />
                      )}
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {milestone.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Due: {new Date(milestone.date).toLocaleDateString()}
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${getStatusColor(milestone.status)}`}
                      >
                        {milestone.status.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrototypes = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Prototype Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prototypes.map((proto, idx) => (
          <div
            key={proto.id}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:border-black transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {proto.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">{proto.type}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs font-medium text-gray-600">
                    {proto.version}
                  </span>
                </div>
              </div>
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(proto.status.toLowerCase())}`}
              >
                {proto.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { icon: Clock, label: 'Flight Time', value: proto.flightTime },
                { icon: Navigation, label: 'Range', value: proto.range },
                { icon: Package, label: 'Payload', value: proto.payload },
              ].map((spec, i) => (
                <div key={i} className="text-center p-3 bg-gray-50 rounded-lg">
                  <spec.icon size={20} className="mx-auto mb-1 text-gray-600" />
                  <div className="text-sm font-semibold text-gray-900">
                    {spec.value}
                  </div>
                  <div className="text-xs text-gray-500">{spec.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all">
                <Eye size={14} />
                View Details
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all">
                <FileText size={14} />
                Specs
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Specifications */}
      <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Component Systems
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Cpu, label: 'Flight Controller', status: 'Operational' },
            { icon: Camera, label: 'Imaging System', status: 'Operational' },
            { icon: Wifi, label: 'Communication', status: 'Testing' },
            { icon: Battery, label: 'Power System', status: 'Operational' },
            { icon: Radio, label: 'Telemetry', status: 'Operational' },
            { icon: Navigation, label: 'GPS Module', status: 'Operational' },
            { icon: Shield, label: 'Safety Systems', status: 'Operational' },
            { icon: Zap, label: 'Payload Interface', status: 'Development' },
          ].map((comp, idx) => (
            <div
              key={idx}
              className="p-4 border-2 border-gray-200 rounded-lg hover:border-black transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <comp.icon size={20} className="text-gray-600" />
                <span
                  className={`w-2 h-2 rounded-full ${comp.status === 'Operational'
                    ? 'bg-gray-900'
                    : comp.status === 'Testing'
                      ? 'bg-gray-600'
                      : 'bg-gray-400'
                    }`}
                />
              </div>
              <div className="text-sm font-medium text-gray-900 mb-1">
                {comp.label}
              </div>
              <div className="text-xs text-gray-500">{comp.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderResearch = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Publications */}
      <div className="border-2 border-gray-200 rounded-lg bg-white">
        <div className="p-5 border-b-2 border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">
              Research Publications
            </h3>
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
              <Plus size={18} />
              New Publication
            </button>
          </div>
        </div>

        <div className="divide-y-2 divide-gray-100">
          {researchPapers.map((paper, idx) => (
            <div key={idx} className="p-5 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    {paper.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <span>{paper.author}</span>
                    <span>•</span>
                    <span>{new Date(paper.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{paper.citations} citations</span>
                  </div>
                </div>
                <span
                  className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${paper.status === 'Published'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-700'
                    }`}
                >
                  {paper.status}
                </span>
              </div>
              <div className="flex gap-2 mt-3">
                <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all">
                  <Eye size={12} />
                  View
                </button>
                <button className="flex items-center gap-1 px-3 py-1 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all">
                  <Download size={12} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            label: 'Total Publications',
            value: '24',
            sublabel: 'Last 12 months',
          },
          {
            label: 'Total Citations',
            value: '156',
            sublabel: '+12 this month',
          },
          { label: 'h-index', value: '8', sublabel: 'Department average' },
        ].map((metric, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white"
          >
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {metric.value}
            </div>
            <div className="text-sm font-medium text-gray-900 mb-1">
              {metric.label}
            </div>
            <div className="text-xs text-gray-500">{metric.sublabel}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEquipment = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            name: '3D Printer - Ultimaker S5',
            status: 'Available',
            location: 'Lab A',
            usage: 45,
          },
          {
            name: 'Oscilloscope - Tektronix',
            status: 'In Use',
            location: 'Lab B',
            usage: 78,
          },
          {
            name: 'Spectrum Analyzer',
            status: 'Available',
            location: 'Lab A',
            usage: 32,
          },
          {
            name: 'Flight Simulator',
            status: 'Maintenance',
            location: 'Testing Area',
            usage: 0,
          },
          {
            name: 'Thermal Camera - FLIR',
            status: 'Available',
            location: 'Lab C',
            usage: 58,
          },
          {
            name: 'Wind Tunnel',
            status: 'In Use',
            location: 'Testing Area',
            usage: 85,
          },
        ].map((equip, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:border-black transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">
                  {equip.name}
                </h3>
                <div className="flex items-center gap-2">
                  <Database size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-600">
                    {equip.location}
                  </span>
                </div>
              </div>
              <span
                className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${equip.status === 'Available'
                  ? 'bg-gray-900 text-white'
                  : equip.status === 'In Use'
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-300 text-gray-700'
                  }`}
              >
                {equip.status}
              </span>
            </div>

            <div className="mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-600">Usage This Month</span>
                <span className="text-xs font-semibold text-gray-900">
                  {equip.usage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-black h-2 rounded-full transition-all duration-500"
                  style={{ width: `${equip.usage}%` }}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all">
                <Calendar size={12} />
                Book
              </button>
              <button className="flex-1 flex items-center justify-center gap-1 px-3 py-1.5 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all">
                <Eye size={12} />
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Equipment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Total Equipment', value: '24', sublabel: '6 categories' },
          { label: 'In Active Use', value: '8', sublabel: '33% utilization' },
          { label: 'Maintenance Due', value: '3', sublabel: 'Next 30 days' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white"
          >
            <div className="text-3xl font-bold text-gray-900 mb-1">
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
                    R&D Department
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    UAV Innovation & Research Center
                  </p>
                </div>
              </div>

              {/* View Switcher and Action Buttons Container */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                {/* View Switcher */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
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
                    onClick={() => setShowPrototypeDialog(true)}
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                    title="New Prototype"
                  >
                    <Plane size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium sm:hidden">Prototype</span>
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      New Prototype
                    </div>
                  </button>

                  <button
                    onClick={() => setShowExperimentDialog(true)}
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                    title="New Experiment"
                  >
                    <FlaskConical size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium sm:hidden">Experiment</span>
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      New Experiment
                    </div>
                  </button>

                  <button
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                    title="Export"
                  >
                    <Download size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium sm:hidden">Export</span>
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Export
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mt-8">
          <div className="max-w-7xl mx-auto px-6 py-6">
            {activeView === 'overview' && renderOverview()}
            {activeView === 'experiments' && renderExperiments()}
            {activeView === 'prototypes' && renderPrototypes()}
            {activeView === 'research' && renderResearch()}
            {activeView === 'equipment' && renderEquipment()}
          </div>
        </div>
      </div>

      {/* Experiment Dialog */}
      {showExperimentDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">
                New Experiment
              </h2>
              <button
                onClick={() => setShowExperimentDialog(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Experiment Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Enter experiment name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Type
                  </label>
                  <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                    <option>Software</option>
                    <option>Hardware</option>
                    <option>Sensor</option>
                    <option>Integration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Priority
                  </label>
                  <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  rows="4"
                  placeholder="Enter experiment description"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Lead Researcher
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Enter researcher name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Budget (₦)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="p-6 border-t-2 border-gray-200 flex gap-3">
              <button
                onClick={() => setShowExperimentDialog(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Create Experiment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Prototype Dialog */}
      {showPrototypeDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">Add Prototype</h2>
              <button
                onClick={() => setShowPrototypeDialog(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Prototype Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  placeholder="Enter prototype name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Type
                  </label>
                  <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                    <option>Fixed-Wing</option>
                    <option>Quadcopter</option>
                    <option>Hybrid VTOL</option>
                    <option>Nano Drone</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Version
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="v1.0"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Flight Time
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="60 min"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Range
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="25 km"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Payload
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="2.0 kg"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Status
                </label>
                <select className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                  <option>Development</option>
                  <option>Testing</option>
                  <option>Production</option>
                </select>
              </div>
            </div>
            <div className="p-6 border-t-2 border-gray-200 flex gap-3">
              <button
                onClick={() => setShowPrototypeDialog(false)}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Add Prototype
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
  );
};

export default RnDDashboard;
