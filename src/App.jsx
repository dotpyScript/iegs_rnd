import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="flex h-screen overflow-hidden bg-dark-50 dark:bg-dark-950">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Navbar */}
              <Navbar onMenuClick={() => setSidebarOpen(true)} />

              {/* Page Content */}
              <main className="flex-1 overflow-y-auto scrollbar-thin">
                <div className="container mx-auto px-6 py-8">
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

