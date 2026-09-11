import { useEffect, useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Link, useRouter } from './Router';

export function Header() {
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-coco-cream/90 backdrop-blur-md shadow-sm shadow-coco-green/5'
          : 'bg-transparent'
      }`}
    >
      <div className="container-coco">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 ${
                scrolled ? 'bg-coco-green' : 'bg-coco-green'
              }`}
            >
              <Leaf className="h-5 w-5 text-coco-cream" />
            </span>
            <span
              className={`font-display text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-coco-green' : 'text-coco-green'
              }`}
            >
              CocoBlitz
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const isActive = path === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-5 py-2 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'text-coco-green'
                      : 'text-coco-dark/60 hover:text-coco-green'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-accent-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary !py-3 !px-6 text-xs">
              Get in Touch
            </Link>
          </div>

          <button
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-coco-green"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-coco pb-6 pt-2">
          <nav className="flex flex-col gap-1 bg-white rounded-2xl shadow-lg shadow-coco-green/10 p-4">
            {siteConfig.nav.map((item) => {
              const isActive = path === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-coco-green text-coco-cream'
                      : 'text-coco-dark/70 hover:bg-coco-cream'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link to="/contact" className="btn-primary mt-2 text-sm">
              Get in Touch
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
