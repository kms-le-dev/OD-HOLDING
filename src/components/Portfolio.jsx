import useScrollToTop from "../hooks/useScrollToTop";
import PortfolioVideo from "../assets/portfolio.mp4";

const Portfolio = () => {
  useScrollToTop();

  const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite créer un portfolio professionnel. J'aimerais en savoir plus.`);


  const whatsappLink =
    `https://wa.me/2250757109835?text=${whatsappMessage}`;



  const projects = [

    {
      title: "Portfolio Designer",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",

      text:
        "Présentez vos créations avec une identité visuelle professionnelle."
    },


    {
      title: "Portfolio Développeur",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

      text:
        "Montrez vos compétences techniques avec un site moderne."
    },


    {
      title: "Portfolio Business",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",

      text:
        "Construisez une image forte pour attirer vos clients."
    }

  ];




  return (

    <>

      <section className="portfolio">


        <div className="glow"></div>




        {/* HERO */}


        <section className="hero">


          <div className="heroText">


            <span className="badge">

              Création de Portfolio Professionnel (Cv en ligne)

            </span>




            <h1>

              Transformez vos projets

              <span>
                en une image digitale premium
              </span>

            </h1>




            <p>

              Je crée des portfolios modernes, rapides et élégants
              pour mettre en valeur votre talent, vos projets et attirer
              de nouvelles opportunités.

            </p>




            <div className="buttons">


              <a

                href={whatsappLink}

                target="_blank"

                rel="noopener noreferrer"

                className="primary"

              >

                Créer mon portfolio

              </a>




              <a

                href="#demo"

                className="secondary"

              >

                Voir la démo

              </a>



            </div>


          </div>







          {/* 3D MOCKUP */}



          <div className="mockup">


            <div className="screen">


              <img

                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1400&auto=format&fit=crop"

                alt="portfolio"

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
              +500
            </h2>

            <p>
              Projets présentés
            </p>

          </div>




          <div>

            <h2>
              24/7
            </h2>

            <p>
              Disponible en ligne
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

            Découvrez un portfolio moderne

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

                src={PortfolioVideo}

                type="video/mp4"

              />


            </video>



          </div>



        </section>









        {/* PROJETS */}




        <section className="projects">


          <h2>

            Des styles adaptés à votre métier

          </h2>





          <div className="cards">


            {

              projects.map((item,index)=>(


                <div

                  className="card"

                  key={index}

                >


                  <img

                    src={item.image}

                    alt={item.title}

                    loading="lazy"

                  />



                  <div className="cardBody">


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

            Faites de votre talent une vraie marque digitale

          </h2>




          <p>

            Créons ensemble un portfolio qui attire vos futurs clients.

          </p>




          <a

            href={whatsappLink}

            target="_blank"

            rel="noopener noreferrer"

          >

            Créer mon portfolio

          </a>

        </section>

      </section>






      <style>{`


        * {

          box-sizing:border-box;

        }



        .portfolio {


          background:white;

          min-height:100vh;

          color:#111827;

          font-family:Inter,Arial,sans-serif;

          overflow:hidden;

          position:relative;


        }




        .glow {


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







        .hero {


          max-width:1400px;

          margin:auto;

          padding:120px 40px;

          display:grid;

          grid-template-columns:1fr 1fr;

          gap:70px;

          align-items:center;


        }






        .badge {


          display:inline-block;

          background:#eef2ff;

          color:#2563eb;

          padding:12px 20px;

          border-radius:50px;

          font-weight:bold;

          margin-bottom:25px;


        }







        .hero h1 {


          font-size:4rem;

          line-height:1.1;


        }





        .hero h1 span {


          display:block;

          color:#2563eb;


        }





        .hero p {


          color:#6b7280;

          font-size:1.15rem;

          line-height:1.8;


        }






        .buttons {


          margin-top:35px;

          display:flex;

          gap:15px;


        }





        .primary {


          background:#2563eb;

          color:white;

          padding:18px 35px;

          border-radius:16px;

          text-decoration:none;

          font-weight:bold;


        }





        .secondary {


          border:1px solid #ddd;

          padding:18px 35px;

          border-radius:16px;

          text-decoration:none;

          color:#111;


        }








        .mockup {


          perspective:1200px;


        }




        .screen {


          transform:

          rotateY(-18deg)

          rotateX(8deg);


          transition:.5s;


        }




        .screen:hover {


          transform:

          rotateY(0)

          rotateX(0)

          scale(1.05);


        }




        .screen img {


          width:100%;

          border-radius:30px;

          box-shadow:

          0 40px 80px rgba(0,0,0,.15);


        }








        .stats {


          max-width:1200px;

          margin:auto;

          padding:70px 20px;

          display:grid;

          grid-template-columns:repeat(3,1fr);

          text-align:center;


        }





        .stats h2 {


          font-size:3rem;

          color:#2563eb;


        }







        .videoSection {


          padding:100px 20px;

          text-align:center;


        }





        .videoSection h2 {


          font-size:2.8rem;

          margin-bottom:40px;


        }







        .videoBox {


          max-width:1200px;

          margin:auto;

          border-radius:30px;

          overflow:hidden;

          box-shadow:

          0 30px 80px rgba(0,0,0,.15);


        }





        .videoBox video {


          width:100%;


        }







        .projects {


          padding:100px 30px;


        }





        .projects h2 {


          text-align:center;

          font-size:2.8rem;

          margin-bottom:50px;


        }







        .cards {


          display:grid;

          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

          gap:30px;


        }






        .card {


          border-radius:25px;

          overflow:hidden;

          box-shadow:

          0 20px 50px rgba(0,0,0,.08);

          transition:.4s;


        }





        .card:hover {


          transform:

          translateY(-10px)

          rotateX(5deg);


        }







        .card img {


          width:100%;

          height:260px;

          object-fit:cover;


        }





        .cardBody {


          padding:25px;


        }








        .features {


          padding:100px 20px;


        }




        .features h2 {


          text-align:center;

          font-size:2.8rem;

          margin-bottom:50px;


        }





        .grid {


          max-width:1200px;

          margin:auto;

          display:grid;

          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

          gap:20px;


        }





        .grid div {


          background:#f8fafc;

          padding:30px;

          border-radius:20px;

          font-weight:bold;


        }







        .cta {


          padding:120px 20px;

          text-align:center;


        }





        .cta h2 {


          font-size:3rem;


        }





        .cta a {


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


          .hero {


            grid-template-columns:1fr;

            text-align:center;


          }



          .hero h1 {


            font-size:2.8rem;


          }





          .stats {


            grid-template-columns:1fr;

            gap:30px;


          }




          .buttons {


            justify-content:center;

            flex-wrap:wrap;


          }



        }



      `}</style>


    </>

  );

};


export default Portfolio;