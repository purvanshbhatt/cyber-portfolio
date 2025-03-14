import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPython, FaJava, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiLinux, SiWindowsterminal, SiMicrosoft, SiWireshark } from 'react-icons/si';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen p-10 flex flex-col items-center space-y-10">
      {/* Profile Section */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Image 
          src="/profile.jpg" 
          alt="Purvansh Bhatt" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-cyan-400 shadow-lg"
        />
        <h1 className="text-5xl font-bold text-cyan-400 glitch-effect mt-4">Purvansh Bhatt</h1>
        <p className="text-lg text-gray-400">Cybersecurity Specialist | Ethical Hacker | Developer</p>
      </motion.div>
      
      {/* Socials & Resume */}
      <div className="flex gap-4">
        <a href="https://github.com/purvanshbhatt" target="_blank">
          <FaGithub size={30} className="text-white hover:text-cyan-400 transition glitch-hover" />
        </a>
        <a href="https://linkedin.com/in/purvanshbhatt" target="_blank">
          <FaLinkedin size={30} className="text-white hover:text-cyan-400 transition glitch-hover" />
        </a>
        <a href="mailto:purvansh95b@gmail.com">
          <FaEnvelope size={30} className="text-white hover:text-cyan-400 transition glitch-hover" />
        </a>
        <a href="/Purvansh_Resume.pdf" download>
          <FaDownload size={30} className="text-white hover:text-cyan-400 transition glitch-hover" />
        </a>
      </div>
      
      {/* Experience Section */}
      <motion.div 
        className="mt-10 border-l-4 border-cyan-400 pl-4 w-full max-w-4xl experience-section"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-3xl font-semibold text-cyan-300">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Cybersecurity Engineer & QA Associate</h3>
              <span>Filmy AI - Aug 2024 - Present</span>
              <p>Developed security vulnerability scanner, reduced post-release defects by 10%, conducted security training for 20+ employees.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Cybersecurity Team Lead</h3>
              <span>Exchange IT - 2024</span>
              <p>Managed a team of cybersecurity interns, conducted network security assessments and guided security projects.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Cybersecurity Intern</h3>
              <span>Bunchful - 2024</span>
              <p>Performed penetration testing, optimized security protocols, and documented vulnerabilities.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Cybersecurity Content Writer</h3>
              <span>Medium Publication - 2023</span>
              <p>Published articles on cybersecurity topics, educating readers on best practices and emerging threats.</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Skills Section */}
      <motion.div 
        className="mt-10 border-l-4 border-cyan-400 pl-4 w-full max-w-4xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-3xl font-semibold text-cyan-300">Skills</h2>
        <div className="grid grid-cols-3 gap-4 text-center text-gray-300 mt-4">
          <div><FaPython size={30} /><p>Python</p></div>
          <div><SiCplusplus size={30} /><p>C++</p></div>
          <div><SiJavascript size={30} /><p>JavaScript</p></div>
          <div><SiLinux size={30} /><p>Linux</p></div>
          <div><FaDatabase size={30} /><p>SQL</p></div>
          <div><SiWindowsterminal size={30} /><p>PowerShell</p></div>
        </div>
      </motion.div>
      
      {/* Education & Certifications */}
      <motion.div 
        className="mt-10 border-l-4 border-cyan-400 pl-4 w-full max-w-4xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h2 className="text-3xl font-semibold text-cyan-300">Education & Certifications</h2>
        <div className="mt-4">
          <p className="text-gray-300">Master of Science in Cybersecurity - Pace University, NY (2024)</p>
          <p className="text-gray-300">Bachelor of Science in Cybersecurity - Gujarat University (2022)</p>
          <div className="flex gap-4 mt-4">
            <Image src="/certifications/securityplus.png" width={80} height={80} alt="Security+" />
            <Image src="/certifications/cysa.png" width={80} height={80} alt="CySA+" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
