'use client';
import { motion } from 'framer-motion';
import { Briefcase, Code, GraduationCap, Zap } from 'lucide-react';
import Image from 'next/image';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiCplusplus,
} from 'react-icons/si';

interface SkillCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({
  icon: Icon,
  title,
  description,
  delay = 0,
}) => (
  <motion.div
    className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    whileHover={{ y: -8, scale: 1.02 }}>
    {/* Gradient Background Effect */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

    <div className="relative">
      <div className="inline-flex p-4 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
        {description}
      </p>
    </div>
  </motion.div>
);

interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <motion.div
    className="text-center px-6 py-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}>
    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-base font-medium text-gray-700 dark:text-gray-300">
      {label}
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-8 min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gray-200/20 dark:bg-gray-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gray-200/20 dark:bg-gray-800/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-[1800px]">
        {/* Main Content */}
        <div>
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image column - 4 cols */}
              <motion.div
                className="lg:col-span-4 relative p-12 lg:p-20 flex flex-col items-center justify-center bg-gray-50 dark:from-gray-900 dark:via-gray-900/50 dark:to-gray-900 space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                  <motion.div
                    className="absolute inset-0 bg-blue-600 rounded-3xl"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
                    <Image
                      src="https://ucarecdn.com/4e533a4d-ab79-4ff2-ac6c-289cda67d2a2/-/preview/800x800/"
                      alt="Nguyen The Loc"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Floating badges */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg text-base font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}>
                    <GraduationCap className="w-4 h-4 inline mr-1" />
                    Computer Engineering
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-gray-700 dark:bg-gray-600 text-white px-4 py-2 rounded-xl shadow-lg text-base font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}>
                    <Zap className="w-4 h-4 inline mr-1" />
                    2.5 YOE
                  </motion.div>
                </div>

                {/* Professional Title */}
                <motion.div
                  className="max-w-md mx-auto text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Full Stack Developer
                  </h4>
                </motion.div>
              </motion.div>

              {/* Content column - 8 cols */}
              <motion.div
                className="lg:col-span-8 p-10 lg:p-20 space-y-8 relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Nguyen The Loc (Eithan)
                  </h3>
                  <div className="h-1 w-32 bg-blue-600 rounded-full"></div>
                </div>

                {/* Technical Skills */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-blue-600 rounded-xl shadow-lg">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Professional Experience & Expertise
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      className="group p-5 bg-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 8, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-base text-gray-700 dark:text-gray-300">
                          Developed cross-platform mobile apps using{' '}
                          <span className="font-bold text-gray-900 dark:text-white">
                            React Native, Expo, Flutter
                          </span>
                        </span>
                      </div>
                    </motion.div>
                    <motion.div
                      className="group p-5 bg-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 8, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-base text-gray-700 dark:text-gray-300">
                          Built enterprise SaaS applications with{' '}
                          <span className="font-bold text-gray-900 dark:text-white">
                            React, Next.js, NestJS, PostgreSQL
                          </span>
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="group p-5 bg-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 8, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-base text-gray-700 dark:text-gray-300">
                          Built RESTful APIs and microservices with{' '}
                          <span className="font-bold text-gray-900 dark:text-white">
                            Go (Echo), Python (Flask), Node.js (Express)
                          </span>
                        </span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="group p-5 bg-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 8, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-base text-gray-700 dark:text-gray-300">
                          Deployed and managed applications using{' '}
                          <span className="font-bold text-gray-900 dark:text-white">
                            Docker, Kubernetes, Drone CI, GitHub Actions
                          </span>
                        </span>
                      </div>
                    </motion.div>
                    <motion.div
                      className="group p-5 bg-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                      whileHover={{ x: 8, scale: 1.02 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-2 h-2 mt-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-base text-gray-700 dark:text-gray-300">
                          Implemented AIoT systems with{' '}
                          <span className="font-bold text-gray-900 dark:text-white">
                            ESP32 (M5Stack), STM32, MQTT, Computer Vision (Vadio
                            AI, SiPEED MAIXCAM)
                          </span>
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Programming Languages Icons */}
                <motion.div
                  className="mt-8 flex gap-3 justify-center lg:justify-end flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}>
                  <motion.div
                    className="p-3 bg-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5, rotate: 5 }}
                    title="TypeScript">
                    <SiTypescript className="w-9 h-9 text-[#3178C6]" />
                  </motion.div>
                  <motion.div
                    className="p-3 bg-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5, rotate: 5 }}
                    title="JavaScript">
                    <SiJavascript className="w-9 h-9 text-[#F7DF1E]" />
                  </motion.div>
                  <motion.div
                    className="p-3 bg-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5, rotate: 5 }}
                    title="Python">
                    <SiPython className="w-9 h-9 text-[#3776AB]" />
                  </motion.div>
                  <motion.div
                    className="p-3 bg-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5, rotate: 5 }}
                    title="Golang">
                    <SiGo className="w-9 h-9 text-[#00ADD8]" />
                  </motion.div>
                  <motion.div
                    className="p-3 bg-white dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -5, rotate: 5 }}
                    title="C++">
                    <SiCplusplus className="w-9 h-9 text-[#00599C]" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
