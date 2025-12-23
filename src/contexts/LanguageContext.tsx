'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language } from '@/lib/i18n';

// Define a recursive type that matches the structure of translations but with string values
type TranslationStructure = {
  [key: string]: string | TranslationStructure | Array<any>;
};

// Use the explicit shape from the 'pt' translation as the base type for usage
export type Translations = typeof translations.pt;

interface LanguageContextType {
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    // Check localStorage or browser preference if needed
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  // We cast to Translations because we ensure structure compatibility in i18n.ts
  // or accept that en/pt might diverge slightly if not strictly typed with 'as const'
  const t = translations[language] as unknown as Translations;

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
