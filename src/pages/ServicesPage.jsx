import { useNavigate } from 'react-router-dom';

function ServicesPage() {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: 'Core Java Training',
      description: 'Master Java fundamentals, OOP concepts, and advanced features with hands-on projects.',
      duration: '3 months',
      image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-assets/master/public/images/code-illustration.png'
    },
    {
      id: 2,
      title: 'Spring Framework',
      description: 'Learn Spring Core, Spring MVC, and Spring Boot for building enterprise applications.',
      duration: '2 months',
      image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-assets/master/public/images/community.png'
    },
    {
      id: 3,
      title: 'Microservices Architecture',
      description: 'Build scalable microservices using Spring Cloud and Docker.',
      duration: '2.5 months',
      image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-assets/master/public/images/code-illustration.png'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">Our Training Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:bg-green-700 hover:text-white transition-all duration-300 cursor-pointer"
              onClick={() => navigate('/enroll')}
            >
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-medium">Duration: {service.duration}</span>
                <button className="btn-primary">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;