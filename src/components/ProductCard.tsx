import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { TiltCard } from './TiltCard';
import { Reveal } from './Reveal';

interface ProductCardProps {
  product: Product;
  index?: number;
  onSelect?: (product: Product) => void;
}

export function ProductCard({ product, index = 0, onSelect }: ProductCardProps) {
  return (
    <Reveal delay={index * 100}>
      <button
        type="button"
        onClick={() => onSelect?.(product)}
        className="group block w-full text-left"
      >
        <TiltCard maxTilt={6} className="rounded-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm card-hover">
            <div className="relative aspect-[4/3] overflow-hidden bg-coco-cream">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coco-dark/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute left-4 top-4">
                <span className="inline-flex items-center rounded-full bg-coco-cream/90 px-3.5 py-1.5 text-xs font-semibold text-coco-green backdrop-blur-sm">
                  {product.category}
                </span>
              </div>
              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-coco-green text-coco-cream opacity-0 scale-75 transition-all duration-400 group-hover:scale-100 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            <div className="p-6">
              <h3 className="mb-2 font-display text-lg font-bold text-coco-green transition-colors group-hover:text-coco-deep">
                {product.name}
              </h3>
              <p className="line-clamp-2 text-sm leading-relaxed text-coco-dark/55">
                {product.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {product.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-coco-cream px-2.5 py-1 text-[11px] font-medium text-coco-green/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </button>
    </Reveal>
  );
}
