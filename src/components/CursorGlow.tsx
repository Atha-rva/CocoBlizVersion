import { useEffect, useRef, useState } from 'react';

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setEnabled(true);

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[55] h-72 w-72 -ml-36 -mt-36 rounded-full opacity-50 mix-blend-multiply"
      style={{
        background: 'radial-gradient(circle, rgba(196,163,90,0.12) 0%, transparent 60%)',
      }}
    />
  );
}
