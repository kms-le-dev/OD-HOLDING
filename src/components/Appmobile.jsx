import useScrollToTop from "../hooks/useScrollToTop";
import appMobileVideo from "../assets/appmobile.mp4";

const Appmobile = () => {
  useScrollToTop();

const whatsappMessage = encodeURIComponent(`Bonjour, je souhaite créer une application mobile professionnelle. J'aimerais en savoir plus.`);


const whatsappLink =
`https://wa.me/2250757109835?text=${whatsappMessage}`;



const services = [

{
title:"Application Mobile Business",
image:
"https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",

text:
"Transformez votre idée en application mobile moderne qui attire et fidélise vos clients."
},


{
title:"Design Mobile Premium",
image:
"https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",

text:
"Une interface élégante pensée pour offrir une expérience utilisateur exceptionnelle."
},


{
title:"Application Connectée",
image:
"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",

text:
"Notifications, paiements, comptes utilisateurs et fonctionnalités intelligentes."
}

];



return (

<>


<section className="appmobile">


<div className="light"></div>



{/* HERO */}


<section className="hero">


<div className="content">


<span className="badge">
Création Application Mobile Premium
</span>



<h1>

Votre application mobile
<span>
 qui transforme vos visiteurs en clients
</span>

</h1>



<p>

Je développe des applications mobiles rapides,
modernes et professionnelles pour aider les entreprises
à vendre plus, automatiser leurs services et améliorer
leur relation client.

</p>



<div className="buttons">


<a
href={whatsappLink}
target="_blank"
rel="noopener noreferrer"
className="primary"
>

Créer mon application

</a>



<a
href="#demo"
className="secondary"
>

Voir la démo

</a>


</div>


</div>





<div className="phone3d">


<div className="phone">


<img

src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=900&auto=format&fit=crop"

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

<p>
Engagement client
</p>

</div>



<div>

<h2>24/7</h2>

<p>
Votre activité accessible
</p>

</div>




<div>

<h2>100%</h2>

<p>
Sur mesure
</p>

</div>


</section>







{/* VIDEO */}


<section
id="demo"
className="videoSection"
>


<h2>
Découvrez une expérience mobile moderne
</h2>


<div className="video">


<video

controls

autoPlay

muted

loop

playsInline

preload="metadata"

>


<source

src={appMobileVideo}

type="video/mp4"

/>


</video>


</div>


</section>







{/* SERVICES */}



<section className="services">


<h2>
Pourquoi créer votre application mobile ?
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

loading="lazy"

alt={item.title}

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







{/* GALERIE */}



<section className="gallery">


<h2>
Un design qui inspire confiance
</h2>



<div className="images">


<img

src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1200&auto=format&fit=crop"

/>



<img

src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1200&auto=format&fit=crop"

/>


</div>


</section>







{/* CTA */}


<section className="cta">


<h2>

Votre idée mérite une vraie application mobile

</h2>



<p>

Discutons de votre projet et construisons votre solution digitale.

</p>




<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"

>

Créer mon application

</a>



</section>




</section>







<style>{`



*{

box-sizing:border-box;

}



.appmobile{


background:white;

color:#111827;

font-family:Inter,Arial,sans-serif;

overflow:hidden;

position:relative;


}





.light{


position:absolute;

width:600px;

height:600px;

background:radial-gradient(circle,
rgba(37,99,235,.15),
transparent);

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

gap:60px;

align-items:center;


}





.badge{


background:#eef2ff;

color:#2563eb;

padding:12px 20px;

border-radius:50px;

font-weight:700;

display:inline-block;

margin-bottom:25px;


}





.hero h1{


font-size:4rem;

line-height:1.1;


}



.hero h1 span{


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

padding:18px 35px;

border-radius:16px;

text-decoration:none;

color:#111;


}






.phone3d{


perspective:1000px;


}



.phone{


transform:

rotateY(-20deg)

rotateX(10deg);


transition:.5s;

}



.phone:hover{


transform:

rotateY(0)

rotateX(0)

scale(1.05);


}



.phone img{


width:100%;

border-radius:40px;

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





.video{


max-width:1200px;

margin:auto;

border-radius:30px;

overflow:hidden;

box-shadow:0 30px 70px rgba(0,0,0,.15);


}



.video video{


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


transform:

translateY(-10px)

rotateX(5deg);


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




.images{


display:grid;

grid-template-columns:repeat(2,1fr);

gap:20px;

max-width:1200px;

margin:auto;


}



.images img{


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



.images{


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


export default Appmobile;