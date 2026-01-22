
import React from 'react';
import { PLANS } from '../constants.tsx';

const Memberships: React.FC = () => {
  return (
    <section id="membership" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-red-600 font-heading font-bold uppercase tracking-widest mb-2">Membership Plans</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black uppercase">Choose Your Level</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col p-8 bg-zinc-900/40 border border-white/5 group hover:border-red-600/50 transition-all duration-500 ${
                plan.isPopular ? 'scale-105 shadow-2xl shadow-red-600/10 border-red-600/40 z-10' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 uppercase tracking-widest -translate-y-1/2 translate-x-4 skew-x-[-12deg]">
                  Most Popular
                </div>
              )}
              
              <h4 className="text-2xl font-heading font-bold uppercase mb-4 text-zinc-100">{plan.name}</h4>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl md:text-5xl font-heading font-black text-white">{plan.price}</span>
                <span className="text-zinc-500 ml-2">/ month</span>
              </div>
              
              <ul className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 font-heading font-bold uppercase tracking-widest transition-all ${
                plan.isPopular 
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20' 
                  : 'bg-white hover:bg-zinc-200 text-black'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;
