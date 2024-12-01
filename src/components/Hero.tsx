import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fullstack Developer
              <span className="block text-indigo-600">Web & Mobile Specialist</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Crafting seamless digital experiences through innovative web and mobile solutions. 
              Passionate about clean code and user-centric design.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/smt197" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;