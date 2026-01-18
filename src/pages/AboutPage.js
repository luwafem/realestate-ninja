import React from 'react';
import { Link } from 'react-router-dom';
import { agents } from '../data/properties';
import { Award, ShieldCheck, Globe, Users, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const teamLeaders = agents.slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="mb-24 text-center">
          <span className="text-[10px] tracking-[0.5em] text-slate-400 uppercase font-bold mb-4 block">
            Established 2008
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8">
            The <span className="italic text-slate-800">Legacy</span> of Excellence
          </h1>
          <div className="h-px w-24 bg-slate-900 mx-auto mb-8" />
          <p className="text-slate-500 font-light text-xl max-w-2xl mx-auto leading-relaxed">
            Redefining the skyline of Nigerian luxury real estate through a decade of unmatched discretion and expertise.
          </p>
        </div>

        {/* Brand Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative aspect-[4/5] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800"
              alt="Our Heritage"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale"
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-all duration-700" />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-serif text-slate-900">A Visionary Beginning</h2>
            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>
                Founded in Lagos, Premium Properties was born from a singular mission: to provide a bridge between the world’s most discerning investors and Nigeria’s most significant architectural achievements.
              </p>
              <p>
                Under the guidance of Mr. Adebayo Adewale, we have evolved from a boutique Victoria Island agency into a nationally recognized powerhouse. We don't just facilitate transactions; we steward legacies.
              </p>
              <p className="italic font-serif text-slate-900 text-lg">
                "Luxury is not a price point—it is a level of service and a standard of living."
              </p>
            </div>
            <div className="pt-6">
               <button className="bg-slate-900 text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-slate-800 transition-all">
                 Download Our Manifesto
               </button>
            </div>
          </div>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-100 mb-32 border border-slate-100">
          {[
            {
              title: "Our Mission",
              icon: <Globe className="w-6 h-6" />,
              desc: "To provide global-standard real estate advisory with deep local intelligence."
            },
            {
              title: "The Standard",
              icon: <Award className="w-6 h-6" />,
              desc: "A commitment to precision, ensuring every contract is a testament to integrity."
            },
            {
              title: "Client Centricity",
              icon: <ShieldCheck className="w-6 h-6" />,
              desc: "Discretion is our hallmark. We protect our clients' privacy as fiercely as their investments."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 hover:bg-slate-50 transition-colors">
              <div className="text-slate-900 mb-6">{item.icon}</div>
              <h3 className="text-lg font-serif text-slate-900 mb-4">{item.title}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Milestone Statistics - Minimalist */}
        <div className="bg-slate-950 text-white p-16 md:p-24 mb-32 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Founded', value: '2008' },
              { label: 'Transactions', value: '₦50B+' },
              { label: 'Offices', value: '3 Major Cities' },
              { label: 'Satisfaction', value: '99%' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl font-serif">{stat.value}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership - Gallery Style */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-serif text-slate-900">The Advisory Council</h2>
              <p className="text-slate-400 font-light mt-2">Guided by decades of collective experience.</p>
            </div>
            <Link to="/agents" className="text-[10px] tracking-[0.3em] uppercase font-bold border-b border-slate-900 pb-1">
              View Full Team
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamLeaders.map(agent => (
              <div key={agent.id} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img 
                    src={agent.photo} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    alt={agent.name}
                  />
                </div>
                <h3 className="text-xl font-serif text-slate-900">{agent.name}</h3>
                <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-slate-400 mt-1">{agent.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services - Grid of Icons */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-slate-900">Specialized Services</h2>
            <div className="h-px w-12 bg-slate-900 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Residential Sales', 'Commercial Advisory', 'Investment Portfolios', 'Asset Management'].map((service, i) => (
              <div key={i} className="border border-slate-100 p-8 hover:border-slate-900 transition-colors cursor-default">
                <h4 className="font-serif text-lg text-slate-900 mb-2">{service}</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">Bespoke solutions tailored to your unique financial objectives.</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-24 bg-slate-50">
          <h2 className="text-3xl md:text-5xl font-serif text-slate-900 mb-8">Begin Your Journey</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/contact"
              className="bg-slate-900 text-white px-12 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-black transition-all"
            >
              Contact Us
            </Link>
            <Link 
              to="/properties"
              className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-bold text-slate-900 group"
            >
              Browse Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;