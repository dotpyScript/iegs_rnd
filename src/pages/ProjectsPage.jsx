import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, LayoutGrid, List, X, Calendar, User, Package, Battery, Wifi, Camera, Ruler, Weight, CheckCircle2, Clock, Users, ChevronDown, ChevronUp, MoreVertical, Edit, Trash2, Upload, FileText, Paperclip, Download, MessageSquare } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Dropdown from '../components/ui/Dropdown';
import { formatDate } from '../utils/formatDate';

const ProjectsPage = () => {
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' or 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [showAssignTaskModal, setShowAssignTaskModal] = useState(false);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [projectMenuOpen, setProjectMenuOpen] = useState(null);
  const fileInputRef = useRef(null);

  // New Project Form State
  const [newProject, setNewProject] = useState({
    name: '',
    category: '',
    startDate: '',
    assignedTo: [],
    specs: {},
    files: [],
    comments: '',
  });

  // New Task Form State
  const [newTask, setNewTask] = useState({
    projectId: '',
    title: '',
    assignedTo: '',
    dueDate: '',
    status: 'pending',
    files: [],
    comment: '',
  });

  // Inline editing state
  const [editingField, setEditingField] = useState(null);
  const [editValues, setEditValues] = useState({});

  // R&D Team Members
  const teamMembers = [
    { id: 1, name: 'Jamilu', role: 'Lead Engineer', avatar: 'https://ui-avatars.com/api/?name=Jamilu&background=0ea5e9&color=fff' },
    { id: 2, name: 'Paul', role: 'Software Developer', avatar: 'https://ui-avatars.com/api/?name=Paul&background=8b5cf6&color=fff' },
    { id: 3, name: 'Peculiar', role: 'Hardware Specialist', avatar: 'https://ui-avatars.com/api/?name=Peculiar&background=06b6d4&color=fff' },
    { id: 4, name: 'Abbas', role: 'Flight Test Engineer', avatar: 'https://ui-avatars.com/api/?name=Abbas&background=a78bfa&color=fff' },
  ];

  // Sample Projects with detailed specs
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Advanced Surveillance Drone X1',
      status: 'in-progress',
      category: 'Drone Development',
      startDate: '2024-09-01',
      completedDate: null,
      progress: 65,
      assignedTo: [1, 2],
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400',
      comments: 'This project is critical for Q4 delivery. Focus on lightweight materials and extended battery life.',
      files: [
        { id: 1, name: 'Preliminary Design v1.pdf', type: 'preliminary', uploadDate: '2024-09-05', size: '2.4 MB' },
        { id: 2, name: 'Detailed CAD Model.dwg', type: 'detailed', uploadDate: '2024-09-20', size: '15.8 MB' },
        { id: 3, name: 'Manufacturing Process.xlsx', type: 'manufacturing', uploadDate: '2024-10-01', size: '1.2 MB' },
      ],
      specs: {
        frameMaterial: '3K Carbon Fiber Monocoque',
        protectionLevel: 'IP54',
        camera: '48 MP stills; 4K video at 60fps; 8K Hyperlapse',
        wingspan: '1900 mm (with 28" propellers)',
        dimensionsUnfolded: '183 x 253 x 77 mm',
        dimensionsFolded: '180 x 97 x 84 mm',
        weight: '7.5 kg (without payload); 3.5 kg (without batteries)',
        maxTakeoffWeight: '11.5 kg',
        payloadCapacity: '4 kg',
        connectivity: 'Wi-Fi (2.4 GHz/5.8 GHz); Bluetooth 5.0; USB Type-C port',
        batteryLife: 'Up to 34 minutes per charge',
        batteryChargingTime: '90 minutes charging time',
        operationalRange: '15 km (up to 50 km with GCS Pro)',
      },
      tasks: [
        { id: 1, title: 'Design carbon fiber frame', assignedTo: 3, status: 'completed', dueDate: '2024-09-15', files: [], comment: 'Frame design approved and ready for manufacturing' },
        { id: 2, title: 'Integrate 4K camera system', assignedTo: 2, status: 'in-progress', dueDate: '2024-11-10', files: [{ id: 101, name: 'Camera_Integration_Guide.pdf', size: '1.2 MB' }], comment: 'Awaiting camera module delivery' },
        { id: 3, title: 'Flight control software', assignedTo: 2, status: 'in-progress', dueDate: '2024-11-20', files: [], comment: 'Testing autopilot features' },
        { id: 4, title: 'Initial flight tests', assignedTo: 4, status: 'pending', dueDate: '2024-12-01', files: [], comment: 'Waiting for hardware completion' },
      ],
    },
    {
      id: 2,
      name: 'Thermal Imaging Module Pro',
      status: 'completed',
      category: 'Hardware Module',
      startDate: '2024-06-15',
      completedDate: '2024-10-20',
      progress: 100,
      assignedTo: [3, 4],
      image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=400',
      comments: 'Successfully completed ahead of schedule. Excellent thermal performance in field tests.',
      files: [
        { id: 4, name: 'Thermal Specs.pdf', type: 'preliminary', uploadDate: '2024-06-20', size: '3.1 MB' },
      ],
      specs: {
        frameMaterial: 'Aluminum Alloy',
        protectionLevel: 'IP67',
        camera: 'Thermal Sensor 640x512; 30Hz',
        weight: '450 g',
        connectivity: 'USB Type-C; Wi-Fi 6',
        batteryLife: 'Up to 6 hours continuous use',
        operationalRange: 'Detection range: 500m',
      },
      tasks: [
        { id: 5, title: 'Thermal sensor integration', assignedTo: 3, status: 'completed', dueDate: '2024-07-01', files: [], comment: 'Sensor mounted successfully' },
        { id: 6, title: 'Software calibration', assignedTo: 2, status: 'completed', dueDate: '2024-08-15', files: [], comment: 'Calibration complete and verified' },
        { id: 7, title: 'Field testing', assignedTo: 4, status: 'completed', dueDate: '2024-10-10', files: [], comment: 'All tests passed with flying colors' },
      ],
    },
    {
      id: 3,
      name: 'Long-Range Communication System',
      status: 'pending',
      category: 'Communication',
      startDate: '2024-11-01',
      completedDate: null,
      progress: 15,
      assignedTo: [1, 2],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
      comments: 'High priority project for expanding operational range. Research phase ongoing.',
      files: [],
      specs: {
        connectivity: '5G; LoRa; Satellite uplink',
        operationalRange: 'Up to 100 km',
        weight: '280 g',
        batteryLife: 'Up to 8 hours',
      },
      tasks: [
        { id: 8, title: 'Research communication protocols', assignedTo: 1, status: 'in-progress', dueDate: '2024-11-15', files: [], comment: 'Evaluating LoRa vs 5G options' },
        { id: 9, title: 'Hardware design', assignedTo: 3, status: 'pending', dueDate: '2024-11-30', files: [], comment: 'Pending protocol selection' },
        { id: 10, title: 'Software development', assignedTo: 2, status: 'pending', dueDate: '2024-12-20', files: [], comment: 'Will start after hardware specs finalized' },
      ],
    },
  ]);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedProjects = {
    pending: filteredProjects.filter((p) => p.status === 'pending'),
    'in-progress': filteredProjects.filter((p) => p.status === 'in-progress'),
    completed: filteredProjects.filter((p) => p.status === 'completed'),
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700',
      'in-progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-300 dark:border-blue-700',
      completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-300 dark:border-green-700',
    };
    return colors[status] || '';
  };

  const getTaskStatusColor = (status) => {
    const colors = {
      pending: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400',
      'in-progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    };
    return colors[status] || '';
  };

  // Handle file upload
  const handleFileUpload = (e, projectId) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      type: 'uploaded',
      uploadDate: new Date().toISOString(),
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    }));

    setProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === projectId ? { ...p, files: [...p.files, ...newFiles] } : p
      )
    );
  };

  // Create new project
  const handleCreateProject = (e) => {
    e.preventDefault();
    const project = {
      id: Date.now(),
      ...newProject,
      status: 'pending',
      progress: 0,
      completedDate: null,
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400',
      tasks: [],
      files: newProject.files || [],
    };
    setProjects([...projects, project]);
    setShowNewProjectModal(false);
    setNewProject({ name: '', category: '', startDate: '', assignedTo: [], specs: {}, files: [], comments: '' });
  };

  // Assign new task
  const handleAssignTask = (e) => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      ...newTask,
      assignedTo: parseInt(newTask.assignedTo),
    };
    setProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === parseInt(newTask.projectId) ? { ...p, tasks: [...p.tasks, task] } : p
      )
    );
    setShowAssignTaskModal(false);
    setNewTask({ projectId: '', title: '', assignedTo: '', dueDate: '', status: 'pending', files: [], comment: '' });
  };

  // Handle task file upload
  const handleTaskFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    }));
    setNewTask({ ...newTask, files: [...(newTask.files || []), ...newFiles] });
  };

  // Inline edit handlers
  const startEdit = (projectId, field, currentValue) => {
    setEditingField({ projectId, field });
    setEditValues({ [field]: currentValue });
  };

  const saveEdit = (projectId, field) => {
    setProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === projectId ? { ...p, [field]: editValues[field] } : p
      )
    );
    setEditingField(null);
    setEditValues({});
  };

  const cancelEdit = () => {
    setEditingField(null);
    setEditValues({});
  };

  // Download project details as PDF
  const handleDownloadProjectPDF = (project) => {
    // In a real app, this would generate and download a PDF
    alert(`Downloading detailed report for: ${project.name}\n\nThis would generate a PDF with:\n- Project specifications\n- Tasks list\n- Team assignments\n- Files inventory\n- Timeline`);
  };

  // Delete specification field
  const handleDeleteSpec = (projectId, specKey) => {
    if (confirm(`Delete specification "${specKey}"?`)) {
      setProjects((prevProjects) =>
        prevProjects.map((p) => {
          if (p.id === projectId) {
            const { [specKey]: removed, ...remainingSpecs } = p.specs;
            return { ...p, specs: remainingSpecs };
          }
          return p;
        })
      );
    }
  };

  // Edit specification
  const [editingSpec, setEditingSpec] = useState(null);
  const [specEditValue, setSpecEditValue] = useState('');

  const startEditSpec = (projectId, specKey, currentValue) => {
    setEditingSpec({ projectId, specKey });
    setSpecEditValue(currentValue);
  };

  const saveEditSpec = (projectId, specKey) => {
    setProjects((prevProjects) =>
      prevProjects.map((p) => {
        if (p.id === projectId) {
          return { ...p, specs: { ...p.specs, [specKey]: specEditValue } };
        }
        return p;
      })
    );
    setEditingSpec(null);
    setSpecEditValue('');
  };

  // Delete task
  const handleDeleteTask = (projectId, taskId) => {
    if (confirm('Delete this task?')) {
      setProjects((prevProjects) =>
        prevProjects.map((p) =>
          p.id === projectId ? { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) } : p
        )
      );
    }
  };

  // Edit task
  const [editingTask, setEditingTask] = useState(null);

  const startEditTask = (task) => {
    setEditingTask(task);
    setNewTask({
      projectId: '',
      title: task.title,
      assignedTo: task.assignedTo.toString(),
      dueDate: task.dueDate,
      status: task.status,
      files: task.files || [],
      comment: task.comment || '',
    });
  };

  const saveEditTask = (projectId, taskId) => {
    setProjects((prevProjects) =>
      prevProjects.map((p) =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map((t) =>
                t.id === taskId
                  ? {
                      ...t,
                      title: newTask.title,
                      assignedTo: parseInt(newTask.assignedTo),
                      dueDate: newTask.dueDate,
                      status: newTask.status,
                      files: newTask.files,
                      comment: newTask.comment,
                    }
                  : t
              ),
            }
          : p
      )
    );
    setEditingTask(null);
    setNewTask({ projectId: '', title: '', assignedTo: '', dueDate: '', status: 'pending', files: [], comment: '' });
  };

  // Delete file
  const handleDeleteFile = (projectId, fileId) => {
    if (confirm('Delete this file?')) {
      setProjects((prevProjects) =>
        prevProjects.map((p) =>
          p.id === projectId ? { ...p, files: p.files.filter((f) => f.id !== fileId) } : p
        )
      );
    }
  };

  // Delete project
  const handleDeleteProject = (projectId) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter((p) => p.id !== projectId));
      setProjectMenuOpen(null);
    }
  };

  // Edit project
  const handleEditProject = (project) => {
    setEditingProject(project);
    setNewProject(project);
    setShowNewProjectModal(true);
    setProjectMenuOpen(null);
  };

  // Update project
  const handleUpdateProject = (e) => {
    e.preventDefault();
    setProjects((prevProjects) =>
      prevProjects.map((p) => (p.id === editingProject.id ? { ...editingProject, ...newProject } : p))
    );
    setShowNewProjectModal(false);
    setEditingProject(null);
    setNewProject({ name: '', category: '', startDate: '', assignedTo: [], specs: {}, files: [], comments: '' });
  };

  const renderProjectCard = (project) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 border-2 border-transparent hover:border-primary-300 dark:hover:border-primary-700"
    >
      {/* Project Image */}
      <div className="relative h-32 overflow-hidden group">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-2 right-2 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
            {project.status.replace('-', ' ')}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setProjectMenuOpen(projectMenuOpen === project.id ? null : project.id);
            }}
            className="w-8 h-8 bg-white/90 dark:bg-dark-800/90 rounded-full flex items-center justify-center hover:bg-white dark:hover:bg-dark-700 transition-colors"
          >
            <MoreVertical className="w-4 h-4 text-dark-900 dark:text-white" />
          </button>
          {projectMenuOpen === project.id && (
            <div className="absolute top-10 right-0 bg-white dark:bg-dark-800 rounded-lg shadow-soft-lg border border-dark-200 dark:border-dark-700 py-2 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleEditProject(project);
                }}
                className="w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-dark-100 dark:hover:bg-dark-700 text-dark-900 dark:text-white"
              >
                <Edit className="w-4 h-4" />
                <span className="text-sm">Edit</span>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteProject(project.id);
                }}
                className="w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400"
              >
                <Trash2 className="w-4 h-4" />
                <span className="text-sm">Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-5 cursor-pointer" onClick={() => setSelectedProject(project)}>
        <div className="mb-4">
          <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
            {project.name}
          </h3>
          <p className="text-sm text-dark-600 dark:text-dark-400">{project.category}</p>
        </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-dark-600 dark:text-dark-400">Progress</span>
          <span className="text-sm font-semibold text-dark-900 dark:text-white">{project.progress}%</span>
        </div>
        <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
          <div
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      {/* Dates */}
      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1 text-dark-600 dark:text-dark-400">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(project.startDate)}</span>
        </div>
        {project.completedDate && (
          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>{formatDate(project.completedDate)}</span>
          </div>
        )}
      </div>

        {/* Assigned Team */}
        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            {project.assignedTo.map((memberId) => {
              const member = teamMembers.find((m) => m.id === memberId);
              return (
                <img
                  key={memberId}
                  src={member?.avatar}
                  alt={member?.name}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-800"
                  title={member?.name}
                />
              );
            })}
          </div>
          <div className="flex items-center gap-3 text-xs text-dark-500 dark:text-dark-400">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              {project.tasks.length}
            </span>
            <span className="flex items-center gap-1">
              <Paperclip className="w-3 h-3" />
              {project.files?.length || 0}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
            R&D Projects
          </h1>
          <p className="text-dark-600 dark:text-dark-400">
            Manage drone projects and team tasks
          </p>
        </div>
        <div className="relative">
          <Button icon={ChevronDown} onClick={() => setShowActionsDropdown(!showActionsDropdown)}>
            Actions
          </Button>
          {showActionsDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-xl shadow-soft-lg border border-dark-200 dark:border-dark-700 py-2 z-20">
              <button
                onClick={() => {
                  setShowNewProjectModal(true);
                  setShowActionsDropdown(false);
                }}
                className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-dark-100 dark:hover:bg-dark-700 text-dark-900 dark:text-white transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>New Project</span>
              </button>
              <button
                onClick={() => {
                  setShowAssignTaskModal(true);
                  setShowActionsDropdown(false);
                }}
                className="w-full px-4 py-2 text-left flex items-center gap-3 hover:bg-dark-100 dark:hover:bg-dark-700 text-dark-900 dark:text-white transition-colors"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Assign Task</span>
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-4 shadow-soft"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full md:max-w-md">
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={Search}
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('kanban')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'kanban'
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-600'
              }`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {Object.entries(groupedProjects).map(([status, projectList]) => (
            <div key={status} className="space-y-4">
              <div className={`rounded-xl p-3 border-2 ${getStatusColor(status)}`}>
                <h3 className="font-bold text-sm uppercase flex items-center justify-between">
                  <span>{status.replace('-', ' ')}</span>
                  <span className="bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded-full text-xs">
                    {projectList.length}
                  </span>
                </h3>
              </div>
              <div className="space-y-4">
                {projectList.map((project) => renderProjectCard(project))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-soft overflow-hidden"
            >
              {/* Project Header */}
              <div className="p-5 hover:bg-dark-50 dark:hover:bg-dark-700/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                    <div className="flex-1">
                      {editingField?.projectId === project.id && editingField?.field === 'name' ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={editValues.name}
                            onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
                            className="text-lg font-bold bg-white dark:bg-dark-700 border border-primary-500 rounded px-2 py-1 text-dark-900 dark:text-white"
                            autoFocus
                          />
                          <button
                            onClick={() => saveEdit(project.id, 'name')}
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </button>
                          <button onClick={cancelEdit} className="text-red-600 hover:text-red-700">
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
                            {project.name}
                          </h3>
                          <button
                            onClick={() => startEdit(project.id, 'name', project.name)}
                            className="opacity-0 group-hover:opacity-100 text-dark-400 hover:text-primary-500 transition-opacity"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                      {editingField?.projectId === project.id && editingField?.field === 'category' ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={editValues.category}
                            onChange={(e) => setEditValues({ ...editValues, category: e.target.value })}
                            className="text-sm bg-white dark:bg-dark-700 border border-primary-500 rounded px-2 py-1 text-dark-600 dark:text-dark-400"
                            autoFocus
                          />
                          <button
                            onClick={() => saveEdit(project.id, 'category')}
                            className="text-green-600 hover:text-green-700"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>
                          <button onClick={cancelEdit} className="text-red-600 hover:text-red-700">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <p className="text-sm text-dark-600 dark:text-dark-400">{project.category}</p>
                          <button
                            onClick={() => startEdit(project.id, 'category', project.category)}
                            className="opacity-0 group-hover:opacity-100 text-dark-400 hover:text-primary-500 transition-opacity"
                          >
                            <Edit className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                      <p className="text-sm text-dark-600 dark:text-dark-400">Progress</p>
                      <p className="text-lg font-bold text-dark-900 dark:text-white">{project.progress}%</p>
                    </div>
                    <button
                      onClick={() => handleDownloadProjectPDF(project)}
                      className="p-2 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-colors group"
                      title="Download Project Details PDF"
                    >
                      <Download className="w-5 h-5 text-dark-400 group-hover:text-primary-500" />
                    </button>
                    <button
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                      className="flex items-center gap-2 text-dark-400 hover:text-primary-500 transition-colors"
                    >
                      {expandedProject === project.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-dark-200 dark:border-dark-700"
                  >
                    <div className="p-6 space-y-6">
                      {/* Project Timeline */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 p-4 bg-dark-50 dark:bg-dark-700/50 rounded-xl">
                          <Calendar className="w-5 h-5 text-primary-500" />
                          <div>
                            <p className="text-xs text-dark-600 dark:text-dark-400">Start Date</p>
                            <p className="font-semibold text-dark-900 dark:text-white">{formatDate(project.startDate)}</p>
                          </div>
                        </div>
                        {project.completedDate && (
                          <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <div>
                              <p className="text-xs text-dark-600 dark:text-dark-400">Completed</p>
                              <p className="font-semibold text-dark-900 dark:text-white">{formatDate(project.completedDate)}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Specifications */}
                      <div>
                        <h4 className="font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                          <Package className="w-5 h-5 text-primary-500" />
                          Technical Specifications
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {Object.entries(project.specs).map(([key, value]) => (
                            <div key={key} className="p-3 bg-dark-50 dark:bg-dark-700/50 rounded-lg group relative">
                              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={() => startEditSpec(project.id, key, value)}
                                  className="p-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                  title="Edit specification"
                                >
                                  <Edit className="w-3 h-3" />
                                </button>
                                <button
                                  onClick={() => handleDeleteSpec(project.id, key)}
                                  className="p-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                  title="Delete specification"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                              <p className="text-xs text-dark-600 dark:text-dark-400 mb-1 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </p>
                              {editingSpec?.projectId === project.id && editingSpec?.specKey === key ? (
                                <div className="flex flex-col gap-2">
                                  <input
                                    type="text"
                                    value={specEditValue}
                                    onChange={(e) => setSpecEditValue(e.target.value)}
                                    className="text-sm font-medium bg-white dark:bg-dark-800 border border-primary-500 rounded px-2 py-1 text-dark-900 dark:text-white"
                                    autoFocus
                                  />
                                  <div className="flex gap-1">
                                    <button
                                      onClick={() => saveEditSpec(project.id, key)}
                                      className="px-2 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                                    >
                                      Save
                                    </button>
                                    <button
                                      onClick={() => setEditingSpec(null)}
                                      className="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <p className="text-sm font-medium text-dark-900 dark:text-white pr-16">{value}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tasks */}
                      <div>
                        <h4 className="font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary-500" />
                          Project Tasks ({project.tasks.length})
                        </h4>
                        <div className="space-y-3">
                          {project.tasks.map((task) => {
                            const assignee = teamMembers.find((m) => m.id === task.assignedTo);
                            const isEditingThisTask = editingTask?.id === task.id;
                            
                            return (
                              <div
                                key={task.id}
                                className="p-4 bg-dark-50 dark:bg-dark-700/50 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors group"
                              >
                                {isEditingThisTask ? (
                                  <div className="space-y-3">
                                    <Input
                                      label="Task Title"
                                      value={newTask.title}
                                      onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                    />
                                    <div className="grid grid-cols-2 gap-3">
                                      <Dropdown
                                        options={teamMembers.map((m) => ({ value: m.id.toString(), label: m.name }))}
                                        value={newTask.assignedTo}
                                        onChange={(value) => setNewTask({ ...newTask, assignedTo: value })}
                                        placeholder="Assign to"
                                      />
                                      <Input
                                        type="date"
                                        value={newTask.dueDate}
                                        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                                      />
                                    </div>
                                    <Dropdown
                                      options={[
                                        { value: 'pending', label: 'Pending' },
                                        { value: 'in-progress', label: 'In Progress' },
                                        { value: 'completed', label: 'Completed' },
                                      ]}
                                      value={newTask.status}
                                      onChange={(value) => setNewTask({ ...newTask, status: value })}
                                      placeholder="Status"
                                    />
                                    <textarea
                                      value={newTask.comment || ''}
                                      onChange={(e) => setNewTask({ ...newTask, comment: e.target.value })}
                                      placeholder="Task comment..."
                                      className="w-full p-2 bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 rounded text-dark-900 dark:text-white text-sm"
                                      rows="2"
                                    />
                                    <div className="flex gap-2">
                                      <button
                                        onClick={() => saveEditTask(project.id, task.id)}
                                        className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
                                      >
                                        Save
                                      </button>
                                      <button
                                        onClick={() => {
                                          setEditingTask(null);
                                          setNewTask({ projectId: '', title: '', assignedTo: '', dueDate: '', status: 'pending', files: [], comment: '' });
                                        }}
                                        className="px-3 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                                      >
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <>
                                    <div className="flex items-center justify-between mb-2">
                                      <div className="flex items-center gap-3 flex-1">
                                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getTaskStatusColor(task.status)}`}>
                                          {task.status}
                                        </span>
                                        <p className="font-medium text-dark-900 dark:text-white">{task.title}</p>
                                      </div>
                                      <div className="flex items-center gap-4">
                                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                          <button
                                            onClick={() => startEditTask(task)}
                                            className="p-1.5 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                                            title="Edit task"
                                          >
                                            <Edit className="w-3.5 h-3.5" />
                                          </button>
                                          <button
                                            onClick={() => handleDeleteTask(project.id, task.id)}
                                            className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                            title="Delete task"
                                          >
                                            <Trash2 className="w-3.5 h-3.5" />
                                          </button>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <img
                                            src={assignee?.avatar}
                                            alt={assignee?.name}
                                            className="w-6 h-6 rounded-full"
                                            title={assignee?.name}
                                          />
                                          <span className="text-sm text-dark-600 dark:text-dark-400 hidden md:block">
                                            {assignee?.name}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-dark-500">
                                          <Clock className="w-3 h-3" />
                                          {formatDate(task.dueDate)}
                                        </div>
                                      </div>
                                    </div>
                                    {task.comment && (
                                      <p className="text-sm text-dark-600 dark:text-dark-400 mt-2 pl-2 border-l-2 border-primary-300 dark:border-primary-700">
                                        {task.comment}
                                      </p>
                                    )}
                                    {task.files && task.files.length > 0 && (
                                      <div className="mt-2 flex items-center gap-2">
                                        <Paperclip className="w-3 h-3 text-dark-500" />
                                        <span className="text-xs text-dark-500">{task.files.length} file(s) attached</span>
                                      </div>
                                    )}
                                  </>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Team Members */}
                      <div>
                        <h4 className="font-bold text-dark-900 dark:text-white mb-4 flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary-500" />
                          Assigned Team
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.assignedTo.map((memberId) => {
                            const member = teamMembers.find((m) => m.id === memberId);
                            return (
                              <div key={memberId} className="flex items-center gap-3 p-3 bg-dark-50 dark:bg-dark-700/50 rounded-lg">
                                <img src={member?.avatar} alt={member?.name} className="w-10 h-10 rounded-full" />
                                <div>
                                  <p className="font-semibold text-dark-900 dark:text-white">{member?.name}</p>
                                  <p className="text-xs text-dark-600 dark:text-dark-400">{member?.role}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Project Comments */}
                      {project.comments && (
                        <div>
                          <h4 className="font-bold text-dark-900 dark:text-white mb-3 flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-primary-500" />
                            Project Notes
                          </h4>
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                            {editingField?.projectId === project.id && editingField?.field === 'comments' ? (
                              <div>
                                <textarea
                                  value={editValues.comments}
                                  onChange={(e) => setEditValues({ ...editValues, comments: e.target.value })}
                                  className="w-full p-2 bg-white dark:bg-dark-700 border border-primary-500 rounded text-dark-900 dark:text-white"
                                  rows="3"
                                  autoFocus
                                />
                                <div className="flex gap-2 mt-2">
                                  <button
                                    onClick={() => saveEdit(project.id, 'comments')}
                                    className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={cancelEdit}
                                    className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 text-sm"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-start gap-2">
                                <p className="text-dark-700 dark:text-dark-300 flex-1">{project.comments}</p>
                                <button
                                  onClick={() => startEdit(project.id, 'comments', project.comments)}
                                  className="text-primary-500 hover:text-primary-600"
                                >
                                  <Edit className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Project Files */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-bold text-dark-900 dark:text-white flex items-center gap-2">
                            <Paperclip className="w-5 h-5 text-primary-500" />
                            Project Files ({project.files?.length || 0})
                          </h4>
                          <label className="cursor-pointer">
                            <input
                              type="file"
                              multiple
                              className="hidden"
                              onChange={(e) => handleFileUpload(e, project.id)}
                            />
                            <div className="flex items-center gap-2 px-3 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors text-sm">
                              <Upload className="w-4 h-4" />
                              <span>Upload Files</span>
                            </div>
                          </label>
                        </div>
                        <div className="space-y-2">
                          {project.files?.map((file) => (
                            <div
                              key={file.id}
                              className="flex items-center justify-between p-3 bg-dark-50 dark:bg-dark-700/50 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors group"
                            >
                              <div className="flex items-center gap-3 flex-1">
                                <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                                  <FileText className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium text-dark-900 dark:text-white text-sm">{file.name}</p>
                                  <div className="flex items-center gap-3 text-xs text-dark-500">
                                    <span className="capitalize">{file.type}</span>
                                    <span>•</span>
                                    <span>{file.size}</span>
                                    <span>•</span>
                                    <span>{formatDate(file.uploadDate)}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button 
                                  className="p-2 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-colors"
                                  title="Download file"
                                >
                                  <Download className="w-4 h-4 text-dark-600 dark:text-dark-400 hover:text-primary-500" />
                                </button>
                                <button 
                                  onClick={() => handleDeleteFile(project.id, file.id)}
                                  className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                  title="Delete file"
                                >
                                  <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                                </button>
                              </div>
                            </div>
                          ))}
                          {(!project.files || project.files.length === 0) && (
                            <p className="text-sm text-dark-500 text-center py-4">No files uploaded yet</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-dark-800 rounded-2xl p-12 shadow-soft text-center"
        >
          <div className="w-20 h-20 bg-dark-100 dark:bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-10 h-10 text-dark-400" />
          </div>
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
            No projects found
          </h3>
          <p className="text-dark-600 dark:text-dark-400">Try adjusting your search criteria</p>
        </motion.div>
      )}

      {/* New Project Modal */}
      <AnimatePresence>
        {showNewProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => {
              setShowNewProjectModal(false);
              setEditingProject(null);
              setNewProject({ name: '', category: '', startDate: '', assignedTo: [], specs: {}, files: [], comments: '' });
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
                  {editingProject ? 'Edit Project' : 'New Project'}
                </h2>
                <button
                  onClick={() => {
                    setShowNewProjectModal(false);
                    setEditingProject(null);
                    setNewProject({ name: '', category: '', startDate: '', assignedTo: [], specs: {}, files: [], comments: '' });
                  }}
                  className="p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-dark-600 dark:text-dark-400" />
                </button>
              </div>

              <form onSubmit={editingProject ? handleUpdateProject : handleCreateProject} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Project Name"
                    placeholder="Enter project name"
                    value={newProject.name}
                    onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                    required
                  />
                  <Input
                    label="Category"
                    placeholder="e.g., Drone Development"
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    required
                  />
                </div>

                <Input
                  label="Start Date"
                  type="date"
                  value={newProject.startDate}
                  onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Assign Team Members
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {teamMembers.map((member) => (
                      <label
                        key={member.id}
                        className="flex items-center gap-2 p-3 bg-dark-50 dark:bg-dark-700/50 rounded-lg cursor-pointer hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={newProject.assignedTo?.includes(member.id)}
                          onChange={(e) => {
                            const assigned = newProject.assignedTo || [];
                            setNewProject({
                              ...newProject,
                              assignedTo: e.target.checked
                                ? [...assigned, member.id]
                                : assigned.filter((id) => id !== member.id),
                            });
                          }}
                          className="w-4 h-4 text-primary-500 rounded"
                        />
                        <img src={member.avatar} alt={member.name} className="w-6 h-6 rounded-full" />
                        <span className="text-sm text-dark-900 dark:text-white">{member.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Technical Specifications
                  </label>
                  <div className="space-y-2">
                    <Input
                      placeholder="Frame Material"
                      value={newProject.specs?.frameMaterial || ''}
                      onChange={(e) =>
                        setNewProject({ ...newProject, specs: { ...newProject.specs, frameMaterial: e.target.value } })
                      }
                    />
                    <Input
                      placeholder="Camera"
                      value={newProject.specs?.camera || ''}
                      onChange={(e) =>
                        setNewProject({ ...newProject, specs: { ...newProject.specs, camera: e.target.value } })
                      }
                    />
                    <Input
                      placeholder="Wingspan"
                      value={newProject.specs?.wingspan || ''}
                      onChange={(e) =>
                        setNewProject({ ...newProject, specs: { ...newProject.specs, wingspan: e.target.value } })
                      }
                    />
                    <Input
                      placeholder="Weight"
                      value={newProject.specs?.weight || ''}
                      onChange={(e) =>
                        setNewProject({ ...newProject, specs: { ...newProject.specs, weight: e.target.value } })
                      }
                    />
                    <Input
                      placeholder="Battery Life"
                      value={newProject.specs?.batteryLife || ''}
                      onChange={(e) =>
                        setNewProject({ ...newProject, specs: { ...newProject.specs, batteryLife: e.target.value } })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Project Comments / Notes
                  </label>
                  <textarea
                    value={newProject.comments || ''}
                    onChange={(e) => setNewProject({ ...newProject, comments: e.target.value })}
                    placeholder="Add any important notes, objectives, or comments about this project..."
                    className="w-full p-3 bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-dark-900 dark:text-white"
                    rows="4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Upload Files (Design Templates, Manufacturing Process, etc.)
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    className="w-full p-3 border-2 border-dashed border-dark-300 dark:border-dark-600 rounded-xl hover:border-primary-500 transition-colors cursor-pointer"
                  />
                  <p className="text-xs text-dark-500 mt-2">Supported: PDF, DWG, XLSX, PNG, JPG</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    {editingProject ? 'Update Project' : 'Create Project'}
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => {
                      setShowNewProjectModal(false);
                      setEditingProject(null);
                      setNewProject({ name: '', category: '', startDate: '', assignedTo: [], specs: {}, files: [], comments: '' });
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Assign Task Modal */}
      <AnimatePresence>
        {showAssignTaskModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowAssignTaskModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-800 rounded-2xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white">Assign New Task</h2>
                <button
                  onClick={() => setShowAssignTaskModal(false)}
                  className="p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-dark-600 dark:text-dark-400" />
                </button>
              </div>

              <form onSubmit={handleAssignTask} className="space-y-4">
                <Dropdown
                  options={projects.map((p) => ({ value: p.id.toString(), label: p.name }))}
                  value={newTask.projectId}
                  onChange={(value) => setNewTask({ ...newTask, projectId: value })}
                  placeholder="Select Project"
                />

                <Input
                  label="Task Title"
                  placeholder="Enter task description"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  required
                />

                <Dropdown
                  options={teamMembers.map((m) => ({ value: m.id.toString(), label: `${m.name} - ${m.role}` }))}
                  value={newTask.assignedTo}
                  onChange={(value) => setNewTask({ ...newTask, assignedTo: value })}
                  placeholder="Assign to Team Member"
                />

                <Input
                  label="Due Date"
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  required
                />

                <Dropdown
                  options={[
                    { value: 'pending', label: 'Pending' },
                    { value: 'in-progress', label: 'In Progress' },
                    { value: 'completed', label: 'Completed' },
                  ]}
                  value={newTask.status}
                  onChange={(value) => setNewTask({ ...newTask, status: value })}
                  placeholder="Task Status"
                />

                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Task Comment / Instructions
                  </label>
                  <textarea
                    value={newTask.comment || ''}
                    onChange={(e) => setNewTask({ ...newTask, comment: e.target.value })}
                    placeholder="Add instructions, notes, or comments for this task..."
                    className="w-full p-3 bg-white dark:bg-dark-800 border border-dark-300 dark:border-dark-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-dark-900 dark:text-white"
                    rows="3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Attach Files to Task
                  </label>
                  <input
                    type="file"
                    multiple
                    onChange={handleTaskFileUpload}
                    className="w-full p-3 border-2 border-dashed border-dark-300 dark:border-dark-600 rounded-xl hover:border-primary-500 transition-colors cursor-pointer text-sm text-dark-600 dark:text-dark-400"
                  />
                  {newTask.files && newTask.files.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {newTask.files.map((file) => (
                        <div key={file.id} className="flex items-center gap-2 text-xs text-dark-600 dark:text-dark-400">
                          <Paperclip className="w-3 h-3" />
                          <span>{file.name} ({file.size})</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button type="submit" className="flex-1">
                    Assign Task
                  </Button>
                  <Button type="button" variant="secondary" onClick={() => {
                    setShowAssignTaskModal(false);
                    setNewTask({ projectId: '', title: '', assignedTo: '', dueDate: '', status: 'pending', files: [], comment: '' });
                  }}>
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;

