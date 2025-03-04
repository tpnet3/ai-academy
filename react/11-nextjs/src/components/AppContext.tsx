import React from "react";
import GrandParent from "./GrandParent";
import { AppContextProvider } from "@/contexts/useAppContext";
import { ThemeContextProvider } from "@/contexts/useThemeContext";
import { LanguageContextProvider } from "@/contexts/useLanguageContext";

export default function AppContext() {
  return (
    <div>
      <div>App Context</div>
      <AppContextProvider>
        <ThemeContextProvider>
          <LanguageContextProvider>
            <GrandParent />
          </LanguageContextProvider>
        </ThemeContextProvider>
      </AppContextProvider>
    </div>
  );
}
