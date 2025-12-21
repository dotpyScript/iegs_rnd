import { useState } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Plus,
  Download,
  Receipt,
  FileText,
  Wallet,
  Building2,
  CreditCard,
  X,
  BarChart3,
} from 'lucide-react';
import LineChart from '../../components/charts/LineChart';
import BarChart from '../../components/charts/BarChart';
import { accountingData } from '../../utils/dummyData';
import { formatCurrency } from '../../utils/formatCurrency';

const AccountingOverview = () => {
  const [activeView, setActiveView] = useState('expenditure');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { revenue, expenses } = accountingData;

  const views = [
    {
      id: 'expenditure',
      label: 'Expenditure',
      icon: TrendingDown,
      tooltip: 'Expenditure Analysis',
    },
    {
      id: 'invoice',
      label: 'Invoice',
      icon: Receipt,
      tooltip: 'Invoices & Receipts',
    },
    {
      id: 'expenses',
      label: 'Expenses',
      icon: FileText,
      tooltip: 'Expense Categories',
    },
    {
      id: 'funds',
      label: 'Fund Requests',
      icon: Wallet,
      tooltip: 'Fund Requests',
    },
    {
      id: 'budgets',
      label: 'Budgets',
      icon: Building2,
      tooltip: 'Departmental Budgets',
    },
    {
      id: 'payments',
      label: 'Payments',
      icon: CreditCard,
      tooltip: 'Payments & Payroll',
    },
  ];

  // Mock data for different views
  const expenditureData = [
    { category: 'Salaries & Benefits', amount: 250000, percentage: 40, trend: '+5%' },
    { category: 'Equipment & Hardware', amount: 120000, percentage: 19, trend: '+2%' },
    { category: 'Operations & Utilities', amount: 95000, percentage: 15, trend: '-3%' },
    { category: 'Travel & Transportation', amount: 60000, percentage: 10, trend: '+8%' },
    { category: 'Maintenance & Repairs', amount: 55000, percentage: 9, trend: '+1%' },
    { category: 'Other Expenses', amount: 45000, percentage: 7, trend: '-2%' },
  ];

  const invoices = [
    { id: 1, vendor: 'Tech Solutions Ltd', date: '2024-12-21', amount: 15000, status: 'paid', dueDate: '2024-12-15' },
    { id: 2, vendor: 'Office Supplies Co', date: '2024-12-20', amount: 5600, status: 'pending', dueDate: '2024-12-25' },
    { id: 3, vendor: 'Utilities Provider', date: '2024-12-19', amount: 8300, status: 'paid', dueDate: '2024-12-10' },
    { id: 4, vendor: 'Maintenance Services', date: '2024-12-18', amount: 3200, status: 'overdue', dueDate: '2024-12-05' },
    { id: 5, vendor: 'Consulting Group', date: '2024-12-17', amount: 25000, status: 'pending', dueDate: '2024-12-30' },
  ];

  const fundRequests = [
    { id: 1, department: 'IT & Systems', amount: 50000, requested: '2024-12-21', status: 'approved', purpose: 'Server upgrades' },
    { id: 2, department: 'HR Department', amount: 15000, requested: '2024-12-20', status: 'pending', purpose: 'Training programs' },
    { id: 3, department: 'R&D UAS', amount: 75000, requested: '2024-12-19', status: 'approved', purpose: 'Drone equipment' },
    { id: 4, department: 'GIS', amount: 30000, requested: '2024-12-18', status: 'rejected', purpose: 'Software licenses' },
  ];

  const departmentBudgets = [
    { department: 'R&D UAS', total: 250000, spent: 180000, percentage: 72, color: 'bg-blue-50' },
    { department: 'GIS Department', total: 180000, spent: 135000, percentage: 75, color: 'bg-green-50' },
    { department: 'IT & Systems', total: 200000, spent: 160000, percentage: 80, color: 'bg-purple-50' },
    { department: 'HR Department', total: 120000, spent: 90000, percentage: 75, color: 'bg-pink-50' },
    { department: 'Accounting', total: 100000, spent: 70000, percentage: 70, color: 'bg-yellow-50' },
  ];

  const payrollData = [
    { employee: 'John Doe', position: 'Senior Engineer', salary: 8500, deductions: 1200, net: 7300, status: 'paid' },
    { employee: 'Jane Smith', position: 'Project Manager', salary: 7800, deductions: 1100, net: 6700, status: 'paid' },
    { employee: 'Michael Brown', position: 'Analyst', salary: 6500, deductions: 900, net: 5600, status: 'pending' },
    { employee: 'Sarah Wilson', position: 'Designer', salary: 6000, deductions: 850, net: 5150, status: 'paid' },
  ];

  const renderExpenditure = () => (
    <div className="space-y-6 animate-fadeIn">
      {/* Financial Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Budget', value: '₦2.5M', icon: Wallet, change: '+12%', color: 'bg-blue-50' },
          { label: 'Spent', value: '₦1.8M', icon: TrendingDown, change: '72%', color: 'bg-red-50' },
          { label: 'Remaining', value: '₦700K', icon: TrendingUp, change: '+28%', color: 'bg-green-50' },
          { label: 'This Month', value: '₦320K', icon: BarChart3, change: '+5%', color: 'bg-purple-50' },
        ].map((card, idx) => (
          <div key={idx} className={`border-2 border-gray-200 rounded-lg p-5 ${card.color}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600">
                <card.icon size={16} className="inline mr-1" />
                {card.label}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{card.value}</div>
            <div className="text-xs text-gray-600">{card.change}</div>
          </div>
        ))}
      </div>

      {/* Expenditure Breakdown */}
      <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
        <h3 className="text-sm font-bold text-gray-900 mb-4">Expenditure by Category</h3>
        <div className="space-y-4">
          {expenditureData.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-900">{item.category}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-900">
                    {formatCurrency(item.amount)}
                  </span>
                  <span className={`text-xs font-medium ${item.trend.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                    {item.trend}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-slate-200 to-slate-900 h-2 rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expenditure Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Monthly Expenditure Trend</h3>
          <LineChart data={revenue} dataKey="amount" color="#000000" height={250} />
        </div>

        <div className="border-2 border-gray-200 rounded-lg p-5 bg-white">
          <h3 className="text-sm font-bold text-gray-900 mb-4">Category Comparison</h3>
          <BarChart data={expenditureData} dataKey="amount" color="#6B7280" height={250} />
        </div>
      </div>
    </div>
  );

  const renderInvoice = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-2 border-gray-200 rounded-lg bg-white">
        <div className="p-5 border-b-2 border-gray-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Invoices</h3>
          <button
            onClick={() => setShowAddDialog(true)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            New Invoice
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Vendor</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Date</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Amount</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Due Date</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">{invoice.vendor}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{invoice.date}</td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">{invoice.dueDate}</td>
                  <td className="px-5 py-3 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${invoice.status === 'paid'
                        ? 'bg-green-100 text-green-700'
                        : invoice.status === 'pending'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-red-100 text-red-700'
                        }`}
                    >
                      {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderExpenses = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {expenses.map((expense) => (
          <div
            key={expense.category}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:border-gray-900 hover:shadow-lg transition-all"
          >
            <h3 className="text-sm font-bold text-gray-900 mb-3">{expense.category}</h3>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatCurrency(expense.amount)}
            </div>
            <div className="mb-3">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                <span>Budget Used</span>
                <span>{expense.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-slate-200 to-slate-900 h-2 rounded-full"
                  style={{ width: `${expense.percentage}%` }}
                />
              </div>
            </div>
            <button className="w-full px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFunds = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-2 border-gray-200 rounded-lg bg-white">
        <div className="p-5 border-b-2 border-gray-200 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900">Fund Requests</h3>
          <button
            onClick={() => setShowAddDialog(true)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            <Plus size={18} />
            New Request
          </button>
        </div>

        <div className="space-y-3 p-5">
          {fundRequests.map((request) => (
            <div
              key={request.id}
              className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-900 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{request.department}</h4>
                  <p className="text-xs text-gray-600">{request.purpose}</p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${request.status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : request.status === 'pending'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-red-100 text-red-700'
                    }`}
                >
                  {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">
                  {formatCurrency(request.amount)}
                </span>
                <span className="text-xs text-gray-600">Requested: {request.requested}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBudgets = () => (
    <div className="space-y-6 animate-fadeIn">
      {departmentBudgets.map((dept, idx) => (
        <div
          key={idx}
          className="border-2 border-gray-200 rounded-lg p-5 bg-white"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-900">{dept.department}</h3>
            <span className="text-lg font-bold text-gray-900">{dept.percentage}%</span>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <span className="text-xs text-gray-600">Total Budget</span>
              <div className="text-sm font-semibold text-gray-900">
                {formatCurrency(dept.total)}
              </div>
            </div>
            <div>
              <span className="text-xs text-gray-600">Spent</span>
              <div className="text-sm font-semibold text-gray-900">
                {formatCurrency(dept.spent)}
              </div>
            </div>
            <div>
              <span className="text-xs text-gray-600">Remaining</span>
              <div className="text-sm font-semibold text-gray-900">
                {formatCurrency(dept.total - dept.spent)}
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-slate-200 to-slate-900 h-3 rounded-full"
              style={{ width: `${dept.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );

  const renderPayments = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="border-2 border-gray-200 rounded-lg bg-white">
        <div className="p-5 border-b-2 border-gray-200">
          <h3 className="text-sm font-bold text-gray-900">Payroll Summary</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Employee</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Position</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Salary</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Deductions</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Net</th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {payrollData.map((record, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 text-sm font-medium text-gray-900">{record.employee}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{record.position}</td>
                  <td className="px-5 py-3 text-sm font-semibold text-gray-900">
                    {formatCurrency(record.salary)}
                  </td>
                  <td className="px-5 py-3 text-sm text-gray-700">
                    {formatCurrency(record.deductions)}
                  </td>
                  <td className="px-5 py-3 text-sm font-bold text-gray-900">
                    {formatCurrency(record.net)}
                  </td>
                  <td className="px-5 py-3 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${record.status === 'paid'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                        }`}
                    >
                      {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-gray-50 border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex items-center justify-center gap-6">
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Accounting & Finance
                  </h1>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Financial management and budget tracking
                  </p>
                </div>
              </div>

              {/* View Switcher and Action Buttons Container */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                {/* View Switcher */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                  {views.map((view) => (
                    <div key={view.id} className="relative group">
                      <button
                        onClick={() => setActiveView(view.id)}
                        className={`p-2 rounded transition-all whitespace-nowrap ${activeView === view.id
                          ? 'bg-white text-black'
                          : 'text-gray-600 hover:text-gray-900'
                          }`}
                        title={view.tooltip}
                      >
                        <view.icon size={18} />
                      </button>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {view.tooltip}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all duration-200 group relative"
                    title="Download Report"
                  >
                    <Download size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium sm:hidden">Download</span>
                    <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Download Report
                    </div>
                  </button>

                  <button
                    onClick={() => setShowAddDialog(true)}
                    className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium"
                    title="Add Record"
                  >
                    <Plus size={18} className="flex-shrink-0" />
                    <span className="text-sm font-medium hidden lg:inline">Add Record</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mt-8">
          <div className="max-w-7xl mx-auto px-6 py-6">
            {activeView === 'expenditure' && renderExpenditure()}
            {activeView === 'invoice' && renderInvoice()}
            {activeView === 'expenses' && renderExpenses()}
            {activeView === 'funds' && renderFunds()}
            {activeView === 'budgets' && renderBudgets()}
            {activeView === 'payments' && renderPayments()}
          </div>
        </div>
      </div>

      {/* Add Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-gray-900">Add Financial Record</h2>
              <button
                onClick={() => setShowAddDialog(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label htmlFor="record-type" className="block text-sm font-medium text-gray-900 mb-2">
                  Record Type
                </label>
                <select id="record-type" className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                  <option>Expense</option>
                  <option>Invoice</option>
                  <option>Fund Request</option>
                  <option>Payroll Entry</option>
                </select>
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-900 mb-2">
                  Amount
                </label>
                <input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  rows="3"
                  placeholder="Enter description..."
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-900 mb-2">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-2">
                    Category
                  </label>
                  <select id="category" className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                    <option>Salaries</option>
                    <option>Equipment</option>
                    <option>Operations</option>
                    <option>Travel</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
              <button
                onClick={() => setShowAddDialog(false)}
                className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                Save Record
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out backwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AccountingOverview;

