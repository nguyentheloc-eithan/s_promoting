'use client';
import { Project, ProjectCardProps } from '@/types/project.type';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  Code2,
  Cpu,
  GitBranch,
  Globe,
  Layers,
  Shield,
  Timer,
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
      'https://kyanon.digital/wp-content/uploads/2022/10/Enterprise-Mobile-Application-Development-services.jpg',
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
    title: 'Vadio Vision Security Suite',
    subtitle: 'Smart Visitor Management System',
    category: 'AI & Computer Vision',
    icon: <Camera className="w-6 h-6" />,
    description:
      'Advanced AI-powered security and visitor management system with anti-spoofing face recognition.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8eUvwQHdQ-4KsipL617xsEJhikjcXUygd2A&s',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfn2L4VMZdjZZTMzp5POYDJ1oMkFknPTgDqw&s',
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
    title: 'Wellbeing Circle Vietnam',
    subtitle: 'E-Learning Platform',
    category: 'Web Development',
    icon: <Globe className="w-6 h-6" />,
    description:
      'Comprehensive LMS and marketing platform for wellbeingcirclevn.org, facilitating online learning and community engagement.',
    image:
      'https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/460402305_122164901456055021_3922764334141011662_n.png?stp=dst-png_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=dV05bcxde20Q7kNvgE55yg-&_nc_oc=AdiPF2RXV1rambb6ahs5dxlp-BvuNVhbMAiDivO95ePuBSx1L9Gr_hAxrTvGs1lK2sU&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=AxM_0Vgfld5KkFErGkw2Gpt&oh=00_AYAgHBDkSZDr-B6PstvzQJn4Ptb1MFjsWc-zWAGud8GeiQ&oe=67910108',
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
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isSelected,
  onClick,
}) => {
  return (
    <motion.div
      layout="position"
      onClick={onClick}
      className={`bg-white dark:bg-gray-800  rounded-xl shadow-lg overflow-hidden cursor-pointer
        ${isSelected ? 'col-span-2 row-span-2' : 'col-span-1'}`}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
      transition={{
        layout: { duration: 0.5, ease: 'easeInOut' },
        default: { duration: 0.2 },
      }}>
      <motion.div
        className="relative"
        layout="position">
        <div className="absolute top-4 right-4 z-10 bg-blue-600 p-2 rounded-full text-white">
          {project.icon}
        </div>
        <motion.img
          layout="position"
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <div className="text-white text-sm font-medium mb-2">
            {project.category}
          </div>
          <motion.h3
            layout="position"
            className="text-xl font-bold text-white mb-2">
            {project.title}
          </motion.h3>
          <motion.p
            layout="position"
            className="text-gray-200 text-sm">
            {project.subtitle}
          </motion.p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-6">
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Code2 className="w-5 h-5" /> Role & Description
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>

            {project.products && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mb-6">
                <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Cpu className="w-5 h-5" /> Key Products
                </h4>
                <div className="space-y-3">
                  {project.products.map((product, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                      <div className="font-medium text-blue-600 dark:text-blue-400">
                        {product.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {product.details}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mb-6">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Timer className="w-5 h-5" /> Key Metrics
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(project.stats).map(([key, value], index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    key={key}
                    className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {key}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="mb-6">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Layers className="w-5 h-5" /> Business Impact
              </h4>
              <ul className="space-y-2">
                {project.impact.map((item, index) => (
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    key={index}
                    className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}>
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <GitBranch className="w-5 h-5" /> Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    key={index}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 
                    text-sm px-3 py-1 rounded-full font-medium">
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Projects(): JSX.Element {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <LayoutGroup>
      <section
        id="projects"
        className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Delivering innovative solutions across AI, cybersecurity,
              enterprise software, and digital transformation
            </p>
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={selectedProject === project.id}
                onClick={() =>
                  setSelectedProject(
                    selectedProject === project.id ? null : project.id
                  )
                }
              />
            ))}
          </motion.div>
        </div>
      </section>
    </LayoutGroup>
  );
}
