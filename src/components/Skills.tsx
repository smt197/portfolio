import React from 'react';
import { Server, Globe, Smartphone, Database, Cloud, Code2 } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <Icon className="h-12 w-12 text-indigo-600 mb-4" />
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="text-gray-600">{skill}</li>
      ))}
    </ul>
  </div>
);

const Skills = () => {
  const skillsets = [
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "RESTful APIs"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "iOS", "Android", "Flutter"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
    },
    {
      icon: Cloud,
      title: "DevOps",
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes"]
    },
    {
      icon: Code2,
      title: "Tools & Others",
      skills: ["Git", "Jest", "Agile", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">Comprehensive toolkit for building modern applications</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsets.map((skillset) => (
            <SkillCard key={skillset.title} {...skillset} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;