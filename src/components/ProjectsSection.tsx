import { useState } from 'react';
import { ExternalLink, Github, Play, X, Maximize2, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import fd_ss_1 from '../assets/project_screenshots/01_fraud_detection/ss_1.jpg'
import fd_ss_2 from '../assets/project_screenshots/01_fraud_detection/ss_2.jpg'
import td_ss_1 from '../assets/project_screenshots/02_taxi_demand/ss_1.jpg'
import td_ss_2 from '../assets/project_screenshots/02_taxi_demand/ss_2.jpg'
import kn_ss_1 from '../assets/project_screenshots/03_knowledge_navigator/ss_1.jpg'
import kn_ss_2 from '../assets/project_screenshots/03_knowledge_navigator/ss_2.jpg'

interface Screenshot {
  url: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  domain: string;
  shortDescription: string;
  fullDescription: {
    intro: string;
    problem: string;
    objectives: string[];
  };
  techStack: string[];
  thumbnailImage: string;
  screenshots: Screenshot[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  streamlitUrl?: string;
  sampleDataUrl?: string; // Added for sample data download
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  // Updated projects with screenshot descriptions
  const projects: Project[] = [
    {
      id: '1',
      title: 'Fraud Detection & Risk Analysis Platform',
      domain: 'Finance',
      shortDescription: 'ZenithPay Solutions, a fast-growing fintech firm with 10M+ monthly transactions, faces rising risks of fraud and money laundering. To safeguard revenue and customer trust, my goal is to implement an AI-powered, real-time Fraud Detection & Risk Analytics system that ensures security, compliance, and scalability.',
      fullDescription: {
        intro: 'ZenithPay Solutions, a rapidly growing fintech founded in 2018, has become a key player in digital payments, SME banking, and cross-border remittances across India, Southeast Asia, and the Middle East. With 1.5M active merchants and 10M+ monthly transactions, the company is on a mission to make financial services fast, secure, and accessible for SMEs.',
        problem: 'However, the surge in transaction volumes has also fueled risks like credit card fraud, account takeovers, synthetic identity fraud, and money laundering. To tackle these challenges, ZenithPay\'s leadership has commissioned the development of an AI-powered Fraud Detection & Risk Analytics system capable of real-time monitoring, risk scoring, and actionable insights — while ensuring smooth customer experiences.',
        objectives: [
          'Build ML models for real-time fraud detection using historical data.',
          'Develop an interactive cloud-based fraud analytics dashboard with LLM-powered explanations.',
          'Implement CI/CD with DVC and MLflow for versioning and tracking.',
          'Deploy on Streamlit Cloud for easy stakeholder access.'
        ]
      },
      techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'MLFlow', 'DVC', 'Streamlit Cloud', 'MongoDB', 'GitHub Actions','Docker', 'GitHub Container Registry (GHCR)', 'LangChain', 'ChatGroq'],
      thumbnailImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      screenshots: [
        {
          url: fd_ss_1,
          description: 'Dashboard theme aligns with fraud detection problem featuring appropriate fraud probability distribution visualization.'
        },
        {
          url: fd_ss_2,
          description: 'Interactive dashboard displays transaction predictions with detailed tabular data and intelligent LLM chatbot functionality.'
        }
      ],
      videoUrl: 'https://www.youtube.com/embed/60J0vSLglvk',
      liveUrl: 'https://frauddetection-riskanalysis-czzjjkrx6dkp9tzsbj55jc.streamlit.app/',
      githubUrl: 'https://github.com/AnupamKNN/Fraud_Detection_-_Risk_Analysis',
      streamlitUrl: 'https://frauddetection-riskanalysis-czzjjkrx6dkp9tzsbj55jc.streamlit.app/',
      sampleDataUrl: 'https://drive.google.com/uc?export=download&id=19hhN7x7NdK38JEpQSWm6o3kJp9s-FYuo' // Direct download link
    },
    {
      id: '2',
      title: 'Taxi/Ride-share Demand Forecasting & Supply Optimization',
      domain: 'Transportaion',
      shortDescription: 'OrionCabs, a fast-growing urban mobility platform, manages millions of trips monthly but faces challenges in balancing demand, optimizing driver earnings, and promoting sustainability. My goal is to implement AI-driven analytics for demand forecasting, pricing optimization, and EV adoption, enabling efficient, data-driven mobility solutions for both riders and drivers.',
      fullDescription: {
        intro: 'OrionCabs, a next-generation urban mobility platform, has become an integral part of metropolitan transportation with millions of rides completed monthly. While the company focuses on building a sustainable ecosystem through AI-driven demand forecasting, optimized pricing, and EV adoption, it continues to face challenges in balancing supply and demand across zones, hours, and events.',
        problem: 'To address this, OrionCabs’ leadership has commissioned a data-driven Demand Forecasting & Driver Allocation project, aimed at minimizing wait times, improving driver earnings, and ensuring equitable service coverage. The project has been assigned to the data analytics team, with a focus on delivering predictive and prescriptive insights for operations.',
        objectives: [
          'Predict hourly ride demand across pickup zones',
          'Recommend driver deployment for hot zones',
          'Flag demand surges/shortages with alerts',
          'Provide explainable insights for non-technical teams',
          'Build a self-serve Streamlit UI for operations'
        ]
      },
      techStack: ['Python', 'TensorFlow', 'Keras Tuner', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'MLFlow', 'DVC','Streamlit', 'GitHub Actions', 'Docker', 'GitHub Container Registry (GHCR)', 'LangChain', 'ChatGroq'],
      thumbnailImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      screenshots: [
        {
          url: td_ss_1,
          description: 'Smart transportation forecasting application with comprehensive weather integration and transparent decision-making explanations.'
        },
        {
          url: td_ss_2,
          description: 'AAdvanced predictive analytics platform featuring interactive AI consultation, scenario modeling, and comprehensive reporting capabilities.'
        }
      ],
      videoUrl: 'https://www.youtube.com/embed/biS83GinVEE',
      liveUrl: 'https://taxi-demand-forecast-9wmwrc6fz8ma4v8ay4285r.streamlit.app/',
      githubUrl: 'https://github.com/AnupamKNN/taxi-demand-forecast',
      streamlitUrl: 'https://taxi-demand-forecast-9wmwrc6fz8ma4v8ay4285r.streamlit.app/'
    },
    {
      id: '3',
      title: 'GenAI Knowledge Navigator',
      domain: 'Enterprise Learning',
      shortDescription: 'InfoFusion Technologies, a fast-growing enterprise learning and AI solutions provider, helps organizations stay competitive by closing skill gaps and accelerating knowledge adoption. My goal is to implement intelligent, data-driven learning platforms that deliver personalized microlearning and real-time industry insights to boost workforce readiness.',
      fullDescription: {
        intro: 'InfoFusion Technologies, a leading provider of enterprise learning and AI solutions, helps organizations adapt to rapid advancements in AI, cloud engineering, data analytics, and project management. By integrating curated knowledge with real-time industry insights, InfoFusion accelerates workforce readiness and closes critical skill gaps.',
        problem: 'However, many enterprises still rely on static PDFs and outdated manuals, leading to delayed skill adoption, high training costs, and low ROI. To address this, InfoFusion’s leadership has commissioned a Smart Learning Transformation project that reimagines enterprise training through data-driven, adaptive learning flows. This initiative has been assigned to the data analytics and AI team, with the goal of making learning scalable, personalized, and aligned with industry trends.',
        objectives: [
          'Convert technical guides into role-specific microlearning modules',
          'Index dense material in a vector database and enable hybrid retrieval with live sources',
          'Auto-generate interview prep content, practice questions, and study aids',
          'Deliver an interactive dashboard for Q&A and quizzes',

        ]
      },
      techStack: ['Python', 'LangChain', 'OpenAI', 'ChatGroq','ChromaDB', 'Pandas', 'NumPy', 'Sentence Transformer','Streamlit', 'Docker', 'GitHub Container Registry (GHCR)'],
      thumbnailImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      screenshots: [
        {
          url: kn_ss_1,
          description: 'Interactive AI chat interface for document Q&A and knowledge queries'
        },
        {
          url: kn_ss_2,
          description: 'Learning analytics dashboard with personalized insights and progress tracking'
        }
      ],
      videoUrl: 'https://www.youtube.com/embed/ooi0HEy_pzU',
      liveUrl: 'https://knowledgenavigatorrag-hqmpq4rhluw9h43ouexzq8.streamlit.app/',
      githubUrl: 'https://github.com/AnupamKNN/Knowledge_Navigator_RAG',
      streamlitUrl: 'https://knowledgenavigatorrag-hqmpq4rhluw9h43ouexzq8.streamlit.app/'
    }
  ];

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentScreenshotIndex(0); // Reset to first screenshot
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentScreenshotIndex(0);
  };

  const nextScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshotIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousScreenshot = () => {
    if (selectedProject) {
      setCurrentScreenshotIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      );
    }
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
              className="bg-card rounded-xl overflow-hidden hover-lift cursor-pointer group border border-border"
              onClick={() => openProjectModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.thumbnailImage} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {project.domain}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="shadow-lg">
                    <Play className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                
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
        <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedProject && (
            <div className="space-y-8">
              {/* Top Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {selectedProject.domain}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {selectedProject.shortDescription}
                  </p>
                  
                  {/* Action Buttons with Conditional Sample Data Button */}
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {selectedProject.streamlitUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.streamlitUrl} target="_blank" rel="noopener noreferrer">
                          <Maximize2 className="w-4 h-4 mr-2" />
                          Open in New Tab
                        </a>
                      </Button>
                    )}
                    
                    {/* Sample Data Download Button - Only for Fraud Detection Project */}
                    {selectedProject.id === '1' && selectedProject.sampleDataUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedProject.sampleDataUrl} download="sample_transactions.csv">
                          <Download className="w-4 h-4 mr-2" />
                          Download Sample Data
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Tech Stack */}
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

                {/* Screenshot Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Project Screenshots</h4>
                    <span className="text-xs text-muted-foreground">
                      {currentScreenshotIndex + 1} of {selectedProject.screenshots.length}
                    </span>
                  </div>
                  
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-lg border shadow-lg">
                      <img
                        src={selectedProject.screenshots[currentScreenshotIndex].url}
                        alt={`Screenshot ${currentScreenshotIndex + 1}`}
                        className="w-full h-auto max-h-[500px] object-contain transition-opacity duration-300 bg-gray-50"
                      />
                      
                      {/* Navigation Buttons - Enhanced */}
                      {selectedProject.screenshots.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              previousScreenshot();
                            }}
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              nextScreenshot();
                            }}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hover:scale-110"
                          >
                            <ChevronRight className="w-6 h-6" />
                          </button>
                        </>
                      )}
                      
                      {/* Image Counter Overlay */}
                      <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {currentScreenshotIndex + 1} / {selectedProject.screenshots.length}
                      </div>
                    </div>
                    
                    {/* Screenshot Description - Enhanced */}
                    <div className="mt-4 p-4 bg-gradient-to-r from-muted/60 to-muted/40 rounded-lg border-l-4 border-primary">
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        {selectedProject.screenshots[currentScreenshotIndex].description}
                      </p>
                    </div>
                    
                    {/* Dots Indicator - Enhanced */}
                    {selectedProject.screenshots.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-3">
                        {selectedProject.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentScreenshotIndex(index);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentScreenshotIndex 
                                ? 'bg-primary scale-125 shadow-lg' 
                                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 hover:scale-110'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Details with Proper Formatting */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-semibold text-lg">Project Details</h4>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription.intro}
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription.problem}
                    </p>
                    
                    <div>
                      <p className="font-medium mb-3 text-foreground">Project Objectives:</p>
                      <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-2">
                        {selectedProject.fullDescription.objectives.map((objective, index) => (
                          <li key={index} className="leading-relaxed">{objective}</li>
                        ))}
                      </ol>
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

              {/* Sample Data Information - Only for Fraud Detection */}
              {selectedProject.id === '1' && selectedProject.sampleDataUrl && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-3 text-blue-800"> Try the App yourself</h4>
                  <p className="text-blue-700 text-sm leading-relaxed mb-4">
                    Download the sample transaction dataset used in this fraud detection system. The dataset contains anonymized transaction records with features for fraud detection model training and testing.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-blue-600">
                      <span className="font-medium">File:</span> sample_transactions.csv • 
                      <span className="font-medium ml-1">Size:</span> ~2MB • 
                      <span className="font-medium ml-1">Format:</span> CSV
                    </div>
                    <Button variant="outline" size="sm" asChild className="border-blue-300 text-white hover:bg-blue-400">
                      <a href={selectedProject.sampleDataUrl} download="sample_transactions.csv">
                        <Download className="w-4 h-4 mr-2" />
                        Download Dataset
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              {/* Embedded Streamlit App */}
              {selectedProject.streamlitUrl && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">Live Interactive Application</h4>
                    <p className="text-sm text-muted-foreground">Try the app directly below</p>
                  </div>
                  
                  <div className="border border-border rounded-lg overflow-hidden bg-white">
                    <div className="bg-muted px-4 py-2 border-b border-border flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">
                        {selectedProject.streamlitUrl}
                      </span>
                    </div>
                    
                    <div className="relative">
                      <iframe
                        src={selectedProject.streamlitUrl + "?embed=true"}
                        title={`${selectedProject.title} - Live App`}
                        className="w-full h-[600px] border-0"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                      
                      <div className="absolute inset-0 bg-muted/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2">
                          <p className="text-sm text-muted-foreground">Interactive Streamlit Application</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    💡 Tip: Click and interact with the app above. For full-screen experience, use the "Open in New Tab" or "Fullscreen" button.
                  </p>
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
