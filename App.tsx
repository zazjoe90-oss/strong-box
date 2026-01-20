
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Memberships from './components/Memberships';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        
        {/* About / Quick Stats */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="text-4xl md:text-6xl font-heading font-black text-red-600 mb-2">50+</h4>
              <p className="text-zinc-500 uppercase font-bold tracking-widest text-xs">Weekly Classes</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl md:text-6xl font-heading font-black text-red-600 mb-2">10+</h4>
              <p className="text-zinc-500 uppercase font-bold tracking-widest text-xs">Expert Trainers</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl md:text-6xl font-heading font-black text-red-600 mb-2">1.5k</h4>
              <p className="text-zinc-500 uppercase font-bold tracking-widest text-xs">Active Members</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl md:text-6xl font-heading font-black text-red-600 mb-2">12k</h4>
              <p className="text-zinc-500 uppercase font-bold tracking-widest text-xs">Sq. Ft Facility</p>
            </div>
          </div>
        </section>

        <Schedule />
        <Trainers />
        <Testimonials />
        <Memberships />
        
        {/* Join CTA */}
        <section id="join" className="py-24 bg-zinc-950 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase mb-8 leading-none">
              READY TO BECOME <br /><span className="text-red-600">UNSTOPPABLE?</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10">
              Claim your 3-day free pass and experience the Strong Box difference. No commitment, just pure performance.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-900 border border-white/10 px-6 py-4 flex-1 focus:outline-none focus:border-red-600 text-white"
                required
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-heading font-bold uppercase tracking-widest transition-all shadow-xl shadow-red-600/20">
                Claim Pass
              </button>
            </form>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
            <div className="text-[20rem] font-heading font-black whitespace-nowrap -translate-x-1/4">STRONG BOX CORE</div>
          </div>
        </section>

        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;
