import useAppContext from "@/contexts/useAppContext";
import useThemeContext from "@/contexts/useThemeContext";
import useLanguageContext from "@/contexts/useLanguageContext";

export default function GrandChild() {
  const { count, setCount } = useAppContext();
  const { theme, setTheme } = useThemeContext();
  const { language, setLanguage } = useLanguageContext();

  const texts = {
    en: { title: "Welcome", body: "Hello World" },
    ko: { title: "환영합니다", body: "안녕하세요" },
  };

  return (
    <div>
      <div>GrandChild</div>
      <div>count: {count}</div>
      <div>GrandChild theme: {theme}</div>
      <div>language: {language}</div>
      <div>
        title: {texts[language].title}, body: {texts[language].body}
      </div>
    </div>
  );
}
