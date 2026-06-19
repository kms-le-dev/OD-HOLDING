import video2 from "../assets/appgestion.mp4";
import useScrollToTop from "../hooks/useScrollToTop";
const gestionImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80";
const siteImg = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80";
const vitrineImg = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80";

const Appgestion = () => {
  useScrollToTop();
  const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite créer une application de gestion. J'aimerais en savoir plus.`);

  const whatsappLink = `https://wa.me/2250757109835?text=${whatsappMessage}`;

  const modules = [
    {
      title: "Gestion Commerciale",
      image: gestionImg,
      description:
        "Suivez vos ventes, devis, commandes et performances en temps réel."
    },
    {
      title: "Gestion des Stocks",
      image: siteImg,
      description:
        "Contrôlez vos stocks, entrées et sorties avec précision."
    },
    {
      title: "Facturation Automatique",
      image: vitrineImg,
      description:
        "Créez vos factures et gérez vos paiements en quelques clics."
    }
  ];


  return (
    <>
      <section className="appgestion">

        <div className="glow glow1"></div>
        <div className="glow glow2"></div>

        {/* HERO */}

        <section className="hero">

          <div className="hero-content">

            <span className="badge">
              Application de Gestion Professionnelle
            </span>

            <h1>
              Automatisez votre entreprise
              <span> avec une application sur mesure</span>
            </h1>

            <p>
              Centralisez vos opérations, augmentez la productivité de vos
              équipes et obtenez une visibilité complète sur votre activité
              grâce à une solution moderne et évolutive.
            </p>

            <div className="buttons">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Créer mon application
              </a>

              <a href="#video-demo" className="secondary-btn">
                Voir la démo
              </a>

            </div>

          </div>

          <div className="hero-image">

            <img
              src={gestionImg}
              alt="Dashboard gestion"
              loading="eager"
              fetchPriority="high"
            />

          </div>

        </section>

        {/* STATS */}

        <section className="stats">

          <div>
            <h2>+70%</h2>
            <span>Gain de productivité</span>
          </div>

          <div>
            <h2>24/7</h2>
            <span>Accès aux données</span>
          </div>

          <div>
            <h2>100%</h2>
            <span>Personnalisable</span>
          </div>

          <div>
            <h2>∞</h2>
            <span>Évolutif</span>
          </div>

        </section>

        {/* VIDEO */}

        <section id="video-demo" className="video-section">

          <h2>Visualisez votre futur logiciel</h2>

          <div className="video-wrapper">

            <video
              muted
              loop
              playsInline
              controls
              preload="none"
              poster={gestionImg}
            >
              <source
                src={video2}
                type="video/mp4"
              />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>

          </div>

        </section>

        {/* MODULES */}

        <section className="modules">

          <h2>Modules disponibles</h2>

          <div className="cards">

            {modules.map((item, index) => (
              <div className="card" key={index}>

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

              </div>
            ))}

          </div>

        </section>
        {/* CTA */}

        <section className="cta">

          <h2>
            Transformez votre gestion dès aujourd&apos;hui
          </h2>

          <p>
            Recevez une proposition adaptée à votre activité.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Nous Contacter
          </a>

        </section>

      </section>

      <style>{`

        *{
          box-sizing:border-box;
          margin:0;
          padding:0;
        }

        .appgestion{
          background:#fff;
          min-height:100vh;
          overflow:hidden;
          position:relative;
          font-family:Inter,Arial,sans-serif;
          color:#111827;
        }

        .glow{
          position:absolute;
          border-radius:50%;
          filter:blur(90px);
        }

        .glow1{
          width:500px;
          height:500px;
          background:rgba(37,99,235,.12);
          top:-200px;
          right:-100px;
        }

        .glow2{
          width:400px;
          height:400px;
          background:rgba(59,130,246,.08);
          bottom:-150px;
          left:-100px;
        }

        .hero{
          max-width:1400px;
          margin:auto;
          padding:120px 40px;
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:60px;
          align-items:center;
        }

        .badge{
          display:inline-block;
          padding:12px 18px;
          background:#eef2ff;
          color:#2563eb;
          border-radius:999px;
          margin-bottom:20px;
          font-weight:600;
        }

        .hero h1{
          font-size:4rem;
          line-height:1.1;
          margin-bottom:20px;
        }

        .hero span{
          color:#2563eb;
        }

        .hero p{
          color:#6b7280;
          font-size:1.1rem;
          line-height:1.8;
          max-width:650px;
        }

        .buttons{
          display:flex;
          gap:15px;
          margin-top:35px;
        }

        .primary-btn{
          background:#2563eb;
          color:white;
          text-decoration:none;
          padding:16px 28px;
          border-radius:14px;
          font-weight:700;
          transition:.3s;
        }

        .secondary-btn{
          border:1px solid #ddd;
          color:#111;
          text-decoration:none;
          padding:16px 28px;
          border-radius:14px;
        }

        .primary-btn:hover{
          transform:translateY(-4px);
        }

        .hero-image img{
          width:100%;
          border-radius:28px;
          box-shadow:0 30px 70px rgba(0,0,0,.12);
          transform:perspective(1000px) rotateY(-8deg);
          transition:.5s;
          will-change:transform;
        }

        .hero-image img:hover{
          transform:perspective(1000px) rotateY(0deg) scale(1.02);
        }

        .stats{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          max-width:1200px;
          margin:auto;
          padding:60px 20px;
          text-align:center;
        }

        .stats h2{
          font-size:3rem;
          color:#2563eb;
        }

        .stats span{
          color:#6b7280;
        }

        .video-section{
          padding:100px 20px;
          text-align:center;
        }

        .video-section h2{
          margin-bottom:40px;
          font-size:2.7rem;
        }

        .video-wrapper{
          max-width:1200px;
          margin:auto;
          border-radius:30px;
          overflow:hidden;
          box-shadow:0 30px 80px rgba(0,0,0,.12);
        }

        .video-wrapper video{
          width:100%;
          display:block;
        }

        .modules{
          padding:100px 30px;
        }

        .modules h2{
          text-align:center;
          margin-bottom:50px;
          font-size:2.7rem;
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:30px;
        }

        .card{
          background:white;
          border-radius:24px;
          overflow:hidden;
          box-shadow:0 20px 50px rgba(0,0,0,.08);
          transition:.4s;
        }

        .card:hover{
          transform:translateY(-10px) rotateX(4deg);
        }

        .card img{
          width:100%;
          height:260px;
          object-fit:cover;
        }

        .card-content{
          padding:25px;
        }

        .card-content h3{
          margin-bottom:10px;
        }

        .card-content p{
          color:#6b7280;
        }

        .features{
          padding:100px 20px;
        }

        .features h2{
          text-align:center;
          margin-bottom:50px;
          font-size:2.7rem;
        }

        .feature-grid{
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:20px;
        }

        .feature{
          background:#f8fafc;
          padding:30px;
          border-radius:18px;
          transition:.3s;
          font-weight:600;
        }

        .feature:hover{
          transform:translateY(-6px);
        }

        .gallery{
          padding:100px 20px;
        }

        .gallery h2{
          text-align:center;
          margin-bottom:50px;
          font-size:2.7rem;
        }

        .gallery-grid{
          max-width:1200px;
          margin:auto;
          display:grid;
          grid-template-columns:repeat(2,1fr);
          gap:20px;
        }

        .gallery-grid img{
          width:100%;
          border-radius:24px;
          transition:.4s;
        }

        .gallery-grid img:hover{
          transform:scale(1.03);
        }

        .cta{
          padding:120px 20px;
          text-align:center;
        }

        .cta h2{
          font-size:3rem;
          margin-bottom:20px;
        }

        .cta p{
          color:#6b7280;
          margin-bottom:35px;
        }

        .cta a{
          display:inline-block;
          background:#25D366;
          color:white;
          text-decoration:none;
          padding:18px 40px;
          border-radius:16px;
          font-weight:700;
        }

        @media(max-width:900px){

          .hero{
            grid-template-columns:1fr;
            text-align:center;
          }

          .hero h1{
            font-size:2.8rem;
          }

          .stats{
            grid-template-columns:1fr 1fr;
            gap:30px;
          }

          .gallery-grid{
            grid-template-columns:1fr;
          }

          .buttons{
            justify-content:center;
            flex-wrap:wrap;
          }

        }

      `}</style>
    </>
  );
};

export default Appgestion;