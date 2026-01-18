import React from 'react';
import { agents } from '../data/properties';
import { Phone, Mail, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

const AgentsPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-[10px] tracking-[0.4em] text-slate-400 uppercase font-bold mb-4 block">
            The Advisory
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-6">
            Our <span className="italic">Partners</span>
          </h1>
          <div className="h-px w-24 bg-slate-900 mb-8" />
          <p className="max-w-xl text-slate-500 font-light leading-relaxed">
            A curated team of specialists dedicated to the acquisition and disposal of Nigeria's most significant residential assets.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {agents.map(agent => (
            <div key={agent.id} className="group cursor-pointer">
              {/* Image Container with Luxury Filter */}
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-slate-100">
                <img 
                  src={agent.photo} 
                  alt={agent.name}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-500" />
                
                {/* Social Overlay */}
                <div className="absolute bottom-6 right-6 flex flex-col gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-white p-3 rounded-full shadow-xl hover:bg-slate-900 hover:text-white transition-colors">
                    <Linkedin size={18} strokeWidth={1.5} />
                  </button>
                  <button className="bg-white p-3 rounded-full shadow-xl hover:bg-slate-900 hover:text-white transition-colors">
                    <Globe size={18} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              
              {/* Agent Content */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif text-slate-900 mb-1">{agent.name}</h3>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400">{agent.title}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-900">{agent.propertiesSold}+</p>
                    <p className="text-[10px] tracking-widest text-slate-400 uppercase">Transactions</p>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-100" />

                <div className="grid grid-cols-1 gap-2 text-sm text-slate-600 font-light">
                  <div className="flex items-center gap-3">
                    <Phone size={14} className="text-slate-300" />
                    {agent.phone}
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={14} className="text-slate-300" />
                    {agent.email}
                  </div>
                </div>

                <button className="w-full mt-4 flex items-center justify-center gap-2 border border-slate-900 py-4 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-slate-900 hover:text-white transition-all">
                  Private Consultation <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Career Section - Refined Editorial Style */}
        <div className="mt-32 border-t border-slate-100 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8 leading-tight">
                Are you among the <br /><span className="italic">elite?</span>
              </h2>
              <p className="text-slate-500 font-light leading-relaxed mb-8">
                We are always seeking sophisticated advisors who understand the nuances of the luxury market. Join our global network.
              </p>
              <button className="text-[10px] tracking-[0.3em] uppercase font-bold border-b-2 border-slate-900 pb-2 hover:opacity-50 transition-opacity">
                Explore Careers
              </button>
            </div>
            <div className="relative h-64 lg:h-96 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
                alt="Office Space" 
                className="w-full h-full object-cover grayscale" 
              />
              <div className="absolute inset-0 bg-slate-900/20" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AgentsPage;