import { useState } from 'react';
import { hubData } from './data/links';
import { GlowHeader } from './components/GlowHeader';
import { GlowSocialBar } from './components/GlowSocialBar';
import { GlowStatsRibbon } from './components/GlowStatsRibbon';
import { GlowCatalogCard } from './components/GlowCatalogCard';
import { GlowTelegramCard } from './components/GlowTelegramCard';
import { GlowDegustatsiyaCard } from './components/GlowDegustatsiyaCard';
import { GlowEmailCard } from './components/GlowEmailCard';
import { GlowSecondaryLinks } from './components/GlowSecondaryLinks';
import { ShareModal } from './components/ShareModal';
import { ContactChoiceModal } from './components/ContactChoiceModal';
import { Footer } from './components/Footer';

export function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isDegustatsiyaOpen, setIsDegustatsiyaOpen] = useState(false);

  const catalogUrl = "https://telegra.ph/BARHAL-04-29";
  const telegramBotUrl = "https://t.me/barhal_chocolate";

  return (
    <div className="obsidian-bg min-h-screen w-full transition-colors duration-500 overflow-x-hidden flex justify-center py-6 px-3 sm:px-6">
      {/* Markaziy qora-qizil va oq nurli link konteyneri */}
      <div className="w-full max-w-lg space-y-4">
        
        {/* 1. BOSH PROFIL VA LOGOTIP (Qora fonda qizil B harfi va oq nurlar bilan) */}
        <GlowHeader
          profile={hubData.profile}
          onOpenShare={() => setIsShareOpen(true)}
        />

        {/* 2. IJTIMOIY TARMOQLAR DOKI (Mail barhalchoko@mail.ru bilan) */}
        <GlowSocialBar socials={hubData.socials} />

        {/* 3. ISHONCH VA STATISTIKA KO'RSATKICHLARI (100% tabiiy, 40+ turlari, 15k+ xaridor) */}
        <GlowStatsRibbon />

        {/* 4. ASOSIY KARTA: EKSKLYUZIV SHOKOLADLAR KATALOGI 2026 (telegra.ph havolasi) */}
        <GlowCatalogCard catalogUrl={catalogUrl} />

        {/* 5. TEZKOR BUYURTMA BOTI (O'zbekiston bo'ylab yetkazib berish) */}
        <GlowTelegramCard botUrl={telegramBotUrl} />

        {/* 6. NAMUNA VA DEGUSTATSIYA (Telegram @nozimjon83 va Tel +998 88 248 88 83) */}
        <GlowDegustatsiyaCard
          onOpenModal={() => setIsDegustatsiyaOpen(true)}
          telegramUrl="https://t.me/nozimjon83"
          telegramUsername="@nozimjon83"
          phoneTelUrl="tel:+998882488883"
          phoneNumber="+998 88 248 88 83"
        />

        {/* 7. OPTOM VA HAMKORLIK BO'LIMI (barhalchoko@mail.ru) */}
        <GlowEmailCard />

        {/* 8. QO'SHIMCHA HAVOLALAR (Prays-list PDF va Qora shokolad) */}
        <GlowSecondaryLinks />

        {/* 9. PASTKI QISM (FOOTER) */}
        <Footer name={hubData.profile.name} />
      </div>

      {/* Ulashish va QR-kod modali */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        url={catalogUrl}
        name={hubData.profile.name}
        bio={hubData.profile.bio}
      />

      {/* Namuna va Degustatsiya band qilish tanlov modali */}
      <ContactChoiceModal
        isOpen={isDegustatsiyaOpen}
        onClose={() => setIsDegustatsiyaOpen(false)}
        title="Namuna va Degustatsiya Band Qilish"
        telegramUsername="@nozimjon83"
        telegramUrl="https://t.me/nozimjon83"
        phoneNumber="+998 88 248 88 83"
        phoneTelUrl="tel:+998882488883"
      />
    </div>
  );
}

export default App;
