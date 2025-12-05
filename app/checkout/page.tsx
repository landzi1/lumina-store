"use client";

import { useCartStore } from "@/lib/store";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";
import Navbar from "@/components/ui/navbar";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Symulacja opóźnienia API płatności
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-md w-full"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Dziękujemy!</h1>
          <p className="text-gray-500 mb-8">Twoje zamówienie zostało opłacone i jest przygotowywane do wysyłki.</p>
          <Link href="/" className="inline-block px-8 py-3 bg-black text-white rounded-full font-medium">
            Wróć do sklepu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-12">Finalizacja Zamówienia</h1>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formularz */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                <h2 className="text-xl font-semibold mb-4">Dane Dostawy</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="Imię" className="w-full p-3 bg-gray-50 rounded-xl border border-transparent focus:border-black focus:ring-0 outline-none transition-all" />
                  <input required type="text" placeholder="Nazwisko" className="w-full p-3 bg-gray-50 rounded-xl border border-transparent focus:border-black focus:ring-0 outline-none transition-all" />
                </div>
                <input required type="email" placeholder="Email" className="w-full p-3 bg-gray-50 rounded-xl border border-transparent focus:border-black focus:ring-0 outline-none transition-all" />
                <input required type="text" placeholder="Adres" className="w-full p-3 bg-gray-50 rounded-xl border border-transparent focus:border-black focus:ring-0 outline-none transition-all" />
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm space-y-4">
                <h2 className="text-xl font-semibold mb-4">Płatność</h2>
                <div className="p-4 border rounded-xl flex items-center gap-3 cursor-pointer hover:border-black transition-colors">
                  <div className="w-4 h-4 rounded-full bg-black" />
                  <span>Karta Płatnicza (Stripe Mock)</span>
                </div>
                <input required type="text" placeholder="Numer Karty" className="w-full p-3 bg-gray-50 rounded-xl border border-transparent focus:border-black focus:ring-0 outline-none transition-all" />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="MM/YY" className="w-full p-3 bg-gray-50 rounded-xl border border-transparent focus:border-black focus:ring-0 outline-none transition-all" />
                  <input required type="text" placeholder="CVC" className="w-full p-3 bg-gray-50 rounded-xl border border-transparent focus:border-black focus:ring-0 outline-none transition-all" />
                </div>
              </div>

              <button 
                disabled={items.length === 0 || loading}
                type="submit" 
                className="w-full py-4 bg-black text-white text-lg font-medium rounded-full hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {loading && <Loader2 className="animate-spin" />}
                {loading ? "Przetwarzanie..." : `Zapłać ${total()} PLN`}
              </button>
            </form>
          </motion.div>

          {/* Podsumowanie */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl shadow-sm h-fit sticky top-32"
          >
            <h2 className="text-xl font-semibold mb-6">Podsumowanie</h2>
            <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Ilość: {item.quantity}</p>
                  </div>
                  <p>{item.price * item.quantity} PLN</p>
                </div>
              ))}
              {items.length === 0 && <p className="text-gray-400">Koszyk jest pusty</p>}
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-xl">
              <span>Suma</span>
              <span>{total()} PLN</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
