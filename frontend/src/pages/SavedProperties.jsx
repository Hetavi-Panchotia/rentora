import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import PropertyCard from '../components/PropertyCard';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const SavedProperties = () => {
  const savedProperties = [
    {
      _id: '1',
      title: 'Elegant Penthouse',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      location: 'Upper West Side, NYC',
      price: '$4,200/mo',
      rating: 4.9,
      reviews: 124,
      tags: ['Penthouse', 'City View']
    },
    {
      _id: '2',
      title: 'Garden Apartment',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      location: 'Park Slope, Brooklyn',
      price: '$2,800/mo',
      rating: 4.7,
      reviews: 86,
      tags: ['Garden', 'Pet Friendly']
    },
    {
      _id: '3',
      title: 'Modern Loft',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      location: 'SoHo, Manhattan',
      price: '$3,500/mo',
      rating: 4.8,
      reviews: 52,
      tags: ['Loft', 'Industrial']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] font-sans">
      <SEO 
        title="Saved Properties" 
        description="View and manage the properties you've saved for later on Rentora."
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-24 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <DashboardSidebar />

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-8 md:space-y-10">
            <h1 className="text-3xl md:text-4xl font-bold text-text-main">Saved Properties</h1>
            
            {savedProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
                {savedProperties.map((property) => (
                  <div key={property._id} className="relative group">
                    <PropertyCard {...property} />
                    {/* Additional overlay or status if needed, but PropertyCard already handles the heart icon */}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[2.5rem] p-20 shadow-sm border border-gray-50 text-center space-y-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-text-main">No saved properties</h3>
                  <p className="text-gray-500 font-medium">You haven't saved any properties yet. Explore our listings to find your next home!</p>
                </div>
                <button 
                  onClick={() => window.location.href = '/explore'}
                  className="inline-block bg-brand-green text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-green/20 transition-all active:scale-95"
                >
                  Start Exploring
                </button>
              </div>
            )}
          </main>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedProperties;
