import x1CarbonImg from "@/assets/x1-carbon-product.jpg";
import p1sImg from "@/assets/p1s-product.jpg";
import a1MiniImg from "@/assets/a1-mini-product.jpg";

export interface Printer {
  id: number;
  name: string;
  tagline: string;
  price: number;
  image: string;
  features: string[];
  badge?: string;
  description: string;
  specs: {
    buildVolume: string;
    printSpeed: string;
    layerHeight: string;
    connectivity: string;
    materials: string[];
  };
}

export const printers: Printer[] = [
  {
    id: 1,
    name: "X1 Carbon",
    tagline: "The ultimate speed demon",
    price: 1249,
    image: x1CarbonImg,
    features: ["CoreXY Motion", "LiDAR Flow Calibration", "Multi-Color AMS", "AI Camera"],
    badge: "Flagship",
    description: "The X1 Carbon represents the pinnacle of desktop 3D printing technology. With its CoreXY motion system and active chamber heating, it delivers professional-grade prints at unprecedented speeds.",
    specs: {
      buildVolume: "256 × 256 × 256 mm³",
      printSpeed: "Up to 500 mm/s",
      layerHeight: "0.05 - 0.35 mm",
      connectivity: "Wi-Fi, LAN, USB",
      materials: ["PLA", "PETG", "ABS", "ASA", "TPU", "PA", "PC", "Carbon Fiber"],
    },
  },
  {
    id: 2,
    name: "P1S",
    tagline: "Pro precision meets value",
    price: 649,
    image: p1sImg,
    features: ["Enclosed Design", "Modular Upgrades", "Fast Printing", "Multi-Material Ready"],
    description: "The P1S brings professional-grade features to an accessible price point. With its fully enclosed design and upgrade path to the X1 series, it's the perfect entry into high-speed 3D printing.",
    specs: {
      buildVolume: "256 × 256 × 256 mm³",
      printSpeed: "Up to 500 mm/s",
      layerHeight: "0.05 - 0.35 mm",
      connectivity: "Wi-Fi, LAN, USB",
      materials: ["PLA", "PETG", "ABS", "ASA", "TPU", "PA"],
    },
  },
  {
    id: 3,
    name: "A1 Mini",
    tagline: "Compact powerhouse",
    price: 299,
    image: a1MiniImg,
    features: ["Compact Size", "Easy Setup", "Reliable", "Perfect for Beginners"],
    badge: "Best Seller",
    description: "Don't let its size fool you. The A1 Mini packs impressive performance into a compact footprint, making it ideal for hobbyists, educators, and anyone with limited desk space.",
    specs: {
      buildVolume: "180 × 180 × 180 mm³",
      printSpeed: "Up to 300 mm/s",
      layerHeight: "0.08 - 0.28 mm",
      connectivity: "Wi-Fi, USB",
      materials: ["PLA", "PETG", "TPU"],
    },
  },
];
