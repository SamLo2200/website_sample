export interface HotBrand {
  name: string;
  logoUrl: string;
  url: string;
}

export interface BrandItem {
  name: string;
  url: string;
}

export type GroupedBrands = { [key: string]: BrandItem[] };

export const allBrands: BrandItem[] = [
  { name: "Audemars Piguet", url: "/brands/audemars-piguet" },
  { name: "Cartier", url: "/brands/cartier" },
  { name: "Casio", url: "/brands/casio" },
  { name: "Jacob & Co.", url: "/brands/jacob-co" },
  { name: "Jaeger LeCoultre", url: "/brands/jlc" },
  { name: "Omega", url: "/brands/omega" },
  { name: "Rolex", url: "/brands/rolex" },
  { name: "Richard Mille", url: "/brands/richard-mille" },
  { name: "Tudor", url: "/brands/tudor" },
  { name: "Vacheron Constantin", url: "/brands/vacheron-constantin" },
];

export const hotBrands: HotBrand[] = [
  {
    name: "Omega",
    logoUrl: "/logos/omega.png",
    url: "/brands/omega",
  },
  {
    name: "Vacheron Constantin",
    logoUrl: "/logos/vacheron.png",
    url: "/brands/vacheron-constantin",
  },
  {
    name: "Longines",
    logoUrl: "/logos/longines.png",
    url: "/brands/longines",
  },
  {
    name: "Jaeger-LeCoultre",
    logoUrl: "/logos/jaeger.png",
    url: "/brands/jaeger-lecoultre",
  },
  {
    name: "IWC",
    logoUrl: "/logos/iwc.png",
    url: "/brands/iwc",
  },
  {
    name: "Hublot",
    logoUrl: "/logos/hublot.png",
    url: "/brands/hublot",
  },
  {
    name: "Cartier",
    logoUrl: "/logos/cartier.png",
    url: "/brands/cartier",
  },
];
