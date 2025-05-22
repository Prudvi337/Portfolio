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
  MapPin
} from "lucide-react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const experiences = [
    {
      title: "Full Stack Web Intern",
      company: "Unified Mentor",
      date: "Feb 15, 2025 – Apr 15, 2025",
      icon: "web",
      color: "#4F46E5",
      description: [
        "Developing and integrating full-stack features using React, Node.js, and Firebase",
        "Implementing secure authentication flows and scalable database schemas",
        "Collaborating in Agile sprints to improve user experience and performance"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Freelance/Self-Placed",
      date: "Jan 2024 – Feb 2025",
      icon: "frontend",
      color: "#2563EB",
      description: [
        "Built responsive and modular UI components using React.js and Tailwind CSS",
        "Worked closely with clients to translate user requirements into functional interfaces",
        "Optimized performance and deployed projects to cloud platforms for scalability"
      ]
    },
    {
      title: "Power BI Intern",
      company: "PWC",
      date: "Aug 2024",
      icon: "data",
      color: "#EC4899",
      description: [
        "Built high-impact dashboards, enhancing data visualization for strategic decision-making",
        "Identified executive-level gender disparity through analysis, driving policy recommendations"
      ]
    },
    {
      title: "AI-ML Intern",
      company: "IBM Skills Build",
      date: "Jun 2024 - Jul 2024",
      icon: "ai",
      color: "#06B6D4",
      description: [
        "Engineered AI automation workflows with IBM Watson, boosting operational efficiency",
        "Optimized cloud deployment for scalability, improving service reliability"
      ]
    },
    {
      title: "Data Analyst",
      company: "Accenture (Micro-Internship)",
      date: "Nov 2023",
      icon: "analytics",
      color: "#8B5CF6",
      description: [
        "Conducted root-cause analysis and improved data quality across business units",
        "Created visual insights using dashboards to support strategic decisions"
      ]
    },
    {
      title: "Data Analyst",
      company: "IBM Skills Build (Micro-Internship)",
      date: "Nov 2023",
      icon: "data",
      color: "#0EA5E9",
      description: [
        "Utilized IBM Cognos and SPSS to analyze trends and patterns in data",
        "Delivered actionable recommendations based on analytics reports"
      ]
    },
    {
      title: "Data Science Intern",
      company: "TATA",
      date: "Nov 2023",
      icon: "science",
      color: "#F59E0B",
      description: [
        "Performed advanced data processing on large datasets, enabling data-driven insights",
        "Developed algorithms to accelerate data retrieval, enhancing analytical precision"
      ]
    },
    {
      title: "AI-ML Intern",
      company: "AWS (Edu Skills)",
      date: "Sep 2023 - Nov 2023",
      icon: "cloud",
      color: "#10B981",
      description: [
        "Explored AI-driven analytics, researching transformative applications in machine learning",
        "Researched industry trends, aligning skills with career opportunities in data science"
      ]
    }
  ];

  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getFloatingElements = (count) => {
    const elements = [];
    for (let i = 0; i < count; i++) {
      elements.push({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 3,
        duration: Math.random() * 6 + 8,
      });
    }
    return elements;
  };

  // Clean animation variants
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeOut",
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.95
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.15,
      }
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.8 + i * 0.15
      }
    }),
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        height: { duration: 0.4 }
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1
      }
    })
  };

  // Simple icon mapping
  const iconMapping = {
    web: Code,
    frontend: Briefcase,
    data: Database,
    ai: Brain,
    analytics: LineChart,
    science: Database,
    cloud: Cloud
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black">
      {/* Subtle background elements */}
      <div className="absolute inset-0 z-0">
        {/* Simple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black" />
        
        {/* Floating particles */}
        {getFloatingElements(15).map((element, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              x: [element.x, element.x + 100],
              y: [element.y, element.y - 100],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: "50%",
              top: "50%",
            }}
          />
        ))}

        {/* Simple decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 border border-white/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg"
          animate={{ 
            rotate: [-10, 10, -10],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
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
          <motion.div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 mb-6 text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              Professional Journey
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Experience
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              My professional journey through technology and development
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Timeline line */}
            <motion.div
              variants={lineVariants}
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 z-0"
            />

            {/* Experience items */}
            <div className="relative z-10">
              {experiences.map((exp, index) => {
                const isLeftSide = index % 2 === 0;
                const IconComponent = iconMapping[exp.icon] || Briefcase;

                return (
                  <motion.div 
                    key={index} 
                    className="mb-16 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {/* Timeline node */}
                    <motion.div
                      variants={nodeVariants}
                      custom={index}
                      whileHover="hover"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full z-20 cursor-pointer flex items-center justify-center border-2 border-gray-800"
                      style={{
                        background: `linear-gradient(135deg, ${exp.color}, ${exp.color}CC)`,
                        boxShadow: hoveredIndex === index 
                          ? `0 0 20px ${exp.color}60` 
                          : `0 0 10px ${exp.color}40`,
                      }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Date */}
                    <motion.div
                      variants={cardVariants}
                      custom={index}
                      className={`absolute top-0 ${
                        isLeftSide ? 'right-1/2 mr-16' : 'left-1/2 ml-16'
                      } bg-gray-900/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium z-10 border border-gray-700`}
                    >
                      <span className="flex items-center gap-2 text-gray-300">
                        <Calendar className="w-4 h-4" style={{ color: exp.color }} />
                        {exp.date}
                      </span>
                    </motion.div>

                    {/* Experience card */}
                    <motion.div
                      layout
                      variants={cardVariants}
                      custom={index}
                      whileHover="hover"
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className={`p-6 rounded-2xl border cursor-pointer backdrop-blur-sm ${
                        isLeftSide ? 'mr-auto pr-8' : 'ml-auto pl-8'
                      } w-full md:w-5/12 ${
                        activeIndex === index 
                          ? 'bg-gray-900/60 border-gray-600' 
                          : 'bg-gray-900/40 border-gray-700'
                      } hover:bg-gray-900/60 transition-all duration-300`}
                    >
                      {/* Card content */}
                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div 
                          className="p-3 rounded-xl flex items-center justify-center"
                          style={{ 
                            backgroundColor: `${exp.color}20`,
                            border: `1px solid ${exp.color}40`
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        >
                          <IconComponent className="w-6 h-6" style={{ color: exp.color }} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-gray-400">
                                <Building2 className="w-4 h-4" />
                                <p className="font-medium text-sm">{exp.company}</p>
                              </div>
                            </div>
                            <motion.div
                              animate={activeIndex === index ? { rotate: 90 } : { rotate: 0 }}
                              transition={{ duration: 0.3 }}
                              className="p-1.5 rounded-full bg-gray-800/50"
                            >
                              <ChevronRight 
                                className="w-4 h-4 text-gray-400" 
                              />
                            </motion.div>
                          </div>
                          
                          <AnimatePresence mode="wait">
                            {activeIndex === index && (
                              <motion.div
                                variants={detailVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-4 overflow-hidden"
                              >
                                <div className="space-y-3">
                                  {exp.description.map((item, i) => (
                                    <motion.div
                                      key={i} 
                                      variants={itemVariants}
                                      custom={i}
                                      className="flex items-start gap-3 text-gray-300"
                                    >
                                      <Award 
                                        className="w-4 h-4 mt-0.5 flex-shrink-0" 
                                        style={{ color: exp.color }} 
                                      />
                                      <span className="text-sm leading-relaxed">{item}</span>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      
                      {/* Expand indicator */}
                      {!(activeIndex === index) && (
                        <motion.div
                          className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-full bg-gray-800/60 text-gray-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Click to expand
                        </motion.div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;