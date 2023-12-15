import "./News.css";
import Story from "../../components/story/Story";
import Footer from "../../components/footer/Footer";
import Events from "../../components/events/Events";
import PagesHeader from "../../components/pagesHeader/PagesHeader";
import img from "../../assets/pexels-fauxels-3183186.jpg"

const News = () => {
  return (
    <>
      <PagesHeader
        header="News"
        p="The Start hub Nation brings together the world's best talents to fuel
        your next stage of growth"
        bg={img}
      />
      <Story header="What we're about" />
      <Events />
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default News;
