import React, { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';

const Explore = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch properties');
        }
        
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <div className="py-20 px-10 lg:px-20 min-h-[80vh] bg-bg-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-text-main">Explore Properties</h1>
            <p className="text-gray-500 mt-2 text-lg">Find the perfect rental from our verified listings</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-brand-green border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 text-red-500 p-6 rounded-3xl text-center font-medium">
              {error}
            </div>
          ) : properties.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-xl font-medium">
              No properties found matching your criteria.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((prop) => (
                <PropertyCard 
                  key={prop._id} 
                  {...prop} 
                  image={prop.images[0]} // Map images array to image prop
                  reviews={prop.reviewsCount} // Map reviewsCount to reviews prop
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explore;
