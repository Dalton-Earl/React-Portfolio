import React from 'react'
import M from "materialize-css"
import ContactCard from "./ContactCard"
import AboutCard from "./AboutCard"
import ProjectCardBurger from "./ProjectCardBurger"
export default function Home() {
     return<div className = "row ">
       <AboutCard />
       <ContactCard />
       <ProjectCardBurger />
      
     </div>
    
}
