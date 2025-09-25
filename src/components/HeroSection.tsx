import { ArrowDown, Github, Linkedin, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/anupam-profile.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-primary opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-accent/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-blue-light/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="text-cyan-accent">Anupam</span>
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold space-y-2">
                <p>Data Scientist</p>
                <p>ML Engineer</p>
                <p>AI Engineer</p>
                <p>GenAI Developer</p>
              </div>
            </div>

            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
              Aspiring Data Scientist and AI Engineer skilled in Machine Learning, Deep Learning, and Generative AI. 
              Passionate about building scalable, intelligent systems that turn data into impactful solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="btn-hero group"
                size="lg"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                See My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('#contact')}
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a 
                href="https://linkedin.com/in/anupam-anand-singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-accent transition-colors hover:scale-110 transform duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/anupam-anand-singh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-accent transition-colors hover:scale-110 transform duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-cyan-accent/30 rounded-full blur-3xl animate-glow" />
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 hover-lift">
                <img 
                  src={profileImage} 
                  alt="Anupam Anand Singh - Data Scientist and AI Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Skill Badges */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <span className="text-white font-semibold text-sm">Python</span>
              </div>
              <div className="absolute top-1/2 -left-8 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <span className="text-white font-semibold text-sm">ML/DL</span>
              </div>
              <div className="absolute -bottom-4 right-8 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <span className="text-white font-semibold text-sm">GenAI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => scrollToSection('#about')}
            className="text-white/70 hover:text-white transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;