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
    Calendar,
    Users,
} from 'lucide-react';

const RnDResearch = () => {
    const [activeView, setActiveView] = useState('research');

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

    const publications = [
        {
            id: 1,
            title: 'Autonomous Path Planning for UAVs in GPS-Denied Environments',
            authors: 'Dr. Sarah Chen, Eng. James Adeyemi',
            journal: 'Journal of Aerial Research',
            year: 2024,
            status: 'published',
            citations: 12,
        },
        {
            id: 2,
            title: 'Machine Learning Approaches to Drone Obstacle Avoidance',
            authors: 'Dr. Chioma Okonkwo, Dr. Michael Okafor',
            journal: 'International Conference on Robotics',
            year: 2024,
            status: 'in-review',
            citations: 0,
        },
        {
            id: 3,
            title: 'Thermal Imaging Integration in Multirotor Systems',
            authors: 'Eng. Tunde Oladele, Dr. Amara Obi',
            journal: 'Conference on Advanced Sensors',
            year: 2023,
            status: 'published',
            citations: 8,
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
                                        Research & Publications
                                    </h1>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Research Papers & Academic Output
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
                                        title="Add Publication"
                                    >
                                        <Plus size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Add</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Add Publication
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
                                        placeholder="Search publications..."
                                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none"
                                    />
                                </div>
                            </div>

                            {/* Publications List */}
                            <div className="space-y-3">
                                {publications.map((pub) => (
                                    <div
                                        key={pub.id}
                                        className="border-2 border-gray-200 rounded-lg p-4 hover:border-black transition-all duration-200"
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900">{pub.title}</h3>
                                                <p className="text-sm text-gray-600 mt-1">{pub.authors}</p>
                                            </div>
                                            <button className="p-1 hover:bg-gray-100 rounded flex-shrink-0">
                                                <MoreVertical size={16} className="text-gray-400" />
                                            </button>
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 pb-3 border-b-2 border-gray-100 text-sm text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <span className="italic">{pub.journal}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                <span>{pub.year}</span>
                                            </div>
                                            <div className={`px-2 py-0.5 rounded text-xs font-semibold ${pub.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                {pub.status === 'published' ? 'Published' : 'In Review'}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">{pub.citations} citations</span>
                                            <div className="flex items-center gap-2">
                                                <button className="flex items-center justify-center gap-1 px-3 py-1.5 hover:bg-gray-100 rounded transition-all">
                                                    <Eye size={14} className="text-gray-600" />
                                                </button>
                                                <button className="flex items-center justify-center gap-1 px-3 py-1.5 hover:bg-gray-100 rounded transition-all">
                                                    <Edit size={14} className="text-gray-600" />
                                                </button>
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

export default RnDResearch;