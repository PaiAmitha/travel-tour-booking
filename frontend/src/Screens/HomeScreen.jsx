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
import { Container, Col, Row, Button } from "react-bootstrap";
import favorites from "../Data/favorites";
import holidayBackground from "../Assets/holiday.png";
import line from "../Assets/holiday-line.png";
import sight1 from '../Assets/Destination1.png'
import sight2 from '../Assets/Destination2.png'
import sight3 from '../Assets/Destination3.png'
import sight4 from '../Assets/Destination4.png'
import destination from '../Assets/Illustration.png'

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
      <div className="fav-bookings">
        <div className="fav-title">Fast & Easy</div>
        <div className="resort-title">
          Get Your Favorite <br />
          Resort Bookings
        </div>
        <div className="resort-container">
          <div className="fav-content">
            <div className="fav-container">
              {favorites.map((favorite, index) => (
                <ServiceCard
                  key={index}
                  image={favorite.image}
                  title={favorite.title}
                  description={favorite.description}
                  horizontal={true}
                />
              ))}
            </div>
          </div>
          {/* <div className="resort-image-container">
            <img src={resortImg} alt="Resort" className="resort-image" />
          </div> */}
        </div>
        </div>
        {/* Holiday Footer */}
        {/* <div
          className="holiday-footer"
          style={{ backgroundImage: `url(${holidayBackground})` }}
        >
          <Container>
            <Row className="justify-content-center text-left">
              <Col md={6} className="d-flex flex-column align-items-start">
                <div className="holiday-text">
                  Let's Make Your <br />
                  Next Holiday Amazing!!
                </div>
                <img src={line} alt="line" className="holiday-image mt-3" />
              </Col>
            </Row>
          </Container>
        </div> */}
      
      {/* Sightseeing Container */}
      {/* <Container className="sightseeing-container">
        <Row>
          <Col md={6} className="left-container">
            <div className="category-title">PROMOTION</div>
            <div className="best-services-title">
              Get Your Favorite <br />
              Resort Bookings
            </div>
            <div className="sightseeing-text">
              Et labore harum non nobis ipsum eum molestias mollitia <br />
              et corporis praesentium a laudantium internos Non quis.<br />
              eius quo eligendi corrupti et fugiat nulla qui soluta <br />
              recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
            </div>
            <Button className="viewpackages-btn">View Packages</Button>
          </Col>
          <Col md={6} className="illustration-container">
            <img src={destination} alt="destination" className="sight-mainimage" />
          </Col>
        </Row>
      </Container>

      <Container className="sightImg-container">
        <Row>
          <Col xs={6} sm={3}>
            <img src={sight1} alt="destination" className="sight-image" />
          </Col>
          <Col xs={6} sm={3}>
            <img src={sight2} alt="destination" className="sight-image" />
          </Col>
          <Col xs={6} sm={3}>
            <img src={sight3} alt="destination" className="sight-image" />
          </Col>
          <Col xs={6} sm={3}>
            <img src={sight4} alt="destination" className="sight-image" />
          </Col>
        </Row>
      </Container> */}
    </>
  );
}

export default HomeScreen;
