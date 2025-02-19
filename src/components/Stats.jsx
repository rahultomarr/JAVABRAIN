import { useNavigate } from 'react-router-dom';

function Stats() {
  const navigate = useNavigate();

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-4xl font-bold text-secondary mb-4"
          data-aos="fade-up"
        >
          A large community of students is learning with us.
        </h2>
        <p 
          className="text-gray-600 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Become a part of JavaBrain and take your coding career to the next level. 
          Enroll now and start your journey toward success!
        </p>
        <button 
          className="btn-primary"
          data-aos="fade-up"
          data-aos-delay="200"
          onClick={() => navigate('/enroll')}
        >
          Enroll now 🔔
        </button>
      </div>
    </div>
  );
}

export default Stats;