import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navItems = ["Experience", "Projects", "Certifications", "Contact"];
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
      const sectionOffsets = navItems.map((item) => {
        const el = document.getElementById(item.toLowerCase());
        return el ? el.offsetTop : 0;
      });
      const current = navItems.find((item, idx) => {
        const nextOffset = sectionOffsets[idx + 1] || Infinity;
        return scrollY + 80 >= sectionOffsets[idx] && scrollY + 80 < nextOffset;
      });
      setActiveSection(current || "");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")!.slice(1);
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({
            top: el.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-[#222] transition-shadow ${scrolled ? "shadow-lg shadow-blue-500/10" : "shadow-none"}`}
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
                  className={`text-sm transition-colors ${activeSection === item ? "text-[#007bff] font-bold" : "text-gray-400 hover:text-[#007bff]"}`}
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
                  className={`text-sm transition-colors ${activeSection === item ? "text-[#007bff] font-bold" : "text-gray-400 hover:text-[#007bff]"}`}
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