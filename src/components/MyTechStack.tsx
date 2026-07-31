import React, { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Tech {
  name: string;
  logo: string;
  description: string;
  color: string;
}

const MyTechStack: React.FC = () => {
  const { t } = useLanguage();
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null);

  const logos = [
    // HTML5
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    // CSS3
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    // JavaScript
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    // PHP
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    // Python
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    // SQL
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg",
    // React.js
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    // Next.js
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    // Laravel
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    // Node.js
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    // Express.js
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    // Bootstrap
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    // Tailwind CSS
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    // MySQL
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    // SQLite
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    // Docker
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    // Azure
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    // Git
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    // GitHub
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    // Postman
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    // Figma
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    // Arduino
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    // XAMPP
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
    // Composer
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/composer/composer-original.svg",
    // npm
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    // Vite
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  ];
  const colors = [
    "hsl(20, 90%, 55%)",   // HTML5 orange
    "hsl(210, 90%, 55%)",  // CSS3 blue
    "hsl(50, 100%, 50%)",  // JS yellow
    "hsl(230, 60%, 60%)",  // PHP indigo
    "hsl(200, 80%, 50%)",  // Python blue
    "hsl(320, 65%, 55%)",  // SQL pink
    "hsl(195, 90%, 55%)",  // React cyan
    "hsl(0, 0%, 80%)",     // Next.js white
    "hsl(0, 75%, 55%)",    // Laravel red
    "hsl(120, 60%, 40%)",  // Node green
    "hsl(0, 0%, 70%)",     // Express grey
    "hsl(260, 70%, 60%)",  // Bootstrap purple
    "hsl(190, 90%, 50%)",  // Tailwind cyan
    "hsl(200, 70%, 50%)",  // MySQL blue
    "hsl(200, 60%, 60%)",  // SQLite light blue
    "hsl(210, 90%, 55%)",  // Docker blue
    "hsl(200, 80%, 55%)",  // Azure blue
    "hsl(20, 90%, 55%)",   // Git orange
    "hsl(320, 65%, 55%)",  // GitHub pink
    "hsl(20, 80%, 55%)",   // Postman orange
    "hsl(280, 70%, 60%)",  // Figma purple
    "hsl(190, 80%, 45%)",  // Arduino teal
    "hsl(20, 80%, 50%)",   // XAMPP orange
    "hsl(20, 70%, 50%)",   // Composer orange
    "hsl(0, 70%, 50%)",    // npm red
    "hsl(280, 80%, 65%)",  // Vite purple
  ];

  const techs: Tech[] = t.techStack.techs.map((tech, idx) => ({
    name: tech.name,
    logo: logos[idx],
    description: tech.desc,
    color: colors[idx]
  }));

  const handleMouseEnter = (techName: string, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setRipplePosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    setHoveredTech(techName);
    const otherTechs = techs.filter((tech) => tech.name !== techName);
    if (otherTechs.length > 0) setActiveTech(otherTechs[Math.floor(Math.random() * otherTechs.length)].name);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
    setActiveTech(null);
    setRipplePosition(null);
  };

  return (
    <section id="mytechstack" className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex flex-col items-center relative overflow-hidden scroll-smooth">
      <div className="absolute inset-0 overflow-hidden">
        {techs.map((tech, i) => (
          <div key={tech.name} className="absolute opacity-5" style={{ top: `${(i * 15) % 100}%`, left: `${(i * 20) % 100}%`, animation: `float ${20 + i * 2}s infinite ease-in-out`, animationDelay: `${i * 0.5}s` }}>
            <img src={tech.logo} alt="" className="w-32 h-32" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particleMove ${10 + Math.random() * 20}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

     <div className="text-center mb-16 relative z-10">
  <div className="relative inline-block">
    <h1 className="text-6xl font-bold mb-6 relative">
      <span className="gradient-text animate-gradient">
        {t.techStack.title}
      </span>
    </h1>
    <div className="h-1 w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
  </div>
  <p className="text-muted-foreground text-xl mt-6 animate-fadeInUp">
    {t.techStack.subtitle}
  </p>
</div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
        {techs.map((tech) => {
          const isHovered = hoveredTech === tech.name;
          const isActive = activeTech === tech.name;
          const techData = techs.find((t) => t.name === tech.name);

          return (
            <div key={tech.name} className={`relative group perspective-1000 ${isHovered ? "z-50" : "z-0"}`} onMouseEnter={(e) => handleMouseEnter(tech.name, e)} onMouseLeave={handleMouseLeave}>
              {ripplePosition && isHovered && <div className="absolute rounded-full bg-gradient-to-r from-primary/30 to-accent/30 animate-ripple z-0" style={{ left: ripplePosition.x - 50, top: ripplePosition.y - 50, width: 100, height: 100 }} />}

              <div className={`transform transition-all duration-700 ease-out cursor-pointer ${isHovered ? "rotate-y-20 scale-110" : ""} ${isActive ? "animate-breathe" : ""}`}>
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary blur opacity-0 group-hover:opacity-70 transition-opacity duration-500 ${isHovered ? "animate-glow" : ""}`}></div>

                <div className={`relative glass-card border rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover-glow ${isHovered ? "shadow-primary/30" : ""} ${isActive ? "border-2 border-primary shadow-lg shadow-primary/30 animate-pulse" : ""}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full absolute transition-all duration-1000 ${isHovered ? "scale-100 opacity-20" : "scale-0 opacity-0"}`} style={{ background: `radial-gradient(circle, ${techData?.color}40, transparent 70%)`, animation: isHovered ? "spin 10s linear infinite" : "none" }}></div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`mb-4 p-3 rounded-full bg-card border border-primary/50 transition-all duration-500 skill-icon-3d ${isHovered ? "scale-125 rotate-12" : ""} ${isActive ? "animate-pulse-slow" : ""}`}>
                      <img src={tech.logo} alt={tech.name} className={`w-16 h-16 object-contain transition-all duration-700 ${isHovered ? "drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]" : ""} ${["Tailwind CSS", "GitHub", "Next.js", "Express.js", "XAMPP"].includes(tech.name) ? "p-1 bg-white rounded-lg" : ""}`} style={{ filter: isHovered ? `drop-shadow(0 0 15px ${techData?.color}80)` : "none" }} />
                    </div>

                    <span className={`text-xl font-bold transition-all duration-500 relative ${isHovered ? "text-primary scale-110" : "text-card-foreground"}`}>{tech.name}</span>

                    <div className={`mt-4 transition-all duration-700 overflow-hidden ${isHovered ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-primary/30">
                        <p className="text-sm text-primary/80 text-center leading-relaxed">{tech.description}</p>
                        <div className="mt-2 flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {isHovered && (
                    <>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-primary to-transparent"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-t from-accent to-transparent"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyTechStack;