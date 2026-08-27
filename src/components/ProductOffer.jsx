import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import leftImage from "../assets/gestionstock.PNG";
import rightImage from "../assets/restau.png";

const offerTitle = "Des Applications en vente";
const offerDescription =
  "Faites passer votre projet au niveau supérieur avec OD Holding.";

const products = [
  {
    image: leftImage,
    title: "Solution de gestion de stock et caisse",
    description:
      "Pilotez vos produits, stock, caisse, statistique, vos entrées et vos sorties avec une solution simple, claire et adaptée à votre activité etc...",
    alt: "Interface de la solution de gestion de stock",
  },
  {
    image: rightImage,
    title: "Solution de gestion pour restaurant",
    description:
      "Organisez votre restaurant,les clients peuvent scanner le Qr code et passer les commandes, la caissiere recois tout avec des sons de notifications etc... ",
    alt: "Interface de la solution de gestion pour restaurant",
  },
];

const getWhatsappUrl = (productTitle) => {
  const message = `Bonjour OD Holding, je souhaite acheter « ${productTitle} ». Pouvez-vous me renseigner sur le prix et les modalités ?`;
  return `https://wa.me/2250757109835?text=${encodeURIComponent(message)}`;
};

const ProductOffer = () => {
  return (
    <section className="offer-section" aria-labelledby="offer-title">
      <div className="offer-copy" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <span className="offer-kicker">
          <Sparkles size={16} aria-hidden="true" />
          Application en vente
        </span>
        <h2 id="offer-title">{offerTitle}</h2>
        <p>{offerDescription}</p>
      </div>

      <div className="offer-gallery">
        {products.map((product, index) => (
          <article
            className={`offer-card offer-card-${index === 0 ? "left" : "right"}`}
            data-aos="fade-up"
            data-aos-delay={150 + index * 120}
            data-aos-anchor-placement="top-bottom"
            key={product.title}
          >
            <div className="offer-image">
              <img src={product.image} alt={product.alt} />
            </div>
            <div className="offer-card-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <a
                className="offer-button"
                href={getWhatsappUrl(product.title)}
                target="_blank"
                rel="noreferrer"
                aria-label={`Acheter ${product.title} sur WhatsApp`}
              >
                <MessageCircle size={19} aria-hidden="true" />
                Acheter maintenant
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductOffer;