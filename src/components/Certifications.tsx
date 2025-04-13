import { useState, useEffect } from "react";
import { AwardIcon, Sparkles, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Python Essentials",
    academy: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/c4326b91-0888-49c7-b666-19ac1317e8bf/public_url",
    icon: "🐍"
  },
  {
    name: "Machine Learning",
    academy: "AWS Academy",
    link: "https://www.credly.com/badges/5f0579ac-b395-48c9-ab9d-bb3f63127acb/public_url",
    icon: "🧠"
  },
  {
    name: "Cloud Computing",
    academy: "AWS Academy",
    link: "https://www.credly.com/badges/d5b0edf9-4fd9-4f8b-ab9c-e00910eb0191/public_url",
    icon: "☁️"
  },
  {
    name: "Data Science",
    academy: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/2cabdf26-34a4-42b9-b434-d3b43543b4c5/public_url",
    icon: "📊"
  },
  {
    name: "Cyber Security",
    academy: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/50d15b78-bc25-4a96-a703-9a7cc817371e/public_url",
    icon: "🔒"
  },
  {
    name: "Artificial Intelligence",
    academy: "IBM Skills Build",
    link: "https://www.credly.com/badges/3aadbc29-c1b7-4acc-a688-8024a04be6a8/public_url",
    icon: "🤖"
  },
  {
    name: "Foundations Associate",
    academy: "Oracle University",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D4C47C1DB82E25CE7F53B994D65597E11FD691D2E37211B86C5F6C2D31964B50",
    icon: "🏛️"
  }
];

const CertCard = ({ cert, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleMouseMove = (e) => {
    if (!mounted) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = -(x - centerX) / 15;

    setPosition({ x: rotateY, y: rotateX });
  };

  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className={`group relative transform transition-all duration-300 ${isHovered ? "scale-105 z-20" : "scale-100 z-10"}`}
      style={{
        perspective: "1000px",
        transitionDelay: `${index * 50}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetPosition}
      onMouseMove={handleMouseMove}
    >
      <div
        className="bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-0.5 shadow-lg relative overflow-visible"
        style={{
          transform: `rotateX(${position.y}deg) rotateY(${position.x}deg)`,
          transition: isHovered ? "transform 0.2s ease-out" : "transform 0.5s ease-out",
        }}
      >
        <div className="bg-black/50 backdrop-blur-xl rounded-lg p-6 h-full relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

          {/* Floating emoji icon */}
          <div
            className="absolute right-4 top-4 text-2xl transition-all duration-500 animate-pulse"
            style={{
              animationDuration: `${3 + (index % 3)}s`,
            }}
          >
            {cert.icon}
          </div>

          <div className="flex items-start gap-3">
            <div className="p-3 bg-blue-500/10 rounded-xl transition-all duration-300 group-hover:bg-blue-500/20 group-hover:shadow-lg">
              <AwardIcon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            </div>

            <div className="space-y-1">
              <h3 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {cert.name}
              </h3>
              <p className="text-gray-400 text-sm">{cert.academy}</p>
            </div>
          </div>

          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            aria-label={`View ${cert.name} certification`}
          >
            <ExternalLink className="w-5 h-5" />
          </a>

          {/* Particle effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute animate-ping text-blue-300 w-3 h-3" style={{ top: "20%", left: "80%", animationDuration: "1s" }} />
              <Sparkles className="absolute animate-ping text-purple-300 w-3 h-3" style={{ top: "70%", left: "30%", animationDuration: "1.5s" }} />
              <Sparkles className="absolute animate-ping text-pink-300 w-3 h-3" style={{ top: "40%", left: "60%", animationDuration: "2s" }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FloatingBubble = ({ size, color, delay, duration, position }) => (
  <div 
    className="absolute rounded-full opacity-20"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: color,
      left: `${position.x}%`,
      top: `${position.y}%`,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  />
);

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <FloatingBubble size={200} color="#3b82f6" delay={0} duration={15} position={{ x: 80, y: 20 }} />
        <FloatingBubble size={300} color="#8b5cf6" delay={2} duration={20} position={{ x: 10, y: 60 }} />
        <FloatingBubble size={150} color="#ec4899" delay={5} duration={18} position={{ x: 50, y: 70 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/70 to-black/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="text-blue-400 uppercase tracking-wider text-sm font-semibold">Validated Skills</span>
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Professional Certifications
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Industry-recognized credentials validating expertise across multiple technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Add a radial gradient light effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default Certifications;