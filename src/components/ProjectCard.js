import React from 'react'
import image1 from '../pictures/IMG_20200301_203521.jpg'

export default function ProjectCard() {
    return (
        <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
          <img src={image1} alt="sample">
              </img>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
    )
}
