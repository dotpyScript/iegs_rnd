import { motion } from 'framer-motion';
import { Plane, Calendar, Clock, MapPin } from 'lucide-react';
import LineChart from '../components/charts/LineChart';
import { flightHoursData, droneInventory } from '../utils/dummyData';
import { formatDate } from '../utils/formatDate';

const DroneOpsPage = () => {
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
      >
        <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
          Drone Operations
        </h1>
        <p className="text-dark-600 dark:text-dark-400">
          Monitor fleet status and flight operations
        </p>
      </motion.div>

      {/* Flight Hours Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Total Flight Hours
        </h2>
        <LineChart data={flightHoursData} dataKey="hours" color="#0ea5e9" height={300} />
      </motion.div>

      {/* Drone Fleet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Drone Fleet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {droneInventory.map((drone, index) => (
            <motion.div
              key={drone.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-dark-200 dark:border-dark-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={drone.image}
                  alt={drone.model}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[drone.status]}`}>
                    {drone.status}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
                      {drone.model}
                    </h3>
                    <p className="text-sm text-dark-600 dark:text-dark-400">{drone.type}</p>
                  </div>
                  <Plane className="w-6 h-6 text-primary-500" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-600 dark:text-dark-400">Flight Hours</span>
                    <span className="text-sm font-semibold text-dark-900 dark:text-white">
                      {drone.flightHours}h
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark-600 dark:text-dark-400">Condition</span>
                    <span className={`text-sm font-semibold ${conditionColors[drone.condition]}`}>
                      {drone.condition}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400">
                    <Calendar className="w-4 h-4" />
                    <span>Last: {formatDate(drone.lastMaintenance)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Flights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Upcoming Flight Tests
        </h2>
        <div className="space-y-4">
          {[
            {
              id: 1,
              name: 'Autonomous Navigation Test',
              drone: 'Phantom X-Pro',
              date: '2024-11-05',
              time: '09:00 AM',
              location: 'Test Field Alpha',
            },
            {
              id: 2,
              name: 'Long Range Communication',
              drone: 'Hawk-Eye 500',
              date: '2024-11-06',
              time: '02:00 PM',
              location: 'Test Field Beta',
            },
            {
              id: 3,
              name: 'Thermal Imaging Calibration',
              drone: 'Surveyor Pro',
              date: '2024-11-07',
              time: '10:30 AM',
              location: 'Indoor Lab',
            },
          ].map((flight) => (
            <div
              key={flight.id}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-dark-50 dark:bg-dark-700/50 rounded-xl hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            >
              <div className="flex-1 mb-3 md:mb-0">
                <h4 className="font-semibold text-dark-900 dark:text-white mb-1">
                  {flight.name}
                </h4>
                <p className="text-sm text-dark-600 dark:text-dark-400">{flight.drone}</p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-dark-600 dark:text-dark-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(flight.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{flight.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{flight.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DroneOpsPage;

