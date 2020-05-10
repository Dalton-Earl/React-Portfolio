import React from 'react'
import image2 from '../pictures/One.png'

export default function ProjectCardOne() {
    return (
    <div className="col s12 l4">
      <div className="card">
        <div className="card-image">
          <img src={image2} alt="sample">
              </img>
          <span className="card-title">My first Group project</span>
        </div>
        <div className="card-content">
          <p>This is a my very first group project it shows HTML CSS and Javascript</p>
        </div>
        <div className="card-action">
          <a href="https://brendan-hembury.github.io/Project-1/index.html">github pages link</a>
        </div>
      </div>
    </div>
    )
}
