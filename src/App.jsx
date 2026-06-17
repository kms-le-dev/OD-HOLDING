
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import useAOS from "./hooks/useAOS";
import ScrollToggle from "./components/ScrollToggle";
import EngineerShowcase from "./components/Engineershowcase";

const App = () => {
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

export default App;
