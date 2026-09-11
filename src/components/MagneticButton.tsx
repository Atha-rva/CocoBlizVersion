import { useRef, type ReactNode } from 'react';
import { Link } from './Router';

interface MagneticButtonProps {
  children: ReactNode;
  to: string;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, to, className = '', strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <Link
      to={to}
      innerRef={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
    </Link>
  );
}
