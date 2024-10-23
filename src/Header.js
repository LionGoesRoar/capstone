import React from 'react';
import logo from "./logo.png"

function Header() {
  return (
    <header>
        <img src={logo} alt="Little Lemon Logo" className="App-logo"/>
    </header>
  );
}

export default Header;
