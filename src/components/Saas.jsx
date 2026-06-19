
import useScrollToTop from "../hooks/useScrollToTop";
import SaasVideo from "../assets/saas.mp4";

const CreationSaas = () => {
  useScrollToTop();

const WhatsAppMessage = encodeURIComponent(`

Bonjour,

Je souhaite créer mon SaaS.

Informations :

Nom :
Entreprise :
Secteur :

Type de SaaS :

☐ Application web SaaS
☐ Plateforme abonnement
☐ Logiciel métier
☐ Marketplace
☐ Application personnalisée


Fonctionnalités souhaitées :

- Compte utilisateur
- Tableau de bord
- Paiement en ligne
- Gestion administrateur
- Notifications
- Base de données


Merci de me contacter pour discuter du projet.

`);


const whatsappLink =
`https://wa.me/2250757109835?text=${WhatsAppMessage}`;




  const solutions = [


    {

      title:"Dashboard SaaS",

      image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",

      text:
      "Création d'interfaces professionnelles pour piloter votre activité."

    },



    {

      title:"Application SaaS Cloud",

      image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",

      text:
      "Une plateforme accessible partout avec une architecture moderne."

    },



    {

      title:"Automatisation Business",

      image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",

      text:
      "Transformez vos processus en outils intelligents."

    }


  ];






  return (


    <>


      <section className="saas">


        <div className="glow"></div>






        {/* HERO */}



        <section className="hero">


          <div className="heroContent">


            <span className="badge">

              Création SaaS Sur Mesure

            </span>




            <h1>


              Transformez votre idée

              <span>

                en véritable logiciel SaaS

              </span>


            </h1>





            <p>


              Je développe des plateformes SaaS modernes,
              rapides et évolutives pour automatiser votre activité
              et créer votre propre solution digitale.


            </p>






            <div className="buttons">


              <a

                href={whatsappLink}

                target="_blank"

                rel="noopener noreferrer"

                className="primary"

              >

                Créer mon SaaS

              </a>





              <a

                href="#demo"

                className="secondary"

              >

                Voir la démo

              </a>



            </div>



          </div>







          {/* 3D */}



          <div className="visual">


            <div className="device">


              <img

                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"

                alt="SaaS dashboard"

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
              Performance
            </p>

          </div>



          <div>

            <h2>
              24/7
            </h2>

            <p>
              Accessible en ligne
            </p>

          </div>




          <div>

            <h2>
              100%
            </h2>

            <p>
              Personnalisé
            </p>

          </div>



        </section>









        {/* VIDEO */}





        <section

          id="demo"

          className="videoSection"

        >


          <h2>

            Découvrez une expérience SaaS moderne

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

                src={SaasVideo}

                type="video/mp4"

              />



            </video>


          </div>



        </section>









        {/* SERVICES */}





        <section className="services">


          <h2>

            Nous créons votre solution digitale

          </h2>





          <div className="cards">


            {


              solutions.map((item,index)=>(


                <div

                  className="card"

                  key={index}

                >



                  <img

                    src={item.image}

                    alt={item.title}

                    loading="lazy"

                  />





                  <div>


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


            Votre idée peut devenir un vrai produit SaaS


          </h2>




          <p>


            Créons ensemble une plateforme rentable et évolutive.


          </p>




          <a

            href={whatsappLink}

            target="_blank"

            rel="noopener noreferrer"

          >

            Créer mon SaaS

          </a>



        </section>





      </section>









      <style>{`


        *{

          box-sizing:border-box;

        }




        .saas{


          background:white;

          min-height:100vh;

          font-family:Inter,Arial,sans-serif;

          color:#111827;

          overflow:hidden;

          position:relative;


        }






        .glow{


          position:absolute;

          width:700px;

          height:700px;


          background:

          radial-gradient(

          circle,

          rgba(37,99,235,.18),

          transparent

          );


          filter:blur(120px);

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


        }







        h1{


          font-size:4rem;

          line-height:1.1;


        }





        h1 span{


          display:block;

          color:#2563eb;


        }





        .hero p{


          color:#6b7280;

          font-size:1.15rem;

          line-height:1.8;


        }







        .buttons{


          margin-top:35px;

          display:flex;

          gap:15px;


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

          text-decoration:none;

          color:#111;


        }







        .visual{


          perspective:1200px;


        }







        .device{


          transform:

          rotateY(-18deg)

          rotateX(8deg);


          transition:.5s;


        }





        .device:hover{


          transform:

          rotateY(0)

          rotateX(0)

          scale(1.05);


        }







        .device img{


          width:100%;

          border-radius:30px;

          box-shadow:

          0 40px 80px rgba(0,0,0,.18);


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





        .videoBox{


          max-width:1200px;

          margin:auto;

          border-radius:30px;

          overflow:hidden;

          box-shadow:

          0 30px 80px rgba(0,0,0,.15);


        }





        video{


          width:100%;


        }







        .services{


          padding:100px 30px;


        }






        .services h2{


          text-align:center;

          font-size:2.8rem;


        }







        .cards{


          margin-top:50px;

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






        .card div{


          padding:25px;


        }









        .features{


          padding:100px 20px;


        }






        .features h2{


          text-align:center;

          font-size:2.8rem;


        }







        .grid{


          max-width:1200px;

          margin:50px auto;

          display:grid;

          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

          gap:20px;


        }







        .grid div{


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



          h1{


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


export default CreationSaas;