import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { MapPin, BedDouble, Bath, Maximize, ArrowLeft, Check, Phone, Mail, Award } from 'lucide-react';

const PropertyDetails = () => {
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(0);
  
  const property = properties.find(p => p.id === parseInt(id));
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h2 className="text-3xl font-serif text-slate-900 mb-4">Listing Not Found</h2>
        <p className="text-slate-500 mb-8">The residence you are looking for may have been acquired or moved.</p>
        <Link to="/properties" className="border-b border-slate-900 pb-1 text-xs tracking-widest uppercase font-bold">
          Return to Collection
        </Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Editorial Hero Gallery */}
      <section className="pt-24 lg:pt-0">
        <div className="flex flex-col lg:flex-row h-[70vh] lg:h-[85vh] gap-1 px-1">
          {/* Main Visual */}
          <div className="lg:w-2/3 h-full overflow-hidden relative group">
            <img 
              src={property.images[mainImage]} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt={property.title}
            />
            <Link to="/properties" className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors">
              <ArrowLeft size={20} className="text-slate-900" />
            </Link>
            <div className="absolute bottom-8 left-8">
               <span className="bg-slate-900/80 backdrop-blur-md text-white px-4 py-1 text-[10px] tracking-[0.2em] uppercase font-bold">
                 {property.status}
               </span>
            </div>
          </div>
          
          {/* Sidebar Gallery */}
          <div className="lg:w-1/3 flex lg:flex-col gap-1 h-32 lg:h-full">
            {property.images.slice(0, 3).map((img, idx) => (
              <div 
                key={idx} 
                className={`flex-1 overflow-hidden cursor-pointer relative ${mainImage === idx ? 'ring-inset ring-4 ring-slate-900/20' : ''}`}
                onClick={() => setMainImage(idx)}
              >
                <img src={img} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8">
            <div className="space-y-4 mb-12">
              <div className="flex items-center text-slate-400 gap-2 text-xs tracking-[0.2em] uppercase font-bold">
                <MapPin size={14} />
                {property.location}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-slate-900 leading-tight">
                {property.title}
              </h1>
            </div>

            {/* Feature Bar */}
            <div className="flex flex-wrap gap-12 py-10 border-y border-slate-100 mb-12">
              <div className="space-y-1">
                <p className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">Bedrooms</p>
                <div className="flex items-center gap-3">
                  <BedDouble size={20} className="text-slate-900" />
                  <span className="text-xl font-serif">{property.bedrooms}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">Bathrooms</p>
                <div className="flex items-center gap-3">
                  <Bath size={20} className="text-slate-900" />
                  <span className="text-xl font-serif">{property.bathrooms}</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">Area</p>
                <div className="flex items-center gap-3">
                  <Maximize size={20} className="text-slate-900" />
                  <span className="text-xl font-serif">{property.area} <small className="text-xs uppercase">sq ft</small></span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-slate max-w-none mb-16">
              <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-400 mb-6">The Residence</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-light">
                {property.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="mb-16">
              <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-400 mb-8">Amenities & Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center py-3 border-b border-slate-50 group">
                    <div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center mr-4 group-hover:bg-slate-900 transition-colors">
                      <Check size={12} className="text-slate-400 group-hover:text-white" />
                    </div>
                    <span className="text-sm text-slate-700 font-normal">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Inquiry Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Pricing Card */}
              <div className="bg-slate-50 p-8 border border-slate-100">
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-400 mb-2">Guide Price</p>
                <p className="text-4xl font-serif text-slate-900 mb-8">{formatPrice(property.price)}</p>
                
                <button className="w-full bg-slate-900 text-white py-5 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-black transition-all mb-4">
                  Request Private Viewing
                </button>
                <button className="w-full border border-slate-200 py-5 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-white transition-all">
                  Download Brochure
                </button>
              </div>

              {/* Agent Card */}
              <div className="border border-slate-100 p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative">
                    <img 
                      src={property.agent.photo} 
                      className="w-16 h-16 rounded-full object-cover grayscale"
                      alt={property.agent.name}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-slate-900 text-white p-1 rounded-full">
                      <Award size={10} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-slate-900">{property.agent.name}</h4>
                    <p className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">Senior Partner</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-sm font-light text-slate-600">
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-slate-400" />
                    {property.agent.phone}
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-slate-400" />
                    {property.agent.email}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;