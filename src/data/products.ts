export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  tags: string[];
  specs: { label: string; value: string }[];
}

export const productCategories = [
  'All Products',
  'Coconut Oil',
  'Coconut Water',
  'Coconut Milk',
  'Desiccated Coconut',
  'Coconut Flour',
  'Coconut Snacks',
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Virgin Coconut Oil',
    slug: 'virgin-coconut-oil',
    description: 'Cold-pressed, unrefined coconut oil with a naturally rich aroma.',
    longDescription:
      'Our Virgin Coconut Oil is cold-pressed from carefully selected fresh coconuts within hours of harvesting. The cold-press process preserves the natural nutrients, delicate flavour, and aromatic qualities that make our oil ideal for cooking, baking, and skincare.',
    image: 'https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Coconut Oil',
    tags: ['Cold-Pressed', 'Unrefined', 'Organic'],
    specs: [
      { label: 'Net Volume', value: '500 ml / 1 L' },
      { label: 'Shelf Life', value: '24 months' },
      { label: 'Storage', value: 'Cool, dry place' },
      { label: 'Certification', value: 'Organic, HACCP' },
    ],
  },
  {
    id: '2',
    name: 'Pure Coconut Water',
    slug: 'pure-coconut-water',
    description: 'Refreshing, naturally hydrating coconut water with no additives.',
    longDescription:
      'Harvested from tender green coconuts at their peak, our Pure Coconut Water is flash-pasteurised to lock in the natural sweetness and electrolyte balance. No added sugar, no preservatives — just the clean, refreshing taste of nature.',
    image: 'https://images.pexels.com/photos/11218810/pexels-photo-11218810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Coconut Water',
    tags: ['No Added Sugar', 'Natural Electrolytes', 'Refresh'],
    specs: [
      { label: 'Pack Size', value: '330 ml / 1 L' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Storage', value: 'Refrigerate after opening' },
      { label: 'Certification', value: 'FSSC 22000' },
    ],
  },
  {
    id: '3',
    name: 'Coconut Milk',
    slug: 'coconut-milk',
    description: 'Creamy, full-fat coconut milk for cooking and baking.',
    longDescription:
      'Pressed from the finest grated coconut meat, our Coconut Milk delivers a rich, creamy texture and authentic tropical flavour. Perfect for curries, desserts, smoothies, and dairy-free recipes that demand depth and body.',
    image: 'https://images.pexels.com/photos/4294734/pexels-photo-4294734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Coconut Milk',
    tags: ['Full-Fat', 'Dairy-Free', 'Versatile'],
    specs: [
      { label: 'Net Weight', value: '400 ml / 1 L' },
      { label: 'Fat Content', value: '17–22%' },
      { label: 'Shelf Life', value: '18 months' },
      { label: 'Certification', value: 'HACCP, ISO 22000' },
    ],
  },
  {
    id: '4',
    name: 'Desiccated Coconut',
    slug: 'desiccated-coconut',
    description: 'Finely shredded, dried coconut for baking and confectionery.',
    longDescription:
      'Our Desiccated Coconut is made from fresh coconut meat that is shredded, dried, and sieved to precise specifications. Available in fine, medium, and extra-fine grades, it is the choice of professional bakers and confectioners worldwide.',
    image: 'https://images.pexels.com/photos/7676875/pexels-photo-7676875.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Desiccated Coconut',
    tags: ['Fine Grade', 'Baking', 'Naturally Dried'],
    specs: [
      { label: 'Pack Size', value: '500 g / 1 kg / 25 kg' },
      { label: 'Moisture', value: 'Max 3%' },
      { label: 'Fat Content', value: '65–68%' },
      { label: 'Certification', value: 'Organic, HACCP' },
    ],
  },
  {
    id: '5',
    name: 'Coconut Flour',
    slug: 'coconut-flour',
    description: 'Gluten-free, high-fibre coconut flour for healthy baking.',
    longDescription:
      'Made from the by-product of coconut milk production, our Coconut Flour is a nutrient-dense, gluten-free alternative to wheat flour. High in dietary fibre and naturally low in digestible carbohydrates, it is perfect for keto, paleo, and gluten-free recipes.',
    image: 'https://images.pexels.com/photos/9131994/pexels-photo-9131994.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Coconut Flour',
    tags: ['Gluten-Free', 'High-Fibre', 'Keto-Friendly'],
    specs: [
      { label: 'Pack Size', value: '500 g / 1 kg' },
      { label: 'Fibre Content', value: '35–40%' },
      { label: 'Shelf Life', value: '18 months' },
      { label: 'Certification', value: 'Gluten-Free, Organic' },
    ],
  },
  {
    id: '6',
    name: 'Coconut Chips',
    slug: 'coconut-chips',
    description: 'Crunchy, lightly toasted coconut chips — a wholesome snack.',
    longDescription:
      'Thinly sliced and gently toasted, our Coconut Chips are a naturally sweet, satisfying snack with no artificial flavours. Enjoy them straight from the bag, sprinkled over yoghurt, or as a crunchy topping for salads and desserts.',
    image: 'https://images.pexels.com/photos/30893346/pexels-photo-30893346.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Coconut Snacks',
    tags: ['Toasted', 'No Additives', 'Snack'],
    specs: [
      { label: 'Pack Size', value: '150 g / 500 g' },
      { label: 'Shelf Life', value: '12 months' },
      { label: 'Storage', value: 'Reseal after opening' },
      { label: 'Certification', value: 'HACCP' },
    ],
  },
];
