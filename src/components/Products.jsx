import { Battery, Cable, CreditCard, Plug, Wrench, Zap } from 'lucide-react';

const products = [
  {
    name: 'VX-60',
    power: '60 kW',
    desc: 'Compact DC fast charger ideal for retail and depot applications with smart queuing.',
    highlights: ['Dual CCS/NACS', 'OCPP 2.0.1', 'IP65 Outdoor'],
  },
  {
    name: 'VX-180',
    power: '180 kW',
    desc: 'High‑throughput modular charger with load sharing for sites with multiple dispensers.',
    highlights: ['Dynamic Power', 'RFID + NFC', '7" Display'],
  },
  {
    name: 'VX-350',
    power: '350 kW',
    desc: 'Ultra‑fast highway charger delivering long‑range in minutes with liquid‑cooled cables.',
    highlights: ['Liquid‑cooled', 'PCI‑DSS Payments', 'ADA Friendly'],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Product lineup</h2>
            <p className="mt-3 text-white/70 max-w-2xl">From compact to ultra‑fast, our chargers are engineered to meet any site and duty cycle.</p>
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
            Request pricing
          </a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                  <p className="text-cyan-300 font-medium">{p.power}</p>
                </div>
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/80 to-blue-600/80 grid place-items-center text-white shadow">
                  <Zap size={18} />
                </div>
              </div>
              <p className="mt-3 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.highlights.map((h) => (
                  <span key={h} className="text-xs text-white/80 border border-white/15 rounded-full px-2.5 py-1 bg-white/5">{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
