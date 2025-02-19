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
              At JavaBrain, we aim to bridge the gap between academic learning and real-world industry requirements. 
              Our structured training programs focus on hands-on coding, interview preparation, and placement assistance, 
              ensuring that our students are industry-ready.
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
              src={banner} // Update the src attribute
              alt="Community" 
              className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;