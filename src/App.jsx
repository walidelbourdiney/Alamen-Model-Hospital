import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Specialties from "./components/sections/Specialties";
import Capabilities from "./components/sections/Capabilities";
import MedicalTechnology from "./components/sections/MedicalTechnology";
import SpecializedUnits from "./components/sections/SpecializedUnits";
import BeautyCenter from "./components/sections/BeautyCenter";
import Gallery from "./components/sections/Gallery";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Specialties />

      <Capabilities />

      <MedicalTechnology />
      <SpecializedUnits />
      <BeautyCenter />
      <About />

      <Gallery />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
