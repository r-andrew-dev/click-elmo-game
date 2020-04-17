import React from "react";
import "./style.css";

function Navbar(props) {
  return <div className="navbar sticky-top">
      <ul>
          <li className='brand'>Click Elmo</li>
          <li>Click an image to begin!</li>
          <li>Score:{props.score}| Top Score:{props.topScore}</li>
      </ul>

  </div>;
}

export default Navbar;