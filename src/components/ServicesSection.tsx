import { Button } from "@/components/ui/button";
import { Code, Smartphone, Palette, Bot, Globe, Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t.services.webDev.title,
      description: t.services.webDev.desc,
      features: t.services.webDev.features,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t.services.uiUx.title,
      description: t.services.uiUx.desc,
      features: t.services.uiUx.features,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: t.services.robotics.title,
      description: t.services.robotics.desc,
      features: t.services.robotics.features,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: t.services.fullStack.title,
      description: t.services.fullStack.desc,
      features: t.services.fullStack.features,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t.services.digital.title,
      description: t.services.digital.desc,
      features: t.services.digital.features,
      color: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t.services.title} <span className="gradient-text">{t.services.titleHighlight}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-500 group-hover:scale-105 h-full">
                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                    {service.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full animate-ping opacity-60"></div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16 glass-card rounded-2xl p-12 animate-fadeInUp">
          <h3 className="text-2xl font-bold mb-4 gradient-text">{t.services.ctaTitle}</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.services.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a href="https://www.linkedin.com/in/aya-en-nomany-47b49b318/">
              <Button variant="hero" size="lg">
                {t.services.ctaBtnStart}
                <ArrowRight className="w-5 h-5 mx-1 rtl:rotate-180" />
              </Button>
            </a>

            <a href="https://ayaennomany.ct.ws/" target="_blank" rel="noopener noreferrer">
              <Button variant="glass" size="lg">
                {t.services.ctaBtnPortfolio}
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;