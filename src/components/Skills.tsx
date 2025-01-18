'use client';

import {
  CodeBracketIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FaDatabase, FaDocker, FaReact, FaRobot } from 'react-icons/fa';
import { SiNestjs, SiOpencv, SiTensorflow } from 'react-icons/si';

const skills = [
  { name: 'AIoT', icon: FaRobot, color: 'bg-yellow-500' },
  {
    name: 'Web Development (React/Next.js)',
    icon: FaReact,
    color: 'bg-blue-500',
  },
  {
    name: 'Mobile Development (React Native, Expo)',
    icon: DevicePhoneMobileIcon,
    color: 'bg-green-500',
  },
  { name: 'Zalo Mini App', icon: SparklesIcon, color: 'bg-purple-500' },
  { name: 'Node.js/NestJS', icon: SiNestjs, color: 'bg-red-500' },
  { name: 'Caddy & Docker', icon: FaDocker, color: 'bg-teal-500' },
  { name: 'Face Recognition', icon: SiOpencv, color: 'bg-indigo-500' },
  { name: 'TensorFlow', icon: SiTensorflow, color: 'bg-orange-500' },
  {
    name: 'Programming Languages',
    icon: CodeBracketIcon,
    color: 'bg-gray-500',
    details: 'C/C++, Python, TypeScript',
  },
  {
    name: 'Databases',
    icon: FaDatabase,
    color: 'bg-pink-500',
    details: 'SQLite, PostgreSQL, MongoDB (NoSQL)',
  },
  {
    name: 'Technologies',
    icon: CubeIcon,
    color: 'bg-cyan-500',
    details: 'Ant Design, Shadcn UI, Zustand, Vite.js, Next.js',
  },
  {
    name: 'Tools',
    icon: ServerIcon,
    color: 'bg-yellow-600',
    details: 'React Turbo Repo, Flask, Supabase',
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform group-hover:scale-105 group-hover:rotate-1"></div>
              <div className="relative p-6 flex flex-col items-center text-center">
                <div
                  className={`p-4 rounded-full ${skill.color} text-white mb-4 flex items-center justify-center`}>
                  {skill.icon ? <skill.icon className="w-8 h-8" /> : null}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                {skill.details ? (
                  <p className="text-gray-600 dark:text-gray-300">
                    {skill.details}
                  </p>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">
                    Explore the potential of {skill.name} for your projects.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
