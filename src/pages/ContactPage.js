import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Column 1: Contact Concierge Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-[10px] tracking-[0.5em] text-slate-400 uppercase font-bold mb-4 block">
                Inquiries
              </span>
              <h1 className="text-5xl font-serif text-slate-900 mb-6 leading-tight">
                Let’s Discuss Your <br /><span className="italic text-slate-700">Next Acquisition</span>
              </h1>
              <p className="text-slate-500 font-light leading-relaxed max-w-sm">
                Our private advisors are available for discrete consultations regarding Nigeria's most exclusive listings.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="mt-1 p-3 bg-slate-50 rounded-full text-slate-900">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[10px] tracking-widest uppercase font-bold text-slate-400 mb-1">HQ Address</h3>
                  <p className="text-slate-900 font-light">Holborn house suite 106,plot 649, <br />Franca Afegbua cresent zone E<br />Apo Abuja, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1 p-3 bg-slate-50 rounded-full text-slate-900">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[10px] tracking-widest uppercase font-bold text-slate-400 mb-1">Direct Line</h3>
                  <p className="text-slate-900 font-light">+234 800 123 4567</p>
                  <p className="text-xs text-slate-400 mt-1 italic">Available 24/7 for Signature Clients</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="mt-1 p-3 bg-slate-50 rounded-full text-slate-900">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[10px] tracking-widest uppercase font-bold text-slate-400 mb-1">Digital Correspondence</h3>
                  <p className="text-slate-900 font-light">private@houseparadecorner.ng</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-[10px] tracking-widest uppercase font-bold text-slate-400 mb-6">Connect Digitally</h3>
              <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          {/* Column 2: The Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-8 md:p-12 rounded-sm relative">
              {submitted ? (
                <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center text-center p-12 z-10 animate-in fade-in duration-500">
                  <CheckCircle size={64} className="text-slate-900 mb-6 stroke-[1px]" />
                  <h2 className="text-2xl font-serif text-slate-900 mb-4">Request Received</h2>
                  <p className="text-slate-500 font-light max-w-xs">An advisor will review your inquiry and contact you within the next business hour.</p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative border-b border-slate-300 focus-within:border-slate-900 transition-colors py-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-900 font-light placeholder-slate-200"
                      placeholder="e.g. Aliko Dangote"
                    />
                  </div>
                  
                  <div className="relative border-b border-slate-300 focus-within:border-slate-900 transition-colors py-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">Email Portfolio</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-900 font-light placeholder-slate-200"
                      placeholder="name@executive.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative border-b border-slate-300 focus-within:border-slate-900 transition-colors py-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-900 font-light placeholder-slate-200"
                      placeholder="+234..."
                    />
                  </div>
                  
                  <div className="relative border-b border-slate-300 focus-within:border-slate-900 transition-colors py-2">
                    <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">Nature of Inquiry</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent outline-none text-slate-900 font-light appearance-none cursor-pointer"
                    >
                      <option value="">Select Service</option>
                      <option value="Private Acquisition">Private Acquisition</option>
                      <option value="Asset Disposal">Asset Disposal</option>
                      <option value="Commercial Portfolio">Commercial Portfolio</option>
                      <option value="Valuation Services">Valuation Services</option>
                    </select>
                  </div>
                </div>

                <div className="relative border-b border-slate-300 focus-within:border-slate-900 transition-colors py-2">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400 block mb-1">Detailed Brief</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-transparent outline-none text-slate-900 font-light placeholder-slate-200 resize-none"
                    placeholder="Briefly describe your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 text-white py-5 text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-black transition-all flex items-center justify-center gap-3 group"
                >
                  Send Inquiry <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest">
                  Secure & Confidential Communication
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* Global Presence Map Placeholder */}
        <div className="mt-32 h-[400px] w-full bg-slate-100 grayscale border border-slate-200 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 pointer-events-none">
             {/* Imagine a stylized vector map of Nigeria here */}
             <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
           </div>
           <div className="z-10 text-center">
             <h3 className="text-xl font-serif text-slate-400 italic">Global Presence. Local Expertise.</h3>
             <div className="flex gap-8 mt-4 text-[10px] tracking-widest uppercase font-bold text-slate-400">
               <span>Lagos</span>
               <span>Abuja</span>
               <span>London</span>
               <span>Dubai</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;