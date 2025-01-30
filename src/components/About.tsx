import { motion } from "framer-motion";
import { BriefcaseIcon, AwardIcon, StarIcon } from "lucide-react";

const About = () => {
  const skills = {
    "Programming Languages": ["Python", "C", "Java", "JavaScript"],
    "Web Development": ["HTML", "CSS", "React.js", "Node.js"],
    "Database": ["MySQL", "SQL", "MongoDB"],
    "Tools & Frameworks": ["Git", "TensorFlow", "IBM Watson", "Power BI"],
    "Cloud Platforms": ["AWS", "IBM Cloud"]
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            About Me
          </h2>

          <div className="glass p-6 rounded-2xl mb-12">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a passionate Computer Science student specializing in AI, Machine Learning, and Data Science. 
              With a strong foundation in full-stack development and a deep interest in cutting-edge technologies, 
              I strive to create innovative solutions that make a real impact. My journey in tech has been marked 
              by continuous learning and practical application through various internships at prestigious companies 
              like PWC, IBM, TATA, and Accenture.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              Currently pursuing my B.Tech in Computer Science & Engineering, I maintain a strong academic record 
              while actively engaging in real-world projects. My experience spans from developing AI-powered 
              healthcare solutions to creating interactive educational platforms, showcasing my versatility and 
              commitment to excellence in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Education</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-primary">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-muted-foreground">Nalla Malla Reddy Engineering College</p>
                  <p className="text-sm text-muted-foreground">2021 - 2025 | GPA: 8.67</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary">Senior Secondary (XII)</h4>
                  <p className="text-muted-foreground">Narayana Junior College</p>
                  <p className="text-sm text-muted-foreground">2020 - 2021 | GPA: 9.66</p>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary">SSC (X)</h4>
                  <p className="text-muted-foreground">Sri Narayana Swamy High School</p>
                  <p className="text-sm text-muted-foreground">2019 | GPA: 9.8</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-medium text-primary mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;