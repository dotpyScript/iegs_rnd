import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  loading = false,
  className = '',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white focus:ring-primary-400 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-900 focus:ring-gray-400',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50 active:bg-primary-100 focus:ring-primary-400',
    ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-400',
    success: 'bg-success-500 hover:bg-success-600 active:bg-success-700 text-white focus:ring-success-400 shadow-sm hover:shadow-md',
  };

  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs gap-1.5 h-7',
    sm: 'px-3 py-2 text-sm gap-2 h-9',
    md: 'px-4 py-2.5 text-sm gap-2 h-10',
    lg: 'px-6 py-3 text-base gap-2.5 h-12',
    xl: 'px-8 py-4 text-lg gap-3 h-14',
  };

  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
  };

  const isDisabled = disabled || loading;

  return (
    <motion.button
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {/* Shimmer Effect on Hover */}
      {!isDisabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {/* Loading Spinner */}
      {loading && (
        <Loader2 className={`${iconSizes[size]} animate-spin ${iconPosition === 'right' ? 'order-2' : ''}`} />
      )}
      
      {/* Icon */}
      {!loading && Icon && (
        <Icon className={`${iconSizes[size]} ${iconPosition === 'right' ? 'order-2' : ''}`} />
      )}
      
      {/* Children */}
      <span className={iconPosition === 'right' && Icon ? 'order-1' : ''}>
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
