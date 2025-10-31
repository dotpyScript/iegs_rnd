import { motion } from 'framer-motion';

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  icon: Icon,
  className = '',
  animate = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-semibold rounded-full border';
  
  const variants = {
    default: 'bg-gray-100 text-gray-700 border-gray-200',
    primary: 'bg-primary-100 text-primary-700 border-primary-200',
    success: 'bg-success-100 text-success-700 border-success-200',
    warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    error: 'bg-red-100 text-red-700 border-red-200',
    'in-progress': 'bg-blue-100 text-blue-700 border-blue-200',
    completed: 'bg-success-100 text-success-700 border-success-200',
    planning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    testing: 'bg-purple-100 text-purple-700 border-purple-200',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px] gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2',
  };

  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  };

  const dotColors = {
    default: 'bg-gray-500',
    primary: 'bg-primary-500',
    success: 'bg-success-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    'in-progress': 'bg-blue-500',
    completed: 'bg-success-500',
    planning: 'bg-yellow-500',
    testing: 'bg-purple-500',
  };

  const BadgeContent = (
    <>
      {dot && (
        <span className={`${dotSizes[size]} ${dotColors[variant]} rounded-full ${animate ? 'animate-pulse' : ''}`} />
      )}
      {Icon && <Icon className={iconSizes[size]} />}
      <span>{children}</span>
    </>
  );

  if (animate) {
    return (
      <motion.span
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {BadgeContent}
      </motion.span>
    );
  }

  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {BadgeContent}
    </span>
  );
};

export default Badge;
