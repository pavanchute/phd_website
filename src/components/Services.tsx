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
          <h2 className="text-4xl font-bold text-gray-900 mb-3">What We Do</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto mb-5" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 transition-all group hover:shadow-md hover:-translate-y-1 ring-1 ring-transparent hover:ring-orange-200"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg transition-colors bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-orange-50 group-hover:to-orange-100">
                    <IconComponent className="h-8 w-8 text-blue-700 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;