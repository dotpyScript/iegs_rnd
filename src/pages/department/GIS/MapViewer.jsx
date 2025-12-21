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
    Layers,
    Search,
    Maximize,
    ZoomIn,
    ZoomOut,
    Compass,
} from 'lucide-react';

const MapViewer = () => {
    const [activeView, setActiveView] = useState('map-viewer');
    const [mapView, setMapView] = useState('satellite');

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

    const mapLayers = [
        { name: 'Base Map', type: 'raster', enabled: true },
        { name: 'Roads Network', type: 'vector', enabled: true },
        { name: 'Buildings', type: 'vector', enabled: true },
        { name: 'Land Use', type: 'raster', enabled: false },
        { name: 'Satellite Imagery', type: 'raster', enabled: true },
    ];

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
                                        Interactive Map Viewer
                                    </h1>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Explore geospatial data with advanced visualization tools
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
                                        title="Export Map"
                                    >
                                        <Download size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Export</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Export Map
                                        </div>
                                    </button>

                                    <button
                                        className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                                        title="Share Map"
                                    >
                                        <Upload size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Share</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Share Map
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setShowDialog(true)}
                                        className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-200 font-medium"
                                        title="Add Layer"
                                    >
                                        <Plus size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium hidden lg:inline">Add Layer</span>
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
                            {/* Map View Controls */}
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                                {/* Map Display Area */}
                                <div className="lg:col-span-3">
                                    <div className="border-2 border-gray-200 rounded-lg p-5 bg-white overflow-hidden">
                                        <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg border-2 border-gray-200 flex items-center justify-center">
                                            {/* Map Placeholder */}
                                            <div className="text-center">
                                                <Globe size={48} className="mx-auto text-gray-400 mb-3" />
                                                <p className="text-gray-600 font-medium">
                                                    Interactive Map Preview
                                                </p>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Zoom: 1:50,000 | Center: 40.7°N, 74.0°W
                                                </p>
                                            </div>

                                            {/* Map Controls */}
                                            <div className="absolute right-4 top-4 flex flex-col gap-2">
                                                <button className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
                                                    <ZoomIn size={18} />
                                                </button>
                                                <button className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
                                                    <ZoomOut size={18} />
                                                </button>
                                                <button className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
                                                    <Compass size={18} />
                                                </button>
                                                <button className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors">
                                                    <Maximize size={18} />
                                                </button>
                                            </div>

                                            {/* Search Bar */}
                                            <div className="absolute left-4 top-4 w-60">
                                                <div className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-lg p-2">
                                                    <Search size={16} className="text-gray-400" />
                                                    <input
                                                        type="text"
                                                        placeholder="Search location..."
                                                        className="flex-1 text-sm outline-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sidebar Controls */}
                                <div className="space-y-4">
                                    {/* Map Style Selector */}
                                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                                        <h3 className="text-sm font-bold text-gray-900 mb-3">
                                            Map Style
                                        </h3>
                                        <div className="space-y-2">
                                            {[
                                                { name: 'Satellite', value: 'satellite', active: true },
                                                { name: 'Terrain', value: 'terrain', active: false },
                                                { name: 'Streets', value: 'streets', active: false },
                                                { name: 'Dark', value: 'dark', active: false },
                                            ].map((style) => (
                                                <button
                                                    key={style.value}
                                                    onClick={() => setMapView(style.value)}
                                                    className={`w-full px-3 py-2 text-sm rounded-lg transition-all text-left font-medium ${mapView === style.value
                                                        ? 'bg-black text-white'
                                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {style.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Layers Panel */}
                                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                                        <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            <Layers size={16} />
                                            Layers
                                        </h3>
                                        <div className="space-y-2">
                                            {mapLayers.map((layer) => (
                                                <label
                                                    key={layer.name}
                                                    className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        defaultChecked={layer.enabled}
                                                        className="w-4 h-4 border-2 border-gray-300 rounded"
                                                    />
                                                    <div className="flex-1">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {layer.name}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            {layer.type}
                                                        </div>
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Map Info */}
                                    <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                                        <h3 className="text-sm font-bold text-gray-900 mb-3">
                                            Map Info
                                        </h3>
                                        <div className="space-y-2 text-xs text-gray-600">
                                            <div className="flex justify-between">
                                                <span>Projection:</span>
                                                <span className="font-medium">Web Mercator</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Zoom:</span>
                                                <span className="font-medium">12/24</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Layers:</span>
                                                <span className="font-medium">5/8</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Resolution:</span>
                                                <span className="font-medium">1m</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Tools */}
                            <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">
                                    Available Tools
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {[
                                        'Measure Distance',
                                        'Draw Polygon',
                                        'Identify Features',
                                        'Export to GeoJSON',
                                        'Print Map',
                                        'Create Route',
                                        'Buffer Analysis',
                                        'Heatmap',
                                    ].map((tool, idx) => (
                                        <button
                                            key={idx}
                                            className="px-4 py-3 border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-900 transition-all text-sm font-medium text-gray-700"
                                        >
                                            {tool}
                                        </button>
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

export default MapViewer;
