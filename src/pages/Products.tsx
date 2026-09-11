import { useEffect, useState } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductGrid } from '@/components/ProductGrid';
import { products, type Product } from '@/data/products';
import { Link, useRouter } from '@/components/Router';
import { Reveal } from '@/components/Reveal';
import { MagneticButton } from '@/components/MagneticButton';

export function Products() {
  const { path } = useRouter();
  const [focusedSlug, setFocusedSlug] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const focus = params.get('focus');
    if (focus) setFocusedSlug(focus);
  }, [path]);

  const focusedProduct = focusedSlug
    ? products.find((p) => p.slug === focusedSlug)
    : null;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-coco-cream to-coco-sandlight/30">
        <div className="container-coco text-center max-w-3xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-2.5 animate-fade-in-up">
            <span className="h-px w-8 bg-accent-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">
              Our Products
            </span>
            <span className="h-px w-8 bg-accent-gold" />
          </div>
          <h1 className="text-display font-extrabold text-coco-green animate-fade-in-up animate-delay-100">
            Premium coconut,
            <br />
            <span className="text-gradient-gold">in every form.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-coco-dark/60 leading-relaxed animate-fade-in-up animate-delay-200">
            Explore our full range of coconut products — each crafted to deliver natural quality, consistent performance, and the authentic taste of the tropics.
          </p>
        </div>
      </section>

      {/* Product Detail Modal */}
      {focusedProduct && (
        <ProductDetail product={focusedProduct} onClose={() => setFocusedSlug(null)} />
      )}

      {/* Grid */}
      <section className="section-padding bg-white">
        <div className="container-coco">
          <ProductGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-coco-cream">
        <div className="container-coco">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-coco-green px-8 py-16 md:px-16 md:py-20 text-center">
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-accent-gold/15 via-transparent to-transparent" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <SectionHeading
                  title="Need a custom specification?"
                  subtitle="We work with businesses of all sizes — from retailers to food manufacturers. Tell us what you need and we'll make it happen."
                  light
                />
                <div className="mt-8">
                  <MagneticButton to="/contact" className="btn-gold">
                    Request a Quote
                  </MagneticButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProductDetail({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-coco-dark/60 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl animate-scale-in scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-coco-dark/60 hover:text-coco-green hover:bg-coco-cream hover:rotate-90 transition-all duration-300"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/9] overflow-hidden rounded-t-3xl bg-coco-cream group">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="p-8 md:p-10">
          <span className="inline-flex items-center rounded-full bg-coco-cream px-3.5 py-1.5 text-xs font-semibold text-coco-green mb-4">
            {product.category}
          </span>
          <h2 className="font-display text-3xl font-extrabold text-coco-green mb-3">
            {product.name}
          </h2>
          <p className="text-coco-dark/55 leading-relaxed">
            {product.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-md bg-coco-green/8 px-3 py-1.5 text-xs font-medium text-coco-green"
              >
                <Check className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-coco-green mb-4">
              Specifications
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between rounded-xl bg-coco-cream/60 px-4 py-3 transition-colors duration-300 hover:bg-coco-cream"
                >
                  <span className="text-sm text-coco-dark/50">{spec.label}</span>
                  <span className="text-sm font-semibold text-coco-green">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link to="/contact" className="btn-primary w-full">
              Enquire About This Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
