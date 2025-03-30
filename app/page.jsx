import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Splash from "./components/Splash";
import Why from "./components/Why";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Splash />
      <About />
      <Services />
      <Why />
      <Pricing />
      <Footer />
    </div>
  );
}
