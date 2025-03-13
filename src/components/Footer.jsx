import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Coding Journey</h3>
            <p className="text-gray-300">
              JavaBrain is a premier training platform dedicated to helping aspiring developers 
              master Java and crack top MNC interviews.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>JAVA/J2EE</li>
              <li>SQL</li>
              <li>SPRING</li>
              <li>HIBERNATE</li>
              <li>STRUTS</li>
              <li>MICROSERVICES</li>
              <li>ANGULAR</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <div className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md text-black w-full"
              />
              <button className="bg-primary px-4 py-2 rounded-r-md">Go</button>
            </div>
            {/* social icons */}
            <div className="flex space-x-6 py-3">
              <a href="https://wa.me/9092492772">
                <FaWhatsapp className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
              <a href="https://www.instagram.com/javabraintech?igsh=YmJ2eGtheDA3M2h1">
                <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;