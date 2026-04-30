"use client";

import { motion } from "framer-motion";
import { Factory, Target, Eye, Users } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header */}
      <section className="bg-brand-orange/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black font-tajawal mb-6"
          >
            قصة مصنع مواسم
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            بدأنا بشغف لتقديم أفضل ما تجود به الطبيعة، واليوم نحن فخورون بأن نكون جزءاً من يومكم الصحي.
          </motion.p>
        </div>
      </section>

      {/* Story & Image */}
      <section className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div {...fadeInUp} className="space-y-6">
          <h2 className="text-3xl font-bold font-tajawal">كيف بدأت الرحلة؟</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            تأسس مصنع مواسم للعصيرات في قلب المملكة العربية السعودية، برؤية واضحة تهدف إلى تغيير مفهوم العصائر المعلبة. نحن نؤمن أن الصحة تبدأ من الطبيعة، ولذلك حرصنا منذ اليوم الأول على استخدام أجود أنواع الفواكه المحلية والعالمية.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            رحلتنا بدأت بمختبر صغير وتجارب لا تنتهي للوصول إلى النكهة المثالية التي تجمع بين الطعم الطازج والفوائد الغذائية الكاملة، واليوم نمتلك أحد أحدث خطوط الإنتاج في المنطقة.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative aspect-video glass rounded-3xl overflow-hidden border-2 border-brand-orange/20 flex items-center justify-center bg-brand-orange/5"
        >
          <Factory className="w-32 h-32 text-brand-orange/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/10 to-transparent" />
        </motion.div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Eye className="w-10 h-10 text-brand-orange" />,
            title: "رؤيتنا",
            desc: "أن نكون الخيار الأول والملهم لنمط حياة صحي ومنعش في المنطقة."
          },
          {
            icon: <Target className="w-10 h-10 text-brand-green" />,
            title: "رسالتنا",
            desc: "تقديم منتجات طبيعية عالية الجودة تعزز الصحة وتفوق توقعات عملائنا."
          },
          {
            icon: <Users className="w-10 h-10 text-brand-yellow" />,
            title: "قيمنا",
            desc: "الشفافية، الجودة المطلقة، والابتكار المستمر في كل قطرة."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            {...fadeInUp}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-3xl bg-gray-50 dark:bg-white/5 space-y-4 text-center"
          >
            <div className="mx-auto w-fit mb-6">{item.icon}</div>
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* Factory Gallery Section */}
      <section className="bg-gray-50 dark:bg-black/20 py-24">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold font-tajawal">داخل مصنعنا</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              نجمع بين التكنولوجيا الحديثة وأعلى معايير الجودة لنضمن لك قطرة من النقاء في كل زجاجة.
            </p>
            <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/images/factory_1.png", title: "خطوط الإنتاج المتطورة" },
              { img: "/images/factory_2.png", title: "مختبرات ضبط الجودة" },
              { img: "/images/factory_3.png", title: "تقنيات التعبئة الذكية" },
              { img: "/images/factory_4.jpg", title: "عناية فائقة بالتفاصيل" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-lg"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                  <h3 className="text-xl font-bold text-white font-tajawal">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Droplets(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 16.3c2.2 0 4-1.8 4-4 0-3.3-4-6-4-6s-4 2.7-4 6c0 2.2 1.8 4 4 4Z" />
      <path d="M17 21.3c2.2 0 4-1.8 4-4 0-3.3-4-6-4-6s-4 2.7-4 6c0 2.2 1.8 4 4 4Z" />
    </svg>
  );
}
