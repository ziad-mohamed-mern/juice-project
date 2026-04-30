"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Droplets, Info } from "lucide-react";
import Link from "next/link";

const categories = ["الكل", "حمضيات", "استوائي", "توتيات", "خلطات"];

const products = [
  { id: 1, name: "عصير البرتقال", category: "حمضيات", color: "from-orange-400 to-orange-600", price: "12 ر.س", nutrition: "فيتامين C، بوتاسيوم", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400" },
  { id: 2, name: "عصير المانجو", category: "استوائي", color: "from-yellow-400 to-yellow-600", price: "15 ر.س", nutrition: "ألياف، فيتامين A", img: "/images/mango_juice.jpg" },
  { id: 3, name: "عصير الفراولة", category: "توتيات", color: "from-red-400 to-red-600", price: "14 ر.س", nutrition: "مضادات أكسدة", img: "https://images.unsplash.com/photo-1591244234057-04022634e064?q=80&w=400" },
  { id: 4, name: "ليمون ونعناع", category: "حمضيات", color: "from-green-400 to-green-600", price: "10 ر.س", nutrition: "منعش، مطهر", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400" },
  { id: 5, name: "عصير الأناناس", category: "استوائي", color: "from-yellow-300 to-yellow-500", price: "13 ر.س", nutrition: "بروميلين، هضم", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=400" },
  { id: 6, name: "عصير الموز (مواسم)", category: "استوائي", color: "from-yellow-100 to-yellow-400", price: "12 ر.س", nutrition: "بوتاسيوم، طاقة", img: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=400" },
  { id: 7, name: "كوكتيل مواسم", category: "خلطات", color: "from-pink-400 to-purple-600", price: "18 ر.س", nutrition: "فيتامينات متنوعة", img: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?q=80&w=400" },
  { id: 8, name: "عصير الرمان", category: "توتيات", color: "from-red-700 to-red-900", price: "20 ر.س", nutrition: "صحة القلب", img: "/images/pomegranate_juice.jpg" },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProducts = activeCategory === "الكل" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
        <div className="space-y-2 text-center md:text-right">
          <h1 className="text-4xl font-bold font-tajawal">منتجاتنا الطازجة</h1>
          <p className="text-gray-600 dark:text-gray-400">اختر نكهتك المفضلة من تشكيلة مواسم الواسعة</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <div className="flex items-center gap-2 ml-4 text-gray-500">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-bold">تصفية:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat
                  ? "bg-brand-orange text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group bg-white dark:bg-gray-900 rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            >
              {/* Product Visual */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative mb-6">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                  {product.category}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold font-tajawal">{product.name}</h3>
                  <span className="text-brand-orange font-black">{product.price}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Info className="w-4 h-4" />
                  <span>{product.nutrition}</span>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="w-full py-3 rounded-2xl bg-gray-50 dark:bg-gray-800 font-bold text-center block hover:bg-brand-orange hover:text-white transition-all"
                >
                  التفاصيل
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
