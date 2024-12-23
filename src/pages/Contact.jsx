import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/mrci.jpeg';

const ContactLink = ({ href, icon: Icon, children }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 sm:p-6 md:p-8 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-500"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        <span className="p-2 sm:p-3 md:p-4 rounded-lg bg-accent/10 text-accent">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </span>
        <span className="text-base sm:text-lg font-medium">{children}</span>
      </div>
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
    </motion.a>
  );
};

const Contact = () => {
  return (
    <main className="min-h-screen bg-background text-primary pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16 md:mb-24"
        >
          <div className="md:w-1/3">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-display mb-3">Hi, I'm Marci</h1>
            <p className="text-primary/60 text-base sm:text-lg leading-relaxed">
              I'm a UX designer based in Budapest, focusing on practical, 
              user-centered digital solutions. I collaborate with businesses 
              to create intuitive products that solve real problems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-accent text-sm sm:text-base">Get in Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display">Let's Build Something</h2>
          <p className="text-primary/60 text-base sm:text-lg max-w-[600px]">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3 sm:space-y-4"
        >
          <ContactLink 
            href="mailto:marci.mocsonoky.gmail.com" 
            icon={Mail}
          >
            Get in touch via email
          </ContactLink>
          
          <ContactLink 
            href="https://www.linkedin.com/in/m%C3%A1rton-mocsonoky-052091116/" 
            icon={Linkedin}
          >
            Connect on LinkedIn
          </ContactLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 md:mt-24"
        >
          <h2 className="text-xl sm:text-2xl font-display mb-4 sm:mb-6 md:mb-8">Quick Links</h2>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <Link 
              to="/projects/paynance"
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300"
            >
              <h3 className="font-display mb-1 sm:mb-2">Paynance</h3>
              <p className="text-primary/60 text-sm sm:text-base">Revolutionizing payment solutions for modern businesses</p>
            </Link>
            <Link 
              to="/projects/everprove"
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300"
            >
              <h3 className="font-display mb-1 sm:mb-2">Everprove</h3>
              <p className="text-primary/60 text-sm sm:text-base">Transforming legal contracting into a seamless experience</p>
            </Link>
            <Link 
              to="/projects/loccocity"
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 sm:col-span-2 md:col-span-1"
            >
              <h3 className="font-display mb-1 sm:mb-2">LoccoCity</h3>
              <p className="text-primary/60 text-sm sm:text-base">Gamifying city exploration and rewards</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Contact;