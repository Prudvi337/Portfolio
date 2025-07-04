import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Sparkles, Code, Database, Brain } from 'lucide-react';
import FloatingTags from './FloatingTags';

const tags = [
  { text: "Python", className: "text-blue-100 hover:text-blue-50" },
  { text: "C", className: "text-blue-200 hover:text-blue-100" },
  { text: "Java", className: "text-blue-300 hover:text-blue-200" },
  { text: "JavaScript", className: "text-blue-400 hover:text-blue-300" },
  { text: "HTML", className: "text-blue-200 hover:text-blue-100" },
  { text: "CSS", className: "text-blue-300 hover:text-blue-200" },
  { text: "React.js", className: "text-blue-100 hover:text-blue-50" },
  { text: "Node.js", className: "text-blue-400 hover:text-blue-300" },
  { text: "MySQL", className: "text-blue-200 hover:text-blue-100" },
  { text: "SQL", className: "text-blue-300 hover:text-blue-200" },
  { text: "Git", className: "text-blue-100 hover:text-blue-50" },
  { text: "TensorFlow", className: "text-blue-400 hover:text-blue-300" },
  { text: "IBM Watson", className: "text-blue-200 hover:text-blue-100" },
  { text: "Power BI", className: "text-blue-300 hover:text-blue-200" },
  { text: "MS Office", className: "text-blue-100 hover:text-blue-50" },
  { text: "REST APIs", className: "text-blue-400 hover:text-blue-300" },
  { text: "JSON", className: "text-blue-200 hover:text-blue-100" },
  { text: "Unix/Linux", className: "text-blue-300 hover:text-blue-200" },
  { text: "AWS", className: "text-blue-100 hover:text-blue-50" },
  { text: "IBM Cloud", className: "text-blue-400 hover:text-blue-300" }
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [typing, setTyping] = useState(true);
  
  const roles = [
    "AI-ML Enthusiast",
    "Full Stack Developer", 
    "Data Scientist",
    "Problem Solver"
  ];

  useEffect(() => {
    document.title = "Prudvi Kumar Reddy";
    setIsLoaded(true);
    // Typewriter effect for roles
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    let forward = true;
    function typeRole() {
      const role = roles[currentRole];
      if (forward) {
        if (charIndex < role.length) {
          setTypedRole(role.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(typeRole, 60);
        } else {
          forward = false;
          timeout = setTimeout(typeRole, 1200);
        }
      } else {
        if (charIndex > 0) {
          setTypedRole(role.slice(0, charIndex - 1));
          charIndex--;
          timeout = setTimeout(typeRole, 30);
        } else {
          forward = true;
          setCurrentRole((prev) => (prev + 1) % roles.length);
          timeout = setTimeout(typeRole, 400);
        }
      }
    }
    typeRole();
    return () => clearTimeout(timeout);
  }, [currentRole]);

  // Background particles animation
  const backgroundParticles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: 0
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Infinity,
        delay: Math.random() * 5,
        ease: "linear"
      }}
    />
  ));

  // Floating icons
  const floatingIcons = [
    { Icon: Code, delay: 0, color: "text-blue-400" },
    { Icon: Database, delay: 1, color: "text-purple-400" },
    { Icon: Brain, delay: 2, color: "text-cyan-400" },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {backgroundParticles}
      </div>

      {/* Floating decorative icons */}
      {floatingIcons.map(({ Icon, delay, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            rotate: 0
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1, 0.8, 1],
            rotate: 360,
          }}
          transition={{
            duration: 15,
            delay: delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Icon size={24} />
        </motion.div>
      ))}

      {/* Hero Section */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium">
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="inline-block mr-2"
            >
              👋
            </motion.span>
            Hello, I'm
          </span>
        </motion.div>

        {/* Main Title with staggered animation */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-400 to-cyan-400"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Prudvi Kumar Reddy
          </motion.span>
        </motion.h1>

        {/* Animated Tagline */}
        <motion.p
          className="text-lg md:text-2xl text-blue-200 mb-4 font-medium animate-fade-in"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          Building the future with code, data, and creativity.
        </motion.p>

        {/* Animated Role Subtitle (Typewriter) */}
        <motion.div 
          className="h-8 mb-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-xl text-blue-200 font-medium">
            {typedRole}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="ml-1 text-blue-400"
            >
              |
            </motion.span>
          </span>
        </motion.div>

        {/* Sparkle decoration */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Sparkles className="w-6 h-6 text-blue-400/30" />
        </motion.div>
      </motion.div>

      {/* Floating Tags */}
      <div className="absolute inset-0 z-10">
        <FloatingTags tags={tags} />
      </div>

      {/* Resume Download Button */}
      <motion.div 
        className="relative z-20 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.a
          href="/Prudvi Kumar Reddy-Resume.pdf"
          download="Prudvi Kumar Reddy-Resume.pdf"
          className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-600 rounded-xl shadow-lg overflow-hidden transition-all duration-300 border-2 border-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 hover:border-blue-300 hover:shadow-blue-400/60 hover:shadow-2xl"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 24px 4px rgba(59, 130, 246, 0.4)"
          }}
        >
          <Download className="w-5 h-5 mr-2 animate-bounce" />
          Download Resume
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-blue-300/60"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;