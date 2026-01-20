
import React, { useState } from 'react';
import { SCHEDULE } from '../constants';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const days = Object.keys(SCHEDULE);

  return (
    <section id="classes" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-heading font-bold uppercase tracking-widest mb-2">Class Schedule</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-black uppercase">Weekly Training</h3>
        </div>

        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-8 py-3 font-heading font-bold uppercase tracking-tighter transition-all ${
                activeDay === day 
                  ? 'bg-red-600 text-white' 
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {SCHEDULE[activeDay].map((session, idx) => (
            <div 
              key={idx}
              className="group bg-zinc-900/50 border-l-4 border-red-600/30 hover:border-red-600 hover:bg-zinc-900 p-6 flex flex-col md:flex-row md:items-center justify-between transition-all"
            >
              <div className="flex items-center gap-6 mb-4 md:mb-0">
                <span className="text-red-600 font-bold text-xl whitespace-nowrap">{session.time}</span>
                <div>
                  <h4 className="text-xl font-bold uppercase group-hover:text-red-500 transition-colors">{session.className}</h4>
                  <p className="text-zinc-400 text-sm">with {session.trainer}</p>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-6">
                <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs uppercase font-bold tracking-widest rounded">
                  {session.category}
                </span>
                <button className="text-sm font-bold uppercase text-red-600 hover:text-white transition-colors">
                  Book Slot
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
