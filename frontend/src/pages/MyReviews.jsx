import React from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '../components/DashboardSidebar';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const MyReviews = () => {
  const reviews = [
    {
      id: 1,
      property: 'Modern Downtown Loft',
      text: 'Absolutely loved living here! The apartment is exactly as described and the neighborhood is very quiet at night. Highly recommend for young professionals.',
      date: 'April 15, 2026',
      rating: 5
    },
    {
      id: 2,
      property: 'Cozy Studio Apartment',
      text: 'Nice place overall. The unit is well-maintained and the building staff are friendly. However, the elevator was out of service twice during my stay.',
      date: 'March 28, 2026',
      rating: 4
    },
    {
      id: 3,
      property: 'Spacious 2BR with View',
      text: 'Perfect starter apartment! Clean, modern, and in a safe area. The balcony view of the city skyline is stunning.',
      date: 'March 12, 2026',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] font-sans">
      <SEO 
        title="My Reviews" 
        description="Manage and view all your property reviews on Rentora."
      />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-24 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <DashboardSidebar />

          {/* Main Content */}
          <main className="lg:col-span-9 space-y-8 md:space-y-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl md:text-4xl font-bold text-text-main">My Reviews</h1>
              <Link 
                to="/reviews" 
                className="bg-brand-terracotta text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-terracotta/20 transition-all active:scale-95"
              >
                Write New Review
              </Link>
            </div>
            
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-50 space-y-6 group hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-bold text-text-main">{review.property}</h3>
                      <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">{review.date}</p>
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
                    {review.text}
                  </p>
                  
                  <div className="flex items-center gap-6 pt-2">
                    <button className="text-brand-green font-bold text-sm md:text-base hover:underline flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                      Edit
                    </button>
                    <button className="text-brand-terracotta font-bold text-sm md:text-base hover:underline flex items-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {reviews.length === 0 && (
              <div className="bg-white rounded-[2.5rem] p-20 shadow-sm border border-gray-50 text-center space-y-6">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto text-gray-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-text-main">No reviews yet</h3>
                  <p className="text-gray-500 font-medium">You haven't written any property reviews. Start sharing your experiences!</p>
                </div>
                <Link 
                  to="/reviews" 
                  className="inline-block bg-brand-green text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-brand-green/20 transition-all active:scale-95"
                >
                  Write Your First Review
                </Link>
              </div>
            )}
          </main>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyReviews;
