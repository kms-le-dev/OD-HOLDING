import { useEffect, useRef } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  const v1 = useRef(null);
  const v2 = useRef(null);

  useEffect(() => {
    const vids = [v1.current, v2.current].filter(Boolean);

    const listeners = [];

    vids.forEach((vid) => {
      // Forcer muet et playsInline
      try {
        vid.muted = true;
        vid.playsInline = true;
      } catch (e) {
        // ignore errors when setting properties
        console.debug('video init:', e);
      }

      // Tenter de lancer la vidéo
      const tryPlay = async () => {
        try {
          await vid.play();
        } catch (e) {
          // certains navigateurs bloquent play() si non-interaction
          console.debug('video play blocked:', e);
        }
      };

      // Si la vidéo est mise en pause, relancer
      const onPause = () => {
        tryPlay();
      };

      // Empêcher le menu contextuel et le click (qui pourrait mettre en pause)
      const prevent = (e) => e.preventDefault();

      vid.addEventListener("pause", onPause);
      vid.addEventListener("contextmenu", prevent);
      vid.addEventListener("click", prevent);

      listeners.push({ vid, onPause, prevent });

      // essayer au cas où
      setTimeout(tryPlay, 200);
    });

    return () => {
      listeners.forEach(({ vid, onPause, prevent }) => {
        try {
          vid.removeEventListener("pause", onPause);
          vid.removeEventListener("contextmenu", prevent);
          vid.removeEventListener("click", prevent);
        } catch (e) {
          console.debug('video cleanup:', e);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Digitalisez vos projets, propulsez
        <span className="bg-gradient-to-r from-blue-500 to-red-800 text-transparent bg-clip-text"> votre entreprise vers l’avenir</span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Chez OD Holding, nous accompagnons les entreprises et les porteurs de projets dans leur transformation digitale.
        Notre mission est de concevoir des logiciels sur mesure, performants et intuitifs, qui répondent précisément à vos besoins.
      </p>

      <div className="flex mt-10 justify-center">
        <video
          ref={v1}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de cette vidéo.
        </video>
        <video
          ref={v2}
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de cette vidéo.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
