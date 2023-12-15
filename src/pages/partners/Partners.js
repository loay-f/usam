import "./Partners.css";
import PagesHeader from "../../components/pagesHeader/PagesHeader";
import Button from "../../components/button/Button";
import Slider from "../../components/slider/Slider";
import BecomePartner from "../../components/becomePartner/BecomePartner";
import Contact from "../../components/contact/Contact";
import img from "../../assets/pexels-fauxels-3183186.jpg"

const Partners = () => {
  return (
    <>
      <PagesHeader
        header="Partners"
        p="The Start hub Nation brings together the world's best talents to fuel
        your next stage of growth"
        bg={img}
      />
      <div className="text-center">
        <h1 className="partner-header h1-color">Get a bespoke package</h1>
        <Button name={"Partner with us"} />
      </div>

      <div className="statistics">
        <div className="statistics-card">
          <h1>15+</h1>
          <p>Cities in mena</p>
        </div>
        <div className="statistics-card">
          <h1>23+</h1>
          <p>Research reports</p>
        </div>
        <div className="statistics-card">
          <h1>100+</h1>
          <p>Community, Government and Corporate Partners</p>
        </div>
        <div className="statistics-card">
          <h1>400+</h1>
          <p>Mentors</p>
        </div>
        <div className="statistics-card">
          <h1>4500+</h1>
          <p>Founders and Ecosystem stakeholders</p>
        </div>
      </div>

      <BecomePartner title="How To be a Partner" />
      <Slider />
      <Contact />
      <div className="text-center mt-100">
        <h1 style={{ marginBottom: "20px" }} className="h1-color">
          Partner with us
        </h1>
        <Button name="Get in touch" />
      </div>
    </>
  );
};

export default Partners;
