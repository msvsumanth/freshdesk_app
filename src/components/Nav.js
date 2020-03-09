import React from "react";
import "./Nav.css";
import logo from "../images/logo.png";

export default function Nav() {
  return (
    <div className="bg-white shadow-sm ml-0 mr-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <img src={logo} style={{ width: "4vh" }} alt="logo" />
          <h4 className="pl-2 text-secondary">freshdesk</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto"></ul>
            <span className="navbar-text d-flex">
              <li className="list-unstyled px-2 text-secondary navfont">Features</li>
              <li className="list-unstyled px-2 text-secondary navfont">Pricing</li>
              <li className="list-unstyled px-2 text-secondary navfont">Solutions</li>
              <li className="list-unstyled px-2 text-secondary navfont">Resources</li>
              <li className="list-unstyled px-2 text-secondary navfont">Apps</li>
              <li className="list-unstyled px-2 text-secondary navfont">Login</li>
              <li><button type="button" className="signupButton btn btn-success pl-3 pr-3 font-weight-bold text-light">SIGN UP</button></li>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
}
