import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Filter } from 'lucide-react';

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Maruti Suzuki Showroom',
      category: 'Commercial',
      location: 'Koradi Panjra Police Station, Nagpur',
      completionDate: 'In Progress',
      clientType: 'Company',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Electrical installation and maintenance for showroom with branded lighting, safety systems, and dedicated power zones.',
      highlights: ['Electrical Setup', 'Load-balanced circuit']
    },
    {
      id: 2,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design']
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
      id: 4,
      title: 'Sustainable Warehouse Complex',
      category: 'Industrial',
      location: 'Oakland, CA',
      completionDate: '2023',
      clientType: 'Logistics Company',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A 150,000 sq ft warehouse complex with advanced logistics systems and sustainable design features.',
      highlights: ['Solar Power System', 'Advanced Logistics', 'Sustainable Design', 'High-Bay Storage']
    },
    {
      id: 5,
      title: 'Luxury Condominium Tower',
      category: 'Residential',
      location: 'San Diego, CA',
      completionDate: '2023',
      clientType: 'Real Estate Developer',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A 25-story luxury condominium tower with premium amenities and panoramic ocean views.',
      highlights: ['Ocean Views', '25 Stories', 'Luxury Amenities', 'Premium Finishes']
    },
    {
      id: 6,
      title: 'Medical Center Expansion',
      category: 'Healthcare',
      location: 'Sacramento, CA',
      completionDate: '2024',
      clientType: 'Healthcare System',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A state-of-the-art medical facility expansion with advanced surgical suites and patient care areas.',
      highlights: ['Advanced Surgical Suites', 'Patient Care Focus', 'Medical Equipment Integration', 'Healing Environment']
    },
    {
      id: 2,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design']
    },
    {
      id: 2,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design']
    },
    {
      id: 2,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design']
    },
    {
      id: 2,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design']
    },
    {
      id: 2,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design']
    },
    {
      id: 2,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design']
    },
    {
      id: 2,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design']
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Industrial', 'Healthcare'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/"
            className="inline-flex items-center text-blue-700 hover:text-orange-600 font-semibold transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Explore our comprehensive portfolio of construction projects across various sectors. 
            Each project represents our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-700 font-medium">Filter by category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;