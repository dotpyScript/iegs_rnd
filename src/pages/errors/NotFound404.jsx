import { useState } from 'react';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound404 = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center">
          {/* SVG 404 Animation */}
          <div className="mb-8 relative">
            <svg
              viewBox="0 0 800 300"
              className="w-full max-w-2xl mx-auto"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Decorative circles */}
              <circle cx="100" cy="150" r="40" fill="#DBEAFE" opacity="0.5">
                <animate
                  attributeName="r"
                  values="40;45;40"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="700" cy="150" r="35" fill="#E9D5FF" opacity="0.5">
                <animate
                  attributeName="r"
                  values="35;40;35"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* 4 */}
              <g>
                <path
                  d="M180 80 L180 220 M120 150 L180 150 M120 150 L180 80"
                  stroke="#3B82F6"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className={isHovered ? 'animate-draw' : ''}
                />
              </g>

              {/* 0 - Astronaut helmet */}
              <g>
                <ellipse
                  cx="400"
                  cy="150"
                  rx="80"
                  ry="100"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="20"
                  strokeLinecap="round"
                  className={isHovered ? 'animate-draw' : ''}
                />
                {/* Astronaut face */}
                <circle cx="380" cy="140" r="8" fill="#6366F1">
                  <animate
                    attributeName="cy"
                    values="140;142;140"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="420" cy="140" r="8" fill="#6366F1">
                  <animate
                    attributeName="cy"
                    values="140;142;140"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M 380 170 Q 400 180 420 170"
                  stroke="#6366F1"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Stars around helmet */}
                <text x="320" y="100" fontSize="20" fill="#FBBF24">
                  ★
                </text>
                <text x="460" y="110" fontSize="24" fill="#FBBF24">
                  ★
                </text>
                <text x="340" y="200" fontSize="18" fill="#FBBF24">
                  ★
                </text>
              </g>

              {/* 4 */}
              <g>
                <path
                  d="M620 80 L620 220 M560 150 L620 150 M560 150 L620 80"
                  stroke="#EC4899"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className={isHovered ? 'animate-draw' : ''}
                />
              </g>

              {/* Floating particles */}
              <circle cx="250" cy="80" r="4" fill="#3B82F6">
                <animate
                  attributeName="cy"
                  values="80;90;80"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="550" cy="220" r="4" fill="#EC4899">
                <animate
                  attributeName="cy"
                  values="220;210;220"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you are looking for seems to have drifted into space. Don't
            worry, we'll help you navigate back to safety!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => window.history.back()}
              className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Go Back
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="group flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
            >
              <Home
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              Home Page
            </button>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 max-w-md mx-auto">
            <p className="text-sm text-gray-500 mb-3">
              Looking for something specific?
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search our site..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes draw {
          from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        .animate-draw {
          animation: draw 2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default NotFound404;
