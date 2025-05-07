import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon, GithubIcon, ChevronRight, ChevronLeft, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "Kidney Stone Detection",
      description: "Developed an ML model for kidney stone detection, optimizing classification accuracy using Python, Scikit-Learn, and IBM Watson Studio",
      image: "/kidney.jpg",
      tags: ["Python", "Machine Learning", "IBM Watson"],
      github: "https://github.com/Prudvi337/kidney-stone-detection",
      featured: true
    },
    {
      title: "Water Quality Monitoring",
      description: "Engineered AI-powered real-time water monitoring on IBM Cloud, streamlining data acquisition",
      image: "/water.jpg",
      tags: ["Python", "IBM Cloud", "APIs"],
      github: "https://github.com/Prudvi337/water-quality-monitoring"
    },
    {
      title: "E-Books Library Website",
      description: "Built a responsive educational platform with RESTful APIs for efficient content management",
      image: "/el.png",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Prudvi337"
    },
    {
      title: "NEO Explorer",
      description: "Interactive NEO tracking web app using NASA data, featuring 3D visualizations for engagement",
      image: "/neo.png",
      tags: ["JavaScript", "NASA API", "3D Graphics"],
      github: "https://github.com/Prudvi337/neo-explorer",
      live: "https://www.neoexplorer.earth",
      featured: true
    },
    {
      title: "LearnByDoing",
      description: "Project-based learning platform for tech enthusiasts with hands-on experience and proper guidance",
      image: "/LBD.png",
      tags: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/Prudvi337/LearnByDoing"
    }
  ];

  const moreProjects = [
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website to showcase projects and skills.",
      image: "/favicon.png",
      tags: ["React.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Prudvi337/Portfolio",
      live: "https://prudvi-kumar-reddy.vercel.app/"
    },
    {
      title: "Chat Application",
      description: "Built a real-time chat application with WebSocket integration for seamless communication.",
      image: "/chat.png",
      tags: ["Node.js", "Socket.IO", "React"],
      github: "https://github.com/Prudvi337/friendly-chat-arena",
    },
    {
      title: "Cruise Ship Management System",
      description: "A comprehensive web application for managing cruise ship operations, enabling voyagers to order services and staff to manage operations efficiently.",
      image: "/cruise.png",
      tags: ["React.js", "Firebase", "Node.js"],
      github: "https://github.com/Prudvi337/cruise-ship-management"
    },

  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Filter featured projects
  const featuredProjects = projects.filter(project => project.featured);
  // Non-featured projects
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-background/60">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-2">
            <div className="h-px w-16 bg-primary/60 mr-4"></div>
            <span className="text-primary font-medium">MY WORK</span>
            <div className="h-px w-16 bg-primary/60 ml-4"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in machine learning, web development, and data visualization.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <div className="relative mb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center glass p-6 md:p-12 rounded-3xl shadow-lg">
                <div className="overflow-hidden rounded-xl h-72 relative group">
                  <motion.img
                    src={projects[activeProject].image || "/api/placeholder/600/400"}
                    alt={projects[activeProject].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  {projects[activeProject].featured && (
                    <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full flex items-center text-sm font-medium">
                      <Star className="w-4 h-4 mr-1" /> Featured
                    </div>
                  )}
                </div>
                
                <div>
                  <Badge variant="outline" className="mb-4 border-primary/40 text-primary">
                    Project {activeProject + 1}/{projects.length}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 text-primary">
                    {projects[activeProject].title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {projects[activeProject].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[activeProject].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="default" size="sm" asChild className="group">
                      <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Source Code
                      </a>
                    </Button>
                    {projects[activeProject].live && (
                      <Button variant="outline" size="sm" asChild className="group">
                        <a href={projects[activeProject].live} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 transition-all"
              onClick={prevProject}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/10 transition-all"
              onClick={nextProject}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Project Grid */}
        <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 border border-primary/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/api/placeholder/400/320"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" asChild className="group">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button variant="ghost" size="sm" asChild className="group">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLinkIcon className="w-4 h-4 mr-1" />
                          Demo
                        </a>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-20 text-center space-y-6"
>
  {/* Inspirational Quote */}
  <motion.blockquote 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8 }}
    className="max-w-3xl mx-auto text-lg md:text-2xl font-semibold text-gray-300 leading-relaxed"
  >
    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
      “Innovation is not just about <span className="italic">creating new things</span>,
      but about <span className="italic">making a difference</span> in the way we experience the world.”
    </span>
  </motion.blockquote>

  {/* Sub Text */}
  <p className="text-muted-foreground text-sm md:text-base">Interested in working together?</p>

  {/* Contact Button */}
  <Button 
    size="lg" 
    className="bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
    asChild
  >
    <a href="#contact">Contact Me</a>
  </Button>
</motion.div>

      </div>
    </section>
  );
}
export default Projects;