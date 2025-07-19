import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MinimalFooter = () => {
  const currentYear = new Date().getFullYear();
  
  const links = {
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com/in/marci' },
      { name: 'Twitter', href: 'https://twitter.com/uxwithmarci' },
      { name: 'Dribbble', href: 'https://dribbble.com/marci' },
    ],
    pages: [
      { name: 'Work', href: '/#work' },
      { name: 'Services', href: '/#services' },
      { name: 'Projects', href: '/#hobby-projects' },
      { name: 'Contact', href: '/#contact' },
    ]
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="px-6 md:px-12 lg:px-16 py-12 md:py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-900">
              marci<span className="text-red-500">.</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              UX Designer & Product Strategist
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.pages.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href.split('/')[1])}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-gray-900 mb-4">Connect</h4>
            <ul className="space-y-2">
              {links.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Marci. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Crafted with care and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MinimalFooter;