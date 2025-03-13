function TeamPage() {
  const team = [
    {
      id: 1,
      name: 'Arulkumar V',
      role: 'Java Lead Instructor',
      image: 'https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1740227760~exp=1740231360~hmac=2e7733814930d6fd92a6501953033c99548e4bf2861a18c27ab4a6f3913df9e0&w=1380',
      description: '15+ years of experience in Java development and training.'
    },
    {
      id: 2,
      name: 'Vengatesan K',
      role: 'Spring Framework Expert',
      image: 'https://img.freepik.com/premium-vector/real-people-portraits-hand-drawn-flat-style-vector-design-concept-illustration-men-male-faces-shoulders-avatars-flat-style-vector-icons-set-modern-beautiful-avatar-man_419010-343.jpg?w=1480',
      description: 'Specialized in Spring Boot and Microservices architecture.'
    },
    {
      id: 3,
      name: 'Shanmugam S',
      role: 'Database Specialist',
      image: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-854.jpg?t=st=1740227954~exp=1740231554~hmac=a7d1a1e0dbd0c8946db8d5c45f4a5f4f70e7f632e96e3d57b3d52a2d1dcd0251&w=1480',
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