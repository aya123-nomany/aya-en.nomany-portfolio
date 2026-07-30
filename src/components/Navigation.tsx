import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#portfolio" },
    { name: t.nav.techStack, href: "#mytechstack" }, 
    { name: t.nav.contact, href: "#contact" },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "ar", label: "AR", flag: "🇲🇦" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            Aya EN Nomany
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 relative group text-sm font-medium"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Actions: Language Switcher & Download CV */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/15">
              <Globe className="w-4 h-4 mx-2 text-primary" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-300 ${
                    language === lang.code
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-md"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>

            {/* Download CV Button */}
            <a href="/CV.pdf" download>
              <Button variant="hero" size="sm">
                <Download className="w-4 h-4" />
                {t.nav.downloadCv}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle & Lang Switcher */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:hidden">
            {/* Mobile Lang selector */}
            <div className="flex items-center bg-white/10 backdrop-blur-md p-0.5 rounded-full border border-white/15">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 py-0.5 text-xs font-bold rounded-full transition-all duration-300 ${
                    language === lang.code
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "text-foreground/70"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden glass-card rounded-lg mt-4 p-6 space-y-4 animate-fadeInUp">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="/CV.pdf" download className="block w-full">
              <Button variant="hero" size="sm" className="w-full mt-4">
                <Download className="w-4 h-4" />
                {t.nav.downloadCv}
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;