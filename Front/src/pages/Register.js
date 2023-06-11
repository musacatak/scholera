import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, FormLabel, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    localStorage.clear();
    const navigate = useNavigate();

    const [userId,setUserId] = useState();
    const [userPassword,setUserPassword] = useState();
    // const [userId,setUserId] = useState();

    const submitLoginForm = (event) => {
        
        
    }
    const navigateToLogin = (e) => {
        // e.preventDefault();
        console.log("register pushed")
        navigate("/login")
    }

    return (
        <React.Fragment>
            <Container className="my-5 grid h-screen place-items-center ">
                <Card className="w-5/5 flex justify-center mb-72">
                <Card.Img variant="top" src="./dusle.png" />
                <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <h2 className="fw-normal mb-5">Sign Up to Scholera</h2>
                <Row>
                    <Col md={{span: 6}}>
                        <Form id="loginForm" onSubmit={submitLoginForm}>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-username'}>Username</FormLabel>
                                <input type={'text'} className="form-control" id={'login-username'} name="username" required 
                                onChange={(e) => {
                                    setUserId(e.target.value);
                                }}
                            />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-password'}>Email</FormLabel>
                                <input type={'password'} className="form-control" id={'login-password'} name="password" required 
                                onChange={(e) => {
                                    setUserPassword(e.target.value);
                                }}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-password'}>Password</FormLabel>
                                <input type={'password'} className="form-control" id={'login-password'} name="password" required 
                                onChange={(e) => {
                                    setUserPassword(e.target.value);
                                }}
                                />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel htmlFor={'login-password'}>Retype Password</FormLabel>
                                <input type={'password'} className="form-control" id={'login-password'} name="password" required 
                                onChange={(e) => {
                                    setUserPassword(e.target.value);
                                }}
                                />
                            </FormGroup>                            
                            <Button type="submit" className="btn-success mt-2" id="login-btn">Login</Button>
                        </Form>
                        <div>
                        Already have an account? <span className="text-blue-600 cursor-pointer hover:text-red-600" onClick={(e) => {
                                    navigateToLogin();
                                }}> Sign In!</span>
                        </div>
                        
                        
                        
                    </Col>
                </Row>
        
                </Card.Body>
                </Card>
                
            </Container>
        </React.Fragment>
    );
}

export default Login;