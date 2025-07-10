
import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-sm backdrop-blur-sm py-3' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="font-mono text-portfolio-teal font-bold text-xl">
          Portfolio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 mr-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-portfolio-teal" /> : <Moon size={20} className="text-portfolio-teal" />}
          </button>
          
          {navItems.map((item, i) => (
            <a 
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 font-mono text-sm group"
            >
              <span className="text-portfolio-teal mr-1 font-mono">{`0${i + 1}.`}</span>
              <span className="text-portfolio-navy dark:text-gray-200 group-hover:text-portfolio-teal transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 mr-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-portfolio-teal" /> : <Moon size={20} className="text-portfolio-teal" />}
          </button>
          
          <button 
            className="text-portfolio-navy dark:text-gray-200 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg">
          <nav className="flex flex-col p-4">
            {navItems.map((item, i) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-4 border-b border-gray-100 dark:border-gray-800 font-mono text-sm"
              >
                <span className="text-portfolio-teal mr-2 font-mono">{`0${i + 1}.`}</span>
                <span className="text-portfolio-navy dark:text-gray-200">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
