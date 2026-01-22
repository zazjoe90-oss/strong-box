
import React, { useState } from 'react';
import { SCHEDULE } from '../constants.tsx';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const days = Object.keys(SCHEDULE);

  return (
    <section id="classes" className="py-24 bg-zinc-950 bg-grid-pattern relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-heading font-bold uppercase tracking-widest mb-2">Class Schedule</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black uppercase text-white">Find Your Time</h3>
        </div>

        <div className="flex justify-center mb-12 gap-3 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-10 py-4 font-heading font-bold uppercase tracking-widest transition-all skew-x-[-6deg] ${
                activeDay === day 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 scale-105' 
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-white/5'
              }`}
            >
              <span className="inline-block skew-x-[6deg]">{day}</span>
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto grid gap-4">
          {SCHEDULE[activeDay].map((session, idx) => (
            <div 
              key={idx}
              className="group bg-zinc-900/80 backdrop-blur-md border border-white/5 hover:border-red-600 p-6 flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 rounded-sm"
            >
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="text-red-600 font-heading font-bold text-3xl tabular-nums">{session.time.split(' ')[0]} <span className="text-xs uppercase align-middle text-zinc-500">{session.time.split(' ')[1]}</span></span>
                <div>
                  <h4 className="text-2xl font-heading font-bold uppercase tracking-tight group-hover:text-red-500 transition-colors text-white">{session.className}</h4>
                  <p className="text-zinc-500 font-medium">with <span className="text-zinc-300">{session.trainer}</span></p>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-10">
                <span className="px-4 py-1 bg-black/50 border border-white/10 text-red-500 text-xs uppercase font-bold tracking-widest rounded-full">
                  {session.category}
                </span>
                <button className="bg-white text-black hover:bg-red-600 hover:text-white px-8 py-3 font-heading font-bold uppercase text-sm tracking-widest transition-all rounded-sm">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
