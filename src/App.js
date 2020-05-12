import React from "react";
import { BrowserRouter } from "react-router-dom";

// Routes and Components
import Routes from "./routes";
// import Header from "./components/header";

// CSS
import "./App.scss";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          {/* <Row><Header /></Row> */}
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <Routes />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
