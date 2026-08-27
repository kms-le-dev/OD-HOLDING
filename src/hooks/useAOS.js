import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: 'ease-out-cubic',
      // Forcer l'activation sur mobile
      disable: false,
      // Rejouer les animations lorsque l'utilisateur remonte la page.
      mirror: true,
    });
    // refresh AOS after initialization to ensure positions are calculated
    AOS.refresh();

    // debounced resize handler to refresh AOS on window resize (fix grand écrans / responsive layout)
    let resizeTimeout = null;
    const handleResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        AOS.refresh();
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeout) clearTimeout(resizeTimeout);
    };
  }, []);
}
