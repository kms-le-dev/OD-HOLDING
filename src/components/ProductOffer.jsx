import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Eye,
  Headset,
  MessageCircle,
  ShieldCheck,
  ShoppingCart,
  X,
  Zap,
} from "lucide-react";

import leftImage from "../assets/gestionstock.webp";
import rightImage from "../assets/restau.webp";
import restaurantMobileImage1 from "../assets/restaumobile1.webp";
import restaurantMobileImage2 from "../assets/restaumobile2.webp";
import stockpoissonnerie from "../assets/poissonnerie.png";
import stockMobileImage from "../assets/stockmobile.webp";
import moneglise from "../assets/moneglise.webp";
import gestionetablissement from "../assets/gestionetablissement.PNG";

const offerDescription =
  "Faites passer votre projet au niveau supérieur avec OD Holding.";

const products = [
  {
    image: gestionetablissement,
    category: "Gestion établissement",
    tag: "Application de Gestion",
    title: "Application Web de Gestion d'établissement",
    description:
      "Application de gestion d’établissement couvrant notamment les inscriptions, la scolarité et les emplois du temps. L’interface est protégée.",
    alt: "Mini réseau social pour église",
    imageLayout: "cover",
    features: ["Gestion Finance", "Gestion étudiants", "stockage de donnée"],
  },
  {
    image: moneglise,
    category: "Mon eglise",
    tag: "Solution pour eglise",
    title: "Site web pour Église",
    description:
      "Site web pour Église, mini réseau social qui permet aux membres de poster des photos, videos, informations etc...",
    alt: "Mini réseau social pour église",
    imageLayout: "cover",
    features: ["Réseau social", "pulications de photo", "publication d'information"],
  },
  {
    image: leftImage,
    category: "Gestion de stock",
    tag: "Solution professionnelle",
    title: "Solution de gestion de stock et caisse",
    description:
      "Pilotez vos produits, vos entrées et sorties, votre caisse et vos statistiques depuis un seul outil.",
    alt: "Interface de la solution de gestion de stock",
    imageLayout: "cover",
    features: ["Suivi du stock en temps réel", "Caisse et ventes", "Rapports et statistiques"],
  },
  {
    image: rightImage,
    category: "Restauration",
    tag: "Performance",
    title: "Solution de gestion pour restaurant",
    description:
      "Simplifiez le service : vos clients consultent le menu par QR code et passent commande en ligne.",
    alt: "Interface de la solution de gestion pour restaurant",
    imageLayout: "cover",
    features: ["Menu digital par QR code", "Gestion des commandes", "Notifications en temps réel"],
  },
  {
    image: restaurantMobileImage1,
    category: "Application mobile",
    tag: "Innovation",
    title: "Application mobile pour restaurant",
    description:
      "Retrouvez les fonctionnalités essentielles de votre restaurant dans une interface mobile pratique.",
    alt: "Première interface mobile de la solution de gestion pour restaurant",
    imageLayout: "contain",
    features: ["Interface intuitive", "Suivi des commandes", "Gestion simplifiée"],
  },
  {
    image: restaurantMobileImage2,
    category: "Application mobile",
    tag: "Pratique au quotidien",
    title: "Suivi des commandes restaurant",
    description:
      "Suivez l’activité et les commandes de votre établissement où que vous soyez.",
    alt: "Deuxième interface mobile de la solution de gestion pour restaurant",
    imageLayout: "contain",
    features: ["Commandes centralisées", "Suivi en mobilité", "Prise en main rapide"],
  },
  {
    image: stockpoissonnerie,
    category: "Gestion de stock",
    tag: "Spécial poissonnerie",
    title: "Application de gestion de stock de Poissonnerie",
    description:
      "Une solution pensée pour consulter et gérer les produits de votre poissonnerie.",
    alt: "Première interface mobile de la solution de gestion de stock",
    imageLayout: "contain",
    features: ["Produits et inventaire", "Suivi du stock", "Accès sur mobile"],
  },
  {
    image: stockMobileImage,
    category: "Gestion de stock",
    tag: "Spécial supermarché",
    title: "Application de gestion de stock pour Supermarché",
    description:
      "Gardez le contrôle sur vos entrées, sorties et produits grâce à une interface mobile.",
    alt: "Deuxième interface mobile de la solution de gestion de stock",
    imageLayout: "contain",
    features: ["Entrées et sorties", "Suivi des produits", "Gestion sur mobile"],
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
        <div
          className="offer-copy"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <span className="offer-kicker">
            <ShoppingCart size={17} aria-hidden="true" />
            Applications disponibles
          </span>
          <h2 id="offer-title">
            Des applications en <span>vente</span>
          </h2>
          <p>{offerDescription}</p>
        </div>

        <ul className="offer-trust-list" aria-label="Nos engagements">
          <li><ShieldCheck size={19} aria-hidden="true" /> Solutions sécurisées</li>
          <li><Zap size={19} aria-hidden="true" /> Installation rapide</li>
          <li><Headset size={19} aria-hidden="true" /> Support dédié</li>
          <li><BadgeCheck size={19} aria-hidden="true" /> Qualité garantie</li>
        </ul>

        <div
          className="offer-gallery"
          role="region"
          aria-label="Applications en vente. Faites défiler horizontalement pour découvrir toutes les offres."
          tabIndex={0}
        >
          {products.map((product) => (
            <article className="offer-card" key={product.title}>
              <button
                className={`offer-image-trigger offer-image-${product.imageLayout}`}
                type="button"
                onClick={() => setPreviewProduct(product)}
                aria-label={`Voir les détails : ${product.title}`}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="offer-image-hint">
                  <Eye size={15} aria-hidden="true" />
                  Découvrir
                </span>
              </button>
              <div className="offer-card-content">
                <div className="offer-card-heading">
                  <span className="offer-category">{product.category}</span>
                  <span className="offer-tag">{product.tag}</span>
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul className="offer-feature-list">
                  {product.features.map((feature) => (
                    <li key={feature}>
                      <Check size={15} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="offer-card-actions">
                  <button
                    className="offer-details-button"
                    type="button"
                    onClick={() => setPreviewProduct(product)}
                  >
                    <Eye size={16} aria-hidden="true" />
                    Détails
                  </button>
                  <a
                    className="offer-button"
                    href={getWhatsappUrl(product.title)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Acheter ${product.title} sur WhatsApp`}
                  >
                    <ShoppingCart size={17} aria-hidden="true" />
                    Acheter
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="offer-gallery-hint">
          <ArrowRight size={15} aria-hidden="true" />
          Faites défiler pour découvrir toutes nos solutions
        </p>
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
            aria-labelledby="offer-preview-title"
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
            <div className="offer-preview-image">
              <img src={previewProduct.image} alt={previewProduct.alt} />
            </div>
            <div className="offer-preview-content">
              <span className="offer-category">{previewProduct.category}</span>
              <h2 id="offer-preview-title">{previewProduct.title}</h2>
              <p>{previewProduct.description}</p>
              <ul className="offer-feature-list">
                {previewProduct.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className="offer-button"
                href={getWhatsappUrl(previewProduct.title)}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} aria-hidden="true" />
                Demander cette application
                <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductOffer;