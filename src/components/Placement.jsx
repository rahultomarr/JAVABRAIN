import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Placement() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Hero Section */}
      <motion.div
        className="bg-green-600 py-12 px-6 text-center shadow-lg rounded-lg text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold">Placement Guaranteed Program</h1>
        <p className="mt-3 text-lg">Secure your dream job with our 6-month intensive training program.</p>
      </motion.div>

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
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Coding illustration" 
              className="w-[700px] xl:w-[700px] relative z-10 drop-shadow rounded-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">What’s Included?</h2>
            <p className="mt-4 text-gray-600">
              Our program offers a structured pathway to land a high-paying job in tech. 
              You’ll receive <span className="font-semibold text-green-600">real-world experience</span>, 
              professional mentorship, and job placement support.
            </p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>✅ Hands-on Project-Based Learning</li>
              <li>✅ Industry Expert Mentorship</li>
              <li>✅ Resume & Interview Preparation</li>
              <li>✅ Guaranteed Job Placement</li>
            </ul>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Training session" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-12 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            className="p-6 bg-blue-50 rounded-lg shadow-md text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">Industry Experts</h3>
            <p className="text-gray-600 mt-2">Learn from top professionals with years of experience.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-blue-50 rounded-lg shadow-md text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">Live Projects</h3>
            <p className="text-gray-600 mt-2">Work on real-world projects that prepare you for the job market.</p>
          </motion.div>

          <motion.div
            className="p-6 bg-blue-50 rounded-lg shadow-md text-center"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">100% Job Placement</h3>
            <p className="text-gray-600 mt-2">We ensure every graduate lands a high-paying job.</p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-800">Ready to Start Your Career?</h2>
        <p className="text-gray-600 mt-2">Join the Placement Guaranteed Program and transform your future.</p>
        <motion.button
          className="mt-6 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/enroll')}
        >
          Enroll Now →
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Placement;
