import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  Calendar,
  Building2,
  Award,
  Code,
  Database,
  LineChart,
  Brain,
  Cloud,
  Sparkles,
  MapPin,
  Zap,
  Target,
  Rocket,
  Globe,
  Cpu,
  Network,
  Shield,
  ExternalLink
} from "lucide-react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const experiences = [
    {
      title: "Software Development Engineer",
      company: "DesignDeliverGrow",
      date: "Jul 2025 – Present",
      icon: Code,
      category: "web",
      color: "#4F46E5",
      gradient: "from-indigo-500 to-purple-600",
      description: [
        "Architected and developed full-stack applications using React.js, Node.js, and MongoDB in an agile environment",
        "Implemented RESTful APIs with proper error handling, validation, and optimization for production deployment",
        "Collaborated with distributed teams to deliver features on iterative sprints while maintaining code quality"
      ],
      skills: ["React.js", "Node.js", "MongoDB", "REST APIs"],
      impact: "High",
      logo: "💻"
    },
    {
      title: "Web Developer Intern",
      company: "Innobyte Services",
      date: "Jun 2025 – Jul 2025",
      icon: Globe,
      category: "web",
      color: "#2563EB",
      gradient: "from-blue-500 to-cyan-500",
      description: [
        "Built and deployed scalable web applications using React.js, Node.js, and MongoDB stack",
        "Collaborated in an agile environment with distributed teams to deliver features in short sprint cycles",
        "Worked with REST APIs and implemented authentication mechanisms for secure application access"
      ],
      skills: ["React.js", "Node.js", "MongoDB", "Authentication"],
      impact: "Medium",
      logo: "🌐"
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Unified Mentor",
      date: "Feb 2025 – Apr 2025",
      icon: Rocket,
      category: "web",
      color: "#EC4899",
      gradient: "from-pink-500 to-rose-500",
      description: [
        "Engineered scalable web applications using React.js, Node.js, Express.js, and MongoDB",
        "Implemented RESTful API endpoints with proper data validation and error handling",
        "Enhanced user experience through responsive design and intuitive UI implementation",
        "Debugged and resolved production issues, improving system reliability"
      ],
      skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
      impact: "High",
      logo: "🚀"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Experience', icon: Globe, count: experiences.length },
    { id: 'web', name: 'Web Development', icon: Code, count: experiences.filter(e => e.category === 'web').length },
    { id: 'ai', name: 'AI/ML', icon: Brain, count: experiences.filter(e => e.category === 'ai').length },
    { id: 'data', name: 'Data Science', icon: Database, count: experiences.filter(e => e.category === 'data').length },
    { id: 'cloud', name: 'Cloud', icon: Cloud, count: experiences.filter(e => e.category === 'cloud').length }
  ];

  const filteredExperiences = selectedCategory === 'all'
    ? experiences
    : experiences.filter(exp => exp.category === selectedCategory);

  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black">
      {/* Dark Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              Professional Journey
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Experience
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My professional journey through technology and development
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm
                  ${selectedCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }
                `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
                <span className="ml-1 px-2 py-0.5 rounded-full bg-white/10 text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

            {/* Experience Items */}
            <div className="space-y-12">
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-10" />

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative"
                    >
                      {/* Card */}
                      <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl">{exp.logo}</div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-gray-400">
                                <Building2 className="w-4 h-4" />
                                <p className="font-medium">{exp.company}</p>
                              </div>
                            </div>
                          </div>

                          {/* Date */}
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {exp.date}
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Impact Badge */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className={`
                            w-2 h-2 rounded-full ${exp.impact === 'High' ? 'bg-green-400' : 'bg-yellow-400'}
                          `} />
                          <span className="text-xs text-gray-400">Impact: {exp.impact}</span>
                        </div>

                        {/* Expandable Description */}
                        <AnimatePresence mode="wait">
                          {activeIndex === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="space-y-3 pt-4 border-t border-white/10">
                                {exp.description.map((item, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 text-gray-300"
                                  >
                                    <Award className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-400" />
                                    <span className="text-sm leading-relaxed">{item}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expand Button */}
                        <motion.button
                          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                          className="absolute bottom-4 right-4 p-2 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 border border-blue-500/30"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ChevronRight
                            className={`w-4 h-4 text-blue-300 transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : ''}`}
                          />
                        </motion.button>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Total Experience", value: "1 Year", icon: Briefcase, color: "text-blue-400" },
              { label: "Companies", value: "3", icon: Building2, color: "text-purple-400" },
              { label: "Projects", value: "8+", icon: Rocket, color: "text-cyan-400" },
              { label: "Skills", value: "20+", icon: Shield, color: "text-green-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 