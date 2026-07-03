export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)] header-transition" id="site-header">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 max-w-container-max mx-auto header-transition" id="header-inner">
        <div className="flex items-center gap-2">
          <img alt="Omnivexx Logo" className="h-8 w-8 object-contain" src="/logo.png"/>
          <span className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold text-primary tracking-tighter">Omnivexx</span>
        </div>
        <nav className="hidden md:flex items-center gap-10 font-subheading text-subheading">
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#services">Services</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#features">Infrastructure</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
        </nav>
        <button className="magnetic primary-gradient-btn text-white px-6 py-2.5 rounded-lg font-subheading text-subheading transition-all duration-300 glow-hover hover:scale-105 active:scale-95">
          <span className="magnetic-inner inline-block pointer-events-none">Get Started</span>
        </button>
      </div>
    </header>
  );
}
