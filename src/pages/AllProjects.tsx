import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Filter } from 'lucide-react';

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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

  const projects: Project[] = useMemo(() => [
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
    },
    {
      id: 7,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization']
    },
    {
      id: 8,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Yavatmal',
      completionDate: '2022',
      clientType: 'Private Family',
      description: 'Smart 2BHK home with open layout, modular kitchen, and budget-friendly finishes in Yavatmal.',
      highlights: ['2BHK compact layout', 'Open living-dining zone']
    },
    {
      id: 9,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Yavatmal ',
      completionDate: '2023',
      clientType: 'Private Family',
      description: 'Modern 3BHK duplex with smart features, solar panels, and spacious layout in Yavatmal.',
      highlights: ['3BHK layout with open living-dining', '2,200 sq ft built-up area']
    },
    {
      id: 10,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Yavatmal',
      completionDate: '2021',
      clientType: 'Private Family',
      description: 'Compact 2BHK home with smart interiors, modular kitchen, and natural light in Yavatmal.',
      highlights: ['2BHK layout', 'Open living-dining zone']
    },
    {
      id: 11,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Yavatmal ',
      completionDate: '2022',
      clientType: 'Private Family',
      description: 'Spacious 4BHK duplex bungalow with smart features, solar panels, and elegant interiors in Yavatmal.',
      highlights: ['2,500 sq ft built-up area', '4BHK layout with spacious living-dining zone']
    }
  ], []);

  // Build categories from data
  const categories = useMemo(() => {
    const set = new Set<string>(projects.map(p => p.category));
    return ['All', ...Array.from(set)];
  }, [projects]);

  // Load thumbnails from local assets folders similar to ProjectDetail
  const imageModules = import.meta.glob('../assets/id*/**/*.{jpg,jpeg,png,JPG,PNG}', { eager: true, as: 'url' }) as Record<string, string>;
  const getThumbForId = (projectId: number): string | undefined => {
    const segment = `/id${projectId}/`;
    const entries = Object.entries(imageModules).filter(([p]) => p.includes(segment));
    const thumb = entries.find(([p]) => /Thumbnail\.(jpg|jpeg|png)$/i.test(p))?.[1];
    return thumb || entries[0]?.[1];
  };

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
                  src={getThumbForId(project.id) || ''}
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