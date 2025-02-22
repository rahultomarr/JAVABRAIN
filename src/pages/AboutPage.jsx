function AboutPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-secondary mb-12">About JavaBrain</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At JavaBrain, we're committed to transforming aspiring developers into industry-ready professionals. 
              Our comprehensive training programs are designed to bridge the gap between academic knowledge and 
              real-world requirements.
            </p>
            <p className="text-gray-600">
              With a focus on practical learning, interview preparation, and placement assistance, we ensure 
              our students are well-equipped to succeed in their careers.
            </p>
          </div>
          <div className="flex justify-center hover:scale-105 transition-transform">
            <img 
              src="https://img.freepik.com/free-vector/branding-concept-landing-page_23-2148244329.jpg?t=st=1740227222~exp=1740230822~hmac=3b8573b8437a6c659fb96af6f9b183658efae73a5b20d2dbff4f3bcb07fa7124&w=2000"
              alt="Our Mission" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-secondary mb-6 text-center">Why Choose JavaBrain?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">Practice with real-world projects and case studies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Career Support</h3>
              <p className="text-gray-600">Get placement assistance and interview preparation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;