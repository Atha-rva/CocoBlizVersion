import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { Link } from './Router';
import { MagneticButton } from './MagneticButton';
import { AnimatedCounter } from './AnimatedCounter';
import { useParallax } from '@/hooks/useParallax';

export function Hero() {
  const parallax = useParallax(0.15);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coco-cream via-coco-cream to-coco-sandlight/40" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-gold/8 via-transparent to-transparent"
        style={{ transform: `translateY(${parallax * 0.5}px)` }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-coco-green/8 via-transparent to-transparent"
        style={{ transform: `translateY(${-parallax * 0.3}px)` }}
      />

      <div className="container-coco relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-coco-green/8 px-4 py-2 animate-fade-in-up">
              <Sparkles className="h-3.5 w-3.5 text-accent-gold" />
              <span className="text-xs font-semibold tracking-wide text-coco-green">
                Premium Coconut Products
              </span>
            </div>

            <h1 className="text-hero font-extrabold text-coco-green animate-fade-in-up animate-delay-100">
              Coconut.
              <br />
              <span className="text-gradient-gold">Reimagined.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl leading-relaxed text-coco-dark/60 max-w-md animate-fade-in-up animate-delay-200">
              Naturally sourced. Carefully processed. Built for quality — premium coconut products crafted with expertise and consistency.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <MagneticButton to="/products" className="btn-primary">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton to="/contact" className="btn-secondary">
                Contact Us
              </MagneticButton>
            </div>

            {/* Stats with animated counters */}
            <div className="mt-14 flex gap-8 animate-fade-in-up animate-delay-500">
              {[
                { value: 15, suffix: '+', label: 'Years of Expertise' },
                { value: 20, suffix: '+', label: 'Global Markets' },
                { value: 100, suffix: '%', label: 'Natural Quality' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-extrabold text-coco-green">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-coco-dark/40 mt-1 max-w-[80px] leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image with parallax */}
          <div className="relative animate-fade-in-up animate-delay-300">
            <div
              className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-coco-green/15 aspect-[4/5] max-w-md mx-auto"
              style={{ transform: `translateY(${parallax * 0.1}px)` }}
            >
              <img
                src="https://images.pexels.com/photos/7543141/pexels-photo-7543141.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
                alt="Fresh coconuts"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coco-dark/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-coco-green/10 animate-float"
              style={{ transform: `translateY(${parallax * 0.2}px)` }}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-coco-green">
                <Leaf className="h-5 w-5 text-coco-cream" />
              </span>
              <div>
                <div className="text-sm font-bold text-coco-green">Sustainably Sourced</div>
                <div className="text-xs text-coco-dark/40">From farm to package</div>
              </div>
            </div>

            {/* Floating badge top */}
            <div
              className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 rounded-full bg-accent-gold px-5 py-2.5 shadow-lg shadow-accent-gold/20"
              style={{ transform: `translateY(${parallax * -0.15}px)` }}
            >
              <span className="text-sm font-bold text-white">Certified Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-coco-green/20 p-1.5">
          <div className="h-2 w-1 rounded-full bg-coco-green/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
