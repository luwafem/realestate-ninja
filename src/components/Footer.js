import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/">
              <h1 className="text-LG tracking-[0.3em] uppercase font-bold">
                HOUSE PARADE <span className="font-light opacity-70">CORNER</span>
              </h1>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              The gold standard in Nigerian luxury real estate. Curating an elite portfolio of residences for the world's most discerning individuals.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-500">Navigation</h3>
            <ul className="space-y-4">
              {['Home', 'Properties', 'Agents', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm text-slate-300 hover:text-white transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Property Types */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-500">Portfolio</h3>
            <ul className="space-y-4 text-sm text-slate-300 font-light">
              <li className="hover:text-white cursor-pointer transition-colors">Penthouse Suites</li>
              <li className="hover:text-white cursor-pointer transition-colors">Waterfront Villas</li>
              <li className="hover:text-white cursor-pointer transition-colors">Private Estates</li>
              <li className="hover:text-white cursor-pointer transition-colors">Corporate HQ</li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[10px] tracking-[0.3em] uppercase font-bold text-slate-500">Office</h3>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-slate-300 font-light leading-relaxed">
                <MapPin size={18} className="mr-3 text-slate-500 shrink-0" strokeWidth={1.5} />
                Holborn house suite 106,plot 649, <br />Franca Afegbua cresent zone E<br />Apo Abuja, Nigeria
              </li>
              <li className="flex items-center text-sm text-slate-300 font-light">
                <Phone size={18} className="mr-3 text-slate-500 shrink-0" strokeWidth={1.5} />
                +234 800 LUXURY
              </li>
              <li className="flex items-center text-sm text-slate-300 font-light">
                <Mail size={18} className="mr-3 text-slate-500 shrink-0" strokeWidth={1.5} />
                concierge@houseparadecorner.ng
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-900 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest text-slate-600 uppercase font-bold">
            &copy; {new Date().getFullYear()} HOUSE PARADE CORNER Nigeria.
          </p>
          <div className="flex space-x-8 text-[10px] tracking-widest text-slate-600 uppercase font-bold">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;