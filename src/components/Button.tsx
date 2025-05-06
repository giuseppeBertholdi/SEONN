
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | '3d';
  children: React.ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  if (variant === '3d') {
    return (
      <button 
        className={cn(
          "button-3d px-6 py-3 bg-seonn-black text-seonn-white border border-seonn-black rounded-sm shadow-lg hover:shadow-xl transform transition-all duration-300",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  return (
    <button 
      className={cn(
        variant === 'primary' ? 'button-primary group' : 'button-secondary group',
        className
      )}
      {...props}
    >
      <div className={cn(
        "absolute inset-0 w-0 transition-all duration-500 ease-out z-0 group-hover:w-full",
        variant === 'primary' ? "bg-seonn-white" : "bg-seonn-black"
      )}></div>
      <span className={cn(
        "relative z-10 transition duration-300",
        variant === 'primary' ? "group-hover:text-seonn-black" : "group-hover:text-seonn-white"
      )}>
        {children}
      </span>
    </button>
  );
};

export default Button;
