import useLanguageContext from "@/contexts/useLanguageContext";
import Parent from "./Parent";
import useThemeContext, {
  ThemeContextProvider,
} from "@/contexts/useThemeContext";

export default function GrandParent() {
  const { theme, setTheme } = useThemeContext();
  const { language, setLanguage } = useLanguageContext();

  return (
    <div>
      <div>GrandParent</div>
      <ThemeContextProvider>
        <Parent />
      </ThemeContextProvider>
      <div>GrandParent theme: {theme}</div>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change theme
      </button>
      <button
        onClick={() => {
          setLanguage(language === "en" ? "ko" : "en");
        }}
      >
        Change language
      </button>
    </div>
  );
}
