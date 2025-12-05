"use client";

import { products } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductGrid() {
  const { addItem } = useCartStore();

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tighter mb-16 text-center">Nasza Kolekcja</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-square bg-gray-50 rounded-3xl overflow-hidden mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <p className="text-gray-500 mt-1">{product.tagline}</p>
                </div>
                <span className="text-lg font-medium">{product.price} PLN</span>
              </div>
              <button
                onClick={() => addItem(product)}
                className="mt-6 w-full py-3 border border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors"
              >
                Dodaj do koszyka
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
