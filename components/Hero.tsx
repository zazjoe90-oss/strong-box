
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/gymhero/1920/1080" 
          alt="Gym background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <h2 className="text-red-600 font-heading font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
            <span className="w-12 h-px bg-red-600"></span>
            Elevate Your Performance
          </h2>
          <h1 className="text-5xl md:text-8xl font-heading font-black uppercase leading-none mb-8">
            PUSH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">LIMITS</span> FURTHER
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Experience the ultimate strength and conditioning community in Qatar. 
            From CrossFit to specialized weightlifting, we provide the environment 
            and expertise to forge your best self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#join" 
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-heading font-bold text-xl uppercase skew-x-[-6deg] transition-all group"
            >
              <span className="inline-block skew-x-[6deg]">Start Training Now</span>
            </a>
            <a 
              href="#classes" 
              className="border border-white/20 hover:border-red-600 text-white px-10 py-4 font-heading font-bold text-xl uppercase skew-x-[-6deg] transition-all"
            >
              <span className="inline-block skew-x-[6deg]">View Schedule</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
        <span className="text-[12rem] font-heading font-black text-white/10 select-none">STRONG</span>
      </div>
    </section>
  );
};

export default Hero;
