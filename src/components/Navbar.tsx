import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const navItems = ["Experience", "Projects", "Certifications", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#222]"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* All items centered in one row */}
          <div className="flex items-center justify-center space-x-4">
            {/* Navigation links - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.slice(0, 2).map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-[#007bff] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            {/* Github Icon - always visible */}
            <Button variant="ghost" size="icon" className="p-0" asChild>
              <a
                href="https://github.com/Prudvi337"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#007bff]"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </Button>
            
            {/* Logo - always visible */}
            <motion.div whileHover={{ scale: 1.05 }} className="mx-2">
              <a href="#">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-12 w-auto object-contain"
                />
              </a>
            </motion.div>
            
            {/* LinkedIn Icon - always visible */}
            <Button variant="ghost" size="icon" className="p-0" asChild>
              <a
                href="https://www.linkedin.com/in/prudvi-kumar-reddy-5679662a5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#007bff]"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </Button>
            
            {/* Last two nav items - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.slice(2, 4).map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-[#007bff] transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;