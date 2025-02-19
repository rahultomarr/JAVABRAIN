import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import hero from '../assets/hero.png';

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
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
              src={hero} 
              alt="Coding illustration" 
              className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;