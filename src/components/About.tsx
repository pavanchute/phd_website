import { Paintbrush, Box, Sofa, Building, Home, Factory, Wrench, Hammer, Eye, Target, TrendingUp, MapPin } from 'lucide-react';
import pavanImage from '../assets/Pavan_founder.jpg';
import chetanImage from '../assets/Chetan_Co-Founder.jpg';
import aboutImage from '../assets/about.jpg';
import chauhreImage from '../assets/Mr_Chauhre.jpg';

const About = () => {
  const visionMissionGoals = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'To craft timeless and elegant spaces that enrich lives across the heart of customer.'
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Deliver customer-centric construction, interior, plumbing, and electrical solutions with creativity, quality, and care.'
    },
    {
      icon: TrendingUp,
      title: 'Goals',
      description: 'Build lasting relationships through design excellence, regional impact, and a strong digital presence.'
    }
  ];

  const serviceAreas = [
    { name: 'Nagpur', icon: MapPin },
    { name: 'Bhandara', icon: MapPin },
    { name: 'Washim', icon: MapPin },
    { name: 'Yavatmal', icon: MapPin }
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
      image: chauhreImage,
      expertise: [
        { icon: Hammer, text: 'Civil Construction', desc: 'Expert in structural construction and civil engineering projects.' }
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Pavan Home Decor</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established in 2021 and based in Nagpur, Pavan Home Decor offers end-to-end services in construction,
            interior design, plumbing, and electrical work. We specialize in transforming residential and commercial
            spaces with a blend of technical expertise, creative design, and reliable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Construction team at work"
              className="rounded-xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">2021</div>
              <div className="text-orange-100">Established</div>
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From structural development to elegant interiors, and from efficient plumbing to safe electrical
              installations, our skilled team ensures every project is handled with professionalism and precision.
              We are proud to have successfully delivered projects across Nagpur, Bhandara, Washim, and Yavatmal,
              earning trust through quality workmanship and customer satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a strong digital presence and a commitment to excellence, Pavan Home Decor is your reliable
              partner for building and beautifying spaces across Maharashtra.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                Service Areas
              </h4>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.map((area, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm ring-1 ring-gray-100">
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {visionMissionGoals.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50/60 to-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-orange-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <item.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
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