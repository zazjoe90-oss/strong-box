
import React from 'react';
import { BLOGS } from '../constants.tsx';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white text-black bg-grid-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-red-600 font-heading font-bold uppercase tracking-widest mb-2">Knowledge Base</h2>
            <h3 className="text-4xl md:text-6xl font-heading font-black uppercase text-black">Latest Insights</h3>
          </div>
          <a href="#" className="text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-red-600 pb-2 hover:bg-red-50 transition-colors">
            View All Articles
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOGS.map((post) => (
            <article key={post.id} className="group flex flex-col bg-white shadow-xl border border-zinc-100 overflow-hidden hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-[2px] w-8 bg-red-600"></span>
                  <span className="text-zinc-400 font-bold text-xs uppercase tracking-widest">{post.date}</span>
                </div>
                <h4 className="text-2xl font-heading font-bold uppercase mb-4 leading-none group-hover:text-red-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-zinc-600 text-sm mb-8 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <a href="#" className="flex items-center gap-3 text-black font-black text-xs uppercase tracking-widest group/btn border-t border-zinc-100 pt-6">
                  Read Article 
                  <span className="bg-red-600 text-white w-6 h-6 flex items-center justify-center rounded-full group-hover/btn:translate-x-2 transition-transform">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
