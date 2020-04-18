import React from "react";
import "./style.css";

function Navbar(props) {
  return <div className="navbar sticky-top">
      <ul>
          <li className='brand' style={{fontWeight:800}}>Clicky Elmo</li>
          <li>{props.message}</li>
          <li>Score:{props.score} | Top Score:{props.topScore}</li>
      </ul>

  </div>;
}

export default Navbar;