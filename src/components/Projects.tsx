import React from 'react';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import project1Image from '../assets/project1.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Maruti Suzuki Showroom',
      category: 'Commercial',
      location: 'Koradi Panjra Police Station, Nagpur',
      completionDate: 'In Progress',
      clientType: 'Company',
      image: project1Image,
      description: 'Electrical installation and maintenance for showroom with branded lighting, safety systems, and dedicated power zones.',
      highlights: ['Electrical Setup', 'Load-balanced circuit']
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'Commercial',
      location: 'Los Angeles, CA',
      completionDate: '2023',
      clientType: 'Corporate',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A 12-story commercial office building with modern amenities, flexible workspaces, and LEED Gold certification.',
      highlights: ['LEED Gold Certified', '12 Stories', 'Modern Amenities', 'Flexible Workspaces']
    },
    {
      id: 3,
      title: 'Luxury Hotel Renovation',
      category: 'Hospitality',
      location: 'San Francisco, CA',
      completionDate: '2024',
      clientType: 'Hotel Chain',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete renovation of a historic 200-room luxury hotel, preserving architectural heritage while adding modern luxury.',
      highlights: ['Historic Preservation', '200 Rooms', 'Luxury Finishes', 'Heritage Architecture']
    },
    {
      id: 3,
      title: 'Luxury Hotel Renovation',
      category: 'Hospitality',
      location: 'San Francisco, CA',
      completionDate: '2024',
      clientType: 'Hotel Chain',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Complete renovation of a historic 200-room luxury hotel, preserving architectural heritage while adding modern luxury.',
      highlights: ['Historic Preservation', '200 Rooms', 'Luxury Finishes', 'Heritage Architecture']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects that showcase our expertise, 
            quality craftsmanship, and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-blue-700 hover:text-orange-600 font-semibold transition-colors group"
                >
                  View Project Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center group"
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