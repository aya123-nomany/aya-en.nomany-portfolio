import { GraduationCap, Trophy, Heart, Target } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Développeuse Full Stack, formée en développement web et mobile avec un intérêt pour le design graphique."
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Achievements",
      description: "Participation et succès dans plusieurs compétitions de robotique, obtention de certifications et réalisation de projets innovants."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passion",
      description: "Grande passion pour les technologies émergentes, l'IA et la création de solutions qui facilitent la vie quotidienne."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focus",
      description: "Objectif: devenir une entrepreneuse tech capable de créer des projets digitaux innovants et impactants."
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Développeuse Full Stack",
      description: "Dirige des projets web et mobiles innovants, en combinant expertise technique et créativité."
    },
    {
      year: "2024-2025",
      title: "Exploratrice en Robotique",
      description: "Participation à des compétitions de robotique et intégration de solutions basées sur l'IA."
    },
    {
      year: "2024",
      title: "Baccalauréat et Entrée au CMC",
      description: "Obtention du bac sciences physiques et admission à l'école CMC pour débuter la formation en développement numérique."
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Développeuse passionnée et motivée, combinant compétences techniques et vision créative pour développer des solutions digitales innovantes et impactantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
 <p>
 Hello! I'm Aya Full-Stack Developer with a strong passion for web development and robotics. I love building beautiful and functional web applications and exploring innovative solutions that combine programming with smart technologies. I enjoy learning new tools and turning complex ideas into simple, intuitive solutions.
When I'm not coding or working on robotics projects, I enjoy exploring the latest tech trends, working on personal projects, and sharing knowledge with others, I am committed to continuous learning and improving my skills to create impactful digital and technological experiences
</p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 hover-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="animate-fadeInUp">
            <h3 className="text-2xl font-bold text-foreground mb-8">My Journey</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Line */}
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent"></div>
                  )}
                  
                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-300 hover-glow">
                      {item.year.slice(-2)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card rounded-xl p-6 hover-glow group-hover:transform group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{item.title}</h4>
                      <span className="text-sm text-primary font-medium">{item.year}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
