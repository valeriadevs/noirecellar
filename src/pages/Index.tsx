import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Selection from "@/components/Selection";
import Menu from "@/components/Menu";
import Atmosphere from "@/components/Atmosphere";
import Reviews from "@/components/Reviews";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Selection />
      <Menu />
      <Atmosphere />
      <Reviews />
      <FindUs />
      <Footer />
    </main>
  );
};

export default Index;
