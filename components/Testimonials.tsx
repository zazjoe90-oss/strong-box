
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Daniel Ahmed",
      role: "Member since 2021",
      content: "The environment here is unmatched. It's not just a gym, it's a family that pushes you to be your best every single day. The CrossFit coaches are top-tier.",
      img: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "Sofia Rodriguez",
      role: "Elite Athlete",
      content: "Strong Box helped me recover from an injury and come back stronger than ever. Their focus on mobility and proper form changed my approach to fitness.",
      img: "https://picsum.photos/seed/user2/100/100"
    }
  ];

  return (
    <section className="py-24 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-white font-heading font-black text-6xl md:text-8xl uppercase leading-none mb-8 tracking-tighter">
              BEYOND <br />EXPECTATION
            </h2>
            <p className="text-red-100 text-xl max-w-md leading-relaxed">
              Don't just take our word for it. Hear from the community that makes Strong Box the elite facility it is today.
            </p>
          </div>
          
          <div className="lg:w-1/2 flex flex-col gap-6 w-full">
            {reviews.map((r, i) => (
              <div key={i} className="bg-black p-10 rounded-sm relative shadow-2xl">
                <div className="absolute top-0 right-10 -translate-y-1/2 w-16 h-16 bg-red-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V10H14.017V5H19.017C20.1216 5 21.017 5.89543 21.017 7V16C21.017 18.7614 18.7784 21 16.017 21H14.017ZM3.01709 21L3.01709 18C3.01709 16.8954 3.91252 16 5.01709 16H8.01709V10H3.01709V5H8.01709C9.12166 5 10.0171 5.89543 10.0171 7V16C10.0171 18.7614 7.77852 21 5.01709 21H3.01709Z"/></svg>
                </div>
                <p className="text-zinc-300 text-lg italic mb-8">"{r.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full border-2 border-red-600" />
                  <div>
                    <h4 className="font-bold text-white uppercase">{r.name}</h4>
                    <p className="text-red-600 text-xs font-bold uppercase tracking-widest">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
