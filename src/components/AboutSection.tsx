import { Award, Target, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'Leveraging cutting-edge AI technologies to solve real-world business challenges'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Every solution is backed by rigorous analysis and evidence-based insights'
    },
    {
      title: 'Collaborative Approach',
      description: 'Working closely with teams to ensure solutions align with business objectives'
    },
    {
      title: 'Continuous Learning',
      description: 'Staying ahead of the curve with the latest developments in AI and machine learning'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Redefining how businesses see data. Building intelligence that powers growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As an aspiring Data Scientist and AI Engineer, I bring a unique blend of technical 
                  expertise and business acumen to every project. My journey in the field of artificial 
                  intelligence and machine learning has been driven by a deep curiosity about how 
                  data can be transformed into meaningful insights that drive real-world impact.
                </p>
                <p>
                  With hands-on experience in Machine Learning, Deep Learning, and Generative AI, 
                  I specialize in building scalable, intelligent systems that solve complex business 
                  problems. My expertise spans the entire data science lifecycle, from data collection 
                  and preprocessing to model deployment and monitoring in production environments.
                </p>
                <p>
                  What sets me apart is my proficiency in MLOps and cloud deployment, ensuring that 
                  the solutions I build are not just accurate but also robust, scalable, and maintainable. 
                  I'm passionate about staying at the forefront of AI innovation, particularly in the 
                  rapidly evolving field of Generative AI and Large Language Models.
                </p>
              </div>
            </div>

            {/* Mission Statement - Moved below My Journey */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="font-semibold text-lg mb-3 gradient-text">Mission Statement</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                "To democratize the power of artificial intelligence by creating accessible, 
                practical solutions that empower businesses to make data-driven decisions and 
                achieve sustainable growth through intelligent automation."
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Core Values - Moved beside My Journey and above Areas of Expertise */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors duration-300"
                  >
                    <h4 className="font-semibold text-sm mb-2 text-foreground">
                      {value.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-lg mb-4">Areas of Expertise</h4>
              <div className="space-y-3">
                {[
                  'Machine Learning & Deep Learning',
                  'Generative AI & Large Language Models',
                  'Multi-Agent RAG Solutions',
                  'MLOps & Cloud Deployment',
                  'Data Analytics & Visualization',
                  'Natural Language Processing',
                  'Stakeholder Engagement',
                  'Project Management & Agile Methodology',
                  'Jira & MS Project',
                  

                  
                ].map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mr-3" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Innovate Together?
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's explore how my expertise in data science and AI can help transform 
            your business challenges into opportunities for growth.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            Start the Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
