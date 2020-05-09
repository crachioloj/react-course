import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Check out the following things I've done:</p>
    <Link to="/portfolio/1">Item 1</Link>
    <Link to="/portfolio/2">Item 2</Link>
  </div>
);

export default PortfolioPage;