export default function Hero() {
  return (
    <section className="relative px-margin-mobile md:px-margin-desktop py-32 md:py-48 max-w-container-max mx-auto flex flex-col items-center justify-center text-center reveal-on-scroll is-visible">
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px]"></div>
      </div>
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-label-sm text-label-sm mb-10 tracking-widest uppercase hover:bg-primary/10 transition-colors duration-300 cursor-default group">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.8)] group-hover:shadow-[0_0_20px_rgba(0,212,255,1)] group-hover:bg-white transition-all duration-300"></span>
        SYSTEMS ONLINE
      </div>
      <h1 className="font-headline-xl text-[56px] leading-[1.1] md:text-[72px] mb-8 max-w-5xl text-transparent bg-clip-text bg-gradient-to-br from-white via-on-surface to-primary/80 font-bold tracking-tight">
        Scale with Autonomous Precision
      </h1>
      <p className="font-subheading text-subheading md:text-[20px] text-on-surface-variant max-w-3xl mb-12 leading-relaxed">
        Orchestrate intelligent workflows and deploy custom AI agents that execute complex tasks seamlessly. Turn your data into decisive action.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button className="magnetic primary-gradient-btn text-white px-10 py-4 rounded-xl font-subheading text-subheading transition-all duration-300 glow-hover hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
          <span className="magnetic-inner inline-flex items-center gap-3 pointer-events-none">
            Get Started
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>arrow_forward</span>
          </span>
        </button>
        <button className="magnetic glass-card text-on-surface hover:text-primary border border-white/10 hover:border-primary/50 px-10 py-4 rounded-xl font-subheading text-subheading transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
          <span className="magnetic-inner inline-flex items-center gap-3 pointer-events-none">
            <span className="material-symbols-outlined">play_circle</span>
            Watch Demo
          </span>
        </button>
      </div>
    </section>
  );
}
