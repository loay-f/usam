import "./Home.css";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Founder from "../../components/founder/Founder";
import Feature from "../../components/feature/Feature";
import Story from "../../components/story/Story";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Founder />
      <Feature />
      <Story header="Where Excellence Thrives" />
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
