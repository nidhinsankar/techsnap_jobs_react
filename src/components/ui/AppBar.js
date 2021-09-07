import React from "react";

const AppBar = () => {
  return (
    <>
      <section className="header">
        <a href="index.html">
          <img id="logo" src="./assets/images/logo.jpg" alt="logo"></img>
        </a>
        <div className="navItems">
          <a href="##">About Us</a>
          <a href="boardmembers.html">Our People</a>
          <a href="services.html">Learn</a>
          <button class="btn">Get Started</button>
          <div className="Ham">
            <img src="./assets/images/menu.png" alt="Ham"></img>
          </div>
        </div>
      </section>
      <div className="dropMenu">
        <ul>
          <li>
            <a href="##">About Us</a>
          </li>
          <li>
            <a href="##">Our People</a>
          </li>
          <li>
            <a href="##">Learn</a>
          </li>
          <button className="btn">Get Started</button>
        </ul>
        <div className="Close">X</div>
      </div>
    </>
  );
};

export default AppBar;
