import React from "react";
import {
  Container,
  Row,
  Col,
  UncontrolledCarousel,
} from "reactstrap";

export default function ContactUs(){

    return(
        <>
        <div className="wrapper">
            <div className="page-header">
                <div className="section">
                    <Container>
                        <div className="title">
                        <h3>contact us</h3> 
                        </div>
                    </Container>
                    <div className="section">
                        <Container>
                            <Row className="justify-content-between">
                                <Col md="3">
                                    <Row className="justify-content-between align-items-center">
                                         <img
                                            alt="..."
                                            className="img-center img-fluid rounded-circle"
                                            src={require("assets/img/Contact/Uom.png").default}
                                            />
                                    </Row>
                                </Col>
                                <Col md="6">
                                  
                                    <div className="icon icon-primary">
                                        <i className="tim-icons icon-mobile" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">Contact Our Team</h4>
                                        <p>
                                        Team Scorpians <br />
                                        071 2633374 <br />
                                        Mon - Fri, 8:00-22:00
                                        </p>
                                    </div>
                                    <br/>
                                    <div className="icon icon-primary">
                                        <i className="tim-icons icon-square-pin" />
                                    </div>
                                    <div className="description">
                                        <h4 className="info-title">We are Undergraduates </h4>
                                        <p>
                                        Department Of Computer Science and Engineering <br />
                                        Faculty Of Engineering, <br />
                                        University of Moratuwa
                                        </p>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container>
                    </div>


                   
                   



                </div>
            </div>
        </div>
        </>
    );
}