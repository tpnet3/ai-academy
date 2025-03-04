import React from "react";

interface ThemeContextInterface {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const MyContext = React.createContext<ThemeContextInterface | null>(
  null
);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      {children}
    </MyContext.Provider>
  );
}

export default function useThemeContext() {
  return React.useContext(MyContext) as ThemeContextInterface;
}
