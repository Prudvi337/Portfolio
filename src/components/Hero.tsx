import { motion } from "framer-motion";
import { GlobeIcon, CodeIcon, BrainIcon } from "lucide-react";
import { Button } from "./ui/button";

const Hero = ({ socialLinks }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 bg-cover bg-center" style={{ backgroundImage: "url('/blue.jpg')" }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hi, I'm <span className="text-[#007bff]">Prudvi Kumar Reddy</span>
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          AI & Machine Learning Enthusiast | Full Stack Developer
        </motion.p>

        <motion.p 
          className="text-lg text-gray-400 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Hyderabad, Telangana, India
        </motion.p>

        <motion.div 
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {Array.isArray(socialLinks) && socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-400 hover:text-[#007bff] transition-colors"
            >
              <i className={`fab fa-${link.icon} text-2xl`}></i>
            </a>
          ))}
        </motion.div>

        <motion.div 
          className="flex justify-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            { icon: BrainIcon, label: "AI/ML" },
            { icon: CodeIcon, label: "Full Stack" },
            { icon: GlobeIcon, label: "Cloud" }
          ].map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2 glass p-4 rounded-lg hover:bg-[#111] transition-colors"
            >
              <item.icon className="w-8 h-8 text-[#007bff]" />
              <span className="text-sm text-gray-400">{item.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Button variant="outline" size="sm" asChild>
            <a href="/Prudvi Kumar Reddy-Resume (4).pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;