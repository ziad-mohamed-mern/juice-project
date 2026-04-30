"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black font-tajawal mb-4">تواصل معنا</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">نحن هنا للإجابة على استفساراتكم واقتراحاتكم</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Contact Info Cards */}
        <div className="md:col-span-1 space-y-6">
          {[
            {
              icon: <Phone className="w-6 h-6" />,
              title: "رقم الهاتف",
              value: "+966 500 000 000",
              link: "tel:+966500000000",
              color: "bg-brand-orange"
            },
            {
              icon: <MessageCircle className="w-6 h-6" />,
              title: "واتساب",
              value: "تواصل مباشرة عبر واتساب",
              link: "https://wa.me/966500000000",
              color: "bg-green-500"
            },
            {
              icon: <Mail className="w-6 h-6" />,
              title: "البريد الإلكتروني",
              value: "info@mawaseem.sa",
              link: "mailto:info@mawaseem.sa",
              color: "bg-brand-blue"
            },
            {
              icon: <MapPin className="w-6 h-6" />,
              title: "الموقع",
              value: "الرياض، المنطقة الصناعية",
              link: "#",
              color: "bg-brand-red"
            }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-6 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all group"
            >
              <div className={`p-3 rounded-2xl ${item.color} text-white group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="font-bold text-lg">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 bg-white dark:bg-gray-900 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-8">أرسل لنا رسالة</h2>
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold mr-2">الاسم بالكامل</label>
                <input 
                  type="text" 
                  placeholder="أدخل اسمك"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-black border-none focus:ring-2 focus:ring-brand-orange transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold mr-2">رقم الجوال</label>
                <input 
                  type="tel" 
                  placeholder="05xxxxxxx"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-black border-none focus:ring-2 focus:ring-brand-orange transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold mr-2">موضوع الرسالة</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-black border-none focus:ring-2 focus:ring-brand-orange transition-all">
                  <option>استفسار عام</option>
                  <option>طلب تجاري / جملة</option>
                  <option>اقتراح أو شكوى</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold mr-2">الرسالة</label>
                <textarea 
                  rows={4} 
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-black border-none focus:ring-2 focus:ring-brand-orange transition-all"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="w-full py-5 bg-brand-orange text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  إرسال الرسالة
                  <Send className="w-5 h-5 rotate-180" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-24 h-96 bg-gray-100 dark:bg-gray-800 rounded-[3rem] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <MapPin className="w-24 h-24" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white dark:bg-black px-8 py-4 rounded-full shadow-xl font-bold">
          خريطة المصنع في الرياض
        </div>
      </div>
    </div>
  );
}
