import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { 
  BriefcaseIcon, 
  ChevronRightIcon, 
  Calendar, 
  Building2, 
  Award, 
  Code, 
  Database,  
  LineChart, 
  Brain,
  Cloud
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

  const getRandomParticles = (count) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        size: Math.random() * 8 + 2, // Slightly larger particles
        delay: Math.random() * 0.8,
        duration: Math.random() * 6 + 7, // Varying durations for more organic feel
      });
    }
    return particles;
  };

  // Animation variants with improved timing and effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Slightly slower stagger for better visual flow
        delayChildren: 0.3,
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.4, // Slightly longer for smoother appearance
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for more natural motion
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80, // Less stiff for smoother animation
        damping: 12,
        delay: i * 0.12,
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 22px 40px -12px rgba(0, 0, 0, 0.3), 0 16px 24px -8px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 10px 30px -8px rgba(0, 0, 0, 0.25), 0 8px 16px -6px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
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
        damping: 12,
        delay: 0.6 + i * 0.12
      }
    }),
    hover: {
      scale: 1.3,
      boxShadow: "0 0 20px rgba(79, 70, 229, 0.8), 0 0 40px rgba(79, 70, 229, 0.3)",
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.08
      }
    })
  };

  // Enhanced icon mapping with more distinct icons
  const iconMapping = {
    web: Code,
    frontend: BriefcaseIcon,
    data: Database,
    ai: Brain,
    analytics: LineChart,
    science: Database,
    cloud: Cloud
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Enhanced background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {getRandomParticles(25).map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/30 blur-sm"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.7, 0],
              x: [particle.x, particle.x + 120, particle.x],
              y: [particle.y, particle.y - 120, particle.y],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: "50%",
              top: "50%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Experience
            </span>
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My professional journey through technology and development
          </motion.p>

          <motion.div
            ref={timelineRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Enhanced timeline center line with gradient and glow */}
            <motion.div
              variants={lineVariants}
              className="absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-blue-500 via-primary to-purple-500 h-full rounded-full z-0 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
            />

            {/* Timeline nodes and experience cards */}
            <div className="relative z-10">
              {experiences.map((exp, index) => {
                const isLeftSide = index % 2 === 0;
                const IconComponent = iconMapping[exp.icon] || BriefcaseIcon;

                return (
                  <div key={index} className="mb-20 relative">
                    {/* Timeline node with enhanced glow effect */}
                    <motion.div
                      variants={nodeVariants}
                      custom={index}
                      whileHover="hover"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary/90 to-blue-600 z-20 cursor-pointer flex items-center justify-center shadow-lg"
                      style={{
                        boxShadow: hoveredIndex === index 
                          ? "0 0 25px rgba(79, 70, 229, 0.7), 0 0 10px rgba(79, 70, 229, 0.5)" 
                          : "0 0 15px rgba(79, 70, 229, 0.5), 0 0 5px rgba(79, 70, 229, 0.3)",
                      }}
                    >
                      <motion.span
                        animate={{ 
                          scale: [1, 1.3, 1], 
                          opacity: [0.7, 1, 0.7],
                          backgroundColor: ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.9)", "rgba(255,255,255,0.7)"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-5 h-5 bg-white rounded-full"
                      />

                      {/* Enhanced pulse animation */}
                      <motion.span
                        className="absolute w-full h-full rounded-full bg-primary"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{
                          opacity: [0, 0.4, 0],
                          scale: [1, 2.2, 3],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: Math.random() + 0.5
                        }}
                        style={{
                          background: "radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(99,102,241,0) 70%)"
                        }}
                      />
                    </motion.div>

                    {/* Enhanced date label with better positioning */}
                    <motion.div
                      variants={cardVariants}
                      custom={index}
                      className={`absolute top-0 ${isLeftSide ? 'right-1/2 mr-20' : 'left-1/2 ml-20'} transform ${isLeftSide ? 'translate-x-0' : '-translate-x-0'} 
                      bg-background/80 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium z-10 border border-primary/30 shadow-md`}
                    >
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        {exp.date}
                      </span>
                    </motion.div>

                    {/* Enhanced experience card with better glassmorphism */}
                    <motion.div
                      layout
                      variants={cardVariants}
                      custom={index}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className={`glass p-7 rounded-2xl border ${
                        activeIndex === index 
                          ? 'border-primary/30' 
                          : 'border-primary/10'
                      } ${
                        isLeftSide ? 'mr-auto pr-8' : 'ml-auto pl-8'
                      } w-full md:w-5/12 ${
                        activeIndex === index 
                          ? 'bg-primary/5' 
                          : 'bg-background/40'
                      } backdrop-blur-xl cursor-pointer relative overflow-hidden group`}
                      style={{
                        boxShadow: hoveredIndex === index || activeIndex === index
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 8px 30px -15px rgba(99, 102, 241, 0.3)"
                          : "0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 4px 10px -5px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      {/* Improved background gradient effect */}
                      <motion.div 
                        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none"
                        animate={{
                          background: [
                            `radial-gradient(circle at 30% 30%, ${exp.color}15, transparent 60%)`,
                            `radial-gradient(circle at 70% 70%, ${exp.color}15, transparent 60%)`,
                            `radial-gradient(circle at 30% 70%, ${exp.color}15, transparent 60%)`,
                          ]
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          repeatType: "mirror"
                        }}
                      />

                      {/* Active state highlight border */}
                      {activeIndex === index && (
                        <motion.div 
                          layoutId={`highlight-${index}`}
                          className="absolute inset-0 rounded-2xl pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{
                            background: `linear-gradient(60deg, transparent, ${exp.color}10, transparent)`,
                          }}
                        />
                      )}

                      {/* Improved card content layout */}
                      <div className="flex items-start gap-5 relative z-10">
                        <motion.div 
                          className="p-3.5 rounded-xl flex items-center justify-center"
                          style={{ 
                            backgroundColor: `${exp.color}20`,
                            boxShadow: `0 4px 12px ${exp.color}20`
                          }}
                          whileHover={{ 
                            scale: 1.15, 
                            backgroundColor: `${exp.color}30`,
                            transition: { type: "spring", stiffness: 400, damping: 10 }
                          }}
                        >
                          <IconComponent className="w-6 h-6" style={{ color: exp.color }} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold pb-1" style={{ color: exp.color }}>
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Building2 className="w-4 h-4 text-muted-foreground/80" />
                                <p className="font-medium">{exp.company}</p>
                              </div>
                            </div>
                            <motion.div
                              animate={activeIndex === index ? { rotate: 90 } : { rotate: 0 }}
                              transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                              className="bg-primary/10 rounded-full p-1"
                            >
                              <ChevronRightIcon 
                                className="w-5 h-5" 
                                style={{ color: exp.color }}
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
                                className="mt-5 space-y-3"
                              >
                                <ul className="space-y-3">
                                  {exp.description.map((item, i) => (
                                    <motion.li
                                      key={i} 
                                      variants={itemVariants}
                                      custom={i}
                                      className="flex items-start gap-3 text-muted-foreground"
                                    >
                                      <Award 
                                        className="w-4 h-4 mt-1 flex-shrink-0" 
                                        style={{ color: exp.color }} 
                                      />
                                      <span className="leading-tight">{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      
                      {/* Improved expanding indicator */}
                      {!(activeIndex === index) && (
                        <motion.div
                          className="absolute bottom-3 right-3 text-xs font-medium rounded-full px-2 py-0.5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{ 
                            backgroundColor: `${exp.color}15`,
                            color: exp.color
                          }}
                        >
                          Click to expand
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
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