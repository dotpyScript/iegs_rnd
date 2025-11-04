import { motion } from 'framer-motion';
import { useContext } from 'react';
import { FolderKanban, Users, MessageSquare, Award, Upload, CheckCircle, FileText, PieChart as PieChartIcon, TrendingUp, ClipboardCheck } from 'lucide-react';
import KpiCard from '../components/cards/KpiCard';
import ProjectCard from '../components/cards/ProjectCard';
import TeamCard from '../components/cards/TeamCard';
import QuickStatsWidget from '../components/cards/QuickStatsWidget';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import WelcomeSection from '../components/layout/WelcomeSection';
import { ThemeContext } from '../context/ThemeContext';
import {
  kpiData,
  budgetDistribution,
  monthlyProgress,
  flightHoursData,
  recentProjects,
  teamMembers,
  recentActivity,
} from '../utils/dummyData';

const OverviewPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  const activityIcons = {
    FileText,
    CheckCircle,
    MessageSquare,
    Upload,
    Award,
  };

  return (
    <div className="space-y-4 lg:space-y-5">
      {/* Welcome Section */}
      <WelcomeSection
        userName="Angela"
        onThemeToggle={toggleTheme}
        isDarkMode={theme === 'dark'}
      />

      {/* KPI Cards Grid: 2x3 Layout + Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
        {/* Left Side: 6 KPI Cards in 2x3 Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-start">
          {/* 1. Active Projects */}
          <KpiCard
            title="Active Projects"
            value="24"
            change={12}
            trend="up"
            icon={FolderKanban}
            accentColor="orange"
            description="Up 12% from last month projects"
            index={0}
          />
          
          {/* 2. Completion Rate */}
          <KpiCard
            title="Completion Rate"
            value="78%"
            change={5}
            trend="up"
            icon={ClipboardCheck}
            accentColor="green"
            description="+5% improvement this quarter"
            index={1}
          />
          
          {/* 3. Budget Utilization */}
          <KpiCard
            title="Budget Utilization"
            value="₦12.5M"
            trend="neutral"
            icon={PieChartIcon}
            accentColor="blue"
            description="Under control — remaining ₦7.5M"
            index={2}
          />
          
          {/* 4. Employee Engagement */}
          <KpiCard
            title="Staff Attendance"
            value="92%"
            trend="neutral"
            icon={Users}
            accentColor="blue"
            description="HR trend stable this month"
            index={3}
          />
          
          {/* 5. Tasks Completed */}
          <KpiCard
            title="Tasks Completed"
            value="312"
            change={18}
            trend="up"
            icon={CheckCircle}
            accentColor="cyan"
            description="+18% since last week"
            index={4}
          />
          
          {/* 6. Revenue / Financial Growth */}
          <KpiCard
            title="Revenue"
            value="₦42M"
            change={9}
            trend="up"
            icon={TrendingUp}
            accentColor="green"
            description="+9% MoM"
            index={5}
          />
        </div>

        {/* Right Side: Quick Stats Widget */}
        <div className="lg:col-span-1">
          <QuickStatsWidget />
        </div>
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

