import React from "react";
import {
  HardHat,
  Music,
  TrendingUp,
  Activity,
  Briefcase,
  Wallet,
  ShoppingCart,
  Smartphone,
  Globe,
  Cpu,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Check,
  LucideProps
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  switch (name) {
    case "HardHat":
      return <HardHat {...props} />;
    case "Music":
      return <Music {...props} />;
    case "TrendingUp":
      return <TrendingUp {...props} />;
    case "Activity":
      return <Activity {...props} />;
    case "Briefcase":
      return <Briefcase {...props} />;
    case "Wallet":
      return <Wallet {...props} />;
    case "ShoppingCart":
      return <ShoppingCart {...props} />;
    case "Smartphone":
      return <Smartphone {...props} />;
    case "Globe":
      return <Globe {...props} />;
    case "Cpu":
      return <Cpu {...props} />;
    case "Menu":
      return <Menu {...props} />;
    case "X":
      return <X {...props} />;
    case "ArrowRight":
      return <ArrowRight {...props} />;
    case "ArrowUpRight":
      return <ArrowUpRight {...props} />;
    case "Mail":
      return <Mail {...props} />;
    case "Check":
      return <Check {...props} />;
    default:
      return <Globe {...props} />;
  }
}
export default DynamicIcon;

