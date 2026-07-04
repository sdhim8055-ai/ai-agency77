"use client";

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('An error occurred.');
    }
  };

  return (
    <section id="contact" className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal-on-scroll">
      <div className="glass-card rounded-3xl p-10 md:p-20 relative overflow-hidden flex flex-col md:flex-row gap-16 group hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] hover:border-primary/30 transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 group-hover:opacity-100 opacity-50 transition-opacity duration-700"></div>
        <div className="flex-1 relative z-10">
          <h2 className="font-headline-xl text-[40px] mb-6 font-bold text-white group-hover:text-primary transition-colors duration-500">Reach Out / Apply</h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-md">Connect with our team or apply for our services. Let's discuss how Omnivexx can orchestrate your enterprise workflows.</p>
          <div className="space-y-8">
            <div>
              <h4 className="font-mono-data text-sm text-on-surface-variant uppercase tracking-wider mb-2">Founder</h4>
              <p className="text-xl font-subheading text-white mb-6">Dhimanth S Reddy</p>
              
              <h4 className="font-mono-data text-sm text-on-surface-variant uppercase tracking-wider mb-2">Email</h4>
              <a className="text-xl font-subheading text-primary hover:text-white transition-colors flex items-center gap-2 group/link" href="mailto:sdhim8055@gmail.com">
                sdhim8055@gmail.com <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform">arrow_outward</span>
              </a>
            </div>
            <div className="flex gap-12">
              <div>
                <h4 className="font-mono-data text-sm text-on-surface-variant uppercase tracking-wider mb-2">San Francisco</h4>
                <p className="text-on-surface">100 Market St<br/>CA 94105</p>
              </div>
              <div>
                <h4 className="font-mono-data text-sm text-on-surface-variant uppercase tracking-wider mb-2">London</h4>
                <p className="text-on-surface">1st Avenue<br/>EC1A 1BB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 relative z-10 bg-surface/50 p-8 rounded-2xl border border-white/5 group-hover:border-primary/20 transition-colors duration-500 hover:shadow-[0_0_20px_rgba(0,212,255,0.05)]">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 group/input">
              <label className="font-mono-data text-sm text-on-surface-variant group-focus-within/input:text-primary transition-colors">Name</label>
              <input name="name" required className="bg-surface/80 border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm hover:border-primary/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300" placeholder="Jane Doe" type="text"/>
            </div>
            <div className="flex flex-col gap-2 group/input">
              <label className="font-mono-data text-sm text-on-surface-variant group-focus-within/input:text-primary transition-colors">Email</label>
              <input name="email" required className="bg-surface/80 border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm hover:border-primary/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300" placeholder="sdhim8055@gmail.com" type="email"/>
            </div>
            <div className="flex flex-col gap-2 group/input">
              <label className="font-mono-data text-sm text-on-surface-variant group-focus-within/input:text-primary transition-colors">Service Interested In</label>
              <select name="service" required defaultValue="" className="bg-surface/80 border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm hover:border-primary/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300 appearance-none text-on-surface [&>option]:text-background">
                <option value="" disabled>Select a service</option>
                <option value="AI Agents">AI Agents</option>
                <option value="AI Automation">AI Automation</option>
                <option value="AI Website Development">AI Website Development</option>
                <option value="Website Defining">Website Defining</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 group/input">
              <label className="font-mono-data text-sm text-on-surface-variant group-focus-within/input:text-primary transition-colors">Message</label>
              <textarea name="message" required className="bg-surface/80 border border-white/10 rounded-xl px-5 py-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm hover:border-primary/50 focus:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-all duration-300 resize-none" placeholder="How can we help?" rows={4}></textarea>
            </div>
            <button type="submit" className="magnetic primary-gradient-btn text-white px-8 py-4 rounded-xl font-subheading text-subheading transition-all duration-300 glow-hover w-full font-semibold mt-2">
              <span className="magnetic-inner inline-block pointer-events-none">Send Message</span>
            </button>
            {status && <p className="text-center font-mono-data text-sm text-primary mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
