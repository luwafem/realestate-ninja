import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Maximize2, BedDouble, Bath } from 'lucide-react';

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-transparent overflow-hidden">
      <Link 
          to={`/property/${property.id}`}>
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Status Badges - Subtle & Text-based */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {property.featured && (
            <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-bold text-slate-900 shadow-sm">
              Signature
            </span>
          )}
          <span className="bg-slate-900/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-bold text-white">
            {property.status}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="py-5 px-1">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-serif text-slate-900 leading-tight flex-1">
            {property.title}
          </h3>
          <p className="text-sm font-medium text-slate-900 ml-4">
            {formatPrice(property.price)}
          </p>
        </div>

        <div className="flex items-center text-slate-500 mb-6 text-sm">
          <MapPin className="w-3 h-3 mr-1.5 opacity-70" />
          <span className="font-light tracking-wide">{property.location}</span>
        </div>
        
        {/* Technical Details - Minimalist Icons */}
        <div className="flex items-center gap-6 py-4 border-t border-slate-100">
          <div className="flex items-center text-slate-600">
            <BedDouble className="w-4 h-4 mr-2 stroke-[1.5px]" />
            <span className="text-xs font-medium">{property.bedrooms}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Bath className="w-4 h-4 mr-2 stroke-[1.5px]" />
            <span className="text-xs font-medium">{property.bathrooms}</span>
          </div>
          <div className="flex items-center text-slate-600">
            <Maximize2 className="w-4 h-4 mr-2 stroke-[1.5px]" />
            <span className="text-xs font-medium">{property.area} <small className="text-[10px] uppercase opacity-60">sqft</small></span>
          </div>
        </div>
        
        <Link 
          to={`/property/${property.id}`}
          className="mt-2 block w-full text-center py-4 text-[11px] tracking-[0.2em] uppercase font-bold border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
        >
          View Residence
        </Link>
      </div>
      </Link>
    </div>
  );
};

export default PropertyCard;