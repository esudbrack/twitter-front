import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button className="btn btn-primary btn-signup">Sign up</button>
      <Button className="btn-signup" variant="outline-primary">
        Primary
      </Button>
    </header>
  );
};

export default Header;
