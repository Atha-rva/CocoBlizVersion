import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, X } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailsModal({ product, onClose }: ProductDetailsModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!product) return;

    setIsVisible(false);
    setIsClosing(false);

    const frame = window.requestAnimationFrame(() => setIsVisible(true));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product]);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(() => onClose(), 260);
  };

  if (!product || typeof document === 'undefined') return null;

  const quickFacts = product.specs.slice(0, 4);

  return createPortal(
    <div className="fixed inset-0 z-[9998]" onClick={handleClose} aria-hidden="true">
      <div
        className={`absolute inset-0 bg-coco-dark/60 transition-all duration-300 ease-out ${
          isVisible && !isClosing ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backdropFilter: isVisible && !isClosing ? 'blur(10px)' : 'blur(0px)',
        }}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-details-title"
        className="fixed left-1/2 top-1/2 z-[9999] w-[calc(100vw-30px)] max-w-[700px] max-h-[calc(100vh-30px)] overflow-hidden rounded-[28px] border border-coco-green/10 bg-white shadow-[0_28px_80px_rgba(16,40,28,0.22)] transition-all duration-300 ease-out sm:w-[680px]"
        style={{
          transform: `translate(-50%, -50%) scale(${isVisible && !isClosing ? 1 : 0.92})`,
          opacity: isVisible && !isClosing ? 1 : 0,
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label={`Close details for ${product.name}`}
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-coco-green/10 bg-white/90 text-coco-dark/70 shadow-md shadow-coco-dark/10 backdrop-blur-sm transition-all duration-300 hover:text-coco-green"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid max-h-[calc(100vh-30px)] overflow-hidden md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[220px] overflow-hidden bg-coco-cream md:min-h-[100%]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="overflow-y-auto p-4 sm:p-5 lg:p-6"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(20, 70, 55, 0.35) transparent',
            }}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-coco-cream px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-coco-green">
                {product.category}
              </span>
            </div>

            <h2 id="product-details-title" className="font-display text-2xl font-extrabold leading-tight text-coco-green">
              {product.name}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-coco-dark/70 sm:text-[15px]">
              {product.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 rounded-full border border-coco-green/15 bg-coco-green/5 px-2.5 py-1 text-[11px] font-medium text-coco-green"
                >
                  <Check className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 space-y-2.5">
              <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-coco-green">
                Key benefits
              </h3>
              <ul className="space-y-2">
                {product.tags.slice(0, 3).map((tag) => (
                  <li key={tag} className="flex items-start gap-2 rounded-xl bg-coco-cream/60 px-2.5 py-2 text-xs text-coco-dark/75">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-coco-green text-coco-cream">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 space-y-2.5">
              <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.14em] text-coco-green">
                Quick facts
              </h3>
              <div className="space-y-2">
                {quickFacts.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between gap-3 rounded-xl border border-coco-green/10 bg-coco-cream/50 px-2.5 py-2"
                  >
                    <span className="text-[11px] text-coco-dark/60">{spec.label}</span>
                    <span className="text-right text-[11px] font-semibold text-coco-green">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-coco-green/10 bg-coco-cream/50 p-3">
              <p className="text-xs leading-relaxed text-coco-dark/70">
                {product.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        div[style*="scrollbarWidth"]::-webkit-scrollbar {
          width: 5px;
        }

        div[style*="scrollbarWidth"]::-webkit-scrollbar-track {
          background: transparent;
        }

        div[style*="scrollbarWidth"]::-webkit-scrollbar-thumb {
          background: rgba(20, 70, 55, 0.35);
          border-radius: 999px;
        }

        div[style*="scrollbarWidth"]::-webkit-scrollbar-thumb:hover {
          background: rgba(20, 70, 55, 0.55);
        }
      `}</style>
    </div>,
    document.body
  );
}
