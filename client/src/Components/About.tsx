import React from 'react';

const About = () => {
  return (
    <div className="about-container px-6 py-12 max-w-5xl mx-auto text-black bg-[#ffffff]">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className="text-gray-900">
          Born out of the vibrant diversity and warmth of India, our platform was created with a simple idea — to connect travelers with authentic local stays and experiences. Whether it’s a heritage haveli in Rajasthan, a peaceful homestay in the Western Ghats, or a cozy studio in Delhi, we make unique Indian getaways accessible to everyone.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <p className="text-gray-900">
          We provide a platform for hosts across India to showcase their homes, cottages, and experiences to travelers from all over the world. From backpackers to family vacations, we cater to every traveler's needs by promoting genuine Indian hospitality.
        </p>
        <p className="text-gray-900 mt-2">
          Our goal is to empower local communities, support micro-entrepreneurs, and make travel in India more meaningful, personal, and sustainable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc pl-6 text-gray-900">
          <li>Focused on local Indian stays and experiences</li>
          <li>Secure and verified listings</li>
          <li>Support in multiple regional languages</li>
          <li>Easy booking and cancellation options</li>
          <li>24/7 customer support</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
        <p className="text-gray-900">
          Whether you’re a traveler seeking unforgettable memories or a host looking to share your world, we invite you to be part of our journey.
          Together, let’s make India more discoverable — one stay at a time.
        </p>
      </section>
    </div>
  );
};

export default About;
