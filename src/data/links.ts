import { HubData } from '../types';

/**
 * SHAXSIY LINK HUB - MA'LUMOTLAR BAZASI
 * Barcha ma'lumotlar ushbu fayldan o'qiladi.
 */
export const hubData: HubData = {
  profile: {
    name: "BARHAL",
    handle: "@barhal_chocolate",
    avatarUrl: "/avatar.svg",
    initialsFallback: "B",
    verified: true,
    role: "Premium Shokolad & Qandolat Ishlab Chiqarish",
    bio: "100% tabiiy kakao xomashyosidan tayyorlangan eksklyuziv shokoladlar, qandolat san'ati va beqiyos ta'm uyg'unligi. O'zbekistonda tayyorlangan milliy brend.",
    location: "Toshkent, UZ",
    statusText: "Buyurtmalar & Hamkorlik uchun ochiq",
    isAvailableForProjects: true,
    shareUrl: "https://barhal.uz"
  },

  // Jonli statistika paneli
  stats: [
    {
      id: "experience",
      value: "100%",
      label: "Tabiiy xomashyo",
      subtext: "Sof kakao moyi"
    },
    {
      id: "projects",
      value: "40+",
      label: "Shokolad turlari",
      subtext: "Eksklyuziv assortiment"
    },
    {
      id: "satisfaction",
      value: "15k+",
      label: "Mamnun xaridorlar",
      subtext: "O'zbekiston bo'ylab"
    }
  ],

  // Ijtimoiy tarmoqlar
  socials: [
    {
      id: "telegram",
      platform: "telegram",
      label: "Telegram",
      url: "https://t.me/barhal_chocolate",
      iconName: "Send",
      accentColor: "#229ED9"
    },
    {
      id: "instagram",
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com/barhal.chocolate",
      iconName: "Instagram",
      accentColor: "#E4405F"
    },
    {
      id: "youtube",
      platform: "youtube",
      label: "YouTube",
      url: "https://youtube.com/@barhal_chocolate",
      iconName: "Youtube",
      accentColor: "#FF0000"
    },
    {
      id: "github",
      platform: "github",
      label: "GitHub",
      url: "https://github.com/barhalchoko1",
      iconName: "Github",
      accentColor: "#ffffff"
    },
    {
      id: "email",
      platform: "email",
      label: "Email",
      url: "mailto:barhalchoko@mail.ru",
      iconName: "Mail",
      accentColor: "#ff1744"
    }
  ],

  // Bento Grid havolalari
  links: [
    // 1. KATTA HERO BENTO KARTA (Eng asosiy mahsulot katalogi)
    {
      id: "hero-portfolio",
      title: "Eksklyuziv Shokoladlar Katalogi 2026",
      subtitle: "Klassik qora, nozik sutli, oq shokoladlar va sovg'abop qutilar to'plami",
      url: "https://telegra.ph/BARHAL-04-29",
      icon: "Sparkles",
      category: "Asosiy",
      featured: true,
      active: true,
      layout: "hero",
      badge: "Yangi To'plam",
      tags: ["100% Tabiiy", "Belgiya Retsepti", "Sovg'abop", "Premium Sifat"],
      gradientTheme: "crimson"
    },

    // 2. IKKI USTUNLI BENTO KARTALAR (Yonma-yon)
    {
      id: "telegram-channel",
      title: "Telegram Bot: Tezkor Buyurtma",
      subtitle: "O'zbekiston bo'ylab yetkazib berish xizmati mavjud",
      url: "https://t.me/barhal_chocolate",
      icon: "Send",
      category: "Asosiy",
      featured: true,
      active: true,
      layout: "half",
      badge: "Tezkor Yetkazish",
      gradientTheme: "blue"
    },
    {
      id: "project-sherigim",
      title: "Korporativ Sovg'alar",
      subtitle: "Kompaniyalar va to'y-marosimlar uchun maxsus logotipli qadoqlar",
      url: "https://barhal.uz/korporativ",
      icon: "Star",
      category: "Asosiy",
      featured: true,
      active: true,
      layout: "half",
      badge: "Maxsus Dizayn",
      gradientTheme: "crimson"
    },

    // 3. MAHSULOTLAR VA ASSORTIMENT
    {
      id: "project-payfast",
      title: "Optom Savdo & Distribyutsiya",
      subtitle: "Do'konlar, kafelar va tarmoqlar uchun foydali narxlarda yetkazib berish",
      url: "https://barhal.uz/optom",
      icon: "Briefcase",
      category: "Mahsulotlarimiz",
      featured: false,
      active: true,
      layout: "normal",
      badge: "Optomchilar uchun",
      tags: ["B2B", "Distribyutsiya"]
    },
    {
      id: "project-devjobs",
      title: "Qora Shokolad Lineykasi (70% - 85%)",
      subtitle: "Haqiqiy shokolad shinavandalari uchun shakarsiz va toza kakao lazzati",
      url: "https://barhal.uz/dark-chocolate",
      icon: "Zap",
      category: "Mahsulotlarimiz",
      featured: false,
      active: true,
      layout: "normal",
      tags: ["Klassik", "Sog'lom Tanlov"]
    },
    {
      id: "blog-posts",
      title: "Shokolad San'ati (Sahna orti)",
      subtitle: "Kakao dukkaklaridan to to'liq qadoqqacha bo'lgan ishlab chiqarish sirlari",
      url: "https://barhal.uz/blog",
      icon: "BookOpen",
      category: "Mahsulotlarimiz",
      featured: false,
      active: true,
      layout: "normal"
    },

    // 4. HAMKORLIK VA BOG'LANISH
    {
      id: "roadmap-2026",
      title: "Rasmiy Prays-listni yuklab olish (PDF)",
      subtitle: "Barcha shokolad mahsulotlari, vaznlari va ulgurji narxlar ro'yxati",
      url: "https://barhal.uz/price-list.pdf",
      icon: "Download",
      category: "Hamkorlik",
      featured: false,
      active: true,
      layout: "normal",
      badge: "PDF"
    },
    {
      id: "copy-email-card",
      title: "Optom & Hamkorlik Bo'limi (Email)",
      subtitle: "barhalchoko@mail.ru — bosing va manzilni darhol nusxalang",
      url: "mailto:barhalchoko@mail.ru",
      icon: "Mail",
      category: "Hamkorlik",
      featured: false,
      active: true,
      layout: "normal",
      isCopyable: true,
      copyValue: "barhalchoko@mail.ru",
      badge: "Tezkor nusxa"
    },
    {
      id: "consultation-booking",
      title: "Namuna va Degustatsiya Band Qilish",
      subtitle: "Katta buyurtmalar oldidan mahsulot ta'mini tatib ko'rish uchrashuvi",
      url: "#degustatsiya",
      icon: "Calendar",
      category: "Hamkorlik",
      featured: true,
      active: true,
      layout: "normal",
      badge: "Tanlov mavjud",
      gradientTheme: "amber",
      hasContactChoice: true,
      telegramUsername: "@nozimjon83",
      telegramUrl: "https://t.me/nozimjon83",
      phoneNumber: "+998 88 248 88 83",
      phoneTelUrl: "tel:+998882488883"
    }
  ]
};
