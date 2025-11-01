import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Upload } from 'lucide-react';

const PageHeader = ({ 
  title = 'Admin Dashboard',
  breadcrumbs = [],
  showExport = true,
  showYearSelector = true,
  yearRange = '2024-2025',
  customActions = null,
  onExport = null
}) => {
  const [showExportDropdown, setShowExportDropdown] = React.useState(false);
  const exportDropdownRef = React.useRef(null);

  // Close export dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target)) {
        setShowExportDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const exportOptions = [
    { label: 'Export as PDF', value: 'pdf', icon: FileText },
    { label: 'Export as Excel', value: 'excel', icon: FileText },
    { label: 'Export as CSV', value: 'csv', icon: FileText },
  ];

  const handleExport = (type) => {
    if (onExport) {
      onExport(type);
    } else {
      console.log(`Exporting as ${type}`);
    }
    setShowExportDropdown(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 -mt-2"
    >
      {/* Left: Title & Breadcrumb */}
      <div>
        <h3 className="text-lg lg:text-3xl font-display font-bold text-gray-800 mb-0.5 tracking-tight">
          {title}
        </h3>
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  whileHover={{ scale: crumb.href ? 1.05 : 1 }} 
                  className="flex items-center gap-2"
                >
                  {crumb.icon && (
                    <div className="w-5 h-5 bg-primary-100 rounded-lg flex items-center justify-center">
                      <crumb.icon className="w-4 h-4 text-primary-600" />
                    </div>
                  )}
                  {crumb.href ? (
                    <a 
                      href={crumb.href} 
                      className="text-gray-600 font-medium hover:text-primary-600 transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className={`font-medium ${index === breadcrumbs.length - 1 ? 'text-gray-700 font-semibold' : 'text-gray-600'}`}>
                      {crumb.label}
                    </span>
                  )}
                </motion.div>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-gray-400">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>

      {/* Right: Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Custom Actions (if provided) */}
        {customActions && customActions}

        {/* Export Dropdown */}
        {showExport && (
          <div className="relative" ref={exportDropdownRef}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowExportDropdown(!showExportDropdown)}
              className="flex items-center gap-2 px-2 py-2 bg-white border-2 border-gray-200 rounded font-semibold text-sm text-gray-700 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 shadow-sm"
            >
              <Upload className="w-4 h-4" />
              <span>Export</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showExportDropdown ? 'rotate-180' : ''}`} />
            </motion.button>

            {/* Export Dropdown Menu */}
            <AnimatePresence>
              {showExportDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-10"
                >
                  <div className="py-2">
                    {exportOptions.map((option) => (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => handleExport(option.value)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 hover:border-primary-200  hover:bg-primary-50 text-left   transition-all duration-200 shadow-sm"
                      >
                        <option.icon className="w-4 h-4" />
                        <span>{option.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Year Selector Button */}
        {showYearSelector && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-2 py-2 bg-white border-2 border-gray-200 rounded font-semibold text-sm text-gray-700 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 shadow-sm"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span>{yearRange}</span>
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default PageHeader;

