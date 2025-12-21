import { useState } from 'react';
import {
    Map,
    Briefcase,
    Globe,
    Database,
    BarChart3,
    Box,
    Plus,
    Download,
    MapPin,
    Clock,
    Users,
    Filter,
    Search,
    MoreVertical,
    Edit,
    Eye,
} from 'lucide-react';

const GISProjects = () => {
    const [activeView, setActiveView] = useState('projects');

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

    const projects = [
        {
            id: 1,
            name: 'Metropolitan Urban Planning',
            area: 'Downtown District',
            status: 'In Progress',
            progress: 65,
            priority: 'High',
            team: ['JD', 'SM', 'AJ'],
            lastUpdate: '2025-01-18',
            startDate: '2024-11-20',
            deadline: '2025-03-15',
        },
        {
            id: 2,
            name: 'Environmental Impact Study',
            area: 'Coastal Region',
            status: 'In Progress',
            progress: 48,
            priority: 'High',
            team: ['RC', 'KM', 'DP'],
            lastUpdate: '2025-01-16',
            startDate: '2024-10-15',
            deadline: '2025-04-20',
        },
        {
            id: 3,
            name: 'Infrastructure Mapping',
            area: 'County Highway Network',
            status: 'Completed',
            progress: 100,
            priority: 'Medium',
            team: ['TS', 'MJ'],
            lastUpdate: '2025-01-10',
            startDate: '2024-09-01',
            deadline: '2025-01-15',
        },
    ];

    const getPriorityColor = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'high':
                return 'bg-red-200';
            case 'medium':
                return 'bg-yellow-200';
            case 'low':
                return 'bg-green-200';
            default:
                return 'bg-gray-200';
        }
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed':
                return 'bg-gray-900 text-white';
            case 'in progress':
                return 'bg-gray-700 text-white';
            case 'planning':
                return 'bg-gray-500 text-white';
            default:
                return 'bg-gray-400 text-white';
        }
    };

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
                                        GIS Projects
                                    </h1>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Manage geospatial mapping projects and deliverables
                                    </p>
                                </div>
                            </div>

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
                                        onClick={() => setShowDialog(true)}
                                        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                                        title="Export Projects"
                                    >
                                        <Download size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Export</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Export Projects
                                        </div>
                                    </button>

                                    <button
                                        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                                        title="Filter"
                                    >
                                        <Filter size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Filter</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Filter Projects
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setShowDialog(true)}
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
                <div className="flex-1 mt-8">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        <div className="space-y-6 animate-fadeIn">
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <h3 className="text-sm text-gray-600 font-medium mb-2">Total Projects</h3>
                                    <div className="text-3xl font-bold text-gray-900">12</div>
                                    <p className="text-xs text-gray-500 mt-1">All time</p>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <h3 className="text-sm text-gray-600 font-medium mb-2">In Progress</h3>
                                    <div className="text-3xl font-bold text-gray-900">4</div>
                                    <p className="text-xs text-gray-500 mt-1">Active work</p>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <h3 className="text-sm text-gray-600 font-medium mb-2">Completed</h3>
                                    <div className="text-3xl font-bold text-gray-900">7</div>
                                    <p className="text-xs text-gray-500 mt-1">Delivered</p>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <h3 className="text-sm text-gray-600 font-medium mb-2">Team Members</h3>
                                    <div className="text-3xl font-bold text-gray-900">18</div>
                                    <p className="text-xs text-gray-500 mt-1">Assigned</p>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-lg p-4">
                                <Search size={18} className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search projects by name or location..."
                                    className="flex-1 text-sm outline-none"
                                />
                            </div>

                            {/* Projects List */}
                            <div className="space-y-4">
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    {project.name}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin size={16} />
                                                        <span>{project.area}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock size={16} />
                                                        <span>Updated {project.lastUpdate}</span>
                                                    </div>
                                                    <span
                                                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                            project.status
                                                        )}`}
                                                    >
                                                        {project.status}
                                                    </span>
                                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)} text-gray-900`}>
                                                        {project.priority} Priority
                                                    </span>
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                                <MoreVertical size={18} className="text-gray-400" />
                                            </button>
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-gray-700">
                                                    Progress
                                                </span>
                                                <span className="text-sm font-bold text-gray-900">
                                                    {project.progress}%
                                                </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-slate-100 to-slate-900 h-2 rounded-full transition-all duration-500"
                                                    style={{ width: `${project.progress}%` }}
                                                />
                                            </div>
                                        </div>

                                        {/* Team and Timeline */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm text-gray-600 flex items-center gap-1">
                                                    <Users size={16} />
                                                    Team
                                                </span>
                                                <div className="flex -space-x-2">
                                                    {project.team.map((member, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white"
                                                        >
                                                            {member}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3 text-sm text-gray-600">
                                                <span>
                                                    Deadline: {new Date(project.deadline).toLocaleDateString()}
                                                </span>
                                                <div className="flex items-center gap-1">
                                                    <Eye
                                                        size={16}
                                                        className="text-gray-400 cursor-pointer hover:text-gray-900"
                                                    />
                                                    <Edit
                                                        size={16}
                                                        className="text-gray-400 cursor-pointer hover:text-gray-900"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GISProjects;
