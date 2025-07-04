import { motion } from "framer-motion";
import { Code, Palette, Rocket, Zap, GraduationCap, Award, Users, Target, Sparkles } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code,
      technologies: ["React.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Responsive Design"],
      color: "primary"
    },
    {
      category: "Backend", 
      icon: Zap,
      technologies: ["Node.js", "Express", "Python", "MongoDB", "MySQL", "REST APIs"],
      color: "secondary"
    },
    {
      category: "AI & Cloud",
      icon: Palette,
      technologies: ["AWS Lambda", "IBM Watson", "Scikit-learn", "EC2", "S3", "DynamoDB"],
      color: "tertiary"
    },
    {
      category: "Tools & DevOps",
      icon: Rocket,
      technologies: ["GitHub Actions", "CI/CD", "Firebase", "Git", "VS Code", "Power BI"],
      color: "primary"
    }
  ];

  const achievements = [
    { icon: Award, text: "8.3 GPA", color: "text-yellow-400" },
    { icon: Users, text: "5+ Internships", color: "text-blue-400" },
    { icon: Target, text: "10+ Projects", color: "text-green-400" },
    { icon: GraduationCap, text: "Certifications", color: "text-purple-400" }
  ];

  return (
    <section id="about" className="py-20 relative animate-fade-in">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-16">
            About Me
          </h2>

          {/* Hero About Section */}
          <div className="relative mb-16">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
            
            <div className="glass p-8 md:p-12 rounded-3xl relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div className="space-y-8">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="flex items-center gap-3 mb-6"
                    >
                      <Sparkles className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl md:text-3xl font-bold text-primary">Passionate Tech Enthusiast</h3>
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-lg leading-relaxed text-muted-foreground mb-4"
                    >
                      I am a passionate Computer Science student specializing in AI, Machine Learning, and Data Science. 
                      With a strong foundation in full-stack development and a deep interest in cutting-edge technologies, 
                      I strive to create innovative solutions that make a real impact.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-lg leading-relaxed text-muted-foreground"
                    >
                      My journey in tech has been marked by continuous learning and practical application through various 
                      internships at prestigious companies like PWC, IBM, TATA, and Accenture.
                    </motion.p>
                  </div>

                  {/* Achievements Row */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                      >
                        <achievement.icon className={`w-6 h-6 mx-auto mb-2 ${achievement.color} group-hover:scale-110 transition-transform duration-300`} />
                        <p className="text-sm text-muted-foreground font-medium">{achievement.text}</p>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Right Side - Profile Image */}
                <div className="flex justify-center lg:justify-end">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative group"
                  >
                    <div className="relative">
                      <div className="w-95 h-72 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl group-hover:border-primary/40 transition-all duration-500">
                        <img
                          src="/hero.jpg"
                          alt="Prudvi Kumar Reddy - Full Stack Developer and AI/ML Enthusiast"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-3xl -z-10 group-hover:from-primary/30 group-hover:to-purple-500/30 transition-all duration-500"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass p-8 rounded-3xl mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-primary">Education Journey</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-blue-400 rounded-full"></div>
                <div className="pl-6">
                  <h4 className="text-xl font-bold text-primary mb-2">B.Tech in Computer Science</h4>
                  <p className="text-muted-foreground font-medium mb-1">Nalla Malla Reddy Engineering College</p>
                  <p className="text-sm text-muted-foreground mb-2">2021 - 2025 | GPA: 8.3</p>
                  <p className="text-xs text-primary/70">Specializing in AI/ML & Full-Stack Development</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-green-400 rounded-full"></div>
                <div className="pl-6">
                  <h4 className="text-xl font-bold text-blue-400 mb-2">Senior Secondary (XII)</h4>
                  <p className="text-muted-foreground font-medium mb-1">Narayana Junior College</p>
                  <p className="text-sm text-muted-foreground">2020 - 2021 | GPA: 9.66</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-green-400 to-purple-400 rounded-full"></div>
                <div className="pl-6">
                  <h4 className="text-xl font-bold text-green-400 mb-2">SSC (X)</h4>
                  <p className="text-muted-foreground font-medium mb-1">Sri Narayana Swamy High School</p>
                  <p className="text-sm text-muted-foreground">2019 | GPA: 9.8</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional About Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass p-8 rounded-3xl mb-16"
          >
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">My Journey & Vision</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Current Focus</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my B.Tech in Computer Science & Engineering, I maintain a strong academic record 
                  while actively engaging in real-world projects. My experience spans from developing AI-powered 
                  healthcare solutions to creating interactive educational platforms.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-primary mb-3">Future Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I envision a future where technology seamlessly integrates with human needs, creating solutions 
                  that are not just innovative but also accessible and impactful. My goal is to contribute to 
                  cutting-edge AI research while building scalable, user-centric applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section - Full Width */}
          <div className="w-full">
            <h3 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Skills & Technologies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <skill.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary">
                      {skill.category}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;