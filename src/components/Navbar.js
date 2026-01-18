import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const navBackground = isScrolled || !isHome ? 'bg-white shadow-sm' : 'bg-transparent';
  const textColor = isScrolled || !isHome ? 'text-slate-900' : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo */}
          <Link to="/" className="z-50">
            <h1 className={`text-lg tracking-[0.3em] uppercase font-bold transition-colors ${isOpen ? 'text-slate-900' : textColor}`}>
              HOUSE PARADE <span className="font-light opacity-70">CORNER</span>
            </h1>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Properties', 'Agents', 'About'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className={`text-[11px] tracking-[0.2em] uppercase font-bold hover:opacity-50 transition-all ${textColor}`}
              >
                {item}
              </Link>
            ))}
            <Link 
              to="/contact"
              className={`px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-bold border transition-all ${isScrolled || !isHome ? 'border-slate-900 bg-slate-900 text-white' : 'border-white text-white hover:bg-white hover:text-slate-900'}`}
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Toggle - Ensure z-50 so it stays on top of the overlay */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`transition-colors duration-300 ${isOpen ? 'text-slate-900' : textColor}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center space-y-8">
          {['Home', 'Properties', 'Agents', 'About', 'Contact'].map((item, index) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className={`text-3xl font-serif text-slate-900 tracking-widest transition-all duration-500 delay-${index * 100} ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {item}
            </Link>
          ))}
          <div className="pt-10">
             <div className="h-px w-12 bg-slate-300 mx-auto mb-6" />
             <p className="text-[10px] tracking-[0.4em] text-slate-400 uppercase font-bold">Lagos • Abuja • London</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;