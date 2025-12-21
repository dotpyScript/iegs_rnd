import { useState } from 'react';
import {
    Calendar,
    Users,
    FileText,
    Mail,
    Plus,
    Download,
    X,
    Clock,
    MapPin,
    Video,
    UserCheck,
    Trash2,
    Eye,
    UserCircle,
} from 'lucide-react';

const Meeting = () => {
    const [activeView, setActiveView] = useState('meetings');
    const [showScheduleModal, setShowScheduleModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);

    const views = [
        {
            id: 'meetings',
            label: 'Meeting Scheduler',
            icon: Calendar,
            tooltip: 'Meeting Scheduler',
        },
        {
            id: 'files',
            label: 'Recent Files Shared',
            icon: FileText,
            tooltip: 'Recent Files Shared',
        },
        {
            id: 'broadcasts',
            label: 'Email Broadcast',
            icon: Mail,
            tooltip: 'Email Broadcast',
        },
    ];

    // Mock data for meetings
    const meetings = [
        {
            id: 1,
            title: 'Project Kickoff Meeting',
            date: '2024-12-22',
            time: '10:00 AM',
            duration: '1 hour',
            location: 'Conference Room A',
            organizer: 'Ahmed Ibrahim',
            members: 8,
            attendees: [
                { name: 'Ahmed Ibrahim', avatar: '👨‍💼', status: 'confirmed' },
                { name: 'Fatima Hassan', avatar: '👩‍💼', status: 'confirmed' },
                { name: 'Mohammed Ali', avatar: '👨‍🔧', status: 'pending' },
                { name: 'Aisha Mohammed', avatar: '👩‍💻', status: 'confirmed' },
            ],
            status: 'upcoming',
        },
        {
            id: 2,
            title: 'Weekly Standup',
            date: '2024-12-20',
            time: '2:00 PM',
            duration: '30 mins',
            location: 'Virtual - Teams',
            organizer: 'Hassan Abdullah',
            members: 12,
            attendees: [
                { name: 'Hassan Abdullah', avatar: '👨‍💻', status: 'confirmed' },
                { name: 'Sarah Wilson', avatar: '👩‍💼', status: 'confirmed' },
                { name: 'John Doe', avatar: '👨‍💼', status: 'confirmed' },
            ],
            status: 'completed',
        },
        {
            id: 3,
            title: 'Budget Review Meeting',
            date: '2024-12-25',
            time: '3:30 PM',
            duration: '2 hours',
            location: 'Executive Suite',
            organizer: 'Management',
            members: 6,
            attendees: [
                { name: 'Ahmed Ibrahim', avatar: '👨‍💼', status: 'confirmed' },
                { name: 'Hassan Abdullah', avatar: '👨‍💻', status: 'confirmed' },
            ],
            status: 'upcoming',
        },
        {
            id: 4,
            title: 'Drone Flight Operations Review',
            date: '2024-12-21',
            time: '11:00 AM',
            duration: '1.5 hours',
            location: 'R&D Lab',
            organizer: 'R&D Team Lead',
            members: 9,
            attendees: [
                { name: 'Mohammed Ali', avatar: '👨‍🔧', status: 'confirmed' },
                { name: 'Aisha Mohammed', avatar: '👩‍💻', status: 'confirmed' },
            ],
            status: 'upcoming',
        },
    ];

    // Mock data for shared files
    const sharedFiles = [
        {
            id: 1,
            name: 'Q4 Financial Report.pdf',
            size: '2.4 MB',
            sharedBy: 'Fatima Hassan',
            date: '2024-12-20',
            type: 'PDF',
            sharedWith: 15,
        },
        {
            id: 2,
            name: 'Drone Telemetry Data.xlsx',
            size: '5.8 MB',
            sharedBy: 'Mohammed Ali',
            date: '2024-12-19',
            type: 'Excel',
            sharedWith: 8,
        },
        {
            id: 3,
            name: 'Project Proposal v3.docx',
            size: '1.2 MB',
            sharedBy: 'Ahmed Ibrahim',
            date: '2024-12-18',
            type: 'Word',
            sharedWith: 12,
        },
        {
            id: 4,
            name: 'Meeting Minutes - Dec 15.txt',
            size: '0.3 MB',
            sharedBy: 'Hassan Abdullah',
            date: '2024-12-15',
            type: 'Text',
            sharedWith: 25,
        },
        {
            id: 5,
            name: 'GIS Mapping Data.zip',
            size: '12.5 MB',
            sharedBy: 'Aisha Mohammed',
            date: '2024-12-14',
            type: 'Archive',
            sharedWith: 6,
        },
    ];

    // Mock data for broadcasts
    const broadcasts = [
        {
            id: 1,
            subject: 'System Maintenance Notice',
            date: '2024-12-21',
            time: '09:00 AM',
            recipients: 120,
            status: 'sent',
            content: 'Server maintenance scheduled for this weekend. Expected downtime: 2 hours.',
            sender: 'IT Department',
        },
        {
            id: 2,
            subject: 'Holiday Schedule Announcement',
            date: '2024-12-20',
            time: '02:30 PM',
            recipients: 150,
            status: 'sent',
            content: 'Office will be closed December 25-26 for holidays. Happy holidays!',
            sender: 'HR Department',
        },
        {
            id: 3,
            subject: 'New Safety Protocol Implementation',
            date: '2024-12-19',
            time: '10:15 AM',
            recipients: 145,
            status: 'sent',
            content: 'Updated safety protocols are now in effect. Please review the attached guidelines.',
            sender: 'Safety Officer',
        },
        {
            id: 4,
            subject: 'Project Milestone Achievement',
            date: '2024-12-18',
            time: '04:00 PM',
            recipients: 165,
            status: 'scheduled',
            content: 'Autonomous Navigation System reached 75% completion. Congratulations team!',
            sender: 'Project Manager',
        },
    ];

    const renderMeetings = () => (
        <div className="space-y-6 animate-fadeIn">
            {/* Meeting Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Meetings', value: meetings.length, icon: Calendar, color: 'bg-blue-50' },
                    { label: 'Upcoming', value: meetings.filter(m => m.status === 'upcoming').length, icon: Clock, color: 'bg-green-50' },
                    { label: 'Completed', value: meetings.filter(m => m.status === 'completed').length, icon: UserCheck, color: 'bg-purple-50' },
                    { label: 'Total Participants', value: '48', icon: Users, color: 'bg-orange-50' },
                ].map((stat, idx) => (
                    <div key={idx} className={`border-2 border-gray-200 rounded-lg p-5 ${stat.color}`}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-600">
                                <stat.icon size={16} className="inline mr-1" />
                                {stat.label}
                            </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    </div>
                ))}
            </div>

            {/* Meetings List */}
            <div className="space-y-4">
                {meetings.map((meeting) => (
                    <div
                        key={meeting.id}
                        className="border-2 border-gray-200 rounded-lg p-6 bg-white hover:border-gray-900 hover:shadow-lg transition-all"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-gray-900 mb-2">{meeting.title}</h3>
                                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {meeting.date}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {meeting.time} ({meeting.duration})
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        {meeting.location}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users size={14} />
                                        {meeting.members} members
                                    </div>
                                </div>
                            </div>
                            <span
                                className={`px-3 py-1 text-xs font-medium rounded-full flex-shrink-0 ${meeting.status === 'upcoming'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-green-100 text-green-700'
                                    }`}
                            >
                                {meeting.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                            </span>
                        </div>

                        <div className="mb-4 pt-4 border-t border-gray-200">
                            <p className="text-xs font-semibold text-gray-700 mb-3">Attendees ({meeting.attendees.length}/{meeting.members})</p>
                            <div className="flex flex-wrap gap-4">
                                {meeting.attendees.map((attendee, idx) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <div className="relative">
                                            <UserCircle size={40} className="text-gray-400 bg-gray-100 rounded-full p-0" />
                                            {attendee.status === 'confirmed' && (
                                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                                    <span className="text-white text-xs">✓</span>
                                                </div>
                                            )}
                                            {attendee.status === 'pending' && (
                                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center">
                                                    <span className="text-white text-xs">!</span>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-gray-900">{attendee.name}</p>
                                            <p className={`text-xs ${attendee.status === 'confirmed' ? 'text-green-600' : 'text-yellow-600'
                                                }`}>
                                                {attendee.status === 'confirmed' ? '✓ Confirmed' : 'Pending'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-gray-200">
                            <button className="flex-1 px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all flex items-center justify-center gap-1">
                                <Video size={14} />
                                Join Meeting
                            </button>
                            <button className="flex-1 px-3 py-2 text-xs font-medium border-2 border-gray-200 rounded-lg hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderFiles = () => (
        <div className="space-y-6 animate-fadeIn">
            <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
                <div className="p-5 border-b-2 border-gray-200 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900">Shared Files</h3>
                    <button
                        onClick={() => setShowShareModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                        <Plus size={18} />
                        Share File
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b-2 border-gray-200 bg-gray-50">
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">File Name</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Type</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Size</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Shared By</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Date</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Shared With</th>
                                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-900">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sharedFiles.map((file) => (
                                <tr key={file.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                    <td className="px-5 py-3 text-sm font-medium text-gray-900 flex items-center gap-2">
                                        <FileText size={16} className="text-gray-600" />
                                        {file.name}
                                    </td>
                                    <td className="px-5 py-3 text-sm text-gray-700">
                                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                                            {file.type}
                                        </span>
                                    </td>
                                    <td className="px-5 py-3 text-sm text-gray-700">{file.size}</td>
                                    <td className="px-5 py-3 text-sm text-gray-700">{file.sharedBy}</td>
                                    <td className="px-5 py-3 text-sm text-gray-700">{file.date}</td>
                                    <td className="px-5 py-3 text-sm font-semibold text-gray-900">
                                        <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                                            {file.sharedWith} people
                                        </span>
                                    </td>
                                    <td className="px-5 py-3 text-sm">
                                        <div className="flex gap-2">
                                            <button
                                                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                                                title="Download"
                                            >
                                                <Download size={16} className="text-gray-700" />
                                            </button>
                                            <button
                                                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} className="text-red-600" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderBroadcasts = () => (
        <div className="space-y-6 animate-fadeIn">
            <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
                <div className="p-5 border-b-2 border-gray-200 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900">Email Broadcasts</h3>
                    <button
                        onClick={() => setShowEmailModal(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                        <Plus size={18} />
                        Email Broadcast
                    </button>
                </div>

                <div className="space-y-3 p-5">
                    {broadcasts.map((broadcast) => (
                        <div
                            key={broadcast.id}
                            className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-900 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-gray-900 mb-1">{broadcast.subject}</h4>
                                    <p className="text-xs text-gray-600">From: {broadcast.sender}</p>
                                </div>
                                <span
                                    className={`px-3 py-1 text-xs font-medium rounded-full flex-shrink-0 ${broadcast.status === 'sent'
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-blue-100 text-blue-700'
                                        }`}
                                >
                                    {broadcast.status === 'sent' ? 'Sent' : 'Scheduled'}
                                </span>
                            </div>

                            <p className="text-sm text-gray-700 mb-3 p-3 bg-gray-50 rounded border border-gray-200">
                                {broadcast.content}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-gray-600">
                                    <span>📅 {broadcast.date} at {broadcast.time}</span>
                                    <span>👥 Sent to {broadcast.recipients} recipients</span>
                                </div>
                                <button
                                    className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                                    title="View Details"
                                >
                                    <Eye size={16} className="text-gray-700" />
                                </button>
                            </div>
                        </div>
                    ))}
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
                                    <h1 className="text-xl font-bold text-gray-900">Meeting & Collaboration</h1>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Meetings, shared files, and team broadcasts
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
                                                className={`p-2 rounded transition-all whitespace-nowrap ${activeView === view.id ? 'bg-white text-black' : 'text-gray-600 hover:text-gray-900'
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

                                    {activeView === 'meetings' && (
                                        <button
                                            onClick={() => setShowScheduleModal(true)}
                                            className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium"
                                            title="Schedule Meeting"
                                        >
                                            <Plus size={18} className="flex-shrink-0" />
                                            <span className="text-sm font-medium hidden lg:inline">Schedule Meeting</span>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 mt-8">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        {activeView === 'meetings' && renderMeetings()}
                        {activeView === 'files' && renderFiles()}
                        {activeView === 'broadcasts' && renderBroadcasts()}
                    </div>
                </div>
            </div>

            {/* Schedule Meeting Modal */}
            {showScheduleModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                            <h2 className="text-xl font-bold text-gray-900">Schedule Meeting</h2>
                            <button
                                onClick={() => setShowScheduleModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label htmlFor="meeting-title" className="block text-sm font-medium text-gray-900 mb-2">
                                    Meeting Title
                                </label>
                                <input
                                    id="meeting-title"
                                    type="text"
                                    placeholder="Enter meeting title"
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="meeting-date" className="block text-sm font-medium text-gray-900 mb-2">
                                        Date
                                    </label>
                                    <input
                                        id="meeting-date"
                                        type="date"
                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="meeting-time" className="block text-sm font-medium text-gray-900 mb-2">
                                        Time
                                    </label>
                                    <input
                                        id="meeting-time"
                                        type="time"
                                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="meeting-location" className="block text-sm font-medium text-gray-900 mb-2">
                                    Location / Meeting Link
                                </label>
                                <input
                                    id="meeting-location"
                                    type="text"
                                    placeholder="Conference Room or Virtual Link"
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="attendees" className="block text-sm font-medium text-gray-900 mb-2">
                                    Add Attendees
                                </label>
                                <input
                                    id="attendees"
                                    type="text"
                                    placeholder="Search and add team members"
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
                                    placeholder="Meeting agenda and notes"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
                            <button
                                onClick={() => setShowScheduleModal(false)}
                                className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                                Schedule Meeting
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Share File Modal */}
            {showShareModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                            <h2 className="text-xl font-bold text-gray-900">Share File</h2>
                            <button
                                onClick={() => setShowShareModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-900 mb-2">
                                    Select File
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-black transition-colors">
                                    <FileText size={32} className="mx-auto text-gray-400 mb-2" />
                                    <p className="text-sm font-medium text-gray-700">Click to upload or drag and drop</p>
                                    <p className="text-xs text-gray-500">PDF, Word, Excel, Images up to 50MB</p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="share-with" className="block text-sm font-medium text-gray-900 mb-2">
                                    Share With
                                </label>
                                <input
                                    id="share-with"
                                    type="text"
                                    placeholder="Search team members or groups"
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="file-description" className="block text-sm font-medium text-gray-900 mb-2">
                                    File Description
                                </label>
                                <textarea
                                    id="file-description"
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                    rows="3"
                                    placeholder="Describe what this file contains"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
                            <button
                                onClick={() => setShowShareModal(false)}
                                className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                                Share File
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Email Broadcast Modal */}
            {showEmailModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                            <h2 className="text-xl font-bold text-gray-900">Email Broadcast</h2>
                            <button
                                onClick={() => setShowEmailModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label htmlFor="broadcast-to" className="block text-sm font-medium text-gray-900 mb-2">
                                    Send To
                                </label>
                                <select id="broadcast-to" className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                                    <option>All Staff</option>
                                    <option>Department</option>
                                    <option>Custom Group</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="email-subject" className="block text-sm font-medium text-gray-900 mb-2">
                                    Email Subject
                                </label>
                                <input
                                    id="email-subject"
                                    type="text"
                                    placeholder="Enter email subject"
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email-content" className="block text-sm font-medium text-gray-900 mb-2">
                                    Message Content
                                </label>
                                <textarea
                                    id="email-content"
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                    rows="6"
                                    placeholder="Compose your broadcast message"
                                ></textarea>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="send-time" className="border-2 border-gray-200 rounded" />
                                    <span className="text-sm text-gray-700">Send Now</span>
                                </label>
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="send-time" className="border-2 border-gray-200 rounded" />
                                    <span className="text-sm text-gray-700">Schedule For Later</span>
                                </label>
                            </div>
                        </div>
                        <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
                            <button
                                onClick={() => setShowEmailModal(false)}
                                className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                                Send Broadcast
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

export default Meeting;
