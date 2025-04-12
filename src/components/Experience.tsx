import { motion } from "framer-motion";
import { BriefcaseIcon } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Web Intern",
      company: "Unifies Mentor",
      date: "Feb 15, 2025 – Present",
      description: [
        "Developing and integrating full-stack features using React, Node.js, and Firebase",
        "Implementing secure authentication flows and scalable database schemas",
        "Collaborating in Agile sprints to improve user experience and performance"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Freelance/Self Placed",
      date: "Jan 2024 – Feb 2025",
      description: [
        "Built responsive and modular UI components using React.js and Tailwind CSS",
        "Worked closely with clients to translate user requirements into functional interfaces",
        "Optimized performance and deployed projects to cloud platforms for scalability"
      ]
    },
    {
      title: "Power BI Intern",
      company: "PWC",
      date: "Aug 2024",
      description: [
        "Built high-impact dashboards, enhancing data visualization for strategic decision-making",
        "Identified executive-level gender disparity through analysis, driving policy recommendations"
      ]
    },
    {
      title: "AI-ML Intern",
      company: "IBM Skills Build",
      date: "Jun 2024 - Jul 2024",
      description: [
        "Engineered AI automation workflows with IBM Watson, boosting operational efficiency",
        "Optimized cloud deployment for scalability, improving service reliability"
      ]
    },
    {
    title: "Data Analyst",
    company: "Accenture (Micro-Internship)",
    date: "Nov 2023",
    description: [
      "Conducted root-cause analysis and improved data quality across business units",
      "Created visual insights using dashboards to support strategic decisions"
    ]
  },
  {
    title: "Data Analyst",
    company: "IBM Skills Build (Micro-Internship)",
    date: "Nov 2023",
    description: [
      "Utilized IBM Cognos and SPSS to analyze trends and patterns in data",
      "Delivered actionable recommendations based on analytics reports"
    ]
  },
    {
      title: "Data Science Intern",
      company: "TATA",
      date: "Nov 2023",
      description: [
        "Performed advanced data processing on large datasets, enabling data-driven insights",
        "Developed algorithms to accelerate data retrieval, enhancing analytical precision"
      ]
    },
    {
      title: "Data Analyst",
      company: "Accenture (Micro-Internship)",
      date: "Nov 2023",
      description: [
        "Conducted root-cause analysis and improved data quality across business units",
        "Created visual insights using dashboards to support strategic decisions"
      ]
    },
    {
      title: "Data Analyst",
      company: "IBM Skills Build (Micro-Internship)",
      date: "Nov 2023",
      description: [
        "Utilized IBM Cognos and SPSS to analyze trends and patterns in data",
        "Delivered actionable recommendations based on analytics reports"
      ]
    },
    {
      title: "AI-ML Intern",
      company: "AWS (Edu Skills)",
      date: "Sep 2023 - Nov 2023",
      description: [
        "Explored AI-driven analytics, researching transformative applications in machine learning",
        "Researched industry trends, aligning skills with career opportunities in data science"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">            
            {experiences.map((exp, index) => (
             <motion.div
             key={index}
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: index * 0.1 }}
             className="glass p-6 rounded-2xl"
           >
             <div className="flex items-start gap-4">
               <div className="p-2 bg-primary/10 rounded-lg">
                 <BriefcaseIcon className="w-6 h-6 text-primary" />
               </div>
               <div>
                 <h3 className="text-xl font-semibold text-primary">
                   {exp.title}
                 </h3>
                 <p className="text-muted-foreground">
                   {exp.company}
                 </p>
                 <p className="text-sm text-muted-foreground mb-4">
                   {exp.date}
                 </p>
                 <ul className="list-disc list-inside space-y-2">
                   {exp.description.map((item, i) => (
                            <li key={i} className="text-muted-foreground">{item}</li>
                          ))}
                        </ul>
               </div>
             </div>
           </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;