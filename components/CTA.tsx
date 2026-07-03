export default function CTA() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
      <div className="glass-card rounded-3xl p-12 md:p-24 text-center relative overflow-hidden group hover:shadow-[0_0_50px_rgba(0,212,255,0.2)] hover:border-primary/50 transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/5 via-primary/10 to-primary-container/5 group-hover:opacity-70 opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent group-hover:via-white transition-colors duration-500"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="material-symbols-outlined text-[56px] text-primary mb-8 drop-shadow-[0_0_15px_rgba(0,212,255,0.5)] group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.8)] transition-all duration-500" style={{fontVariationSettings: "'FILL' 1"}}>power</span>
          <h2 className="font-headline-xl text-[48px] md:text-[56px] mb-6 font-bold text-white group-hover:text-primary transition-colors duration-500">Automate Your Future</h2>
          <p className="font-subheading text-subheading md:text-[20px] text-on-surface-variant mb-12">
            Join the next generation of enterprises operating with autonomous precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-lg group/input-wrapper">
            <input className="bg-surface/80 border border-white/10 rounded-xl px-6 py-4 font-mono-data text-mono-data text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-full shadow-[0_0_0_0_rgba(0,212,255,0)] hover:border-primary/50 focus:shadow-[0_0_25px_rgba(0,212,255,0.3)] transition-all duration-300 backdrop-blur-sm" placeholder="Enter work email" type="email"/>
            <button className="magnetic primary-gradient-btn text-white px-10 py-4 rounded-xl font-subheading text-subheading transition-all duration-300 glow-hover whitespace-nowrap hover:scale-105 active:scale-95">
              <span className="magnetic-inner inline-block pointer-events-none">Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
