import { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Google Drive direct download link for your resume
  const RESUME_URL = "https://drive.google.com/uc?export=download&id=1N1x3eD0zpUv8wXi1GDctud7P2dLP526v";
  
  // For viewing (opens in new tab): 
  // const RESUME_VIEW_URL = "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleResumeDownload = () => {
    // Track download event (optional)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'resume_download', {
        event_category: 'engagement',
        event_label: 'navbar_resume_button'
      });
    }
    
    // Open resume in new tab for download
    window.open(RESUME_URL, '_blank');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-400">
              Anupam Anand Singh
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="btn-outline"
              onClick={handleResumeDownload}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-accent"
              size="sm"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect mt-2 rounded-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="btn-outline w-full"
                  onClick={handleResumeDownload}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                <Button 
                  onClick={() => scrollToSection('#contact')}
                  className="btn-accent w-full"
                  size="sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
