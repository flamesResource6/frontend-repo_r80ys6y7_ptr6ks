import { ShieldCheck, Gauge, BatteryCharging, Cpu, Cloud, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Industrial Reliability',
    desc: 'Active thermal management, IP65 enclosures, and 24/7 remote monitoring for maximum uptime.'
  },
  {
    icon: Gauge,
    title: 'Ultra‑Fast Power',
    desc: 'Modular 120–350 kW DC fast charging with dynamic load balancing across multiple dispensers.'
  },
  {
    icon: BatteryCharging,
    title: 'Universal Compatibility',
    desc: 'Support for CCS, NACS, and CHAdeMO with automatic handshake and billing integrations.'
  },
  {
    icon: Cpu,
    title: 'Smart Energy',
    desc: 'Edge AI optimizes sessions, reduces peak demand, and integrates with on-site storage and solar.'
  },
  {
    icon: Cloud,
    title: 'Cloud Platform',
    desc: 'Over‑the‑air updates, analytics dashboards, and OCPP 2.0.1 compliant network management.'
  },
  {
    icon: Sparkles,
    title: 'Premium Experience',
    desc: '7" sunlight‑readable displays, RFID/NFC payment, and ADA‑optimized cable management.'
  },
];

export default function Features() {
  return (
    <section id="technology" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_20%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for scale</h2>
          <p className="mt-3 text-white/70">Hardware, firmware, and cloud working as one. Designed for fleets, retail, and public charging networks.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-6 hover:bg-white/[0.1] transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-500/80 to-blue-600/80 grid place-items-center text-white shadow">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
