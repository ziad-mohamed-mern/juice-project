"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { Droplets, Check, ArrowRight, Info, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

const products = [
  { id: 1, name: "عصير البرتقال", category: "حمضيات", color: "from-orange-400 to-orange-600", price: "12 ر.س", nutrition: { calories: "45 kcal", vitaminC: "120%", sugar: "9g", fiber: "2g" }, desc: "عصير برتقال طبيعي 100% معصور بعناية من أجود أنواع البرتقال الصيفي. يتميز بطعمه المنعش وفوائده الصحية العالية.", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800" },
  { id: 2, name: "عصير المانجو", category: "استوائي", color: "from-yellow-400 to-yellow-600", price: "15 ر.س", nutrition: { calories: "60 kcal", vitaminC: "80%", sugar: "14g", fiber: "3g" }, desc: "عصير مانجو فاخر يتميز بقوامه الكثيف وطعمه الغني. مختار من أفضل المزارع الاستوائية لضمان الجودة.", img: "/images/mango_juice.jpg" },
  { id: 3, name: "عصير الفراولة", category: "توتيات", color: "from-red-400 to-red-600", price: "14 ر.س", nutrition: { calories: "32 kcal", vitaminC: "95%", sugar: "7g", fiber: "2g" }, desc: "عصير فراولة طازج يجمع بين الحلاوة والحموضة الخفيفة. غني بمضادات الأكسدة ومنعش للقلب.", img: "https://images.unsplash.com/photo-1591244234057-04022634e064?q=80&w=800" },
  { id: 4, name: "ليمون ونعناع", category: "حمضيات", color: "from-green-400 to-green-600", price: "10 ر.س", nutrition: { calories: "25 kcal", vitaminC: "40%", sugar: "5g", fiber: "1g" }, desc: "المزيج المثالي للانتعاش في أيام الصيف الحارة. ليمون طازج مع أوراق النعناع المقطوفة يدوياً.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800" },
];

export default function ProductDetail({ params }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const product = products.find(p => p.id === productId) || products[0];

  return (
    <div className="container mx-auto px-6 py-12">
      <Link href="/products" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-orange mb-12 group">
        <ArrowRight className="w-5 h-5 rotate-180 group-hover:translate-x-2 transition-transform" />
        العودة للمنتجات
      </Link>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Product Image Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square rounded-[4rem] relative flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20"
        >
          <img 
            src={product.img} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <span className="px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold">{product.category}</span>
            <h1 className="text-5xl font-black font-tajawal mt-4 mb-2">{product.name}</h1>
            <p className="text-3xl font-black text-brand-orange">{product.price}</p>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {product.desc}
          </p>

          {/* Nutrition Facts */}
          <div className="p-8 bg-gray-50 dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-brand-orange" />
              القيم الغذائية (لكل 100 مل)
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "السعرات الحرارية", value: product.nutrition.calories },
                { label: "فيتامين C", value: product.nutrition.vitaminC },
                { label: "السكريات", value: product.nutrition.sugar },
                { label: "الألياف", value: product.nutrition.fiber },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
                  <span className="text-gray-500">{item.label}</span>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <ShieldCheck />, label: "بدون سكر مضاف" },
              { icon: <Droplets />, label: "طبيعي 100%" },
              { icon: <Zap />, label: "طاقة منعشة" },
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-center p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="text-brand-orange">{f.icon}</div>
                <span className="text-xs font-bold">{f.label}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-5 bg-brand-orange text-white rounded-[2rem] font-bold text-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
            طلب المنتج عبر واتساب
            <Check className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
