import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const navigateToProgram = () => {
    navigate('/Placement'); // Navigate to the new page
  };

  return (
    <div className="min-h-screen bg-green-200 p-8">
      {/* Placement Guaranteed Program Banner */}
      <motion.div
        className="bg-green-500 py-6 px-4 text-center shadow-md rounded-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-gray-900">Placement Guaranteed Program</h2>
        <p className="text-gray-600 mt-2">
          <span className="font-semibold text-gray-800">Home</span> {' > '}
          <span
            className="text-white font-semibold cursor-pointer"
            onClick={navigateToProgram} // Navigate instead of reloading
          >
            Placement Guaranteed Program
          </span>
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl font-bold text-secondary mb-6">
              What is the <br /> <span className="text-primary font-normal">Placement <br /> Guaranteed</span><br />
              Program?
            </h1>

            <h1 className='text-1xl font-bold text-secondary mb-6'>
              Our <span className='text-primary'>Placement Guaranteed Program</span> offers an exceptional opportunity for you to gain 
              <span className='text-primary'> 6 months</span> of hands-on, real-time project-based training.<br /><br />
              We provide a pathway to work in a professional environment while enhancing your skills through workplace training. <br /><br />
              Choose between <span className='text-primary'>Software Testing</span> or <span className='text-primary'>Core Java</span> and kickstart your career with confidence.
            </h1>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/enroll')}
            >
              Get Started →
            </motion.button>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://plus.unsplash.com/premium_photo-1681248156502-745ab87474d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Coding illustration" 
              className="w-[700px] xl:w-[700px] relative z-10 drop-shadow rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
