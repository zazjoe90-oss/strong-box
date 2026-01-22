
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with more contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <h2 className="text-red-600 font-heading font-bold uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-red-600"></span>
            Forge Your Legacy
          </h2>
          <h1 className="text-6xl md:text-9xl font-heading font-black uppercase leading-[0.9] mb-8">
            STRENGTH <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">DEFINED.</span>
          </h1>
          <p className="text-zinc-300 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed font-medium">
            Join Qatar's most dedicated community. We don't just provide equipment; we provide the blueprint for your absolute peak performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#join" 
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 font-heading font-bold text-2xl uppercase skew-x-[-8deg] transition-all group shadow-2xl shadow-red-600/30"
            >
              <span className="inline-block skew-x-[8deg]">Get Started</span>
            </a>
            <a 
              href="#classes" 
              className="backdrop-blur-sm border-2 border-white/30 hover:border-red-600 text-white px-12 py-5 font-heading font-bold text-2xl uppercase skew-x-[-8deg] transition-all group"
            >
              <span className="inline-block skew-x-[8deg]">Classes</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modern Overlay Pattern */}
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
