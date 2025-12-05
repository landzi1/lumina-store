import HeroSection from "@/components/hero-section";
import ProductGrid from "@/components/product-grid";
import Navbar from "@/components/ui/navbar";
import CartSidebar from "@/components/cart-sidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Navbar />
      <CartSidebar />
      <HeroSection />
      
      <div className="relative z-20 bg-white">
        <div className="py-24 text-center px-4">
          <p className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
            "Muzyka to nie tylko dźwięk. To architektura ciszy."
          </p>
        </div>
        <ProductGrid />
      </div>

      <footer className="py-12 border-t border-gray-100 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Lumina Audio. Designed by Next.js Architect.</p>
      </footer>
    </main>
  );
}
