'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  pdfUrl?: string;
  image?: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Introduction to Data Science",
    issuer: "Cisco",
    date: "2025",
    credentialId: "9293efec-23eb-4ed8-bd03-8bf2282719ab",
    verificationUrl: "https://www.credly.com/badges/9293efec-23eb-4ed8-bd03-8bf2282719ab",
    pdfUrl: "/intro-to-data-science-cert.pdf",
    image: "/introduction-to-data-science.png",
    skills: ["Data Analysis", "Data Validation", "Data Collection"]
  }
  // Add more certifications here
];

export default function Certifications() {
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

    const section = document.getElementById('certifications');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Certifications
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my skills and knowledge in various technologies and methodologies.
          </p>
          
          {certifications.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8">
                  <div className="text-6xl mb-4">🎓</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    Building My Portfolio
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I&apos;m currently working on earning certifications to strengthen my skills and validate my knowledge. Check back soon for updates!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={`max-w-6xl mx-auto ${
              certifications.length === 1 
                ? 'flex justify-center' 
                : certifications.length === 2 
                  ? 'grid md:grid-cols-2 gap-8'
                  : 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
            }`}>
              {certifications.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  } ${
                    certifications.length === 1 ? 'w-full max-w-md' : 'w-full'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden flex items-center justify-center">
                    {cert.image ? (
                      <Image
                        src={cert.image}
                        alt={`${cert.title} Certificate`}
                        width={120}
                        height={80}
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-white text-center">
                        <div className="text-3xl mb-2">🏆</div>
                        <p className="text-sm opacity-75">Certificate</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-sm font-medium">{cert.issuer}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z" />
                      </svg>
                      <span className="text-sm">{cert.date}</span>
                    </div>
                    
                    {cert.skills.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.verificationUrl && (
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Verify
                        </a>
                      )}
                      {cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Download PDF
                        </a>
                      )}
                      {cert.credentialId && (
                        <div className="flex items-center gap-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I believe in lifelong learning and staying updated with the latest technologies and best practices in software development.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['AWS Cloud Practitioner', 'Google Cloud Associate', 'Microsoft Azure Fundamentals', 'Meta Front-End Developer'].map((cert) => (
                  <span
                    key={cert}
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium shadow-sm"
                  >
                    {cert}
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