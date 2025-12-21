import { useState } from 'react';
import {
  Plane,
  Calendar,
  Clock,
  MapPin,
  Activity,
  Gauge,
  Wind,
  Zap,
  Radio,
  Eye,
  Plus,
  Download,
  Upload,
  BarChart3,
  Camera,
  FileText,
  Search,
  Filter,
  MoreVertical,
  X,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Signal,
  Compass,
} from 'lucide-react';
import LineChart from '../../components/charts/LineChart';
import { flightHoursData, droneInventory } from '../../utils/dummyData';
import { formatDate } from '../../utils/formatDate';

const DroneOverview = () => {
  const [activeView, setActiveView] = useState('telemetry');
  const [showAddLogDialog, setShowAddLogDialog] = useState(false);

  const views = [
    {
      id: 'telemetry',
      label: 'Telemetry',
      icon: Activity,
      tooltip: 'Flight Telemetry Analytics',
    },
    {
      id: 'media',
      label: 'Flight Media',
      icon: Camera,
      tooltip: 'Flight Media & Data',
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: FileText,
      tooltip: 'Test Reports',
    },
  ];

  const statusColors = {
    operational: 'bg-green-100 text-green-700',
    maintenance: 'bg-yellow-100 text-yellow-700',
    retired: 'bg-gray-100 text-gray-700',
  };

  const liveDroneFeeds = [
    {
      id: 1,
      name: 'Phantom X-Pro',
      status: 'in-flight',
      altitude: '156m',
      speed: '42 km/h',
      battery: '78%',
      signal: '95%',
      heading: '245°',
    },
    {
      id: 2,
      name: 'Hawk-Eye 500',
      status: 'standby',
      altitude: '0m',
      speed: '0 km/h',
      battery: '92%',
      signal: '100%',
      heading: '0°',
    },
    {
      id: 3,
      name: 'Surveyor Pro',
      status: 'charging',
      altitude: '0m',
      speed: '0 km/h',
      battery: '45%',
      signal: '98%',
      heading: '180°',
    },
  ];

  const dataLogs = [
    {
      id: 1,
      drone: 'Phantom X-Pro',
      date: '2024-12-21',
      time: '14:30',
      duration: '42min',
      distance: '8.5km',
      maxAltitude: '156m',
      resolution: 'High',
      status: 'completed',
    },
    {
      id: 2,
      drone: 'Hawk-Eye 500',
      date: '2024-12-21',
      time: '12:15',
      duration: '58min',
      distance: '12.3km',
      maxAltitude: '198m',
      resolution: 'Ultra',
      status: 'completed',
    },
    {
      id: 3,
      drone: 'Surveyor Pro',
      date: '2024-12-20',
      time: '10:00',
      duration: '35min',
      distance: '6.2km',
      maxAltitude: '120m',
      resolution: 'High',
      status: 'processing',
    },
  ];

  const renderTelemetry = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Live Drone Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {liveDroneFeeds.map((drone, idx) => (
          <div
            key={drone.id}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:border-gray-900 hover:shadow-lg transition-all duration-300 animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900">{drone.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${drone.status === 'in-flight'
                        ? 'bg-green-500'
                        : drone.status === 'standby'
                          ? 'bg-blue-500'
                          : 'bg-yellow-500'
                      }`}
                  />
                  <span className="text-xs text-gray-600 capitalize">
                    {drone.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
              <Signal size={18} className="text-gray-400" />
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Altitude</span>
                <span className="text-sm font-semibold text-gray-900">
                  {drone.altitude}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Speed</span>
                <span className="text-sm font-semibold text-gray-900">
                  {drone.speed}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Battery</span>
                <span className="text-sm font-semibold text-gray-900">
                  {drone.battery}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Signal</span>
                <span className="text-sm font-semibold text-gray-900">
                  {drone.signal}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Heading</span>
                <span className="text-sm font-semibold text-gray-900">
                  {drone.heading}
                </span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div
                className="bg-gradient-to-r from-slate-200 to-slate-900 h-2 rounded-full"
                style={{ width: `${parseInt(drone.battery)}%` }}
              />
            </div>

            <button className="w-full px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Telemetry Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Altitude Profile</h3>
          <LineChart
            data={flightHoursData}
            dataKey="hours"
            color="#000000"
            height={250}
          />
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Speed Variation</h3>
          <LineChart
            data={flightHoursData}
            dataKey="hours"
            color="#6B7280"
            height={250}
          />
        </div>
      </div>

      {/* Telemetry Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            label: 'Max Altitude',
            value: '245m',
            icon: Gauge,
            change: '+12m',
            color: 'bg-blue-50',
          },
          {
            label: 'Avg Speed',
            value: '38 km/h',
            icon: Wind,
            change: '+2 km/h',
            color: 'bg-green-50',
          },
          {
            label: 'Battery Health',
            value: '94%',
            icon: Zap,
            change: '+3%',
            color: 'bg-yellow-50',
          },
          {
            label: 'Signal Quality',
            value: '97%',
            icon: Radio,
            change: '+1%',
            color: 'bg-purple-50',
          },
        ].map((metric, idx) => (
          <div
            key={idx}
            className={`border-2 border-gray-200 rounded-lg p-5 ${metric.color}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600">
                <metric.icon size={16} className="inline mr-1" />
                {metric.label}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {metric.value}
            </div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp size={12} />
              {metric.change}
            </div>
          </div>
        ))}
      </div>

      {/* Data Logs */}
      <div className="border-2 border-gray-200 rounded-lg bg-white">
        <div className="p-5 border-b-2 border-gray-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Flight Data Logs</h3>
          <button
            onClick={() => setShowAddLogDialog(true)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            Add Log
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">
                  Drone
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">
                  Date
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">
                  Duration
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">
                  Distance
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">
                  Max Alt.
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">
                  Resolution
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {dataLogs.map((log) => (
                <tr
                  key={log.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">
                    {log.drone}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">
                    {log.date} {log.time}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">
                    {log.duration}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">
                    {log.distance}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">
                    {log.maxAltitude}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">
                    {log.resolution}
                  </td>
                  <td className="px-5 py-3 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${log.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                        }`}
                    >
                      {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderMedia = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-2 border-gray-200 rounded-lg p-8 bg-white text-center">
        <Camera size={48} className="mx-auto text-gray-400 mb-4" />
        <h3 className="text-lg font-bold text-gray-900 mb-2">Flight Media</h3>
        <p className="text-sm text-gray-600 mb-6">
          View and manage all captured media from drone flights
        </p>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium mx-auto">
          <Upload size={18} />
          Upload Media
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-gray-900 hover:shadow-lg transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <Camera size={32} className="text-gray-400" />
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold text-gray-900 mb-2">
                Flight Recording {item}
              </h4>
              <p className="text-xs text-gray-600 mb-3">2024-12-21 • 1.2 GB</p>
              <button className="w-full px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-bold text-gray-900">Test Reports</h3>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
            <Plus size={18} />
            New Report
          </button>
        </div>

        <div className="space-y-3">
          {[
            {
              name: 'Autonomous Navigation Test',
              date: '2024-12-21',
              result: 'PASSED',
              score: '98%',
            },
            {
              name: 'Battery Endurance Test',
              date: '2024-12-20',
              result: 'PASSED',
              score: '95%',
            },
            {
              name: 'Wind Resistance Test',
              date: '2024-12-19',
              result: 'PASSED',
              score: '92%',
            },
            {
              name: 'Thermal Imaging Calibration',
              date: '2024-12-18',
              result: 'FAILED',
              score: '78%',
            },
          ].map((report, idx) => (
            <div
              key={idx}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-900 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    {report.name}
                  </h4>
                  <p className="text-xs text-gray-600">{report.date}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 ${report.result === 'PASSED'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {report.result}
                  </span>
                  <div className="text-lg font-bold text-gray-900">
                    {report.score}
                  </div>
                </div>
              </div>
              <button className="mt-3 w-full px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                View Report
              </button>
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
                    Drone Operations
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Monitor fleet status and flight operations
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
                    title="Download Data"
                  >
                    <Download size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium sm:hidden">Download</span>
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Download Data
                    </div>
                  </button>

                  <button
                    onClick={() => setShowAddLogDialog(true)}
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium"
                    title="Add Flight Log"
                  >
                    <Plus size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium hidden lg:inline">Add Log</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mt-8">
          <div className="max-w-7xl mx-auto px-6 py-6">
            {activeView === 'telemetry' && renderTelemetry()}
            {activeView === 'media' && renderMedia()}
            {activeView === 'reports' && renderReports()}
          </div>
        </div>
      </div>

      {/* Add Log Dialog */}
      {showAddLogDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">Add Flight Data Log</h2>
              <button
                onClick={() => setShowAddLogDialog(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Drone Model
                </label>
                <select className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                  <option>Phantom X-Pro</option>
                  <option>Hawk-Eye 500</option>
                  <option>Surveyor Pro</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Flight Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Flight Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    placeholder="45"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Max Altitude (m)
                  </label>
                  <input
                    type="number"
                    placeholder="150"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Distance (km)
                  </label>
                  <input
                    type="text"
                    placeholder="8.5"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Resolution
                  </label>
                  <select className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                    <option>High</option>
                    <option>Ultra</option>
                    <option>Standard</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Notes
                </label>
                <textarea
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  rows="3"
                  placeholder="Add flight notes or observations..."
                ></textarea>
              </div>
            </div>
            <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
              <button
                onClick={() => setShowAddLogDialog(false)}
                className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Save Log
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

export default DroneOverview;