import { motion } from 'framer-motion';
import { FileText, Download, Calendar, Eye } from 'lucide-react';
import Button from '../components/ui/Button';
import { formatDate } from '../utils/formatDate';

const ReportsPage = () => {
  const reports = [
    {
      id: 1,
      title: 'Q4 2024 Project Summary',
      type: 'Project Report',
      date: '2024-10-28',
      size: '2.4 MB',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Flight Operations Analysis',
      type: 'Operations Report',
      date: '2024-10-25',
      size: '1.8 MB',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Budget Utilization Report',
      type: 'Financial Report',
      date: '2024-10-20',
      size: '987 KB',
      status: 'completed',
    },
    {
      id: 4,
      title: 'Team Performance Metrics',
      type: 'HR Report',
      date: '2024-10-15',
      size: '1.2 MB',
      status: 'completed',
    },
    {
      id: 5,
      title: 'Inventory & Maintenance Log',
      type: 'Maintenance Report',
      date: '2024-10-10',
      size: '3.1 MB',
      status: 'completed',
    },
    {
      id: 6,
      title: 'Research & Development Progress',
      type: 'R&D Report',
      date: '2024-10-05',
      size: '4.5 MB',
      status: 'completed',
    },
  ];

  const typeColors = {
    'Project Report': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'Operations Report': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'Financial Report': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'HR Report': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    'Maintenance Report': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    'R&D Report': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
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
            Reports
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            View and download generated reports
          </p>
        </div>
        <Button icon={FileText}>Generate Report</Button>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-2">
            Total Reports
          </h3>
          <p className="text-3xl font-bold text-dark-900 dark:text-white">156</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-2">
            This Month
          </h3>
          <p className="text-3xl font-bold text-dark-900 dark:text-white">12</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-2">
            Downloads
          </h3>
          <p className="text-3xl font-bold text-dark-900 dark:text-white">2,341</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-2">
            Scheduled
          </h3>
          <p className="text-3xl font-bold text-dark-900 dark:text-white">5</p>
        </motion.div>
      </div>

      {/* Reports List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Recent Reports
        </h2>
        <div className="space-y-4">
          {reports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-dark-50 dark:bg-dark-700/50 rounded-xl hover:bg-dark-100 dark:hover:bg-dark-700 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 flex-1 mb-4 md:mb-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-dark-900 dark:text-white mb-1 group-hover:text-primary-500 transition-colors">
                    {report.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[report.type]}`}>
                      {report.type}
                    </span>
                    <div className="flex items-center gap-1 text-dark-600 dark:text-dark-400">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(report.date)}</span>
                    </div>
                    <span className="text-dark-600 dark:text-dark-400">{report.size}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" icon={Eye}>
                  View
                </Button>
                <Button variant="secondary" size="sm" icon={Download}>
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ReportsPage;

