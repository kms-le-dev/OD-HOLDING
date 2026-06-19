
import useScrollToTop from "../hooks/useScrollToTop";
import MaintenanceWebVideo from "../assets/maintenancesiteweb.mp4";

const MaintenanceSiteWeb = () => {
  useScrollToTop();


  const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite un service de maintenance pour mon site web. J'aimerais en savoir plus.`);


          {/* IMAGE 3D */}
  



  const whatsappLink =
    `https://wa.me/2250757109835?text=${whatsappMessage}`;

  const services = [


    {

      title:"Sécurité du site",

      image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",

      text:
      "Protection de votre site contre les erreurs, failles et problèmes techniques."


    },



    {

      title:"Optimisation performance",

      image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",

      text:
      "Amélioration de la vitesse pour offrir une meilleure expérience utilisateur."


    },



    {

      title:"Mise à jour technique",

      image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",

      text:
      "Correction, évolution et amélioration continue de votre site."


    }


  ];






  return (


    <>


      <section className="maintenancePage">


        <div className="backgroundGlow"></div>






        {/* HERO */}



        <section className="hero">



          <div className="heroContent">


            <span className="badge">

              Maintenance PRO de site web

            </span>




            <h1>


              Gardez votre site

              <span>

                rapide, sécurisé et performant

              </span>


            </h1>






            <div className="actions">


              <a

                href={whatsappLink}

                target="_blank"

                rel="noopener noreferrer"

                className="primary"

              >

                Maintenir mon site

              </a>



              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("demo") || document.querySelector('.videoSection');
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







          {/* IMAGE 3D */}

          <div className="code3d">

          <div className="visual">


            <div className="card3d">


              <img


                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1400&auto=format&fit=crop"


                alt="maintenance code"


                loading="eager"

                fetchPriority="high"


              />


            </div>


          </div>



          </div>

        </section>









        {/* STATS */}





        <section className="stats">


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

              99%

            </h2>

            <p>

              Disponibilité

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





        <section className="videoSection">


          <h2>

            La maintenance garde votre site vivant

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


                src={MaintenanceWebVideo}


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

            Nos services de maintenance

          </h2>




          <div className="gridCards">


            {


              services.map((item,index)=>(



                <div

                  className="serviceCard"

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


            Ne laissez pas votre site perdre des clients


          </h2>




          <p>


            Confiez la maintenance de votre site à un professionnel.


          </p>





          <a


            href={whatsappLink}

            target="_blank"

            rel="noopener noreferrer"


          >


            Maintenir mon Site Web


          </a>



        </section>





      </section>









      <style>{`


        *{

          box-sizing:border-box;

        }



        .maintenancePage{


          background:white;

          min-height:100vh;

          color:#111827;

          font-family:Inter,Arial,sans-serif;

          overflow:hidden;

          position:relative;


        }





        .backgroundGlow{


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

          margin-bottom:25px;


        }





        h1{


          font-size:4rem;

          line-height:1.1;


        }





        h1 span{


          display:block;

          color:#2563eb;


        }






        .heroContent p{


          color:#6b7280;

          font-size:1.15rem;

          line-height:1.8;


        }







        .actions{


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







        .visual{


          perspective:1200px;


        }






        .card3d{


          transform:

          rotateY(-18deg)

          rotateX(8deg);


          transition:.5s;


        }





        .card3d:hover{


          transform:

          rotateY(0)

          rotateX(0)

          scale(1.05);


        }







        .card3d img{


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





        .videoSection h2{


          font-size:2.8rem;

          margin-bottom:40px;


        }







        .videoBox{


          max-width:1200px;

          margin:auto;

          overflow:hidden;

          border-radius:30px;

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

          margin-bottom:50px;


        }







        .gridCards{


          display:grid;

          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

          gap:30px;


        }







        .serviceCard{


          border-radius:25px;

          overflow:hidden;

          box-shadow:

          0 20px 50px rgba(0,0,0,.08);


          transition:.4s;


        }






        .serviceCard:hover{


          transform:translateY(-10px);


        }







        .serviceCard img{


          width:100%;

          height:260px;

          object-fit:cover;


        }







        .serviceCard div{


          padding:25px;


        }







        .benefits{


          padding:100px 20px;


        }







        .benefitGrid{


          max-width:1200px;

          margin:auto;

          display:grid;

          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

          gap:20px;


        }





        .benefitGrid div{


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





          .actions{


            justify-content:center;

            flex-wrap:wrap;


          }



        }




      `}</style>


    </>


  );


};



export default MaintenanceSiteWeb;