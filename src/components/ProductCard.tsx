import { ArrowUpRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { Link } from './Router';
import { TiltCard } from './TiltCard';
import { Reveal } from './Reveal';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Reveal delay={index * 100}>
      <Link
        to={`/products?focus=${product.slug}`}
        className="group block"
      >
        <TiltCard maxTilt={6} className="rounded-3xl">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-sm card-hover">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-coco-cream">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coco-dark/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-coco-cream/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-coco-green">
                  {product.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-coco-green text-coco-cream opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-400">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display text-lg font-bold text-coco-green mb-2 group-hover:text-coco-deep transition-colors">
                {product.name}
              </h3>
              <p className="text-sm leading-relaxed text-coco-dark/55 line-clamp-2">
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
      </Link>
    </Reveal>
  );
}
