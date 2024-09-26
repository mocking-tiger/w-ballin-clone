"use client";

import { createContext, useContext, useState } from "react";

type LanguageContextType = {
  lang: "KOR" | "ENG";
  // eslint-disable-next-line
  changeLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<"KOR" | "ENG">("KOR");

  const changeLanguage = async (lang: string) => {
    lang === "KOR" ? setLang("KOR") : setLang("ENG");
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage, lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("no provider");
  }
  return context;
};
