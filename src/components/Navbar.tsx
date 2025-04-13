import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const navItems = ["About", "Experience", "Projects", "Certifications", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#222]"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Text */}
          <motion.a
            href="#"
            className="text-xl font-bold text-[#007bff]"
            whileHover={{ scale: 1.05 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 150" className="w-40 h-16">
              {/* Background */}
              <rect width="400" height="150" fill="black" />
              <path d="M0 75 Q100 20, 200 75 T400 75" 
        fill="none" 
        stroke="#0066ff" 
        stroke-width="3" 
        opacity="0.3"/>
  <path d="M0 85 Q100 30, 200 85 T400 85" 
        fill="none" 
        stroke="#1e90ff" 
        stroke-width="3" 
        opacity="0.3"/>

              
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#00bfff" }} />
                  <stop offset="50%" style={{ stopColor: "#1e90ff" }} />
                  <stop offset="100%" style={{ stopColor: "#4169E1" }} />
                </linearGradient>

                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Main Text */}
              <text
                x="200"
                y="85"
                fontFamily="'Arial Black', sans-serif"
                fontSize="60"
                fill="url(#textGradient)"
                textAnchor="middle"
                filter="url(#glow)"
                style={{ letterSpacing: "3px" }}
              >
                PRUDVI
              </text>

              {/* Decorative accents */}
              <path
                d="M100 100 Q200 110, 300 100"
                stroke="url(#textGradient)"
                strokeWidth="2"
                fill="none"
                opacity="0.8"
              />

              {/* Dynamic accent circles */}
              <circle cx="320" cy="60" r="4" fill="#00bfff" opacity="0.8">
                <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="80" cy="60" r="4" fill="#4169E1" opacity="0.8">
                <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* Subtle light beams */}
              <path d="M150 40 L250 40" stroke="#1e90ff" strokeWidth="0.5" opacity="0.3" />
              <path d="M130 120 L270 120" stroke="#1e90ff" strokeWidth="0.5" opacity="0.3" />
            </svg>
          </motion.a>

          {/* Navbar Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-400 hover:text-[#007bff] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com/Prudvi337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#007bff]"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/prudvi-kumar-reddy-5679662a5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#007bff]"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
