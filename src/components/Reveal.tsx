import { type ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

const directionClasses: Record<string, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  scale: 'scale-95',
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${directionClasses[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
