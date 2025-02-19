function Services() {
  const services = [
    { id: 1, name: 'JAVA/J2EE', icon: '☕' },
    { id: 2, name: 'SQL', icon: '📊' },
    { id: 3, name: 'SPRING', icon: '🌱' },
    { id: 4, name: 'SPRINGBOOT', icon: '⚡' },
    { id: 5, name: 'HIBERNATE', icon: '🔄' },
    { id: 6, name: 'STRUTS', icon: '🎯' },
    { id: 7, name: 'MICROSERVICES', icon: '🌐' },
    { id: 8, name: 'ANGULAR', icon: '🅰️' },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12" data-aos="fade-up">
          Services we provide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-lg shadow-sm hover:bg-green-700 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;