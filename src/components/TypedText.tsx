
import React, { useEffect, useRef, useState } from 'react';

interface TypedTextProps {
  strings: string[];
  typingSpeed?: number;
  backspaceSpeed?: number;
  delayBetween?: number;
  className?: string;
  glitchEffect?: boolean;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typingSpeed = 70,
  backspaceSpeed = 30,
  delayBetween = 1500,
  className,
  glitchEffect = false
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentString = strings[stringIndex];

    if (isDeleting) {
      // Backspacing
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentString.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, backspaceSpeed);
      } else {
        setIsDeleting(false);
        setStringIndex((stringIndex + 1) % strings.length);
      }
    } else {
      // Typing
      if (charIndex < currentString.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentString.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        // Wait before backspacing
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [stringIndex, charIndex, isDeleting, strings, typingSpeed, backspaceSpeed, delayBetween]);

  if (glitchEffect) {
    return (
      <span className={cn(className, "glitch-text")} data-text={displayText}>
        {displayText}
        <span className="cursor"></span>
      </span>
    );
  }

  return (
    <span className={className}>
      {displayText}
      <span className="cursor"></span>
    </span>
  );
};

const cn = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default TypedText;
