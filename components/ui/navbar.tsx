"use client";

import Link from "next/link";
import { ShoppingBag, Menu } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { motion } from "framer-motion";

export default function Navbar() {
  const { items, toggleCart } = useCartStore();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-white/20"
    >
      <div className="flex items-center gap-4">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
          Lumina.
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <Link href="/" className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors">
          Produkty
        </Link>
        <Link href="/about" className="hidden md:block text-sm font-medium text-gray-600 hover:text-black transition-colors">
          Filozofia
        </Link>
        
        <button 
          onClick={toggleCart} 
          className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ShoppingBag className="w-5 h-5" />
          {itemCount > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-black rounded-full"
            >
              {itemCount}
            </motion.span>
          )}
        </button>
      </div>
    </motion.nav>
  );
}
