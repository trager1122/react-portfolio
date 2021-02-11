import React from "react";
import About from "./About";
import Interests from "./Interests";
import Resume from "./Resume";
import Portfolio from "./Portfolio";


const PageBody=(props)=>{
    return(
    // < className="page-body pt-5">
    <main>
        <About />
        <Resume/>
        <Interests />
        <Portfolio />
    </main>
    )
}

export default PageBody;