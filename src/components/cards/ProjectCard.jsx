import { motion } from 'framer-motion';
import { Calendar, User, MoreVertical, ArrowUpRight } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';
import Badge from '../ui/Badge';

const ProjectCard = ({ project, index = 0 }) => {
  const getProgressColor = (progress) => {
    if (progress >= 75) return 'from-success-500 to-success-600';
    if (progress >= 50) return 'from-primary-500 to-primary-600';
    if (progress >= 25) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200"
    >
      {/* Image Header */}
      <div className="relative h-40 overflow-hidden bg-primary-50">
        {project.image ? (
          <>
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-display font-bold text-gray-200">
              {project.name.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Floating Actions */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MoreVertical className="w-4 h-4 text-gray-700" />
          </motion.button>
        </div>

        {/* Status Badge */}
        <div className="absolute bottom-3 left-3">
          <Badge variant={project.status} size="sm" dot animate>
            {project.status.replace('-', ' ')}
          </Badge>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        {/* Title and Priority */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 flex-1">
            {project.name}
          </h3>
          <Badge variant={project.priority === 'high' ? 'error' : project.priority === 'medium' ? 'warning' : 'success'} size="sm">
            {project.priority}
          </Badge>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-gray-600">
              Progress
            </span>
            <span className="text-xs font-bold text-gray-900">
              {project.progress}%
            </span>
          </div>
          <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${project.progress}%` }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={`h-full bg-gradient-to-r ${getProgressColor(project.progress)} rounded-full relative`}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </div>
        </div>

        {/* Meta Information */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="p-1.5 bg-gray-100 rounded-lg">
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium">{project.lead}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <div className="p-1.5 bg-gray-100 rounded-lg">
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium">Due: {formatDate(project.deadline)}</span>
          </div>
        </div>

        {/* View Details Link */}
        <motion.div 
          className="mt-4 pt-4 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <button className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:gap-3 transition-all group/link">
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Hover Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
        }}
      />
    </motion.div>
  );
};

export default ProjectCard;
