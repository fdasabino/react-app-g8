import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Marketplace from "./components/Marketplace/Marketplace";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Banner headingType="gallery" />
      <Gallery />
      <Banner headingType="marketPlace" />
      <Marketplace />
      <Footer />
    </div>
  );
}

export default App;
