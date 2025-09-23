import React from 'react';
import { CheckCircle, Star, Users } from 'lucide-react';

const About = () => {
  const achievements = [
    'Licensed and fully insured contractors',
    'Over 500 successful projects completed',
    'Award-winning safety record',
    'Sustainable building practices',
    'Local community involvement',
    '24/7 emergency response services'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'BuildCraft transformed our vision into reality. Their attention to detail and professionalism exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Business Owner',
      content: 'Outstanding work on our commercial project. Delivered on time and within budget with exceptional quality.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'Reliable, professional, and skilled. BuildCraft has been our go-to contractor for all maintenance and renovation needs.',
      rating: 5
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About BuildCraft</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2008, BuildCraft has established itself as a premier construction company 
              in the region. We combine traditional craftsmanship with modern techniques to deliver 
              exceptional results for every project.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of skilled professionals is dedicated to bringing your vision to life while 
              maintaining the highest standards of quality, safety, and customer service. We believe 
              that every project, regardless of size, deserves our complete attention and expertise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Construction team at work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-orange-100">Years of Excellence</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-lg text-gray-600">Don't just take our word for it - hear from our satisfied customers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users className="h-4 w-4 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;