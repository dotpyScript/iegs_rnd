import { motion } from 'framer-motion';
import Badge from '../ui/Badge';

const TeamCard = ({ member, index = 0 }) => {
  const statusColors = {
    online: 'bg-success-500',
    away: 'bg-yellow-500',
    offline: 'bg-gray-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.3, 
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-3">
          <img 
            src={member.avatar} 
            alt={member.name}
            className="w-16 h-16 rounded-xl object-cover ring-2 ring-gray-200 group-hover:ring-primary-500 transition-all"
          />
          <div 
            className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusColors[member.status]} rounded-full border-2 border-white`}
          />
        </div>
        
        <div className="w-full">
          <h4 className="text-sm font-bold text-gray-900 mb-1 truncate">
            {member.name}
          </h4>
          <p className="text-xs text-gray-600 mb-2 truncate">
            {member.role}
          </p>
          <Badge variant="default" size="sm">
            {member.projects} projects
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
