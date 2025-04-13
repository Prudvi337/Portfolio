import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { BriefcaseIcon, ChevronRightIcon, Calendar, Building2, Award } from "lucide-react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const experiences = [
    {
      title: "Full Stack Web Intern",
      company: "Unified Mentor",
      date: "Feb 15, 2025 – Present",
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
      company: "Freelance/Self Placed",
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
        size: Math.random() * 5 + 2,
        delay: Math.random() * 0.5,
      });
    }
    return particles;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 30 },
    visible: i => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
      }
    }),
    hover: {
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 5px -5px rgba(0, 0, 0, 0.04)",
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
        damping: 10,
        delay: 0.5 + i * 0.1
      }
    }),
    hover: {
      scale: 1.2,
      boxShadow: "0 0 15px rgba(79, 70, 229, 0.7)",
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: i * 0.05
      }
    })
  };

  const iconMapping = {
    web: BriefcaseIcon,
    frontend: BriefcaseIcon,
    data: BriefcaseIcon,
    ai: BriefcaseIcon,
    analytics: BriefcaseIcon,
    science: BriefcaseIcon,
    cloud: BriefcaseIcon
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {getRandomParticles(20).map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              x: [particle.x, particle.x + 100, particle.x],
              y: [particle.y, particle.y - 100, particle.y],
            }}
            transition={{
              duration: 8,
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
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-gradient"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience
          </motion.h2>

          <motion.p
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
            {/* Timeline center line */}
            <motion.div
              variants={lineVariants}
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/70 to-primary/30 h-full rounded-full z-0"
            />

            {/* Timeline nodes and experience cards */}
            <div className="relative z-10">
              {experiences.map((exp, index) => {
                const isLeftSide = index % 2 === 0;
                const IconComponent = iconMapping[exp.icon];

                return (
                  <div key={index} className="mb-16 relative">
                    {/* Timeline node */}
                    <motion.div
                      variants={nodeVariants}
                      custom={index}
                      whileHover="hover"
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary z-20 cursor-pointer flex items-center justify-center"
                      style={{
                        boxShadow: "0 0 10px rgba(79, 70, 229, 0.5)", // Blue glow
                        backgroundColor: "#2563EB" // Blue color for all nodes
                      }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-4 h-4 bg-background rounded-full"
                      />

                      {/* Timeline connecting pulse animation */}
                      <motion.span
                        className="absolute w-full h-full rounded-full bg-primary"
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{
                          opacity: [0, 0.5, 0],
                          scale: [1, 1.8, 2],
                          backgroundColor: "#2563EB" // Blue pulse animation
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: Math.random() * 2 + 1
                        }}
                      />
                    </motion.div>

                    {/* Date label */}
                    <motion.div
                      variants={cardVariants}
                      custom={index}
                      className={`absolute top-0 ${isLeftSide ? 'right-1/2 mr-16' : 'left-1/2 ml-16'} transform ${isLeftSide ? 'translate-x-0' : '-translate-x-0'} bg-primary/5 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium z-10`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.date}
                      </span>
                    </motion.div>

                    {/* Experience card */}
                    <motion.div
                      layout
                      variants={cardVariants}
                      custom={index}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className={`glass p-6 rounded-2xl border border-primary/10 ${isLeftSide ? 'mr-auto pr-8' : 'ml-auto pl-8'} w-full md:w-5/12 ${activeIndex === index ? 'bg-primary/10' : 'bg-background/30'} backdrop-blur-lg cursor-pointer relative overflow-hidden group`}
                      style={{
                        boxShadow: hoveredIndex === index || activeIndex === index
                          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                      }}
                    >
                      {/* Background gradient effect */}
                      <motion.div 
                        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none"
                        animate={{
                          background: [
                            `linear-gradient(120deg, ${exp.color}05, transparent)`,
                            `linear-gradient(240deg, ${exp.color}0A, transparent)`,
                            `linear-gradient(360deg, ${exp.color}05, transparent)`,
                          ]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />

                      {/* Card content */}
                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div 
                          className="p-3 rounded-xl"
                          style={{ backgroundColor: `${exp.color}20` }}
                          whileHover={{ 
                            scale: 1.1, 
                            backgroundColor: `${exp.color}30`,
                            transition: { type: "spring", stiffness: 400, damping: 10 }
                          }}
                        >
                          <IconComponent className="w-6 h-6" style={{ color: exp.color }} />
                        </motion.div>
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold" style={{ color: exp.color }}>
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-1.5 text-muted-foreground">
                                <Building2 className="w-3.5 h-3.5" />
                                <p>{exp.company}</p>
                              </div>
                            </div>
                            <motion.div
                              animate={activeIndex === index ? { rotate: 90 } : { rotate: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronRightIcon className="w-5 h-5 text-primary" />
                            </motion.div>
                          </div>
                          
                          <AnimatePresence>
                            {activeIndex === index && (
                              <motion.div
                                variants={detailVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-4 space-y-2"
                              >
                                <ul className="space-y-2">
                                  {exp.description.map((item, i) => (
                                    <motion.li
                                      key={i} 
                                      variants={itemVariants}
                                      custom={i}
                                      className="flex items-start gap-2 text-muted-foreground"
                                    >
                                      <Award className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: exp.color }} />
                                      <span>{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                      
                      {/* Expanding indicator */}
                      {!(activeIndex === index) && (
                        <motion.div
                          className="absolute bottom-2 right-2 text-xs text-primary/70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
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