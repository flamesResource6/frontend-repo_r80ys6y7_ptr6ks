export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} VoltEdge Charging Systems. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#support" className="hover:text-white">Support</a>
        </nav>
      </div>
    </footer>
  );
}
