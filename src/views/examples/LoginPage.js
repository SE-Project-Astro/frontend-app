import React from "react";
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
    //form focusing states
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);
    //status for validation purposes
    const[stateInput,setStateInput]=React.useState({input: {}});
    const[stateError,setStateError]=React.useState({error: {}});

    //functions for validation
    const handleChange = (event)=>{
        let input = stateInput.input;
        input[event.target.name] =event.target.value;

        setStateInput({
            input: input
        });
    };

    const handleSubmit =(event)=> {
        event.preventDefault();
        if(validate()){
            console.log(stateInput);
            let input = {};
            input["Email"]="";
            input["Password"]="";

            setStateInput({
                input: input
            });
            alert('login Successfull');
        }
    };

    const validate = () =>{
        let input=stateInput.input;
        let error ={};
        let isValid = true;

        if (!input["Email"]){
            isValid = false;
            error["Email"] ="Please enter your email";
        }

        if (!input["Password"]){
            isValid = false;
            error["Password"]="Please enter your password";
        }

        if (typeof input["Email"] !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["Email"])) {
                isValid = false;
                error["Email"] = "Please enter valid email address.";
            }
        }

        setStateError({

            error: error

        });
        return isValid;
    }





    return(
        <>
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
                                        <Form className="form" onSubmit={(e)=>handleSubmit(e)}>
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
                                                    value={stateInput.input.Email}
                                                    onChange={(e) => handleChange(e)}
                                                    onFocus={(e) => setEmailFocus(true)}
                                                    onBlur={(e) => setEmailFocus(false)}
                                                />
                                            </InputGroup>
                                                <div>{stateError.error.Email}</div>
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
                                                    value={stateInput.input.Password}
                                                    onChange={(e) => handleChange(e)}
                                                    onFocus={(e) => setPasswordFocus(true)}
                                                    onBlur={(e) => setPasswordFocus(false)}
                                                />
                                            </InputGroup>
                                                <div>{stateError.error.Password}</div>
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
        </>
    );


}
