import { useMemo, useState } from 'react';
import { products, productCategories, type Product } from '@/data/products';
import { ProductCard } from './ProductCard';
import { Reveal } from './Reveal';

interface ProductGridProps {
  products?: Product[];
  showFilter?: boolean;
}

export function ProductGrid({ products: items, showFilter = true }: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState('All Products');

  const filtered = useMemo(() => {
    const source = items ?? products;
    if (activeCategory === 'All Products') return source;
    return source.filter((p) => p.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <div>
      {showFilter && (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-coco-green text-coco-cream shadow-md shadow-coco-green/20 scale-105'
                    : 'bg-white text-coco-dark/60 hover:bg-coco-green/5 hover:text-coco-green'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <ProductCard key={`${activeCategory}-${product.id}`} product={product} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-coco-dark/40 text-lg">No products in this category yet.</p>
        </div>
      )}
    </div>
  );
}
