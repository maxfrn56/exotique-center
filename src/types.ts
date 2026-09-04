export type Money = {
  amount: number;
  currency: "EUR";
};

export type ProductType = "epicerie" | "cosmetique";

export type Variant = {
  id: string;
  title: string;
  sku: string;
  price: Money;
  available: boolean;
  options: Record<string, string>;
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  productType: ProductType;
  collection: string;
  origin: string;
  region: string;
  description: string;
  usage: string;
  details: string[];
  images: string[];
  variants: Variant[];
};

export type PackLine = {
  productHandle: string;
  variantId: string;
  quantity: number;
};

export type Pack = {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  origin: string;
  servings: string;
  story: string;
  method: string[];
  note: string;
  image: string;
  lines: PackLine[];
};

export type CartLine = {
  key: string;
  variantId: string;
  productHandle: string;
  title: string;
  variantTitle: string;
  image: string;
  price: Money;
  quantity: number;
  packHandle?: string;
  packTitle?: string;
  packInstanceId?: string;
};
