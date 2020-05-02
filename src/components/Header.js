import React from "react";
import Scrollspy from 'react-scrollspy';

function Header(){
    return <nav>
    <div className="nav-wrapper">
      <a href="mailto:Dalton.earl@outlook.com" className="brand-logo right">Dalton Earl</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <Scrollspy items={['Home', 'About', 'Projects', 'Contact']} currentClassName="is=current">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
        </Scrollspy>
      </ul>
    </div>
  </nav>
}
export default Header;
