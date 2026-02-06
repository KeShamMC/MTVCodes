
import { PricingPlan, Feature, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Minecraft', path: '/minecraft' },
  { label: 'VPS Hosting', path: '/vps' },
  { label: 'Web Hosting', path: '/web' },
  { label: 'Discord Bot', path: '/discord' },
  { label: 'Support', path: '/support' },
];

export const MINECRAFT_PLANS: PricingPlan[] = [
  {
    id: 'mc-basic',
    name: 'Grass Block',
    price: 90,
    currency: '₹',
    billingCycle: '/mo',
    features: ['2GB DDR4 RAM', '2 vCores CPU', '20GB NVMe SSD', 'DDoS Protection', 'Instant Setup', 'Mumbai, India'],
  },
  {
    id: 'mc-pro',
    name: 'Iron Golem',
    price: 350,
    currency: '₹',
    billingCycle: '/mo',
    isPopular: true,
    tag: 'Best Value',
    features: ['8GB DDR4 RAM', '4 vCores CPU', '60GB NVMe SSD', 'Premium Anti-DDoS', 'Dedicated IP Available', 'Mumbai, India'],
  },
  {
    id: 'mc-ultra',
    name: 'Netherite',
    price: 850,
    currency: '₹',
    billingCycle: '/mo',
    features: ['16GB DDR4 RAM', '8 vCores CPU', '150GB NVMe SSD', 'Priority Support', 'Daily Backups', 'Mumbai, India'],
  },
];

export const DISCORD_PLANS: PricingPlan[] = [
  {
    id: 'ds-starter',
    name: 'Starter',
    price: 59,
    currency: '₹',
    billingCycle: '/mo',
    features: ['100% CPU Core', '1GB RAM', '5GB NVMe SSD', 'Node.js / Python Ready', 'DDoS Protection', 'Instant Setup'],
  },
  {
    id: 'ds-pro',
    name: 'Pro',
    price: 99,
    currency: '₹',
    billingCycle: '/mo',
    isPopular: true,
    tag: 'Most Popular',
    features: ['200% CPU Core', '2GB RAM', '10GB NVMe SSD', 'Free Database', 'Premium Support', 'Node.js / Python Support'],
  },
  {
    id: 'ds-ultimate',
    name: 'Ultimate',
    price: 199,
    currency: '₹',
    billingCycle: '/mo',
    features: ['400% CPU Core', '4GB RAM', '25GB NVMe SSD', 'Unlimited Databases', 'Priority Support', 'Full Python/Node Env'],
  },
];

export const DISCORD_AMD_PLANS: PricingPlan[] = [
  {
    id: 'ds-amd-starter',
    name: 'AMD Starter',
    price: 59,
    currency: '₹',
    billingCycle: '/mo',
    features: ['Ryzen 9 5950X', '1GB RAM', '5GB NVMe SSD', 'High Single Core', 'Pterodactyl Panel', 'Python/Node Optimized'],
  },
  {
    id: 'ds-amd-pro',
    name: 'AMD Pro',
    price: 99,
    currency: '₹',
    billingCycle: '/mo',
    isPopular: true,
    tag: 'Best for Large Bots',
    features: ['Ryzen 9 5950X', '2GB RAM', '10GB NVMe SSD', 'High Single Core', '24/7 Monitoring', 'Node.js/Python 3.x'],
  },
  {
    id: 'ds-amd-ultimate',
    name: 'AMD Ultimate',
    price: 199,
    currency: '₹',
    billingCycle: '/mo',
    features: ['Ryzen 9 7950X', '4GB RAM', '25GB NVMe SSD', 'Top-Tier Performance', 'SLA Guaranteed', 'Pro Developer Env'],
  },
];

export const MINECRAFT_BUDGET_PLANS: PricingPlan[] = [
  {
    id: 'mc-budget-basic',
    name: 'Basic Plan',
    price: 49,
    currency: '₹',
    secondaryPrice: 165,
    secondaryCurrency: '₨',
    billingCycle: '/mo',
    features: ['2 GB RAM', '4 GB NVMe SSD', '100% CPU', '1 Free Database', '1 Free Backup', '🇮🇳 Node', 'DDoS Protected'],
  },
  {
    id: 'mc-budget-stone',
    name: 'Stone Plan',
    price: 99,
    currency: '₹',
    secondaryPrice: 330,
    secondaryCurrency: '₨',
    billingCycle: '/mo',
    isPopular: true,
    tag: 'Starter Choice',
    features: ['4 GB RAM', '8 GB NVMe SSD', '200% CPU', '1 Free Database', '2 Free Backups', '🇮🇳 Node', 'DDoS Protected'],
  },
  {
    id: 'mc-budget-diamond',
    name: 'Diamond Plan',
    price: 299,
    currency: '₹',
    secondaryPrice: 1000,
    secondaryCurrency: '₨',
    billingCycle: '/mo',
    isPopular: true,
    tag: 'Highly Recommended',
    features: ['12 GB RAM', '24 GB NVMe SSD', '400% CPU', '1 Free Database', '6 Free Backups', '🇮🇳 Node', 'DDoS Protected'],
  },
];

export const XEON_V2_PLANS: PricingPlan[] = [
  {
    id: 'v2-4gb',
    name: 'VPS 4GB',
    price: 199,
    currency: '₹',
    billingCycle: '/mo',
    features: ['Intel Xeon E5-2690 / 2680', '2 vCore Cores', '4GB DDR3 RAM', '25GB SATA SSD', '1 IPv4 Address', 'Full Root Access', '🛡 DDoS Protection'],
  },
  {
    id: 'v2-8gb',
    name: 'VPS 8GB',
    price: 299,
    currency: '₹',
    billingCycle: '/mo',
    features: ['Intel Xeon E5-2690 / 2680', '4 vCore Cores', '8GB DDR3 RAM', '50GB SATA SSD', '1 IPv4 Address', 'Full Root Access', '🛡 DDoS Protection'],
  },
  {
    id: 'v2-16gb',
    name: 'VPS 16GB',
    price: 499,
    currency: '₹',
    billingCycle: '/mo',
    isPopular: true,
    features: ['Intel Xeon E5-2690 / 2680', '4 vCore Cores', '16GB DDR3 RAM', '80GB SATA SSD', '1 IPv4 Address', 'Full Root Access', '🛡 DDoS Protection'],
  },
];

export const XEON_PLATINUM_PLANS: PricingPlan[] = [
  {
    id: 'platinum-4gb',
    name: 'VPS 4GB',
    price: 499,
    currency: '₹',
    billingCycle: '/mo',
    features: ['Intel Xeon Platinum 8160 / 8168', '2 vCore Cores', '4GB DDR4 RAM', '25GB NVMe SSD', '1 IPv4 Address', 'Full Root Access', '🛡 DDoS Protection'],
  },
  {
    id: 'platinum-8gb',
    name: 'VPS 8GB',
    price: 599,
    currency: '₹',
    billingCycle: '/mo',
    features: ['Intel Xeon Platinum 8160 / 8168', '4 vCore Cores', '8GB DDR4 RAM', '50GB NVMe SSD', '1 IPv4 Address', 'Full Root Access', '🛡 DDoS Protection'],
  },
  {
    id: 'platinum-16gb',
    name: 'VPS 16GB',
    price: 999,
    currency: '₹',
    billingCycle: '/mo',
    isPopular: true,
    features: ['Intel Xeon Platinum 8160 / 8168', '4 vCore Cores', '16GB DDR4 RAM', '80GB NVMe SSD', '1 IPv4 Address', 'Full Root Access', '🛡 DDoS Protection'],
  },
  {
    id: 'platinum-32gb',
    name: 'VPS 32GB',
    price: 1499,
    currency: '₹',
    billingCycle: '/mo',
    features: ['Intel Xeon Platinum 8160 / 8168', '8 vCore Cores', '32GB DDR4 RAM', '128GB NVMe SSD', '1 IPv4 Address', 'Full Root Access', '🛡 DDoS Protection'],
  },
  {
    id: 'platinum-64gb',
    name: 'VPS 64GB',
    price: 2199,
    currency: '₹',
    billingCycle: '/mo',
    features: ['Intel Xeon Platinum 8160 / 8168', '16 vCore Cores', '64GB DDR4 RAM', '256GB NVMe SSD', '1 IPv4 Address', 'Full Root Access', '🛡 DDoS Protection'],
  },
];

export const MAIN_FEATURES: Feature[] = [
  {
    title: 'Enterprise Hardware',
    description: 'We use the latest AMD Ryzen™ and Intel® Xeon™ processors paired with lightning-fast NVMe SSDs.',
    icon: 'fa-solid fa-microchip',
  },
  {
    title: 'Low Latency',
    description: 'Our servers are located in Tier IV data centers in Mumbai, providing <20ms pings across India.',
    icon: 'fa-solid fa-bolt',
  },
  {
    title: 'DDoS Protection',
    description: 'Every server includes robust multi-layer DDoS protection to keep your game or site online 24/7.',
    icon: 'fa-solid fa-shield-halved',
  },
  {
    title: 'Instant Delivery',
    description: 'Orders are processed automatically. Your server is deployed and ready in seconds after payment.',
    icon: 'fa-solid fa-rocket',
  },
  {
    title: 'Friendly Support',
    description: 'Our team of experts is available 24/7 to help you with technical issues or configuration.',
    icon: 'fa-solid fa-headset',
  },
  {
    title: '99.9% Uptime',
    description: 'We guarantee high availability for all services with a robust SLA and redundant infrastructure.',
    icon: 'fa-solid fa-check-to-slot',
  },
];
