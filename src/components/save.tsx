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
                className="lg:col-span-4 relative p-12 lg:p-20 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900/50 space-y-8"
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
                    2.5 Years
                  </motion.div>
                </div>

                {/* Career Objective */}
                <motion.div
                  className="max-w-md mx-auto text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  viewport={{ once: true }}>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Career Objective
                    </h4>
                  </div>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Aspiring Full Stack Developer focused on building scalable
                    enterprise products. Passionate about leveraging end-to-end
                    development skills to deliver robust, high-impact solutions
                    for complex business challenges
                  </p>
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
                  <h3 className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    Nguyen The Loc (Eithan)
                  </h3>
                  <p className="text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Full Stack Developer
                  </p>
                </div>

                {/* Education & Experience Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Education */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        Education
                      </h4>
                    </div>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-semibold text-blue-600 dark:text-blue-400 block">
                        Ho Chi Minh City University of Technology
                      </span>
                      <span className="text-gray-600 font-bold dark:text-gray-400">
                        B.Eng. Computer Engineering - Advanced Program
                      </span>
                      <br />
                      <span className="text-base text-gray-500 dark:text-gray-500">
                        Specializations: IoT • Network Security
                      </span>
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-4000" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        Experience
                      </h4>
                    </div>
                    <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        2.5 Years
                      </span>{' '}
                      of Experience development
                      <br />
                      <span className="text-gray-600 dark:text-gray-400">
                        AIoT • Enterprise Solutions (ERP/CRM, SaaS, Mini App) •
                        Full-Stack Development
                      </span>
                    </p>
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg">
                      <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      Technical Skills
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Frontend */}
                    <div className="space-y-1">
                      <h5 className="text-base font-semibold dark:text-blue-400 flex items-center gap-2">
                        Frontend
                      </h5>
                      <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 ">•</span>
                          <span>
                            React, Next.js, React Native, Expo, Flutter
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 ">•</span>
                          <span>Ant Design, shadcn/ui, Tailwind CSS</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 ">•</span>
                          <span>Redux, Zustand, React Query</span>
                        </li>
                      </ul>
                    </div>

                    {/* Backend */}
                    <div className="space-y-1">
                      <h5 className="text-base font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        Backend
                      </h5>
                      <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>
                            NestJS, Express, Echo (Go), Flask (Python)
                          </span>
                        </li>

                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>
                            PostgreSQL, MongoDB, Pocketbase, Supabase, Firebase
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500">•</span>
                          <span>
                            Multi tenant SaaS Architecture, RESTful APIs
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* AI & IoT */}
                    <div className="space-y-1">
                      <h5 className="text-base font-semibold  dark:text-blue-400 flex items-center gap-2">
                        AI & IoT
                      </h5>
                      <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 ">•</span>
                          <span>MQTT, WebSocket, Real-time Systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 ">•</span>
                          <span>
                            Computer Vision (Vadio AI and SiPEED MAIXCAM)
                          </span>
                        </li>

                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 ">•</span>
                          <span>
                            ESP32 (M5Stack), STM32 (ARM Cortex-M4), and hardware
                            description via HDL
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* DevOps & Tools */}
                    <div className="space-y-1">
                      <h5 className="text-base font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        DevOps & Tools
                      </h5>
                      <ul className="text-base text-gray-600 dark:text-gray-400 space-y-1 ml-6">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 ">•</span>
                          <span>Docker, Kubernetes, Drone CI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 ">•</span>
                          <span>Git, GitHub Actions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Programming Languages Icons - Bottom Right */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  <div
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
                    title="TypeScript">
                    <SiTypescript className="w-8 h-8 text-[#3178C6]" />
                  </div>
                  <div
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
                    title="JavaScript">
                    <SiJavascript className="w-8 h-8 text-[#F7DF1E]" />
                  </div>
                  <div
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
                    title="Python">
                    <SiPython className="w-8 h-8 text-[#3776AB]" />
                  </div>
                  <div
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
                    title="Golang">
                    <SiGo className="w-8 h-8 text-[#00ADD8]" />
                  </div>
                  <div
                    className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
                    title="C++">
                    <SiCplusplus className="w-8 h-8 text-[#00599C]" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
