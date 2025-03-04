import React from "react";

interface LanguageContextInterface {
  language: "en" | "ko";
  setLanguage: (language: "en" | "ko") => void;
}

export const LanguageContext =
  React.createContext<LanguageContextInterface | null>(null);

export function LanguageContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = React.useState<"ko" | "en">("ko");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default function useLanguageContext() {
  return React.useContext(LanguageContext) as LanguageContextInterface;
}
