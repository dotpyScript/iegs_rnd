import { useState } from 'react';
import {
    Cog,
    FlaskConical,
    Plane,
    BookOpen,
    Database,
    Plus,
    Download,
    Filter,
    Search,
    MoreVertical,
    Edit,
    Eye,
    Trash2,
    TrendingUp,
    Clock,
    Users,
} from 'lucide-react';

const RnDExperiments = () => {
    const [activeView, setActiveView] = useState('experiments');

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
        },
        {
            id: 2,
            name: 'Advanced Sensor Integration',
            type: 'Hardware',
            status: 'in-progress',
            progress: 55,
            lead: 'Eng. Michael Okafor',
            team: ['MO', 'TK', 'RC'],
            startDate: '2024-02-01',
            endDate: '2024-07-30',
            priority: 'high',
            budget: '₦22M',
        },
        {
            id: 3,
            name: 'LiDAR Data Processing',
            type: 'Software',
            status: 'completed',
            progress: 100,
            lead: 'Dr. Amara Obi',
            team: ['AO', 'SK'],
            startDate: '2023-11-15',
            endDate: '2024-01-20',
            priority: 'medium',
            budget: '₦8M',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="h-screen flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 bg-gray-50 border-b-2 border-gray-200">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                            <div className="flex items-center justify-center gap-6">
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">
                                        Active Experiments
                                    </h1>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        R&D Experiments & Testing
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
                                        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                                        title="Add Experiment"
                                    >
                                        <Plus size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Add</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Add Experiment
                                        </div>
                                    </button>

                                    <button
                                        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                                        title="Filter"
                                    >
                                        <Filter size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Filter</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Filter
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
                        <div className="space-y-6">
                            {/* Search Bar */}
                            <div className="flex gap-2">
                                <div className="flex-1 relative">
                                    <Search size={18} className="absolute left-3 top-3 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search experiments..."
                                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Experiments Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {experiments.map((exp) => (
                                    <div
                                        key={exp.id}
                                        className="border-2 border-gray-200 rounded-lg p-4 hover:border-black transition-all duration-200"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">{exp.name}</h3>
                                                <p className="text-xs text-gray-500">{exp.type}</p>
                                            </div>
                                            <button className="p-1 hover:bg-gray-100 rounded">
                                                <MoreVertical size={16} className="text-gray-400" />
                                            </button>
                                        </div>

                                        <div className="space-y-2 mb-3">
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-600">Progress</span>
                                                <span className={`text-xs font-semibold ${exp.status === 'in-progress' ? 'text-blue-600' : 'text-green-600'
                                                    }`}>
                                                    {exp.progress}%
                                                </span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${exp.status === 'in-progress' ? 'bg-blue-500' : 'bg-green-500'
                                                        }`}
                                                    style={{ width: `${exp.progress}%` }}
                                                />
                                            </div>
                                        </div>

                                        <div className="text-xs text-gray-600 space-y-1 mb-3">
                                            <div className="flex items-center gap-2">
                                                <Users size={14} />
                                                <span>{exp.lead}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={14} />
                                                <span>Started: {exp.startDate}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 pt-3 border-t-2 border-gray-100">
                                            <button className="flex-1 flex items-center justify-center gap-1 py-1.5 hover:bg-gray-100 rounded transition-all">
                                                <Eye size={14} className="text-gray-600" />
                                            </button>
                                            <button className="flex-1 flex items-center justify-center gap-1 py-1.5 hover:bg-gray-100 rounded transition-all">
                                                <Edit size={14} className="text-gray-600" />
                                            </button>
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

export default RnDExperiments;