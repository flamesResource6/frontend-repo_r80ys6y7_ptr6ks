import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_-10%,rgba(56,189,248,0.35),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_120%_20%,rgba(59,130,246,0.25),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Next‑gen DC fast charging
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Powering the future of electric mobility
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
              Industrial-grade chargers engineered for reliability, speed, and intelligent energy management. Built for fleets, retail, and highways.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg transition">
                Get a demo
              </a>
              <a href="#products" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur-md hover:bg-white/20 transition">
                Explore products
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
              <div>
                <p className="font-semibold text-white">350 kW</p>
                <p>Peak power</p>
              </div>
              <div>
                <p className="font-semibold text-white">99.5%</p>
                <p>Uptime SLA</p>
              </div>
              <div>
                <p className="font-semibold text-white">OCPP</p>
                <p>2.0.1 ready</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] xl:h-[700px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-black/20 backdrop-blur-sm">
            <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
