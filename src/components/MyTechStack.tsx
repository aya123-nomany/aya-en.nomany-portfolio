import React, { useState } from "react";

interface Tech {
  name: string;
  logo: string;
  description: string;
  color: string;
}

const MyTechStack: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [ripplePosition, setRipplePosition] = useState<{ x: number; y: number } | null>(null);

  const techs: Tech[] = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "JavaScript library for building user interfaces", color: "hsl(320, 65%, 55%)" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "The programming language of the web", color: "hsl(320, 65%, 55%)" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "Markup language for creating web pages", color: "hsl(320, 65%, 55%)" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Style sheet language for web presentation", color: "hsl(320, 65%, 55%)" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Powerful programming language for AI and web", color: "hsl(280, 70%, 60%)" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "Distributed version control system", color: "hsl(320, 65%, 55%)" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Platform for collaboration and code hosting", color: "hsl(320, 65%, 55%)" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", description: "CSS framework for responsive designs", color: "hsl(280, 70%, 60%)" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", description: "Collaborative interface design tool", color: "hsl(320, 65%, 55%)" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Most popular relational database system", color: "hsl(320, 65%, 55%)" },
    { name: "Tailwind CSS", logo: "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png", description: "Utility-first CSS framework", color: "hsl(280, 70%, 60%)" },
    { name: "XML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg", description: "Markup language for data storage and transport", color: "hsl(320, 65%, 55%)" },
  ];

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
        My Tech Stack
      </span>
    </h1>
    <div className="h-1 w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
  </div>
  <p className="text-muted-foreground text-xl mt-6 animate-fadeInUp">
    Technologies, tools & frameworks I work with
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

                <div className={`relative glass-card border rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover-glow ${isHovered ? "shadow-primary/30" : ""} ${isActive ? "border-2 border-primary shadow-lg shadow-primary/30" : ""}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-32 h-32 rounded-full absolute transition-all duration-1000 ${isHovered ? "scale-100 opacity-20" : "scale-0 opacity-0"}`} style={{ background: `radial-gradient(circle, ${techData?.color}40, transparent 70%)`, animation: isHovered ? "spin 10s linear infinite" : "none" }}></div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`mb-4 p-3 rounded-full bg-card border border-primary/50 transition-all duration-500 skill-icon-3d ${isHovered ? "scale-125 rotate-12" : ""} ${isActive ? "animate-pulse-slow" : ""}`}>
                      <img src={tech.logo} alt={tech.name} className={`w-16 h-16 object-contain transition-all duration-700 ${isHovered ? "drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]" : ""} ${tech.name === "Tailwind CSS" ? "p-1 bg-white rounded-lg" : ""} ${tech.name === "GitHub" ? "p-2 bg-white rounded-lg" : ""}`} style={{ filter: isHovered ? `drop-shadow(0 0 15px ${techData?.color}80)` : "none" }} />
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