import React from "react";
import "./HomeScreen.css";
import curve from "../Assets/curve.png";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.png";
import logo5 from "../Assets/logo5.png";
import services from "../Data/services";
import ServiceCard from "../Components/ServiceCard";
import { Container, Col } from "react-bootstrap";
// import favorites from "../Data/favorites";

function HomeScreen() {
  return (
    <>
      <div className="container-fluid home">
        {" "}
        {/* container-fluid*/}
        <Container>
          <img src={curve} alt="curve" className="curve-img" />
          <div className="tagline-text">
            No matter where <br />
            you're going to, we'll <br />
            take you there
          </div>
        </Container>
      </div>
      {/* Footer Logos */}
      <div className="footer-logos">
        <a
          href="https://www.emirates.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo1} alt="Logo 1" className="footer-logo" />
        </a>
        <a
          href="https://www.trivago.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo2} alt="Logo 2" className="footer-logo" />
        </a>
        <a
          href="https://www.airbnb.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo3} alt="Logo 3" className="footer-logo" />
        </a>
        <a
          href="https://www.turkishairlines.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo4} alt="Logo 4" className="footer-logo" />
        </a>
        <a
          href="https://www.logo5website.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo5} alt="Logo 5" className="footer-logo" />
        </a>
      </div>

      <div className="best-services">
        <div className="category-title">CATEGORY</div>
        <div className="best-services-title">We Offer Best Services</div>
        <div className="services-container">
          {services.map((service, index) => (
            <Col key={index}>
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                className="vertical"
              />
            </Col>
          ))}
        </div>
      </div>
      {/* Favorite Bookings*/}
      {/* <div className="col-md-6">
        {favorites.map((fav, index) => (
          <Col key={index}>
            <ServiceCard
              image={fav.image}
              title={fav.title}
              description={fav.description}
              className="horizontal"
            />
          </Col>
        ))}
      </div> */}
    </>
  );
}

export default HomeScreen;
