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
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 transition-all group hover:shadow-2xl hover:-translate-y-2 hover:border-orange-300 duration-300"
              >
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-xl transition-all bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-orange-500 group-hover:to-orange-600 group-hover:shadow-lg group-hover:shadow-orange-500/30">
                    <IconComponent className="h-10 w-10 text-blue-700 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">{service.title}</h3>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm">{feature}</span>
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