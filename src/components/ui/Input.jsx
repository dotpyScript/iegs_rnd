import { useState } from 'react';
import { Eye, EyeOff, AlertCircle, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  className = '',
  icon: Icon,
  error,
  success,
  hint,
  label,
  required = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {/* Leading Icon */}
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon className={`w-4 h-4 transition-colors ${
              error 
                ? 'text-red-500' 
                : success
                ? 'text-success-500'
                : isFocused 
                ? 'text-primary-500' 
                : 'text-gray-400'
            }`} />
          </div>
        )}

        {/* Input Field */}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full px-4 py-2.5 rounded-xl border transition-all duration-200 ${
            Icon ? 'pl-10' : ''
          } ${
            type === 'password' ? 'pr-10' : ''
          } ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : success
              ? 'border-success-500 focus:border-success-500 focus:ring-success-500/20'
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500/20'
          } ${
            disabled 
              ? 'bg-gray-100 cursor-not-allowed opacity-60' 
              : 'bg-white'
          } text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 text-sm font-medium`}
          {...props}
        />

        {/* Password Toggle */}
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4 text-gray-400" />
            ) : (
              <Eye className="w-4 h-4 text-gray-400" />
            )}
          </button>
        )}

        {/* Success Check */}
        {success && !error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            >
              <Check className="w-4 h-4 text-success-500" />
            </motion.div>
          </div>
        )}
      </div>

      {/* Error/Hint Messages */}
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-start gap-1.5 mt-2"
          >
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-600 font-medium">
              {error}
            </p>
          </motion.div>
        )}
        {!error && hint && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-xs text-gray-500"
          >
            {hint}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;
