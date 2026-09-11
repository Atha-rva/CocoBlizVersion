import { useRef, type ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className = '', maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;

    if (innerRef.current) {
      innerRef.current.style.transform = `translate(${(x - centerX) * 0.05}px, ${(y - centerY) * 0.05}px)`;
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) {
      el.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    }
    if (innerRef.current) {
      innerRef.current.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div ref={innerRef} className="transition-transform duration-200 ease-out">
        {children}
      </div>
    </div>
  );
}
