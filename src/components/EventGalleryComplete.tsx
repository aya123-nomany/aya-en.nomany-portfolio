import { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Import all images
import event1 from "@/assets/stand.jpg";
import event2 from "@/assets/hackathon.jpg";
import event3 from "@/assets/MRNC.jpg";
import event4 from "@/assets/tech-day.jpg";
import cmc from "@/assets/cmc.jpg";
import formation from "@/assets/formation.jpg";
import certificat from "@/assets/certificat1.jpeg";
import certificate from "@/assets/certificat2.jpeg";
import certificats from "@/assets/certificat3.jpeg";

const EventGalleryComplete = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(t.gallery.categories.all);
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  useEffect(() => {
    setSelectedCategory(t.gallery.categories.all);
  }, [t.gallery.categories.all]);


  const eventImages = [event1, event2, event3, event4, cmc, formation, certificat, certificate, certificats];

  const events = t.gallery.events.map((evt, idx) => {
    // Map additional fields not inside translated object schema
    const urls = [
      "", "", "", "", "", "",
      "https://www.sololearn.com/certificates/CC-BSXLLFOH",
      "https://courses.cognitiveclass.ai/certificates/c2f4feab58b14c4ea0f8af5427621b78",
      "https://skillshop.exceedlms.com/student/award/n7afykjcTYPbTdjQz8fAHpQA"
    ];
    return {
      ...evt,
      image: eventImages[idx],
      url: urls[idx]
    };
  });

  // Map category values to keep filtering working correctly in standard languages
  const getTranslatedCategoryKey = (category: string) => {
    if (category === t.gallery.categories.all) return "all";
    if (category === t.gallery.categories.stand) return "Stand";
    if (category === t.gallery.categories.hackathon) return "Hackathon";
    if (category === t.gallery.categories.competitions) return "Competitions";
    if (category === t.gallery.categories.formations) return "Trainings";
    if (category === t.gallery.categories.certificates) return "Certificates";
    return category;
  };

  const categories = [
    t.gallery.categories.all,
    t.gallery.categories.stand,
    t.gallery.categories.hackathon,
    t.gallery.categories.competitions,
    t.gallery.categories.formations,
    t.gallery.categories.certificates
  ];

  const filteredEvents = selectedCategory === t.gallery.categories.all
    ? events 
    : events.filter(event => event.category === getTranslatedCategoryKey(selectedCategory) || event.category === selectedCategory);

  return (
    <section className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
     
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          >
            {t.gallery.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer border-0 ${
                selectedCategory === category
                  ? "text-white"
                  : "text-gray-200 bg-white/10 backdrop-blur-md"
              }`}
              style={
                selectedCategory === category
                  ? {
                      background: "var(--gradient-primary)",
                      boxShadow: "var(--shadow-glow)"
                    }
                  : {}
              }
              onMouseEnter={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== category) {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className="group overflow-hidden transition-all duration-500 cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:-translate-y-2 hover:shadow-2xl"
              style={{ ['--tw-shadow-color' as string]: 'hsl(var(--primary) / 0.5)' }}
              onMouseEnter={() => setHoveredEvent(event.id)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold text-white" style={{ background: 'var(--gradient-primary)' }}>
                  {categories.find(cat => getTranslatedCategoryKey(cat) === event.category) || event.category}
                </div>

                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                  style={{ opacity: hoveredEvent === event.id ? 1 : 0, background: 'hsl(var(--primary) / 0.9)' }}
                >
                  <p className="text-white text-center px-6 font-medium">{event.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-primary transition-colors" style={{ ['--tw-text-opacity' as string]: '1' }}>
                  {event.title}
                </h3>

                {event.from && (
                  <div className="text-sm text-gray-300 mb-2">
                    {t.gallery.fromLabel} : <span className="font-medium">{event.from}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                    <span className="text-sm text-gray-300">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                    <span className="text-sm text-gray-300">{event.location}</span>
                  </div>
                </div>

                {event.url && (
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block px-4 py-2 text-white rounded-lg transition-all duration-300 animate-fadeInUp hover:opacity-90 hover:scale-105"
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    {t.gallery.viewCert}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 gradient-text">
              {events.length}
            </div>
            <div className="text-base text-gray-200">{t.gallery.statEvents}</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold mb-2 gradient-text">
              {categories.length - 1}
            </div>
            <div className="text-base text-gray-200">{t.gallery.statCategories}</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold mb-2 gradient-text">
              6+
            </div>
            <div className="text-base text-gray-200">{t.gallery.statProjects}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGalleryComplete;
