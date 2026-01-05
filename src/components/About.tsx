'use client';
import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Building2,
  Code,
  Cpu,
  GraduationCap,
  MessageCircle,
  Rocket,
  Shield,
  Smartphone,
  Target,
  Zap,
} from 'lucide-react';
import Image from 'next/image';

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
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
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
    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {label}
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
              About Me
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
            Discover My Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Computer Engineering professional with expertise in AI, full-stack
            development, and defense systems
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mb-20">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image column - 5 cols */}
              <motion.div
                className="lg:col-span-5 relative p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />
                  <div className="absolute inset-2 bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
                    <Image
                      src="https://ucarecdn.com/4e1b46ea-4c7d-4fa3-b6a7-463b4b0077e1/-/preview/750x1000/"
                      alt="Nguyen The Loc"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  {/* Floating badges */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}>
                    <GraduationCap className="w-4 h-4 inline mr-1" />
                    HCMUT
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}>
                    <Zap className="w-4 h-4 inline mr-1" />
                    2+ Years
                  </motion.div>
                </div>
              </motion.div>

              {/* Content column - 7 cols */}
              <motion.div
                className="lg:col-span-7 p-8 lg:p-12 space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    Computer Engineering
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800">
                      <GraduationCap className="w-4 h-4" />
                      Computer Engineering
                    </span>

                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold border border-purple-200 dark:border-purple-800">
                      <Rocket className="w-4 h-4" />
                      Full Stack Developer
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-blue-100 dark:bg-blue-950 rounded-lg">
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                      As a graduate from{' '}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        Ho Chi Minh City University of Technology
                      </span>{' '}
                      with a degree in{' '}
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        Computer Engineering
                      </span>
                      , specializing in{' '}
                      <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                        IoT
                      </span>{' '}
                      and{' '}
                      <span className="font-semibold text-orange-600 dark:text-orange-400">
                        Network Security
                      </span>
                      , I have demonstrated a strong foundation in both
                      theoretical knowledge and practical application. My
                      journey began during my junior year in 2022, where I took
                      the initiative to work on end-to-end projects.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 p-2 bg-purple-100 dark:bg-purple-950 rounded-lg">
                      <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                      My professional experience spans across{' '}
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        AI/ML, enterprise solutions, defense systems, and
                        full-stack development
                      </span>
                      . I pride myself on my ability to adapt quickly to new
                      technologies and deliver robust, scalable solutions that
                      drive real business impact.
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <Stat
                    number="2+"
                    label="Years Experience"
                  />
                  <Stat
                    number="15+"
                    label="Projects Completed"
                  />
                  <Stat
                    number="10+"
                    label="Technologies Mastered"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Areas of Expertise */}
        <div>
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              Areas of Expertise
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Specialized skills across multiple domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard
              icon={Building2}
              title="Enterprise Solutions"
              description="Architected and implemented comprehensive ERP and CRM systems that transformed business operations and enhanced customer relationships."
              delay={0.1}
            />
            <SkillCard
              icon={Shield}
              title="Defense & Cybersecurity"
              description="Developed C-UAS systems with RF devices and robust security protocols, ensuring data protection and system integrity across critical applications."
              delay={0.2}
            />
            <SkillCard
              icon={MessageCircle}
              title="Zalo Mini App Development"
              description="Pioneered the development of innovative mini applications within the Zalo ecosystem, reaching and engaging millions of Vietnamese users."
              delay={0.3}
            />
            <SkillCard
              icon={Smartphone}
              title="Mobile Development"
              description="Created sophisticated cross-platform mobile applications using React Native and Expo, delivering exceptional user experiences."
              delay={0.4}
            />
            <SkillCard
              icon={Cpu}
              title="AI & Computer Vision"
              description="Implemented advanced AI systems including face recognition, anti-spoofing, and real-time object detection with high accuracy."
              delay={0.5}
            />
            <SkillCard
              icon={Code}
              title="Full Stack Development"
              description="Mastered end-to-end development with modern frameworks like Next.js, NestJS, Go Echo, and Flask for building scalable applications."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
