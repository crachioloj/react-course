import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink activeClassName="is-active" exact="true" to="/">Home</NavLink>
    <NavLink activeClassName="is-active" to="/contact">Contact</NavLink>
    <NavLink activeClassName="is-active" to="/portfolio">Portfolio</NavLink>
  </header>
);

export default Header;