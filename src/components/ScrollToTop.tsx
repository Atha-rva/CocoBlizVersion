import { useEffect } from 'react';
import { useRouter } from './Router';

export function ScrollToTop() {
  const { path } = useRouter();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [path]);
  return null;
}
