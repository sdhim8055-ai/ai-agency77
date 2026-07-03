export default function SocialProof() {
  return (
    <section className="border-y border-white/5 bg-surface-container-low/30 py-20 reveal-on-scroll">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <p className="font-mono-data text-mono-data text-on-surface-variant/60 mb-10 uppercase tracking-[0.2em]">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-3 font-headline-lg-mobile text-[22px] text-on-surface hover:text-primary transition-colors duration-300 cursor-pointer"><span className="material-symbols-outlined text-3xl">hexagon</span> Acorn Corp</div>
          <div className="flex items-center gap-3 font-headline-lg-mobile text-[22px] text-on-surface hover:text-primary transition-colors duration-300 cursor-pointer"><span className="material-symbols-outlined text-3xl">change_history</span> Zenith</div>
          <div className="flex items-center gap-3 font-headline-lg-mobile text-[22px] text-on-surface hover:text-primary transition-colors duration-300 cursor-pointer"><span className="material-symbols-outlined text-3xl">all_inclusive</span> Nexus Systems</div>
          <div className="flex items-center gap-3 font-headline-lg-mobile text-[22px] text-on-surface hover:text-primary transition-colors duration-300 cursor-pointer"><span className="material-symbols-outlined text-3xl">webhook</span> OmniData</div>
        </div>
      </div>
    </section>
  );
}
