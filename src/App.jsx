import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-50">
          {/* Sidebar */}
          <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Page Content */}
            <main className="flex-1 overflow-y-auto scrollbar-thin bg-gray-50 dark:bg-gray-50">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
                <AppRoutes />
              </div>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </Router>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

