import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Container, Form, FormGroup, Label, Input, Button} from "reactstrap";

import { loginThunkFunction } from "../redux/slices/authSlice";

const LoginForm = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(loginThunkFunction(username, password))
    }

    return (
        <section className="section section-lg">
            <section className="section">
                <Container>
                    <Form onSubmit={event => submitHandler(event)}>
                        <FormGroup>
                            <Label for="exampleEmail">Username</Label>
                            <Input type="text" name="username" id="username-login" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="password-login" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} />
                        </FormGroup>
                        <Button type="submit">Login</Button>
                    </Form>
                </Container>
            </section>
        </section>
    )
}

export default LoginForm