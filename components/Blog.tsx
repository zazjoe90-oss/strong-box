
import React from 'react';
import { BLOGS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-red-600 font-heading font-bold uppercase tracking-widest mb-2">Knowledge Base</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-black uppercase">Recent Fitness Tips</h3>
          </div>
          <a href="#" className="hidden md:block text-sm font-bold uppercase tracking-widest border-b-2 border-red-600 pb-1 hover:text-red-600 transition-colors">
            View All Posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOGS.map((post) => (
            <article key={post.id} className="group bg-zinc-900 overflow-hidden flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-red-600 font-bold text-xs uppercase tracking-[0.2em] mb-3">{post.date}</span>
                <h4 className="text-xl font-heading font-bold uppercase mb-4 leading-tight group-hover:text-red-500 transition-colors">
                  {post.title}
                </h4>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <a href="#" className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/btn">
                  Read More 
                  <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
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
