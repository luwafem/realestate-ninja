import React, { useState, useMemo } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { SlidersHorizontal, RotateCcw, Search, ChevronDown } from 'lucide-react';

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    status: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    sortBy: 'featured'
  });

  const locations = ['Ikoyi', 'Banana Island', 'Victoria Island', 'Lekki Phase 1'];
  const propertyTypes = ['Penthouse', 'Villa', 'Apartment', 'Duplex'];
  const statuses = ['For Sale', 'For Rent'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      location: '',
      type: '',
      status: '',
      minPrice: '',
      maxPrice: '',
      bedrooms: '',
      sortBy: 'featured'
    });
  };

  // Memoized filtering logic for performance
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.location) result = result.filter(p => p.location.includes(filters.location));
    if (filters.type) result = result.filter(p => p.type === filters.type);
    if (filters.status) result = result.filter(p => p.status === filters.status);
    if (filters.minPrice) result = result.filter(p => p.price >= parseInt(filters.minPrice));
    if (filters.maxPrice) result = result.filter(p => p.price <= parseInt(filters.maxPrice));
    if (filters.bedrooms) result = result.filter(p => p.bedrooms >= parseInt(filters.bedrooms));

    if (filters.sortBy === 'price-low-high') result.sort((a, b) => a.price - b.price);
    else if (filters.sortBy === 'price-high-low') result.sort((a, b) => b.price - a.price);
    else if (filters.sortBy === 'featured') result.sort((a, b) => (b.featured === a.featured ? 0 : b.featured ? -1 : 1));

    return result;
  }, [filters]);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-[10px] tracking-[0.4em] text-slate-400 uppercase font-bold mb-4 block">
            Exclusive Listings
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">
            The <span className="italic">Portfolio</span>
          </h1>
          <div className="h-px w-24 bg-slate-900 mb-8" />
        </div>

        {/* Filter Bar - Professional & Minimal */}
        <div className="border-y border-slate-100 py-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
              
              {/* Location Select */}
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Location</label>
                <div className="relative">
                  <select 
                    name="location" 
                    value={filters.location} 
                    onChange={handleFilterChange}
                    className="w-full bg-transparent text-sm font-medium border-none p-0 focus:ring-0 appearance-none cursor-pointer"
                  >
                    <option value="">All Regions</option>
                    {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Type Select */}
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Type</label>
                <div className="relative">
                  <select 
                    name="type" 
                    value={filters.type} 
                    onChange={handleFilterChange}
                    className="w-full bg-transparent text-sm font-medium border-none p-0 focus:ring-0 appearance-none cursor-pointer"
                  >
                    <option value="">All Styles</option>
                    {propertyTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* Sorting */}
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Order By</label>
                <div className="relative">
                  <select 
                    name="sortBy" 
                    value={filters.sortBy} 
                    onChange={handleFilterChange}
                    className="w-full bg-transparent text-sm font-medium border-none p-0 focus:ring-0 appearance-none cursor-pointer"
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-low-high">Price: Ascending</option>
                    <option value="price-high-low">Price: Descending</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400 pointer-events-none" />
                </div>
              </div>

              <button 
                onClick={resetFilters}
                className="flex items-center text-[10px] tracking-widest uppercase font-bold text-slate-900 hover:opacity-50 transition-opacity"
              >
                <RotateCcw className="w-3 h-3 mr-2" /> Reset
              </button>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-12 flex justify-between items-center">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            Displaying {filteredProperties.length} Signature Residences
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center border border-dashed border-slate-200">
            <Search className="w-10 h-10 text-slate-200 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-500 font-light mb-8">Refine your criteria or explore our off-market collections.</p>
            <button onClick={resetFilters} className="text-[10px] tracking-widest uppercase font-bold border-b-2 border-slate-900 pb-1">
              View All Properties
            </button>
          </div>
        )}

        {/* Stats - Refined Minimalism */}
        <div className="mt-32 border-t border-slate-100 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: 'Market Volume', value: '₦50B+' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Avg Sale Cycle', value: '30 Days' }
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div className="text-4xl font-serif text-slate-900 mb-2">{stat.value}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA - "The Atelier" Style */}
        <div className="mt-32 bg-slate-950 p-16 md:p-24 text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Seeking something <br /><span className="italic opacity-80">truly exclusive?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Our private advisors maintain an unlisted directory of Nigeria's most coveted off-market estates.
          </p>
          <button className="bg-white text-slate-900 px-12 py-5 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-slate-200 transition-all">
            Private Consultation
          </button>
        </div>

      </div>
    </div>
  );
};

export default PropertiesPage;