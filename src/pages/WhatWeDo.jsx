import React from "react";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const services = [
    {
      title: "Training",
      description:
        "Comprehensive training on Java, Spring Boot, Microservices, and more with hands-on projects.",
      image: "https://img.freepik.com/free-vector/freelancer-working-laptop-her-house_1150-35054.jpg?t=st=1740226541~exp=1740230141~hmac=6c964232c3f2e4235cade34e2a0f407e97ed548b317469f94c26118c7783c07e&w=1480"
    },
    {
      title: "Strategy",
      description:
        "Personalized interview cracking methodology designed to help you secure your dream job.",
      image: "https://img.freepik.com/premium-vector/teamwork-achieve-common-goals-target-gears-as-symbol-efficient-workflow-organization_143808-843.jpg?w=2000"
    },
    {
      title: "Support",
      description:
        "Ongoing assistance including mock interviews, real-time Q&A sessions, and placement guidance.",
      image: "https://img.freepik.com/premium-vector/checklist-remind-project-progress-design-concept-vector-illustration_7087-2319.jpg?w=1480"
    },
  ];

  return (
    <div className="min-h-screen bg-green-100 p-8">
      <motion.h2 
        className="text-3xl font-bold text-center text-green-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What We Do
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold text-green-600">{service.title}</h3>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;

