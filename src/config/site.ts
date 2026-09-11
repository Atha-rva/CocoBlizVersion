export const siteConfig = {
  name: 'CocoBlitz',
  tagline: 'Fresh Coconut. Tender Coconut Water.',
  description:
    'CocoBlitz India Pvt. Ltd. brings naturally refreshing coconut water and premium coconut products to the market with quality, consistency, and trust.',
  email: 'support@cocoblitz.com',
  phone: '',
  website: 'cocoblitz.com',
  address: '285, Vill+Post Tilapta, Dadri Main Road, Greater Noida, U.P., India',
  social: {
    instagram: 'https://instagram.com/cocoblitzindia',
    facebook: 'https://facebook.com/cocoblitzindia',
    linkedin: 'https://www.linkedin.com/company/cocoblitzindia',
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Contact', path: '/contact' },
  ],
};

export type SiteConfig = typeof siteConfig;
