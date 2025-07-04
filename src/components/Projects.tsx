import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, ChevronRight, ChevronLeft, Star, Sparkles, Zap, Eye, Code, Globe, Rocket, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Kidney Stone Detection",
      description: "Developed an ML model for kidney stone detection, optimizing classification accuracy using Python, Scikit-Learn, and IBM Watson Studio",
      image: "/kidney.jpg",
      tags: ["Python", "Machine Learning", "IBM Watson"],
      github: "https://github.com/Prudvi337/kidney-stone-detection",
      featured: true,
      category: "ai",
      impact: "High",
      tech: ["Python", "Scikit-Learn", "IBM Watson", "ML"],
      stats: { accuracy: "94%", users: "1000+", impact: "Medical" }
    },
    {
      title: "Water Quality Monitoring",
      description: "Engineered AI-powered real-time water monitoring on IBM Cloud, streamlining data acquisition",
      image: "/water.jpg",
      tags: ["Python", "IBM Cloud", "APIs"],
      github: "https://github.com/Prudvi337/water-quality-monitoring",
      category: "iot",
      impact: "Medium",
      tech: ["Python", "IBM Cloud", "IoT", "Real-time"],
      stats: { accuracy: "98%", users: "500+", impact: "Environmental" }
    },
    {
      title: "E-Books Library Website",
      description: "Built a responsive educational platform with RESTful APIs for efficient content management",
      image: "/el.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Prudvi337",
      category: "web",
      impact: "Medium",
      tech: ["HTML", "CSS", "JavaScript", "REST APIs"],
      stats: { books: "1000+", users: "2000+", impact: "Education" }
    },
    {
      title: "NEO Explorer",
      description: "Interactive NEO tracking web app using NASA data, featuring 3D visualizations for engagement",
      image: "/neo.png",
      tags: ["JavaScript", "NASA API", "3D Graphics"],
      github: "https://github.com/Prudvi337/neo-explorer",
      live: "https://www.neoexplorer.earth",
      featured: true,
      category: "web",
      impact: "High",
      tech: ["JavaScript", "NASA API", "Three.js", "3D"],
      stats: { asteroids: "25000+", users: "5000+", impact: "Space" }
    },
    {
      title: "LearnByDoing",
      description: "Project-based learning platform for tech enthusiasts with hands-on experience and proper guidance",
      image: "/LBD.png",
      tags: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/Prudvi337/LearnByDoing",
      category: "web",
      impact: "High",
      tech: ["React.js", "Node.js", "MongoDB", "Full-stack"],
      stats: { courses: "50+", students: "10000+", impact: "Education" }
    }
  ];

  const moreProjects = [
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website to showcase projects and skills.",
      image: "/icon.png",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Prudvi337/Portfolio",
      live: "https://prudvi-kumar-reddy.vercel.app/",
      category: "web",
      impact: "Medium",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      stats: { performance: "100%", accessibility: "A+", impact: "Personal" }
    },
    {
      title: "Chat Application",
      description: "Built a real-time chat application with WebSocket integration for seamless communication.",
      image: "/chat.png",
      tags: ["Node.js", "Socket.IO", "React"],
      github: "https://github.com/Prudvi337/friendly-chat-arena",
      category: "web",
      impact: "Medium",
      tech: ["Node.js", "Socket.IO", "React", "Real-time"],
      stats: { messages: "10000+", users: "500+", impact: "Communication" }
    },
    {
      title: "Cruise Ship Management System",
      description: "A comprehensive web application for managing cruise ship operations, enabling voyagers to order services and staff to manage operations efficiently.",
      image: "/cruise.png",
      tags: ["React.js", "Firebase", "Node.js"],
      github: "https://github.com/Prudvi337/cruise-ship-management",
      category: "web",
      impact: "High",
      tech: ["React.js", "Firebase", "Node.js", "Management"],
      stats: { ships: "10+", passengers: "5000+", impact: "Travel" }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe, count: projects.length + moreProjects.length },
    { id: 'web', name: 'Web Development', icon: Code, count: [...projects, ...moreProjects].filter(p => p.category === 'web').length },
    { id: 'ai', name: 'AI/ML', icon: Brain, count: [...projects, ...moreProjects].filter(p => p.category === 'ai').length },
    { id: 'iot', name: 'IoT', icon: Zap, count: [...projects, ...moreProjects].filter(p => p.category === 'iot').length }
  ];

  const allProjects = [...projects, ...moreProjects];
  const filteredProjects = selectedCategory === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // 3D Card Component
  const ProjectCard3D = ({ project, index }) => {
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
    const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
    
    const springConfig = { damping: 20, stiffness: 300 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX: springRotateX,
          rotateY: springRotateY,
        }}
        className="group relative cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 hover:border-blue-500/40 transition-all duration-500 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
              />
            ))}
          </div>

          {/* Project Image */}
          <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Impact Badge */}
            <div className="absolute top-4 right-4">
              <div className={`
                px-3 py-1 rounded-full text-xs font-bold text-white
                ${project.impact === 'High' ? 'bg-green-500/90' : 'bg-yellow-500/90'}
              `}>
                {project.impact} Impact
              </div>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full flex items-center text-xs font-bold">
                <Star className="w-3 h-3 mr-1" /> Featured
              </div>
            )}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 4).map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
              {Object.entries(project.stats).map(([key, value], i) => (
                <div key={key} className="text-center">
                  <div className="text-white font-bold">{value.toString()}</div>
                  <div className="text-gray-400 capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" asChild className="group/btn">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                  Code
                </a>
              </Button>
              {project.live && (
                <Button variant="ghost" size="sm" asChild className="group/btn">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                    Live
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black">
      {/* Dark Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
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
              My Work
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Projects
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Exploring the intersection of creativity and technology through innovative solutions
            </motion.p>
          </motion.div>
          {/* Featured Projects Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Featured Showcase
              </span>
            </h3>
            
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image Section */}
                    <div className="relative">
                      <motion.div
                        className="relative h-80 rounded-2xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={projects[activeProject].image}
                          alt={projects[activeProject].title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        {/* Floating Stats */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="grid grid-cols-3 gap-4">
                            {Object.entries(projects[activeProject].stats).map(([key, value], i) => (
                              <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
                              >
                                <div className="text-white font-bold text-lg">{value}</div>
                                <div className="text-gray-300 text-xs capitalize">{key}</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-6">
                      <div>
                        <Badge variant="outline" className="mb-4 border-blue-500/40 text-blue-300">
                          Project {activeProject + 1}/{projects.length}
                        </Badge>
                        <h3 className="text-3xl font-bold mb-4 text-white">
                          {projects[activeProject].title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {projects[activeProject].description}
                        </p>
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects[activeProject].tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium border border-blue-500/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button variant="default" size="lg" asChild className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90">
                          <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                            View Code
                          </a>
                        </Button>
                        {projects[activeProject].live && (
                          <Button variant="outline" size="lg" asChild className="group border-blue-500/40 text-blue-300 hover:bg-blue-500/10">
                            <a href={projects[activeProject].live} target="_blank" rel="noopener noreferrer">
                              <ExternalLinkIcon className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-white/5 backdrop-blur-sm hover:bg-blue-500/20 border-blue-500/30 text-blue-300"
                  onClick={prevProject}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-white/5 backdrop-blur-sm hover:bg-blue-500/20 border-blue-500/30 text-blue-300"
                  onClick={nextProject}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
          <h3 className="text-2xl font-bold text-center mb-12 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                All Projects
              </span>
            </h3>
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
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
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

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
           
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard3D project={project} index={index} />
                </motion.div>
              ))}
            </div>
          </motion.div>
          

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-24 text-center space-y-8"
          >
            {/* Inspirational Quote */}
            <motion.blockquote 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl mx-auto text-xl md:text-3xl font-bold text-gray-300 leading-relaxed"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                "Every line of code is a step toward 
                <span className="italic text-white"> innovation</span>, 
                every project a journey into the 
                <span className="italic text-white"> future</span>."
              </span>
            </motion.blockquote>

            {/* Sub Text */}
            <p className="text-gray-400 text-lg">Ready to bring your ideas to life?</p>

            {/* Contact Button */}
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20 text-lg px-8 py-4"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Let's Build Something Amazing
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 