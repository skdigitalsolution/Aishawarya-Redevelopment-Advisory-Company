import {
  Building2,
  Users,
  FileText,
  Layers,
  ClipboardList,
  Settings,
  MapPin,
  FileCheck,
  Scale,
  ChartNoAxesCombined,
  Handshake,
  Coins,
  HardHat,
  ShieldCheck,
  KeyRound,
  Gem,
  Clock,
  Headphones,
} from 'lucide-react';
const icons = {
  Building2,
  Users,
  FileText,
  Layers,
  ClipboardList,
  Settings,
  MapPin,
  FileCheck,
  Scale,
  ChartNoAxesCombined,
  Handshake,
  Coins,
  HardHat,
  ShieldCheck,
  KeyRound,
  Gem,
  Clock,
  Headphones,
};
/** @param {{name: string, className?: string}} props Data-driven decorative icon. */
export default function Icon({ name, className = 'size-8 text-gold' }) {
  const Component = icons[name] ?? Building2;
  return <Component className={className} strokeWidth={1.5} aria-hidden="true" />;
}
