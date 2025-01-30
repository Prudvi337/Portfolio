import { motion } from "framer-motion";
import { AwardIcon } from "lucide-react";

const certifications = [
  {
    name: "Python Essentials",
    academy: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/c4326b91-0888-49c7-b666-19ac1317e8bf/public_url"
  },
  {
    name: "Machine Learning",
    academy: "AWS Academy",
    link: "https://www.credly.com/badges/5f0579ac-b395-48c9-ab9d-bb3f63127acb/public_url"
  },
  {
    name: "Cloud Computing",
    academy: "AWS Academy",
    link: "https://www.credly.com/badges/d5b0edf9-4fd9-4f8b-ab29-e00910eb0191/public_url"
  },
  {
    name: "Data Science",
    academy: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/2cabdf26-34a4-42b9-b434-d3b43543b4c5/public_url"
  },
  {
    name: "Cyber Security",
    academy: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/50d15b78-bc25-4a96-a703-9a7cc817371e/public_url"
  },
  {
    name: "Artificial Intelligence",
    academy: "IBM Skills Build",
    link: "https://www.credly.com/badges/3aadbc29-c1b7-4acc-a688-8024a04be6a8/public_url"
  },
  {
    name: "Foundations Associate",
    academy: "Oracle University",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=D4C47C1DB82E25CE7F53B994D65597E11FD691D2E37211B86C5F6C2D31964B50"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-4 rounded-xl flex flex-col items-start gap-2"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <AwardIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      {cert.name}
                    </a>
                    <p className="text-muted-foreground text-sm">{cert.academy}</p>
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

export default Certifications;