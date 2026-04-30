"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Microscope, ThermometerSun, Wind, Droplets } from "lucide-react";

const steps = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "اختيار الفاكهة",
    desc: "نختار فقط الفواكه التي وصلت لدرجة النضج المثالية من مزارع معتمدة."
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: "الغسيل والتعقيم",
    desc: "تمر الفواكه بمراحل غسيل متعددة وتقنيات تعقيم متطورة لضمان النظافة."
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "العصر البارد",
    desc: "نستخدم تقنية العصر البارد للحفاظ على كامل الفيتامينات والإنزيمات."
  },
  {
    icon: <ThermometerSun className="w-8 h-8" />,
    title: "التعبئة الذكية",
    desc: "تتم التعبئة في بيئة معزولة تماماً للحفاظ على الطزاجة بدون مواد حافظة."
  }
];

export default function Quality() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-brand-green/5 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-brand-green rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-brand-orange rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-full text-sm font-bold mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            معايير جودة عالمية
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black font-tajawal mb-6">الجودة هي سر تميزنا</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            نحن لا نبيع عصيرًا فحسب، بل نقدم لك ثمرة جهودنا في الحفاظ على صحتك من خلال أدق معايير التصنيع.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-tajawal">رحلة الثمرة إلى العبوة</h2>
          <div className="w-20 h-1 bg-brand-green mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 dark:bg-gray-800 -z-10 translate-y-[-50%]" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800 text-center space-y-4 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-brand-green text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-brand-green/20">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center bg-gray-50 dark:bg-white/5 p-12 rounded-[3rem]">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-tajawal">شهاداتنا واعتماداتنا</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            فخورون بحصولنا على أرقى الشهادات العالمية والمحلية التي تؤكد التزامنا الصارم بمعايير سلامة الغذاء والجودة الشاملة.
          </p>
          <ul className="space-y-4">
            {[
              "شهادة الأيزو (ISO 22000) لسلامة الغذاء",
              "اعتماد الهيئة العامة للغذاء والدواء (SFDA)",
              "شهادة الهاسب (HACCP) لتحليل المخاطر",
              "جائزة أفضل مصنع عصير طبيعي (2025)"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg font-medium">
                <CheckCircle2 className="w-6 h-6 text-brand-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="aspect-square bg-white dark:bg-gray-800 rounded-3xl flex items-center justify-center border border-gray-100 dark:border-gray-700 p-8">
              <div className="w-full h-full border-4 border-dashed border-gray-200 dark:border-gray-600 rounded-2xl flex items-center justify-center opacity-50">
                 <ShieldCheck className="w-12 h-12 text-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
