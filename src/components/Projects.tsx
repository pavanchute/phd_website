import React from 'react';
import { ArrowRight, Calendar, MapPin, Users, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  type Project = {
    id: number;
    title: string;
    category: string;
    location: string;
    completionDate: string;
    clientType: string;
    description: string;
    highlights: string[];
  };

  const projects: Project[] = [
    {
      id: 1,
      title: 'Maruti Suzuki Showroom',
      category: 'Commercial',
      location: 'Koradi Panjra Police Station, Nagpur',
      completionDate: 'In Progress',
      clientType: 'Company',
      description: 'Electrical installation and maintenance for showroom with branded lighting, safety systems, and dedicated power zones.',
      highlights: ['Electrical Setup', 'Load-balanced circuit']
    },
    {
      id: 2,
      title: 'Modern Family Residential ',
      category: ' Residential',
      location: 'Pardi , Nagpur',
      completionDate: '2025',
      clientType: 'Private Family',
      description: 'Luxury 4BHK duplex with smart automation, lift, sensor kitchen, movie room, and artistic murals.',
      highlights: ['Smart home integration Open-concept layout', 'Duplex layout with private lift']
    },
    {
      id: 3,
      title: 'Modern Family Residential ',
      category: 'Residential',
      location: 'Pipla fata , Nagpur',
      completionDate: 'In progress',
      clientType: 'Private Family',
      description: 'Ongoing 3BHK smart home with modern layout, concealed wiring, and elegant elevation in Pipla Fata.',
      highlights: ['Interior ', 'Construction', 'Best elevation ']
    },
    {
      id: 4,
      title: 'Modern Family Residential ',
      category: 'Commercial & Residential',
      location: 'Pipla fata , Nagpur',
      completionDate: '2025',
      clientType: 'Private Family',
      description: 'Dual-purpose smart home with clinic below, acoustic zoning, epoxy finishes, and modern elevation design',
      highlights: ['Interior ', 'Construction', 'Best elevation','Commerical ']
    },
    {
      id: 5,
      title: 'Modern Family Residential ',
      category: ' Residential',
      location: 'Shankarpur , Nagpur',
      completionDate: '2023',
      clientType: 'Private Family',
      description: 'Minimalist 3BHK smart home with hidden wiring, glass partitions, and modern spatial flow in Shankarpur.',
      highlights: ['Interior ', 'Construction', 'Best elevation']
    },
    {
      id: 6,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization']
    }
  ];

  const imageModules = import.meta.glob('../assets/id*/**/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, as: 'url' }) as Record<string, string>;
  const getThumbForId = (projectId: number): string | undefined => {
    const segment = `/id${projectId}/`;
    const entries = Object.entries(imageModules).filter(([p]) => p.includes(segment));
    const thumb = entries.find(([p]) => /Thumbnail\.(jpg|jpeg|png)$/i.test(p))?.[1];
    return thumb || entries[0]?.[1];
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Recent Projects</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full mx-auto mb-5" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects that showcase our expertise, 
            quality craftsmanship, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="block bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all group hover:shadow-md hover:-translate-y-1">
              <div className="relative overflow-hidden">
                {getThumbForId(project.id) ? (
                  <img 
                    src={getThumbForId(project.id)!}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <ImageIcon className="h-10 w-10 text-gray-500" />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-700/90 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    Completed {project.completionDate}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {project.clientType}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs ring-1 ring-gray-200">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center text-blue-700 hover:text-orange-600 font-semibold transition-colors group">
                  View Project Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center group shadow-md hover:shadow-lg"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
