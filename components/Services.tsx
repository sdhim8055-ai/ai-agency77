export default function Services() {
  return (
    <section id="services" className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
      <div className="text-center mb-20">
        <h2 className="font-headline-lg-mobile md:text-[40px] leading-tight font-bold mb-6">Our Services</h2>
        <p className="font-subheading text-subheading md:text-[20px] text-on-surface-variant max-w-2xl mx-auto">Comprehensive AI solutions for the modern enterprise.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="glass-card rounded-2xl p-10 flex flex-col gap-4 group hover:border-primary/50 transition-all duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-2">robot_2</span>
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white">AI Agents</h3>
          <p className="text-on-surface-variant text-lg">Custom autonomous agents designed to handle your specific business operations 24/7 with zero downtime.</p>
        </div>

        <div className="glass-card rounded-2xl p-10 flex flex-col gap-4 group hover:border-primary/50 transition-all duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-2">smart_toy</span>
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white">AI Automation</h3>
          <p className="text-on-surface-variant text-lg">Streamline your workflows by integrating intelligent automation that learns and adapts to your processes.</p>
        </div>

        <div className="glass-card rounded-2xl p-10 flex flex-col gap-4 group hover:border-primary/50 transition-all duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-2">language</span>
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white">AI Website Development</h3>
          <p className="text-on-surface-variant text-lg">Next-generation web experiences powered by AI, delivering personalized content and dynamic interactions.</p>
        </div>

        <div className="glass-card rounded-2xl p-10 flex flex-col gap-4 group hover:border-primary/50 transition-all duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-2">architecture</span>
          <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white">Website Defining</h3>
          <p className="text-on-surface-variant text-lg">Architecting robust digital foundations and design systems that scale flawlessly across your ecosystem.</p>
        </div>

      </div>
    </section>
  );
}
