import React from "react";
import classnames from "classnames";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

export default function NewProfilePage(){
    const [tabs, setTabs] = React.useState(1);
    const [stateChange, setStateChange] = React.useState(true);

    const handleChange = (event)=>{
        
        setStateChange(false);
    };

   

    return(
        <>
            <div className="wrapper">
            <br/>
            <br/>
            <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/mike.jpg").default}
                    />
                    <h4 className="title">My Profile</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          View Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Edit Profile
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#pablo"
                        >
                          Change Password
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                          <Table className="tablesorter">
                          <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>First Name</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>Last Name</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>Email</td>
                            </tr>

                          </tbody>
                              

                          </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Row>
                          <Label sm="3">First Name</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="Tharinda"
                                type="text"
                              />
                              
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Last Name</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="Thamaranga"
                              type="text" 
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Email</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="Email"
                              type="text" 
                              onChange={(e) => handleChange(e)}
                              />
                              <FormText color="default" tag="span">
                                Please enter a valid address.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                          disabled={stateChange}
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                      </TabPane>


                      <TabPane tabId="tab3">
                        <Row>
                          <Label sm="3">Current Password</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input
                                placeholder="Current Password"
                                type="Password"
                              />
                              
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">New Password</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="New Password"
                              type="Password" 
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">Re-Enter New Password</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="Re-Enter New Password"
                              type="Password" 
                              />
                              <FormText color="default" tag="span">
                                Please enter a valid address.
                              </FormText>
                            </FormGroup>
                          </Col>
                        </Row>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
            </Col>
            </Row>
            </div>


        </>
    );
}
