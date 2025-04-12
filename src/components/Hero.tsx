import { useEffect } from 'react';
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
  useEffect(() => {
    document.title = "Prudvi Kumar Reddy";
  }, []);

  // Hide floating tags on mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black opacity-80" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100">
          I'M Prudvi Kumar Reddy
        </h1>

        {/* Mobile Only Subtitle */}
        <p className="text-lg text-blue-200 md:hidden">
          AI-ML Enthusiast | Full Stack Developer
        </p>
        
        {/* Small Note for Mobile Users */}
        <p className="text-sm text-gray-400 mt-1 md:hidden">
          Check the desktop version for the full experience.
        </p>
      </div>

      {/* Free Floating Tags (Only for Desktop) */}
      {!isMobile && (
        <div className="absolute inset-0 z-10 hidden md:block">
          <FloatingTags tags={tags} />
        </div>
      )}

      {/* Resume Download Button */}
      <div className="relative z-20 mt-8">
        <a 
          href="/resume.docx" 
          download="Prudvi Kumar Reddy-Resume.docx"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Index;