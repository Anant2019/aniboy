import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-100 uppercase tracking-widest text-sm font-bold">
        <div className="text-2xl font-black italic">ani boy.</div>
        <div className="hidden md:flex gap-8">
          <a href="#" className="hover:line-through">New Drops</a>
          <a href="#" className="hover:line-through">Office Flow</a>
          <a href="#" className="hover:line-through">After Hours</a>
        </div>
        <div className="flex gap-4">
          <span>Cart (0)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center bg-gray-50 overflow-hidden">
        <div className="z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-black uppercase leading-none">
            Not Your <br /> 
            <span className="text-transparent stroke-text">Average Boy</span>
          </h1>
          <p className="mt-4 text-gray-500 font-medium tracking-tight">From Boardrooms to Bar-hopping. The 9-to-9 collection is here.</p>
          <button className="mt-8 px-10 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all uppercase text-xs tracking-widest">
            Shop the Drop
          </button>
        </div>
        {/* Decorative background text for "Gen-Z" feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-black text-gray-100 -z-0 select-none">
          2026
        </div>
      </header>

      {/* Featured Categories */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        <div className="h-[600px] bg-slate-200 flex items-end p-8 group cursor-pointer relative overflow-hidden">
          <div className="z-10">
            <h2 className="text-4xl font-bold text-white">THE CORPORATE REBEL</h2>
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity">Oversized blazers & tailored cargos.</p>
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
        </div>
        <div className="h-[600px] bg-zinc-300 flex items-end p-8 group cursor-pointer relative overflow-hidden">
          <div className="z-10 text-right w-full">
            <h2 className="text-4xl font-bold text-white uppercase">Weekend Protocol</h2>
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-right">Breathable knits for the city wanderer.</p>
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all"></div>
        </div>
      </section>

      {/* Social Proof / Investor Bait */}
      <section className="py-20 text-center border-y border-gray-100">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-4">As Seen on the Streets</h3>
        <div className="flex justify-center gap-12 grayscale opacity-50 hover:grayscale-0 transition-all">
          <span className="font-black text-xl italic">VOGUE</span>
          <span className="font-black text-xl italic">HYPEBEAST</span>
          <span className="font-black text-xl italic">GQ</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-12 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4 uppercase italic">ani boy.</h4>
            <p className="text-gray-400 text-sm">Redefining professional wear for the digital nomad generation.</p>
          </div>
          <div className="flex flex-col gap-2 text-sm uppercase font-semibold">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Ethics</a>
          </div>
          <div>
            <input type="email" placeholder="JOIN THE LIST" className="bg-transparent border-b border-white w-full py-2 outline-none text-xs" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
