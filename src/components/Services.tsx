import React from 'react';
import { Home, Building2, Wrench, PaintBucket, Hammer, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'Custom homes, renovations, and extensions designed to meet your family\'s unique needs with quality craftsmanship.',
      features: ['Custom Home Building', 'Home Renovations', 'Kitchen & Bath Remodeling', 'Additions & Extensions']
    },
    {
      icon: Building2,
      title: 'Commercial Construction',
      description: 'Professional commercial spaces including offices, retail stores, and industrial facilities built to industry standards.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Industrial Facilities']
    },
    {
      icon: Wrench,
      title: 'General Contracting',
      description: 'Complete project management from planning to completion, ensuring every detail is handled with expertise.',
      features: ['Project Management', 'Permit Handling', 'Subcontractor Coordination', 'Timeline Management']
    },
    {
      icon: PaintBucket,
      title: 'Interior Finishing',
      description: 'Professional interior finishing services to bring your vision to life with attention to every detail.',
      features: ['Painting & Decorating', 'Flooring Installation', 'Trim & Molding', 'Custom Cabinetry']
    },
    {
      icon: Hammer,
      title: 'Repair & Maintenance',
      description: 'Comprehensive repair and maintenance services to keep your property in excellent condition year-round.',
      features: ['Emergency Repairs', 'Preventive Maintenance', 'Roofing Services', 'Plumbing & Electrical']
    },
    {
      icon: Shield,
      title: 'Insurance Work',
      description: 'Experienced in working with insurance companies for storm damage, fire damage, and other covered repairs.',
      features: ['Storm Damage Repair', 'Fire Damage Restoration', 'Insurance Claims', 'Emergency Services']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive construction services 
            backed by years of experience and a commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-orange-100 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-700 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;