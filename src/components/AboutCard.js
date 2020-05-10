import React from 'react'
import Portrait from "../pictures/Me.jpg"

export default function AboutCard() {
    return (
        
    <div className="col s12 l4">
      <div className="card">
        <div className="card-image">
          <img className = "activator responsive-img" alt ="Self Portrait of me"src={Portrait}></img>
        </div>
        <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">About me<i className="material-icons right">more_vert</i></span>
        </div>

        <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">Personal info<i className="material-icons right">close</i></span>
          <p>I am a full stack web developer that specializes in The mern stack.
                I have been focued on front end web development I have used Bootstrap and Materialize. 
          </p>
        </div>
      </div>
    </div>
  
    )
}
