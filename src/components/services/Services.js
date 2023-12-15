import "./Services.css";
import ServiceCard from "../serviceCard/ServiceCard";
import wrapper from "../../hoc/Wrapper";
import services from "../../assets/data";

const Services = () => {
  return (
    <>
      <div className="services-text">
        <h1>Our Innovations Center</h1>
        <p>
          We offer inspiring dedicated facilities to get your idea off the
          ground
        </p>
      </div>
      <div className="service-cards">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            alt={service.imgAlt}
            title={service.name}
            description={service.desc}
            src={service.to}
          />
        ))}
      </div>
    </>
  );
};

export default wrapper(Services);
