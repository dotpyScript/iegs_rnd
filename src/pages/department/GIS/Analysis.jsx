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
    Upload,
    CheckCircle2,
    PieChart,
    TrendingUp,
    Search,
} from 'lucide-react';

const Analysis = () => {
    const [activeView, setActiveView] = useState('analysis');

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

    const analysisData = [
        {
            id: 1,
            name: 'Urban Growth Analysis',
            type: 'Satellite Imagery',
            area: 'Metropolitan Area',
            status: 'Completed',
            accuracy: '94.2',
            analyst: 'John Smith',
            dateCompleted: '2025-01-18',
        },
        {
            id: 2,
            name: 'Land Use Classification',
            type: 'Spectral Analysis',
            area: 'County Region',
            status: 'In Progress',
            accuracy: '91.8',
            analyst: 'Sarah Johnson',
            dateCompleted: '2025-01-25',
        },
        {
            id: 3,
            name: 'Vegetation Index Study',
            type: 'NDVI Analysis',
            area: 'Agricultural Zone',
            status: 'Pending',
            accuracy: '—',
            analyst: 'Mike Davis',
            dateCompleted: '2025-02-01',
        },
    ];

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed':
                return 'bg-gray-900 text-white';
            case 'in progress':
                return 'bg-gray-700 text-white';
            case 'pending':
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
                                        Spatial Analysis
                                    </h1>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Advanced GIS analysis and data insights
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
                                        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                                        title="Upload Data"
                                    >
                                        <Upload size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Upload</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Upload Data
                                        </div>
                                    </button>

                                    <button
                                        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                                        title="Export Results"
                                    >
                                        <Download size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Export</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Export Results
                                        </div>
                                    </button>

                                    <button
                                        className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-200 font-medium"
                                        title="New Analysis"
                                    >
                                        <Plus size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium hidden lg:inline">New Analysis</span>
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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <BarChart3 className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">Total Analyses</h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
                                    <div className="text-sm text-gray-600">8 completed, 4 in progress</div>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle2 className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">Average Accuracy</h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">92.7%</div>
                                    <div className="text-sm text-gray-600">Across all analyses</div>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <TrendingUp className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">Processing Time</h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">3.2h</div>
                                    <div className="text-sm text-gray-600">Average per analysis</div>
                                </div>
                            </div>

                            {/* Analysis List */}
                            <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-bold text-gray-900">Recent Analyses</h3>
                                    <div className="flex items-center gap-2">
                                        <Search size={18} className="text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search analyses..."
                                            className="px-3 py-1 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-gray-900"
                                        />
                                    </div>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b-2 border-gray-200">
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Analysis Name
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Type
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Area
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Status
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Accuracy
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Analyst
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {analysisData.map((analysis) => (
                                                <tr
                                                    key={analysis.id}
                                                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                                >
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                        {analysis.name}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">
                                                        {analysis.type}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">
                                                        {analysis.area}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        <span
                                                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                                analysis.status
                                                            )}`}
                                                        >
                                                            {analysis.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                                                        {analysis.accuracy}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">
                                                        {analysis.analyst}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Analysis Methods */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                                        Available Analysis Methods
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            'Spectral Analysis',
                                            'NDVI (Normalized Difference Vegetation Index)',
                                            'Land Use Classification',
                                            'Change Detection',
                                            'Elevation Analysis',
                                            'Hydrological Analysis',
                                        ].map((method, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3 p-3 border-2 border-gray-100 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                            >
                                                <PieChart size={16} className="text-gray-400" />
                                                <span className="text-sm text-gray-700">{method}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                                        Analysis Tools
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { name: 'QGIS Integration', status: 'Active' },
                                            { name: 'Python Analytics', status: 'Active' },
                                            { name: 'Machine Learning', status: 'Active' },
                                            { name: 'Raster Processing', status: 'Active' },
                                            { name: 'Vector Analysis', status: 'Ready' },
                                            { name: 'Time Series Analysis', status: 'Beta' },
                                        ].map((tool, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center justify-between p-3 border-2 border-gray-100 rounded-lg hover:bg-gray-50"
                                            >
                                                <span className="text-sm font-medium text-gray-900">
                                                    {tool.name}
                                                </span>
                                                <span
                                                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${tool.status === 'Active'
                                                        ? 'bg-gray-900 text-white'
                                                        : tool.status === 'Beta'
                                                            ? 'bg-gray-400 text-white'
                                                            : 'bg-gray-200 text-gray-700'
                                                        }`}
                                                >
                                                    {tool.status}
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
        </div>
    );
};

export default Analysis;
