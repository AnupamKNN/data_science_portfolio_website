import { 
  Database, 
  BarChart3, 
  Brain, 
  Cloud, 
  Code, 
  GitBranch,
  Zap,
  Settings,
  Bot,
  FileSpreadsheet,
  TrendingUp,
  Cpu
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Analytics & Tools",
      skills: [
        { name: "PowerBI", icon: BarChart3, color: "from-yellow-400 to-orange-500" },
        { name: "MS Excel", icon: FileSpreadsheet, color: "from-green-400 to-green-600" },
        { name: "SQL", icon: Database, color: "from-blue-400 to-blue-600" },
      ]
    },
    {
      title: "Programming & ML/DL",
      skills: [
        { name: "Python", icon: Code, color: "from-blue-400 to-blue-600" },
        { name: "Scikit-Learn", icon: Brain, color: "from-orange-400 to-orange-600" },
        { name: "TensorFlow", icon: Cpu, color: "from-orange-500 to-red-500" },
      ]
    },
    {
      title: "MLOps & Deployment",
      skills: [
        { name: "Docker", icon: Cloud, color: "from-blue-400 to-cyan-500" },
        { name: "Git", icon: GitBranch, color: "from-red-400 to-red-600" },
        { name: "MLflow", icon: TrendingUp, color: "from-purple-400 to-purple-600" },
        { name: "Dagshub", icon: Settings, color: "from-green-400 to-green-600" },
        { name: "DVC", icon: Database, color: "from-blue-500 to-indigo-600" },
        { name: "Airflow", icon: Zap, color: "from-cyan-400 to-blue-500" },
      ]
    },
    {
      title: "Generative AI & LLM",
      skills: [
        { name: "LangChain", icon: Bot, color: "from-green-400 to-emerald-500" },
        { name: "LangServe", icon: Settings, color: "from-emerald-400 to-teal-500" },
        { name: "LangSmith", icon: Brain, color: "from-teal-400 to-cyan-500" },
        { name: "OpenAI", icon: Bot, color: "from-purple-400 to-purple-600" },
        { name: "Ollama", icon: Cpu, color: "from-indigo-400 to-purple-500" },
        { name: "ChatGroq", icon: Zap, color: "from-orange-400 to-red-500" },
        { name: "HuggingFace", icon: Bot, color: "from-yellow-400 to-orange-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the entire data science and AI development lifecycle
          </p>
        </div>

        <div className="grid gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-2xl font-bold text-center text-primary">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skillIndex}
                      className="group relative bg-card rounded-xl p-6 hover-lift cursor-pointer"
                      style={{
                        animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`
                      }}
                    >
                      {/* Background Gradient on Hover */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Icon */}
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      {/* Skill Name */}
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {skill.name}
                      </h4>
                      
                      {/* Hover Effect Indicator */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to bring these skills to your next project?
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-hero"
          >
            Let's Collaborate
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;