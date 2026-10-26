import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle, Sparkles, X } from "lucide-react";
import leftImage from "../assets/gestionstock.PNG";
import rightImage from "../assets/restau.PNG";
import restaurantMobileImage1 from "../assets/restaumobile1.png";
import restaurantMobileImage2 from "../assets/restaumobile2.png";
import stockMobileImage1 from "../assets/stockmobile1.png";
import stockMobileImage2 from "../assets/stockmobile2.png";

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
      "Organisez votre restaurant : vos clients scannent un QR code pour consulter le menu et passer commande, et la caisse reçoit les commandes avec des notifications.",
    alt: "Interface de la solution de gestion pour restaurant",
  },
  {
    image: restaurantMobileImage1,
    title: "Application pour restaurant — écran 1",
    description:
      "Gérez votre restaurant depuis une interface mobile pratique et accompagnez vos clients de la commande au service.",
    alt: "Première interface mobile de la solution de gestion pour restaurant",
  },
  {
    image: restaurantMobileImage2,
    title: "Application  pour restaurant — écran 2",
    description:
      "Retrouvez les fonctionnalités de votre solution restaurant sur mobile pour suivre les commandes où que vous soyez.",
    alt: "Deuxième interface mobile de la solution de gestion pour restaurant",
  },
  {
    image: stockMobileImage1,
    title: "Application de gestion de stock — écran 1",
    description:
      "Consultez et gérez vos produits et votre stock directement depuis votre téléphone.",
    alt: "Première interface mobile de la solution de gestion de stock",
  },
  {
    image: stockMobileImage2,
    title: "Application de gestion de stock — écran 2",
    description:
      "Suivez vos entrées, vos sorties et votre activité avec une interface de gestion accessible sur mobile.",
    alt: "Deuxième interface mobile de la solution de gestion de stock",
  },
];

const getWhatsappUrl = (productTitle) => {
  const message = `Bonjour OD Holding, je souhaite acheter « ${productTitle} ». Pouvez-vous me renseigner sur le prix et les modalités ?`;
  return `https://wa.me/2250757109835?text=${encodeURIComponent(message)}`;
};

const ProductOffer = () => {
  const [previewProduct, setPreviewProduct] = useState(null);

  useEffect(() => {
    if (!previewProduct) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setPreviewProduct(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [previewProduct]);

  return (
    <>
      <section className="offer-section" aria-labelledby="offer-title">
        <div className="offer-copy" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <span className="offer-kicker">
            <Sparkles size={16} aria-hidden="true" />
            Application en vente
          </span>
          <h2 id="offer-title">{offerTitle}</h2>
          <p>{offerDescription}</p>
        </div>

        <div
          className="offer-gallery"
          role="region"
          aria-label="Applications en vente, faites défiler horizontalement pour découvrir toutes les offres"
          tabIndex={0}
        >
          {products.map((product) => (
            <article className="offer-card" key={product.title}>
              <button
                className="offer-image-trigger"
                type="button"
                onClick={() => setPreviewProduct(product)}
                aria-label={`Agrandir l’image : ${product.alt}`}
              >
                <img src={product.image} alt={product.alt} />
              </button>
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
                  <MessageCircle size={16} aria-hidden="true" />
                  Acheter maintenant
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {previewProduct && (
        <div
          className="offer-preview-backdrop"
          onClick={() => setPreviewProduct(null)}
        >
          <div
            className="offer-preview-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`Aperçu de l’image : ${previewProduct.alt}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="offer-preview-close"
              type="button"
              onClick={() => setPreviewProduct(null)}
              aria-label="Fermer l’aperçu"
              autoFocus
            >
              <X size={24} aria-hidden="true" />
            </button>
            <img src={previewProduct.image} alt={previewProduct.alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductOffer;