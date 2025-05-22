import { Mail, Linkedin, Github, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "prudvireddy7733@gmail.com",
    href: "mailto:prudvireddy7733@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(+91) 9515947893",
    href: "tel:+919515947893"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/prudvi-kumar-reddy-5679662a5"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View Projects",
    href: "https://github.com/Prudvi337"
  }
];

const ContactCard = ({ contact, index }) => {
  const [isCopied, setIsCopied] = useState(false);
  const Icon = contact.icon;

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(contact.value);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const isCopyable = contact.label === "Email" || contact.label === "Phone";

  return (
    <a
      href={contact.href}
      target={isCopyable ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="group relative transform transition duration-500 hover:scale-105"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition-all duration-700"></div>

      <div className="relative flex items-center gap-4 p-5 rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg hover:bg-black/60 transition-all duration-300 shadow-lg">
        <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition">
          <Icon className="w-6 h-6 text-primary animate-pulse" />
        </div>

        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {contact.label}
          </h3>
          <p className="text-gray-300 text-sm">{contact.value}</p>
        </div>

        {isCopyable && (
          <button
            onClick={handleCopy}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition"
            aria-label={`Copy ${contact.label}`}
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    </a>
  );
};

const FloatingGlow = ({ size, x, y, colors }) => (
  <div
    className="absolute rounded-full opacity-20 blur-3xl animate-pulse"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: `linear-gradient(to right, ${colors})`,
      top: `${y}%`,
      left: `${x}%`,
      animationDuration: `${6 + Math.random() * 4}s`
    }}
  />
);

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Animated floating glows */}
      <div className="absolute inset-0 -z-10">
        <FloatingGlow size={300} x={80} y={20} colors="var(--primary), purple" />
        <FloatingGlow size={200} x={10} y={70} colors="purple, var(--primary)" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black/90 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-4 animate-fade-in">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-lg animate-fade-in delay-200">
            Reach out through any of the channels below. Let’s collaborate or just connect!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto animate-fade-up">
          {contactInfo.map((contact, index) => (
            <ContactCard key={index} contact={contact} index={index} />
          ))}
        </div>
      </div>

      {/* Radial glow at the bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-purple-500/5 to-transparent rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default Contact;
