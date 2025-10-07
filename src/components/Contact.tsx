import { Phone, Mail, Youtube, Instagram, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 8390248234'],
      action: 'tel:+918390248234',
      description: 'Mon-Sat, 9:00 AM - 7:00 PM'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['pavanhomedecor@gmail.com'],
      action: 'mailto:pavanhomedecor@gmail.com',
      description: 'Quick response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Nagpur, Maharashtra'],
      action: null,
      description: 'Central India'
    }
  ];

  const socials = [
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@purushottamchute5219',
      label: 'YouTube',
      color: 'hover:bg-red-600'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/pavan_home_decor_/',
      label: 'Instagram',
      color: 'hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to start your next project? We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-xl shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{info.title}</h4>
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-gray-200 text-lg font-medium mb-2">
                      {info.action ? (
                        <a
                          href={info.action}
                          className="hover:text-orange-400 transition-colors underline-offset-4 hover:underline"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </div>
                  ))}
                  <p className="text-gray-400 text-sm mt-2">{info.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">Connect With Us</h3>
              <p className="text-gray-300">Follow our journey and stay updated with our latest projects</p>
            </div>

            <div className="flex items-center justify-center gap-6">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white/10 p-5 rounded-xl hover:scale-110 transition-all duration-300 ${social.color} group border border-white/20 hover:border-transparent`}
                    aria-label={social.label}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </a>
                );
              })}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-300">
                <Clock className="h-5 w-5 text-orange-500" />
                <span className="text-sm">Business Hours: Monday - Saturday, 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
