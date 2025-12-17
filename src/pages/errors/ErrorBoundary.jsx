import { Component } from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ errorInfo });

    // Optional: Send to error tracking service
    // if (window.Sentry) {
    //   window.Sentry.captureException(error, { extra: errorInfo });
    // }

    // Optional: Auto-redirect after showing error for a moment
    if (this.props.redirectOnError) {
      setTimeout(() => {
        window.location.href = '/500';
      }, 2000);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      // Option 1: Immediate redirect (if prop is set)
      if (this.props.redirectImmediately) {
        window.location.href = '/500';
        return null;
      }

      // Option 2: Show fallback UI (if custom fallback provided)
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleReset);
      }

      // Option 3: Default fallback UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Something went wrong
            </h1>

            <p className="text-gray-600 mb-6">
              We encountered an unexpected error. Please try refreshing the page
              or contact support if the problem persists.
            </p>

            {/* Show error details in development */}
            {/* {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-50 rounded-lg text-left">
                <p className="text-sm font-semibold text-red-800 mb-2">
                  Error Details:
                </p>
                <p className="text-xs text-red-600 font-mono break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )} */}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleRefresh}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <RefreshCw size={18} />
                Refresh Page
              </button>

              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg border border-gray-200"
              >
                <Home size={18} />
                Go Home
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// PropTypes validation
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  redirectImmediately: PropTypes.bool,
  redirectOnError: PropTypes.bool,
  fallback: PropTypes.func,
};

ErrorBoundary.defaultProps = {
  redirectImmediately: false,
  redirectOnError: false,
  fallback: null,
};

export default ErrorBoundary;
