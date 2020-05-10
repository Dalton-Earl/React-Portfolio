import React from 'react'
import image1 from '../pictures/burger.jpg'

export default function ProjectCardBurger() {
    return (
    <div className="col s12 l4">
      <div className="card">
        <div className="card-image">
          <img src={image1} alt="sample">
              </img>
          <span className="card-title">buger example</span>
        </div>
        <div className="card-content">
          <p>This is an example that uses node express and MySQL to track a simple list</p>
        </div>
        <div className="card-action">
          <a href="https://morning-refuge-03088.herokuapp.com/">Heroku Link</a>
        </div>
      </div>
    </div>
    )
}
