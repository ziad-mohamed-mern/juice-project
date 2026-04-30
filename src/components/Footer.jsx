import Link from "next/link";
import { Droplets, Phone, Mail, MapPin, Camera, Globe, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black/40 pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Droplets className="w-8 h-8 text-brand-orange" />
            <span className="text-2xl font-bold font-tajawal">مواسم</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            نقدم لك نضارة الطبيعة في كل رشفة. نلتزم بأعلى معايير الجودة لنمنحك تجربة طعم فريدة وصحية.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:text-brand-orange transition-colors">
              <Camera className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:text-brand-orange transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:text-brand-orange transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-6">روابط سريعة</h3>
          <ul className="space-y-4">
            <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">الرئيسية</Link></li>
            <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">من نحن</Link></li>
            <li><Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">منتجاتنا</Link></li>
            <li><Link href="/quality" className="text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors">الجودة</Link></li>
          </ul>
        </div>

        {/* Products Preview */}
        <div>
          <h3 className="text-lg font-bold mb-6">منتجاتنا</h3>
          <ul className="space-y-4">
            <li className="text-gray-600 dark:text-gray-400">عصير البرتقال الطبيعي</li>
            <li className="text-gray-600 dark:text-gray-400">عصير المانجو الفاخر</li>
            <li className="text-gray-600 dark:text-gray-400">كوكتيل الفواكه</li>
            <li className="text-gray-600 dark:text-gray-400">عصير الفراولة الطازج</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-6">تواصل معنا</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Phone className="w-5 h-5 text-brand-orange" />
              <span>+966 500 000 000</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <Mail className="w-5 h-5 text-brand-orange" />
              <span>info@mawaseem.sa</span>
            </li>
            <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5 text-brand-orange" />
              <span>الرياض، المملكة العربية السعودية</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} مصنع مواسم للعصيرات. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
