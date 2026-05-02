import React from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-[#fdfbf9] min-h-screen font-sans">
      <SEO 
        title="About Us" 
        description="Learn more about Rentora, our mission to provide transparent rental experiences, and the team behind the platform."
      />
      {/* Hero Section */}
      <section className="py-24 px-6 lg:px-20 bg-brand-forest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <div className="inline-block bg-brand-green/20 text-brand-green px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
            Our Mission
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Making renting <span className="text-brand-green">human</span> again.
          </h1>
          <p className="text-gray-300 text-xl lg:text-2xl font-medium leading-relaxed">
            Rentora was born out of a simple realization: the rental process is broken. We're here to fix it through transparency and community.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 lg:px-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-forest/10 rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80" 
                  alt="Team working together" 
                  className="w-full h-full object-cover aspect-video"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-terracotta p-8 rounded-[2rem] text-white shadow-xl hidden md:block">
                <p className="text-4xl font-bold italic">"Trust first."</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-text-main leading-tight">Founded on the belief that everyone deserves a home they love.</h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                We've all been there—viewing a property that looks nothing like the photos, or dealing with a landlord who ignores maintenance requests. Rentora was created to provide a platform where authentic experiences are shared, not hidden.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                By combining verified listings with real neighbor reviews, we empower renters to make decisions with confidence and peace of mind.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-brand-green">10k+</p>
                  <p className="text-gray-400 font-bold uppercase tracking-wider text-xs">Happy Renters</p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-brand-terracotta">500+</p>
                  <p className="text-gray-400 font-bold uppercase tracking-wider text-xs">Verified Cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 lg:px-20 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-text-main">What we stand for</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Radical Transparency',
                desc: 'No hidden fees, no filtered reviews. We believe the truth is the best way to find a home.',
                icon: '✨'
              },
              {
                title: 'Community Driven',
                desc: 'Rentora is built by renters, for renters. Your voice is the heart of our platform.',
                icon: '🤝'
              },
              {
                title: 'Earthy Simplicity',
                desc: 'Technology should make life easier, not more complex. Our tools are simple and effective.',
                icon: '🌿'
              }
            ].map((value, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-bg-off-white border border-gray-50 hover:shadow-xl transition-all group">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{value.icon}</div>
                <h3 className="text-2xl font-bold text-text-main mb-4">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sweet Closing Section */}
      <section className="py-24 px-6 lg:px-20 text-center bg-[#fdfbf9]">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl font-bold text-text-main">Ready to find your next chapter?</h2>
          <p className="text-gray-500 text-xl font-medium">
            Join thousands of others who have found their perfect rental through Rentora.
          </p>
          <button className="bg-brand-terracotta text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all active:scale-95">
            Join the Community
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
