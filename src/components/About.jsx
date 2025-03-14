import { useNavigate } from 'react-router-dom';
import banner from '../assets/banner.png'; // Add this import statement

function About() {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Join Our Community to<br />
              Start your Journey
            </h2>
            <p className="text-gray-600 mb-8">
            At <span className='text-green-600'>JavaBrain</span>, we bridge the gap between academic learning and real-world industry demands.
             Our structured training programs emphasize <span className='text-green-600'>hands-on coding, expert-led interview preparation, and dedicated placement assistance</span>, ensuring you are fully equipped to thrive in the IT industry. 🚀
            </p>
            <button 
              className="btn-primary"
              onClick={() => navigate('/enroll')}
            >
              Join Now
            </button>
          </div>
          <div data-aos="fade-left" className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Update the src attribute
              alt="Community" 
              className="w-[350px] md:max-w-[450px] object-cover drop-shadow rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;