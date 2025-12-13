import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";

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

const events = [
  {
    id: 1,
    title: "Stand at CMC-RSK",
    date: "October 2, 2025",
    location: "Tamesna, CMC",
    category: "Stand",
    image: event1,
    description: "Un carrefour où nous avons présenté nos projets robotiques, partagé nos expériences et mis en avant nos compétences en innovation et travail d’équipe, tout en étant inspirés par la visite officielle des responsables du secteur de la formation et de l’emploi.",
  },
  {
    id: 2,
    title: "Hackathon Circuit Jam – École Hassania des Travaux Publics",
    date: "June 5, 2025",
    location: "EHTP",
    category: "Hackathon",
    image: event2,
    description: "J’ai participé au hackathon Circuit Jam à l’École Hassania des Travaux Publics et j’ai eu la chance de remporter la première place. Une expérience incroyable qui m’a permis de mettre en pratique mes compétences, de travailler en équipe et de relever des défis technologiques avec créativité et passion.",
  },
  {
    id: 3,
    title: "MRNC 25 Competition",
    date: "May 25, 2024",
    location: "ENSET Mohammedia",
    category: "Competitions",
    image: event3,
    description: "Notre Club Robotics CMC a participé à une compétition de robotique organisée par l’ENSET Mohammedia, où notre club a remporté la première place. Cette expérience m’a permis de mettre en pratique mes compétences, de travailler en équipe et de développer ma créativité et mon esprit d’innovation dans un contexte compétitif et technologique.",
  },
  {
    id: 4,
    title: "Tech-Day 2.0",
    date: "April 12, 2025",
    location: "École Centrale-Casablanca",
    category: "Competitions",
    image: event4,
    description: "J’ai participé à la 2e édition du Tech-Day à l’École Centrale Casablanca, sponsorisée par Cnexia, où j’ai encadré avec mon équipe la conception du robot Sam, un robot mobile contrôlable à distance via Bluetooth. Ce projet m’a permis de mettre en pratique mes compétences en électronique, programmation et travail d’équipe, tout en partageant notre passion pour la technologie.",
  },
  {
    id: 5,
    title: "Compétition Locale de Robotique",
    date: "January 20, 2025",
    location: "CMC, Tamesna",
    category: "Competitions",
    image: cmc,
    description: "Je suis très fière d’annoncer que notre équipe a remporté la compétition locale de robotique! Grâce à beaucoup de travail, de créativité et de collaboration, nous avons relevé les défis et atteint cet accomplissement. Un grand merci au Club Robotique CMC Rabat Salé Kénitra pour cette opportunité et à tous ceux qui nous ont soutenus. Cette victoire reflète la force du travail d’équipe et de l’innovation, et nous aspirons désormais à briller au niveau national.",
  },
  {
    id: 6,
    title: "Formation Arduino",
    date: "November 29, 2025",
    location: "CMC, Tamesna",
    category: "Formations",
    image: formation,
    description: "Ma première expérience en tant que formatrice a été très enrichissante. Lors de la séance 3 du club, j’ai expliqué la partie des capteurs Arduino. C’était motivant de partager mes connaissances et de voir les autres comprendre comment utiliser les capteurs efficacement.",
  },
  {
    id: 7,
    title: "Certificat Introduction HTML",
    date: "May 5, 2025",
    from: "Sololearn",
    category: "Certificats",
    image: certificat,
    description: "J'ai obtenu ce certificat après ma formation HTML, attestant mes compétences acquises sur les bases du HTML.",
    url: "https://www.sololearn.com/certificates/CC-BSXLLFOH",
    skills: ["HTML5"] 
  },
  {
  id: 8, 
  title: "Certificat Cognitive Class",
  date: "February 2025",
  from: "IBM",
  category: "Certificats",
  image: certificate, 
  description: "Certificat délivré par IBM via Cognitive Class, attestant mes compétences acquises.",
  url: "https://courses.cognitiveclass.ai/certificates/c2f4feab58b14c4ea0f8af5427621b78  ", 
  skills: ["python"] 
},
{
  id: 9,
  title: "Fundamentals of Digital Marketing",
  date: "July 2024",
  from: "Google",
  category: "Certificats",
  image: certificats,
  description: "Certificat délivré par Google attestant mes compétences fondamentales en marketing digital.",
  url: "https://skillshop.exceedlms.com/student/award/n7afykjcTYPbTdjQz8fAHpQA",
  skills: ["Digital Marketing"]
}


];

const EventGalleryComplete = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(events.map(event => event.category)))];

  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <section className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
     
        <div className="text-center mb-16">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #ec4899, #f472b6, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Event Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A curated collection of memorable moments from the events I've attended, each one a stepping stone in my professional journey.
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
                      background: "linear-gradient(135deg, #ec4899, #f472b6)",
                      boxShadow: "0 0 40px rgba(236, 72, 153, 0.4)"
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
              className="group overflow-hidden transition-all duration-500 cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/50"
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

                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold bg-pink-500/90 text-white">
                  {event.category}
                </div>

                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-pink-500/90"
                  style={{ opacity: hoveredEvent === event.id ? 1 : 0 }}
                >
                  <p className="text-white text-center px-6 font-medium">{event.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-pink-300 transition-colors">
                  {event.title}
                </h3>

                {event.from && (
                  <div className="text-sm text-gray-300 mb-2">
                    From: <span className="font-medium">{event.from}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-pink-400" />
                    <span className="text-sm text-gray-300">{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    <span className="text-sm text-gray-300">{event.location}</span>
                  </div>
                </div>

                {event.url && (
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    Voir le certificat
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              {events.length}
            </div>
            <div className="text-base text-gray-200">Events Attended</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              {categories.length - 1}
            </div>
            <div className="text-base text-gray-200">Event Categories</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent">
              6+
            </div>
            <div className="text-base text-gray-200">Projects Showcased</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGalleryComplete;
