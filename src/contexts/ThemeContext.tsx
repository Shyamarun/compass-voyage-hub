import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'blue-white' | 'yellow-white' | 'default';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem('compass-theme') as Theme;
    return stored || 'default';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('blue-white', 'yellow-white', 'default');
    root.classList.add(theme);
    localStorage.setItem('compass-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
