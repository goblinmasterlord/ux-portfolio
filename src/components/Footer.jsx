import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-white/5 pt-16 pb-8">
            <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2">
                        <Link to="/" className="text-2xl font-display font-bold text-primary mb-6 block">
                            Marci's Site
                        </Link>
                        <p className="text-secondary max-w-md mb-8">
                            Crafting digital experiences that blend aesthetics with functionality.
                            Based in the digital realm, working globally.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-secondary hover:text-accent transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-secondary hover:text-accent transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-secondary hover:text-accent transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:hello@example.com" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-secondary hover:text-accent transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-primary font-bold mb-6">Sitemap</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="text-secondary hover:text-accent transition-colors">Home</Link></li>
                            <li><Link to="/#work" className="text-secondary hover:text-accent transition-colors">Work</Link></li>
                            <li><Link to="/#services" className="text-secondary hover:text-accent transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-secondary hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-primary font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link to="/privacy" className="text-secondary hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-secondary hover:text-accent transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-secondary text-sm">
                        © {currentYear} Marci's Site. All rights reserved.
                    </p>
                    <p className="text-secondary text-sm">
                        Designed & Built with <span className="text-accent">♥</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
