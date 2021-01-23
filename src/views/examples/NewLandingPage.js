
import React from "react";


// core components

import NormalNavbar from "components/Navbars/NormalNavbar.js";
import Footer from "components/Footer/Footer.js";
import Cards from "components/cards.js";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";
const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  return (
    <>
      <NormalNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png").default}
          /> 



          
            <div className="section">
              <Container>
                <div className="title">
                  <h3>A Guide to Astronomy</h3>
                  <br/>
                  <br/><br/>
                </div>
                <Row className="justify-content-between align-items-center">
                  <Col className="mb-5 mb-lg-0" lg="5">
                    <h1 className="text-white font-weight-light">
                      Are you an enthusiastic person to learn Astronomy?
                    </h1>
                    <p className="text-white mt-4">
                      Astronomy can be a fascinating and rewarding pastime,
                       whether you have a substantial telescope and accessories such as a CCD camera,
                        or are a beginner observing with the naked eye. It is one of the few sciences
                         where amateurs make genuine contributions to research, but many observers simply do it 
                         for the excitement of seeing with their own eyes the planets, star clusters, nebulae and
                          so on that are familiar from books. Observing directly by eye with an amateur telescope,
                           it is not possible to see most astronomical objects with the amount of detail and colour
                            captured in the images recorded by large professional instruments.
                    </p>
              
                  </Col>
                  <Col lg="6">
                    <UncontrolledCarousel
                      items={carouselItems}
                      indicators={false}
                      autoPlay={true}
                    />
                  </Col>
                </Row>
              </Container>
            </div> 
        </div>



        <section className="section section-lg">
            <section className="section section-lg">
                
                  <Container>
                    <Row className="justify-content-center">
                      <Col lg="12">
                        <h1 className="text-center">Benifits of using GUIDE Astro</h1>
                        <Row className="row-grid justify-content-center">
                          <Col lg="3">
                            <div className="info">
                              <div className="icon icon-primary">
                                <i className="tim-icons icon-money-coins" />
                              </div>
                              <h4 className="info-title">Can save money</h4>
                              <hr className="line-primary" />
                              <p>
                                Most astronomical equipments are very expensive. But its very hard to see astronomical
                                objects through it. some times you have to rent those instruments for days.If you use this Guide
                                you can get updated about astronomical events in advance and you can be ready for it.
                              </p>
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="info">
                              <div className="icon icon-warning">
                                <i className="tim-icons icon-chart-pie-36" />
                              </div>
                              <h4 className="info-title">Time Saving</h4>
                              <hr className="line-warning" />
                              <p>
                                To see a little astronomical object, sometimes you have to wait an hours, sometimes a full day 
                                to see it. but in this real time updating application you can be updated about any atronomical 
                                object and you don't have to look sky all the time. 
                              </p>
                            </div>
                          </Col>
                          <Col lg="3">
                            <div className="info">
                              <div className="icon icon-success">
                                <i className="tim-icons icon-single-02" />
                              </div>
                              <h4 className="info-title">Community</h4>
                              <hr className="line-success" />
                              <p>
                                you can share your knowledge with others usung the comment section in the news forum and
                                get to know each other.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Container>
              </section>
          </section>


          <div className="section section-examples" data-background-color="black">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path1.png").default}
            />
            <div className="space-50" />
              <Container className="text-center">
                <Row>
                  <Col sm="6">
                    <Link to="landing-page">
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/landing-page.png").default}
                      />
                    </Link>
                    <Button
                      className="btn-simple btn-round"
                      color="primary"
                      to="landing-page"
                      tag={Link}
                    >
                      View Landing Page
                    </Button>
                  </Col>
                  <Col sm="6">
                    <Link to="profile-page">
                      <img
                        alt="..."
                        className="img-raised"
                        src={require("assets/img/profile-page.png").default}
                      />
                    </Link>
                    <Button
                      className="btn-simple btn-round"
                      color="primary"
                      to="profile-page"
                      tag={Link}
                    >
                      View Profile Page
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
      </div>
    </>
  );
}
