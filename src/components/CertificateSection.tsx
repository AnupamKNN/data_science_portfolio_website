import { useState } from 'react';
import { Award, Calendar, ExternalLink, X, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  credentialId?: string;
  verificationUrl?: string;
  description?: string;
  status: 'active' | 'expired' | 'expiring_soon'; // New status field
  expiryDate?: string; // Optional expiry date
  isLifetime?: boolean; // For certificates that don't expire
}

import data_science_cert from '../assets/certificates/01_data_science.jpg';
import mlops_cert from '../assets/certificates/02_mlops.jpg'
import gen_ai_cert from '../assets/certificates/03_genai.jpg'
import proj_manag_cert from '../assets/certificates/04_project_management.jpg'

const CertificatesSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  // Certificate data with individual status tracking
  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Complete Data Science, Machine Learning, DL, NLP Bootcamp',
      issuer: 'Udemy',
      date: 'April 16, 2025',
      category: 'Data Science',
      image: data_science_cert,
      credentialId: 'UC-59ff6441-9e34-47e0-9dbb-a7678acf8947',
      verificationUrl: 'https://www.udemy.com/certificate/UC-59ff6441-9e34-47e0-9dbb-a7678acf8947/',
      description: 'Comprehensive data science bootcamp covering machine learning, deep learning, natural language processing, and end-to-end project development with real-world applications.',
      status: 'active',
      isLifetime: true // Udemy certificates don't expire
    },
    {
      id: '2',
      title: 'Complete MLOps Bootcamp With 10+ End To End Projects',
      issuer: 'Udemy',
      date: 'Jun 09, 2025',
      category: 'MLOps',
      image: mlops_cert,
      credentialId: 'UC-9f543627-a951-4c21-969f-5e84d51e7ec1',
      verificationUrl: 'https://www.udemy.com/certificate/UC-9f543627-a951-4c21-969f-5e84d51e7ec1/',
      description: 'End-to-end MLOps program covering the full machine learning lifecycle — from model development and data versioning to workflow automation and CI/CD. Gained hands-on experience with tools like MLflow, DVC, Docker, and Airflow, along with deploying scalable solutions on AWS and Azure.',
      status: 'active',
      isLifetime: true
    },
    {
      id: '3',
      title: 'Complete Generative AI Course With LangChain and Hugging Face',
      issuer: 'Udemy',
      date: 'Jun 02, 2025',
      category: 'Generative AI',
      image: gen_ai_cert,
      credentialId: 'UC-89e8e440-68b1-48a0-bc2c-3b245fca253e',
      verificationUrl: 'https://www.udemy.com/certificate/UC-89e8e440-68b1-48a0-bc2c-3b245fca253e/',
      description: 'In-depth course on Generative AI exploring LangChain and Hugging Face for building practical LLM applications. Topics included prompt engineering, vector databases, RAG pipelines, and deploying end-to-end AI solutions.',
      status: 'active',
      isLifetime: true
    },
    {
      id: '4',
      title: 'The Project Management Course: Beginner to PROject Manager',
      issuer: 'Udemy',
      date: 'Jul 02, 2025',
      category: 'Project Management',
      image: proj_manag_cert,
      credentialId: 'UC-2f0d54d5-4c54-475b-ad3b-2be8d1a3fd02',
      verificationUrl: 'https://www.udemy.com/certificate/UC-2f0d54d5-4c54-475b-ad3b-2be8d1a3fd02/',
      description: 'Extensive course on project management covering core principles, methodologies, and tools. Focused on planning, execution, risk management, Agile practices, and stakeholder communication to transition from beginner to professional project manager.',
      status: 'active',
      isLifetime: true
    }
  ];

  const openCertificateModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificateModal = () => {
    setSelectedCertificate(null);
  };

  // Function to get status display info
  const getStatusInfo = (certificate: Certificate) => {
    switch (certificate.status) {
      case 'active':
        return {
          icon: CheckCircle,
          color: 'text-green-500',
          bgColor: 'bg-green-500',
          text: certificate.isLifetime ? 'Verified & Lifetime' : 'Verified & Active',
          badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
        };
      case 'expiring_soon':
        return {
          icon: Clock,
          color: 'text-yellow-500',
          bgColor: 'bg-yellow-500',
          text: 'Expiring Soon',
          badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
        };
      case 'expired':
        return {
          icon: AlertCircle,
          color: 'text-red-500',
          bgColor: 'bg-red-500',
          text: 'Expired',
          badgeColor: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
        };
      default:
        return {
          icon: CheckCircle,
          color: 'text-green-500',
          bgColor: 'bg-green-500',
          text: 'Active',
          badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
        };
    }
  };

  return (
    <section id="certificates" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Awards & <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of professional certifications and achievements in Data Science, Machine Learning, Generative AI, and emerging technologies.
          </p>
        </div>

        {/* All Certificates in Single Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {certificates.map((certificate, index) => {
            const statusInfo = getStatusInfo(certificate);
            return (
              <div
                key={certificate.id}
                className="group bg-card rounded-xl overflow-hidden border border-border hover-lift cursor-pointer"
                onClick={() => openCertificateModal(certificate)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 text-white px-2 py-1 rounded-md text-xs font-medium">
                      {certificate.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`${statusInfo.badgeColor} px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1`}>
                      <statusInfo.icon className="w-3 h-3" />
                      {certificate.status === 'active' && certificate.isLifetime ? 'Lifetime' : certificate.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-4">
                  <h4 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {certificate.title}
                  </h4>
                  
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <p className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {certificate.issuer}
                    </p>
                    <p className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {certificate.date}
                    </p>
                    {certificate.credentialId && (
                      <p className="font-mono text-xs truncate">
                        ID: {certificate.credentialId}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Continuously learning and earning new certifications
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

      {/* Certificate Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={closeCertificateModal}>
        <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <DialogTitle className="text-xl font-bold gradient-text text-left">
                  {selectedCertificate?.title}
                </DialogTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {selectedCertificate?.issuer}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedCertificate?.date}
                  </span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {selectedCertificate?.category}
                  </span>
                </div>
              </div>
            </div>
          </DialogHeader>

          {selectedCertificate && (
            <div className="space-y-6">
              {/* Certificate Image - Enlarged */}
              <div className="relative bg-muted rounded-lg overflow-hidden">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-auto max-h-[65vh] object-contain mx-auto"
                />
              </div>

              {/* Certificate Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Certificate Details</h4>
                    {selectedCertificate.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {selectedCertificate.description}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm border-b border-border pb-2">
                      <span className="text-muted-foreground">Category:</span>
                      <span className="font-medium">{selectedCertificate.category}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-border pb-2">
                      <span className="text-muted-foreground">Issuing Organization:</span>
                      <span className="font-medium">{selectedCertificate.issuer}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-border pb-2">
                      <span className="text-muted-foreground">Date Issued:</span>
                      <span className="font-medium">{selectedCertificate.date}</span>
                    </div>
                    {selectedCertificate.expiryDate && (
                      <div className="flex justify-between text-sm border-b border-border pb-2">
                        <span className="text-muted-foreground">Expires:</span>
                        <span className="font-medium">{selectedCertificate.expiryDate}</span>
                      </div>
                    )}
                    {selectedCertificate.credentialId && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Credential ID:</span>
                        <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
                          {selectedCertificate.credentialId}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {selectedCertificate.verificationUrl && (
                    <div>
                      <h5 className="font-semibold mb-3">Verification</h5>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <a 
                          href={selectedCertificate.verificationUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Certificate
                        </a>
                      </Button>
                    </div>
                  )}

                  <div>
                    <h5 className="font-semibold mb-3">Skills Acquired</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.category === 'Data Science' && (
                        <>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Machine Learning</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Deep Learning</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">NLP</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Python</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Pandas</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">NumPy</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Matplotlib</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Seaborn</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Statistics & Probability</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Docker</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Streamlit</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Flask</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">FastAPI</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Scikit-Learn</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">TensorFlow</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Keras</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">PyTorch</span>
                        </>
                      )}
                      {selectedCertificate.category === 'MLOps' && (
                        <>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">MLFlow</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">DVC</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">DagsHub</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Apache Airflow</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">GitHub Actions (CI/CD)</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Grafana</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Streamlit</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Flask</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">FastAPI</span>
                        </>
                      )}
                      {selectedCertificate.category === 'Generative AI' && (
                        <>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">LangChain</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">LangSmith</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">OpenAI</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Ollama</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Groq (ChatGroq)</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Hugging Face</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">PineconeDB</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">ChromaDB</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Faiss</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Neo4j</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">AstraDB</span>
                        </>
                      )}
                      {selectedCertificate.category === 'Project Management' && (
                        <>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Microsoft Project</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Project Lifecycle</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Stakeholder Management</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Agile</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Scrum</span>
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">Waterfall</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Individual Certificate Status */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h5 className="font-semibold mb-2 text-sm">Certificate Status</h5>
                    {(() => {
                      const statusInfo = getStatusInfo(selectedCertificate);
                      return (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <div className={`w-2 h-2 rounded-full ${statusInfo.bgColor}`}></div>
                            <span className="text-muted-foreground">{statusInfo.text}</span>
                          </div>
                          {selectedCertificate.expiryDate && (
                            <p className="text-xs text-muted-foreground">
                              Expires: {selectedCertificate.expiryDate}
                            </p>
                          )}
                          {selectedCertificate.isLifetime && (
                            <p className="text-xs text-muted-foreground">
                              This certificate does not expire
                            </p>
                          )}
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CertificatesSection;
