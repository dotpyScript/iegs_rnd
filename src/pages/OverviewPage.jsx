import { motion } from 'framer-motion';
import { FolderKanban, Users, Plane, DollarSign, MessageSquare, Award, Upload, CheckCircle, FileText } from 'lucide-react';
import KpiCard from '../components/cards/KpiCard';
import ProjectCard from '../components/cards/ProjectCard';
import TeamCard from '../components/cards/TeamCard';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import PageHeader from '../components/layout/PageHeader';
import {
  kpiData,
  budgetDistribution,
  monthlyProgress,
  flightHoursData,
  recentProjects,
  teamMembers,
  recentActivity,
} from '../utils/dummyData';
import { getCurrentDate } from '../utils/formatDate';

const OverviewPage = () => {
  const activityIcons = {
    FileText,
    CheckCircle,
    MessageSquare,
    Upload,
    Award,
  };

  const handleExport = (type) => {
    console.log(`Exporting ${type} for Overview Dashboard`);
    // Add export logic here
  };

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Page Header */}
      <PageHeader
        title="Admin Dashboard"
        breadcrumbs={[
          { icon: FolderKanban, label: 'Admin' },
          { label: 'Admin Dashboard' }
        ]}
        showExport={true}
        showYearSelector={true}
        yearRange="2024-2025"
        onExport={handleExport}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2 tracking-tight">
            Welcome back, <span className="text-primary-600">Admin</span>
          </h1>
          <p className="text-sm text-gray-600 font-medium">{getCurrentDate()}</p>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <KpiCard
          title="Active Projects"
          value={kpiData.activeProjects.value}
          change={kpiData.activeProjects.change}
          trend={kpiData.activeProjects.trend}
          icon={FolderKanban}
          index={0}
        />
        <KpiCard
          title="Team Members"
          value={kpiData.engineers.value}
          change={kpiData.engineers.change}
          trend={kpiData.engineers.trend}
          icon={Users}
          index={1}
        />
        <KpiCard
          title="Test Flights"
          value={kpiData.testFlights.value}
          change={kpiData.testFlights.change}
          trend={kpiData.testFlights.trend}
          icon={Plane}
          index={2}
        />
        <KpiCard
          title="Budget Used"
          value={`${kpiData.budgetUtilization.value}%`}
          change={kpiData.budgetUtilization.change}
          trend={kpiData.budgetUtilization.trend}
          icon={DollarSign}
          index={3}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Budget Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white rounded-2xl p-5 lg:p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-lg font-display font-bold text-gray-900 mb-6 tracking-tight">
            Budget Distribution
          </h2>
          <PieChart data={budgetDistribution} height={280} />
        </motion.div>

        {/* Monthly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-2 bg-white rounded-2xl p-5 lg:p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-lg font-display font-bold text-gray-900 mb-6 tracking-tight">
            Monthly Project Progress
          </h2>
          <BarChart
            data={monthlyProgress}
            dataKeys={['projects', 'completed']}
            colors={['#3b82f6', '#22c55e']}
            height={280}
          />
        </motion.div>
      </div>

      {/* Flight Hours Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white rounded-2xl p-5 lg:p-6 shadow-sm border border-gray-200"
      >
        <h2 className="text-lg font-display font-bold text-gray-900 mb-6 tracking-tight">
          Drone Flight Hours Over Time
        </h2>
        <LineChart data={flightHoursData} dataKey="hours" color="#3b82f6" height={300} />
      </motion.div>

      {/* Recent Projects and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Recent Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-2 bg-white rounded-2xl p-5 lg:p-6 shadow-sm border border-gray-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display font-bold text-gray-900 tracking-tight">
              Recent Projects
            </h2>
            <a href="/projects" className="text-sm text-primary-600 hover:text-primary-700 font-semibold transition-colors">
              View All →
            </a>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {recentProjects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-white rounded-2xl p-5 lg:p-6 shadow-sm border border-gray-200"
        >
          <h2 className="text-lg font-display font-bold text-gray-900 mb-6 tracking-tight">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activityIcons[activity.icon];
              return (
                <motion.div 
                  key={activity.id} 
                  whileHover={{ x: 4 }}
                  className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">
                      <span className="font-semibold">{activity.user}</span> {activity.action}{' '}
                      <span className="font-semibold">{activity.target}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Team Snapshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-white rounded-2xl p-5 lg:p-6 shadow-sm border border-gray-200"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-display font-bold text-gray-900 tracking-tight">
            Team Snapshot
          </h2>
          <a href="/team" className="text-sm text-primary-600 hover:text-primary-700 font-semibold transition-colors">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewPage;

