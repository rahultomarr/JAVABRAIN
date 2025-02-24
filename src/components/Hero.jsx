import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import hero from '../assets/hero.png';

function Hero() {
  const navigate = useNavigate();
  const location = useLocation();

  const reloadPage = () => {
    navigate(location.pathname, { replace: true });
    window.location.reload(); // Reload the page
  };

  return (
    <div className="min-h-screen bg-green-200 p-8 ">
      {/* Placement Guaranteed Program Banner */}
      <motion.div
        className="bg-green-500 py-6 px-4 text-center shadow-md rounded-lg "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-gray-900">Placement Guaranteed Program</h2>
        <p className="text-gray-600 mt-2">
          <span className="font-semibold text-gray-800">Home</span> {' > '}
          <span
            className="text-white font-semibold cursor-pointer"
            onClick={reloadPage}
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
            <h1 className="text-5xl font-bold text-secondary mb-6">
              Code Your <span className="text-primary">Future</span>,<br />
              Crack Your Dream Job!
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
              src="https://files.oaiusercontent.com/file-P2byT5dRGXRVCp3o5xCZdq?se=2025-02-24T17%3A25%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Df8d2958d-b7a0-4401-9d51-634624dfb56e.webp&sig=KmpeFApQ/3GOpsavtCN82E0vsyswYPbbkX5XocCvrSo%3D" 
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
