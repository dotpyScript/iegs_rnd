import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import LineChart from '../components/charts/LineChart';
import BarChart from '../components/charts/BarChart';
import { accountingData } from '../utils/dummyData';
import { formatCurrency, formatPercentage } from '../utils/formatCurrency';

const AccountingPage = () => {
  const { revenue, expenses, budgetOverview } = accountingData;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
          Accounting
        </h1>
        <p className="text-dark-600 dark:text-dark-400">
          Financial overview and budget tracking
        </p>
      </motion.div>

      {/* Budget Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400">
              Total Budget
            </h3>
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
            {formatCurrency(budgetOverview.total)}
          </p>
          <p className="text-sm text-dark-500">Fiscal Year 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400">
              Spent
            </h3>
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
            {formatCurrency(budgetOverview.spent)}
          </p>
          <p className="text-sm text-green-500">
            {formatPercentage((budgetOverview.spent / budgetOverview.total) * 100)} of budget
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400">
              Remaining
            </h3>
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
            {formatCurrency(budgetOverview.remaining)}
          </p>
          <p className="text-sm text-blue-500">
            {formatPercentage((budgetOverview.remaining / budgetOverview.total) * 100)} available
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-dark-600 dark:text-dark-400">
              Projected
            </h3>
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <p className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
            {formatCurrency(budgetOverview.projected)}
          </p>
          <p className="text-sm text-purple-500">Year-end estimate</p>
        </motion.div>
      </div>

      {/* Revenue Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Revenue Trend
        </h2>
        <LineChart data={revenue} dataKey="amount" color="#0ea5e9" height={300} />
      </motion.div>

      {/* Expenses Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
          Expenses Breakdown
        </h2>
        <div className="space-y-4">
          {expenses.map((expense, index) => (
            <div key={expense.category}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-dark-900 dark:text-white">
                  {expense.category}
                </span>
                <span className="text-sm font-semibold text-dark-900 dark:text-white">
                  {formatCurrency(expense.amount)} ({expense.percentage}%)
                </span>
              </div>
              <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${expense.percentage}%` }}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AccountingPage;

