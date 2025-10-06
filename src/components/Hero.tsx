import React from 'react';
import { Award, Users, Calendar } from 'lucide-react';

const Hero = () => {

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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building Dreams,
            <span className="text-orange-500"> Creating Excellence</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Established in 2021 and based in Nagpur, Pavan Home Decor offers end-to-end services in construction, interior design, plumbing, and electrical work. We specialize in transforming residential and commercial spaces with a blend of technical expertise, creative design, and reliable execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={scrollToServices}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              Our Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-orange-500" />
              <div>
                <div className="text-2xl font-bold">10+</div>
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
                <div className="text-2xl font-bold">5+</div>
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
