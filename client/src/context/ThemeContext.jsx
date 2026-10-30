
import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

const ThemeContext = createContext({
  dark: false,
  toggle: () => {},
});

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("oz-dark") === "true";
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";

    localStorage.setItem("oz-dark", String(dark));
  }, [dark]);

  const toggle = () => {
    setDark((previous) => !previous);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
