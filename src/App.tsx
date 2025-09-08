
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import DashboardLayout from './components/layout/DashboardLayout';
import InitializeTrip from './pages/InitializeTrip';
import Dashboard from './pages/Dashboard';
import Packages from './pages/Packages';
import Bookings from './pages/Bookings';
import Calendar from './pages/Calendar';
import Travelers from './pages/Travelers';
import Team from './pages/Team';
import Messages from './pages/Messages';
import HelpCenter from './pages/HelpCenter';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route 
            path="/auth" 
            element={
              isAuthenticated ? 
                <Navigate to="/dashboard" replace /> : 
                <AuthPage onLogin={handleLogin} />
            } 
          />
          <Route
            path="/initialize-trip"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <InitializeTrip />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <Dashboard />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/packages"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <Packages />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/bookings"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <Bookings />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/calendar"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <Calendar />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/travelers"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <Travelers />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/team"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <Team />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/messages"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <Messages />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route
            path="/help"
            element={
              isAuthenticated ? 
                <DashboardLayout onLogout={handleLogout}>
                  <HelpCenter />
                </DashboardLayout> : 
                <Navigate to="/auth" replace />
            }
          />
          <Route path="/" element={<Navigate to="/auth" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
