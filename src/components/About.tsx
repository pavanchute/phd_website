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
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-5">About Pavan Home Decor</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Established in 2021 and based in Nagpur, Pavan Home Decor offers end-to-end services in construction,
            interior design, plumbing, and electrical work. We specialize in transforming residential and commercial
            spaces with a blend of technical expertise, creative design, and reliable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img
              src={aboutImage}
              alt="Construction team at work"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-7 rounded-2xl shadow-2xl">
              <div className="text-4xl font-bold">2021</div>
              <div className="text-orange-100 font-semibold">Established</div>
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

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-200 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-5 flex items-center text-lg">
                <MapPin className="h-6 w-6 text-orange-600 mr-2" />
                Service Areas
              </h4>
              <div className="flex flex-wrap gap-3">
                {serviceAreas.map((area, index) => (
                  <span key={index} className="bg-white px-5 py-2.5 rounded-full text-gray-800 font-semibold shadow-md ring-1 ring-orange-200 hover:ring-orange-400 hover:shadow-lg transition-all">
                    {area.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {visionMissionGoals.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-orange-50 to-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-200 hover:border-orange-400 hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <item.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-5">Meet Our Team</h3>
            <p className="text-xl text-gray-600">Expert professionals dedicated to bringing your vision to life</p>
          </div>

          <div className="space-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10 md:p-14">
                  <div className="lg:col-span-1 flex flex-col items-center text-center">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-56 h-56 rounded-full object-cover shadow-2xl mb-6 ring-4 ring-orange-500/30"
                      />
                    ) : (
                      <div className="w-56 h-56 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl mb-6 ring-4 ring-orange-500/30">
                        <span className="text-6xl font-bold text-white">{member.name.charAt(0)}</span>
                      </div>
                    )}
                    <h4 className="text-3xl font-bold text-gray-900 mb-3">{member.name}</h4>
                    <p className="text-orange-600 font-bold text-lg mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.title}</p>
                  </div>

                  <div className="lg:col-span-2">
                    <h5 className="text-2xl font-bold text-gray-900 mb-7">Areas of Expertise</h5>
                    <div className="space-y-5">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-300">
                          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl flex-shrink-0 shadow-lg">
                            <skill.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h6 className="font-bold text-gray-900 mb-2 text-lg">{skill.text}</h6>
                            <p className="text-gray-600 leading-relaxed">{skill.desc}</p>
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