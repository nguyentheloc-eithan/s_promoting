'use client';
import { motion } from 'framer-motion';
import {
  Building2,
  Code,
  Cpu,
  MessageCircle,
  Shield,
  Smartphone,
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
    className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}>
    <div className="relative">
      <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
      <Icon className="relative w-10 h-10 text-blue-600 dark:text-blue-400 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

interface StatProps {
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <motion.div
    className="text-center px-4 py-3 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}>
    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
      {number}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2 block">
            Discover My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-purple-100/50 dark:from-blue-900/50 dark:to-purple-900/50 rounded-3xl blur-3xl"></div>
          <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image column - 5 cols */}
              <motion.div
                className="lg:col-span-5 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}>
                <div className="relative w-60 h-60 lg:w-72 lg:h-72">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-600/20">
                    <Image
                      src="https://i.pinimg.com/736x/77/77/c7/7777c73306982854c388cdecf5cb4970.jpg"
                      alt="Nguyen The Loc"
                      fill
                      className="transform hover:scale-110 transition-transform duration-500 object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Content column - 7 cols */}
              <motion.div
                className="lg:col-span-7 space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}>
                <div>
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    Computer Engineering Professional
                  </h3>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      HCMUT Graduate
                    </span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                      Full Stack Developer
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    As a graduate from Ho Chi Minh City University of Technology
                    with a degree in Computer Engineering, I have demonstrated a
                    strong foundation in both theoretical knowledge and
                    practical application. My journey began during my junior
                    year in 2022, where I took the initiative to work on
                    end-to-end projects.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    My professional experience spans across various domains,
                    from developing enterprise-level solutions to creating
                    innovative mobile applications. I pride myself on my ability
                    to adapt quickly to new technologies and deliver robust,
                    scalable solutions.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <Stat
                    number="2+"
                    label="Years Experience"
                  />
                  <Stat
                    number="15+"
                    label="Projects Completed"
                  />
                  <Stat
                    number="6+"
                    label="Technologies Mastered"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div>
          <motion.h3
            className="text-2xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            Areas of Expertise
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              icon={Building2}
              title="Enterprise Solutions"
              description="Architected and implemented comprehensive ERP and CRM systems that transformed business operations and enhanced customer relationships."
              delay={0.1}
            />
            <SkillCard
              icon={Shield}
              title="Cyber Security"
              description="Developed and implemented robust security protocols and best practices, ensuring data protection and system integrity across applications."
              delay={0.2}
            />
            <SkillCard
              icon={MessageCircle}
              title="Zalo Mini App"
              description="Pioneered the development of innovative mini applications within the Zalo ecosystem, reaching and engaging millions of Vietnamese users."
              delay={0.3}
            />
            <SkillCard
              icon={Smartphone}
              title="Mobile Development"
              description="Created sophisticated cross-platform mobile applications using modern frameworks, delivering exceptional user experiences."
              delay={0.4}
            />
            <SkillCard
              icon={Cpu}
              title="POS Systems"
              description="Engineered efficient point-of-sale solutions that streamlined retail operations and significantly improved customer service capabilities."
              delay={0.5}
            />
            <SkillCard
              icon={Code}
              title="Full Stack Development"
              description="Mastered end-to-end development, from designing robust backend architectures to crafting responsive and intuitive front-end interfaces."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
