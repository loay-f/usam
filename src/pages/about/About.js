import "./About.css";
import PagesHeader from "../../components/pagesHeader/PagesHeader";
import WhyJoin from "../../components/whyJoin/WhyJoin";
import Services from "../../components/services/Services";
import BecomePartner from "../../components/becomePartner/BecomePartner";
import img from "../../assets/pexels-fauxels-3183186.jpg";

const About = () => {
  return (
    <>
      <PagesHeader
        bg={img}
        header="About Us"
        p="We are diverse team of Founders, makers, Operators, Investors, and tech lovers"
      />
      <p className="about-p text-muted">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages.
      </p>

      <WhyJoin />

      <Services />

      <BecomePartner title="How To Apply" />
    </>
  );
};

export default About;
