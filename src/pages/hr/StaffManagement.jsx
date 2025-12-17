import { useState } from 'react';
import {
  Users,
  Building2,
  CalendarDays,
  BarChart2,
  UserPlus,
  Search,
  Download,
  Mail,
  Phone,
  Briefcase,
  MoreVertical,
  Edit,
  Eye,
  Clock,
  CheckCircle2,
  XCircle,
  TrendingUp,
  TrendingDown,
  Award,
  X,
  Calendar,
} from 'lucide-react';

const StaffManagement = () => {
  const [activeView, setActiveView] = useState('directory');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showLeaveDialog, setShowLeaveDialog] = useState(false);

  // Mock data
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Senior Developer',
      department: 'Engineering',
      email: 'john@company.com',
      phone: '+234 123 4567',
      status: 'Active',
      avatar: 'JD',
      salary: '₦500,000',
      joined: '2022-01-15',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      role: 'UX Designer',
      department: 'Design',
      email: 'sarah@company.com',
      phone: '+234 123 4568',
      status: 'Active',
      avatar: 'SS',
      salary: '₦450,000',
      joined: '2022-03-20',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Product Manager',
      department: 'Product',
      email: 'mike@company.com',
      phone: '+234 123 4569',
      status: 'Active',
      avatar: 'MJ',
      salary: '₦600,000',
      joined: '2021-11-10',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      role: 'HR Manager',
      department: 'Human Resources',
      email: 'emma@company.com',
      phone: '+234 123 4570',
      status: 'Active',
      avatar: 'EW',
      salary: '₦480,000',
      joined: '2022-02-05',
    },
    {
      id: 5,
      name: 'David Brown',
      role: 'DevOps Engineer',
      department: 'Engineering',
      email: 'david@company.com',
      phone: '+234 123 4571',
      status: 'On Leave',
      avatar: 'DB',
      salary: '₦520,000',
      joined: '2022-04-12',
    },
    {
      id: 6,
      name: 'Lisa Chen',
      role: 'Marketing Lead',
      department: 'Marketing',
      email: 'lisa@company.com',
      phone: '+234 123 4572',
      status: 'Active',
      avatar: 'LC',
      salary: '₦470,000',
      joined: '2022-05-18',
    },
  ];

  const departments = [
    {
      name: 'Engineering',
      employees: 45,
      head: 'Mike Johnson',
      budget: '₦25M',
      color: 'bg-black',
    },
    {
      name: 'Design',
      employees: 12,
      head: 'Sarah Smith',
      budget: '₦8M',
      color: 'bg-gray-700',
    },
    {
      name: 'Product',
      employees: 18,
      head: 'John Doe',
      budget: '₦12M',
      color: 'bg-gray-600',
    },
    {
      name: 'Marketing',
      employees: 22,
      head: 'Lisa Chen',
      budget: '₦15M',
      color: 'bg-gray-800',
    },
    {
      name: 'Human Resources',
      employees: 8,
      head: 'Emma Wilson',
      budget: '₦6M',
      color: 'bg-gray-500',
    },
    {
      name: 'Finance',
      employees: 10,
      head: 'David Brown',
      budget: '₦9M',
      color: 'bg-gray-900',
    },
  ];

  const attendance = [
    {
      employee: 'John Doe',
      department: 'Engineering',
      status: 'Present',
      checkIn: '08:45 AM',
      checkOut: '05:30 PM',
      hours: 8.75,
    },
    {
      employee: 'Sarah Smith',
      department: 'Design',
      status: 'Present',
      checkIn: '09:00 AM',
      checkOut: '06:00 PM',
      hours: 9.0,
    },
    {
      employee: 'Mike Johnson',
      department: 'Product',
      status: 'Present',
      checkIn: '08:30 AM',
      checkOut: '05:45 PM',
      hours: 9.25,
    },
    {
      employee: 'Emma Wilson',
      department: 'HR',
      status: 'Present',
      checkIn: '08:50 AM',
      checkOut: '05:20 PM',
      hours: 8.5,
    },
    {
      employee: 'David Brown',
      department: 'Engineering',
      status: 'On Leave',
      checkIn: '-',
      checkOut: '-',
      hours: 0,
    },
    {
      employee: 'Lisa Chen',
      department: 'Marketing',
      status: 'Late',
      checkIn: '10:15 AM',
      checkOut: '-',
      hours: 0,
    },
  ];

  const performance = [
    {
      employee: 'John Doe',
      rating: 4.8,
      projects: 12,
      onTime: 95,
      satisfaction: 4.9,
      trend: 'up',
    },
    {
      employee: 'Sarah Smith',
      rating: 4.6,
      projects: 8,
      onTime: 92,
      satisfaction: 4.7,
      trend: 'up',
    },
    {
      employee: 'Mike Johnson',
      rating: 4.9,
      projects: 15,
      onTime: 98,
      satisfaction: 4.8,
      trend: 'up',
    },
    {
      employee: 'Emma Wilson',
      rating: 4.5,
      projects: 10,
      onTime: 88,
      satisfaction: 4.6,
      trend: 'down',
    },
    {
      employee: 'David Brown',
      rating: 4.7,
      projects: 11,
      onTime: 94,
      satisfaction: 4.8,
      trend: 'up',
    },
    {
      employee: 'Lisa Chen',
      rating: 4.4,
      projects: 9,
      onTime: 86,
      satisfaction: 4.5,
      trend: 'up',
    },
  ];

  const views = [
    {
      id: 'directory',
      label: 'Directory',
      icon: Users,
      tooltip: 'Employee Directory',
    },
    {
      id: 'departments',
      label: 'Departments',
      icon: Building2,
      tooltip: 'Departments & Roles',
    },
    {
      id: 'attendance',
      label: 'Attendance',
      icon: CalendarDays,
      tooltip: 'Attendance & Leave',
    },
    {
      id: 'performance',
      label: 'Performance',
      icon: BarChart2,
      tooltip: 'Performance Reports',
    },
  ];

  const renderDirectory = () => (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {employees.map((emp, idx) => (
          <div
            key={emp.id}
            className="group border-2 border-gray-200 rounded-lg p-5 hover:border-black transition-all duration-300 cursor-pointer bg-white animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {emp.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {emp.name}
                  </h3>
                  <p className="text-xs text-gray-500">{emp.role}</p>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreVertical size={16} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-1.5 mb-4">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Briefcase size={14} />
                <span>{emp.department}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Mail size={14} />
                <span className="truncate">{emp.email}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Phone size={14} />
                <span>{emp.phone}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t-2 border-gray-100">
              <span
                className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                  emp.status === 'Active'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {emp.status}
              </span>
              <div className="flex gap-1">
                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                  <Eye size={14} className="text-gray-600" />
                </button>
                <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
                  <Edit size={14} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDepartments = () => (
    <div className="space-y-6 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          { value: '115', label: 'Total Employees' },
          { value: '6', label: 'Departments' },
          { value: '24', label: 'Job Roles' },
          { value: '₦75M', label: 'Total Budget' },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {departments.map((dept, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 hover:border-black transition-all duration-300 cursor-pointer bg-white group animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-10 h-10 ${dept.color} rounded-lg flex items-center justify-center text-white text-lg font-bold`}
              >
                {dept.name.charAt(0)}
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-gray-100 rounded transition-all">
                <MoreVertical size={16} className="text-gray-400" />
              </button>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-0.5">
              {dept.name}
            </h3>
            <p className="text-xs text-gray-500 mb-3">Head: {dept.head}</p>

            <div className="space-y-2 pt-3 border-t-2 border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Employees</span>
                <span className="font-semibold text-sm text-gray-900">
                  {dept.employees}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-600">Budget</span>
                <span className="font-semibold text-sm text-gray-900">
                  {dept.budget}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAttendance = () => (
    <div className="space-y-4 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {[
          {
            icon: CheckCircle2,
            value: '98',
            label: 'Present Today',
            color: 'text-gray-900',
          },
          {
            icon: XCircle,
            value: '5',
            label: 'On Leave',
            color: 'text-gray-500',
          },
          {
            icon: Clock,
            value: '12',
            label: 'Late Arrivals',
            color: 'text-gray-600',
          },
          {
            icon: CalendarDays,
            value: '8.5h',
            label: 'Avg. Hours',
            color: 'text-gray-700',
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 bg-white animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-center justify-between mb-1">
              <stat.icon className={stat.color} size={20} />
              <span className="text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
            </div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="border-2 border-gray-200 rounded-lg overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                {[
                  'Employee',
                  'Department',
                  'Status',
                  'Check In',
                  'Check Out',
                  'Hours',
                ].map((header) => (
                  <th
                    key={header}
                    className="px-5 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-gray-100">
              {attendance.map((record, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {record.employee}
                    </div>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap text-xs text-gray-600">
                    {record.department}
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span
                      className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                        record.status === 'Present'
                          ? 'bg-gray-900 text-white'
                          : record.status === 'Late'
                            ? 'bg-gray-300 text-gray-700'
                            : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap text-xs text-gray-600">
                    {record.checkIn}
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap text-xs text-gray-600">
                    {record.checkOut}
                  </td>
                  <td className="px-5 py-3 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">
                      {record.hours}h
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

  const renderPerformance = () => (
    <div className="space-y-4 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {performance.map((perf, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-200 rounded-lg p-5 hover:border-black transition-all duration-300 bg-white group animate-slideUp"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">
                  {perf.employee}
                </h3>
                <div className="flex items-center gap-1.5">
                  <Award className="text-gray-400" size={14} />
                  <span className="text-xs text-gray-500">
                    Rating: {perf.rating}/5.0
                  </span>
                </div>
              </div>
              {perf.trend === 'up' ? (
                <TrendingUp className="text-gray-900" size={18} />
              ) : (
                <TrendingDown className="text-gray-400" size={18} />
              )}
            </div>

            <div className="space-y-2.5">
              {[
                {
                  label: 'Projects Completed',
                  value: perf.projects,
                  max: 15,
                  color: 'bg-black',
                },
                {
                  label: 'On-Time Delivery',
                  value: perf.onTime,
                  max: 100,
                  color: 'bg-gray-700',
                  suffix: '%',
                },
                {
                  label: 'Client Satisfaction',
                  value: perf.satisfaction,
                  max: 5,
                  color: 'bg-gray-500',
                  suffix: '/5.0',
                },
              ].map((metric, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-600">{metric.label}</span>
                    <span className="font-semibold text-gray-900">
                      {metric.value}
                      {metric.suffix || ''}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`${metric.color} h-1.5 rounded-full transition-all duration-500`}
                      style={{ width: `${(metric.value / metric.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPayrole = () => {};

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="bg-white border-b-2 border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Staff Management
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  Manage your team and HR operations
                </p>
              </div>

              {/* View Switcher */}
              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
                {views.map((view) => (
                  <div key={view.id} className="relative group">
                    <button
                      onClick={() => setActiveView(view.id)}
                      className={`p-2 rounded transition-all ${
                        activeView === view.id
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
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <div className="relative group">
                <button
                  onClick={() => setShowLeaveDialog(true)}
                  className="p-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all"
                  title="Request Leave"
                >
                  <Calendar size={18} />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Request Leave
                </div>
              </div>

              <div className="relative group">
                <button
                  className="p-2 border-2 border-gray-200 rounded-lg hover:bg-black hover:text-white hover:border-black transition-all"
                  title="Export Data"
                >
                  <Download size={18} />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Export Data
                </div>
              </div>

              <div className="relative group">
                <button
                  onClick={() => setShowAddDialog(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all"
                  title="Add New Employee"
                >
                  <UserPlus size={18} />
                  <span className="text-sm font-medium">Add Employee</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-6">
            {activeView === 'directory' && renderDirectory()}
            {activeView === 'departments' && renderDepartments()}
            {activeView === 'attendance' && renderAttendance()}
            {activeView === 'performance' && renderPerformance()}
          </div>
        </div>
      </div>

      {/* Add Employee Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="sticky top-0 bg-white border-b-2 border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Add New Employee
              </h2>
              <button
                onClick={() => setShowAddDialog(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <form className="p-6 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      label: 'First Name',
                      type: 'text',
                      placeholder: 'Enter first name',
                    },
                    {
                      label: 'Last Name',
                      type: 'text',
                      placeholder: 'Enter last name',
                    },
                    {
                      label: 'Email',
                      type: 'email',
                      placeholder: 'email@company.com',
                    },
                    {
                      label: 'Phone',
                      type: 'tel',
                      placeholder: '+234 123 4567',
                    },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Employment Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Department
                    </label>
                    <select className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                      <option>Engineering</option>
                      <option>Design</option>
                      <option>Product</option>
                      <option>Marketing</option>
                      <option>Human Resources</option>
                    </select>
                  </div>
                  {[
                    {
                      label: 'Job Role',
                      type: 'text',
                      placeholder: 'e.g., Senior Developer',
                    },
                    { label: 'Start Date', type: 'date' },
                    {
                      label: 'Base Salary',
                      type: 'text',
                      placeholder: '₦500,000',
                    },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-xs font-medium text-gray-700 mb-1.5">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t-2 border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Add Employee
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddDialog(false)}
                  className="flex-1 border-2 border-gray-200 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Leave Request Dialog */}
      {showLeaveDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-lg w-full animate-scaleIn">
            <div className="border-b-2 border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Request Leave</h2>
              <button
                onClick={() => setShowLeaveDialog(false)}
                className="p-1 hover:bg-gray-100 rounded transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <form className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Leave Type
                </label>
                <select className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Personal Leave</option>
                  <option>Emergency Leave</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    End Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Reason
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Please provide a reason for your leave request..."
                />
              </div>

              <div className="flex gap-3 pt-4 border-t-2 border-gray-200">
                <button
                  type="submit"
                  className="flex-1 bg-black text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowLeaveDialog(false)}
                  className="flex-1 border-2 border-gray-200 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
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

export default StaffManagement;
