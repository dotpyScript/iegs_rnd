import { motion } from 'framer-motion';
import { FolderKanban, Users, Plane, DollarSign, MessageSquare, Award, Upload, CheckCircle, FileText } from 'lucide-react';
import KpiCard from '../components/cards/KpiCard';
import ProjectCard from '../components/cards/ProjectCard';
import TeamCard from '../components/cards/TeamCard';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
            Welcome back, Admin
          </h1>
          <p className="text-dark-600 dark:text-dark-400">{getCurrentDate()}</p>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Active Projects"
          value={kpiData.activeProjects.value}
          change={kpiData.activeProjects.change}
          trend={kpiData.activeProjects.trend}
          icon={FolderKanban}
          index={0}
        />
        <KpiCard
          title="Engineers"
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
          title="Budget Utilization"
          value={`${kpiData.budgetUtilization.value}%`}
          change={kpiData.budgetUtilization.change}
          trend={kpiData.budgetUtilization.trend}
          icon={DollarSign}
          index={3}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Budget Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
            Budget Distribution
          </h2>
          <PieChart data={budgetDistribution} height={280} />
        </motion.div>

        {/* Monthly Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2 bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
            Monthly Project Progress
          </h2>
          <BarChart
            data={monthlyProgress}
            dataKeys={['projects', 'completed']}
            colors={['#0ea5e9', '#8b5cf6']}
            height={280}
          />
        </motion.div>
      </div>

      {/* Flight Hours Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Drone Flight Hours Over Time
        </h2>
        <LineChart data={flightHoursData} dataKey="hours" color="#0ea5e9" height={300} />
      </motion.div>

      {/* Recent Projects and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-dark-900 dark:text-white">Recent Projects</h2>
            <a href="/projects" className="text-sm text-primary-500 hover:text-primary-600 font-medium">
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recentProjects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activityIcons[activity.icon];
              return (
                <div key={activity.id} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-dark-900 dark:text-white">
                      <span className="font-semibold">{activity.user}</span> {activity.action}{' '}
                      <span className="font-semibold">{activity.target}</span>
                    </p>
                    <p className="text-xs text-dark-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Team Snapshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-dark-900 dark:text-white">Team Snapshot</h2>
          <a href="/team" className="text-sm text-primary-500 hover:text-primary-600 font-medium">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewPage;

