import React from "react";

interface AppContextInterface {
  count: number;
  setCount: (count: number) => void;
}

export const MyContext = React.createContext<AppContextInterface | null>(null);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = React.useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
}

export default function useAppContext() {
  return React.useContext(MyContext) as AppContextInterface;
}
