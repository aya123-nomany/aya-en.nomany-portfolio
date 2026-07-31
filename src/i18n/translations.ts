export type Language = "fr" | "en" | "ar";

export interface TranslationStructure {
  nav: {
    home: string;
    about: string;
    skills: string;
    services: string;
    projects: string;
    techStack: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    greeting: string;
    role: string;
    bio: string;
    btnStart: string;
    btnRelax: string;
    yearsExp: string;
    projectsDone: string;
    clientSatisfaction: string;
    multiSkilled: string;
  };
  about: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    myStoryTitle: string;
    p1: string;
    p2: string;
    myJourneyTitle: string;
    educationTitle: string;
    educationDesc: string;
    achievementsTitle: string;
    achievementsDesc: string;
    passionTitle: string;
    passionDesc: string;
    focusTitle: string;
    focusDesc: string;
    timeline: {
      year: string;
      title: string;
      description: string;
    }[];
  };
  skills: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    techTitle: string;
    proficiency: string;
    softTitle: string;
    technical: {
      webDev: string;
      contentCreation: string;
      uiUx: string;
      robotics: string;
      programming: string;
      databases: string;
    };
    soft: {
      leadership: { name: string; desc: string };
      problemSolving: { name: string; desc: string };
      adaptability: { name: string; desc: string };
      passion: { name: string; desc: string };
    };
    softList: string[];
  };
  services: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    webDev: { title: string; desc: string; features: string[] };
    uiUx: { title: string; desc: string; features: string[] };
    robotics: { title: string; desc: string; features: string[] };
    fullStack: { title: string; desc: string; features: string[] };
    digital: { title: string; desc: string; features: string[] };
    ctaTitle: string;
    ctaDesc: string;
    ctaBtnStart: string;
    ctaBtnPortfolio: string;
  };
  portfolio: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    liveDemo: string;
    sourceCode: string;
    projects: {
      id: number;
      title: string;
      description: string;
    }[];
  };
  gallery: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      stand: string;
      hackathon: string;
      competitions: string;
      formations: string;
      certificates: string;
    };
    events: {
      id: number;
      title: string;
      date: string;
      location: string;
      category: string;
      description: string;
      from?: string;
    }[];
    viewCert: string;
    fromLabel: string;
    statEvents: string;
    statCategories: string;
    statProjects: string;
  };
  techStack: {
    title: string;
    subtitle: string;
    techs: {
      name: string;
      desc: string;
    }[];
  };
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    conversationTitle: string;
    conversationDesc: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    locationValue: string;
    followMe: string;
    readyTitle: string;
    readyDesc: string;
    scheduleCall: string;
    sendMessageTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sending: string;
    sendBtn: string;
    toastFillRequired: string;
    toastValidEmail: string;
    toastSuccess: string;
    toastError: string;
    toastComingSoon: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    by: string;
    curiosity: string;
  };
}

export const translations: Record<Language, TranslationStructure> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      services: "Services",
      projects: "Projets",
      techStack: "Technologies",
      contact: "Contact",
      downloadCv: "Télécharger CV",
    },
    hero: {
      greeting: "Bonjour, je suis",
      role: "Rêveuse Tech, Développeuse & Designeuse",
      bio: "Je suis AYA EN NOMANY — l'esprit créatif qui allie développement web et passion pour la robotique en solutions performantes. Je dirige avec vision, conçois avec originalité et construis avec une énergie inépuisable.",
      btnStart: "Démarrez la magie",
      btnRelax: "Détendez-vous, votre projet est entre de bonnes mains !",
      yearsExp: "Ans d'expérience",
      projectsDone: "Projets réalisés",
      clientSatisfaction: "Satisfaction client",
      multiSkilled: "Polyvalente",
    },
    about: {
      title: "À propos de",
      titleHighlight: "Moi",
      subtitle: "Développeuse passionnée et motivée, combinant compétences techniques et vision créative pour développer des solutions digitales innovantes et impactantes.",
      myStoryTitle: "Mon Histoire",
      p1: "Bonjour ! Je suis Aya, Développeuse Full-Stack passionnée par le développement web et la robotique. J'aime concevoir des applications web élégantes et fonctionnelles et explorer des solutions innovantes combinant programmation et technologies intelligentes. J'adore apprendre de nouveaux outils et transformer des idées complexes en solutions simples et intuitives.",
      p2: "Lorsque je ne code pas ou ne travaille pas sur des projets de robotique, j'aime explorer les dernières tendances technologiques, développer des projets personnels et partager mes connaissances. Je m'engage à me perfectionner continuellement pour créer des expériences numériques et technologiques impactantes.",
      myJourneyTitle: "Mon Parcours",
      educationTitle: "Éducation",
      educationDesc: "Développeuse Full Stack, formée en développement web et mobile avec un intérêt pour le design graphique.",
      achievementsTitle: "Réalisations",
      achievementsDesc: "Participation et succès dans plusieurs compétitions de robotique, obtention de certifications et réalisation de projets innovants.",
      passionTitle: "Passion",
      passionDesc: "Grande passion pour les technologies émergentes, l'IA et la création de solutions qui facilitent la vie quotidienne.",
      focusTitle: "Objectif",
      focusDesc: "Objectif: devenir une entrepreneuse tech capable de créer des projets digitaux innovants et impactants.",
      timeline: [
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
      ]
    },
    skills: {
      title: "Mes",
      titleHighlight: "Compétences",
      subtitle: "Un mélange complet de maîtrise technique et de vision créative, animé par la passion pour l'innovation et l'apprentissage continu.",
      techTitle: "Expertise Technique",
      proficiency: "Maîtrise",
      softTitle: "Compétences Relationnelles",
      technical: {
        webDev: "Développement Web",
        contentCreation: "Création de Contenu",
        uiUx: "Design UI/UX",
        robotics: "Robotique",
        programming: "Programmation",
        databases: "Bases de Données"
      },
      soft: {
        leadership: { name: "Leadership", desc: "Direction d'équipes et stimulation de l'innovation" },
        problemSolving: { name: "Résolution de problèmes", desc: "Solutions créatives aux défis complexes" },
        adaptability: { name: "Adaptabilité", desc: "Apprentissage rapide et adaptation aux nouvelles technologies" },
        passion: { name: "Passion", desc: "Amour sincère pour la technologie et la création" }
      },
      softList: [
        "Communication", "Travail d'équipe", "Gestion du temps", "Créativité", 
        "Empathie", "Autonomie", "Esprit critique", "Curiosité", "Gestion du stress", 
        "Écoute active", "Organisation", "Esprit d'initiative", "Persévérance", "Négociation"
      ]
    },
    services: {
      title: "Mes",
      titleHighlight: "Services",
      subtitle: "Des solutions numériques complètes adaptées pour donner vie à votre vision avec créativité, innovation et excellence technique.",
      webDev: {
        title: "Développement Web",
        desc: "Sites web et applications web sur mesure créés avec des technologies modernes et de bonnes pratiques.",
        features: ["Design Responsive", "Optimisation des Performances", "SEO-Friendly", "Frameworks Modernes"]
      },
      uiUx: {
        title: "Design UI/UX",
        desc: "Interfaces utilisateur élégantes et intuitives offrant des expériences utilisateur exceptionnelles.",
        features: ["Recherche Utilisateur", "Wireframing", "Prototypage", "Design Visuel"]
      },
      robotics: {
        title: "Projets de Robotique",
        desc: "Solutions de robotique innovantes et systèmes d'automatisation pour diverses applications.",
        features: ["Automatisation", "Intégration de l'IA", "Matériel Sur Mesure", "Solutions IoT"]
      },
      fullStack: {
        title: "Solutions Full-Stack",
        desc: "Services de développement complets de la conception au déploiement et à la maintenance.",
        features: ["Conception de Base de Données", "Développement d'API", "Déploiement Cloud", "Maintenance"]
      },
      digital: {
        title: "Solutions Digitales",
        desc: "Services numériques professionnels conçus pour aider les entreprises à améliorer leur présence en ligne.",
        features: ["Développement Web", "Optimisation UI/UX", "Support SEO", "Assistance Technique"]
      },
      ctaTitle: "Prêt à démarrer votre projet ?",
      ctaDesc: "Collaborons pour concrétiser vos idées grâce à des solutions innovantes à fort impact. Je suis là pour vous accompagner à chaque étape.",
      ctaBtnStart: "Commencer dès aujourd'hui",
      ctaBtnPortfolio: "Voir le portfolio"
    },
    portfolio: {
      title: "Mes",
      titleHighlight: "Projets",
      subtitle: "Voici quelques-uns de mes projets mettant en valeur mes compétences et ma créativité.",
      liveDemo: "Démo en direct",
      sourceCode: "Code Source",
      projects: [
        {
          id: 1,
          title: "Le Château des Délices",
          description: "Ce site du restaurant Le Château des Délices a été réalisé avec Bootstrap, CSS et HTML, offrant une navigation élégante et intuitive."
        },
        {
          id: 2,
          title: "My Book Space",
          description: "Projet permettant aux utilisateurs de gérer facilement leur bibliothèque en ajoutant, modifiant et supprimant des livres."
        },
        {
          id: 3,
          title: "Site Web Portfolio",
          description: "Site web portfolio responsive avec un design moderne et des animations fluides."
        },
        {
          id: 4,
          title: "Plateforme BookSwap",
          description: "Plateforme numérique qui connecte les passionnés de lecture pour échanger, vendre ou acheter des livres facilement."
        },
        {
          id: 5,
          title: "Shop-in-Style",
          description: "Une application React moderne affichant des produits sous forme de cartes dynamiques avec boutons réutilisables et design responsive."
        },
        {
          id: 6,
          title: "Application Météo React",
          description: "Page météo interactive en React permettant de rechercher la météo de n’importe quelle ville en temps réel."
        },
        {
          id: 7,
          title: "SpeedMeal",
          description: "Plateforme full-stack de livraison de repas au Maroc avec suivi temps réel, système de coupons et chat IA intégré."
        },
        {
          id: 8,
          title: "IntelliStore",
          description: "Application e-commerce full-stack développée avec Laravel 11 et SQLite, offrant un suivi de commande en direct et un dashboard admin."
        },
        {
          id: 9,
          title: "CMC Internat",
          description: "Plateforme web et mobile pour digitaliser la gestion des internats au Maroc. Réduit la charge administrative et améliore la communication."
        },
        {
          id: 10,
          title: "Rashfa",
          description: "Plateforme e-commerce haut de gamme et moderne conçue pour une marque de café premium. Elle offre une expérience d'achat immersive avec un accent sur une esthétique riche et des animations fluides."
        },
        {
          id: 11,
          title: "Portfolio WordPress",
          description: "Une refonte de mon portfolio personnel utilisant le CMS WordPress pour une gestion de contenu simplifiée et un design flexible."
        },
        {
          id: 12,
          title: "Simple E-Commerce Website",
          description: "Un site e-commerce simple et élégant, développé avec WordPress et le thème Flatsome, offrant une expérience utilisateur fluide et une gestion facile des produits."
        }
      ]
    },
    gallery: {
      title: "Galerie d'Événements",
      subtitle: "Une collection sélectionnée de moments mémorables lors d'événements auxquels j'ai participé, chacun marquant une étape dans mon parcours professionnel.",
      categories: {
        all: "Tous",
        stand: "Stand",
        hackathon: "Hackathon",
        competitions: "Compétitions",
        formations: "Formations",
        certificates: "Certificats"
      },
      events: [
        {
          id: 1,
          title: "Stand au CMC-RSK",
          date: "2 Octobre 2025",
          location: "Tamesna, CMC",
          category: "Stand",
          description: "Un carrefour où nous avons présenté nos projets robotiques, partagé nos expériences et mis en avant nos compétences en innovation."
        },
        {
          id: 2,
          title: "Hackathon Circuit Jam – EHTP",
          date: "5 Juin 2025",
          location: "EHTP",
          category: "Hackathon",
          description: "Participation au hackathon Circuit Jam et obtention de la 1ère place. Expérience incroyable de travail en équipe et d'innovation."
        },
        {
          id: 3,
          title: "Compétition MRNC 25",
          date: "25 Mai 2024",
          location: "ENSET Mohammedia",
          category: "Compétitions",
          description: "Notre Club Robotics CMC a remporté la première place lors de cette compétition nationale de robotique."
        },
        {
          id: 4,
          title: "Tech-Day 2.0",
          date: "12 Avril 2025",
          location: "École Centrale-Casablanca",
          category: "Compétitions",
          description: "Encadrement de la conception du robot Sam, contrôlable à distance via Bluetooth."
        },
        {
          id: 5,
          title: "Compétition Locale de Robotique",
          date: "20 Janvier 2025",
          location: "CMC, Tamesna",
          category: "Compétitions",
          description: "Victoire de notre équipe à la compétition locale de robotique grâce à un travail d'équipe acharné et innovant."
        },
        {
          id: 6,
          title: "Formation Arduino",
          date: "29 Novembre 2025",
          location: "CMC, Tamesna",
          category: "Formations",
          description: "Animation de la séance sur les capteurs Arduino en tant que formatrice pour les membres du club."
        },
        {
          id: 7,
          title: "Certificat Introduction HTML",
          date: "5 Mai 2025",
          location: "En ligne",
          category: "Certificats",
          from: "Sololearn",
          description: "Certificat attestant de la maîtrise des bases fondamentales du langage HTML5."
        },
        {
          id: 8,
          title: "Certificat Cognitive Class",
          date: "Février 2025",
          location: "En ligne",
          category: "Certificats",
          from: "IBM",
          description: "Certificat délivré par IBM attestant des compétences en programmation et science des données."
        },
        {
          id: 9,
          title: "Principes fondamentaux du Marketing Digital",
          date: "Juillet 2024",
          location: "En ligne",
          category: "Certificats",
          from: "Google",
          description: "Certificat délivré par Google attestant des compétences en stratégie et marketing digital."
        }
      ],
      viewCert: "Voir le certificat",
      fromLabel: "Émis par",
      statEvents: "Événements Participés",
      statCategories: "Catégories d'Événements",
      statProjects: "Projets Présentés"
    },
    techStack: {
      title: "Mes Technologies",
      subtitle: "Technologies, outils & frameworks avec lesquels je travaille",
      techs: [
        { name: "HTML5", desc: "Langage de balisage pour la création de pages web" },
        { name: "CSS3", desc: "Langage de feuilles de style pour la présentation web" },
        { name: "JavaScript", desc: "Le langage de programmation du web" },
        { name: "PHP", desc: "Langage de script côté serveur pour le développement web" },
        { name: "Python", desc: "Langage puissant pour l'IA et le développement web" },
        { name: "SQL", desc: "Langage de requête pour la gestion de bases de données" },
        { name: "React.js", desc: "Bibliothèque JavaScript pour créer des interfaces utilisateur" },
        { name: "Next.js", desc: "Framework React pour les applications web full-stack" },
        { name: "Laravel", desc: "Framework PHP élégant pour le développement web" },
        { name: "Node.js", desc: "Environnement d'exécution JavaScript côté serveur" },
        { name: "Express.js", desc: "Framework minimaliste pour Node.js" },
        { name: "Bootstrap", desc: "Framework CSS pour des designs responsifs" },
        { name: "Tailwind CSS", desc: "Framework CSS orienté utilitaires" },
        { name: "MySQL", desc: "Système de gestion de base de données relationnelle populaire" },
        { name: "SQLite", desc: "Base de données légère et embarquée" },
        { name: "Docker", desc: "Plateforme de conteneurisation d'applications" },
        { name: "Azure", desc: "Plateforme cloud Microsoft pour le déploiement d'apps" },
        { name: "Git", desc: "Système de contrôle de version distribué" },
        { name: "GitHub", desc: "Plateforme de collaboration et d'hébergement de code" },
        { name: "Postman", desc: "Outil de test et documentation des APIs REST" },
        { name: "Figma", desc: "Outil collaboratif de design d'interface" },
        { name: "Arduino", desc: "Plateforme open-source pour projets électroniques" },
        { name: "XAMPP", desc: "Environnement de développement local Apache/PHP/MySQL" },
        { name: "Composer", desc: "Gestionnaire de dépendances pour PHP" },
        { name: "npm", desc: "Gestionnaire de paquets pour l'écosystème JavaScript" },
        { name: "Vite", desc: "Outil de build ultra-rapide pour projets web modernes" }
      ]
    },
    contact: {
      title: "Prenez",
      titleHighlight: "Contact",
      subtitle: "Prêt à concrétiser vos idées ? Collaborons pour créer quelque chose d'incroyable ensemble.",
      conversationTitle: "Démarrons une conversation",
      conversationDesc: "Que vous ayez un projet en tête, besoin de conseils ou simplement envie de saluer, j'aimerais vous lire.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      locationValue: "Disponible à l'international",
      followMe: "Suivez-moi",
      readyTitle: "Prêt à commencer ?",
      readyDesc: "Planifions une consultation gratuite pour discuter des exigences de votre projet.",
      scheduleCall: "Planifier un appel",
      sendMessageTitle: "Envoyer un message",
      nameLabel: "Votre nom",
      namePlaceholder: "Entrez votre nom",
      emailFieldLabel: "Adresse Email",
      emailPlaceholder: "Entrez votre email",
      subjectLabel: "Sujet",
      subjectPlaceholder: "De quoi s'agit-il ?",
      messageLabel: "Message",
      messagePlaceholder: "Parlez-moi de votre projet...",
      sending: "Envoi en cours...",
      sendBtn: "Envoyer le message",
      toastFillRequired: "Veuillez remplir tous les champs obligatoires",
      toastValidEmail: "Veuillez saisir une adresse email valide",
      toastSuccess: "Message envoyé avec succès ! Je vous répondrai très bientôt.",
      toastError: "Échec de l'envoi du message. Veuillez réespérer plus tard.",
      toastComingSoon: "Cette fonctionnalité arrive bientôt ! 🚀"
    },
    footer: {
      tagline: "Créer des expériences numériques avec passion, créativité et innovation. Construisons l'avenir ensemble, un projet à la fois.",
      copyright: "Conçu avec",
      by: "par AYA EN.NOMANY",
      curiosity: "Alimenté par la créativité, l'innovation et une curiosité sans fin"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      techStack: "Tech Stack",
      contact: "Contact",
      downloadCv: "Download CV",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "Tech Dreamer, Code Maker, Design Shaper",
      bio: "I'm AYA EN NOMANY — the creative mind who blends web development, and robotics passion into powerful solutions. I lead with vision, design with originality, and build with unstoppable energy.",
      btnStart: "Let's start the magic",
      btnRelax: "Relax, your project is in safe and creative hands !",
      yearsExp: "Years Experience",
      projectsDone: "Projects Done",
      clientSatisfaction: "Client Satisfaction",
      multiSkilled: "Multi-skilled",
    },
    about: {
      title: "About",
      titleHighlight: "Me",
      subtitle: "Passionate and motivated developer, combining technical skills and creative vision to build innovative digital solutions.",
      myStoryTitle: "My Story",
      p1: "Hello! I'm Aya, Full-Stack Developer with a strong passion for web development and robotics. I love building beautiful and functional web applications and exploring innovative solutions that combine programming with smart technologies.",
      p2: "When I'm not coding or working on robotics projects, I enjoy exploring the latest tech trends, working on personal projects, and sharing knowledge with others. I am committed to continuous learning to create impactful experiences.",
      myJourneyTitle: "My Journey",
      educationTitle: "Education",
      educationDesc: "Full Stack Developer trained in web & mobile development with a strong interest in graphic design.",
      achievementsTitle: "Achievements",
      achievementsDesc: "Success in several robotics competitions, earning certifications and building innovative projects.",
      passionTitle: "Passion",
      passionDesc: "Huge passion for emerging tech, AI, and building digital solutions that simplify daily life.",
      focusTitle: "Focus",
      focusDesc: "Goal: Become a tech entrepreneur capable of creating impactful, innovative digital projects.",
      timeline: [
        {
          year: "2025",
          title: "Full Stack Developer",
          description: "Leading innovative web and mobile projects, combining technical expertise and creativity."
        },
        {
          year: "2024-2025",
          title: "Robotics Explorer",
          description: "Participating in robotics competitions and integrating AI-based solutions."
        },
        {
          year: "2024",
          title: "High School Diploma & CMC Admission",
          description: "Obtained Physics Baccalaureate and entered CMC to start digital development training."
        }
      ]
    },
    skills: {
      title: "My",
      titleHighlight: "Skills",
      subtitle: "A comprehensive blend of technical proficiency and creative vision, powered by passion for innovation.",
      techTitle: "Technical Expertise",
      proficiency: "Proficiency",
      softTitle: "Soft Skills",
      technical: {
        webDev: "Web Development",
        contentCreation: "Content Creation",
        uiUx: "UI/UX Design",
        robotics: "Robotics",
        programming: "Programming",
        databases: "Databases"
      },
      soft: {
        leadership: { name: "Leadership", desc: "Leading teams and driving innovation" },
        problemSolving: { name: "Problem Solving", desc: "Creative solutions to complex challenges" },
        adaptability: { name: "Adaptability", desc: "Quick to learn and adapt to new technologies" },
        passion: { name: "Passion", desc: "Genuine love for technology and creativity" }
      },
      softList: [
        "Communication", "Teamwork", "Time Management", "Creativity", 
        "Empathy", "Autonomy", "Critical Thinking", "Curiosity", "Stress Management", 
        "Active Listening", "Organization", "Initiative", "Perseverance", "Negotiation"
      ]
    },
    services: {
      title: "My",
      titleHighlight: "Services",
      subtitle: "Comprehensive digital solutions tailored to bring your vision to life with creativity, innovation, and technical excellence.",
      webDev: {
        title: "Web Development",
        desc: "Custom websites and web applications built with modern technologies and best practices.",
        features: ["Responsive Design", "Performance Optimization", "SEO-Friendly", "Modern Frameworks"]
      },
      uiUx: {
        title: "UI/UX Design",
        desc: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
        features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
      },
      robotics: {
        title: "Robotics Projects",
        desc: "Innovative robotics solutions and automation systems for various applications.",
        features: ["Automation", "AI Integration", "Custom Hardware", "IoT Solutions"]
      },
      fullStack: {
        title: "Full-Stack Solutions",
        desc: "End-to-end development services from concept to deployment and maintenance.",
        features: ["Database Design", "API Development", "Cloud Deployment", "Maintenance"]
      },
      digital: {
        title: "Digital Solutions",
        desc: "Professional digital services designed to help businesses improve their online presence.",
        features: ["Web Development", "UI/UX Optimization", "SEO Support", "Technical Assistance"]
      },
      ctaTitle: "Ready to Start Your Project?",
      ctaDesc: "Let's collaborate to bring your ideas to life with innovative solutions that make a real impact.",
      ctaBtnStart: "Get Started Today",
      ctaBtnPortfolio: "View Portfolio"
    },
    portfolio: {
      title: "My",
      titleHighlight: "Projects",
      subtitle: "Here are some of my projects that showcase my skills and creativity.",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      projects: [
        {
          id: 1,
          title: "Le Château des Délices",
          description: "Restaurant website created with Bootstrap, CSS, and HTML offering an elegant navigation experience."
        },
        {
          id: 2,
          title: "My Book Space",
          description: "Personal web application for managing your book collection seamlessly."
        },
        {
          id: 3,
          title: "Portfolio Website",
          description: "Responsive portfolio website with modern design and smooth animations."
        },
        {
          id: 4,
          title: "BookSwap Platform",
          description: "Digital platform connecting reading enthusiasts to exchange, buy, or sell books easily."
        },
        {
          id: 5,
          title: "Shop-in-Style",
          description: "Modern React app displaying products in dynamic cards with reusable buttons and responsive design."
        },
        {
          id: 6,
          title: "Weather React App",
          description: "Interactive weather dashboard built with React and OpenWeatherMap API for real-time forecasts."
        },
        {
          id: 7,
          title: "SpeedMeal",
          description: "Full-stack food delivery platform in Morocco with real-time tracking, coupons system, and integrated AI chat."
        },
        {
          id: 8,
          title: "IntelliStore",
          description: "Full-stack e-commerce application built with Laravel 11 and SQLite, featuring live order tracking and an admin dashboard."
        },
        {
          id: 9,
          title: "CMC Internat",
          description: "Web and mobile platform to digitize boarding school management in Morocco, reducing administrative burden and improving communication."
        },
        {
          id: 10,
          title: "Rashfa",
          description: "High-end, modern e-commerce platform designed for a premium coffee brand. It offers a seamless and immersive shopping experience with a focus on rich aesthetics and smooth animations."
        },
        {
          id: 11,
          title: "WordPress Portfolio",
          description: "A redesign of my personal portfolio using the WordPress CMS for streamlined content management and a flexible, responsive design."
        },
        {
          id: 12,
          title: "Simple E-Commerce Website",
          description: "A simple and elegant e-commerce website developed with WordPress and the Flatsome theme, offering a smooth user experience and easy product management."
        }
      ]
    },
    gallery: {
      title: "Event Gallery",
      subtitle: "A curated collection of memorable moments from events I've attended, each a stepping stone in my journey.",
      categories: {
        all: "All",
        stand: "Stand",
        hackathon: "Hackathon",
        competitions: "Competitions",
        formations: "Trainings",
        certificates: "Certificates"
      },
      events: [
        {
          id: 1,
          title: "Stand at CMC-RSK",
          date: "October 2, 2025",
          location: "Tamesna, CMC",
          category: "Stand",
          description: "Showcasing robotics projects, sharing experiences, and highlighting innovation skills."
        },
        {
          id: 2,
          title: "Hackathon Circuit Jam – EHTP",
          date: "June 5, 2025",
          location: "EHTP",
          category: "Hackathon",
          description: "Participated in Circuit Jam Hackathon at EHTP and won 1st place!"
        },
        {
          id: 3,
          title: "MRNC 25 Competition",
          date: "May 25, 2024",
          location: "ENSET Mohammedia",
          category: "Competitions",
          description: "Our CMC Robotics Club won first place in this national robotics competition."
        },
        {
          id: 4,
          title: "Tech-Day 2.0",
          date: "April 12, 2025",
          location: "École Centrale-Casablanca",
          category: "Competitions",
          description: "Co-mentored the design of Sam, a mobile robot controlled via Bluetooth."
        },
        {
          id: 5,
          title: "Local Robotics Competition",
          date: "January 20, 2025",
          location: "CMC, Tamesna",
          category: "Competitions",
          description: "Our team won 1st place in the local robotics competition through team effort."
        },
        {
          id: 6,
          title: "Arduino Training Session",
          date: "November 29, 2025",
          location: "CMC, Tamesna",
          category: "Trainings",
          description: "First experience as a workshop trainer, teaching Arduino sensors to club members."
        },
        {
          id: 7,
          title: "HTML Fundamentals Certificate",
          date: "May 5, 2025",
          location: "Online",
          category: "Certificates",
          from: "Sololearn",
          description: "Certificate certifying core proficiency in HTML5 markup language."
        },
        {
          id: 8,
          title: "Cognitive Class Certificate",
          date: "February 2025",
          location: "Online",
          category: "Certificates",
          from: "IBM",
          description: "Certificate issued by IBM verifying acquired programming & data skills."
        },
        {
          id: 9,
          title: "Fundamentals of Digital Marketing",
          date: "July 2024",
          location: "Online",
          category: "Certificates",
          from: "Google",
          description: "Google certification attesting foundational digital marketing expertise."
        }
      ],
      viewCert: "View Certificate",
      fromLabel: "Issued by",
      statEvents: "Events Attended",
      statCategories: "Event Categories",
      statProjects: "Projects Showcased"
    },
    techStack: {
      title: "My Tech Stack",
      subtitle: "Technologies, tools & frameworks I work with",
      techs: [
        { name: "HTML5", desc: "Markup language for creating web pages" },
        { name: "CSS3", desc: "Style sheet language for web presentation" },
        { name: "JavaScript", desc: "The programming language of the web" },
        { name: "PHP", desc: "Server-side scripting language for web development" },
        { name: "Python", desc: "Powerful programming language for AI and web" },
        { name: "SQL", desc: "Query language for database management" },
        { name: "React.js", desc: "JavaScript library for building user interfaces" },
        { name: "Next.js", desc: "React framework for full-stack web applications" },
        { name: "Laravel", desc: "Elegant PHP framework for web development" },
        { name: "Node.js", desc: "JavaScript runtime environment on the server side" },
        { name: "Express.js", desc: "Minimalist framework for Node.js" },
        { name: "Bootstrap", desc: "CSS framework for responsive designs" },
        { name: "Tailwind CSS", desc: "Utility-first CSS framework" },
        { name: "MySQL", desc: "Popular relational database management system" },
        { name: "SQLite", desc: "Lightweight embedded database engine" },
        { name: "Docker", desc: "Application containerization platform" },
        { name: "Azure", desc: "Microsoft cloud platform for app deployment" },
        { name: "Git", desc: "Distributed version control system" },
        { name: "GitHub", desc: "Platform for collaboration and code hosting" },
        { name: "Postman", desc: "Tool for testing and documenting REST APIs" },
        { name: "Figma", desc: "Collaborative interface design tool" },
        { name: "Arduino", desc: "Open-source platform for electronics projects" },
        { name: "XAMPP", desc: "Local development environment Apache/PHP/MySQL" },
        { name: "Composer", desc: "Dependency manager for PHP" },
        { name: "npm", desc: "Package manager for the JavaScript ecosystem" },
        { name: "Vite", desc: "Ultra-fast build tool for modern web projects" }
      ]
    },
    contact: {
      title: "Get In",
      titleHighlight: "Touch",
      subtitle: "Ready to bring your ideas to life? Let's collaborate and create something amazing together.",
      conversationTitle: "Let's Start a Conversation",
      conversationDesc: "Whether you have a project in mind, need consultation, or just want to say hello, I'd love to hear from you.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      locationValue: "Available Worldwide",
      followMe: "Follow Me",
      readyTitle: "Ready to Start?",
      readyDesc: "Let's schedule a free consultation to discuss your project requirements.",
      scheduleCall: "Schedule a Call",
      sendMessageTitle: "Send a Message",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your name",
      emailFieldLabel: "Email Address",
      emailPlaceholder: "Enter your email",
      subjectLabel: "Subject",
      subjectPlaceholder: "What's this about?",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sending: "Sending...",
      sendBtn: "Send Message",
      toastFillRequired: "Please fill all required fields",
      toastValidEmail: "Please enter a valid email address",
      toastSuccess: "Message sent successfully! I will get back to you soon.",
      toastError: "Failed to send message. Please try again later.",
      toastComingSoon: "This feature is coming soon! 🚀"
    },
    footer: {
      tagline: "Crafting digital experiences with passion, creativity, and innovation. Let's build the future together, one project at a time.",
      copyright: "Made with",
      by: "by AYA EN.NOMANY",
      curiosity: "Powered by creativity, innovation, and endless curiosity"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عنّي",
      skills: "المهارات",
      services: "الخدمات",
      projects: "المشاريع",
      techStack: "التقنيات",
      contact: "التواصل",
      downloadCv: "تحميل السيرة الذاتية",
    },
    hero: {
      greeting: "مرحباً، أنا",
      role: "مبتكرة في التكنولوجيا، مطوّرة ومصممة",
      bio: "أنا آية النعماني — شغوفة بتطوير الويب والروبوتات، أدمج الإبداع والتكنولوجيا لبناء حلول رقمية مبتكرة وفعالة برؤية وطاقة لا تتوقف.",
      btnStart: "ابدأ التجربة الإبداعية",
      btnRelax: "اطمئن، مشروعك في أيدٍ أمينة ومبدعة!",
      yearsExp: "سنوات خبرة",
      projectsDone: "مشاريع مكتملة",
      clientSatisfaction: "رضا العملاء",
      multiSkilled: "متعددة المهارات",
    },
    about: {
      title: "نبذة",
      titleHighlight: "عنّي",
      subtitle: "مطوّرة شغوفة ومحفزة، تجمع بين الخبرة التقنية والرؤية الإبداعية لتطوير حلول رقمية مبتكرة ذات أثر ملموس.",
      myStoryTitle: "قصتي",
      p1: "مرحباً! أنا آية، مطورة Full-Stack وشغوفة بتطوير الويب والروبوتات. أحب بناء تطبيقات ويب أنيقة وفعالة واستكشاف حلول ذكية تجمع بين البرمجة والتقنيات الحديثة. أستمتع بتعلم أدوات جديدة وتحويل الأفكار المعقدة إلى حلول بسيطة وسلسة.",
      p2: "عندما لا أكون بصدد البرمجة أو العمل على مشاريع الروبوتات، أستمتع بمتابعة أحدث التوجهات التقنية، والعمل على مشاريع شخصية ومشاركة المعرفة. أنا ملتزمة بالتعلم المستمر لتقديم تجارب رقمية مميزة.",
      myJourneyTitle: "مساري",
      educationTitle: "التعليم",
      educationDesc: "مطورة Full Stack مع تدريب شامل في تطوير الويب والموبايل واهتمام كبير بالتصميم الجرافيكي.",
      achievementsTitle: "الإنجازات",
      achievementsDesc: "المشاركة والفوز في عدة مسابقات للروبوتات، والحصول على شهادات وتطوير مشاريع مبتكرة.",
      passionTitle: "الشغف",
      passionDesc: "شغف كبير بالتقنيات الناشئة والذكاء الاصطناعي وبناء حلول تسهل الحياة اليومية.",
      focusTitle: "الهدف",
      focusDesc: "الهدف: أن أصبح رائدة أعمال تقنية قادرة على خلق مشاريع رقمية مبتكرة ومؤثرة.",
      timeline: [
        {
          year: "2025",
          title: "مطورة Full Stack",
          description: "قيادة مشاريع ويب وموبايل مبتكرة تجمع بين الخبرة البرمجية والإبداع."
        },
        {
          year: "2024-2025",
          title: "مستكشفة في عالم الروبوتات",
          description: "المشاركة في مسابقات الروبوتات ودمج حلول الذكاء الاصطناعي."
        },
        {
          year: "2024",
          title: "البكالوريا والالتحاق بـ CMC",
          description: "الحصول على بكالوريا العلوم الفيزيائية والانضمام لمؤسسة CMC لبدء التكوين في التطوير الرقمي."
        }
      ]
    },
    skills: {
      title: "مهاراتي",
      titleHighlight: "والخبرات",
      subtitle: "مزيج متكامل من الإتقان التقني والرؤية الإبداعية مدفوع بالشغف بالابتكار والتعلم المستمر.",
      techTitle: "الخبرة التقنية",
      proficiency: "مستوى الإتقان",
      softTitle: "المهارات الشخصية",
      technical: {
        webDev: "تطوير الويب",
        contentCreation: "صناعة المحتوى",
        uiUx: "تصميم واجهات المستخدم UI/UX",
        robotics: "الروبوتات",
        programming: "البرمجة",
        databases: "قواعد البيانات"
      },
      soft: {
        leadership: { name: "القيادة", desc: "قيادة الفرق وتحفيز الابتكار" },
        problemSolving: { name: "حل المشكلات", desc: "حلول إبداعية للتحديات المعقدة" },
        adaptability: { name: "المرونة والتكيف", desc: "سرعة التعلم والتكيف مع التقنيات الجديدة" },
        passion: { name: "الشغف", desc: "حب حقيقي للتكنولوجيا والتصميم الإبداعي" }
      },
      softList: [
        "التواصل", "العمل الجماعي", "إدارة الوقت", "الإبداع", 
        "التعاطف", "الاستقلالية", "التفكير النقدي", "الفضول", "إدارة الضغوط", 
        "الاستماع النشط", "التنظيم", "المبادرة", "المثابرة", "التفاوض"
      ]
    },
    services: {
      title: "خدماتي",
      titleHighlight: "المميزة",
      subtitle: "حلول رقمية شاملة ومصممة خصيصاً لتحويل رؤيتك إلى واقع بإبداع وابتكار وجودة تقنية عالية.",
      webDev: {
        title: "تطوير الويب",
        desc: "مواقع وتطبيقات ويب مخصصة مبنية بأحدث التقنيات وأفضل الممارسات البرمجية.",
        features: ["تصميم متجاوب", "تحسين الأداء", "صديق لمحركات البحث SEO", "أطر عمل حديثة"]
      },
      uiUx: {
        title: "تصميم واجهات المستخدم UI/UX",
        desc: "واجهات جذابة وسلسة توفر تجربة مستخدم استثنائية وسهلة الاستخدام.",
        features: ["بحث المستخدم", "التخطيط الهيكلي Wireframing", "النماذج الأولية Prototyping", "التصميم البصري"]
      },
      robotics: {
        title: "مشاريع الروبوتات",
        desc: "حلول روبوتية مبتكرة وأنظمة أتمتة متقدمة لمختلف التطبيقات.",
        features: ["الأتمتة", "دمج الذكاء الاصطناعي", "أنظمة مخصصة", "حلول إنترنت الأشياء IoT"]
      },
      fullStack: {
        title: "حلول Full-Stack المتكاملة",
        desc: "خدمات تطوير شاملة من الفكرة وحتى النشر والصيانة.",
        features: ["تصميم قواعد البيانات", "تطوير الـ APIs", "النشر السحابي", "الصيانة والدعم"]
      },
      digital: {
        title: "الحلول الرقمية",
        desc: "خدمات رقمية احترافية تهدف لمساعدة الأفراد والشركات على تعزيز حضورهم الرقمي.",
        features: ["تطوير الويب", "تحسين تجربة المستخدم", "دعم الـ SEO", "المساعدة التقنية"]
      },
      ctaTitle: "هل أنت جاهز لبدء مشروعك؟",
      ctaDesc: "لنعمل معاً لتحويل أفكارك إلى واقع عبر حلول مبتكرة ذات أثر ملموس.",
      ctaBtnStart: "ابدأ اليوم",
      ctaBtnPortfolio: "عرض الأعمال"
    },
    portfolio: {
      title: "أبرز",
      titleHighlight: "مشاريعي",
      subtitle: "إليك مجموعة من المشاريع التي تبرز مهاراتي وإبداعي في البرمجة والتصميم.",
      liveDemo: "معاينة حية",
      sourceCode: "الرمز المصدري",
      projects: [
        {
          id: 1,
          title: "Le Château des Délices",
          description: "موقع مطعم فاخر تم تطويره بـ Bootstrap و CSS و HTML بأسلوب أنيق وسهل التصفح."
        },
        {
          id: 2,
          title: "My Book Space",
          description: "تطبيق ويب شخصي يسمح للمستخدمين بإدارة وتعديل وإضافة الكتب بسهولة لكتالوج المكتبة."
        },
        {
          id: 3,
          title: "موقع معرض الأعمال Portfolio",
          description: "موقع شخصي متجاوب بتصميم عصري ورسوم متحركة سلسة."
        },
        {
          id: 4,
          title: "منصة BookSwap",
          description: "منصة رقمية تجمع عشاق القراءة لتبادل، بيع، أو شراء الكتب بسهولة وتسهيل الوصول للمعرفة."
        },
        {
          id: 5,
          title: "Shop-in-Style",
          description: "تطبيق React عصري يعرض المنتجات في بطاقات تفاعلية مع تصميم متجاوب وأزرار قابلة لإعادة الاستخدام."
        },
        {
          id: 6,
          title: "تطبيق الطقس بـ React",
          description: "تطبيق طقس تفاعلي يعرض حالة الطقس والحرارة والرياح لأي مدينة في العالم في الوقت الفعلي."
        },
        {
          id: 7,
          title: "SpeedMeal",
          description: "منصة متكاملة لتوصيل الطعام في المغرب مع تتبع في الوقت الفعلي، نظام قسائم، ودردشة ذكاء اصطناعي مدمجة."
        },
        {
          id: 8,
          title: "IntelliStore",
          description: "تطبيق متجر إلكتروني متكامل مبني باستخدام Laravel 11 و SQLite، يوفر تتبع الطلبات المباشر ولوحة تحكم للمسؤول."
        },
        {
          id: 9,
          title: "CMC Internat",
          description: "منصة ويب وموبايل لرقمنة إدارة الداخليات في المغرب، تقلل من العبء الإداري وتحسن التواصل مع أولياء الأمور."
        },
        {
          id: 10,
          title: "Rashfa",
          description: "منصة تجارة إلكترونية راقية وحديثة مصممة لعلامة تجارية فاخرة للقهوة. توفر تجربة تسوق سلسة وغامرة مع التركيز على الجماليات الغنية والرسوم المتحركة السلسة."
        },
        {
          id: 11,
          title: "محفظة ووردبريس",
          description: "إعادة تصميم لمحفظة أعمالي الشخصية باستخدام نظام إدارة المحتوى ووردبريس لإدارة محتوى مبسطة وتصميم مرن ومتجاوب."
        },
        {
          id: 12,
          title: "موقع تجارة إلكترونية",
          description: "موقع تجارة إلكترونية بسيط وأنيق تم تطويره باستخدام ووردبريس وقالب Flatsome، يوفر تجربة مستخدم سلسة وإدارة سهلة للمنتجات."
        }
      ]
    },
    gallery: {
      title: "معرض الأحداث والفعاليات",
      subtitle: "مجموعة مختارة من اللحظات المميزة والمسابقات والشهادات التي شاركت فيها خلال مسيرتي المهنية.",
      categories: {
        all: "الكل",
        stand: "جناح عرض",
        hackathon: "هاكاثون",
        competitions: "مسابقات",
        formations: "دورات تدريبية",
        certificates: "شهادات"
      },
      events: [
        {
          id: 1,
          title: "جناح العرض في CMC-RSK",
          date: "2 أكتوبر 2025",
          location: "تامسنا، CMC",
          category: "جناح عرض",
          description: "عرض مشاريعنا في الروبوتات ومشاركة الخبرات ومهارات الابتكار بحضور مسؤولي القطاع."
        },
        {
          id: 2,
          title: "هاكاثون Circuit Jam – المدرسة الحسنية للأشغال العمومية",
          date: "5 يونيو 2025",
          location: "EHTP",
          category: "هاكاثون",
          description: "المشاركة في هاكاثون Circuit Jam والتتويج بالمرتبة الأولى بفكرة وتقنية مبتكرة."
        },
        {
          id: 3,
          title: "مسابقة MRNC 25",
          date: "25 مايو 2024",
          location: "ENSET المحمدية",
          category: "مسابقات",
          description: "فوز نادي الروبوتات CMC بالمركز الأول في مسابقة الروبوتات الوطنية."
        },
        {
          id: 4,
          title: "Tech-Day 2.0",
          date: "12 أبريل 2025",
          location: "المدرسة المركزية بالدار البيضاء",
          category: "مسابقات",
          description: "الإشراف على تصميم الروبوت الذكي Sam والتحكم فيه عن بُعد عبر البلوتوث."
        },
        {
          id: 5,
          title: "المسابقة المحلية للروبوتات",
          date: "20 يناير 2025",
          location: "CMC، تامسنا",
          category: "مسابقات",
          description: "فوز فريقنا بالمرتبة الأولى في مسابقة الروبوتات المحلية بفضل العمل الجماعي المتميز."
        },
        {
          id: 6,
          title: "ورشة تدريب Arduino",
          date: "29 نوفمبر 2025",
          location: "CMC، تامسنا",
          category: "دورات تدريبية",
          description: "تقديم ورشة تدريبية لأعضاء النادي حول استخدام حسّاسات Arduino وكيفية برمجة الأنظمة الذكية."
        },
        {
          id: 7,
          title: "شهادة أساسيات HTML",
          date: "5 مايو 2025",
          location: "عبر الإنترنت",
          category: "شهادات",
          from: "Sololearn",
          description: "شهادة تعكس إتقان الأساسيات الشاملة للغة HTML5."
        },
        {
          id: 8,
          title: "شهادة Cognitive Class",
          date: "فبراير 2025",
          location: "عبر الإنترنت",
          category: "شهادات",
          from: "IBM",
          description: "شهادة من شركة IBM معتمدة في علوم البيانات والبرمجة."
        },
        {
          id: 9,
          title: "أساسيات التسويق الرقمي",
          date: "يوليو 2024",
          location: "عبر الإنترنت",
          category: "شهادات",
          from: "Google",
          description: "شهادة من شركة Google معتمدة في أساسيات التسويق الإلكتروني."
        }
      ],
      viewCert: "عرض الشهادة",
      fromLabel: "مقدمة من",
      statEvents: "فعاليات تم الحضور فيها",
      statCategories: "تصنيفات الفعاليات",
      statProjects: "مشاريع معروضة"
    },
    techStack: {
      title: "تقنياتي المعتمدة",
      subtitle: "التقنيات والأدوات وأطر العمل التي أعمل بها",
      techs: [
        { name: "HTML5", desc: "لغة الهيكلة الأساسية لصفحات الويب" },
        { name: "CSS3", desc: "لغة التنسيق والتصميم المرئي للمواقع" },
        { name: "JavaScript", desc: "لغة البرمجة الأساسية للويب" },
        { name: "PHP", desc: "لغة برمجة من جانب الخادم لتطوير الويب" },
        { name: "Python", desc: "لغة برمجية قوية للذكاء الاصطناعي وتطوير الويب" },
        { name: "SQL", desc: "لغة الاستعلام لإدارة قواعد البيانات" },
        { name: "React.js", desc: "مكتبة JavaScript لبناء واجهات مستخدم حديثة وتفاعلية" },
        { name: "Next.js", desc: "إطار عمل React لتطبيقات الويب المتكاملة" },
        { name: "Laravel", desc: "إطار عمل PHP أنيق لتطوير الويب" },
        { name: "Node.js", desc: "بيئة تشغيل JavaScript على جانب الخادم" },
        { name: "Express.js", desc: "إطار عمل خفيف الوزن لـ Node.js" },
        { name: "Bootstrap", desc: "إطار عمل CSS لتصاميم المتجاوبة" },
        { name: "Tailwind CSS", desc: "إطار عمل CSS سريع وموجه للفئات والأدوات" },
        { name: "MySQL", desc: "نظام إدارة قواعد البيانات العلاقية الأشهر" },
        { name: "SQLite", desc: "محرك قواعد بيانات خفيف ومدمج" },
        { name: "Docker", desc: "منصة احتواء التطبيقات" },
        { name: "Azure", desc: "منصة سحابية من مايكروسوفت لنشر التطبيقات" },
        { name: "Git", desc: "نظام إدارة إصدارات الأكواد البرمجية" },
        { name: "GitHub", desc: "منصة استضافة المشاريع والتعاون البرمجي" },
        { name: "Postman", desc: "أداة اختبار وتوثيق واجهات REST API" },
        { name: "Figma", desc: "أداة تفاعلية لتصميم واجهات وتجارب المستخدم" },
        { name: "Arduino", desc: "منصة مفتوحة المصدر للمشاريع الإلكترونية" },
        { name: "XAMPP", desc: "بيئة تطوير محلية Apache/PHP/MySQL" },
        { name: "Composer", desc: "مدير التبعيات للغة PHP" },
        { name: "npm", desc: "مدير الحزم لنظام JavaScript" },
        { name: "Vite", desc: "أداة بناء فائقة السرعة لمشاريع الويب الحديثة" }
      ]
    },
    contact: {
      title: "تواصل",
      titleHighlight: "معي",
      subtitle: "هل أنت جاهز لتحويل أفكارك إلى واقع؟ لنعمل معاً وننشئ شيئاً رائعاً.",
      conversationTitle: "لنبدأ الحوار",
      conversationDesc: "سواء كان لديك مشروع، أو تحتاج إلى استشارة تقنية، أو ترغب فقط في إلقاء التحية، يسعدني تواصلك.",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      locationLabel: "الموقع الجغرافي",
      locationValue: "متاحة للعمل دولياً",
      followMe: "تابعني على",
      readyTitle: "جاهز للبدء؟",
      readyDesc: "احجز استشارة مجانية لمناقشة متطلبات مشروعك بالتفصيل.",
      scheduleCall: "تحديد موعد مكالمة",
      sendMessageTitle: "إرسال رسالة",
      nameLabel: "الاسم الكريم",
      namePlaceholder: "أدخل اسمك الكامل",
      emailFieldLabel: "البريد الإلكتروني",
      emailPlaceholder: "أدخل بريدك الإلكتروني",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "عن ماذا يدور موضوعك؟",
      messageLabel: "الرسالة",
      messagePlaceholder: "حدثني عن مشروعك والأفكار التي تريد تنفيذها...",
      sending: "جاري الإرسال...",
      sendBtn: "إرسال الرسالة",
      toastFillRequired: "يرجى ملء جميع الحقول المطلوبة",
      toastValidEmail: "يرجى أدخال عنوان بريد إلكتروني صحيح",
      toastSuccess: "تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.",
      toastError: "حدث خطأ أثناء الإرسال. يرجى المحاولة لاحقاً.",
      toastComingSoon: "هذه الميزة ستكون متوفرة قريباً! 🚀"
    },
    footer: {
      tagline: "صناعة تجارب رقمية بشغف وإبداع وابتكار. لنبنِ المستقبل معاً مشروعاً تلو الآخر.",
      copyright: "تم التصميم بـ",
      by: "بواسطة آية النعماني",
      curiosity: "مدعوم بالإبداع والابتكار والشغف المستمر"
    }
  }
};
