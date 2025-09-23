import React from 'react';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building Dreams,
            <span className="text-orange-500"> Creating Excellence</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            With over 15 years of experience, we deliver exceptional construction services 
            that exceed expectations. From residential homes to commercial complexes, 
            we build with precision, quality, and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToServices}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Our Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-gray-200">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">100%</div>
                <div className="text-gray-200">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-gray-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;