'use client';

import { motion } from 'framer-motion';
import {
  Box,
  Brain,
  Code2,
  Database,
  Layers,
  MonitorSmartphone,
  Radio,
  Server,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { FaDocker, FaPython, FaReact } from 'react-icons/fa';
import {
  SiCplusplus,
  SiFlask,
  SiGnubash,
  SiNestjs,
  SiOpencv,
  SiTensorflow,
  SiTypescript,
  SiGoland,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: any;
  color: string;
  gradient: string;
  description: string;
  technologies?: string[];
}

interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: [
      {
        name: 'Computer Vision',
        icon: SiOpencv,
        color: 'text-green-600 dark:text-green-400',
        gradient: 'from-green-500 to-emerald-500',
        description:
          'Face recognition, object detection, anti-spoofing systems',
        technologies: ['OpenCV', 'YOLO', 'Deep Learning'],
      },
      {
        name: 'TensorFlow & ML',
        icon: SiTensorflow,
        color: 'text-orange-600 dark:text-orange-400',
        gradient: 'from-orange-500 to-red-500',
        description: 'Model training, deployment, and optimization',
        technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
      },
      {
        name: 'AIoT Integration',
        icon: Zap,
        color: 'text-yellow-600 dark:text-yellow-400',
        gradient: 'from-yellow-500 to-amber-500',
        description: 'AI-powered IoT systems and edge computing',
        technologies: ['Edge AI', 'MQTT', 'Real-time Processing'],
      },
    ],
  },
  {
    title: 'Full Stack Development',
    icon: Code2,
    skills: [
      {
        name: 'React & Next.js',
        icon: FaReact,
        color: 'text-blue-600 dark:text-blue-400',
        gradient: 'from-blue-500 to-cyan-500',
        description: 'Modern web applications with server-side rendering',
        technologies: ['React 18', 'Next.js 14', 'TypeScript'],
      },
      {
        name: 'Backend Frameworks',
        icon: Server,
        color: 'text-red-600 dark:text-red-400',
        gradient: 'from-red-500 to-pink-500',
        description: 'Scalable backend APIs and microservices',
        technologies: ['NestJS', 'Express', 'Echo (Go)', 'Flask'],
      },
      {
        name: 'Mobile Development',
        icon: Smartphone,
        color: 'text-purple-600 dark:text-purple-400',
        gradient: 'from-purple-500 to-violet-500',
        description: 'Cross-platform mobile apps with React Native',
        technologies: ['React Native', 'Expo', 'Zalo Mini App'],
      },
    ],
  },
  {
    title: 'Defense & RF Systems',
    icon: Radio,
    skills: [
      {
        name: 'RF Engineering',
        icon: Radio,
        color: 'text-indigo-600 dark:text-indigo-400',
        gradient: 'from-indigo-500 to-blue-600',
        description:
          'RF devices integration for defense software and system setup',
        technologies: [
          'SDR',
          'RF Devices',
          'Signal Processing',
          'Defense Systems',
        ],
      },
      {
        name: 'Embedded Systems',
        icon: Box,
        color: 'text-slate-600 dark:text-slate-400',
        gradient: 'from-slate-500 to-gray-600',
        description: 'Real-time systems and hardware integration',
        technologies: ['C/C++', 'RTOS', 'Firmware Development'],
      },
      {
        name: 'EO/IR Systems',
        icon: MonitorSmartphone,
        color: 'text-teal-600 dark:text-teal-400',
        gradient: 'from-teal-500 to-cyan-600',
        description: 'Electro-optical tracking and target recognition',
        technologies: ['Camera Systems', 'Image Processing', 'Tracking'],
      },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    icon: Server,
    skills: [
      {
        name: 'Docker & Containers',
        icon: FaDocker,
        color: 'text-blue-600 dark:text-blue-400',
        gradient: 'from-blue-600 to-sky-500',
        description: 'Containerization and orchestration',
        technologies: ['Docker', 'Docker Compose', 'Microservices'],
      },
      {
        name: 'Database Management',
        icon: Database,
        color: 'text-green-600 dark:text-green-400',
        gradient: 'from-green-600 to-emerald-500',
        description: 'SQL and NoSQL database design and optimization',
        technologies: ['PostgreSQL', 'MongoDB', 'SQLite'],
      },
      {
        name: 'Linux System Administration',
        icon: Server,
        color: 'text-slate-600 dark:text-slate-400',
        gradient: 'from-slate-600 to-gray-700',
        description: 'Service deployment and automation with Bash scripting',
        technologies: ['Bash Scripting', 'Systemd', 'Linux Services'],
      },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      {
        name: 'TypeScript/JavaScript',
        icon: SiTypescript,
        color: 'text-blue-600 dark:text-blue-400',
        gradient: 'from-blue-500 to-blue-600',
        description: 'Modern JavaScript with type safety',
        technologies: ['ES6+', 'TypeScript', 'Node.js'],
      },
      {
        name: 'Python',
        icon: FaPython,
        color: 'text-yellow-600 dark:text-yellow-400',
        gradient: 'from-yellow-500 to-blue-500',
        description: 'AI/ML, automation, and backend development',
        technologies: ['FastAPI', 'Flask', 'Data Science'],
      },
      {
        name: 'Go (Golang)',
        icon: SiGoland,
        color: 'text-cyan-600 dark:text-cyan-400',
        gradient: 'from-cyan-500 to-blue-500',
        description: 'High-performance backend services and APIs',
        technologies: ['Echo Framework', 'Goroutines', 'Microservices'],
      },
      {
        name: 'C/C++',
        icon: SiCplusplus,
        color: 'text-blue-700 dark:text-blue-400',
        gradient: 'from-blue-600 to-indigo-600',
        description: 'High-performance and embedded systems',
        technologies: ['C++17', 'Systems Programming', 'Embedded'],
      },
      {
        name: 'Bash Scripting',
        icon: SiGnubash,
        color: 'text-green-700 dark:text-green-400',
        gradient: 'from-green-600 to-emerald-600',
        description: 'Linux automation and service management',
        technologies: ['Shell Scripts', 'System Administration', 'Automation'],
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
              Expertise
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning AI/ML, full-stack development,
            defense systems, and modern infrastructure
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl text-white shadow-lg">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
                    {/* Gradient Accent */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${skill.gradient} opacity-5 rounded-2xl blur-2xl group-hover:opacity-10 transition-opacity`}
                    />

                    {/* Content */}
                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`inline-flex p-4 bg-white dark:bg-gray-950 rounded-xl shadow-md mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-8 h-8" />
                      </div>

                      {/* Skill Name */}
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {skill.name}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {skill.description}
                      </p>

                      {/* Technologies */}
                      {skill.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white shadow-2xl shadow-blue-500/30">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">
              Always learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
