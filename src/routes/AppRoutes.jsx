import { Routes, Route } from 'react-router-dom';
import OverviewPage from '../pages/OverviewPage';
import ProjectsPage from '../pages/ProjectsPage';
import DroneOpsPage from '../pages/DroneOpsPage';
import InventoryPage from '../pages/InventoryPage';
import AccountingPage from '../pages/AccountingPage';
import TeamPage from '../pages/TeamPage';
import ReportsPage from '../pages/ReportsPage';
import SettingsPage from '../pages/SettingsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<OverviewPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/drone-ops" element={<DroneOpsPage />} />
      <Route path="/inventory" element={<InventoryPage />} />
      <Route path="/accounting" element={<AccountingPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/reports" element={<ReportsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default AppRoutes;

