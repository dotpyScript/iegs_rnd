import { useState } from 'react';
import { Home, FileText, Calendar, Users, MessageSquare, ChevronDown, ChevronRight, Star, Share2, Hash, LayoutDashboard, BarChart3, CheckSquare, FolderKanban, Clock, User, Settings, Bell } from 'lucide-react';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [expandedSections, setExpandedSections] = useState({
    favourite: true,
    shared: true,
    vertexPhaw: true,
    projects: true,
    myProjects: true,
    team: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Menu content for each icon
  const menuContent = {
    home: {
      title: 'Dashboard',
      sections: [
        {
          id: 'favourite',
          label: 'FAVOURITE',
          items: [
            { icon: Star, label: 'Nova Aginz', color: 'text-red-400' },
            { icon: Star, label: 'Atlas Dtw', color: 'text-blue-400' }
          ]
        },
        {
          id: 'shared',
          label: 'SHARED',
          items: [
            { icon: Share2, label: 'NexusLaw', color: 'text-gray-400' },
            { icon: Share2, label: 'Prism Joy', color: 'text-gray-400' },
            {
              icon: Share2,
              label: 'Vertex Phaw',
              color: 'text-teal-600',
              active: true,
              submenu: [
                { icon: Hash, label: 'Mobile app' },
                { icon: Hash, label: 'Website' },
                { icon: Hash, label: 'Logo Design' },
                { icon: Hash, label: '3D Design' },
                { icon: Hash, label: 'Wireframe' }
              ]
            }
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      sections: [
        {
          id: 'projects',
          label: 'ALL PROJECTS',
          items: [
            { icon: FolderKanban, label: 'Active Projects', badge: '12', color: 'text-teal-600' },
            { icon: Clock, label: 'In Progress', badge: '8', color: 'text-orange-500' },
            { icon: CheckSquare, label: 'Completed', badge: '24', color: 'text-green-500' }
          ]
        },
        {
          id: 'myProjects',
          label: 'MY PROJECTS',
          items: [
            { icon: Hash, label: 'E-commerce Website', color: 'text-purple-500' },
            { icon: Hash, label: 'Mobile Banking App', color: 'text-blue-500' },
            { icon: Hash, label: 'Dashboard Redesign', color: 'text-pink-500' }
          ]
        }
      ]
    },
    calendar: {
      title: 'Calendar',
      sections: [
        {
          id: 'events',
          label: 'UPCOMING EVENTS',
          items: [
            { icon: Calendar, label: 'Team Meetings', badge: '3', color: 'text-orange-500' },
            { icon: Clock, label: 'Deadlines', badge: '5', color: 'text-red-500' },
            { icon: Bell, label: 'Reminders', badge: '7', color: 'text-blue-500' }
          ]
        },
        {
          id: 'myCalendar',
          label: 'MY CALENDAR',
          items: [
            { icon: Hash, label: 'Designer team meeting', color: 'text-orange-400' },
            { icon: Hash, label: 'Developer team meeting', color: 'text-teal-500' },
            { icon: Hash, label: 'Client presentation', color: 'text-purple-500' }
          ]
        }
      ]
    },
    team: {
      title: 'Team',
      sections: [
        {
          id: 'team',
          label: 'TEAM MEMBERS',
          items: [
            { icon: Users, label: 'Developers', badge: '8', color: 'text-teal-600' },
            { icon: Users, label: 'Designers', badge: '5', color: 'text-orange-500' },
            { icon: Users, label: 'Project Managers', badge: '3', color: 'text-purple-500' }
          ]
        },
        {
          id: 'departments',
          label: 'DEPARTMENTS',
          items: [
            { icon: Hash, label: 'Engineering', color: 'text-blue-500' },
            { icon: Hash, label: 'Design', color: 'text-pink-500' },
            { icon: Hash, label: 'Marketing', color: 'text-green-500' }
          ]
        }
      ]
    },
    messages: {
      title: 'Messages',
      sections: [
        {
          id: 'messages',
          label: 'CONVERSATIONS',
          items: [
            { icon: MessageSquare, label: 'Direct Messages', badge: '12', color: 'text-blue-500' },
            { icon: Users, label: 'Team Chats', badge: '5', color: 'text-teal-500' },
            { icon: Bell, label: 'Mentions', badge: '3', color: 'text-red-500' }
          ]
        },
        {
          id: 'channels',
          label: 'CHANNELS',
          items: [
            { icon: Hash, label: 'general', color: 'text-gray-500' },
            { icon: Hash, label: 'development', color: 'text-teal-500' },
            { icon: Hash, label: 'design', color: 'text-orange-500' }
          ]
        }
      ]
    }
  };

  const sidebarIcons = [
    { id: 'home', icon: Home, label: 'Dashboard' },
    { id: 'projects', icon: FileText, label: 'Projects' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
  ];

  const currentMenu = menuContent[activeMenu];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Icon Sidebar */}
      <div className="w-14 bg-teal-600 flex flex-col items-center py-4 space-y-6 relative">
        {/* Logo */}
        <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
          Y
        </div>
        
        {/* Navigation Icons */}
        {sidebarIcons.map((item) => (
          <div key={item.id} className="relative w-full flex justify-center">
            <button
              onClick={() => setActiveMenu(item.id)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10 ${
                activeMenu === item.id 
                  ? 'bg-white text-teal-600' 
                  : 'text-teal-200 hover:bg-teal-700 hover:text-white'
              }`}
              title={item.label}
            >
              <item.icon size={20} />
            </button>
            
            {/* Curved extension to submenu */}
            {activeMenu === item.id && (
              <div className="absolute right-0 top-0 h-10 w-6 overflow-hidden">
                <div className="absolute right-0 top-0 h-10 w-12 bg-white rounded-l-full"></div>
              </div>
            )}
            
            {/* Top curve notch */}
            {activeMenu === item.id && (
              <div className="absolute right-0 -top-6 h-6 w-6 overflow-hidden">
                <div className="absolute right-0 bottom-0 h-12 w-12 bg-teal-600 rounded-br-full"></div>
              </div>
            )}
            
            {/* Bottom curve notch */}
            {activeMenu === item.id && (
              <div className="absolute right-0 -bottom-6 h-6 w-6 overflow-hidden">
                <div className="absolute right-0 top-0 h-12 w-12 bg-teal-600 rounded-tr-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Main Sidebar Content */}
      <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto relative">
        {/* Rounded edge on submenu side */}
        <div className="absolute left-0 top-0 w-3 h-full pointer-events-none">
          {sidebarIcons.map((item, index) => {
            const topPosition = 64 + (index * 56); // Calculate position based on icon spacing
            return activeMenu === item.id ? (
              <div
                key={item.id}
                className="absolute w-3 h-10 bg-white rounded-l-lg transition-all duration-300"
                style={{ top: `${topPosition}px` }}
              ></div>
            ) : null;
          })}
        </div>
        
        <div className="p-4 pl-6">
          {/* Menu Title */}
          <h2 className="text-lg font-semibold text-gray-800 mb-6">{currentMenu.title}</h2>

          {/* Sections */}
          {currentMenu.sections.map((section) => (
            <div key={section.id} className="mb-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 w-full hover:text-gray-700"
              >
                {expandedSections[section.id] ? (
                  <ChevronDown size={14} className="mr-1" />
                ) : (
                  <ChevronRight size={14} className="mr-1" />
                )}
                {section.label}
              </button>
              
              {expandedSections[section.id] && (
                <div className="space-y-1 ml-2">
                  {section.items.map((item, index) => (
                    <div key={index}>
                      <div
                        className={`flex items-center justify-between px-3 py-2 text-sm rounded-md cursor-pointer ${
                          item.active
                            ? 'bg-teal-50 text-teal-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => item.submenu && toggleSection(item.label.toLowerCase().replace(/\s+/g, ''))}
                      >
                        <div className="flex items-center flex-1">
                          <item.icon size={14} className={`mr-2 ${item.color || 'text-gray-400'}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="ml-2 px-2 py-0.5 text-xs bg-gray-200 text-gray-700 rounded-full">
                            {item.badge}
                          </span>
                        )}
                        {item.submenu && (
                          expandedSections[item.label.toLowerCase().replace(/\s+/g, '')] ? (
                            <ChevronDown size={14} />
                          ) : (
                            <ChevronRight size={14} />
                          )
                        )}
                      </div>
                      
                      {/* Submenu */}
                      {item.submenu && expandedSections[item.label.toLowerCase().replace(/\s+/g, '')] && (
                        <div className="ml-6 mt-1 space-y-1">
                          {item.submenu.map((subitem, subindex) => (
                            <div
                              key={subindex}
                              className="flex items-center px-3 py-1.5 text-sm text-gray-600 rounded-md hover:bg-gray-100 cursor-pointer"
                            >
                              <subitem.icon size={12} className="mr-2 text-gray-400" />
                              {subitem.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
