import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, CheckCircle, Award, Clock, DollarSign } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = [
    {
      id: 1,
      title: 'Modern Family Residence',
      category: 'Residential',
      location: 'Beverly Hills, CA',
      completionDate: '2024',
      clientType: 'Private Family',
      duration: '8 months',
      budget: '$2.5M',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'A stunning 4,500 sq ft modern family home featuring open-concept living, sustainable materials, and smart home technology. This project represents the perfect blend of contemporary design and functional family living.',
      challenge: 'The main challenge was integrating smart home technology throughout the house while maintaining the clean, minimalist aesthetic the clients desired. We also needed to ensure the open-concept design provided both communal spaces and private retreats.',
      solution: 'We implemented a comprehensive smart home system with hidden wiring and discrete control panels. The open-concept design was balanced with strategic room divisions using glass partitions and varying ceiling heights to create distinct zones while maintaining visual flow.',
      highlights: ['Smart Home Integration', 'Sustainable Materials', 'Open Concept Design', 'Energy Efficient', 'Custom Kitchen Island', 'Floor-to-Ceiling Windows'],
      specifications: [
        { label: 'Total Area', value: '4,500 sq ft' },
        { label: 'Bedrooms', value: '4' },
        { label: 'Bathrooms', value: '3.5' },
        { label: 'Garage', value: '2-car attached' },
        { label: 'Special Features', value: 'Smart home, Solar panels, Heated floors' }
      ]
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'Commercial',
      location: 'Los Angeles, CA',
      completionDate: '2023',
      clientType: 'Corporate',
      duration: '18 months',
      budget: '$15M',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'A 12-story commercial office building with modern amenities, flexible workspaces, and LEED Gold certification. This project sets new standards for sustainable commercial construction in downtown Los Angeles.',
      challenge: 'Building in a dense urban environment while achieving LEED Gold certification required careful planning for material sourcing, waste management, and energy efficiency. The tight construction schedule demanded precise coordination.',
      solution: 'We implemented a comprehensive sustainability plan from day one, using locally sourced materials and advanced construction techniques. Our project management system ensured all trades worked in perfect coordination to meet the aggressive timeline.',
      highlights: ['LEED Gold Certified', '12 Stories', 'Modern Amenities', 'Flexible Workspaces', 'Rooftop Garden', 'Underground Parking'],
      specifications: [
        { label: 'Total Area', value: '250,000 sq ft' },
        { label: 'Floors', value: '12 above ground, 2 below' },
        { label: 'Parking Spaces', value: '200' },
        { label: 'Elevators', value: '4 high-speed' },
        { label: 'Special Features', value: 'LEED Gold, Rooftop garden, Fitness center' }
      ]
    },
    {
      id: 3,
      title: 'Luxury Hotel Renovation',
      category: 'Hospitality',
      location: 'San Francisco, CA',
      completionDate: '2024',
      clientType: 'Hotel Chain',
      duration: '12 months',
      budget: '$8M',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      gallery: [
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'Complete renovation of a historic 200-room luxury hotel, preserving architectural heritage while adding modern luxury amenities. This project required delicate balance between preservation and modernization.',
      challenge: 'Working within a historic building meant navigating strict preservation guidelines while updating all systems to modern standards. The hotel needed to remain partially operational during construction.',
      solution: 'We developed a phased construction approach that allowed the hotel to maintain 60% occupancy throughout the project. Our heritage specialists worked closely with preservation authorities to ensure all work met historical standards.',
      highlights: ['Historic Preservation', '200 Rooms', 'Luxury Finishes', 'Heritage Architecture', 'Spa & Wellness Center', 'Rooftop Restaurant'],
      specifications: [
        { label: 'Rooms', value: '200 luxury suites' },
        { label: 'Built', value: '1925 (renovated 2024)' },
        { label: 'Floors', value: '8' },
        { label: 'Dining', value: '3 restaurants, 2 bars' },
        { label: 'Special Features', value: 'Historic lobby, Spa, Rooftop dining, Valet parking' }
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id || '1'));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-700 hover:text-orange-600">Return to Home</Link>
        </div>
      </div>
    );
  }

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
      <div className="relative h-96 bg-gray-900">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
              <p className="text-xl text-gray-200">{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Project Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <MapPin className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Location</div>
                <div className="font-semibold text-gray-900">{project.location}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Calendar className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Completed</div>
                <div className="font-semibold text-gray-900">{project.completionDate}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Clock className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">{project.duration}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <DollarSign className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Budget</div>
                <div className="font-semibold text-gray-900">{project.budget}</div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Highlights */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Highlights</h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <dl className="space-y-3">
                {project.specifications.map((spec, index) => (
                  <div key={index}>
                    <dt className="text-sm font-medium text-gray-600">{spec.label}</dt>
                    <dd className="text-gray-900">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Awards */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-700 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Recognition</h3>
              </div>
              <p className="text-gray-700 text-sm">
                This project has been recognized for its excellence in construction quality, 
                innovative design, and sustainable building practices.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Interested in Similar Work?</h3>
              <p className="text-gray-700 text-sm mb-4">
                Contact us to discuss your construction project and see how we can bring your vision to life.
              </p>
              <Link
                to="/#contact"
                className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors inline-block"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;