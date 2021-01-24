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
import {useDispatch} from "react-redux";
import { loginThunkFunction } from "../../redux/slices/authSlice";
import {useHistory} from "react-router-dom";


export default function LoginPage(){
    //form focusing states
    const [emailFocus, setEmailFocus] = React.useState(false);
    const [passwordFocus, setPasswordFocus] = React.useState(false);
    //status for validation purposes
    const[stateInput,setStateInput]=React.useState({input: {}});
    const[stateError,setStateError]=React.useState({error: {}});
    //mouse following square states  
    const [squares1to6, setSquares1to6] = React.useState("");
    const [squares7and8, setSquares7and8] = React.useState("");
    const history=useHistory();

    //for authendication purposes
    const dispatch = useDispatch();
    const submitHandler = (username,password) => {
        
        dispatch(loginThunkFunction(username, password))
        history.push("/landing")
    }

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
            
            let input = {};
            let Email= stateInput.input.Email;
            let Password=stateInput.input.Password;
            input["Email"]="";
            input["Password"]="";

            setStateInput({
                input: input
            });
            
            submitHandler(Email,Password);
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

    //mouse following square effects on the page
    React.useEffect(() => {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", followCursor);
        // Specify how to clean up after this effect:
        return function cleanup() {
        document.body.classList.toggle("register-page");
        document.documentElement.removeEventListener("mousemove", followCursor);
        };
    },[]);

    const followCursor = (event) => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        setSquares1to6(
        "perspective(500px) rotateY(" +
            posX * 0.05 +
            "deg) rotateX(" +
            posY * -0.05 +
            "deg)"
        );
        setSquares7and8(
        "perspective(500px) rotateY(" +
            posX * 0.02 +
            "deg) rotateX(" +
            posY * -0.02 +
            "deg)"
        );
    };




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
                                            src={require("assets/img/square-purple-1.png").default}
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
                        <div className="register-bg" 
                        />
                            <div
                                className="square square-1"
                                id="square1"
                                style={{ transform: squares1to6 }}
                                
                            />
                            <div
                                className="square square-2"
                                id="square2"
                                style={{ transform: squares1to6 }}
                                
                            />
                            
                            <div
                                className="square square-3"
                                id="square3"
                                style={{ transform: squares1to6 }}
                                
                            />
                            <div
                                className="square square-4"
                                id="square4"
                                style={{ transform: squares1to6 }}
                                
                            />
                            <div
                                className="square square-5"
                                id="square5"
                                style={{ transform: squares1to6 }}
                                
                            />
                            <div
                                className="square square-6"
                                id="square6"
                                style={{ transform: squares1to6 }}
                                
                            />
                    </Container> 
                </div>
            </div>
        </div>
        </>
    );


}
