
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 py-6 z-50 transition-all duration-300',
        isScrolled ? 'py-4 bg-seonn-white/95 backdrop-blur-sm border-b border-seonn-gray-200' : 'bg-transparent',
        className
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-8">
        <div className="flex items-center">
          <a href="/" className="text-lg font-display font-semibold text-seonn-black group relative overflow-hidden">
            <span className="group-hover:opacity-0 transition-opacity duration-300">SEONN</span>
            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold tracking-wider">S.E.O.N.N</span>
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-sm text-seonn-gray-700 hover:text-seonn-black link-underline">About</a>
          <a href="#how-it-works" className="text-sm text-seonn-gray-700 hover:text-seonn-black link-underline">How It Works</a>
          <a href="#differentiators" className="text-sm text-seonn-gray-700 hover:text-seonn-black link-underline">Differentiators</a>
          <a href="#use-cases" className="text-sm text-seonn-gray-700 hover:text-seonn-black link-underline">Use Cases</a>
        </nav>
        
        <div className="flex items-center">
          <a 
            href="#contact" 
            className="relative overflow-hidden text-sm font-medium bg-seonn-black text-white px-4 py-2 group"
          >
            <span className="relative z-10 transition-transform duration-300 inline-block group-hover:-translate-y-full">Contact Us</span>
            <span className="absolute inset-0 flex items-center justify-center text-white transition-transform duration-300 translate-y-full group-hover:translate-y-0">Let's Talk</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
