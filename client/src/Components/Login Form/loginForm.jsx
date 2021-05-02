import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./loginForm.css"

function LoginForm() {

    const googleLogin = () => {
        // window.open("", "_self")
        console.log("google click");
    }

    return (
        <Container fluid className="loginContainer">
            <Row>
                <Col sm={12} md={8}>
                    <h1>Welcome to Smash "R" Us</h1>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={8}>
                    <h3>Login With Google</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={8}>
                    <button
                        className="googleLogin"
                        onClick={googleLogin}> Google
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginForm;