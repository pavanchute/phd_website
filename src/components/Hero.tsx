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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-900/70 to-gray-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Building Dreams,
            <span className="block text-orange-500 mt-2">Creating Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
            Established in 2021 and based in Nagpur, Pavan Home Decor offers end-to-end services in construction, interior design, plumbing, and electrical work. We specialize in transforming residential and commercial spaces with a blend of technical expertise, creative design, and reliable execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button
              onClick={scrollToServices}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
            >
              Explore Our Services
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-gray-200 text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-gray-200 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-4">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-gray-200 text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
