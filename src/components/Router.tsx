import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  navigate: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => {
    if (typeof window === 'undefined') return '/';
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to: string) => {
    if (to === path) return;
    window.history.pushState({}, '', to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  innerRef?: React.Ref<HTMLAnchorElement>;
  onMouseMove?: (e: React.MouseEvent) => void;
  onMouseLeave?: () => void;
}

export function Link({ to, children, className, onClick, innerRef, onMouseMove, onMouseLeave }: LinkProps) {
  const { navigate } = useRouter();
  return (
    <a
      ref={innerRef}
      href={to}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
