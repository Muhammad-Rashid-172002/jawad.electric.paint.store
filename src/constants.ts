import { Category, Product } from './types';

export const STORE_NAME = "Jawad Electric, Paint & Sanitary Store";
export const WHATSAPP_NUMBER = "+923119524009";
export const PHONE_NUMBERS = ["+92 311 9524009", "+92 311 3636243"];
export const EMAIL = "jawad.electric.pints.sanitary@gmail.com";
export const MAP_URL = "https://maps.app.goo.gl/7gKUfnZh62RpFynP7";

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Electrical Items',
    slug: 'electrical',
    description: 'High-quality electrical components, wiring, and lighting solutions.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUJqkK88U0EsO4snhe6zFZEzXvu9x444Tlw&s=80&w=800',
    icon: 'Zap'
  },
  {
    id: '2',
    name: 'Paint Materials',
    slug: 'paint',
    description: 'Premium wall paints, primers, and professional painting tools.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFY_8FG0c3AXEgFCCqVDYM7oZzNPMBU6hnfA&s=80&w=800',
    icon: 'Palette'
  },
  {
    id: '3',
    name: 'Sanitary Products',
    slug: 'sanitary',
    description: 'Durable plumbing pipes, fittings, and bathroom accessories.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6SDuWRTCDSL-UtjNF-3tFRpt-Ml2GcpwTA&s=80&w=800',
    icon: 'Droplets'
  }
];

export const PRODUCTS: Product[] = [
  // Electrical
  { id: 'e1', name: 'Ceiling Fans', category: 'electrical', description: 'Energy-efficient ceiling fans for optimal airflow.', image: 'https://images.unsplash.com/photo-1626245914565-98495094924c?auto=format&fit=crop&q=80&w=400' },
  { id: 'e2', name: 'Electric Wires', category: 'electrical', description: 'High-conductivity copper wires for safe installations.', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=400' },
  { id: 'e3', name: 'Switch Boards', category: 'electrical', description: 'Modern and durable switch board panels.', image: 'https://images.unsplash.com/photo-1558444479-c8f010524782?auto=format&fit=crop&q=80&w=400' },
  { id: 'e4', name: 'Electric Buttons', category: 'electrical', description: 'Premium quality switches and buttons.', image: 'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=400' },
  { id: 'e5', name: 'LED Bulbs', category: 'electrical', description: 'Long-lasting and bright LED lighting solutions.', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&q=80&w=400' },
  { id: 'e6', name: 'Tube Lights', category: 'electrical', description: 'Efficient tube lights for commercial and home use.', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=400' },
  { id: 'e7', name: 'Extension Boards', category: 'electrical', description: 'Multi-socket extension boards with surge protection.', image: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&q=80&w=400' },
  { id: 'e8', name: 'Electric Cables', category: 'electrical', description: 'Heavy-duty cables for industrial applications.', image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=400' },
  { id: 'e9', name: 'Power Switches', category: 'electrical', description: 'High-load power switches for appliances.', image: 'https://images.unsplash.com/photo-1558002038-103792e17734?auto=format&fit=crop&q=80&w=400' },
  { id: 'e10', name: 'Sockets', category: 'electrical', description: 'Universal sockets for all types of plugs.', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=400' },

  // Paint
  { id: 'p1', name: 'Wall Paint', category: 'paint', description: 'Vibrant and durable wall paints for interiors.', image: 'https://images.unsplash.com/photo-1562591176-32930999915e?auto=format&fit=crop&q=80&w=400' },
  { id: 'p2', name: 'Decorative Paint', category: 'paint', description: 'Specialized paints for decorative finishes.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },
  { id: 'p3', name: 'Primer', category: 'paint', description: 'High-adhesion primers for smooth paint application.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=400' },
  { id: 'p4', name: 'Wall Putty', category: 'paint', description: 'Fine wall putty for filling cracks and holes.', image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=400' },
  { id: 'p5', name: 'Waterproof Paint', category: 'paint', description: 'Exterior paints with superior waterproofing.', image: 'https://images.unsplash.com/photo-1562591176-32930999915e?auto=format&fit=crop&q=80&w=400' },
  { id: 'p6', name: 'Spray Paint', category: 'paint', description: 'Quick-drying spray paints for various surfaces.', image: 'https://images.unsplash.com/photo-1541690161184-75cbc0386cd6?auto=format&fit=crop&q=80&w=400' },
  { id: 'p7', name: 'Paint Brushes', category: 'paint', description: 'Professional grade brushes for all paint types.', image: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=400' },
  { id: 'p8', name: 'Paint Rollers', category: 'paint', description: 'High-coverage rollers for large wall areas.', image: 'https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=400' },
  { id: 'p9', name: 'Paint Trays', category: 'paint', description: 'Durable trays for efficient paint loading.', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400' },

  // Sanitary
  { id: 's1', name: 'PVC Pipes', category: 'sanitary', description: 'High-pressure PVC pipes for plumbing.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400' },
  { id: 's2', name: 'Metal Pipes', category: 'sanitary', description: 'Galvanized metal pipes for heavy-duty use.', image: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=400' },
  { id: 's3', name: 'Pipe Fittings', category: 'sanitary', description: 'Various elbows, tees, and connectors.', image: 'https://images.unsplash.com/photo-1585704032915-c3400ca1f963?auto=format&fit=crop&q=80&w=400' },
  { id: 's4', name: 'Water Pipes', category: 'sanitary', description: 'Flexible and rigid water supply pipes.', image: 'https://images.unsplash.com/photo-1590486803833-ffc6f78d284b?auto=format&fit=crop&q=80&w=400' },
  { id: 's5', name: 'Valves', category: 'sanitary', description: 'Precision control valves for water flow.', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=400' },
  { id: 's6', name: 'Bathroom Fittings', category: 'sanitary', description: 'Modern bathroom sets and accessories.', image: 'https://images.unsplash.com/photo-1620626011761-9963d7b59a7a?auto=format&fit=crop&q=80&w=400' },
  { id: 's7', name: 'Taps', category: 'sanitary', description: 'Designer taps for kitchens and bathrooms.', image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=400' },
  { id: 's8', name: 'Plumbing Accessories', category: 'sanitary', description: 'Essential tools and parts for plumbing.', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400' },
    { id: 's8', name: 'Plumbing Accessories', category: 'sanitary', description: 'Essential tools and parts for plumbing.', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400' },

];
