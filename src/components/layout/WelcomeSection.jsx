import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';

const WelcomeSection = ({
  userName = 'Admin',
  userAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  pendingApprovals = 21,
  leaveRequests = 14,
  onAddSchedule = null,
  onAddRequest = null
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white rounded-lg px-5 py-4 lg:p-6 shadow-sm border border-gray-200"
    >
      {/* Left: Profile & Welcome Message */}
      <div className="flex items-start gap-4">
        {/* Profile Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-shrink-0"
        >
          <img
            src={userAvatar}
            alt={userName}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-primary-100 shadow-md"
          />
        </motion.div>

        {/* Welcome Text */}
        <div>
          <h1 className="text-lg lg:text-xl font-display font-bold text-gray-800 mb-1 tracking-tight">
            Welcome back, <span>{userName}</span>
          </h1>
          <p className="text-sm text-gray-600 font-medium">
            You have{' '}
            <span className="font-bold text-blue-500">{pendingApprovals}</span>{' '}
            pending approvals &{' '}
            <span className="font-bold text-blue-500">{leaveRequests}</span>{' '}
            leave request
          </p>
        </div>
      </div>

      {/* Right: Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Add Schedule Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAddSchedule}
          className="flex items-center gap-2 px-3 py-2 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-all duration-200 shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          <span>Add Schedule</span>
        </motion.button>

        {/* Add Request Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAddRequest}
          className="flex items-center gap-2 px-3 py-2 bg-primary-500 text-white rounded-lg font-semibold text-sm hover:bg-primary-600 transition-all duration-200 shadow-sm"
        >
          <FileText className="w-4 h-4" />
          <span>Add Request</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;

