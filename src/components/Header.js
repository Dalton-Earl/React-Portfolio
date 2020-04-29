import React from "react";

function Header(){
    return <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo right">Dalton Earl</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>

      </ul>
    </div>
  </nav>
}
export default Header;
