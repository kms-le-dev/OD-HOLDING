import {
  Code2,
  MousePointerSquare,
  MonitorSmartphone,
  LayoutTemplate,
  Eye,
  BarChart3
} from "lucide-react";



export const navItems = [
  { label: "Fonctionnalité", href: "/FeatureSection.jsx" },
  { label: "Nos Prestations", href: "#" },
  { label: "Nous Contacter", href: "#" },
];


export const features = [
  {
    icon: <Code2 />,
    text: "Créez vos projets facilement",
    description:
      "Concevez vos sites web, applications ou logiciels sur mesure en toute simplicité grâce à nos outils intuitifs et performants.",
  },
  {
    icon: <MousePointerSquare />,
    text: "Interface intuitive",
    description:
      "Créez et organisez vos interfaces sans écrire une ligne de code. Notre système de glisser-déposer vous permet de structurer rapidement vos pages, tableaux de bord ou modules interactifs.",
  },
  {
    icon: <MonitorSmartphone />,
    text: "Compatibilité multi-plateformes",
    description:
      "Développez des applications qui fonctionnent parfaitement sur ordinateurs, tablettes et smartphones, avec des performances optimisées sur chaque support.",
  },
  {
    icon: <LayoutTemplate />,
    text: "Modèles intégrés",
    description:
      "Accélérez vos projets grâce à une bibliothèque de modèles professionnels préconçus pour différents types de sites (vitrine, e-commerce, gestion interne, SaaS, etc.).",
  },
  {
    icon: <Eye />,
    text: "Aperçu en temps réel",
    description:
      "Visualisez immédiatement les changements que vous apportez à vos projets. Testez, ajustez et améliorez votre design ou vos fonctionnalités en un clic.",
  },
  {
    icon: <BarChart3 />,
    text: "Tableau de bord analytique",
    description:
      "Analysez les performances de vos sites ou applications grâce à un tableau de bord intégré qui vous fournit des données précises sur l’utilisation, le trafic et le comportement des utilisateurs.",
  },
];




export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
