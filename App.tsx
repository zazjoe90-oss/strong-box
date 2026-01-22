
import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import Hero from './components/Hero.tsx';
import Schedule from './components/Schedule.tsx';
import Memberships from './components/Memberships.tsx';
import Trainers from './components/Trainers.tsx';
import Testimonials from './components/Testimonials.tsx';
import Blog from './components/Blog.tsx';
import LocationSection from './components/LocationSection.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-white">
      <Header />
      
      <main className="relative">
        <Hero />
        
        {/* Dynamic Stats Section */}
        <section className="py-24 bg-zinc-900 border-y border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            <div className="text-center group">
              <span className="block text-zinc-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">Frequency</span>
              <h4 className="text-5xl md:text-7xl font-heading font-black text-red-600 group-hover:scale-110 transition-transform duration-300 tabular-nums text-glow-red">50+</h4>
              <p className="text-zinc-400 uppercase font-bold tracking-widest text-[10px] mt-2">Weekly Sessions</p>
            </div>
            <div className="text-center group">
              <span className="block text-zinc-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">Coaching</span>
              <h4 className="text-5xl md:text-7xl font-heading font-black text-red-600 group-hover:scale-110 transition-transform duration-300 tabular-nums text-glow-red">12</h4>
              <p className="text-zinc-400 uppercase font-bold tracking-widest text-[10px] mt-2">Elite Mentors</p>
            </div>
            <div className="text-center group">
              <span className="block text-zinc-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">Community</span>
              <h4 className="text-5xl md:text-7xl font-heading font-black text-red-600 group-hover:scale-110 transition-transform duration-300 tabular-nums text-glow-red">1.5k</h4>
              <p className="text-zinc-400 uppercase font-bold tracking-widest text-[10px] mt-2">Active Athletes</p>
            </div>
            <div className="text-center group">
              <span className="block text-zinc-500 font-bold text-xs uppercase tracking-[0.3em] mb-4">Facility</span>
              <h4 className="text-5xl md:text-7xl font-heading font-black text-red-600 group-hover:scale-110 transition-transform duration-300 tabular-nums text-glow-red">12k</h4>
              <p className="text-zinc-400 uppercase font-bold tracking-widest text-[10px] mt-2">Sq. Ft Training Space</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        </section>

        <Schedule />
        
        {/* Brand Marquee Transition */}
        <section className="bg-black py-20 flex justify-center overflow-hidden border-b border-white/5">
           <div className="whitespace-nowrap flex gap-10 animate-marquee">
              {[1, 2, 3].map(i => (
                <span key={i} className="text-8xl md:text-[12rem] font-heading font-black text-white/5 select-none uppercase tracking-tighter">
                  No Excuses • Pure Performance • Strong Box •
                </span>
              ))}
           </div>
        </section>

        <Trainers />
        <Testimonials />
        <Memberships />
        
        {/* Map and Location Grounding */}
        <LocationSection />

        {/* Join CTA - High Contrast Red Section */}
        <section id="join" className="py-32 bg-red-600 relative overflow-hidden group">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-heading font-black uppercase mb-8 leading-[0.85] text-white">
              STOP WISHING. <br /><span className="text-black">START WINNING.</span>
            </h2>
            <p className="text-red-100 text-xl max-w-2xl mx-auto mb-12 font-medium">
              Your first 3 days are on us. Walk in, sweat hard, and discover why Strong Box is the number one choice for performance in Qatar.
            </p>
            <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white border-2 border-transparent px-8 py-5 flex-1 focus:outline-none focus:border-black text-black text-lg font-semibold rounded-sm transition-all shadow-xl"
                required
              />
              <button className="bg-black hover:bg-zinc-900 text-white px-10 py-5 font-heading font-bold uppercase text-xl tracking-widest transition-all shadow-2xl active:scale-95">
                Join The Box
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-full bg-black/5 skew-x-[-20deg] -translate-x-1/2"></div>
        </section>

        <Blog />
      </main>

      <Footer />
      <AIAssistant />
    </div>
  );
}
