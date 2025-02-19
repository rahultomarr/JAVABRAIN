function TeamPage() {
  const team = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Java Lead Instructor',
      image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-assets/master/public/images/avatar.png',
      description: '15+ years of experience in Java development and training.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Spring Framework Expert',
      image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-assets/master/public/images/avatar.png',
      description: 'Specialized in Spring Boot and Microservices architecture.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Database Specialist',
      image: 'https://raw.githubusercontent.com/stackblitz/stackblitz-assets/master/public/images/avatar.png',
      description: 'Expert in SQL optimization and database design.'
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">Meet Our Expert Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-secondary mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;