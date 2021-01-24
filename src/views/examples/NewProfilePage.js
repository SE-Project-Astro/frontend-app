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
import {useDispatch, useSelector} from "react-redux";
import {passwordResetThunkFunction} from "../../redux/slices/authSlice";

export default function NewProfilePage(){
    const [tabs, setTabs] = React.useState(1);
    const [stateChange, setStateChange] = React.useState(true);

    //states for validation purposes
    const [currentPass, setCurrentPass] = React.useState("");
    const [newPass, setNewPass] = React.useState("");
    const [newPassRE,setNewPassRE]= React.useState("");

    const[currentPassError,setCurrentPassError]= React.useState("");
    const[newPassError,setNewPassError]= React.useState("");
    const dispatch = useDispatch();
    const userData = useSelector(state => state.users.userData)

    const handleChange = (event)=>{
        setStateChange(false);
    };

    const submitHandler=(event)=>{
      let isValidCurrentPass  = true;
      let isValidNewPass  = true;
      event.preventDefault();
        if (!currentPass){
          setCurrentPassError("enter your old password");
          isValidCurrentPass=false;
        }
        if ((!newPass)||(!newPassRE)){
          setNewPassError("Enter new password");
          isValidNewPass  =false
        }
        if (!(newPass===newPassRE)){
          setNewPassError("New password don't match");
          isValidNewPass  =false;
        }
        if (isValidNewPass){
          setNewPassError("");
        }
        if (isValidCurrentPass){
          setCurrentPassError("");
        }
        if (isValidCurrentPass && isValidNewPass) {
          dispatch(passwordResetThunkFunction(currentPass, newPassRE))
          setCurrentPass("")
          setNewPass("")
          setNewPassRE("")
        }
    };

   

    return(
        <>
          <br/>
          <br/>
          <div className="wrapper">
            <div className="page-header">
            <div className="content">
            
            <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/Profile/pro1.png").default}
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
                          Change Password
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                          <Table >
                          <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{userData ? userData.fname : ""}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{userData ? userData.lname : ""}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{userData ? userData.UserName : ""}</td>
                            </tr>

                          </tbody>
                              

                          </Table>
                      </TabPane>



                      <TabPane tabId="tab2">
                      <Form onSubmit={event => submitHandler(event)}>
                        <Row>
                          <Label sm="3">Current Password</Label>
                          <Col sm="9">
                          
                            <FormGroup>
                              <Input
                                placeholder="Current Password"
                                type="Password"
                                value={currentPass}
                                onChange={event => setCurrentPass(event.target.value)} 
                              />
                              
                            </FormGroup>
                            <FormText color="default" tag="span">
                                {currentPassError}
                              </FormText>
                          </Col>
                        </Row>
                        <Row>
                          <Label sm="3">New Password</Label>
                          <Col sm="9">
                            <FormGroup>
                              <Input placeholder="New Password"
                              type="Password" 
                              value={newPass}
                              onChange={event => setNewPass(event.target.value)} 
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
                              value={newPassRE}
                              onChange={event => setNewPassRE(event.target.value)} 
                              />
                              <FormText color="default" tag="span">
                                {newPassError}
                              </FormText>
                            </FormGroup>
                            <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="submit"
                          
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                          </Col>
                        </Row>
                      </Form>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
            </Col>
            </Row>
            </div>
            </div>
          </div>


        </>
    );
}
