import { useState } from 'react';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Project {
  id: string;
  title: string;
  domain: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  screenshots: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  streamlitUrl?: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Sample projects - in real implementation, this would come from a data source
  const projects: Project[] = [
    {
      id: '1',
      title: 'Financial Risk Assessment ML Model',
      domain: 'Finance',
      shortDescription: 'Predictive model for credit risk assessment using advanced ML algorithms',
      fullDescription: 'Comprehensive machine learning solution for financial institutions to assess credit risk. The model uses ensemble techniques combining Random Forest, XGBoost, and Neural Networks to predict loan default probability. Features include automated data preprocessing, feature engineering, model validation, and deployment pipeline with real-time inference capabilities.',
      techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'TensorFlow', 'FastAPI', 'Docker'],
      screenshots: ['https://via.placeholder.com/600x400/6366f1/ffffff?text=Dashboard+View', 'https://via.placeholder.com/600x400/f59e0b/ffffff?text=Model+Results'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      liveUrl: 'https://huggingface.co/spaces/demo/financial-risk',
      githubUrl: 'https://github.com/demo/financial-risk',
      streamlitUrl: 'https://financial-risk-demo.streamlit.app'
    },
    {
      id: '2',
      title: 'Smart Mobility Analytics Platform',
      domain: 'Mobility',
      shortDescription: 'Real-time traffic analysis and route optimization using computer vision',
      fullDescription: 'Advanced analytics platform for urban mobility optimization. Uses computer vision for traffic flow analysis, machine learning for demand prediction, and optimization algorithms for route planning. The system processes real-time data from traffic cameras and sensors to provide actionable insights for city planners and transportation authorities.',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'Streamlit', 'PostgreSQL', 'Redis'],
      screenshots: ['https://via.placeholder.com/600x400/10b981/ffffff?text=Traffic+Analysis', 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Route+Optimization'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      liveUrl: 'https://huggingface.co/spaces/demo/mobility',
      githubUrl: 'https://github.com/demo/mobility',
      streamlitUrl: 'https://mobility-analytics.streamlit.app'
    },
    {
      id: '3',
      title: 'Enterprise Learning AI Assistant',
      domain: 'Enterprise Learning',
      shortDescription: 'GenAI-powered chatbot for corporate training and knowledge management',
      fullDescription: 'Intelligent learning assistant built with LangChain and OpenAI GPT models. Features include document Q&A, personalized learning paths, knowledge extraction from company documents, and multi-modal content understanding. The system integrates with existing LMS platforms and provides analytics on learning patterns and knowledge gaps.',
      techStack: ['LangChain', 'OpenAI', 'ChromaDB', 'FastAPI', 'Streamlit', 'Docker'],
      screenshots: ['https://via.placeholder.com/600x400/ef4444/ffffff?text=Chat+Interface', 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Analytics+Dashboard'],
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      liveUrl: 'https://huggingface.co/spaces/demo/learning-assistant',
      githubUrl: 'https://github.com/demo/learning-assistant',
      streamlitUrl: 'https://learning-assistant.streamlit.app'
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my portfolio of data science and AI projects across various domains
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-card rounded-xl overflow-hidden hover-lift cursor-pointer group"
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary to-accent">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {project.domain}
                    </span>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.shortDescription}
                </p>
                
                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-muted-foreground text-xs px-2 py-1">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <Button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={closeProjectModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-8">
              {/* Top Section */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Project Info */}
                <div className="space-y-4">
                  <div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.domain}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {selectedProject.shortDescription}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {selectedProject.liveUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right Column - Screenshots */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Project Screenshots</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4">Project Details</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                  
                  <div className="mt-6">
                    <h5 className="font-semibold mb-3">Tech Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Video */}
                {selectedProject.videoUrl && (
                  <div>
                    <h4 className="font-semibold mb-4">Project Demonstration</h4>
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={selectedProject.videoUrl}
                        title="Project Demo"
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Live App Embed */}
              {selectedProject.streamlitUrl && (
                <div>
                  <h4 className="font-semibold mb-4">Live Interactive Application</h4>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <p className="text-muted-foreground mb-4">
                      Experience the live application directly in your browser
                    </p>
                    <Button asChild className="btn-hero">
                      <a href={selectedProject.streamlitUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open Live Application
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;