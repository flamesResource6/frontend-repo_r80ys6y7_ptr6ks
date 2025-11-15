import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_0%,rgba(34,211,238,0.08),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-white/[0.06] p-10 backdrop-blur-md">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Plan your charging site with experts</h3>
          <p className="mt-3 text-white/70">Get a tailored layout, utility assessment, and ROI model. Our team will get back within 24 hours.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-2 gap-3">
            <input required placeholder="Work email" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-400" />
            <input required placeholder="Company" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-400" />
            <input placeholder="City, State" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-cyan-400 sm:col-span-2" />
            <button className="sm:col-span-2 inline-flex justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition">Request a demo</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
