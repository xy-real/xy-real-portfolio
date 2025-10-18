'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Competition {
  id: number;
  title: string;
  organizer: string;
  date: string;
  placement?: string;
  award?: string;
  description: string;
  technologies: string[];
  projectUrl?: string;
  certificateUrl?: string;
  image?: string;
  teamSize?: number;
}

const competitions: Competition[] = [
  {
    id: 1,
    title: "EVCO 2024 - Java Competition",
    organizer: "PSITE",
    date: "October 18, 2024",
    placement: "4th Place",
    description: "An intensive 3-hour regional programming competition where teams from leading academic institutions compete to solve complex algorithmic challenges. Demonstrated strong problem-solving abilities and Java programming expertise under time pressure, securing 4th place among top regional schools.",
    technologies: ["Java"],
    image: "/evco-2024.jpg",
    teamSize: 5
  },
  {
    id: 2,
    title: "CS Week Coding Competition 2025",
    organizer: "Computer Science Student Society",
    award: "Sole Solver - Exclusive Solution Achievement",
    date: "February 6, 2025",
    description: "An intensive programming competition offering flexibility in language choice (C, C++, or Java) to accommodate different programming preferences and problem requirements. Features challenging problems crafted by previous winners, covering diverse algorithmic concepts including greedy algorithms, string manipulation, mathematical computations, and advanced data structures.",
    technologies: ["C", "C++", "Java"],
    image: "/csweek2025-progcomp.jpg",
    teamSize: 1
  },
  {
    id: 3,
    title: "SIKAPTala 2025 - CS & IT Skills Competition Java Category",
    organizer: "DLSUD College of Information and Computer Studies",
    date: "March 25, 2025",
    description: "A prestigious national-level computer science and information technology skills competition focusing on advanced Java programming concepts, data structures, and algorithmic problem-solving. Competing individually against top CS students from universities across the Philippines.",
    technologies: ["Java"],
    image: "/SIKAPTala.jpg",
    teamSize: 1
  },
  {
    id: 4,
    title: "Byte Forward Hackathon 2025 Visayas Leg",
    organizer: "REV21 Labs Inc. and Converge SME Solutions",
    placement: "2nd Place",
    date: "July 24-25, 2025",
    description: "An intensive 24-hour hackathon focused on developing innovative software solutions to address real-world challenges faced by Small and Medium Enterprises (SMEs) in the Visayas region. Collaborated with a diverse team to create impactful digital solutions under tight time constraints.",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
    image: "/byte-forward-hackathon-visayas.jpg",
    teamSize: 4
  }
  // Add more competitions here
];

export default function Competitions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    const section = document.getElementById('competitions');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getPlacementColor = (placement?: string) => {
    if (!placement) return 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300';
    
    const lower = placement.toLowerCase();
    if (lower.includes('1st') || lower.includes('first') || lower.includes('winner')) {
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
    } else if (lower.includes('2nd') || lower.includes('second')) {
      return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    } else if (lower.includes('3rd') || lower.includes('third')) {
      return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
    } else if (lower.includes('finalist') || lower.includes('top')) {
      return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
    }
    return 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400';
  };

  const getPlacementIcon = (placement?: string) => {
    if (!placement) return '🏆';
    
    const lower = placement.toLowerCase();
    if (lower.includes('1st') || lower.includes('first') || lower.includes('winner')) {
      return '🥇';
    } else if (lower.includes('2nd') || lower.includes('second')) {
      return '🥈';
    } else if (lower.includes('3rd') || lower.includes('third')) {
      return '🥉';
    } else if (lower.includes('finalist')) {
      return '🏅';
    }
    return '🏆';
  };

  return (
    <section id="competitions" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Competitions & Hackathons
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Programming competitions, hackathons, and contests where I&apos;ve showcased my problem-solving skills and collaborated with teams to build innovative solutions.
          </p>
          
          {competitions.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    Ready to Compete
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I&apos;m actively looking for hackathons and programming competitions to participate in. Stay tuned for exciting updates!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitions.map((competition, index) => (
                <div
                  key={competition.id}
                  className={`bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="h-48 relative overflow-hidden bg-gradient-to-br from-purple-400 to-pink-600">
                    {competition.image ? (
                      <Image
                        src={competition.image}
                        alt={`${competition.title} Project`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-4xl mb-2">🚀</div>
                          <p className="text-sm opacity-75">Competition Project</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Placement Badge */}
                    {competition.placement && (
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${getPlacementColor(competition.placement)}`}>
                          <span className="mr-1">{getPlacementIcon(competition.placement)}</span>
                          {competition.placement}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {competition.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-sm font-medium">{competition.organizer}</span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z" />
                        </svg>
                        <span className="text-sm">{competition.date}</span>
                      </div>
                      
                      {competition.teamSize && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          <span className="text-sm">Team of {competition.teamSize}</span>
                        </div>
                      )}
                    </div>
                    
                    {competition.award && (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-medium">
                          <span>🏅</span>
                          {competition.award}
                        </span>
                      </div>
                    )}
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                      {competition.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {competition.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {competition.projectUrl && (
                        <a
                          href={competition.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-sm"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Project Code
                        </a>
                      )}
                      {competition.certificateUrl && (
                        <a
                          href={competition.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Certificate
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Competitive Spirit
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I thrive in competitive programming environments where innovation meets collaboration. These experiences have sharpened my problem-solving skills and ability to work under pressure.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Hackathons', 'Programming Contests', 'Innovation Challenges', 'Team Competitions'].map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm"
                  >
                    {type}
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