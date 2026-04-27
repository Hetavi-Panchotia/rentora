import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reviews = () => {
  return (
    <>
      <Navbar />
      <div className="py-20 px-10 lg:px-20 min-h-[60vh]">
        <h1 className="text-4xl font-bold text-text-main">Community Reviews</h1>
        <p className="text-gray-500 mt-4 text-lg italic">Placeholder for user reviews and ratings...</p>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
