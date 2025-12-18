import { Routes, Route, Navigate } from 'react-router-dom';

import ServerError500 from '../pages/errors/ServerError500';
import NotFound404 from '../pages/errors/NotFound404';
// Company pages
import OverviewPage from '../pages/Home/OverviewPage';
// import AnalyticsPage from '../pages/Home/AnalyticsPage';
// import ActivityFeedPage from '../pages/Home/ActivityFeedPage';
// import NotificationsPage from '../pages/Home/NotificationsPage';

// Department pages
// import GISPage from '../pages/departments/GISPage';
// import SurveyPage from '../pages/departments/SurveyPage';
import RnDDashboard from '../pages/department/RnD';
// import BusinessDevPage from '../pages/departments/BusinessDevPage';
// import ITPage from '../pages/departments/ITPage';
// import HRDepartmentPage from '../pages/departments/HRDepartmentPage';
// import AccountingDeptPage from '../pages/departments/AccountingDeptPage';
// import ProcurementPage from '../pages/departments/ProcurementPage';

// Project pages
import ProjectsOverview from '../pages/projects/ProjectsOverview';
// import ActiveProjectsPage from '../pages/projects/ActiveProjectsPage';
// import PendingProjectsPage from '../pages/projects/PendingProjectsPage';
// import CompletedProjectsPage from '../pages/projects/CompletedProjectsPage';
// import AssignedTeamsPage from '../pages/projects/AssignedTeamsPage';
// import MilestonesPage from '../pages/projects/MilestonesPage';
// import CreateProjectPage from '../pages/projects/CreateProjectPage';

// Drone pages
import DroneOverview from '../pages/drone/DroneOverview';
// import FlightLogsPage from '../pages/drone/FlightLogsPage';
// import TelemetryPage from '../pages/drone/TelemetryPage';
// import FlightMediaPage from '../pages/drone/FlightMediaPage';
// import TestReportsPage from '../pages/drone/TestReportsPage';
// import UploadFlightDataPage from '../pages/drone/UploadFlightDataPage';

// Accounting pages
import AccountingOverview from '../pages/accounting/AccountingOverview';
// import AccountingOverviewPage from '../pages/accounting/AccountingOverviewPage';
// import ExpendituresPage from '../pages/accounting/ExpendituresPage';
// import InvoicesPage from '../pages/accounting/InvoicesPage';
// import ExpenseCategoriesPage from '../pages/accounting/ExpenseCategoriesPage';
// import FundRequestsPage from '../pages/accounting/FundRequestsPage';
// import BudgetsPage from '../pages/accounting/BudgetsPage';
// import PayrollPage from '../pages/accounting/PayrollPage';

// Inventory pages
import InventoryOverview from '../pages/inventory/InventoryOverview';
// import InventoryOverviewPage from '../pages/inventory/InventoryOverviewPage';
// import EquipmentPage from '../pages/inventory/EquipmentPage';
// import ConsumablesPage from '../pages/inventory/ConsumablesPage';
// import ProcurementRequestsPage from '../pages/inventory/ProcurementRequestsPage';
// import LowStockPage from '../pages/inventory/LowStockPage';
// import AddInventoryPage from '../pages/inventory/AddInventoryPage';
// import VendorsPage from '../pages/inventory/VendorsPage';

// HR pages
import StaffManagement from '../pages/hr/StaffManagement';
// import EmployeeDirectoryPage from '../pages/hr/EmployeeDirectoryPage';
// import DepartmentsRolesPage from '../pages/hr/DepartmentsRolesPage';
// import AttendancePage from '../pages/hr/AttendancePage';
// import PerformancePage from '../pages/hr/PerformancePage';
// import HRPayrollPage from '../pages/hr/HRPayrollPage';
// import AddEmployeePage from '../pages/hr/AddEmployeePage';

// Communication pages
// import ChatPage from '../pages/communication/ChatPage';
// import AnnouncementsPage from '../pages/communication/AnnouncementsPage';
// import MeetingsPage from '../pages/communication/MeetingsPage';
// import SharedFilesPage from '../pages/communication/SharedFilesPage';
// import EmailPage from '../pages/communication/EmailPage';

// Reports pages
import ReportsOverview from '../pages/reports/ReportsOverview';
// import ReportsOverviewPage from '../pages/reports/ReportsOverviewPage';
// import DepartmentReportsPage from '../pages/reports/DepartmentReportsPage';
// import FinancialReportsPage from '../pages/reports/FinancialReportsPage';
// import ProjectPerformancePage from '../pages/reports/ProjectPerformancePage';
// import DroneAnalyticsPage from '../pages/reports/DroneAnalyticsPage';
// import ExportReportsPage from '../pages/reports/ExportReportsPage';
// import SyncPortalPage from '../pages/reports/SyncPortalPage';

// Admin pages
import TeamPage from '../pages/admin/TeamPage';
// import UserManagementPage from '../pages/admin/UserManagementPage';
// import RolesPermissionsPage from '../pages/admin/RolesPermissionsPage';
// import OrganizationPage from '../pages/admin/OrganizationPage';
// import SecurityPage from '../pages/admin/SecurityPage';
// import ConfigurationsPage from '../pages/admin/ConfigurationsPage';
// import IntegrationsPage from '../pages/admin/IntegrationsPage';
// import AuditLogsPage from '../pages/admin/AuditLogsPage';
// import BackupsPage from '../pages/admin/BackupsPage';

// Settings pages
import SettingsPage from '../pages/settings/SettingsPage';
import GISDashboard from '../pages/department/GIS';
// import ThemeSettingsPage from '../pages/settings/ThemeSettingsPage';
// import LanguagePage from '../pages/settings/LanguagePage';
// import NotificationSettingsPage from '../pages/settings/NotificationSettingsPage';
// import PreferencesPage from '../pages/settings/PreferencesPage';
// import ClearCachePage from '../pages/settings/ClearCachePage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default redirect to overview */}
      <Route path="/" element={<Navigate to="/overview" replace />} />
      {/* errors */}
      <Route path="/404" element={<NotFound404 />} />
      <Route path="/500" element={<ServerError500 />} />
      <Route path="*" element={<NotFound404 />} />
      {/* Catch-all */}
      {/* Company Overview */}
      <Route path="/overview" element={<OverviewPage />} />
      {/* <Route path='/analytics' element={<AnalyticsPage />} />
      <Route path='/activity' element={<ActivityFeedPage />} />
      <Route path='/notifications' element={<NotificationsPage />} /> */}
      {/* Departments */}
      <Route path="/GISDashboard" element={<GISDashboard />} />
      <Route path="/RnDDashboard" element={<RnDDashboard />} />
      {/* 
      <Route path='/departments/survey' element={<SurveyPage />} />
      <Route path='/departments/business' element={<BusinessDevPage />} />
      <Route path='/departments/it' element={<ITPage />} />
      <Route path='/departments/hr' element={<HRDepartmentPage />} />
      <Route path='/departments/accounting' element={<AccountingDeptPage />} />
      <Route path='/departments/procurement' element={<ProcurementPage />} /> */}
      {/* Projects */}
      <Route path="/project/projects" element={<ProjectsOverview />} />
      {/*
      <Route path='/projects/active' element={<ActiveProjectsPage />} />
      <Route path='/projects/pending' element={<PendingProjectsPage />} />
      <Route path='/projects/completed' element={<CompletedProjectsPage />} />
      <Route path='/projects/teams' element={<AssignedTeamsPage />} />
      <Route path='/projects/milestones' element={<MilestonesPage />} />
      <Route path='/projects/new' element={<CreateProjectPage />} />
       */}
      {/* Drone Operations */}
      <Route path="/drone/droneOverview" element={<DroneOverview />} />
      {/* <Route path='/drone/logs' element={<FlightLogsPage />} />
      <Route path='/drone/telemetry' element={<TelemetryPage />} />
      <Route path='/drone/media' element={<FlightMediaPage />} />
      <Route path='/drone/reports' element={<TestReportsPage />} />
      <Route path='/drone/upload' element={<UploadFlightDataPage />} />
       */}
      {/* Accounting & Finance */}
      <Route
        path="/accounting/accountingOverview"
        element={<AccountingOverview />}
      />
      {/* 
      <Route path='/accounting/expenditures' element={<ExpendituresPage />} />
      <Route path='/accounting/invoices' element={<InvoicesPage />} />
      <Route path='/accounting/categories' element={<ExpenseCategoriesPage />} />
      <Route path='/accounting/funds' element={<FundRequestsPage />} />
      <Route path='/accounting/budgets' element={<BudgetsPage />} />
      <Route path='/accounting/payroll' element={<PayrollPage />} /> */}
      {/* Inventory */}
      <Route
        path="/inventory/inventoryOverview"
        element={<InventoryOverview />}
      />
      {/*
      <Route path='/inventory/equipment' element={<EquipmentPage />} />
      <Route path='/inventory/consumables' element={<ConsumablesPage />} />
      <Route path='/inventory/requests' element={<ProcurementRequestsPage />} />
      <Route path='/inventory/alerts' element={<LowStockPage />} />
      <Route path='/inventory/add' element={<AddInventoryPage />} />
      <Route path='/inventory/vendors' element={<VendorsPage />} /> */}

      {/* Human Resources */}
      <Route path="/hr/StaffManagement" element={<StaffManagement />} />
      {/*
      <Route path='/hr/departments' element={<DepartmentsRolesPage />} />
      <Route path='/hr/attendance' element={<AttendancePage />} />
      <Route path='/hr/performance' element={<PerformancePage />} />
      <Route path='/hr/payroll' element={<HRPayrollPage />} />
      <Route path='/hr/add' element={<AddEmployeePage />} /> */}
      {/* Communication */}
      {/* <Route path='/communication/chat' element={<ChatPage />} />
      <Route path='/communication/announcements' element={<AnnouncementsPage />} />
      <Route path='/communication/meetings' element={<MeetingsPage />} />
      <Route path='/communication/files' element={<SharedFilesPage />} />
      <Route path='/communication/email' element={<EmailPage />} /> */}
      {/* Reports */}
      <Route path="/data/reportsOverview" element={<ReportsOverview />} />
      {/*
      <Route path='/reports/departments' element={<DepartmentReportsPage />} />
      <Route path='/reports/financial' element={<FinancialReportsPage />} />
      <Route path='/reports/projects' element={<ProjectPerformancePage />} />
      <Route path='/reports/drone' element={<DroneAnalyticsPage />} />
      <Route path='/reports/export' element={<ExportReportsPage />} />
      <Route path='/reports/sync' element={<SyncPortalPage />} /> */}
      {/* Administration */}
      <Route path="/admin/TeamPage" element={<TeamPage />} />
      {/* <Route path='/admin/users' element={<UserManagementPage />} />
      <Route path='/admin/roles' element={<RolesPermissionsPage />} />
      <Route path='/admin/organization' element={<OrganizationPage />} />
      <Route path='/admin/security' element={<SecurityPage />} />
      <Route path='/admin/config' element={<ConfigurationsPage />} />
      <Route path='/admin/integrations' element={<IntegrationsPage />} />
      <Route path='/admin/logs' element={<AuditLogsPage />} />
      <Route path='/admin/backups' element={<BackupsPage />} /> */}
      {/* Settings */}
      <Route path="/settings/settings" element={<SettingsPage />} />
      {/* <Route path='/settings/theme' element={<ThemeSettingsPage />} />
      <Route path='/settings/language' element={<LanguagePage />} />
      <Route path='/settings/notifications' element={<NotificationSettingsPage />} />
      <Route path='/settings/preferences' element={<PreferencesPage />} />
      <Route path='/settings/cache' element={<ClearCachePage />} /> */}
      {/* </Routes> */}
    </Routes>
  );
};

export default AppRoutes;
