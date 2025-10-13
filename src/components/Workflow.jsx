import ecomImg from "../assets/ecom.jpg";
import gestionImg from "../assets/gestion.jpg";
import mobileImg from "../assets/mobile.jpg";
import siteImg from "../assets/site.jpg";
import vitrineImg from "../assets/vitrine.jpg";
import codeImg from "../assets/code.jpg";

const services = [
  {
    img: ecomImg,
    title: "Sites E-commerces",
    description: "Création de boutiques en ligne performantes et sécurisées.",
  },
  {
    img: gestionImg,
    title: "Applications de Gestions",
    description: "Solutions de gestion adaptées à votre entreprise.",
  },
  {
    img: mobileImg,
    title: "Applications mobiles",
    description: "Design et développement d'applications iOS et Android.",
  },
  {
    img: siteImg,
    title: "Sites web",
    description: "Sites vitrines et sur-mesure, optimisés pour le référencement.",
  },
  {
    img: vitrineImg,
    title: "Sites Vitrines",
    description: "Présentez votre activité avec un site vitrine élégant et moderne.",
  },
  {
    img: codeImg,
    title: "Maintenance & Code",
    description: "Maintenance, audits et évolutions techniques sur-mesure.",
  },
];

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Nos{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          prestations.
        </span>
      </h2>

      <div className="mt-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const phoneNumber = "2250505051570"; // Remplacez par votre numéro (sans +, ni espaces), ex: 33612345678
            // `s.img` est le chemin résolu par Vite après import; on construit l'URL complète pour l'ajouter au message
            const imageUrl = (typeof window !== 'undefined' && s.img) ? `${window.location.origin}${s.img}` : s.img;
            const message = encodeURIComponent(`Bonjour, je suis intéressé par votre service: ${s.title}. Voici l'image du service: ${imageUrl}. Pouvez-vous m'en dire plus ?`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            return (
              <div key={idx} className="bg-neutral-900 rounded-lg overflow-hidden shadow-sm flex flex-col">
                <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
                <div className="p-4 flex-1">
                  <h5 className="mt-1 mb-2 text-xl">{s.title}</h5>
                  <p className="text-md text-neutral-500">{s.description}</p>
                </div>
                <div className="p-4 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-md transition-colors"
                  >
                    Contacter via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
