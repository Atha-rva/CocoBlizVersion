import { type ReactNode, useEffect, useState } from 'react';
import { useRouter } from './Router';

export function PageTransition({ children }: { children: ReactNode }) {
  const { path } = useRouter();
  const [displayed, setDisplayed] = useState(children);
  const [phase, setPhase] = useState<'idle' | 'out' | 'in'>('idle');

  useEffect(() => {
    setPhase('out');
    const t1 = setTimeout(() => {
      setDisplayed(children);
      setPhase('in');
    }, 200);
    const t2 = setTimeout(() => setPhase('idle'), 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        phase === 'out'
          ? 'opacity-0 translate-y-4'
          : phase === 'in'
          ? 'opacity-100 translate-y-0'
          : 'opacity-100 translate-y-0'
      }`}
    >
      {displayed}
    </div>
  );
}
