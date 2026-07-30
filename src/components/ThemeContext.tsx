import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'theme-pink' | 'theme-gold' | 'theme-blue' | 'theme-green';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return (savedTheme as Theme) || 'theme-pink';
  });

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove all old themes
    root.classList.remove('theme-pink', 'theme-gold', 'theme-blue', 'theme-green');
    
    // Add the active theme
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
