import React from "react";
import RegNavbar from "components/Navbars/RegNavbar.js";
import Footer from "components/Footer/Footer.js";
import classnames from "classnames";
import{
    Button,
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardImg,
    CardTitle,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,

}from "reactstrap";

export default function LoginPage(){
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);


    return(
        <>
        <RegNavbar />
        <div className="wrapper">
            <div className="page-header">
                <div className="page-header-image" />
                <div className="content">
                    <Container>
                        <Row>
                            <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                               <Card className="card-register">
                                    <CardHeader>
                                       <CardImg
                                            alt="..."
                                            src={require("assets/img/square1.png").default}
                                        />
                                        <CardTitle tag="h4">Log IN</CardTitle>
                                    </CardHeader>
                                    <br/>
                                    <CardBody>
                                        <Form className="form">
                                            <InputGroup
                                                className={classnames({
                                                    "input-group-focus": emailFocus,
                                                })}
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                    <i className="tim-icons icon-single-02" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Enter Email"
                                                    type="text"
                                                    name="Email"
                                                    //onChange={(e) => handleChange(e)}
                                                    onFocus={(e) => setEmailFocus(true)}
                                                    onBlur={(e) => setEmailFocus(false)}
                                                />
                                            </InputGroup>
                                            <br/>
                                            <InputGroup
                                                className={classnames({
                                                    "input-group-focus": passwordFocus,
                                                })}
                                            >
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                    <i className="tim-icons icon-single-02" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Enter Password"
                                                    type="password"
                                                    name="Password"
                                                    //onChange={(e) => handleChange(e)}
                                                    onFocus={(e) => setPasswordFocus(true)}
                                                    onBlur={(e) => setPasswordFocus(false)}
                                                />
                                            </InputGroup>
                                            <br/>
                                            <Button className="btn-round" color="success" size="lg">Log In</Button>
                                        </Form>
                                    </CardBody>
                               </Card>
                            </Col>
                        </Row>
                    </Container> 
                </div>
            </div>
        </div>
        <Footer />
        </>
    );


}
