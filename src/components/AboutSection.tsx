import { GraduationCap, Trophy, Heart, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: t.about.educationTitle,
      description: t.about.educationDesc
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: t.about.achievementsTitle,
      description: t.about.achievementsDesc
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t.about.passionTitle,
      description: t.about.passionDesc
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t.about.focusTitle,
      description: t.about.focusDesc
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
            {t.about.title} <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">{t.about.myStoryTitle}</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
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
            <h3 className="text-2xl font-bold text-foreground mb-8">{t.about.myJourneyTitle}</h3>
            <div className="space-y-6">
              {t.about.timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start space-x-6 rtl:space-x-reverse group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Line */}
                  {index !== t.about.timeline.length - 1 && (
                    <div className="absolute left-6 rtl:left-auto rtl:right-6 top-12 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent"></div>
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
