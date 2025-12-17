import { useEffect, useState } from "react";

const ScrollToggle = () => {
  const [showUp, setShowUp] = useState(false);

  useEffect(() => {
    const check = () => {
      const y = window.scrollY || window.pageYOffset;
      const nearTop = y < 200;
      setShowUp(!nearTop);
    };

    check();
    let resizeTimeout = null;
    let scrollTimeout = null;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(check, 50);
    };

    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(check, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, []);

  const handleClick = () => {
    if (showUp) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Défilement jusqu'au bas de la page
      const pageHeight = document.documentElement.scrollHeight;
      window.scrollTo({ top: pageHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      aria-label={showUp ? "Aller en haut" : "Aller en bas de la page"}
      className={`scroll-toggle fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-black shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300`}
      title={showUp ? "Remonter en haut" : "Aller en bas de la page"}
    >
      {showUp ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      )}
    </button>
  );
};

export default ScrollToggle;
