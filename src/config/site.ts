export const siteConfig = {
  name: 'CocoBlitz',
  tagline: 'Coconut. Reimagined.',
  description:
    'Naturally sourced. Carefully processed. Built for quality. CocoBlitz delivers premium coconut products crafted with expertise and consistency.',
  email: 'hello@cocoblitz.com',
  phone: '+94 77 123 4567',
  address: 'No. 42, Coconut Grove Lane, Colombo, Sri Lanka',
  social: {
    instagram: '#',
    facebook: '#',
    linkedin: '#',
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
