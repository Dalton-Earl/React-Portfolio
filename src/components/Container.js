import React from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
function Container(){
    return <main>
        <div className = "container">
            
            <Home />
            <About />
            <Projects />
            <Contact />
        </div>

        


        
    </main>
}  

export default Container;