import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { ChevronRight, Search, MapPin, Home, ArrowRight } from 'lucide-react';

const HomePage = () => {
  const [search, setSearch] = useState({ location: '', type: '' });
  const [isScrolled, setIsScrolled] = useState(false);

  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-slate-900 font-light">
      {/* Hero Section with Full Background */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Luxury Waterfront Estate"
          />
          {/* Professional Overlay: Darker on the left for text contrast, fading to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-xs font-medium tracking-[0.4em] uppercase text-slate-300">
              Est. 2010 • Lagos, Nigeria
            </span>
            <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight">
              Curating <br /> <span className="italic text-slate-200">Architectural</span> <br /> Excellence
            </h1>
            <p className="text-lg text-slate-200 max-w-lg leading-relaxed font-normal opacity-90">
              A private collection of the most prestigious residences in Ikoyi, Banana Island, and Victoria Island.
            </p>

            {/* Hero Search Bar - Refined for Hero BG */}
            <div className="pt-10">
              <div className="bg-white/95 backdrop-blur-md p-2 rounded-none shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl border border-white/20">
                <div className="flex items-center flex-1 px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200 w-full">
                  <MapPin className="w-4 h-4 mr-3 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Location" 
                    className="w-full outline-none text-sm placeholder:text-slate-400 font-light bg-transparent"
                    value={search.location}
                    onChange={(e) => setSearch({...search, location: e.target.value})}
                  />
                </div>
                <div className="flex items-center flex-1 px-4 py-2 w-full">
                  <Home className="w-4 h-4 mr-3 text-slate-500" />
                  <select 
                    className="w-full outline-none text-sm bg-transparent text-slate-600 appearance-none font-light cursor-pointer"
                    value={search.type}
                    onChange={(e) => setSearch({...search, type: e.target.value})}
                  >
                    <option value="">Property Type</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Villa">Waterfront Villa</option>
                  </select>
                </div>
                <button className="bg-slate-900 text-white px-10 py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-black transition-all w-full md:w-auto">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4">
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.4em] text-slate-400 uppercase font-bold">Nigeria's Finest</span>
            <h2 className="text-4xl font-serif">The Collection</h2>
            <div className="h-px w-16 bg-slate-900" />
          </div>
          <Link 
            to="/properties" 
            className="group flex items-center text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-slate-900 transition-colors"
          >
            Explore All Residencies <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {featuredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-serif leading-tight">
              Exclusivity <br /> in every detail.
            </h2>
            <p className="text-slate-600 leading-relaxed font-normal max-w-md text-lg">
              Our bespoke concierge approach focuses on discretion and market intelligence for the most discerning clients.
            </p>
            <ul className="space-y-6 pt-4">
              {['Off-market listings', 'Legal advisory', 'Property management'].map((item) => (
                <li key={item} className="flex items-center text-[10px] tracking-[0.3em] text-slate-800 uppercase font-bold">
                  <div className="w-2 h-px bg-slate-900 mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=80" 
              className="w-full h-[600px] object-cover"
              alt="Curated Service"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-12 border border-slate-100 hidden lg:block shadow-xl">
              <p className="text-6xl font-serif">15+</p>
              <p className="text-[10px] tracking-[0.4em] text-slate-500 uppercase mt-4 font-bold">Years of Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-5xl font-serif mb-10 leading-tight">Begin your private <br /> acquisition journey.</h2>
        <button className="border border-slate-900 px-16 py-6 text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-slate-900 hover:text-white transition-all duration-700">
          Contact an Agent
        </button>
      </section>
    </div>
  );
};

export default HomePage;