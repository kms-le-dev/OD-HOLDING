
import useScrollToTop from "../hooks/useScrollToTop";
import sitewebVideo from "../assets/siteweb.mp4";

    const Siteweb = () => {
    useScrollToTop();
    const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite créer un site web professionnel. J'aimerais en savoir plus.`);


    const whatsappLink =
    `https://wa.me/2250757109835?text=${whatsappMessage}`;




    const solutions = [

    {

    title:"Site Web Premium",

    image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",

    text:
    "Un site moderne qui présente votre entreprise et transforme vos visiteurs en clients."

    },



    {

    title:"Design Moderne",

    image:
    "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",

    text:
    "Une interface élégante adaptée aux mobiles avec une expérience utilisateur premium."

    },



    {

    title:"Site E-commerce",

    image:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",

    text:
    "Vendez vos produits en ligne avec une boutique rapide et professionnelle."

    }

    ];




    return (

    <>


    <section className="siteweb">


    <div className="background"></div>




    {/* HERO */}



    <section className="hero">
    <div className="heroText">
    <span className="badge">
    Création de Sites Web Professionnels
    </span>

    <h1>
    Votre site web devient
    <span>
    votre meilleur commercial
    </span>
    </h1>

    <p>
    Je crée des sites internet modernes, rapides et
    optimisés pour attirer vos clients, présenter vos services
    et augmenter vos ventes.
    </p>
    <div className="actions">
    <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
    >
    Créer mon site web
    </a>

    <a
    href="#demo"
    className="outline"
    >
    Voir la démo
    </a>
    </div>
    </div>

    <div className="mockup">
    <div className="screen">
    <img
    src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
    alt="web design"
    loading="eager"
    fetchPriority="high"
    />
    </div>
    </div>
    </section>

    {/* STATS */}

    <section className="stats">
    <div>
    <h2>+300%</h2>
    <p>Visibilité digitale</p>
    </div>
    <div>
    <h2>24/7</h2>
    <p>Votre entreprise en ligne</p>
    </div>

    <div>
    <h2>100%</h2>
    <p>Responsive mobile</p>
    </div>
    </section>

    {/* VIDEO */}
    <section
    id="demo"
    className="videoSection"
    >
    <h2>
    Découvrez un site web moderne
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
    src={sitewebVideo}
    type="video/mp4"
    />
    </video>
    </div>
    </section>

    {/* SOLUTIONS */}

    <section className="solutions">
    <h2>

    Des solutions adaptées à votre activité

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


    Prêt à avoir un site qui travaille pour vous ?

    </h2>



    <p>


    Recevez une proposition personnalisée pour votre projet.


    </p>




    <a

    href={whatsappLink}

    target="_blank"

    rel="noopener noreferrer"

    >


    Créer mon site web


    </a>




    </section>




    </section>






    <style>{`



    *{

    box-sizing:border-box;

    }



    .siteweb{


    background:white;

    min-height:100vh;

    font-family:Inter,Arial,sans-serif;

    color:#111827;

    overflow:hidden;

    position:relative;


    }




    .background{


    position:absolute;

    top:-250px;

    right:-200px;

    width:700px;

    height:700px;

    background:

    radial-gradient(

    circle,

    rgba(37,99,235,.18),

    transparent

    );


    filter:blur(100px);


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


    display:inline-block;

    padding:12px 20px;

    background:#eef2ff;

    color:#2563eb;

    border-radius:50px;

    font-weight:bold;

    margin-bottom:25px;


    }







    .hero h1{


    font-size:4rem;

    line-height:1.1;


    }



    .hero h1 span{


    color:#2563eb;

    display:block;


    }




    .hero p{


    font-size:1.15rem;

    color:#6b7280;

    line-height:1.8;


    }





    .actions{


    margin-top:35px;

    display:flex;

    gap:15px;


    }




    .btn{


    background:#2563eb;

    color:white;

    padding:18px 35px;

    border-radius:16px;

    text-decoration:none;

    font-weight:bold;


    }




    .outline{


    border:1px solid #ddd;

    padding:18px 35px;

    border-radius:16px;

    text-decoration:none;

    color:#111;


    }





    .mockup{


    perspective:1200px;


    }



    .screen{


    transform:

    rotateY(-18deg)

    rotateX(8deg);


    transition:.5s;


    }



    .screen:hover{


    transform:

    rotateY(0)

    rotateX(0)

    scale(1.05);


    }




    .screen img{


    width:100%;

    border-radius:30px;

    box-shadow:

    0 40px 80px rgba(0,0,0,.15);


    }





    .stats{


    max-width:1200px;

    margin:auto;

    display:grid;

    grid-template-columns:repeat(3,1fr);

    padding:70px 20px;

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







    .solutions{


    padding:100px 30px;


    }



    .solutions h2{


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


    background:white;

    border-radius:25px;

    overflow:hidden;

    box-shadow:

    0 20px 50px rgba(0,0,0,.08);

    transition:.4s;


    }



    .card:hover{


    transform:

    translateY(-10px)

    rotateX(5deg);


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

    transition:.3s;


    }



    .featureGrid div:hover{


    transform:translateY(-8px);


    }







    .gallery{


    padding:100px 20px;


    }




    .gallery h2{


    text-align:center;

    font-size:2.8rem;

    margin-bottom:50px;


    }





    .galleryGrid{


    max-width:1200px;

    margin:auto;

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:20px;


    }



    .galleryGrid img{


    width:100%;

    border-radius:25px;


    }







    .cta{


    padding:120px 20px;

    text-align:center;


    }



    .cta h2{


    font-size:3rem;


    }



    .cta p{


    color:#6b7280;

    margin:25px;


    }




    .cta a{


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



    .galleryGrid{


    grid-template-columns:1fr;


    }



    .actions{


    justify-content:center;

    flex-wrap:wrap;


    }


    }




    `}</style>



    </>


)

}


export default Siteweb;