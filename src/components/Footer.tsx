
import { Github, Linkedin, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <a 
          href="https://github.com/Barshan-Majumdar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-portfolio-slate hover:text-portfolio-teal transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a 
          href="https://linkedin.com/in/barshan-majumdar" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-portfolio-slate hover:text-portfolio-teal transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a 
          href="https://www.facebook.com/barshan.majumdar.official/about_overview" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-portfolio-slate hover:text-portfolio-teal transition-colors"
          aria-label="Facebook"
        >
          <Facebook size={20} />
        </a>
        <a 
          href="mailto:barshanmajumdar249@gmail.com" 
          className="text-portfolio-slate hover:text-portfolio-teal transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="text-sm text-portfolio-slate font-mono">
        Designed & Built with ❤️
      </p>
      <p className="text-xs text-portfolio-slate/60 mt-2 font-mono">
        © {currentYear} Barshan Majumdar. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
