function Features() {
  const features = [
    { id: 1, title: 'Job assurances', icon: '📚' },
    { id: 2, title: 'Expert Instruction', icon: '👨‍🏫' },
    { id: 3, title: 'Mock Test', icon: '📝' },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12" data-aos="fade-up">
          The World's Leading learning Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-sm transform hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-secondary">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;