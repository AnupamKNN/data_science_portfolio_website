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

import React from 'react';

// Import all custom icons
import powerBiIcon from '../assets/icons/power-bi.png';
import excelIcon from '../assets/icons/msexcel.png';
import sqlIcon from '../assets/icons/sql.png';
import pythonIcon from '../assets/icons/python.png';
import numpyIcon from '../assets/icons/numpy.png';
import pandasIcon from '../assets/icons/pandas.png';
import matplotlibIcon from '../assets/icons/matplotlib.png';
import seabornIcon from '../assets/icons/seaborn.png';
import flaskIcon from '../assets/icons/flask.png';
import streamlitIcon from '../assets/icons/streamlit.png';
import fastapiIcon from '../assets/icons/fastapi.png';
import scikitlearnIcon from '../assets/icons/scikit-learn.png';
import tensorflowIcon from '../assets/icons/tensorflow.png';
import kerasIcon from '../assets/icons/keras.png';
import pytorchIcon from '../assets/icons/pytorch.png';
import dockerIcon from '../assets/icons/docker.png';
import mlflowIcon from '../assets/icons/mlflow.png';
import dvcIcon from '../assets/icons/dvc.png';
import airflowIcon from '../assets/icons/apache-airflow.png';
import grafanaIcon from '../assets/icons/grafana.png';
import awsIcon from '../assets/icons/aws.png';
import azureIcon from '../assets/icons/azure.png';
import langchainIcon from '../assets/icons/langchain.png';
import langsmithIcon from '../assets/icons/langsmith.png';
import openaiIcon from '../assets/icons/openai.png';
import ollamaIcon from '../assets/icons/ollama.png';
import groqIcon from '../assets/icons/groq.png';
import huggingfaceIcon from '../assets/icons/huggingface.png';
import pineconedbIcon from '../assets/icons/pineconedb.png';
import chromadbIcon from '../assets/icons/chromadb.png';
import faissIcon from '../assets/icons/faiss.png';
import neo4jIcon from '../assets/icons/neo4j.png';
import astradbIcon from '../assets/icons/astradb.png';
import msprojectIcon from '../assets/icons/ms-project.png';
import jiraIcon from '../assets/icons/jira.png';

interface Skill {
  name: string;
  icon: string | React.ComponentType<{ className?: string }>;
  color: string;
}

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Analytics & BI",
      skills: [
        { name: "PowerBI", icon: powerBiIcon, color: "from-purple-600 to-amber-600"},
        { name: "Microsoft Excel", icon: excelIcon, color: "from-green-100 to-green-200" },
        { name: "SQL", icon: sqlIcon, color: "from-blue-200 to-blue-100" },
      ]
    },
    {
      title: "Programming & Core Tech",
      skills: [
        { name: "Python", icon: pythonIcon, color: "from-blue-400 to-yellow-100" },
        { name: "NumPy", icon: numpyIcon, color: "from-blue-200 to-cyan-300" },
        { name: "Pandas", icon: pandasIcon, color: "from-indigo-300 to-indigo-100"},
        { name: "Matplotlib", icon: matplotlibIcon, color: "from-white to-gray-100"},
        { name: "Seaborn", icon: seabornIcon, color: "from-blue-300 to-blue-100" },
        { name: "Flask", icon: flaskIcon, color: "from-white to-gray-50" },
        { name: "Streamlit", icon: streamlitIcon, color: "from-red-400 via-red-100 to-red-400"},
        { name: "FastAPI", icon: fastapiIcon, color: "from-teal-200 to-emerald-100" },
        
      ]
    },
    {
      title: "Machine Learning & Deep Learning",
      skills: [
        { name: "Scikit-Learn", icon: scikitlearnIcon, color: "from-orange-400 to-blue-500" },
        { name: "TensorFlow", icon: tensorflowIcon, color: "from-orange-200 to-red-200" },
        { name: "Keras", icon: kerasIcon, color: "bg-red-600/90" },
        { name: "PyTorch", icon: pytorchIcon, color: "from-red-200 to-orange-300" },
      ]
    },
    {
      title: "MLOps & DevOps",
      skills: [
        { name: "Docker", icon: dockerIcon, color: "from-blue-800 to-sky-700" },
        { name: "MLFlow", icon: mlflowIcon, color: "from-cyan-600 to-blue-800" },
        { name: "DVC", icon: dvcIcon, color: "bg-gradient-to-br from-teal-500 via-purple-400 to-orange-600"},
        { name: "Apache Airflow", icon: airflowIcon, color: "bg-gradient-to-br from-red-400 via-cyan-400 via-blue-300 to-green-300" },
        { name: "Grafana", icon: grafanaIcon, color: "from-amber-700 to-yellow-700" },
        { name: "AWS", icon: awsIcon, color: "from-white to-white" },
        { name: "Microsoft Azure", icon: azureIcon, color: "from-blue-800 to-cyan-400" },
      ]
    },
    {
      title: "Generative AI/ LLM",
      skills: [
        { name: "LangChain", icon: langchainIcon, color: "from-emerald-400 to-teal-600" },
        { name: "LangSmith", icon: langsmithIcon, color:"from-teal-600 to-emerald-400"  },
        { name: "OpenAI", icon: openaiIcon, color: "from-white to-gray-400" },
        { name: "Ollama", icon: ollamaIcon, color: "from-gray-400 to-white" },
        { name: "Groq (ChatGroq)", icon: groqIcon, color: "from-red-300 to-white" },
        { name: "Hugging Face", icon: huggingfaceIcon, color: "from-yellow-400 to-amber-400" },
        { name: "PineconeDB", icon: pineconedbIcon, color: "bg-[#F1F5F8]" },
        { name: "ChromaDB", icon: chromadbIcon, color: "from-red-300 via-indigo-300 to-amber-300" },
        { name: "FAISS", icon: faissIcon, color: "bg-blue-500 " },
        { name: "Neo4j", icon: neo4jIcon, color: "from-blue-300 to-white" },
        { name: "AstraDB", icon: astradbIcon, color: "from-orange-300 to-orange-200" },
      ]
    },
    {
      title: "Project Management & Tools",
      skills:[
        { name: "Microsoft Project", icon: msprojectIcon, color: "from-green-900 via-green-400 to-green-600" },
        { name: "Jira", icon: jiraIcon, color: "bg-blue-300" }
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
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="group relative bg-card rounded-xl p-6 hover-lift cursor-pointer text-center flex flex-col items-center"
                  style={{
                    animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`
                  }}
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className={`flex justify-center items-center p-3 rounded-lg bg-gradient-to-br ${skill.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {typeof skill.icon === 'string' ? (
                      <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
                    ) : (
                      React.createElement(skill.icon, { className: "w-14 h-14" })
                    )}
                  </div>
                  
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h4>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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
