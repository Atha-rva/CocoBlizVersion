import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Link } from './Router';

export function Footer() {
  return (
    <footer className="bg-coco-dark text-coco-cream/70">
      <div className="container-coco py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-coco-green">
                <Leaf className="h-5 w-5 text-coco-cream" />
              </span>
              <span className="font-display text-xl font-extrabold text-coco-cream">
                CocoBlitz
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-coco-cream/50 max-w-xs">
              Naturally sourced. Carefully processed. Built for quality — premium coconut products from the heart of the tropics.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-coco-cream mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-coco-cream/50 hover:text-accent-gold transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-coco-cream mb-5">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-coco-cream/50">
                <Mail className="h-4 w-4 mt-0.5 text-accent-gold flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-coco-cream/50">
                <Phone className="h-4 w-4 mt-0.5 text-accent-gold flex-shrink-0" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-coco-cream/50">
                <MapPin className="h-4 w-4 mt-0.5 text-accent-gold flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-coco-cream mb-5">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-coco-green/40 text-coco-cream/60 transition-all duration-300 hover:bg-accent-gold hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-gold hover:text-accent-goldlight transition-colors"
            >
              Start an enquiry
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-coco-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-coco-cream/40">
            &copy; {new Date().getFullYear()} CocoBlitz. All rights reserved.
          </p>
          <p className="text-xs text-coco-cream/40">
            Crafted with care from Sri Lanka.
          </p>
        </div>
      </div>
    </footer>
  );
}
