import React, { useState } from "react";
import { Button, Form, Image, Container } from "react-bootstrap";
import "./styles.css";

const Signin = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const updateLoginField = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = () => {
    console.log(login);
  };

  return (
    <Container fluid>
      <Image
        fluid
        width={240}
        className="mt-5"
        src="./twitter_login.png"
      ></Image>
      <h4 className="mt-3">Sign in to your Twitter account</h4>{" "}
      <Form className="mt-5">
        {/* USERNAME */}
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            size="sm"
            type="text"
            name="email"
            value={login.email}
            onChange={updateLoginField}
            placeholder="Username"
          />
        </Form.Group>

        {/* PASSWORD */}
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            size="sm"
            name="password"
            value={login.password}
            onChange={updateLoginField}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Row>
          <Button
            className="rounded-pill"
            block
            size="sm"
            variant="outline-primary"
            onClick={signIn}
          >
            Sign-in
          </Button>
        </Form.Row>

        {/* <Form.Row>
          <span style={{ width: "100%", textAlign: "center" }}>or</span>
        </Form.Row>

        <Form.Row>
          <Button block size="sm" variant="primary">
            Register
          </Button>
        </Form.Row> */}
      </Form>
    </Container>
  );
};

export default Signin;
