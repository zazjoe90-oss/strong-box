
import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const LocationSection: React.FC = () => {
  const [locationInfo, setLocationInfo] = useState<string>('');
  const [links, setLinks] = useState<{title: string, uri: string}[]>([]);

  useEffect(() => {
    async function fetchLocationData() {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-lite-latest",
          contents: "Provide the exact location and a brief description of Strongbox Qatar gym in Doha, specifically mentioning its address and nearby landmarks.",
          config: {
            tools: [{ googleMaps: {} }],
          },
        });
        
        setLocationInfo(response.text || '');
        const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        const mapsLinks = chunks
          .filter(chunk => chunk.maps)
          .map(chunk => ({ title: chunk.maps.title, uri: chunk.maps.uri }));
        setLinks(mapsLinks);
      } catch (e) {
        console.error("Failed to fetch location grounding", e);
        setLocationInfo("Find us in the heart of Doha, Qatar at The Pearl. Join us for world-class training in a premier facility.");
      }
    }
    fetchLocationData();
  }, []);

  return (
    <section id="location" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-red-600 font-heading font-bold uppercase tracking-widest mb-2">Find Us</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-black uppercase mb-8">The Pearl, Qatar</h3>
            <div className="prose prose-invert prose-red max-w-none mb-8">
              <p className="text-zinc-400 text-lg leading-relaxed">
                {locationInfo || 'Loading location details...'}
              </p>
            </div>
            {links.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {links.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.uri} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-zinc-900 border border-white/10 px-6 py-3 hover:border-red-600 transition-colors group"
                  >
                    <svg className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold uppercase text-xs tracking-widest">{link.title || 'Open in Maps'}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full h-[400px] bg-zinc-900 border border-white/10 overflow-hidden relative rounded-sm">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.151745233682!2d51.5511394!3d25.36625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c47777777777%3A0x7777777777777777!2sStrongbox%20Qatar!5e0!3m2!1sen!2sqa!4v1700000000000!5m2!1sen!2sqa" 
                className="w-full h-full grayscale contrast-125 opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
                title="Strongbox Qatar Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-zinc-950/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
