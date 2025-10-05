import React from 'react';
import { CheckCircle, Paintbrush, Box, Sofa, Building, Home, Zap, Factory, Wrench, Hammer } from 'lucide-react';
import pavanImage from '../assets/Pavan_founder.jpg';
import chetanImage from '../assets/Chetan_Co-Founder.jpg';

const About = () => {
  const achievements = [
    'Licensed and fully insured contractors',
    'Over 500 successful projects completed',
    'Award-winning safety record',
    'Sustainable building practices',
    'Local community involvement',
    '24/7 emergency response services'
  ];

  const teamMembers = [
    {
      name: 'Pavan Chute',
      role: 'Founder',
      title: 'Creative Visionary at Pavan Home Decor',
      image: pavanImage,
      expertise: [
        { icon: Paintbrush, text: 'Painting & POP Work', desc: 'Artistic wall finishes and precision POP designs that enhance interiors with texture and elegance.' },
        { icon: Box, text: '3D Home Visualizations', desc: 'Realistic digital previews that help clients visualize their dream spaces before execution.' },
        { icon: Sofa, text: 'Interior Styling & Custom Furniture', desc: 'Bespoke furniture and decor solutions that blend comfort, style, and functionality.' },
        { icon: Building, text: 'Residential & Commercial Construction', desc: 'End-to-end construction services—from foundation to finishing—delivered with structural integrity and aesthetic finesse.' },
        { icon: Home, text: 'Turnkey Project Execution', desc: 'Seamless coordination of design, labor, and materials to deliver ready-to-move-in spaces.' }
      ]
    },
    {
      name: 'Chetan Devdhare',
      role: 'Co-Founder',
      title: 'Electrical Design & Execution Specialist',
      image: chetanImage,
      expertise: [
        { icon: Home, text: 'Residential Electrical Systems', desc: 'Skilled in designing and implementing safe, efficient wiring layouts, lighting plans, and energy-saving solutions for homes.' },
        { icon: Building, text: 'Commercial Electrical Design', desc: 'Expertise in structured cabling, load balancing, and scalable electrical setups for offices, showrooms, and retail spaces.' },
        { icon: Factory, text: 'Industrial Electrical Engineering', desc: 'Proficient in high-voltage systems, control panel design, automation integration, and industrial-grade safety compliance.' },
        { icon: Box, text: 'Electrical Design & Planning', desc: 'Precision in circuit diagrams, load calculations, and blueprint-based execution for new constructions and renovations.' },
        { icon: Wrench, text: 'Maintenance & Troubleshooting', desc: 'Quick diagnosis and resolution of electrical faults, system upgrades, and preventive maintenance for all sectors.' }
      ]
    },
    {
      name: 'Mahesh Chaure',
      role: 'Civil Contractor',
      title: 'Construction & Civil Engineering Expert',
      image: null,
      expertise: [
        { icon: Hammer, text: 'Civil Construction', desc: 'Expert in structural construction and civil engineering projects.' }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Pavan Home Decor</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2008, Pavan Home Decor has established itself as a premier construction company
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

        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-lg text-gray-600">Expert professionals dedicated to bringing your vision to life</p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12">
                  <div className="lg:col-span-1 flex flex-col items-center text-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-48 h-48 rounded-full object-cover shadow-lg mb-6"
                      />
                    ) : (
                      <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg mb-6">
                        <span className="text-5xl font-bold text-white">{member.name.charAt(0)}</span>
                      </div>
                    )}
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.title}</p>
                  </div>

                  <div className="lg:col-span-2">
                    <h5 className="text-xl font-bold text-gray-900 mb-6">Areas of Expertise</h5>
                    <div className="space-y-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                            <skill.icon className="h-6 w-6 text-orange-600" />
                          </div>
                          <div>
                            <h6 className="font-semibold text-gray-900 mb-1">{skill.text}</h6>
                            <p className="text-gray-600 text-sm leading-relaxed">{skill.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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