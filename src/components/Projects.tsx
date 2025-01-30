import { motion } from "framer-motion";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Kidney Stone Detection",
      description: "Developed an ML model for kidney stone detection, optimizing classification accuracy using Python, Scikit-Learn, and IBM Watson Studio",
      image: "/kidney.jpg",
      tags: ["Python", "Machine Learning", "IBM Watson"],
      github: "https://github.com/Prudvi337/kidney-stone-detection"
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
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Prudvi337"
    },
    {
      title: "NEO Explorer",
      description: "Interactive NEO tracking web app using NASA data, featuring 3D visualizations for engagement",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      tags: ["JavaScript", "NASA API", "3D Graphics"],
      github: "https://github.com/Prudvi337/neo-explorer",
      live:"https://www.neoexplorer.earth"
    },
    {
      title: "LearnByDoing",
      description: "Project-based learning platform for tech enthusiasts with hands-on experience and proper guidance",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      tags: ["React.js", "Node.js", "MongoDB"],
      github: "https://github.com/Prudvi337/LearnByDoing"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;