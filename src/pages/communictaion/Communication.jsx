import { useState } from 'react';
import {
    MessageSquare,
    Plus,
    Search,
    Send,
    Phone,
    Video,
    MoreVertical,
    Paperclip,
    Smile,
    X,
    Download,
    Users,
    Hash,
    Bell,
    UserCircle,
} from 'lucide-react';

const Communication = () => {
    const [activeView, setActiveView] = useState('messages');
    const [selectedConversation, setSelectedConversation] = useState(1);
    const [messageInput, setMessageInput] = useState('');
    const [showNewChat, setShowNewChat] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const views = [
        {
            id: 'messages',
            label: 'Direct Messages',
            icon: MessageSquare,
            tooltip: 'Direct Messages',
        },
        {
            id: 'channels',
            label: 'Channels',
            icon: Hash,
            tooltip: 'Channels',
        },
        {
            id: 'groups',
            label: 'Groups',
            icon: Users,
            tooltip: 'Groups',
        },
        {
            id: 'announcements',
            label: 'Announcements',
            icon: Bell,
            tooltip: 'Announcements',
        },
    ];

    // Mock data for conversations
    const conversations = [
        {
            id: 1,
            name: 'Ahmed Ibrahim',
            avatar: '👨‍💼',
            lastMessage: 'The drone telemetry data looks good',
            timestamp: '2 mins',
            unread: 3,
            status: 'online',
            role: 'Project Lead',
        },
        {
            id: 2,
            name: 'Fatima Hassan',
            avatar: '👩‍💼',
            lastMessage: 'Meeting scheduled for tomorrow',
            timestamp: '1 hour',
            unread: 0,
            status: 'online',
            role: 'HR Manager',
        },
        {
            id: 3,
            name: 'Mohammed Ali',
            avatar: '👨‍🔧',
            lastMessage: 'Equipment maintenance complete',
            timestamp: '3 hours',
            unread: 1,
            status: 'away',
            role: 'Technician',
        },
        {
            id: 4,
            name: 'Aisha Mohammed',
            avatar: '👩‍💻',
            lastMessage: 'Code review completed',
            timestamp: '5 hours',
            unread: 0,
            status: 'offline',
            role: 'Developer',
        },
        {
            id: 5,
            name: 'Hassan Abdullah',
            avatar: '👨‍💻',
            lastMessage: 'Server status is stable',
            timestamp: 'yesterday',
            unread: 0,
            status: 'online',
            role: 'System Admin',
        },
    ];

    const channels = [
        {
            id: 1,
            name: 'general',
            description: 'General discussion and announcements',
            members: 45,
            unread: 5,
        },
        {
            id: 2,
            name: 'drone-operations',
            description: 'UAV flight operations and telemetry',
            members: 12,
            unread: 0,
        },
        {
            id: 3,
            name: 'engineering',
            description: 'Engineering and technical discussions',
            members: 28,
            unread: 2,
        },
        {
            id: 4,
            name: 'project-updates',
            description: 'Project status and milestone updates',
            members: 35,
            unread: 8,
        },
    ];

    const groups = [
        {
            id: 1,
            name: 'R&D Team',
            avatar: '🔬',
            members: 8,
            lastMessage: 'Sprint planning meeting notes shared',
            unread: 2,
        },
        {
            id: 2,
            name: 'GIS Department',
            avatar: '🗺️',
            members: 6,
            lastMessage: 'Survey data collection schedule',
            unread: 0,
        },
        {
            id: 3,
            name: 'Management',
            avatar: '👔',
            members: 5,
            lastMessage: 'Q4 strategy meeting concluded',
            unread: 0,
        },
    ];

    const announcements = [
        {
            id: 1,
            title: 'System Maintenance Scheduled',
            date: '2024-12-21',
            author: 'IT Department',
            content: 'Scheduled maintenance on database servers this weekend',
            priority: 'high',
        },
        {
            id: 2,
            title: 'New Safety Protocol Implementation',
            date: '2024-12-20',
            author: 'HR Department',
            content: 'Updated safety protocols effective immediately',
            priority: 'high',
        },
        {
            id: 3,
            title: 'Holiday Schedule',
            date: '2024-12-19',
            author: 'Administration',
            content: 'Office will be closed on December 25-26',
            priority: 'normal',
        },
        {
            id: 4,
            title: 'Project Milestone Achieved',
            date: '2024-12-18',
            author: 'Project Manager',
            content: 'Autonomous Navigation System reached 75% completion',
            priority: 'normal',
        },
    ];

    const messages = [
        {
            id: 1,
            sender: 'Ahmed Ibrahim',
            avatar: '👨‍💼',
            content: 'Hi! I wanted to check on the drone telemetry data from yesterday flight.',
            timestamp: '10:30 AM',
            isOwn: false,
        },
        {
            id: 2,
            sender: 'You',
            avatar: '👤',
            content: 'Good morning Ahmed! The data looks good. All systems performed within expected parameters.',
            timestamp: '10:35 AM',
            isOwn: true,
        },
        {
            id: 3,
            sender: 'Ahmed Ibrahim',
            avatar: '👨‍💼',
            content: 'The drone telemetry data looks good. Can you share the detailed report?',
            timestamp: '10:40 AM',
            isOwn: false,
        },
        {
            id: 4,
            sender: 'You',
            avatar: '👤',
            content: "I'll send the report in the next email. Check your inbox in a few minutes.",
            timestamp: '10:42 AM',
            isOwn: true,
        },
    ];

    const renderMessages = () => (
        <div className="animate-fadeIn flex h-full gap-4">
            {/* Conversations List */}
            <div className="w-80 border-2 border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
                <div className="p-4 border-b-2 border-gray-200">
                    <div className="relative mb-3">
                        <Search size={16} className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-sm"
                        />
                    </div>
                    <button
                        onClick={() => setShowNewChat(true)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                        <Plus size={16} />
                        New Message
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-1 p-2">
                    {conversations.map((conv) => (
                        <button
                            key={conv.id}
                            onClick={() => setSelectedConversation(conv.id)}
                            className={`w-full text-left p-3 rounded-lg transition-all ${selectedConversation === conv.id
                                ? 'bg-gray-900 text-white'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <div className="relative flex-shrink-0">
                                        <UserCircle size={32} className={`${selectedConversation === conv.id ? 'text-gray-300' : 'text-gray-400'}`} />
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 ${conv.status === 'online' ? 'bg-green-500' : conv.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'} border-white`}></div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">{conv.name}</p>
                                        <p className={`text-xs ${selectedConversation === conv.id ? 'text-gray-300' : 'text-gray-500'}`}>
                                            {conv.role}
                                        </p>
                                    </div>
                                </div>
                                {conv.unread > 0 && (
                                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {conv.unread}
                                    </span>
                                )}
                            </div>
                            <p className={`text-xs truncate ${selectedConversation === conv.id ? 'text-gray-300' : 'text-gray-600'}`}>
                                {conv.lastMessage}
                            </p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 border-2 border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
                {/* Chat Header */}
                <div className="p-4 border-b-2 border-gray-200 flex items-center justify-between bg-gray-50">
                    <div className="flex items-center gap-3">
                        <div className="relative flex-shrink-0">
                            <UserCircle size={48} className="text-gray-400" />
                            <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 ${conversations[selectedConversation - 1]?.status === 'online' ? 'bg-green-500' : conversations[selectedConversation - 1]?.status === 'away' ? 'bg-yellow-500' : 'bg-gray-400'} border-white`}></div>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">{conversations[selectedConversation - 1]?.name}</h3>
                            <p className="text-xs text-gray-600 capitalize">{conversations[selectedConversation - 1]?.status}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            <Phone size={18} className="text-gray-700" />
                        </button>
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            <Video size={18} className="text-gray-700" />
                        </button>
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                            <MoreVertical size={18} className="text-gray-700" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`flex gap-3 ${msg.isOwn ? 'flex-row-reverse' : ''}`}
                        >
                            <UserCircle size={32} className="text-gray-400 flex-shrink-0" />
                            <div className={`flex flex-col ${msg.isOwn ? 'items-end' : 'items-start'}`}>
                                <p className={`text-xs ${msg.isOwn ? 'text-right text-gray-500' : 'text-left text-gray-500'} mb-1`}>
                                    {msg.timestamp}
                                </p>
                                <div
                                    className={`px-4 py-2 rounded-lg max-w-sm ${msg.isOwn
                                        ? 'bg-black text-white rounded-br-none'
                                        : 'bg-gray-100 text-gray-900 rounded-bl-none'
                                        }`}
                                >
                                    <p className="text-sm">{msg.content}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t-2 border-gray-200 bg-gray-50">
                    <div className="flex items-end gap-2">
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0">
                            <Paperclip size={18} className="text-gray-700" />
                        </button>
                        <input
                            type="text"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors text-sm"
                        />
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0">
                            <Smile size={18} className="text-gray-700" />
                        </button>
                        <button className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors flex-shrink-0">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderChannels = () => (
        <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {channels.map((channel) => (
                    <div
                        key={channel.id}
                        className="border-2 border-gray-200 rounded-lg p-5 bg-white hover:border-gray-900 hover:shadow-lg transition-all cursor-pointer"
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                    <Hash size={16} />
                                    {channel.name}
                                </h3>
                                <p className="text-xs text-gray-600 mt-1">{channel.description}</p>
                            </div>
                            {channel.unread > 0 && (
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {channel.unread}
                                </span>
                            )}
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-600">
                            <span>{channel.members} members</span>
                            <button className="px-3 py-1 border-2 border-gray-200 rounded hover:border-black transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderGroups = () => (
        <div className="space-y-6 animate-fadeIn">
            <div className="border-2 border-gray-200 rounded-lg bg-white overflow-hidden">
                <div className="p-5 border-b-2 border-gray-200">
                    <h3 className="text-sm font-bold text-gray-900">Group Conversations</h3>
                </div>

                <div className="divide-y divide-gray-200">
                    {groups.map((group) => (
                        <div
                            key={group.id}
                            className="p-5 hover:bg-gray-50 transition-colors cursor-pointer border-0"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-4">
                                    <UserCircle size={40} className="text-gray-400 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{group.name}</h4>
                                        <p className="text-xs text-gray-600">{group.members} members</p>
                                    </div>
                                </div>
                                {group.unread > 0 && (
                                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                        {group.unread}
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-gray-600 ml-14">{group.lastMessage}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderAnnouncements = () => (
        <div className="space-y-6 animate-fadeIn">
            <div className="space-y-4">
                {announcements.map((announcement) => (
                    <div
                        key={announcement.id}
                        className={`border-2 rounded-lg p-5 ${announcement.priority === 'high'
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-200 bg-white'
                            }`}
                    >
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className={`font-bold ${announcement.priority === 'high' ? 'text-red-900' : 'text-gray-900'}`}>
                                    {announcement.title}
                                </h3>
                                <p className={`text-xs mt-1 ${announcement.priority === 'high' ? 'text-red-700' : 'text-gray-600'}`}>
                                    {announcement.author} • {announcement.date}
                                </p>
                            </div>
                            <span
                                className={`px-3 py-1 text-xs font-medium rounded-full ${announcement.priority === 'high'
                                    ? 'bg-red-200 text-red-700'
                                    : 'bg-gray-200 text-gray-700'
                                    }`}
                            >
                                {announcement.priority === 'high' ? 'Important' : 'Normal'}
                            </span>
                        </div>
                        <p className={`text-sm ${announcement.priority === 'high' ? 'text-red-800' : 'text-gray-700'}`}>
                            {announcement.content}
                        </p>
                    </div>
                ))}
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
                                        Communication Hub
                                    </h1>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        Messaging, channels, and team announcements
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
                                        title="Download History"
                                    >
                                        <Download size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium sm:hidden">Download</span>
                                        <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                            Download History
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setShowNewChat(true)}
                                        className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-200 font-medium"
                                        title="New Message"
                                    >
                                        <Plus size={18} className="flex-shrink-0" />
                                        <span className="text-sm font-medium hidden lg:inline">New Message</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 mt-8">
                    <div className="max-w-7xl mx-auto px-6 py-6 h-[calc(100%-2rem)]">
                        {activeView === 'messages' && renderMessages()}
                        {activeView === 'channels' && renderChannels()}
                        {activeView === 'groups' && renderGroups()}
                        {activeView === 'announcements' && renderAnnouncements()}
                    </div>
                </div>
            </div>

            {/* New Chat Modal */}
            {showNewChat && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b-2 border-gray-200 flex items-center justify-between sticky top-0 bg-white">
                            <h2 className="text-xl font-bold text-gray-900">Start New Conversation</h2>
                            <button
                                onClick={() => setShowNewChat(false)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label htmlFor="recipient" className="block text-sm font-medium text-gray-900 mb-2">
                                    Select Recipient
                                </label>
                                <input
                                    id="recipient"
                                    type="text"
                                    placeholder="Search team members..."
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="message-type" className="block text-sm font-medium text-gray-900 mb-2">
                                    Message Type
                                </label>
                                <select id="message-type" className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors">
                                    <option>Direct Message</option>
                                    <option>Group Message</option>
                                    <option>Channel Message</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="initial-message" className="block text-sm font-medium text-gray-900 mb-2">
                                    Initial Message (Optional)
                                </label>
                                <textarea
                                    id="initial-message"
                                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                                    rows="4"
                                    placeholder="Type your message..."
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-6 border-t-2 border-gray-200 flex gap-3 bg-gray-50">
                            <button
                                onClick={() => setShowNewChat(false)}
                                className="flex-1 px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
                            >
                                Cancel
                            </button>
                            <button className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                                Start Conversation
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

export default Communication;
