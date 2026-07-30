import { Palette } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';

const themes = [
  { id: 'theme-pink', name: 'Pink & Purple', color: 'bg-[#D946EF]' },
  { id: 'theme-gold', name: 'Gold & Amber', color: 'bg-[#EAB308]' },
  { id: 'theme-blue', name: 'Cyan & Blue', color: 'bg-[#06B6D4]' },
  { id: 'theme-green', name: 'Emerald & Teal', color: 'bg-[#10B981]' },
] as const;

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 bg-card border border-primary/20 rounded-full shadow-lg hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:scale-110 transition-all duration-300 group"
        aria-label="Toggle theme switcher"
      >
        <Palette className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
      </button>

      <div 
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setTheme(t.id);
              setIsOpen(false);
            }}
            className={`w-12 h-12 rounded-full ${t.color} border-2 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${
              theme === t.id ? 'border-white scale-110' : 'border-transparent'
            }`}
            title={t.name}
          >
            {theme === t.id && (
              <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
