"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Zap, Star, Droplets } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-black font-tajawal leading-tight">
              نقدم لك <span className="text-brand-orange">نضارة الطبيعة</span> في كل رشفة
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              في مصنع مواسم، نختار أجود أنواع الفاكهة لنقدم لك عصائر طبيعية 100% بدون مواد حافظة، لنضمن لك تجربة صحية ومنعشة كل يوم.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
              >
                تصفح المنتجات
                <ArrowRight className="w-5 h-5 rotate-180" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-full font-bold text-lg hover:shadow-lg transition-all"
              >
                تواصل معنا
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Real Juice Images */}
            <div className="relative w-72 h-[450px] rounded-[3rem] shadow-2xl overflow-hidden border-4 border-white/20 animate-float z-20">
              <img 
                src="https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=800" 
                alt="Orange Juice" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-2xl font-bold font-tajawal">برتقال مواسم</span>
                <span className="text-sm opacity-80">طبيعي 100%</span>
              </div>
            </div>
            
            <div className="absolute -right-12 top-20 w-56 h-72 rounded-[2rem] shadow-xl overflow-hidden border-2 border-white/10 scale-90 -rotate-6 z-10">
              <img 
                src="https://images.unsplash.com/photo-1523154033640-4c58c3e08471?q=80&w=600" 
                alt="Green Juice" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -left-12 top-20 w-56 h-72 rounded-[2rem] shadow-xl overflow-hidden border-2 border-white/10 scale-90 rotate-6 z-10">
              <img 
                src="https://images.unsplash.com/photo-1591244234057-04022634e064?q=80&w=600" 
                alt="Strawberry Juice" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold font-tajawal">لماذا تختار مواسم؟</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: <Leaf className="w-10 h-10 text-brand-green" />,
              title: "طبيعي 100%",
              desc: "نستخدم فواكه طازجة ومنتقاة بعناية مباشرة من المزارع."
            },
            {
              icon: <ShieldCheck className="w-10 h-10 text-brand-orange" />,
              title: "بدون مواد حافظة",
              desc: "عصائرنا نقية تماماً، نضمن لك صحة أفضل لك ولعائلتك."
            },
            {
              icon: <Zap className="w-10 h-10 text-brand-yellow" />,
              title: "جودة مضمونة",
              desc: "نطبق أعلى معايير السلامة والجودة العالمية في التصنيع."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 hover:shadow-2xl transition-all group"
            >
              <div className="mb-6 p-4 bg-white dark:bg-gray-800 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Preview Grid */}
      <section className="bg-gray-50 dark:bg-black/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-tajawal">أكثر المنتجات طلباً</h2>
              <p className="text-gray-600 dark:text-gray-400">اكتشف مجموعتنا المختارة من العصائر الطازجة</p>
            </div>
            <Link href="/products" className="text-brand-orange font-bold flex items-center gap-2 group">
              مشاهدة الكل
              <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "عصير البرتقال", color: "bg-brand-orange", price: "12 ر.س", img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=400" },
              { name: "عصير المانجو", color: "bg-brand-yellow", price: "15 ر.س", img: "/images/mango_juice.jpg" },
              { name: "عصير الفراولة", color: "bg-brand-red", price: "14 ر.س", img: "https://images.unsplash.com/photo-1591244234057-04022634e064?q=80&w=400" },
              { name: "عصير الرمان", color: "bg-brand-red", price: "20 ر.س", img: "/images/pomegranate_juice.jpg" },
            ].map((product, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[3/4] rounded-3xl overflow-hidden relative mb-4">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-brand-orange font-bold mt-1">{product.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold font-tajawal">ماذا يقول عملاؤنا؟</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <motion.div
              key={i}
              {...fadeInUp}
              className="p-8 rounded-3xl border border-gray-100 dark:border-gray-800 space-y-6"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />)}
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">
                "أفضل عصير طبيعي جربته في الرياض، الطعم حقيقي ومنعش جداً. التوصيل كان سريعاً والتعامل قمة في الرقي."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200" />
                <div>
                  <p className="font-bold">أحمد محمد</p>
                  <p className="text-sm text-gray-500">عميل دائم</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
