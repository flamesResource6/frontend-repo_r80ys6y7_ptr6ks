import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1220] relative">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_60%_at_50%_-10%,rgba(56,189,248,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_40%_at_110%_10%,rgba(59,130,246,0.12),transparent)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Features />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
