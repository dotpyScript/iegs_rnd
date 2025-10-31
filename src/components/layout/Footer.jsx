import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 px-4 lg:px-6 py-4 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p className="text-gray-600 font-medium flex items-center gap-1.5">
          © {currentYear} IEGS R&D Admin Portal. Made with 
          <Heart className="w-3 h-3 text-red-500 fill-current inline" /> 
          by IEGS Team
        </p>
        <div className="flex items-center gap-4 lg:gap-6">
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
          >
            Privacy
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
          >
            Terms
          </a>
          <a 
            href="#" 
            className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

