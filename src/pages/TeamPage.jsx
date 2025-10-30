import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';
import TeamCard from '../components/cards/TeamCard';
import Button from '../components/ui/Button';
import { teamMembers } from '../utils/dummyData';

const TeamPage = () => {
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
            Team
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            Manage R&D team members and assignments
          </p>
        </div>
        <Button icon={UserPlus}>Add Member</Button>
      </motion.div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-2">
            Total Members
          </h3>
          <p className="text-3xl font-bold text-dark-900 dark:text-white">47</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-2">
            Active Projects
          </h3>
          <p className="text-3xl font-bold text-dark-900 dark:text-white">24</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-2">
            Online Now
          </h3>
          <p className="text-3xl font-bold text-dark-900 dark:text-white">
            {teamMembers.filter((m) => m.status === 'online').length}
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Team Members
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Departments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Departments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Engineering', count: 18, color: 'bg-blue-500' },
            { name: 'Research', count: 12, color: 'bg-purple-500' },
            { name: 'Testing', count: 10, color: 'bg-green-500' },
            { name: 'Support', count: 7, color: 'bg-yellow-500' },
          ].map((dept, index) => (
            <div
              key={dept.name}
              className="p-5 bg-dark-50 dark:bg-dark-700/50 rounded-xl hover:shadow-soft transition-all duration-300"
            >
              <div className={`w-12 h-12 ${dept.color} rounded-xl mb-4`} />
              <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
                {dept.name}
              </h3>
              <p className="text-sm text-dark-600 dark:text-dark-400">
                {dept.count} members
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TeamPage;

