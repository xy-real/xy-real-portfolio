'use client';

import { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 20, category: 'frontend' },
  { name: 'JavaScript', level: 30, category: 'frontend' },
  { name: 'React', level: 20, category: 'frontend' },
  { name: 'Tailwind CSS', level: 20, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', level: 30, category: 'backend' },
  { name: 'Python', level: 20, category: 'backend' },
  { name: 'Supabase', level: 20, category: 'backend' },
  { name: 'Firebase', level: 20, category: 'backend' },
  { name: 'SQL', level: 20, category: 'backend' },
  
  // Tools
  { name: 'Git/GitHub', level: 70, category: 'tools' },
  { name: 'VS Code', level: 60, category: 'tools' },
  { name: 'Figma', level: 20, category: 'tools' },
  
  // Other
  { name: 'Problem Solving', level: 90, category: 'other' },
  { name: 'Team Collaboration', level: 80, category: 'other' },
];

const categoryColors = {
  frontend: 'from-blue-500 to-cyan-500',
  backend: 'from-green-500 to-emerald-500',
  tools: 'from-purple-500 to-pink-500',
  other: 'from-orange-500 to-red-500',
};

const categoryNames = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  tools: 'Development Tools',
  other: 'Soft Skills',
};

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  // Helper function to update skill levels
  const updateSkillLevels = () => {
    const levels: { [key: string]: number } = {};
    skills.forEach(skill => {
      levels[skill.name] = skill.level;
    });
    setAnimatedLevels(levels);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill levels
          setTimeout(() => {
            updateSkillLevels();
          }, 500);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Force update animation when skills change (for development)
  useEffect(() => {
    if (isVisible) {
      updateSkillLevels();
    }
  }, [isVisible]);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Skills & Technologies
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Here are the technologies and skills I&apos;ve been learning and working with. 
            As a student, I&apos;m constantly expanding my knowledge and picking up new tools.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <div
                key={category}
                className={`transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 text-center">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h3>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`transition-all duration-500 ${
                          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {animatedLevels[skill.name] || 0}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${
                              categoryColors[category as keyof typeof categoryColors]
                            } transition-all duration-1000 ease-out`}
                            style={{ 
                              width: `${animatedLevels[skill.name] || 0}%`,
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 300}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Currently Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I&apos;m always expanding my skillset. Here&apos;s what I&apos;m currently focusing on:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['TypeScript', 'Next.js', 'NoSQL', 'R', 'Python', 'Machine Learning'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}