import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Search, Plus, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { droneInventory } from '../utils/dummyData';
import { formatDate } from '../utils/formatDate';

const InventoryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInventory = droneInventory.filter((item) =>
    item.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const statusColors = {
    operational: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    maintenance: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    retired: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
  };

  const conditionColors = {
    excellent: 'text-green-500',
    good: 'text-blue-500',
    fair: 'text-yellow-500',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
            Inventory
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            Manage drone fleet and equipment
          </p>
        </div>
        <Button icon={Plus}>Add Equipment</Button>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <Input
          placeholder="Search inventory..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          icon={Search}
        />
      </motion.div>

      {/* Inventory Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-50 dark:bg-dark-700/50 border-b border-dark-200 dark:border-dark-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900 dark:text-white">
                  Model
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900 dark:text-white">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900 dark:text-white">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900 dark:text-white">
                  Flight Hours
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900 dark:text-white">
                  Condition
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900 dark:text-white">
                  Last Maintenance
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-200 dark:divide-dark-700">
              {filteredInventory.map((item, index) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-dark-50 dark:hover:bg-dark-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.model}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span className="font-semibold text-dark-900 dark:text-white">
                        {item.model}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-dark-600 dark:text-dark-400">
                    {item.type}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[item.status]}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-dark-600 dark:text-dark-400">
                    {item.flightHours}h
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${conditionColors[item.condition]}`}>
                      {item.condition}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-dark-600 dark:text-dark-400">
                    {formatDate(item.lastMaintenance)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Maintenance Alerts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6"
      >
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-2">
              Maintenance Required
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 mb-4">
              The following items require maintenance within the next 7 days:
            </p>
            <ul className="space-y-2">
              <li className="text-yellow-800 dark:text-yellow-200">
                • Hawk-Eye 500 - Scheduled for routine check
              </li>
              <li className="text-yellow-800 dark:text-yellow-200">
                • Cargo Max - Battery replacement needed
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InventoryPage;

