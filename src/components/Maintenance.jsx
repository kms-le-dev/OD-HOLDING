import useScrollToTop from "../hooks/useScrollToTop";
import Maintenancecode from "../assets/maintenance&code.mp4";

const Maintenance = () => {
  useScrollToTop();

  const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite un service de maintenance et développement. J'aimerais en savoir plus.`);


  const whatsappLink =
    `https://wa.me/2250757109835?text=${whatsappMessage}`;



  const services = [

    {
      title: "Maintenance Web",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      text:
        "Gardez votre site rapide, sécurisé et toujours fonctionnel."
    },


    {
      title: "Développement personnalisé",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      text:
        "Création de nouvelles fonctionnalités adaptées à votre activité."
    },


    {
      title: "Optimisation Code",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
      text:
        "Amélioration des performances et de la qualité technique."
    }

  ];




  return (

    <>

      <section className="maintenance">


        <div className="glow"></div>



        {/* HERO */}


        <section className="hero">


          <div className="heroText">


            <span className="badge">
             Maintenance & Développement Web
            </span>



            <h1>

              Votre site reste

              <span>
                performant et sécurisé
              </span>

            </h1>



            <p>

              Je surveille, corrige et améliore vos sites web
              et applications pour garantir une expérience
              rapide, fiable et professionnelle.

            </p>




            <div className="buttons">


              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="primary"
              >

                Demander une maintenance

              </a>




              <button
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector('.videoSection');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    if (el.focus) el.focus();
                  }
                }}
                className="secondary"
              >

                Voir la démo

              </button>



            </div>


          </div>






          <div className="code3d">


            <div className="codeCard">


              <img

                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop"

                alt="code development"

                loading="eager"

                fetchPriority="high"

              />


            </div>


          </div>




        </section>







        {/* STATS */}



        <section className="stats">


          <div>

            <h2>
              99%
            </h2>

            <p>
              Disponibilité
            </p>

          </div>




          <div>

            <h2>
              24/7
            </h2>

            <p>
              Surveillance
            </p>

          </div>





          <div>

            <h2>
              100%
            </h2>

            <p>
              Sécurité
            </p>

          </div>


        </section>








        {/* VIDEO */}



        <section id="demo" className="videoSection">


          <h2>
            Découvrez notre expertise technique
          </h2>



          <div className="videoBox">


            <video
              controls
              autoPlay

              muted

              loop

              playsInline

              preload="metadata"

            >

              <source

                src={Maintenancecode}

                type="video/mp4"

              />


            </video>


          </div>



        </section>







        {/* SERVICES */}




        <section
          id="services"
          className="services"
        >


          <h2>
            Solutions proposées
          </h2>



          <div className="cards">


            {

              services.map((item,index)=>(


                <div

                  className="card"

                  key={index}

                >


                  <img

                    src={item.image}

                    alt={item.title}

                    loading="lazy"

                  />



                  <div className="cardContent">


                    <h3>
                      {item.title}
                    </h3>



                    <p>
                      {item.text}
                    </p>


                  </div>


                </div>



              ))

            }



          </div>



        </section>


        
        {/* CTA */}



        <section className="cta">


          <h2>

            Votre site mérite un suivi professionnel

          </h2>




          <p>

            Contactez-moi pour maintenir et améliorer votre solution digitale.

          </p>




          <a

            href={whatsappLink}

            target="_blank"

            rel="noopener noreferrer"

          >

            Demander une maintenance

          </a>



        </section>



      </section>








      <style>{`

        *{

          box-sizing:border-box;

        }



        .maintenance{


          background:white;

          min-height:100vh;

          color:#111827;

          font-family:Inter,Arial,sans-serif;

          overflow:hidden;

          position:relative;


        }




        .glow{


          position:absolute;

          width:650px;

          height:650px;

          background:

          radial-gradient(

            circle,

            rgba(37,99,235,.15),

            transparent

          );


          filter:blur(100px);

          right:-200px;

          top:-200px;


        }






        .hero{


          max-width:1400px;

          margin:auto;

          padding:120px 40px;

          display:grid;

          grid-template-columns:1fr 1fr;

          gap:70px;

          align-items:center;


        }





        .badge{


          background:#eef2ff;

          color:#2563eb;

          padding:12px 20px;

          border-radius:50px;

          font-weight:bold;

          display:inline-block;

          margin-bottom:25px;


        }





        .hero h1{


          font-size:4rem;

          line-height:1.1;


        }



        .hero h1 span{


          display:block;

          color:#2563eb;


        }






        .hero p{


          color:#6b7280;

          font-size:1.15rem;

          line-height:1.8;


        }






        .buttons{


          display:flex;

          gap:15px;

          margin-top:35px;


        }






        .primary{


          background:#2563eb;

          color:white;

          padding:18px 35px;

          border-radius:16px;

          text-decoration:none;

          font-weight:bold;


        }





        .secondary{


          border:1px solid #ddd;

          padding:18px 35px;

          border-radius:16px;

          color:#111;

          text-decoration:none;


        }






        .code3d{


          perspective:1200px;


        }





        .codeCard{


          transform:

          rotateY(-18deg)

          rotateX(8deg);

          transition:.5s;


        }





        .codeCard:hover{


          transform:

          rotateY(0)

          rotateX(0)

          scale(1.05);


        }




        .codeCard img{


          width:100%;

          border-radius:30px;

          box-shadow:

          0 40px 80px rgba(0,0,0,.15);


        }






        .stats{


          max-width:1200px;

          margin:auto;

          padding:70px 20px;

          display:grid;

          grid-template-columns:repeat(3,1fr);

          text-align:center;


        }




        .stats h2{


          font-size:3rem;

          color:#2563eb;


        }






        .videoSection{


          padding:100px 20px;

          text-align:center;


        }




        .videoSection h2{


          font-size:2.8rem;

          margin-bottom:40px;


        }






        .videoBox{


          max-width:1200px;

          margin:auto;

          border-radius:30px;

          overflow:hidden;

          box-shadow:

          0 30px 80px rgba(0,0,0,.15);


        }





        .videoBox video{


          width:100%;


        }






        .services{


          padding:100px 30px;


        }



        .services h2{


          text-align:center;

          font-size:2.8rem;

          margin-bottom:50px;


        }





        .cards{


          display:grid;

          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

          gap:30px;


        }





        .card{


          border-radius:25px;

          overflow:hidden;

          box-shadow:

          0 20px 50px rgba(0,0,0,.08);

          transition:.4s;


        }





        .card:hover{


          transform:translateY(-10px);


        }





        .card img{


          width:100%;

          height:260px;

          object-fit:cover;


        }




        .cardContent{


          padding:25px;


        }






        .features{


          padding:100px 20px;


        }





        .features h2{


          text-align:center;

          font-size:2.8rem;

          margin-bottom:50px;


        }






        .featureGrid{


          max-width:1200px;

          margin:auto;

          display:grid;

          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

          gap:20px;


        }






        .featureGrid div{


          background:#f8fafc;

          padding:30px;

          border-radius:20px;

          font-weight:bold;


        }






        .cta{


          padding:120px 20px;

          text-align:center;


        }




        .cta h2{


          font-size:3rem;


        }





        .cta a{


          display:inline-block;

          margin-top:30px;

          background:#25D366;

          color:white;

          padding:20px 40px;

          border-radius:18px;

          text-decoration:none;

          font-weight:bold;


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


            grid-template-columns:1fr;

            gap:30px;


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


export default Maintenance;