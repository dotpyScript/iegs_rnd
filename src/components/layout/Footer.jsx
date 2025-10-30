const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-700 px-6 py-4 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-dark-600 dark:text-dark-400">
          © 2024 IEGS Global Project Management Platform. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className="text-sm text-dark-600 dark:text-dark-400 hover:text-primary-500 transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="#" 
            className="text-sm text-dark-600 dark:text-dark-400 hover:text-primary-500 transition-colors"
          >
            Terms of Service
          </a>
          <a 
            href="#" 
            className="text-sm text-dark-600 dark:text-dark-400 hover:text-primary-500 transition-colors"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

