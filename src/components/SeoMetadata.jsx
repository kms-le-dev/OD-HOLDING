import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://odholding.site";

const pageMetadata = {
  "/": {
    title: "Création de sites web et logiciels sur mesure | OD Holding",
    description:
      "OD Holding accompagne les entreprises dans leur transformation digitale : création de sites web, applications mobiles, logiciels et solutions de gestion sur mesure.",
  },
  "/ecommerce": {
    title: "Création de sites e-commerce | OD Holding",
    description:
      "Créez une boutique en ligne moderne, rapide et pensée pour présenter vos produits et développer vos ventes avec OD Holding.",
  },
  "/appgestion": {
    title: "Applications de gestion sur mesure | OD Holding",
    description:
      "Simplifiez la gestion de votre entreprise avec une application sur mesure pour suivre vos ventes, vos stocks, vos commandes et vos factures.",
  },
  "/appmobile": {
    title: "Création d'applications mobiles | OD Holding",
    description:
      "OD Holding conçoit des applications mobiles adaptées à vos besoins, avec une expérience pensée pour les smartphones et tablettes.",
  },
  "/siteweb": {
    title: "Création de sites web professionnels | OD Holding",
    description:
      "Faites créer un site web professionnel, responsive et adapté à votre activité par OD Holding.",
  },
  "/sitevitrine": {
    title: "Création de site vitrine | OD Holding",
    description:
      "Présentez votre activité en ligne avec un site vitrine moderne, responsive et conçu sur mesure par OD Holding.",
  },
  "/maintenance": {
    title: "Maintenance et développement web | OD Holding",
    description:
      "OD Holding vous accompagne pour la maintenance, les évolutions et l’amélioration technique de vos projets web.",
  },
  "/portfolio": {
    title: "Création de portfolio en ligne | OD Holding",
    description:
      "Mettez en valeur votre parcours et vos réalisations avec un portfolio professionnel créé sur mesure par OD Holding.",
  },
  "/maintenanceweb": {
    title: "Maintenance de site web | OD Holding",
    description:
      "Confiez à OD Holding les mises à jour, modifications et améliorations de votre site internet.",
  },
  "/saas": {
    title: "Développement de solutions SaaS | OD Holding",
    description:
      "OD Holding développe des solutions SaaS accessibles en ligne, adaptées aux besoins de votre activité.",
  },
};

const setMetaContent = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    const [key, keyValue] = selector.match(/\[(name|property)="([^"]+)"\]/).slice(1);
    element.setAttribute(key, keyValue);
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const SeoMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = pageMetadata[pathname] || pageMetadata["/"];
    const canonicalUrl = `${siteUrl}${pathname}`;

    document.title = metadata.title;
    setMetaContent('meta[name="description"]', "content", metadata.description);
    setMetaContent('meta[property="og:title"]', "content", metadata.title);
    setMetaContent('meta[property="og:description"]', "content", metadata.description);
    setMetaContent('meta[property="og:url"]', "content", canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', "content", metadata.title);
    setMetaContent('meta[name="twitter:description"]', "content", metadata.description);

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
  }, [pathname]);

  return null;
};

export default SeoMetadata;
