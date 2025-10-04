import { Github, Linkedin, Mail, Heart, PhoneCall } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/anupam-singh-1l/',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/AnupamKNN',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:anupam.rajput09@outlook.com',
      label: 'Email'
    },
    {
      icon: PhoneCall,
      href: 'tel:+91-7666384632',
      label: 'Phone'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">
              Anupam Anand Singh
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Data Scientist & AI Engineer passionate about transforming data 
              into actionable insights and building intelligent systems.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <span className="font-medium">Email:</span><br />
                anupam.rajput09@outlook.com
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">LinkedIn:</span><br />
                linkedin.com/in/anupam-singh-1l/
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">GitHub:</span><br />
                github.com/AnupamKNN/
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Phone:</span><br />
                +91-7666384632
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved.
            </div>
            
            <div className="flex items-center text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>and lots of</span>
              <span className="ml-1 font-semibold text-primary">AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;