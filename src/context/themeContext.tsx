import { createContext, useContext, useState } from "react";

interface ThemeProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext({} as ThemeProps);

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children } : { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  return <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
}