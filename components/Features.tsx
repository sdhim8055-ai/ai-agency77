export default function Features() {
  return (
    <section id="features" className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
      <div className="text-center mb-20">
        <h2 className="font-headline-lg-mobile md:text-[40px] leading-tight font-bold mb-6">Core Infrastructure</h2>
        <p className="font-subheading text-subheading md:text-[20px] text-on-surface-variant max-w-2xl mx-auto">The building blocks for your autonomous enterprise.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[340px]">
        <div className="md:col-span-8 glass-card rounded-2xl p-10 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] hover:border-primary/50">
          <div className="absolute -top-10 -right-10 p-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
            <span className="material-symbols-outlined text-[200px] text-primary">account_tree</span>
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-surface-container border border-white/10 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] group-hover:bg-primary/10 transition-all duration-500">
              <span className="material-symbols-outlined text-2xl">settings_suggest</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-white group-hover:text-primary transition-colors duration-300">Process Automation</h3>
            <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">Streamline operations with deterministic workflows. Connect disparate systems and eliminate manual oversight with guaranteed precision.</p>
          </div>
          <div className="font-mono-data text-mono-data text-primary mt-auto relative z-10 group-hover:tracking-wider transition-all duration-300">
            <span className="opacity-50">#</span> SYSTEM_EFFICIENCY_↑400%
          </div>
        </div>

        <div className="md:col-span-4 glass-card rounded-2xl p-10 relative overflow-hidden group transition-all duration-500 flex flex-col justify-between hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] hover:border-primary/50">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-surface-container border border-white/10 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] group-hover:bg-primary/10 transition-all duration-500">
              <span className="material-symbols-outlined text-2xl">robot_2</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-white group-hover:text-primary transition-colors duration-300">Custom AI Agents</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed">Deploy specialized agents trained on your proprietary data. They analyze, decide, and act autonomously within defined parameters.</p>
          </div>
          <div className="mt-10 p-5 bg-surface-container-highest/50 rounded-xl border border-white/5 backdrop-blur-md relative z-10 group-hover:bg-surface-container-highest transition-colors duration-300 cursor-pointer hover:border-primary/30">
            <div className="flex justify-between items-center mb-3 font-mono-data text-[13px]">
              <span className="text-on-surface/80">Agent_01</span>
              <span className="text-primary flex items-center gap-2 tracking-wide group-hover:text-white transition-colors duration-300"><span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_5px_rgba(0,212,255,1)] group-hover:shadow-[0_0_15px_rgba(255,255,255,1)] group-hover:bg-white transition-all duration-300"></span> ACTIVE</span>
            </div>
            <div className="h-1.5 bg-black/50 w-full rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4 shadow-[0_0_10px_rgba(0,212,255,0.5)] group-hover:shadow-[0_0_15px_rgba(0,212,255,0.8)] group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        <div className="md:col-span-12 glass-card rounded-2xl p-10 relative overflow-hidden group transition-all duration-500 flex flex-col md:flex-row gap-12 items-center hover:shadow-[0_0_40px_rgba(0,212,255,0.2)] hover:border-primary/50">
          <div className="flex-1 relative z-10">
            <div className="w-14 h-14 rounded-xl bg-surface-container border border-white/10 flex items-center justify-center mb-6 text-primary shadow-[0_0_15px_rgba(0,212,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] group-hover:bg-primary/10 transition-all duration-500">
              <span className="material-symbols-outlined text-2xl">monitoring</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-4 text-white group-hover:text-primary transition-colors duration-300">Data Intelligence</h3>
            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">Transform raw data into actionable insights in real-time. Our orchestration engine identifies patterns human analysts miss.</p>
          </div>
          <div className="flex-1 w-full h-40 flex items-end gap-3 px-6 relative z-10">
            <div className="w-1/6 bg-gradient-to-t from-primary/30 to-transparent h-[30%] rounded-t-md transition-all duration-500 group-hover:h-[45%] group-hover:from-primary/50"></div>
            <div className="w-1/6 bg-gradient-to-t from-primary/40 to-transparent h-[50%] rounded-t-md transition-all duration-500 group-hover:h-[65%] group-hover:from-primary/60"></div>
            <div className="w-1/6 bg-gradient-to-t from-primary/50 to-transparent h-[40%] rounded-t-md transition-all duration-500 group-hover:h-[55%] group-hover:from-primary/70"></div>
            <div className="w-1/6 bg-gradient-to-t from-primary/70 to-transparent h-[70%] rounded-t-md transition-all duration-500 group-hover:h-[85%] group-hover:from-primary/80"></div>
            <div className="w-1/6 bg-gradient-to-t from-primary/90 to-transparent h-[90%] rounded-t-md relative transition-all duration-500 group-hover:h-[100%] group-hover:from-primary">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(0,212,255,1)] group-hover:shadow-[0_0_25px_rgba(0,212,255,1)] group-hover:bg-white transition-all duration-500"></div>
            </div>
            <div className="w-1/6 bg-gradient-to-t from-primary to-transparent h-[100%] rounded-t-md group-hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
