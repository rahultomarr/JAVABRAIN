import { motion } from 'framer-motion';

function Services() {
  const services = [
    { id: 1, name: 'Core JAVA/J2EE', icon: '☕' },
    { id: 2, name: 'SQL', icon: '📊' },
    { id: 3, name: 'SPRING', icon: '🌱' },
    { id: 4, name: 'SPRINGBOOT', icon: '⚡' },
    { id: 5, name: 'HIBERNATE', icon: '🔄' },
    { id: 6, name: 'STRUTS', icon: '🎯' },
    { id: 7, name: 'MICROSERVICES', icon: '🌐' },
    { id: 8, name: 'ANGULAR', icon: '🅰️' },
  ];

  return (
    <div className="py-20 bg-green-200" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12" data-aos="fade-up">
          Services we provide
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:bg-green-700 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
            >
              <div className="text-3xl mb-3">{service.icon}</div>
              <h3 className="font-semibold">{service.name}</h3>
            </motion.div>
          ))}
        </div>

        {/* Adding Front-End Development and Software Testing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">Java Development</h3>
            <p className="text-gray-600 mb-4">
            Java Development focuses on building robust, scalable, and efficient backend applications for enterprise systems.
            </p>
            <h4 className="font-semibold">Tech Stack:</h4>
            <ul className=" ml-5 text-gray-600 list-none">
              <li>✅  Core Java</li>
              <li>✅  Spring Framework</li>
              <li>✅  Spring Boot</li>
              <li>✅  Hibernate</li>
              <li>✅  Microservices</li>
            </ul>
            <p className="mt-4 font-semibold">Training & Placement: 6 Months</p>
            <p>Session: Online / Offline</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4">Software Testing</h3>
            <p className="text-gray-600 mb-4">
              Automation testing streamlines repetitive tasks and ensures efficient software validation.
            </p>
            <h4 className="font-semibold">Tech Stack:</h4>
            <ul className=" ml-5 text-gray-600 list-none">
              <li>✅ Java</li>
              <li>✅ Selenium</li>
              <li>✅ BDD - Cucumber</li>
              <li>✅ GIT</li>
              <li>✅ API - Postman</li>
              <li>✅ JIRA</li>
            </ul>
            <p className="mt-4 font-semibold">Training & Placement: 5 Months</p>
            <p>Session: Online / Offline</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
