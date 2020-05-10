import React from 'react'
import image2 from '../pictures/Mern.png'

export default function ProjectCardReact() {
    return (
    <div className="col s12 l4">
      <div className="card">
        <div className="card-image">
          <img src={image2} alt="sample">
              </img>
          <span className="card-title">A Mern stack example </span>
        </div>
        <div className="card-content">
          <p>I repurposed a already built app as an employee database </p>
        </div>
        <div className="card-action">
          <a href="https://protected-cliffs-06697.herokuapp.com/">Heroku Link</a>
        </div>
      </div>
    </div>
    )
}