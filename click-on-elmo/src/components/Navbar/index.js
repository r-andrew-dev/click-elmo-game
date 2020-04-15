import React from "react";
import "./style.css";

function Navbar() {
  return <div className="navbar sticky-top">
      <ul>
          <li className='brand'>Click Elmo</li>
          <li>Click an image to begin!</li>
          <li>Score:"<span>0</span>| Top Score: <span>0</span></li>
      </ul>

  </div>;
}

export default Navbar;