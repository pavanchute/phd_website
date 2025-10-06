import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, MapPin, CheckCircle, Award, Clock, IndianRupee } from 'lucide-react';
import project1Image from '../assets/project1.jpg';

type ProjectSpec = { label: string; value: string };
type Project = {
  id: number;
  title: string;
  category: string;
  location: string;
  completionDate: string;
  clientType: string;
  duration: string;
  budget: string;
  image: string;
  gallery: string[];
  videos?: string[];
  description: string;
  challenge: string;
  solution: string;
  highlights: string[];
  specifications: ProjectSpec[];
};

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Maruti Suzuki Showroom',
      category: 'Commercial',
      location: 'Koradi Panjra Police Station, Nagpur',
      completionDate: 'In Progress',
      clientType: 'Company',
      duration: '-',
      budget: '28 lakhs',
      image: project1Image,
      gallery: [
        project1Image
      ],
      description: 'Electrical installation and maintenance for showroom with branded lighting, safety systems, and dedicated power zones.',
      challenge: 'Executing electrical work for a high-footfall showroom required precision and brand compliance. Ensuring safe load distribution, optimal lighting, and uninterrupted power for display zones and service bays was critical. Coordinating with civil teams during active construction and planning for long-term maintenance added complexity to the execution phase.',
      solution: 'A structured electrical layout was implemented with dedicated circuits for lighting, HVAC, and equipment zones. Branded lighting fixtures were installed for visibility and aesthetics. Safety protocols and surge protection were embedded. Ongoing maintenance includes routine checks, load balancing, and quick-response support to ensure uninterrupted operations and client satisfaction.',
      highlights: ['Complete showroom electrical setup','Branded lighting installation','Load-balanced circuit design','Surge protection and safety compliance','Dedicated power zones for service and display','Routine electrical maintenance','Quick-response support system','Client-approved execution'],
      specifications: [
        { label: 'Total Area', value: '1 acre' },
        { label: 'Special Features', value: 'Showroom Spotlights , Reception Lighting, Task Lights, Facade Lighting, Emergency Lights, Cafe area' }
      ]
    },
    {
      id: 2,
      title: 'Modern Family Residential ',
      category: ' Residential',
      location: 'Pardi , Nagpur',
      completionDate: '2025',
      clientType: 'Private Family',
      duration: '24 months',
      budget: '4 cr',
      image: '',
      // Replace the placeholder image URLs below with your actual images
      gallery: [],
      // Add your video URLs (mp4 links or YouTube share links)
      videos: [
        // 'https://your-cdn.com/video1.mp4',
        // 'https://www.youtube.com/embed/VIDEO_ID'
      ],
      description: 'Luxury 4BHK duplex with smart automation, lift, sensor kitchen, movie room, and artistic murals.',
      challenge: 'Designing a luxury duplex within a 3,000 sq ft footprint required balancing smart features with aesthetic depth. Integrating a lift, sensor kitchen, and movie room without compromising flow and privacy was complex. Coordinating murals, lighting, and automation across levels demanded precision and seamless collaboration during construction.',
      solution: 'The team delivered a refined duplex with zoned living and entertainment areas. Smart systems were embedded early, including sensor-based kitchen and automated lighting. A private lift and acoustically treated movie room enhanced comfort. Murals added character, while neutral tones and layered lighting ensured elegance across all spaces.',
      highlights: ['Smart home integration Open-concept layout', 'Duplex layout with private lift', 'Smart home automation throughout', 'Sensor-based modular kitchen', 'Dedicated movie room with acoustic treatment', 'Custom murals for artistic flair', '4 spacious bedrooms with attached baths', '6 bathrooms with premium fittings', 'Open living-dining zone', 'Natural light optimization'],
      specifications: [
        { label: 'Total Area', value: '23000 sf ft' },
        { label: 'Bedroom', value: '4' },
        { label: 'Bathroom', value: '6' },
        { label: 'Special Features', value: 'smart home  , movie  room , sensor kitchen duplex , lift , murals' }
      ]
    },
    {
      id: 3,
      title: 'Modern Family Residential ',
      category: 'Residential',
      location: 'Pipla fata , Nagpur',
      completionDate: 'In progress',
      clientType: 'Private Family',
      duration: 'estimated  2026',
      budget: 'est.  75 lakh',
      image: '',
      gallery: [
      ],
      description: 'Ongoing 3BHK smart home with modern layout, concealed wiring, and elegant elevation in Pipla Fata.',
      challenge: 'The ongoing residential site faces challenges in integrating smart home features without disrupting minimalist aesthetics. Coordinating hidden wiring, spatial layout, and lighting design during active construction demands precision. Balancing client expectations with evolving site conditions and ensuring seamless collaboration between design and technical teams remains a continuous effort',
      solution: 'The team is implementing smart systems early, embedding concealed wiring and centralized controls. Open layouts, glass partitions, and varied ceiling heights enhance flow. Lighting is layered with recessed fixtures and smart dimmers. Regular site reviews, client updates, and adaptive planning ensure the evolving design remains aligned with both function and elegance.',
      highlights: ['Interior ', 'Construction', 'Best elevation '],
      specifications: [
       { label: 'Total Area', value: '1500 sf ft' },
        { label: 'Bedroom', value: '3' },
        { label: 'Bathroom', value: '4' },
        { label: 'Special Features', value: 'smart home  , modern home ' }
      ]
    },
    {
      id: 4,
      title: 'Modern Family Residential ',
      category: 'Commercial & Residential',
      location: 'Pipla fata , Nagpur',
      completionDate: '2025',
      clientType: 'Private Family',
      duration: '12 month',
      budget: 'est.  85 lakh',
      image: '',
      gallery: [

      ],
      description: 'Dual-purpose smart home with clinic below, acoustic zoning, epoxy finishes, and modern elevation design',
      challenge: 'Designing a dual-purpose site with a medical clinic below and a family residence above requires balancing privacy, noise control, and functional zoning. Structural planning must accommodate both clinical efficiency and homely comfort. Ensuring separate access, ventilation, and safety standards for each level adds complexity during active construction.',
      solution: 'The layout separates medical and residential zones with distinct entries and acoustic insulation. Structural elements are reinforced to support both uses. Smart zoning ensures privacy and compliance. Residential design incorporates natural light and soundproofing, while the clinic is optimized for flow and hygiene. Coordination across teams ensures seamless execution.',
      highlights: ['Interior ', 'Construction', 'Best elevation','Commerical '],
      specifications: [
        { label: 'Total Area', value: '2500 sf ft' },
        { label: 'Bedroom', value: '3' },
        { label: 'Bathroom', value: '5' },
        { label: 'Special Features', value: 'smart home  , modern home, epoxy tiles ',}
      ]
    },
    {
      id: 5,
      title: 'Modern Family Residential ',
      category: ' Residential',
      location: 'Shankarpur , Nagpur',
      completionDate: '2023',
      clientType: 'Private Family',
      duration: '8 months',
      budget: '60 lakh',
      image: '',
      gallery: [

      ],
      description: 'Minimalist 3BHK smart home with hidden wiring, glass partitions, and modern spatial flow in Shankarpur.',
      challenge: 'DThe project aimed to integrate smart home technology into a residential space while preserving a clean, minimalist aesthetic. The difficulty lay in balancing advanced functionality with visual simplicity',
      solution: 'The team implemented a comprehensive smart home system featuring: 1. Hidden wiring and discrete control panels to maintain visual clarity., An open-concept layout using glass partitions and varying ceiling heights to enhance spatial flow and modern appeal.',
      highlights: ['Interior ', 'Construction', 'Best elevation'],
      specifications: [
        { label: 'Total Area', value: '1200 sf ft' },
        { label: 'Bedroom', value: '3' },
        { label: 'Bathroom', value: '3' },
        { label: 'Special Features', value: 'smart home' }
      ]
    },
    {
      id: 6,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      duration: '24 months',
      budget: '2 cr',
      image: '',
      gallery: [

      ],
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      challenge: 'During construction, aligning structural elements with interior design goals was a key challenge. Integrating smart systems, managing vendor timelines, and preserving design intent under budget constraints required constant coordination. Achieving seamless finishes, optimal lighting, and functional zoning demanded precision across civil, electrical, and interior teams throughout the build.',
      solution: 'The team delivered a cohesive space by synchronizing design with execution. Smart features were discreetly embedded, and finishes were customized to enhance flow and aesthetics. Lighting, furniture, and materials were selected for durability and elegance. Regular site reviews ensured quality control, resulting in a polished, functional, and client-approved interior.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design'],
      specifications: [
        { label: 'Total Area', value: '2400 sf ft' },
        { label: 'Bedroom', value: '4' },
        { label: 'Bathroom', value: '5' },
        { label: 'Special Features', value: 'smart home, modern home, best elevation' }
      ]
    },
    {
      id: 7,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Washim',
      completionDate: '2025',
      clientType: 'Private Family',
      duration: '24 months',
      budget: '2 cr',
      image: '',
      gallery: [

      ],
      description: 'Elegant 4BHK smart home with acoustic zoning, modern interiors, and best elevation design in Washim.',
      challenge: 'During construction, aligning structural elements with interior design goals was a key challenge. Integrating smart systems, managing vendor timelines, and preserving design intent under budget constraints required constant coordination. Achieving seamless finishes, optimal lighting, and functional zoning demanded precision across civil, electrical, and interior teams throughout the build.',
      solution: 'The team delivered a cohesive space by synchronizing design with execution. Smart features were discreetly embedded, and finishes were customized to enhance flow and aesthetics. Lighting, furniture, and materials were selected for durability and elegance. Regular site reviews ensured quality control, resulting in a polished, functional, and client-approved interior.',
      highlights: ['Smart home integration Open-concept layout', 'Natural light optimization', 'Minimalist aesthetic', 'Custom furniture and storage', 'Energy-efficient appliances', 'Acoustic zoning for privacy','Elegant lighting design'],
      specifications: [
        { label: 'Total Area', value: '2400 sf ft' },
        { label: 'Bedroom', value: '4' },
        { label: 'Bathroom', value: '5' },
        { label: 'Special Features', value: 'smart home, modern home, best elevation' }
      ]
    },
    {
      id: 8,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Yavatmal',
      completionDate: '2022',
      clientType: 'Private Family',
      duration: '8 months',
      budget: '45 lakh',
      image: '',
      gallery: [

      ],
      description: 'Smart 2BHK home with open layout, modular kitchen, and budget-friendly finishes in Yavatmal.',
      challenge: 'Designing within a ₹45 lakh budget required balancing aesthetics, functionality, and durability. Space constraints limited layout options, and material selection had to meet both cost and quality standards. Ensuring natural light, ventilation, and privacy in a compact footprint demanded thoughtful planning and efficient use of every square foot.',
      solution: 'The team optimized layout with open-plan design and multifunctional furniture. Locally sourced materials ensured quality within budget. Neutral tones and smart lighting enhanced spaciousness. Strategic window placement improved ventilation and light. Every element—from flooring to fixtures—was chosen for longevity, simplicity, and comfort, delivering a refined yet affordable living space',
      highlights: ['2BHK compact layout', 'Open living-dining zone', 'Modular kitchen setup', 'Budget-friendly materials', 'Low-maintenance finishes', 'Functional storage solutions'],
      specifications: [
        { label: 'Total Area', value: '1250 sf ft' },
        { label: 'Bedroom', value: '2' },
        { label: 'Bathroom', value: '3' },
        { label: 'Special Features', value: 'smart home' }
      ]
    },
    {
      id: 9,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Yavatmal ',
      completionDate: '2023',
      clientType: 'Private Family',
      duration: '18 months',
      budget: '1 cr',
      image: '',
      gallery: [
   
      ],
      description: 'Modern 3BHK duplex with smart features, solar panels, and spacious layout in Yavatmal.',
      challenge: 'Balancing spacious design with budget constraints was key. The challenge lay in optimizing 2,200 sq ft without overcomplicating finishes or layouts. Integrating smart features, ensuring natural light, and maintaining privacy across zones required thoughtful planning. Coordinating vendors and managing material quality .',
      solution: 'The team delivered a clean, functional layout with open zones and defined private areas. Smart switches, modular furniture, and ambient lighting enhanced usability. Locally sourced materials ensured quality and cost control. Neutral tones, large windows, and minimal partitions created a spacious feel. Timely execution ensured client satisfaction and design integrity.',
      highlights: ['3BHK layout with open living-dining', '2,200 sq ft built-up area', 'Modular kitchen and wardrobes', 'Smart lighting and switches', 'Ample natural light and ventilation', 'Neutral color palette','Separate utility and storage zones','Budget-aligned execution','Client-approved final delivery'],
      specifications: [
        { label: 'Total Area', value: '2200 sf ft' },
        { label: 'Bedroom', value: '3' },
        { label: 'Bathroom', value: '4' },
        { label: 'Special Features', value: 'smart home, duplex, solar panels' }
      ]
    },
    {
      id: 10,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Yavatmal',
      completionDate: '2021',
      clientType: 'Private Family',
      duration: '10 months',
      budget: '60 lakh',
      image: '',
      gallery: [

      ],
      description: 'Compact 2BHK home with smart interiors, modular kitchen, and natural light in Yavatmal.',
      challenge: 'Designing a compact home within budget required smart space planning and material selection. Limited area posed challenges for storage, lighting, and ventilation. Balancing simplicity with comfort, while ensuring durability and aesthetic appeal, demanded thoughtful execution and coordination across vendors.',
      solution: 'TThe layout maximized space with open zones and multifunctional furniture. Neutral tones and natural light enhanced openness. Locally sourced materials ensured cost-efficiency. Smart switches and modular storage added functionality. The result is a cozy, low-maintenance home tailored for everyday living.',
      highlights: ['2BHK layout', 'Open living-dining zone', 'Modular kitchen', 'Natural light optimization', 'Smart switches', 'Budget-friendly finishes','Functional storage'],
      specifications: [
        { label: 'Total Area', value: '1500 sf ft' },
        { label: 'Bedroom', value: '2' },
        { label: 'Bathroom', value: '3' },
        { label: 'Special Features', value: 'interior' }
      ]
    },
    {
      id: 11,
      title: 'Modern  Family Residential ',
      category: ' Residential',
      location: 'Yavatmal ',
      completionDate: '2022',
      clientType: 'Private Family',
      duration: '24 months',
      budget: '1.5 cr',
      image: '',
      gallery: [

      ],
      description: 'Spacious 4BHK duplex bungalow with smart features, solar panels, and elegant interiors in Yavatmal.',
      challenge: 'Designing a 2,500 sq ft residence required balancing spaciousness with functionality. The challenge was to create fluid zones for living, dining, and bedrooms while integrating smart features discreetly. Managing lighting, ventilation, and privacy across a large footprint demanded precise planning, especially while coordinating civil and interior teams during execution.',
      solution: 'The layout was optimized with open-concept living and dining areas, zoned bedrooms, and smart storage. Ambient lighting, large windows, and neutral tones enhanced openness. Smart switches and modular furniture added convenience. Material selection focused on durability and elegance. Timely walkthroughs ensured alignment with client expectations and seamless design delivery.',
      highlights: ['2,500 sq ft built-up area', '4BHK layout with spacious living-dining zone', 'Modular kitchen with utility', 'Smart switches and ambient lighting', 'Vitrified tile flooring and matte finishes', 'Large windows for natural light','Custom wardrobes and storage units','●	Neutral color palette with minimalist styling','Separate pooja and study zones','Client-approved final execution'],
      specifications: [
        { label: 'Total Area', value: '2500 sf ft' },
        { label: 'Bedroom', value: '4' },
        { label: 'Bathroom', value: '5' },
        { label: 'Special Features', value: 'smart home, duplex , solar panels , bungalow' }
      ]
    },
  ];

  const project: Project | undefined = projects.find(p => p.id === parseInt(id || '1'));

  // No early return to keep Hooks un-conditional; handle not-found in JSX below

  // Lazy-load local assets only when viewing this page
  const imageImporters = import.meta.glob('../assets/id*/**/*.{jpg,jpeg,png,JPG,PNG}', { as: 'url' }) as Record<string, () => Promise<string>>;
  const videoImporters = import.meta.glob('../assets/id*/**/*.{mp4,MP4,mov,MOV}', { as: 'url' }) as Record<string, () => Promise<string>>;

  const [heroImage, setHeroImage] = useState<string>('');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [videosForProject, setVideosForProject] = useState<string[]>([]);

  useEffect(() => {
    if (!project) return;
    const loadMedia = async () => {
      const idFolderSegment = `/id${project!.id}/`;
      const imageEntries = Object.entries(imageImporters).filter(([path]) => path.includes(idFolderSegment));
      const videoEntries = Object.entries(videoImporters).filter(([path]) => path.includes(idFolderSegment));

      const loadedImages = await Promise.all(imageEntries.map(([, importer]) => importer()));
      const loadedVideos = await Promise.all(videoEntries.map(([, importer]) => importer()));

      // Prefer Thumbnail for hero
      const thumbIndex = imageEntries.findIndex(([path]) => /Thumbnail\.(jpg|jpeg|png)$/i.test(path));
      const thumbUrl = thumbIndex >= 0 ? await imageEntries[thumbIndex][1]() : undefined;
      const hero = thumbUrl || loadedImages[0] || '';
      const gallery = loadedImages.filter((url) => url !== hero);

      setHeroImage(hero);
      setGalleryImages(gallery);
      setVideosForProject(loadedVideos);
    };
    loadMedia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.id]);

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
      {project ? (
        <div className="relative h-96 bg-gray-900">
          {heroImage && (
            <img 
              src={heroImage}
              alt={project.title}
              className="w-full h-full object-cover opacity-70"
            />
          )}
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
      ) : (
        <div className="relative h-96 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <Link to="/" className="text-blue-700 hover:text-orange-600">Return to Home</Link>
          </div>
        </div>
      )}

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
                <div className="font-semibold text-gray-900">{project?.location}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Calendar className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Completed</div>
                <div className="font-semibold text-gray-900">{project?.completionDate}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <Clock className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Duration</div>
                <div className="font-semibold text-gray-900">{project?.duration}</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <IndianRupee className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <div className="text-sm text-gray-600">Budget</div>
                <div className="font-semibold text-gray-900">{project?.budget}</div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{project?.challenge}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">{project?.solution}</p>
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {galleryImages.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${project?.title ?? 'Project'} - Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                ))}
              </div>
              {videosForProject.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Videos</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {videosForProject.map((videoUrl: string, index: number) => (
                      <div key={index} className="aspect-video w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow">
                        {videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') ? (
                          <iframe
                            className="w-full h-full"
                            src={videoUrl}
                            title={`Video ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        ) : (
                          <video
                            className="w-full h-full"
                            src={videoUrl}
                            controls
                            preload="metadata"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Highlights */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Highlights</h3>
              <ul className="space-y-3">
                    {project?.highlights.map((highlight, index) => (
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
                {project?.specifications.map((spec, index) => (
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