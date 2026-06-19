import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import useAOS from "./hooks/useAOS";
import ScrollToggle from "./components/ScrollToggle";
import EngineerShowcase from "./components/Engineershowcase";
import Ecommerce from "./components/Ecommerce";
import Appgestion from "./components/Appgestion";
import Appmobile from "./components/Appmobile";
import Siteweb from "./components/Siteweb";
import Sitevitrine from "./components/Sitevitrine";
import Maintenance from "./components/Maintenance";
import Portfolio from "./components/Portfolio";
import Maintenanceweb from "./components/Maintenanceweb";
import Saas from "./components/Saas";

const HomePage = () => {
  useAOS();
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <EngineerShowcase />
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Footer />
        <ScrollToggle />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ecommerce" element={<><Navbar /><Ecommerce /><Footer /><ScrollToggle /></>} />
        <Route path="/appgestion" element={<><Navbar /><Appgestion /><Footer /><ScrollToggle /></>} />
        <Route path="/appmobile" element={<><Navbar /><Appmobile /><Footer /><ScrollToggle /></>} />
        <Route path="/siteweb" element={<><Navbar /><Siteweb /><Footer /><ScrollToggle /></>} />
        <Route path="/sitevitrine" element={<><Navbar /><Sitevitrine /><Footer /><ScrollToggle /></>} />
        <Route path="/maintenance" element={<><Navbar /><Maintenance /><Footer /><ScrollToggle /></>} />
        <Route path="/portfolio" element={<><Navbar /><Portfolio /><Footer /><ScrollToggle /></>} />
        <Route path="/maintenanceweb" element={<><Navbar /><Maintenanceweb /><Footer /><ScrollToggle /></>} />
        <Route path="/saas" element={<><Navbar /><Saas /><Footer /><ScrollToggle /></>} />
      </Routes>
    </Router>
  );
};

export default App;
