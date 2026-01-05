'use client';
import { Project, ProjectCardProps } from '@/types/project.type';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  Code2,
  Cpu,
  ExternalLink,
  GitBranch,
  Globe,
  Layers,
  Shield,
  TrendingUp,
  X,
} from 'lucide-react';
import { JSX, useState } from 'react';

const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise Digital Ecosystem',
    subtitle: 'Aura Group',
    category: 'Enterprise Solutions',
    icon: <Globe className="w-6 h-6" />,
    description:
      "Comprehensive digital transformation initiative encompassing multiple integrated platforms for Aura Group's beauty clinics and operations.",
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    products: [
      {
        name: 'Aura Manager (Zalo Mini App)',
        details:
          'Revenue reporting dashboard and staff analytics platform with real-time metrics tracking',
      },
      {
        name: 'Aura ID Booking System',
        details:
          'Direct customer booking integration with Zalo platform for beauty services',
      },
      {
        name: 'thammyaura.vn',
        details: 'Full-featured website for service bookings and marketing',
      },
      {
        name: 'Aura Reception POS',
        details:
          'Native mobile app for IMin POS devices managing customer check-ins and bookings',
      },
    ],
    stats: {
      'Monthly Users': '50K+',
      'Booking Rate': '+150%',
      'Processing Time': '-60%',
    },
    impact: [
      'Unified customer booking experience across web, mobile, and Zalo platforms',
      'Automated reporting reduced managerial overhead by 70%',
      'Integrated POS system increased payment processing efficiency by 40%',
    ],
    tags: [
      'Next.js',
      'React Native',
      'Expo',
      'Zalo Mini Apps',
      'Node.js',
      'PostgreSQL',
    ],
    role: 'Full Stack Software Engineer (End-to-End Development)',
  },
  {
    id: 2,
    title: 'Smart Visitor Management System',
    subtitle: 'Turbo Solution & Vadio AI Vision',
    category: 'AI & Computer Vision',
    icon: <Camera className="w-6 h-6" />,
    description:
      'Advanced AI-powered security and visitor management system with anti-spoofing face recognition.',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2340&auto=format&fit=crop',
    products: [
      {
        name: 'Smart Check-in System',
        details: 'AI camera integration for automated visitor processing',
      },
      {
        name: 'Anti-spoofing Face Recognition',
        details: 'Advanced security system with liveness detection',
      },
      {
        name: 'Self-hosted Infrastructure',
        details:
          'Custom MQTT broker, Minio S3 storage, and SQLite database solution',
      },
    ],
    stats: {
      'Processing Speed': '<2 sec',
      Accuracy: '99.9%',
      'Daily Visitors': '1000+',
    },
    impact: [
      'Reduced check-in time from 3 minutes to 30 seconds',
      'Implemented real-time threat detection with 99.9% accuracy',
      'Created scalable self-hosted infrastructure reducing cloud costs by 60%',
    ],
    tags: [
      'Python',
      'Computer Vision',
      'MQTT',
      'Minio',
      'SQLite',
      'Caddy',
      'React',
    ],
    role: 'Software Engineer & ML Developer',
  },
  {
    id: 3,
    title: 'Sentinel-360',
    subtitle: 'Dision Tech LLC',
    category: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    description:
      'Enterprise-grade EDR/XDR/SOAR platform for comprehensive network security and endpoint management.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2340&auto=format&fit=crop',
    products: [
      {
        name: 'Plugin System Architecture',
        details: 'Extensible security module framework',
      },
      {
        name: 'Multi-tenant System',
        details:
          'Enterprise-grade infrastructure for multiple organization management',
      },
      {
        name: 'AI-Powered UFile System',
        details: 'Intelligent file management with metadata-based organization',
      },
    ],
    stats: {
      'Endpoints Protected': '10K+',
      'Threat Detection': '<1 min',
      'File Processing': '1M+/day',
    },
    impact: [
      'Developed a flexible plugin system enabling rapid security feature deployment',
      'Built multi-tenant architecture supporting 100+ enterprise clients',
      'Implemented AI-driven file management reducing classification time by 80%',
    ],
    tags: ['React', 'Node.js', 'AI', 'Cybersecurity', 'Turborepo'],
    role: 'Software Developer',
  },
  {
    id: 4,
    title: 'E-Learning Platform',
    subtitle: 'Wellbeing Circle Vietnam',
    category: 'Web Development',
    icon: <Globe className="w-6 h-6" />,
    description:
      'Comprehensive LMS and marketing platform for wellbeingcirclevn.org, facilitating online learning and community engagement.',
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2374&auto=format&fit=crop',
    stats: {
      'Active Learners': '1000+',
      'Course Completion': '85%',
      'User Satisfaction': '4.8/5',
    },
    impact: [
      'Created intuitive learning interface increasing student engagement by 40%',
      'Implemented responsive design supporting mobile learning',
      'Integrated marketing tools resulting in 200% membership growth',
    ],
    tags: ['React', 'Node.js', 'LMS', 'PostgreSQL'],
    role: 'Full Stack Developer',
  },
  {
    id: 5,
    title: 'C-UAS Defense System',
    subtitle: 'ST Engineering',
    category: 'Defense & Security',
    icon: <Shield className="w-6 h-6" />,
    description:
      'Advanced Counter-UAS system integrating RF digital detection devices, Electro-Optical (EO) systems, and custom drone communication decoders for comprehensive airspace security.',
    image:
      'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=2070&auto=format&fit=crop',
    products: [
      {
        name: 'RF Detection & Analysis',
        details:
          'Digital RF spectrum monitoring system for drone signal detection and identification',
      },
      {
        name: 'Electro-Optical Tracking',
        details:
          'EO/IR camera systems with automated target tracking and threat assessment',
      },
      {
        name: 'Drone Communication Decoder',
        details:
          'Custom protocol decoders for intercepting and analyzing drone control signals',
      },
      {
        name: 'Integrated Command System',
        details:
          'Unified platform for multi-sensor data fusion and threat response coordination',
      },
    ],
    stats: {
      'Detection Range': '5+ km',
      'Response Time': '<10 sec',
      'Identification Accuracy': '95%',
    },
    impact: [
      'Developed multi-spectrum detection system combining RF and EO sensors for 360° coverage',
      'Implemented real-time drone protocol decoding for major commercial drone platforms',
      'Created automated threat classification reducing operator workload by 70%',
      'Integrated multi-sensor fusion for enhanced detection in challenging environments',
    ],
    tags: [
      'RF Engineering',
      'Computer Vision',
      'Signal Processing',
      'Python',
      'C++',
      'Embedded Systems',
      'Real-time Systems',
    ],
    role: 'Systems Engineer & Software Developer',
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  onClick,
}) => {
  return (
    <motion.article
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}>
      {/* Image Container with Overlay */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <div className="text-blue-600 dark:text-blue-400">{project.icon}</div>
          <span className="text-sm font-semibold text-gray-900 dark:text-white">
            {project.category}
          </span>
        </div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-1 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-blue-200 text-sm font-medium">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Content Preview */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4 h-10">
          {project.description}
        </p>

        {/* Tech Stack Preview */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem]">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50 mt-auto">
          <span>View Details</span>
          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
};

const ProjectModal: React.FC<{ project: Project; onClose: () => void }> = ({
  project,
  onClose,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center top-12 p-4 overflow-y-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Modal Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Section */}
          <div className="relative h-80">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl text-blue-600 dark:text-blue-400">
                  {project.icon}
                </div>
                <div>
                  <span className="text-blue-200 text-sm font-medium">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="text-blue-200 font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Role & Description */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Role & Overview
                </h3>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                {project.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Key Metrics
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div
                    key={key}
                    className="relative p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-xl border border-blue-200 dark:border-blue-800 overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform" />
                    <div className="relative">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                        {value}
                      </div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {key}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products */}
            {project.products && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Key Products & Features
                  </h3>
                </div>
                <div className="grid gap-4">
                  {project.products.map((product, index) => (
                    <div
                      key={index}
                      className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {product.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {product.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Business Impact */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Business Impact
                </h3>
              </div>
              <ul className="space-y-3">
                {project.impact.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-900">
                    <ArrowRight className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Technologies & Tools
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-medium text-sm border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <>
      <section
        id="projects"
        className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                Portfolio
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Delivering innovative solutions across AI, cybersecurity,
              enterprise software, and digital transformation with measurable
              impact
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <ProjectCard
                  project={project}
                  isSelected={selectedProject === project.id}
                  onClick={() => setSelectedProject(project.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <ProjectModal
            project={selectedProjectData}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
