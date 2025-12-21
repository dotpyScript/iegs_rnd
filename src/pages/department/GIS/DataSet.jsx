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
    FileText,
    MapPin,
    Search,
    Filter,
    Trash2,
} from 'lucide-react';

const DataSet = () => {
    const [activeView, setActiveView] = useState('datasets');

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

    const datasets = [
        {
            id: 1,
            name: 'Urban Infrastructure 2024',
            type: 'Vector',
            format: 'Shapefile',
            size: '245 MB',
            features: '15,432',
            dateAdded: '2025-01-18',
            status: 'Published',
            owner: 'GIS Team',
        },
        {
            id: 2,
            name: 'Satellite Imagery Q4 2024',
            type: 'Raster',
            format: 'GeoTIFF',
            size: '3.2 GB',
            features: '1 image',
            dateAdded: '2025-01-15',
            status: 'Processing',
            owner: 'Remote Sensing Team',
        },
        {
            id: 3,
            name: 'Land Use Classification',
            type: 'Raster',
            format: 'GeoTIFF',
            size: '856 MB',
            features: '12 classes',
            dateAdded: '2025-01-10',
            status: 'Published',
            owner: 'Analysis Team',
        },
    ];

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'published':
                return 'bg-gray-900 text-white';
            case 'processing':
                return 'bg-gray-700 text-white';
            case 'draft':
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
                                        Spatial Datasets
                                    </h1>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Manage and organize geospatial data collections
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
                                        title="Export Datasets"
                                    >
                                        <Download size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Export</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Export Datasets
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setShowDialog(true)}
                                        className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-200 font-medium"
                                        title="New Dataset"
                                    >
                                        <Plus size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium hidden lg:inline">New Dataset</span>
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
                                        <Database className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">Total Datasets</h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">28</div>
                                    <div className="text-sm text-gray-600">Vector & Raster data</div>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <FileText className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">Storage Used</h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">12.8 GB</div>
                                    <div className="text-sm text-gray-600">Of 50 GB available</div>
                                </div>

                                <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <MapPin className="text-gray-600" size={24} />
                                        <h3 className="text-lg font-bold text-gray-900">Coverage Area</h3>
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">4,250 km²</div>
                                    <div className="text-sm text-gray-600">Across all datasets</div>
                                </div>
                            </div>

                            {/* Search and Filter */}
                            <div className="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-lg p-4">
                                <Search size={18} className="text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search datasets by name or type..."
                                    className="flex-1 text-sm outline-none"
                                />
                                <Filter size={18} className="text-gray-400 cursor-pointer" />
                            </div>

                            {/* Datasets Table */}
                            <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    Available Datasets
                                </h3>

                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b-2 border-gray-200">
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Dataset Name
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Type
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Format
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Size
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Status
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Owner
                                                </th>
                                                <th className="text-left px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Date Added
                                                </th>
                                                <th className="text-center px-4 py-3 text-sm font-semibold text-gray-600">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {datasets.map((dataset) => (
                                                <tr
                                                    key={dataset.id}
                                                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                                >
                                                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                                        {dataset.name}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">
                                                        {dataset.type}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">
                                                        {dataset.format}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">
                                                        {dataset.size}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">
                                                        <span
                                                            className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                                                dataset.status
                                                            )}`}
                                                        >
                                                            {dataset.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">
                                                        {dataset.owner}
                                                    </td>
                                                    <td className="px-4 py-3 text-sm text-gray-600">
                                                        {new Date(dataset.dateAdded).toLocaleDateString()}
                                                    </td>
                                                    <td className="px-4 py-3 text-center">
                                                        <div className="flex items-center justify-center gap-2">
                                                            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                                                <Download size={16} className="text-gray-600" />
                                                            </button>
                                                            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                                                                <Trash2 size={16} className="text-gray-400" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Data Format Guide */}
                            <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    Supported Data Formats
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                            Vector Formats
                                        </h4>
                                        <ul className="space-y-2">
                                            {[
                                                'Shapefile (.shp)',
                                                'GeoJSON (.geojson)',
                                                'GeoPackage (.gpkg)',
                                                'MapInfo (.tab)',
                                            ].map((format, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm text-gray-700 flex items-center gap-2"
                                                >
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                                    {format}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                            Raster Formats
                                        </h4>
                                        <ul className="space-y-2">
                                            {[
                                                'GeoTIFF (.tif, .tiff)',
                                                'Erdas Imagine (.img)',
                                                'PNG/JPEG (.png, .jpg)',
                                                'HDF5 (.h5)',
                                            ].map((format, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm text-gray-700 flex items-center gap-2"
                                                >
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                                    {format}
                                                </li>
                                            ))}
                                        </ul>
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

export default DataSet;
