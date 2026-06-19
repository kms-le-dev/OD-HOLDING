import useScrollToTop from "../hooks/useScrollToTop";
import sitevitrineVideo from "../assets/sitevitrine.mp4";

const Sitevitrine = () => {
  useScrollToTop();
const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite créer un site vitrine professionnel. J'aimerais en savoir plus.`);



const whatsappLink =
`https://wa.me/2250757109835?text=${whatsappMessage}`;




const services = [


{

title:"Site vitrine professionnel",

image:
"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop",

text:
"Présentez votre entreprise avec une image professionnelle qui inspire confiance."

},



{

title:"Design moderne",

image:
"https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop",

text:
"Une interface élégante, rapide et adaptée à tous les appareils."

},




{

title:"Présence digitale",

image:
"https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",

text:
"Transformez vos visiteurs en prospects grâce à une stratégie digitale efficace."

}


];





return (

<>


<section className="sitevitrine">


<div className="blur"></div>





{/* HERO */}



<section className="hero">



<div className="content">


<span className="badge">

Création Site Vitrine Premium

</span>




<h1>


Votre entreprise mérite

<span>

un site qui vend votre image

</span>


</h1>




<p>


Je crée des sites vitrines modernes, rapides et
professionnels pour présenter votre activité,
attirer des clients et développer votre visibilité.


</p>





<div className="buttons">


<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"

className="primary"

>

Créer mon site vitrine

</a>





<a

href="#demo"

className="secondary"

>

Voir la démo

</a>


</div>


</div>







{/* MOCKUP 3D */}



<div className="mockup">


<div className="websiteCard">


<img

src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop"

alt="site vitrine"

loading="eager"

fetchPriority="high"

/>


</div>


</div>



</section>








{/* STATS */}





<section className="stats">



<div>

<h2>+500</h2>

<p>Sites réalisés</p>

</div>



<div>

<h2>24/7</h2>

<p>Présence en ligne</p>

</div>




<div>

<h2>100%</h2>

<p>Responsive</p>

</div>



</section>









{/* VIDEO */}



<section

id="demo"

className="videoSection"

>



<h2>

Découvrez un site vitrine moderne

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

src={sitevitrineVideo}

type="video/mp4"

/>


</video>


</div>


</section>









{/* SERVICES */}




<section className="services">


<h2>

Ce que votre site peut apporter

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


{/* CTA FINAL */}





<section className="cta">



<h2>


Prêt à avoir une présence professionnelle en ligne ?

</h2>



<p>


Créons ensemble un site vitrine qui attire vos futurs clients.

</p>



<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"

>

Créer mon site vitrine

</a>


</section>


</section>


<style>{`



*{

box-sizing:border-box;

}





.sitevitrine{


background:#ffffff;

min-height:100vh;

font-family:Inter,Arial,sans-serif;

color:#111827;

overflow:hidden;

position:relative;


}





.blur{


position:absolute;

width:700px;

height:700px;


background:

radial-gradient(

circle,

rgba(37,99,235,.16),

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

display:inline-block;

font-weight:bold;

margin-bottom:25px;


}





.hero h1{


font-size:4rem;

line-height:1.1;

margin-bottom:25px;


}





.hero h1 span{


display:block;

color:#2563eb;


}





.hero p{


font-size:1.15rem;

color:#6b7280;

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

color:#111;

padding:18px 35px;

border-radius:16px;

text-decoration:none;


}







.mockup{


perspective:1200px;


}





.websiteCard{


transform:

rotateY(-18deg)

rotateX(8deg);


transition:.5s;


}




.websiteCard:hover{


transform:

rotateY(0)

rotateX(0)

scale(1.05);


}




.websiteCard img{


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





.cardBody{


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





.grid{


max-width:1200px;

margin:auto;

display:grid;

grid-template-columns:repeat(auto-fit,minmax(250px,1fr));

gap:20px;


}





.grid div{


background:#f8fafc;

padding:30px;

border-radius:20px;

font-weight:bold;


transition:.3s;


}





.grid div:hover{


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



.buttons{


justify-content:center;

flex-wrap:wrap;


}



}



`}</style>



</>

)

}



export default Sitevitrine;