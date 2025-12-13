import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye } from "lucide-react";

// Import all images
import rbtc from "@/assets/resto.jpg";
import project1 from "@/assets/biblio.jpg";
import portfoliopic from "@/assets/portfoliopic.jpeg";
import appvers from "@/assets/bookswap.jpeg";
import appvers2 from "@/assets/styleshop.jpg";
import management from "@/assets/weather.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Le Château des Délices",
      description: "Ce site du restaurant Le Château des Délices a été réalisé avec Bootstrap, CSS et HTML, offrant une navigation élégante et intuitive qui reflète l'ambiance raffinée et les saveurs uniques du lieu",
      technologies: ["html", "css", "bootstrap"],
      image: rbtc,
      liveUrl: "https://restaurant-cwb.wuaze.com",
      githubUrl: "https://github.com/aya123-nomany/projet-site-du-restaurant",
      viewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7323700860893507586/"
    },
    {
      id: 2,
      title: "My Book Space",
      description: "My Book Space est un projet personnel qui permet aux utilisateurs de se connecter, d'ajouter, de modifier et de supprimer des livres facilement. Il a été développé avec PHP, HTML et CSS afin d'offrir une expérience simple et pratique pour gérer votre bibliothèque",
      technologies: ["html", "css", "bootstrap ", "php"],
      image: project1,
      liveUrl: "https://ayaennomany.fwh.is/",
      githubUrl: "https://github.com/aya123-nomany/projet-bibliotheque",
      viewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7381029705795211264/"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern design and smooth animations.",
      technologies: ["React", "Tailwind", "Tailwind CSS", "bootstrap"],
      image: portfoliopic,
      liveUrl: "https://aya-portfolio.gt.tc/",
      githubUrl: "https://github.com/aya123-nomany",
      viewUrl: "https://github.com/aya123-nomany"
    },
    {
      id: 4,
      title: "website BookSwap",
      description: "BookSwap est une plateforme numérique qui connecte les passionnés de lecture. Elle permet d’échanger, vendre ou acheter des livres facilement. L’objectif est de partager la connaissance et faciliter l’accès aux livres à un prix accessible.",
      technologies:  ["html5", "css3", "php","bootstrap","JavaScript","MySQL"],
      image: appvers,
      liveUrl: "https://bookswap-platform.great-site.net",
      githubUrl: "https://github.com/aya123-nomany/projet-bookswap",
      viewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7397020819845066753/"
    },
    {
      id: 5,
      title: "Shop-in-Style",
      description: "Une application React moderne affichant des produits sous forme de cartes dynamiques avec boutons réutilisables, étiquettes “SALE”, hover effects, et design responsive. Structure claire : Header, Section, ProductList, Card, Footer",
      technologies: ["React","HTML5","CSS3"],
      image: appvers2,
      liveUrl: "https://aya123-nomany.github.io/Shop-in-Style/",
      githubUrl: "https://github.com/aya123-nomany/Shop-in-Style",
      viewUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7404323749400883200/"
    },
    {
      id: 6,
      title: "Weather React App",
      description: "J’ai créé une page météo interactive en React qui permet à l’utilisateur de rechercher la météo de n’importe quelle ville en temps réel. L’application affiche les informations principales telles que la température, l’humidité, la vitesse du vent et les conditions météorologiques, accompagnées d’icônes représentatives pour un rendu visuel agréable. Grâce à l’utilisation d’une API météo, les données sont mises à jour instantanément et présentées de manière claire et intuitive. Le design est simple, responsive et adapté à tous les écrans.",
      technologies: ["React.js", "Axios", "OpenWeatherMap API", "Tailwind CSS"],
      image: management,
      liveUrl: "https://aya123-nomany.github.io/React-Weather-Dashboard/",
      githubUrl: "https://aya123-nomany.github.io/React-Weather-Dashboard/",
      viewUrl: "."
    }
  ];

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my projects that showcase my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl overflow-hidden hover-glow transition-all duration-500 group-hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="ghost" size="sm" className="flex-1">
                          <Github className="w-4 h-4" />
                          Source
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
