export default function Footer() {
  return (
    <footer className="bg-surface/90 backdrop-blur-lg w-full py-20 border-t border-white/5 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <div className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
            <img alt="Omnivexx Logo" className="h-8 w-8 object-contain" src="/logo.png"/> Omnivexx
          </div>
          <p className="text-on-surface-variant text-sm mt-8 opacity-70">© 2024 Omnivexx. Autonomous Precision.</p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-mono-data text-sm text-white mb-2 uppercase tracking-widest opacity-50">Platform</span>
          <a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-300" href="#">Agents</a>
          <a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-300" href="#">Workflows</a>
          <a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-300" href="#">Integrations</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-mono-data text-sm text-white mb-2 uppercase tracking-widest opacity-50">Company</span>
          <a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-300" href="#">Contact</a>
          <a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-300" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-300" href="#">Terms of Service</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-mono-data text-sm text-white mb-2 uppercase tracking-widest opacity-50">Connect</span>
          <a className="text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-[18px]">mail</span> Newsletter
          </a>
        </div>
      </div>
    </footer>
  );
}
