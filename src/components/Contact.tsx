import { useState } from "react";
import { Mail, Linkedin, Github, Phone, Copy, Check, ArrowRight, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "prudvireddy7733@gmail.com",
    href: "mailto:prudvireddy7733@gmail.com",
    color: "from-primary to-purple-500",
    bgGlow: "bg-primary"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+91) 9515947893",
    href: "tel:+919515947893",
    color: "from-primary to-purple-500",
    bgGlow: "bg-primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/prudvi-kumar-reddy-5679662a5",
    color: "from-primary to-purple-500",
    bgGlow: "bg-primary"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View Projects",
    href: "https://github.com/Prudvi337",
    color: "from-primary to-purple-500",
    bgGlow: "bg-primary"
  }
];

const ContactCard = ({ contact, index }) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const handleCopy = (e, value) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const shouldShowCopy = (contact.label === "Email" || contact.label === "Phone") && !isCopied;
  
  // Create an instance of the icon component
  const IconComponent = contact.icon;
  
  return (
    <div
      className="relative group transform transition-all duration-500"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className={`absolute -inset-0.5 ${contact.bgGlow}/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
      
      <a
        href={contact.href}
        target={contact.label === "Email" || contact.label === "Phone" ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className="relative flex items-center gap-4 p-5 rounded-xl backdrop-blur-sm border border-white/10 bg-black/40 hover:bg-black/60 transition-all duration-300"
      >
        <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-all duration-300`}>
          {/* Render the icon correctly as a component */}
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        
        <div className="flex-1">
          <h3 className={`font-semibold text-white group-hover:bg-gradient-to-r ${contact.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
            {contact.label}
          </h3>
          <p className="text-sm text-gray-300">
            {contact.value}
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          {shouldShowCopy ? (
            <button
              onClick={(e) => handleCopy(e, contact.value)}
              className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
              aria-label={`Copy ${contact.label}`}
            >
              <Copy className="w-4 h-4" />
            </button>
          ) : isCopied ? (
            <span className="p-2 rounded-full text-green-400">
              <Check className="w-4 h-4" />
            </span>
          ) : (
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
        </div>
      </a>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
            placeholder="your@email.com"
            required
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
        <input
          type="text"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
          placeholder="How can I help you?"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-black/30 border border-white/10 rounded-xl p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
          placeholder="Your message here..."
          required
        ></textarea>
      </div>
      
      {submitStatus === "success" && (
        <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-sm">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-purple-500 px-5 py-3 font-medium text-white w-full md:w-auto disabled:opacity-70"
      >
        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span className="relative flex items-center justify-center gap-2">
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </button>
    </form>
  );
};

const FloatingGradient = ({ size, position, blur, colors }) => (
  <div 
    className={`absolute rounded-full opacity-20 blur-3xl animate-pulse`}
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: `linear-gradient(to right, ${colors})`,
      left: `${position.x}%`,
      top: `${position.y}%`,
      animationDuration: `${5 + Math.random() * 5}s`
    }}
  />
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <FloatingGradient size={300} position={{ x: 80, y: 20 }} blur="3xl" colors="var(--primary), purple" />
        <FloatingGradient size={250} position={{ x: 10, y: 70 }} blur="3xl" colors="purple, var(--primary)" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4">
              Get in Touch
            </h2>
            
            <p className="text-gray-300 max-w-lg mx-auto">
              Have a question or want to work together? Feel free to reach out through any of these channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <ContactCard key={index} contact={contact} index={index} />
                ))}
              </div>
              
              <div className="pt-6">
                <div className="h-px w-full bg-gradient-to-r from-primary/20 via-purple-500/20 to-transparent"></div>
                <p className="text-gray-400 mt-4 text-sm">
                  I'm available for freelance projects, full-time positions, or just a friendly chat about tech!
                </p>
              </div>
            </div>
            
            <div className="glass p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/10 bg-black/30">
              <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                Send a Message
              </h3>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      
      {/* Add a radial gradient light effect at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-purple-500/5 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default Contact;