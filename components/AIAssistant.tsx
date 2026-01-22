
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Welcome to the Box! I'm your Strong Box Performance Coach. Ready to hit a new PR? Ask me about WODs, nutrition, or class schedules!" }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are an elite fitness coach at 'Strong Box' gym in Qatar. Your persona is high-energy, knowledgeable, and direct. You specialize in CrossFit, Olympic lifting, and functional fitness. Use terminology like 'WOD', 'Metcon', 'AMRAP', and 'The Box'. Always prioritize safety and performance. If someone asks for location or joining details, mention they can find us at The Pearl, Doha. Keep responses under 100 words.",
        },
      });

      const botText = response.text || "Lost my breath for a second. Let's try that set again - what was your question?";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Technical difficulties - looks like a equipment failure. Try back in a minute!" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-zinc-900 border border-red-600/30 w-[350px] sm:w-[400px] h-[500px] rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-red-600 p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center font-heading font-bold text-red-600 text-sm">SB</div>
              <span className="font-heading font-bold uppercase tracking-wider text-sm">Coach Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/40 bg-grid-pattern">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-sm text-sm ${
                  m.role === 'user' 
                    ? 'bg-red-600 text-white font-bold skew-x-[-2deg]' 
                    : 'bg-zinc-800 text-zinc-200 border border-white/5'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-4 rounded-sm flex gap-1 border border-white/5">
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-zinc-900 border-t border-white/10">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask your coach..."
                className="flex-1 bg-black border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-red-600 rounded-sm"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-red-600 px-5 py-3 rounded-sm hover:bg-red-700 transition-colors disabled:opacity-50 shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-red-600 text-white rounded-full shadow-2xl shadow-red-600/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
        >
          <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20"></div>
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
