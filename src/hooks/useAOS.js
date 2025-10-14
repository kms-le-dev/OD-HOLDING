import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-out-cubic',
      // Forcer l'activation sur mobile
      disable: false,
      // mirror: true permet de rejouer l'animation quand on scroll vers le haut
      mirror: false,
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
