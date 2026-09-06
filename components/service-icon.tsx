import {
  House,
  Factory,
  Bot,
  Clapperboard,
  Wrench,
  MapPin,
  Gift,
  Zap,
  Tag,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

const map: Record<string, LucideIcon> = {
  house: House,
  factory: Factory,
  bot: Bot,
  clapperboard: Clapperboard,
  wrench: Wrench,
  'map-pin': MapPin,
  gift: Gift,
  zap: Zap,
  tag: Tag,
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
}

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Sparkles
  return <Icon className={className} aria-hidden />
}
