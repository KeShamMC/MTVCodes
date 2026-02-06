
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  features: string[];
  isPopular?: boolean;
  tag?: string;
  secondaryPrice?: number;
  secondaryCurrency?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}