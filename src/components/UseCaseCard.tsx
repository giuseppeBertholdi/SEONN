import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface UseCaseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const UseCaseCard = ({ title, description, icon, className }: UseCaseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        'flex flex-col items-start p-6 transition-all duration-300 transform hover:-translate-y-2 border border-seonn-gray-200 rounded-sm',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "mb-5 p-3 border transition-all duration-300 transform",
        isHovered ? "border-seonn-black bg-seonn-black scale-110 rotate-3" : "border-seonn-gray-200 bg-transparent"
      )}>
        <div className={cn(
          "transition-colors duration-300",
          isHovered ? "text-seonn-white" : "text-seonn-black"
        )}>
          {icon}
        </div>
      </div>
      <h3 className="font-display text-lg font-medium mb-2 relative">
        {title}
        <span className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-seonn-black transition-all duration-300",
          isHovered ? "w-full" : "w-0"
        )}></span>
      </h3>
      <p className="text-sm text-seonn-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default UseCaseCard;
