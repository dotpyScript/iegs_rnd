import { motion } from 'framer-motion';
import { Briefcase, Circle } from 'lucide-react';

const TeamCard = ({ member, index = 0 }) => {
  const statusColors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    offline: 'bg-gray-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-dark-800 rounded-2xl p-5 shadow-soft hover:shadow-soft-lg transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <img 
            src={member.avatar} 
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover ring-2 ring-primary-200 dark:ring-primary-800"
          />
          <Circle 
            className={`absolute bottom-0 right-0 w-5 h-5 ${statusColors[member.status]} rounded-full border-2 border-white dark:border-dark-800`}
            fill="currentColor"
          />
        </div>
        
        <div className="flex-1">
          <h4 className="text-base font-bold text-dark-900 dark:text-white mb-1">
            {member.name}
          </h4>
          <p className="text-sm text-dark-600 dark:text-dark-400 mb-2">
            {member.role}
          </p>
          <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-500">
            <Briefcase className="w-4 h-4" />
            <span>{member.projects} projects</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;

