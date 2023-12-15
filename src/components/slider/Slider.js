import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import wrapper from "../../hoc/Wrapper";

const CustomArrow = ({ className, style, onClick, direction }) => {
  const arrowStyle = {
    background: "#F36325",
    color: "white",
    fontSize: "24px",
    borderRadius: "50%",
    border: "1px solid #CCC",
    cursor: "pointer",
  };

  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyle, color: "red" }}
      onClick={onClick}
    ></div>
  );
};

const SliderPartners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
  };
  return (
    <div>
      <h1 className="slider-header h1-color">Our Partners</h1>
      <Slider {...settings}>
        <div className="group">
          <div className="card">
            <h1>Koios</h1>
          </div>
          <div className="card">
            <h1>Faks</h1>
          </div>
          <div className="card">
            <h1>ferry</h1>
          </div>
          <div className="card">
            <h1>trezy</h1>
          </div>
        </div>
        <div className="group">
          <div className="card">
            <h1>Koios</h1>
          </div>
          <div className="card">
            <h1>faks</h1>
          </div>
          <div className="card">
            <h1>ferry</h1>
          </div>
          <div className="card">
            <h1>trezy</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default wrapper(SliderPartners);
