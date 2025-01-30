import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
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

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <Button
                  variant="ghost"
                  className="w-full h-full flex items-center gap-4 hover:bg-primary/5"
                  asChild
                >
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-left"
                  >
                    <contact.icon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-medium text-primary">{contact.label}</h3>
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    </div>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;