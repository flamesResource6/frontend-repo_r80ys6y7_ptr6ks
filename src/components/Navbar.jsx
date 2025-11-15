import { useState } from 'react';
import { Menu, X, PlugZap, Bolt, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Technology', href: '#technology' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Support', href: '#support' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center text-white shadow-inner">
                <PlugZap size={20} />
              </div>
              <div className="leading-tight">
                <p className="text-white font-semibold tracking-wide">VoltEdge</p>
                <p className="text-xs text-white/60 -mt-0.5">EV Charging Systems</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="text-white/80 hover:text-white text-sm flex items-center gap-2">
                <Phone size={16} /> Contact
              </a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg transition">
                <Bolt size={16} /> Get a Quote
              </a>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block text-white/80 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
                <Bolt size={16} /> Get a Quote
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
