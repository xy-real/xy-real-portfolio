'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <Image
                      src="/profile-xy-real.JPG"
                      alt="XY Real Profile Picture"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">xy-real</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Passionate About Technology & Innovation
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I&apos;m currently an undergraduate student pursuing my degree in Computer Science. 
                My journey in technology started with curiosity and has evolved into a passion 
                for creating meaningful digital experiences.
              </p>
              
              
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Student</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Status</div>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                  What I&apos;m Currently Learning:
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Full-stack web development</li>
                  <li>Modern JavaScript frameworks</li>
                  <li>Database design and management</li>
                  <li>Software engineering best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}