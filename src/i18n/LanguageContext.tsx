import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, TranslationStructure } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    return (saved && ["fr", "en", "ar"].includes(saved)) ? saved : "fr";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div className={dir === "rtl" ? "font-arabic" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
