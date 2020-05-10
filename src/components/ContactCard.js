import React from 'react'
import contactIMG from "../pictures/contactMe.jpg"

export default function ContactCard() {
    return (
        
  <div className="card col s12 l4">
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator responsive-img" alt="contact me via email" src={contactIMG}></img>
  </div>
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">Contact information<i className="material-icons right">more_vert</i></span>
    <p><a href="mailto:Dalton.earl@outlook.com" className="brand-logo right">Email me!</a></p>
  </div>
  <div className="card-reveal">
    <span className="card-title grey-text text-darken-4">Contact me!<i className="material-icons right">close</i></span>
    <p>I am currently looking for any oppourtunity to create. reach out via email at Dalton.Earl@outlook.com or click my name in the upper right corner</p>
  </div>
</div>
            
        
    )
}
