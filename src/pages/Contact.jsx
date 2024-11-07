import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactLink = ({ href, icon: Icon, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-8 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all duration-500"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-6">
        <span className="p-4 rounded-xl bg-accent/10 text-accent">
          <Icon className="w-6 h-6" />
        </span>
        <span className="text-lg font-medium">{children}</span>
      </div>
      <ArrowUpRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
    </motion.a>
  );
};

const Contact = () => {
  return (
    <main className="min-h-screen bg-background text-primary pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-center mb-24"
        >
          <div className="md:w-1/3">
            <div className="w-48 h-48 rounded-full overflow-hidden">
              <img 
                src="/path-to-your-image.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-display mb-4">Hi, I'm Your Name</h1>
            <p className="text-primary/60 text-lg leading-relaxed">
              I'm a UX designer and product thinker based in [Your Location]. 
              With a passion for creating intuitive digital experiences, 
              I help businesses transform their ideas into user-friendly solutions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 mb-16"
        >
          <span className="text-accent">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">Let's Create Something Amazing Together</h2>
          <p className="text-primary/60 text-lg max-w-[600px]">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <ContactLink 
            href="mailto:your.email@example.com" 
            icon={Mail}
          >
            your.email@example.com
          </ContactLink>
          
          <ContactLink 
            href="https://linkedin.com/in/yourprofile" 
            icon={Linkedin}
          >
            Connect on LinkedIn
          </ContactLink>
          
          <ContactLink 
            href="https://github.com/yourusername" 
            icon={Github}
          >
            Check out my GitHub
          </ContactLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-2xl font-display mb-8">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link 
              to="/projects/paynance"
              className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300"
            >
              <h3 className="font-display mb-2">Paynance</h3>
              <p className="text-primary/60">Revolutionizing payment solutions for modern businesses</p>
            </Link>
            <Link 
              to="/projects/everprove"
              className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300"
            >
              <h3 className="font-display mb-2">Everprove</h3>
              <p className="text-primary/60">Transforming legal contracting into a seamless experience</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;