import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const contactItem = navItems.find((item) => item.href === "#contact");
  const mobileNavItems = navItems.filter((item) => item.href !== "#contact");
  const colorVariants = [
    "bg-blue-50 text-slate-900",
    "bg-sky-50 text-slate-900",
    "bg-indigo-50 text-slate-900",
    "bg-cyan-50 text-slate-900",
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    if (!mobileDrawerOpen) return undefined;

    const handleOutsidePointerDown = (event) => {
      if (
        toggleRef.current?.contains(event.target) ||
        drawerRef.current?.contains(event.target)
      ) {
        return;
      }

      setMobileDrawerOpen(false);
    };

    document.addEventListener("pointerdown", handleOutsidePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointerDown);
    };
  }, [mobileDrawerOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const handleHomeClick = () => {
    navigate("/");
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileDrawerOpen(false);
  };

  const handleNavClick = (href) => {
    if (href === "#") {
      handleHomeClick();
    } else if (href.startsWith("#")) {
      // Sections sur la page d'accueil
      navigate("/");
      // Scroller vers l'élément après la navigation
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // Liens externes ou autres
      window.open(href, "_blank");
    }
    setMobileDrawerOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <button 
            onClick={handleHomeClick}
            className="flex items-center flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">OD HOLDING</span>
          </button>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="cursor-pointer hover:text-blue-500 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          <div className="lg:hidden flex items-center gap-2">
            {contactItem && (
              <button
                onClick={() => handleNavClick(contactItem.href)}
                className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                {contactItem.label}
              </button>
            )}
            <button
              ref={toggleRef}
              onClick={toggleNavbar}
              aria-label={mobileDrawerOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileDrawerOpen}
              aria-controls="mobile-navigation"
              className="p-3 rounded-full bg-slate-900/95 text-white border border-white/10 shadow-lg shadow-slate-950/40 transition-transform duration-300 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/30 backdrop-blur-sm"
            >
              {mobileDrawerOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            ref={drawerRef}
            id="mobile-navigation"
            className="fixed inset-x-4 top-20 z-20 mx-auto w-[min(92vw,20rem)] rounded-3xl bg-slate-50/95 text-slate-900 p-6 shadow-2xl shadow-slate-950/8 backdrop-blur-xl border border-slate-200/60 animate-drawer-in transition-all duration-300 ease-out lg:hidden"
          >
            <div className="mb-4 text-center text-sm text-slate-500">Navigation</div>
            <ul className="flex flex-col items-center justify-center space-y-3">
              {mobileNavItems.map((item, index) => (
                <li key={index} style={{ animationDelay: `${index * 60}ms` }} className="animate-drawer-in">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`inline-block rounded-full px-6 py-2 text-sm font-semibold shadow-sm transition transform duration-200 text-center ${colorVariants[index % colorVariants.length]} hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-200/40`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
