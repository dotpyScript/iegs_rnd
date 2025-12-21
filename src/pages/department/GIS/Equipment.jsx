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
    Settings,
    CheckCircle2,
    Activity,
    Calendar,
    Search,
    Filter,
    MoreVertical,
} from 'lucide-react';

const Equipment = () => {
    const [activeView, setActiveView] = useState('equipment');

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

    const equipmentList = [
        {
            id: 1,
            name: 'GPS RTK Base Station',
            model: 'Trimble R10',
            status: 'Available',
            location: 'Storage Room A',
            accuracy: '±2cm',
            lastCalibration: '2024-12-15',
            nextCalibration: '2025-03-15',
        },
        {
            id: 2,
            name: 'UAV - DJI Phantom 4 RTK',
            model: 'DJI Phantom 4 RTK',
            status: 'In Use',
            location: 'Field Operation',
            accuracy: '±2cm',
            lastCalibration: '2025-01-10',
            nextCalibration: '2025-04-10',
        },
        {
            id: 3,
            name: 'Laser Scanner - Faro Focus',
            model: 'FARO Focus3D X330',
            status: 'Maintenance',
            location: 'Service Center',
            accuracy: '±3.5mm',
            lastCalibration: '2024-11-20',
            nextCalibration: '2025-02-20',
        },
        {
            id: 4,
            name: 'Survey Theodolite',
            model: 'Leica TS15',
            status: 'Available',
            location: 'Lab B',
            accuracy: '±2"',
            lastCalibration: '2025-01-05',
            nextCalibration: '2025-07-05',
        },
    ];

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'available':
                return 'bg-gray-900 text-white';
            case 'in use':
                return 'bg-gray-700 text-white';
            case 'maintenance':
                return 'bg-red-600 text-white';
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
                                        Survey Equipment
                                    </h1>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Track and manage geospatial surveying equipment
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
                                        title="Export Equipment List"
                                    >
                                        <Download size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Export</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Export Equipment
                                        </div>
                                    </button>

                                    <button
                                        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                                        title="Filter Equipment"
                                    >
                                        <Filter size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Filter</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Filter Equipment
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setShowDialog(true)}
                                        className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-200 font-medium"
                                        title="Add Equipment"
                                    >
                                        <Plus size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium hidden lg:inline">Add Equipment</span>
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
                                    <div className="flex items-center gap-3 mb-3">
                                        <Box className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Total Equipment
                                        </h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">18</div>
                                    <div className="text-sm text-gray-600">6 categories</div>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle2 className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">Available</h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                                    <div className="text-sm text-gray-600">67% ready</div>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Activity className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">In Use</h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">4</div>
                                    <div className="text-sm text-gray-600">Currently deployed</div>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Settings className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">
                                            Maintenance
                                        </h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">2</div>
                                    <div className="text-sm text-gray-600">Being serviced</div>
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-lg p-4">
                                <Search size={18} className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search equipment by name or model..."
                                    className="flex-1 text-sm outline-none"
                                />
                            </div>

                            {/* Equipment List */}
                            <div className="space-y-4">
                                {equipmentList.map((item) => (
                                    <div
                                        key={item.id}
                                        className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:shadow-lg transition-all"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-gray-600">Model: {item.model}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                        item.status
                                                    )}`}
                                                >
                                                    {item.status}
                                                </span>
                                                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                                    <MoreVertical size={18} className="text-gray-400" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                            <div>
                                                <p className="text-xs text-gray-600 mb-1">Location</p>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {item.location}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600 mb-1">Accuracy</p>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {item.accuracy}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600 mb-1">
                                                    Last Calibration
                                                </p>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {new Date(item.lastCalibration).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600 mb-1">
                                                    Next Calibration
                                                </p>
                                                <p className="text-sm font-medium text-gray-900">
                                                    {new Date(item.nextCalibration).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <Calendar size={14} />
                                            <span>
                                                Maintenance due in{' '}
                                                {Math.ceil(
                                                    (new Date(item.nextCalibration) - new Date()) /
                                                    (1000 * 60 * 60 * 24)
                                                )}{' '}
                                                days
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Calibration Schedule */}
                            <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    Upcoming Calibrations
                                </h3>
                                <div className="space-y-3">
                                    {equipmentList
                                        .sort(
                                            (a, b) =>
                                                new Date(a.nextCalibration) - new Date(b.nextCalibration)
                                        )
                                        .map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between p-3 border-2 border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Calendar size={16} className="text-gray-400" />
                                                    <div>
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {item.name}
                                                        </div>
                                                        <div className="text-xs text-gray-600">
                                                            Due: {new Date(item.nextCalibration).toLocaleDateString()}
                                                        </div>
                                                    </div>
                                                </div>
                                                <span className="px-2.5 py-1 text-xs font-medium bg-blue-100 text-gray-700 rounded-full">
                                                    SCHEDULED
                                                </span>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;
