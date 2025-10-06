import { Phone, Mail, Youtube, Instagram, User } from 'lucide-react';
const Contact = () => {

  const contactInfo = [
    {
      icon: User,
      title: 'Name',
      details: ['Pavan Chute'],
      action: null
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+918390248234'],
      action: 'tel:+918390248234'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['pavanhomedecor@gmail.com'],
      action: 'mailto:pawanhomedecor@gmail.com'
    }
  ];

  const socials = [
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@purushottamchute5219',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/pavan_home_decor_/',
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mx-auto mb-5" />
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Here's how you can reach us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-orange-600 p-3 rounded-lg shadow">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300">
                          {info.action && detailIndex === 0 ? (
                            <a 
                              href={info.action} 
                              className="hover:text-orange-400 transition-colors underline-offset-2 hover:underline"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4 text-center">Follow Us</h4>
              <div className="flex items-center justify-center space-x-4">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      <Icon className="h-8 w-8 transition-transform hover:-translate-y-0.5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
