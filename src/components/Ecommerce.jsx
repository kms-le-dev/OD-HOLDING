import { useState } from "react";
import { motion } from "framer-motion";
import ServiceDetail from "./ServiceDetail";
import video1 from "../assets/ecommerce.mp4";
import useScrollToTop from "../hooks/useScrollToTop";

const ecomImg = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80";
const siteImg = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80";
const vitrineImg = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80";


const Ecommerce = () => {
  useScrollToTop();
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const mainService = {
    title: "Boutique E-commerce Premium",
    description: "Vendez vos produits avec une expérience moderne et ultra rapide.",
    img: ecomImg,
  };



  const services = [
    {
      title: "Boutique E-commerce Premium",
      image: ecomImg,
      desc: "Vendez vos produits avec une expérience moderne et ultra rapide."
    },
    {
      title: "Design Haut de Gamme",
      image: siteImg,
      desc: "Une identité visuelle qui inspire confiance et augmente vos ventes."
    },
    {
      title: "Automatisation Marketing",
      image: vitrineImg,
      desc: "Capturez automatiquement vos prospects et transformez-les en clients."
    }
  ];

  return (
    <>
      <section className="ecommerce-container">
        <div className="background-glow"></div>

        {/* HERO */}
        <div className="hero">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="hero-content"
          >
            <span className="badge">
              Création de Sites E-commerce
            </span>

            <h1>
              Transformez vos visiteurs en
              <span> clients fidèles</span>
            </h1>

            <p>
              Je crée des sites internet ultra modernes, rapides et optimisés
              pour la conversion afin d&apos;augmenter vos ventes et développer
              votre activité.
            </p>

            <div className="hero-buttons">
              <button
                onClick={() => setIsDetailOpen(true)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Créer mon Site
              </button>

              <a href="#demo" className="secondary-btn">
                Voir la démo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotateY: -15 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="hero-image"
          >
            <img
              loading="eager"
              fetchPriority="high"
              src={ecomImg}
              alt="Ecommerce Hero"
            />
          </motion.div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div>
            <h2>+250%</h2>
            <span>Conversion moyenne</span>
          </div>

          <div>
            <h2>24h</h2>
            <span>Support réactif</span>
          </div>

          <div>
            <h2>100%</h2>
            <span>Responsive Mobile</span>
          </div>
        </div>

        {/* VIDEO */}
        <section id="demo" className="video-section">
          <h2>Découvrez l&apos;expérience</h2>

          <div className="video-wrapper">
            <video
              muted
              loop
              playsInline
              controls
              preload="none"
              poster={ecomImg}
            >
              <source
                src={video1}
                type="video/mp4"
              />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services">
          <h2>Pourquoi travailler avec moi ?</h2>

          <div className="cards">
            {services.map((item, index) => (
              <motion.div
                whileHover={{
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
                key={index}
                className="card"
              >
                <img loading="lazy" src={item.image} alt={item.title} />

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        

        {/* CTA */}
        <section className="cta">
          <h2>
            Prêt à obtenir un site qui vend réellement ?
          </h2>

          <p>
            Contactez-moi maintenant et recevez une proposition adaptée à votre
            activité.
          </p>

          <button
            onClick={() => setIsDetailOpen(true)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Nous Contacter
          </button>
        </section>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .ecommerce-container {
          background: #ffffff;
          min-height: 100vh;
          color: #111827;
          overflow: hidden;
          position: relative;
          font-family: Inter, sans-serif;
        }

        .background-glow {
          position: absolute;
          top: -200px;
          right: -150px;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.15),
            transparent
          );
          filter: blur(80px);
        }

        .hero {
          max-width: 1400px;
          margin: auto;
          padding: 100px 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .badge {
          background: #eef2ff;
          color: #4338ca;
          padding: 10px 18px;
          border-radius: 50px;
          display: inline-block;
          margin-bottom: 25px;
          font-weight: 600;
        }

        .hero h1 {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 25px;
        }

        .hero h1 span {
          color: #2563eb;
        }

        .hero p {
          font-size: 1.15rem;
          color: #6b7280;
          max-width: 600px;
        }

        .hero-buttons {
          margin-top: 35px;
          display: flex;
          gap: 15px;
        }

        .hero-buttons a {
          text-decoration: none;
          padding: 16px 28px;
          border-radius: 14px;
          font-weight: bold;
          transition: 0.3s;
        }

        .hero-buttons a:first-child {
          background: #2563eb;
          color: white;
        }

        .hero-buttons a:first-child:hover {
          transform: translateY(-3px);
        }

        .secondary-btn {
          border: 1px solid #ddd;
          color: #111;
        }

        .hero-image img {
          width: 100%;
          border-radius: 30px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
          will-change: transform;
        }

        .stats {
          display: flex;
          justify-content: center;
          gap: 60px;
          padding: 60px 20px;
          text-align: center;
        }

        .stats h2 {
          font-size: 3rem;
          color: #2563eb;
        }

        .video-section {
          padding: 80px 20px;
          text-align: center;
        }

        .video-section h2 {
          font-size: 2.5rem;
          margin-bottom: 40px;
        }

        .video-wrapper {
          max-width: 1100px;
          margin: auto;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }

        .video-wrapper video {
          width: 100%;
          display: block;
        }

        .services {
          padding: 100px 30px;
        }

        .services h2 {
          text-align: center;
          font-size: 2.7rem;
          margin-bottom: 60px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .card {
          background: white;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          will-change: transform;
        }

        .card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
        }

        .card-content {
          padding: 25px;
        }

        .card-content h3 {
          margin-bottom: 10px;
        }

        .card-content p {
          color: #6b7280;
        }

        .gallery {
          padding: 100px 20px;
        }

        .gallery h2 {
          text-align: center;
          font-size: 2.7rem;
          margin-bottom: 50px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 1200px;
          margin: auto;
        }

        .gallery-grid img {
          width: 100%;
          border-radius: 25px;
          transition: 0.4s;
        }

        .gallery-grid img:hover {
          transform: scale(1.04);
        }

        .cta {
          text-align: center;
          padding: 120px 20px;
        }

        .cta h2 {
          font-size: 3rem;
          margin-bottom: 20px;
        }

        .cta p {
          color: #6b7280;
          margin-bottom: 40px;
        }

        .cta a {
          display: inline-block;
          background: #25d366;
          color: white;
          text-decoration: none;
          padding: 18px 40px;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: bold;
          transition: 0.3s;
        }

        .cta a:hover {
          transform: translateY(-4px);
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero h1 {
            font-size: 2.8rem;
          }

          .stats {
            flex-direction: column;
            gap: 30px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <ServiceDetail
        service={mainService}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
};

export default Ecommerce;