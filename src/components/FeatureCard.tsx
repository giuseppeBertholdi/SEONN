import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ title, description, className }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        'p-8 border transition-all duration-300 group transform hover:scale-105 hover:-rotate-1 relative overflow-hidden', 
        isHovered ? 'text-seonn-white shadow-xl' : 'text-seonn-gray-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 w-0 h-1 bg-seonn-white transition-all duration-700 ease-in-out group-hover:w-full"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-seonn-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h3 className="font-display text-xl font-medium mb-4 transition-colors duration-300 relative">{title}</h3>
      <p className="text-sm leading-relaxed transition-colors duration-300 relative">{description}</p>
    </div>
  );
};

export default FeatureCard;
