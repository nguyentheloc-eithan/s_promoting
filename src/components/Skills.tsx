'use client'

import { motion } from 'framer-motion'
import { CodeBracketIcon, PaintBrushIcon, CpuChipIcon, CloudIcon, CogIcon, CommandLineIcon } from '@heroicons/react/24/outline'

const skills = [
  { name: 'React', icon: CodeBracketIcon, color: 'bg-blue-500' },
  { name: 'UI/UX Design', icon: PaintBrushIcon, color: 'bg-purple-500' },
  { name: 'Node.js', icon: CpuChipIcon, color: 'bg-green-500' },
  { name: 'Cloud Services', icon: CloudIcon, color: 'bg-indigo-500' },
  { name: 'DevOps', icon: CogIcon, color: 'bg-red-500' },
  { name: 'TypeScript', icon: CommandLineIcon, color: 'bg-yellow-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform transition-transform group-hover:scale-105 group-hover:rotate-3"></div>
              <div className="relative p-6 flex flex-col items-center">
                <div className={`p-4 rounded-full ${skill.color} text-white mb-4`}>
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

