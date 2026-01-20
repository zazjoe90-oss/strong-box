
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center skew-x-[-12deg]">
                <span className="font-heading font-bold text-white text-xl skew-x-[12deg]">SB</span>
              </div>
              <span className="font-heading text-3xl font-bold tracking-tighter uppercase">
                Strong <span className="text-red-600">Box</span>
              </span>
            </a>
            <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
              Forge your body and mind in Qatar's premier strength and conditioning facility. Join the community of performance-driven individuals today.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 bg-zinc-900 hover:bg-red-600 flex items-center justify-center transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-zinc-400 mask-center"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4 text-zinc-500">
              <li><a href="#classes" className="hover:text-red-600 transition-colors">Class Schedule</a></li>
              <li><a href="#trainers" className="hover:text-red-600 transition-colors">Our Trainers</a></li>
              <li><a href="#membership" className="hover:text-red-600 transition-colors">Memberships</a></li>
              <li><a href="#blog" className="hover:text-red-600 transition-colors">Fitness Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold uppercase tracking-widest mb-8 text-white">Contact Us</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Doha, Qatar <br />The Pearl, Porto Arabia Drive</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+974 4455 6677</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>info@strongbox.qa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-xs text-zinc-600 uppercase tracking-widest font-bold">
          <p>© 2023 Strong Box Gym. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-600">Privacy Policy</a>
            <a href="#" className="hover:text-red-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
