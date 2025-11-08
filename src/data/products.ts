import type { Product } from '../types/Product';

const products: Product[] = [
  // Men's Watches
  {
    id: 'men-1',
    name: 'Retro Walk Women Fashionable Heels',
    description: 'Elegant black steel timepiece with premium brushed finish, sapphire crystal glass, and water-resistant up to 50m. Perfect for both formal and casual wear.',
    rating: 4.8,
    sellingPrice: 2599,
    mrp: 1599,
    images: [
      'https://images.meesho.com/images/products/431164626/bhsdu_512.avif?width=512',
      'https://images.meesho.com/images/products/431164626/xbye7_512.avif?width=512',
      'https://images.meesho.com/images/products/431164626/fuij7_512.avif?width=512',
      'https://images.meesho.com/images/products/431164626/bhsdu_512.avif?width=512',
      'https://images.meesho.com/images/products/431164626/xooon_512.avif?width=512'
    ],
    category: 'men'
  },
  {
    id: 'men-2',
    name: 'Luxury Gold Chronograph',
    description: 'Premium gold-plated chronograph watch with precision quartz movement, stopwatch functionality, and luxurious detailing. Features a scratch-resistant sapphire crystal and 100m water resistance.',
    rating: 4.9,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-3',
    name: 'Sport Digital Watch',
    description: 'Multi-function digital sports watch with backlight, stopwatch, lap timer, and 200m water resistance. Perfect for athletes and outdoor enthusiasts.',
    rating: 4.7,
    sellingPrice: 1999,
    mrp: 3999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-4',
    name: 'Executive Steel Watch',
    description: 'Professional stainless steel watch with minimalist design. Features a scratch-resistant sapphire crystal, automatic movement, and 100m water resistance. Perfect for business professionals.',
    rating: 4.6,
    sellingPrice: 3499,
    mrp: 6999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-5',
    name: 'Vintage Brown Leather',
    description: 'Classic brown leather watch with distressed finish and vintage-inspired design. Features genuine leather strap, bronze case, and reliable quartz movement.',
    rating: 4.8,
    sellingPrice: 2799,
    mrp: 5599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-6',
    name: 'Modern Minimalist Watch',
    description: 'Contemporary minimalist design with clean lines and simple elegance. Features a slim profile, mesh metal band, and modern numberless dial.',
    rating: 4.7,
    sellingPrice: 2299,
    mrp: 4599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-7',
    name: 'Professional Black Watch',
    description: 'Sophisticated black timepiece designed for business professionals. Features Swiss movement, date display, and scratch-resistant sapphire crystal glass.',
    rating: 4.9,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-8',
    name: 'Casual Blue Dial Watch',
    description: 'Trendy casual watch with a striking blue dial. Features a comfortable silicone strap, luminous hands, and water resistance up to 30m. Perfect for everyday wear.',
    rating: 4.5,
    sellingPrice: 1799,
    mrp: 3599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-9',
    name: 'Titanium Sports Watch',
    description: 'High-performance titanium sports watch with advanced features. Includes chronograph, tachymeter, and 200m water resistance. Ideal for athletes and sports enthusiasts.',
    rating: 4.8,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-10',
    name: 'Classic Roman Numeral',
    description: 'Traditional timepiece featuring elegant Roman numerals on a clean white dial. Includes date window, genuine leather strap, and classic styling perfect for formal occasions.',
    rating: 4.6,
    sellingPrice: 2599,
    mrp: 5199,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-11',
    name: 'Luxury Rose Gold Watch',
    description: 'Premium rose gold-plated watch with sophisticated detailing. Features automatic movement, scratch-resistant sapphire crystal, and genuine alligator leather strap.',
    rating: 4.9,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-12',
    name: 'Military Style Watch',
    description: 'Rugged military-inspired timepiece with durable construction. Features chronograph, compass markings, and camouflage design. Water-resistant up to 100m.',
    rating: 4.7,
    sellingPrice: 2199,
    mrp: 4399,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-13',
    name: 'Smart Hybrid Watch',
    description: 'Advanced hybrid smartwatch combining traditional aesthetics with modern technology. Features activity tracking, smartphone notifications, and 6-month battery life.',
    rating: 4.8,
    sellingPrice: 4299,
    mrp: 8599,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-14',
    name: 'Elegant Silver Watch',
    description: 'Refined silver-tone timepiece with sophisticated design. Features polished stainless steel case, date display, and premium leather strap. Perfect for formal occasions.',
    rating: 4.6,
    sellingPrice: 3199,
    mrp: 6399,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-15',
    name: 'Carbon Fiber Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-16',
    name: 'Retro Square Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.5,
    sellingPrice: 1899,
    mrp: 3799,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-17',
    name: 'Pilot Aviation Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 4799,
    mrp: 9599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-18',
    name: 'Skeleton Automatic Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-19',
    name: 'Diving Professional Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 6499,
    mrp: 12999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'men'
  },
  {
    id: 'men-20',
    name: 'GMT Dual Time Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 5299,
    mrp: 10599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg'
    ],
    category: 'men'
  },

  // Women's Watches
  {
    id: 'women-1',
    name: 'Elegant Rose Gold Watch',
    description: 'Stunning rose gold plated timepiece with delicate crystal accents and mother of pearl dial. Features a slim design and butterfly clasp bracelet.',
    rating: 4.8,
    sellingPrice: 2799,
    mrp: 5599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-2',
    name: 'Diamond Studded Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-3',
    name: 'Minimalist Silver Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 1999,
    mrp: 3999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-4',
    name: 'Vintage Leather Strap',description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 2299,
    mrp: 4599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-5',
    name: 'Pearl White Dial Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 3199,
    mrp: 6399,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-6',
    name: 'Fashion Bracelet Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 2599,
    mrp: 5199,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-7',
    name: 'Crystal Bezel Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-8',
    name: 'Delicate Chain Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.5,
    sellingPrice: 1799,
    mrp: 3599,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-9',
    name: 'Luxury Gold Plated',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 4499,
    mrp: 8999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-10',
    name: 'Smart Fitness Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 3299,
    mrp: 6599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-11',
    name: 'Ceramic White Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-12',
    name: 'Butterfly Design Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 2899,
    mrp: 5799,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-13',
    name: 'Floral Pattern Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 2199,
    mrp: 4399,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-14',
    name: 'Mother of Pearl Dial',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 3799,
    mrp: 7599,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-15',
    name: 'Vintage Art Deco Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 4799,
    mrp: 9599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-16',
    name: 'Mesh Band Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.5,
    sellingPrice: 2399,
    mrp: 4799,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-17',
    name: 'Cocktail Party Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 3599,
    mrp: 7199,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-18',
    name: 'Moonphase Luxury Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-19',
    name: 'Tennis Bracelet Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },
  {
    id: 'women-20',
    name: 'Charm Bracelet Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 2999,
    mrp: 5999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'women'
  },

  // Kids Watches
  {
    id: 'kids-1',
    name: 'Cartoon Character Watch',
    description: 'Fun and educational time-teaching watch featuring popular cartoon characters. Durable, child-friendly design with adjustable strap and easy-to-read numbers.',
    rating: 4.8,
    sellingPrice: 999,
    mrp: 1999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-2',
    name: 'Digital Sports Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 1299,
    mrp: 2599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-3',
    name: 'Colorful Silicone Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 799,
    mrp: 1599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-4',
    name: 'Learning Time Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 1199,
    mrp: 2399,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-5',
    name: 'Superhero Theme Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 1099,
    mrp: 2199,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-6',
    name: 'Princess Pink Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 899,
    mrp: 1799,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-7',
    name: 'Glow in Dark Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 1399,
    mrp: 2799,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-8',
    name: 'Animal Design Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 999,
    mrp: 1999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-9',
    name: 'Smart Kids Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 2499,
    mrp: 4999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-10',
    name: 'Waterproof Kids Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 1599,
    mrp: 3199,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-11',
    name: 'Educational Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 1299,
    mrp: 2599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-12',
    name: 'Space Theme Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 1199,
    mrp: 2399,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-13',
    name: 'Music Player Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 1999,
    mrp: 3999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-14',
    name: 'Camera Kids Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 2199,
    mrp: 4399,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-15',
    name: 'GPS Tracker Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 2799,
    mrp: 5599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-16',
    name: 'Puzzle Game Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 1499,
    mrp: 2999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-17',
    name: 'Voice Recorder Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 1799,
    mrp: 3599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-18',
    name: 'Fitness Tracker Kids',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 2299,
    mrp: 4599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-19',
    name: 'Alarm Clock Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.5,
    sellingPrice: 999,
    mrp: 1999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },
  {
    id: 'kids-20',
    name: 'LED Light Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 1399,
    mrp: 2799,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'kids'
  },

  // Couple Watches
  {
    id: 'couple-1',
    name: 'Matching His & Hers Set',
    description: 'Perfect pair of matching watches for couples. Features coordinated designs with premium materials, Swiss movement, and complementary styling. Makes an ideal anniversary or wedding gift.',
    rating: 4.9,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-2',
    name: 'Romantic Rose Gold Pair',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-3',
    name: 'Classic Black & White Set',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 3499,
    mrp: 6999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-4',
    name: 'Minimalist Couple Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 2999,
    mrp: 5999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-5',
    name: 'Luxury Diamond Pair',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-6',
    name: 'Vintage Leather Couple',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 3299,
    mrp: 6599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-7',
    name: 'Smart Couple Watch Set',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-8',
    name: 'Heart Design Couple',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 2799,
    mrp: 5599,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-9',
    name: 'Anniversary Special Set',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 4499,
    mrp: 8999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-10',
    name: 'Infinity Symbol Pair',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 3799,
    mrp: 7599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-11',
    name: 'Magnetic Couple Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 3599,
    mrp: 7199,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-12',
    name: 'Moonphase Couple Set',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-13',
    name: 'Engraved Name Couple',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 4299,
    mrp: 8599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-14',
    name: 'Ceramic Couple Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-15',
    name: 'Titanium Couple Set',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-16',
    name: 'Solar Powered Couple',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 5299,
    mrp: 10599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-17',
    name: 'Waterproof Couple Set',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 3899,
    mrp: 7799,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-18',
    name: 'Skeleton Dial Couple',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 6499,
    mrp: 12999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-19',
    name: 'Chronograph Couple Set',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 5799,
    mrp: 11599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },
  {
    id: 'couple-20',
    name: 'Limited Edition Couple',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 7499,
    mrp: 14999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'couple'
  },

  // Classic Watches
  {
    id: 'classic-1',
    name: 'Heritage Pocket Watch',
    description: 'Timeless pocket watch crafted with vintage aesthetics and modern reliability. Features intricate engravings, a protective case cover, and premium mechanical movement.',
    rating: 4.9,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-2',
    name: 'Vintage Roman Dial',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-3',
    name: 'Art Deco Masterpiece',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-4',
    name: 'Grandfather Clock Style',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-5',
    name: 'Victorian Era Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-6',
    name: 'Antique Gold Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-7',
    name: 'Mechanical Movement',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 4499,
    mrp: 8999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-8',
    name: 'Heirloom Collection',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 6499,
    mrp: 12999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-9',
    name: 'Baroque Style Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 8999,
    mrp: 17999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-10',
    name: 'Renaissance Timepiece',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 3799,
    mrp: 7599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-11',
    name: 'Colonial Era Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 5299,
    mrp: 10599,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-12',
    name: 'Grandfather Heritage',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 4799,
    mrp: 9599,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-13',
    name: 'Vintage Skeleton Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 7499,
    mrp: 14999,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-14',
    name: 'Antique Chain Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 3599,
    mrp: 7199,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-15',
    name: 'Museum Collection',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 9999,
    mrp: 19999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-16',
    name: 'Handcrafted Classic',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 4299,
    mrp: 8599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-17',
    name: 'Vintage Moonphase',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 8499,
    mrp: 16999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-18',
    name: 'Retro Chronometer',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 3999,
    mrp: 7999,
    images: [
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-19',
    name: 'Traditional Crafted',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 5799,
    mrp: 11599,
    images: [
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },
  {
    id: 'classic-20',
    name: 'Legacy Timekeeper',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg'
    ],
    category: 'classic'
  },

  // Party Wear Watches
  {
    id: 'party-1',
    name: 'Diamond Studded Luxury',
    description: 'Exquisite party wear watch adorned with genuine diamonds. Features a mother of pearl dial, 18K gold plating, and premium Swiss movement. Perfect for special occasions.',
    rating: 4.9,
    sellingPrice: 9999,
    mrp: 19999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-2',
    name: 'Crystal Bezel Glamour',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-3',
    name: 'Gold Plated Elegance',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 5999,
    mrp: 11999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-4',
    name: 'Cocktail Party Special',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 4999,
    mrp: 9999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-5',
    name: 'Sparkling Night Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 8999,
    mrp: 17999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-6',
    name: 'Gala Event Timepiece',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 6999,
    mrp: 13999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-7',
    name: 'Red Carpet Ready',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 7499,
    mrp: 14999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-8',
    name: 'Champagne Gold Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 5499,
    mrp: 10999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-9',
    name: 'Midnight Glamour',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 8499,
    mrp: 16999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-10',
    name: 'Festive Collection',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 4499,
    mrp: 8999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-11',
    name: 'Celebration Special',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 6499,
    mrp: 12999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-12',
    name: 'Dazzling Diamonds',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 9499,
    mrp: 18999,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-13',
    name: 'Luxury Evening Watch',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 7999,
    mrp: 15999,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-14',
    name: 'Glittering Gold',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 5299,
    mrp: 10599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-15',
    name: 'Premium Party Piece',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 8799,
    mrp: 17599,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-16',
    name: 'Shimmering Silver',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.7,
    sellingPrice: 4799,
    mrp: 9599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-17',
    name: 'Starlight Special',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 9299,
    mrp: 18599,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-18',
    name: 'Elegant Evening',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.6,
    sellingPrice: 5799,
    mrp: 11599,
    images: [
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-19',
    name: 'Glamorous Night',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.8,
    sellingPrice: 7299,
    mrp: 14599,
    images: [
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  },
  {
    id: 'party-20',
    name: 'VIP Collection',
    description: 'Ultra-lightweight carbon fiber watch with modern design. Features scratch-resistant case, chronograph function, and luminous hands. Perfect for sports and active lifestyles.',
    rating: 4.9,
    sellingPrice: 10999,
    mrp: 21999,
    images: [
      'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
      'https://images.pexels.com/photos/3264504/pexels-photo-3264504.jpeg',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
      'https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg'
    ],
    category: 'party-wear'
  }
];

export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};