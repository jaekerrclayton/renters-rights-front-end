import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import { Container } from 'react-bootstrap';

const LogIn = () => {
    return (
        <main>
            <Container className="padded">
                <Alert className="text-box" variant="success">
                <Form>
                    <Row>
                        <h2>Login</h2>
                    </Row>
                    <Row>
                        <Form.Group className="extra-padded">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control name="username" type="text" placeholder="Enter Username"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="extra-padded">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control name="password" type="text" placeholder="Enter Password"/>
                        </Form.Group>
                    </Row>
                    <NavLink to="/admin">
                        <button className='button' type="submit">
                            Login
                        </button>
                    </NavLink>
                </Form>
                </Alert>
            </Container>
        </main>
    );
};

export default LogIn