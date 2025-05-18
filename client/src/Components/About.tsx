// import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-200 to-purple-700 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-20">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-violet-700">About Us</h1>

        {/* Section 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-purple-900">Our Story</h2>
            <p className="text-purple-800">
              Born out of the vibrant diversity and warmth of India, our platform was created to connect travelers with authentic local stays. Whether it’s a heritage haveli in Rajasthan, a peaceful homestay in the Western Ghats, or a cozy studio in Delhi, we help you explore the true spirit of India.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              alt="Our Story"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/photos/hand-passing-keys-to-new-owner-picture-id929215648?k=20&m=929215648&s=170667a&w=0&h=QOS1MXyteGVPW6q2WCnkIF7n4Gtu00WAK5S3DjZmP6U="
              alt="What We Do"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-purple-900">What We Do</h2>
            <p className="text-purple-800 mb-3">
              We empower local hosts across India to share their homes and stories. Our platform is built for all travelers—from solo backpackers to family vacationers—seeking culturally rich, affordable, and safe stays.
            </p>
            <p className="text-purple-800">
              We're on a mission to make Indian travel personal, immersive, and community-driven.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="bg-purple-800 rounded-2xl p-8 mb-16 shadow-xl">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-purple-100 space-y-2">
            <li>Deep focus on Indian culture and hospitality</li>
            <li>Secure and verified property listings</li>
            <li>Support in multiple Indian languages</li>
            <li>Simple booking and easy cancellation policies</li>
            <li>Round-the-clock support for travelers and hosts</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
            <p className="text-purple-100">
              Whether you’re an explorer seeking soulful getaways or a host eager to share your world, join us in creating India’s most trusted travel community. Together, let’s make India more discoverable — one stay at a time.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.bu1QTp48A6U-8Gex589CJAHaEo&pid=Api&P=0&h=180"
              alt="Join Us"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
