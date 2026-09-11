import { useState } from 'react';
import { ArrowRight, Leaf, ShieldCheck, Globe2, Truck, Award, Heart } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductCard } from '@/components/ProductCard';
import { Reveal } from '@/components/Reveal';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { MagneticButton } from '@/components/MagneticButton';
import { Link } from '@/components/Router';
import { products } from '@/data/products';

const processSteps = [
  {
    icon: Leaf,
    step: '01',
    title: 'Sourcing',
    desc: 'Coconuts are hand-picked from select plantations, harvested at peak ripeness for maximum quality.',
  },
  {
    icon: ShieldCheck,
    step: '02',
    title: 'Processing',
    desc: 'State-of-the-art cold-press and processing techniques preserve natural nutrients and flavour.',
  },
  {
    icon: Award,
    step: '03',
    title: 'Quality Control',
    desc: 'Every batch undergoes rigorous lab testing to meet international food safety standards.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Delivery',
    desc: 'Carefully packaged and shipped to customers across 20+ global markets with full traceability.',
  },
];

export function Home() {
  const featured = products.slice(0, 3);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <Hero />

      {/* Section 2 — Introduction */}
      <section className="section-padding bg-coco-cream">
        <div className="container-coco">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal direction="scale">
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-coco-green/10 aspect-square max-w-md">
                  <img
                    src="https://images.pexels.com/photos/13071432/pexels-photo-13071432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                    alt="Coconut plantation"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-coco-green px-6 py-5 shadow-xl shadow-coco-green/20">
                  <div className="font-display text-4xl font-extrabold text-coco-cream">
                    <AnimatedCounter value={15} suffix="+" />
                  </div>
                  <div className="text-xs text-coco-cream/60 mt-1">Years of Craft</div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div>
                <SectionHeading
                  eyebrow="Our Story"
                  title="More than coconut. It's our craft."
                  align="left"
                  subtitle="CocoBlitz was founded with a singular vision: to bring the finest coconut products to the world while honouring the communities and ecosystems that make them possible."
                />
                <p className="mt-6 text-coco-dark/55 leading-relaxed">
                  From carefully selected plantations to our state-of-the-art processing facility, every step is guided by an unwavering commitment to quality. We don't just process coconuts — we elevate them, transforming a humble tropical fruit into products that meet the exacting standards of customers across the globe.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <MagneticButton to="/about" className="btn-primary">
                    Learn About Us
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 3 — Featured Products */}
      <section className="section-padding bg-gradient-to-b from-coco-cream to-white">
        <div className="container-coco">
          <Reveal>
            <SectionHeading
              eyebrow="Our Products"
              title="Crafted for every need"
              subtitle="From cold-pressed oils to refreshing coconut water, each product is crafted to deliver the pure, natural goodness of coconut in its finest form."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <MagneticButton to="/products" className="btn-secondary">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 4 — Interactive Quality Process */}
      <section className="section-padding bg-coco-green relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-accent-gold/10 via-transparent to-transparent" />
        <div className="container-coco relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="Quality at every step"
              subtitle="From plantation to packaging, our four-stage process ensures every product meets the highest standards of purity, freshness, and consistency."
              light
            />
          </Reveal>

          {/* Desktop: interactive timeline */}
          <div className="mt-16 hidden lg:block">
            <div className="relative">
              {/* Connector line */}
              <div className="absolute top-7 left-0 right-0 h-0.5 bg-coco-cream/10" />
              <div
                className="absolute top-7 left-0 h-0.5 bg-gradient-to-r from-accent-gold to-accent-goldlight transition-all duration-700 ease-out"
                style={{ width: `${((activeStep ?? 0) + 1) * 25}%` }}
              />
              <div className="grid grid-cols-4 gap-6">
                {processSteps.map((item, i) => (
                  <div
                    key={item.step}
                    className="relative cursor-pointer"
                    onMouseEnter={() => setActiveStep(i)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    {/* Node */}
                    <div
                      className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                        activeStep === i || (activeStep === null && i === 0)
                          ? 'border-accent-gold bg-accent-gold scale-110 shadow-lg shadow-accent-gold/30'
                          : 'border-coco-cream/20 bg-coco-deep'
                      }`}
                    >
                      <item.icon
                        className={`h-6 w-6 transition-colors duration-500 ${
                          activeStep === i || (activeStep === null && i === 0)
                            ? 'text-white'
                            : 'text-coco-cream/40'
                        }`}
                      />
                    </div>
                    {/* Card */}
                    <div
                      className={`mt-6 rounded-2xl p-6 transition-all duration-500 ${
                        activeStep === i
                          ? 'bg-coco-deep/60 border border-accent-gold/30 scale-105'
                          : 'bg-coco-deep/30 border border-coco-cream/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display text-lg font-bold text-coco-cream">
                          {item.title}
                        </h3>
                        <span className="font-display text-2xl font-extrabold text-coco-cream/10">
                          {item.step}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed transition-all duration-500 overflow-hidden ${
                          activeStep === i ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 lg:max-h-32 lg:opacity-60'
                        } text-coco-cream/50`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:hidden">
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 100}>
                <div className="group relative rounded-2xl bg-coco-deep/40 border border-coco-cream/10 p-7 transition-all duration-500 hover:bg-coco-deep/60 hover:border-accent-gold/30">
                  <div className="flex items-center justify-between mb-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/15 text-accent-gold transition-all duration-500 group-hover:bg-accent-gold group-hover:text-white">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-4xl font-extrabold text-coco-cream/10">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-coco-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-coco-cream/50">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Credibility */}
      <section className="section-padding bg-white">
        <div className="container-coco">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe2,
                title: 'Global Reach',
                desc: 'Trusted by partners in over 20 countries across Europe, Asia, the Middle East, and North America.',
              },
              {
                icon: ShieldCheck,
                title: 'Certified Standards',
                desc: 'HACCP, FSSC 22000, and ISO-certified processes ensure every product meets international benchmarks.',
              },
              {
                icon: Heart,
                title: 'Sustainable Promise',
                desc: 'We work directly with farming communities, ensuring fair practices and minimal environmental impact.',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group rounded-2xl border border-coco-green/8 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-coco-green/5 hover:border-coco-green/15 hover:-translate-y-1">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-coco-green/8 text-coco-green mb-5 transition-all duration-500 group-hover:bg-coco-green group-hover:text-coco-cream group-hover:scale-110">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-coco-green mb-3">
                    {item.title}
                  </h3>
                  <p className="text-coco-dark/55 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section className="section-padding bg-coco-cream">
        <div className="container-coco">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-coco-green px-8 py-16 md:px-16 md:py-24 text-center">
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gradient-radial from-accent-gold/15 via-transparent to-transparent" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-coco-deep/40 via-transparent to-transparent" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-display font-extrabold text-coco-cream">
                  Let's talk about your
                  <span className="text-gradient-gold"> coconut needs.</span>
                </h2>
                <p className="mt-6 text-lg text-coco-cream/60 leading-relaxed">
                  Whether you're looking for bulk supply, private label, or a specific product specification, our team is ready to help.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton to="/contact" className="btn-gold">
                    Start an Enquiry
                    <ArrowRight className="h-4 w-4" />
                  </MagneticButton>
                  <Link to="/products" className="btn-secondary !border-coco-cream/30 !text-coco-cream hover:!bg-coco-cream/10">
                    Browse Products
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
