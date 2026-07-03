"use client";

import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Features from '../components/Features';
import Services from '../components/Services';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Scroll Reveal
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
        observer.observe(element);
    });

    // Header Scroll Effect
    const headerInner = document.getElementById('header-inner');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            headerInner?.classList.add('header-scrolled');
        } else {
            headerInner?.classList.remove('header-scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);

    // Magnetic Hover Effect
    const magneticElements = document.querySelectorAll('.magnetic');
    const handleMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const elem = mouseEvent.currentTarget as HTMLElement;
        const inner = elem.querySelector('.magnetic-inner') as HTMLElement;
        
        const rect = elem.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        
        elem.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        if(inner) {
            inner.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        }
    };

    const handleMouseLeave = (e: Event) => {
        const elem = e.currentTarget as HTMLElement;
        const inner = elem.querySelector('.magnetic-inner') as HTMLElement;
        elem.style.transform = 'translate(0px, 0px)';
        if(inner) {
            inner.style.transform = 'translate(0px, 0px)';
        }
    };

    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', handleMouseMove);
        elem.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
        window.removeEventListener('scroll', handleScroll);
        magneticElements.forEach(elem => {
            elem.removeEventListener('mousemove', handleMouseMove);
            elem.removeEventListener('mouseleave', handleMouseLeave);
        });
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-[-2] pointer-events-none opacity-50 bg-pulse-anim"></div>
      <Header />
      <main className="flex-grow pt-[120px]">
        <Hero />
        <SocialProof />
        <Services />
        <Features />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
