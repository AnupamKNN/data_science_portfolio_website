import { 
  BarChart3, 
  Brain, 
  Bot, 
  Cloud, 
  Users,
  Database,
  Zap,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Freelance Data Analysis & Dashboarding',
      description: 'Transform your raw data into actionable insights with interactive Power BI dashboards, advanced SQL analytics, and comprehensive Excel reporting solutions.',
      features: [
        'Interactive Power BI Dashboards',
        'Advanced SQL Data Analytics',
        'Excel Automation & Reporting',
        'Data Visualization & Storytelling'
      ],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI/ML Model Development',
      description: 'Build custom machine learning solutions for your business needs, from predictive analytics to deep learning models for complex pattern recognition.',
      features: [
        'Predictive Analytics Models',
        'Deep Learning Solutions',
        'Natural Language Processing',
        'Computer Vision Applications'
      ],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Bot,
      title: 'Generative AI Solutions',
      description: 'Leverage cutting-edge generative AI to create intelligent chatbots, content generation systems, and multi-agent AI solutions for your enterprise.',
      features: [
        'RAG-based Chatbots',
        'Multi-Agent AI Systems',
        'LLM Integration & Fine-tuning',
        'Custom AI Applications'
      ],
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Cloud,
      title: 'End-to-End MLOps',
      description: 'Streamline your ML workflow with comprehensive MLOps solutions including CI/CD pipelines, cloud deployment, and automated model monitoring.',
      features: [
        'CI/CD Pipeline Setup',
        'Cloud Infrastructure (AWS/Azure)',
        'Model Deployment & Monitoring',
        'Workflow Orchestration'
      ],
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: Users,
      title: 'Project Management Consulting',
      description: 'Optimize your project delivery with Agile/Scrum methodologies, Jira workflow setup, and MS Project planning for data science initiatives.',
      features: [
        'Agile/Scrum Implementation',
        'Jira Workflow Configuration',
        'MS Project Planning',
        'Team Collaboration Setup'
      ],
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data science and AI consulting services to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                </Button>

                {/* Hover Effect Indicator */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl`} />
              </div>
            );
          })}
        </div>

        {/* Process Overview */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              My <span className="gradient-text">Process</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              A proven methodology for delivering successful data science projects
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'Understanding your business needs and data landscape',
                icon: Database
              },
              {
                step: '02',
                title: 'Solution Design',
                description: 'Architecting the optimal AI/ML solution for your use case',
                icon: Settings
              },
              {
                step: '03',
                title: 'Development & Testing',
                description: 'Building and validating models with rigorous testing',
                icon: Brain
              },
              {
                step: '04',
                title: 'Deployment & Support',
                description: 'Deploying to production with ongoing monitoring and support',
                icon: Zap
              }
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {process.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {process.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {process.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how these services can help you unlock the power of your data 
            and drive meaningful business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-hero"
              size="lg"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="btn-outline"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;