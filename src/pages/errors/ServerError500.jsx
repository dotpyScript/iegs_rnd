import { useState } from 'react';
import { Home, RefreshCw, Mail } from 'lucide-react';

const ServerError500 = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center">
          {/* SVG 500 Animation */}
          <div className="mb-8 relative">
            <svg viewBox="0 0 800 300" className="w-full max-w-2xl mx-auto">
              {/* Warning triangles */}
              <polygon
                points="100,50 70,100 130,100"
                fill="#FEF3C7"
                opacity="0.6"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 100 75; 10 100 75; 0 100 75"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </polygon>
              <polygon
                points="700,50 670,100 730,100"
                fill="#FED7AA"
                opacity="0.6"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 700 75; -10 700 75; 0 700 75"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </polygon>

              {/* 5 */}
              <g>
                <path
                  d="M200 80 L120 80 L120 150 L200 150 Q220 150 220 170 Q220 190 200 190 L120 190"
                  stroke="#EF4444"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </g>

              {/* 0 - Broken server */}
              <g>
                <rect
                  x="340"
                  y="100"
                  width="120"
                  height="120"
                  rx="10"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                {/* Crack in server */}
                <path
                  d="M 340 130 L 380 170 L 360 180 L 400 220"
                  stroke="#DC2626"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10;0"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </path>
                {/* Server lights - error state */}
                <circle cx="370" cy="130" r="6" fill="#DC2626">
                  <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="390" cy="130" r="6" fill="#DC2626">
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="410" cy="130" r="6" fill="#DC2626">
                  <animate
                    attributeName="opacity"
                    values="1;0.3;1"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Smoke/sparks */}
                <circle cx="400" cy="100" r="3" fill="#F59E0B" opacity="0.7">
                  <animate
                    attributeName="cy"
                    values="100;80;100"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.7;0;0.7"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>

              {/* 0 */}
              <g>
                <ellipse
                  cx="560"
                  cy="150"
                  rx="60"
                  ry="80"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="20"
                  strokeLinecap="round"
                />
              </g>

              {/* Warning symbols */}
              <text
                x="200"
                y="260"
                fontSize="30"
                fill="#DC2626"
                fontWeight="bold"
              >
                ⚠
              </text>
              <text
                x="600"
                y="90"
                fontSize="30"
                fill="#DC2626"
                fontWeight="bold"
              >
                ⚠
              </text>
            </svg>
          </div>

          {/* Text Content */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Server Error Detected
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our servers are experiencing some technical difficulties. Our team
            has been notified and is working on a fix.
          </p>

          {/* Status Box */}
          <div className="max-w-md mx-auto mb-8 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-red-100 rounded-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Error Code: 500
                </h3>
                <p className="text-sm text-gray-600">Internal Server Error</p>
              </div>
            </div>
            <div className="text-sm text-gray-500 text-left">
              <p className="mb-2">What you can do:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Refresh the page</li>
                <li>Try again in a few minutes</li>
                <li>Contact support if the issue persists</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="group flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw
                size={20}
                className={`${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`}
              />
              {isRefreshing ? 'Refreshing...' : 'Refresh Page'}
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
            <button
              onClick={() =>
                (window.location.href = 'mailto:support@company.com')
              }
              className="group flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200"
            >
              <Mail
                size={20}
                className="group-hover:scale-110 transition-transform"
              />
              Contact Support
            </button>
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
      `}</style>
    </div>
  );
};

export default ServerError500;
