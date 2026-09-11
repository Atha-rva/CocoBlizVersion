import { useState } from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductDetailsModal } from '@/components/ProductDetailsModal';
import { products, type Product } from '@/data/products';
import { Reveal } from '@/components/Reveal';
import { MagneticButton } from '@/components/MagneticButton';

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section className="bg-gradient-to-br from-coco-cream to-coco-sandlight/30 pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="container-coco mx-auto max-w-3xl text-center">
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
          <p className="mt-7 text-lg leading-relaxed text-coco-dark/60 md:text-xl animate-fade-in-up animate-delay-200">
            Explore our full range of coconut products — each crafted to deliver natural quality, consistent performance, and the authentic taste of the tropics.
          </p>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <section className="section-padding bg-white">
        <div className="container-coco">
          <ProductGrid onSelectProduct={setSelectedProduct} />
        </div>
      </section>

      <section className="section-padding bg-coco-cream">
        <div className="container-coco">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-coco-green px-8 py-16 text-center md:px-16 md:py-20">
              <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-gradient-radial from-accent-gold/15 via-transparent to-transparent" />
              <div className="relative z-10 mx-auto max-w-2xl">
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
