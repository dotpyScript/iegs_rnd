import { motion } from 'framer-motion';
import { Calendar, User, AlertCircle } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';

const ProjectCard = ({ project, index = 0 }) => {
  const statusColors = {
    'in-progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'completed': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    'planning': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
    'testing': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  };

  const priorityColors = {
    'high': 'text-red-500',
    'medium': 'text-yellow-500',
    'low': 'text-green-500',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[project.status]}`}>
              {project.status.replace('-', ' ')}
            </span>
            <AlertCircle className={`w-4 h-4 ${priorityColors[project.priority]}`} />
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-3">
          {project.name}
        </h3>
        
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-dark-600 dark:text-dark-400">Progress</span>
            <span className="text-sm font-semibold text-dark-900 dark:text-white">{project.progress}%</span>
          </div>
          <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400">
            <User className="w-4 h-4" />
            <span>{project.lead}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400">
            <Calendar className="w-4 h-4" />
            <span>Due: {formatDate(project.deadline)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

