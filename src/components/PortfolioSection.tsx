import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Import all images
import rbtc from "@/assets/resto.jpg";
import project1 from "@/assets/biblio.jpg";
import portfoliopic from "@/assets/portfoliopic.jpeg";
import appvers from "@/assets/bookswap.jpeg";
import appvers2 from "@/assets/styleshop.jpg";
import management from "@/assets/weather.jpg";
import speedMealLogo from "@/assets/logo.png";
import speedMealVideo from "@/assets/Média1.mp4";
import intelliStoreImage from "@/assets/intellistore.PNG";
import intelliStoreVideo from "@/assets/0730.mp4";
import cmcInternatLogo from "@/assets/cmc internat logo.PNG";
import cmcInternatVideo from "@/assets/media3.mp4";
import rashfaImage from "@/assets/rashfa.jfif";
import wpImage from "@/assets/logo-wordpress.jpg";
import wpVideo from "@/assets/wp.mp4";
import webImage from "@/assets/web.jpeg";
import webVideo from "@/assets/webv.mp4";

const PortfolioSection = () => {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [displayedText, setDisplayedText] = useState<Record<number, string>>({});
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const projectImages = [
    rbtc,
    project1,
    portfoliopic,
    appvers,
    appvers2,
    management,
    speedMealLogo,
    intelliStoreImage,
    cmcInternatLogo,
    rashfaImage,
    wpImage,
    webImage
  ];

  const projects = t.portfolio.projects.map((proj, index) => {
    // Map existing extra URLs
    const githubUrls = [
      "https://github.com/aya123-nomany/projet-site-du-restaurant",
      "https://github.com/aya123-nomany/projet-bibliotheque",
      "https://github.com/aya123-nomany",
      "https://github.com/aya123-nomany/projet-bookswap",
      "https://github.com/aya123-nomany/Shop-in-Style",
      "https://aya123-nomany.github.io/React-Weather-Dashboard/",
      "https://github.com/aya123-nomany/SpeedMeal",
      "https://github.com/aya123-nomany/Itellistore",
      "https://github.com/aya123-nomany/cmc-internat",
      "https://github.com/aya123-nomany/Rashfa",
      "https://github.com/aya123-nomany/wordpress-portfolio",
      "https://github.com/aya123-nomany/ecommerce-wordpress"
    ];
    const liveUrls = [
      "https://restaurant-cwb.wuaze.com",
      "https://ayaennomany.fwh.is/",
      "https://aya-portfolio.gt.tc/",
      "https://bookswap-platform.great-site.net",
      "https://aya123-nomany.github.io/Shop-in-Style/",
      "https://aya123-nomany.github.io/React-Weather-Dashboard/",
      "https://speed-meal.vercel.app",
      null,
      "https://cmcinternat.22web.org/login",
      "https://rashfa.vercel.app/",
      null,
      null
    ];
    const technologiesList = [
      ["html", "css", "bootstrap"],
      ["html", "css", "bootstrap", "php"],
      ["React", "Tailwind CSS", "Bootstrap"],
      ["HTML5", "CSS3", "PHP", "Bootstrap", "JavaScript", "MySQL"],
      ["React", "HTML5", "CSS3"],
      ["React.js", "Axios", "OpenWeatherMap API", "Tailwind CSS"],
      ["React", "Node.js", "MySQL", "Socket.io"],
      ["Laravel 11", "PHP 8.2+", "SQLite", "Vanilla JS"],
      ["Web", "Mobile", "Digital Platform"],
      ["React.js", "TailwindCSS", "Framer Motion", "GSAP", "Express.js"],
      ["WordPress", "CMS", "Elementor", "CSS"],
      ["WordPress", "Flatsome", "E-commerce"]
    ];
    const videoUrls = [
      null, null, null, null, null, null, speedMealVideo, intelliStoreVideo, cmcInternatVideo, null, wpVideo, webVideo
    ];
    const externalVideoUrls = [
      "https://www.linkedin.com/posts/aya-en-nomany-47b49b318_webdevelopment-html-css-activity-7323700860893507586-CRhg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCEld8BTmnrO_o_RgJHvh_HoofZ6uyfSQM", null, null, null, null, null, null, null, null, "https://www.linkedin.com/posts/aya-en-nomany-47b49b318_livedemo-datadashboard-techinnovation-activity-7427763649638916097-kFpd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFCEld8BTmnrO_o_RgJHvh_HoofZ6uyfSQM", null, null
    ];

    return {
      ...proj,
      image: projectImages[index],
      githubUrl: githubUrls[index],
      liveUrl: liveUrls[index],
      technologies: technologiesList[index],
      videoUrl: videoUrls[index],
      externalVideoUrl: externalVideoUrls[index]
    };
  });

  const handleMouseEnter = (id: number, description: string) => {
    setHoveredId(id);
    if (typingRef.current) clearInterval(typingRef.current);
    setDisplayedText(prev => ({ ...prev, [id]: "" }));
    let i = 0;
    typingRef.current = setInterval(() => {
      i++;
      setDisplayedText(prev => ({ ...prev, [id]: description.slice(0, i) }));
      if (i >= description.length) clearInterval(typingRef.current!);
    }, 18);
  };

  const handleMouseLeave = (id: number) => {
    setHoveredId(null);
    if (typingRef.current) clearInterval(typingRef.current);
    setDisplayedText(prev => ({ ...prev, [id]: "" }));
  };

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t.portfolio.title} <span className="gradient-text">{t.portfolio.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => handleMouseEnter(project.id, project.description)}
              onMouseLeave={() => handleMouseLeave(project.id)}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-contain bg-black/20 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 min-h-[3rem]">
                    {hoveredId === project.id
                      ? displayedText[project.id] ?? ""
                      : project.description.length > 80
                        ? project.description.slice(0, 80) + "..."
                        : project.description}
                    {hoveredId === project.id && (displayedText[project.id]?.length ?? 0) < project.description.length && (
                      <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse align-middle" />
                    )}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    {project.videoUrl && (
                      <Button variant="secondary" size="sm" className="w-full" onClick={() => setSelectedVideo(project.videoUrl!)}>
                        <Play className="w-4 h-4 mx-1" />
                        Video
                      </Button>
                    )}
                    {project.externalVideoUrl && (
                      <a href={project.externalVideoUrl} target="_blank" rel="noopener noreferrer" className="w-full block">
                        <Button variant="secondary" size="sm" className="w-full">
                          <Play className="w-4 h-4 mx-1" />
                          Video
                        </Button>
                      </a>
                    )}
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <ExternalLink className="w-4 h-4 mx-1" />
                            {t.portfolio.liveDemo}
                          </Button>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button variant="ghost" size="sm" className="w-full">
                            <Github className="w-4 h-4 mx-1" />
                            {t.portfolio.sourceCode}
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl rounded-xl overflow-hidden bg-black shadow-2xl border border-white/10 animate-in fade-in zoom-in duration-300">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 rounded-full bg-black/50 hover:bg-white/20 text-white"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-5 h-5" />
            </Button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
