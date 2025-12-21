import { useState } from 'react';
import {
  Package,
  Wrench,
  Battery,
  AlertTriangle,
  Store,
  Plus,
  Download,
  X,
  TrendingDown,
  CheckCircle,
  ShoppingCart,
} from 'lucide-react';
import { droneInventory } from '../../utils/dummyData';
import { formatDate } from '../../utils/formatDate';

const InventoryOverview = () => {
  const [activeView, setActiveView] = useState('equipment');
  const [showAddDialog, setShowAddDialog] = useState(false);

  const views = [
    {
      id: 'equipment',
      label: 'Equipment & Hardware',
      icon: Wrench,
      tooltip: 'Equipment & Hardware',
    },
    {
      id: 'consumables',
      label: 'Consumables & Parts',
      icon: Battery,
      tooltip: 'Consumables & Parts',
    },
    {
      id: 'procurement',
      label: 'Procurement Requests',
      icon: ShoppingCart,
      tooltip: 'Procurement Requests',
    },
    {
      id: 'alerts',
      label: 'Low Stock Alerts',
      icon: AlertTriangle,
      tooltip: 'Low Stock Alerts',
    },
    {
      id: 'vendors',
      label: 'Vendors & Suppliers',
      icon: Store,
      tooltip: 'Vendors & Suppliers',
    },
  ];

  // Mock data
  const equipment = [
    { id: 1, name: 'Hawk-Eye 500', category: 'Drone', status: 'operational', condition: 'excellent', flightHours: 245, lastMaintenance: '2024-12-10' },
    { id: 2, name: 'Cargo Max', category: 'Drone', status: 'maintenance', condition: 'good', flightHours: 520, lastMaintenance: '2024-11-28' },
    { id: 3, name: 'Falcon Pro', category: 'Drone', status: 'operational', condition: 'excellent', flightHours: 180, lastMaintenance: '2024-12-15' },
    { id: 4, name: 'Survey Bot', category: 'Ground Unit', status: 'operational', condition: 'good', flightHours: 340, lastMaintenance: '2024-12-01' },
    { id: 5, name: 'Data Logger', category: 'Sensor', status: 'operational', condition: 'excellent', flightHours: 95, lastMaintenance: '2024-12-18' },
  ];

  const consumables = [
    { id: 1, item: 'LiPo Battery Pack 6S', quantity: 45, minStock: 20, unitCost: 8500, category: 'Batteries' },
    { id: 2, item: 'Propeller Set (4-pack)', quantity: 12, minStock: 15, unitCost: 3200, category: 'Parts' },
    { id: 3, item: 'Motor Brushless 920kv', quantity: 8, minStock: 10, unitCost: 12000, category: 'Motors' },
    { id: 4, item: 'ESC 40A', quantity: 6, minStock: 8, unitCost: 6500, category: 'Electronics' },
    { id: 5, item: 'Camera Gimbal Bearing', quantity: 3, minStock: 5, unitCost: 4200, category: 'Optics' },
  ];

  const procurementRequests = [
    { id: 1, item: 'Advanced LiDAR Module', quantity: 2, requestDate: '2024-12-18', status: 'approved', cost: 450000 },
    { id: 2, item: 'Thermal Camera Upgrade', quantity: 1, requestDate: '2024-12-17', status: 'pending', cost: 280000 },
    { id: 3, item: 'Real-time GPS RTK Unit', quantity: 3, requestDate: '2024-12-16', status: 'approved', cost: 320000 },
    { id: 4, item: 'High-capacity Battery Bank', quantity: 5, requestDate: '2024-12-15', status: 'rejected', cost: 180000 },
  ];

  const lowStockAlerts = [
    { item: 'Propeller Set (4-pack)', current: 12, minimum: 15, status: 'critical' },
    { item: 'ESC 40A', current: 6, minimum: 8, status: 'warning' },
    { item: 'Motor Brushless 920kv', current: 8, minimum: 10, status: 'warning' },
    { item: 'Camera Gimbal Bearing', current: 3, minimum: 5, status: 'critical' },
  ];

  const vendors = [
    { id: 1, name: 'Aerial Systems Ltd', category: 'Drones & Components', rating: 4.8, lastOrder: '2024-12-15', status: 'active' },
    { id: 2, name: 'Tech Solutions Inc', category: 'Electronics & Parts', rating: 4.5, lastOrder: '2024-12-10', status: 'active' },
    { id: 3, name: 'Global Supply Co', category: 'Equipment & Hardware', rating: 4.3, lastOrder: '2024-12-08', status: 'active' },
    { id: 4, name: 'Battery Specialists', category: 'Power Systems', rating: 4.9, lastOrder: '2024-12-12', status: 'active' },
    { id: 5, name: 'Sensor Systems Ltd', category: 'Sensors & Optics', rating: 4.6, lastOrder: '2024-11-30', status: 'inactive' },
  ];

  const renderEquipment = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Equipment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Equipment', value: '5', icon: Package, color: 'bg-blue-50' },
          { label: 'Operational', value: '4', icon: CheckCircle, color: 'bg-green-50' },
          { label: 'In Maintenance', value: '1', icon: Wrench, color: 'bg-yellow-50' },
          { label: 'Flight Hours', value: '1,380h', icon: TrendingDown, color: 'bg-purple-50' },
        ].map((stat, idx) => (
          <div key={idx} className={`border-2 border-gray-200 rounded-lg p-5 ${stat.color}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600">
                <stat.icon size={16} className="inline mr-1" />
                {stat.label}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Equipment Table */}
      <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
        <div className="p-5 border-b-2 border-gray-200">
          <h3 className="text-sm font-bold text-gray-900">Equipment Fleet</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Name</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Category</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Status</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Condition</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Flight Hours</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Last Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{item.category}</td>
                  <td className="px-5 py-3 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.status === 'operational' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm">
                    <span className={`font-semibold ${item.condition === 'excellent' ? 'text-green-600' : item.condition === 'good' ? 'text-blue-600' : 'text-yellow-600'
                      }`}>
                      {item.condition.charAt(0).toUpperCase() + item.condition.slice(1)}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">{item.flightHours}h</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{item.lastMaintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderConsumables = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
        <div className="p-5 border-b-2 border-gray-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Stock Items</h3>
          <button
            onClick={() => setShowAddDialog(true)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            Add Item
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Item</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Category</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Current Stock</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Min Stock</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Unit Cost</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Total Value</th>
              </tr>
            </thead>
            <tbody>
              {consumables.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">{item.item}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{item.category}</td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900">{item.quantity}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{item.minStock}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">₦{item.unitCost.toLocaleString()}</td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900">₦{(item.quantity * item.unitCost).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderProcurement = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
        <div className="p-5 border-b-2 border-gray-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Procurement Requests</h3>
          <button
            onClick={() => setShowAddDialog(true)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            New Request
          </button>
        </div>

        <div className="space-y-3 p-5">
          {procurementRequests.map((req) => (
            <div
              key={req.id}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-900 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{req.item}</h4>
                  <p className="text-xs text-gray-600">Quantity: {req.quantity}</p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${req.status === 'approved' ? 'bg-green-100 text-green-700' :
                      req.status === 'pending' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                    }`}
                >
                  {req.status.charAt(0).toUpperCase() + req.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">₦{req.cost.toLocaleString()}</span>
                <span className="text-xs text-gray-600">{req.requestDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-3">
        {lowStockAlerts.map((alert, idx) => (
          <div
            key={idx}
            className={`border-2 rounded-lg p-5 ${alert.status === 'critical' ? 'border-red-300 bg-red-50' : 'border-yellow-300 bg-yellow-50'
              }`}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle
                size={20}
                className={alert.status === 'critical' ? 'text-red-600' : 'text-yellow-600'}
              />
              <div className="flex-1">
                <h4 className={`font-bold mb-2 ${alert.status === 'critical' ? 'text-red-900' : 'text-yellow-900'
                  }`}>
                  {alert.item}
                </h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-gray-600">Current Stock</p>
                    <p className="font-semibold text-gray-900">{alert.current}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Minimum Level</p>
                    <p className="font-semibold text-gray-900">{alert.minimum}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Shortage</p>
                    <p className="font-semibold text-red-600">{alert.minimum - alert.current} units</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderVendors = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
        <div className="p-5 border-b-2 border-gray-200">
          <h3 className="text-sm font-bold text-gray-900">Vendor Directory</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Vendor Name</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Category</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Rating</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Last Order</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map((vendor) => (
                <tr key={vendor.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">{vendor.name}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{vendor.category}</td>
                  <td className="px-5 py-3 text-sm">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-gray-900">{vendor.rating}</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">{vendor.lastOrder}</td>
                  <td className="px-5 py-3 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${vendor.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                      {vendor.status.charAt(0).toUpperCase() + vendor.status.slice(1)}
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-gray-50 border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-center justify-center gap-6">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Inventory & Assets</h1>
                  <p className="text-xs text-gray-500 mt-0.5">Equipment, consumables, and procurement management</p>
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
                        className={`p-2 rounded transition-all whitespace-nowrap ${activeView === view.id ? 'bg-white text-black' : 'text-gray-600 hover:text-gray-900'
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
                    title="Download Report"
                  >
                    <Download size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium sm:hidden">Download</span>
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Download Report
                    </div>
                  </button>

                  <button
                    onClick={() => setShowAddDialog(true)}
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium"
                    title="Add Inventory Item"
                  >
                    <Plus size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium hidden lg:inline">Add Item</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mt-8">
          <div className="max-w-7xl mx-auto px-6 py-6">
            {activeView === 'equipment' && renderEquipment()}
            {activeView === 'consumables' && renderConsumables()}
            {activeView === 'procurement' && renderProcurement()}
            {activeView === 'alerts' && renderAlerts()}
            {activeView === 'vendors' && renderVendors()}
          </div>
        </div>
      </div>

      {/* Add Item Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">Add Inventory Item</h2>
              <button
                onClick={() => setShowAddDialog(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label htmlFor="item-type" className="block text-sm font-medium text-gray-900 mb-2">
                  Item Type
                </label>
                <select id="item-type" className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                  <option>Equipment</option>
                  <option>Consumable</option>
                  <option>Part</option>
                </select>
              </div>
              <div>
                <label htmlFor="item-name" className="block text-sm font-medium text-gray-900 mb-2">
                  Item Name
                </label>
                <input
                  id="item-name"
                  type="text"
                  placeholder="Enter item name"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-2">
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  placeholder="e.g., Electronics, Hardware"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-900 mb-2">
                    Quantity
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    placeholder="0"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="unit-cost" className="block text-sm font-medium text-gray-900 mb-2">
                    Unit Cost
                  </label>
                  <input
                    id="unit-cost"
                    type="number"
                    placeholder="0.00"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="vendor" className="block text-sm font-medium text-gray-900 mb-2">
                  Vendor
                </label>
                <input
                  id="vendor"
                  type="text"
                  placeholder="Select or enter vendor name"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
            </div>
            <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
              <button
                onClick={() => setShowAddDialog(false)}
                className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Add Item
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

export default InventoryOverview;

