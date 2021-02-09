import React from "react";
import About from "./About";
import Interests from "./Interests";
import Resume from "./Resume";
import Portfolio from "./Portfolio";


const PageBody=(props)=>{
    return(
    <div className="page-body pt-5">
        <About />
        <Resume/>
        <Interests />
        <Portfolio />
    </div>
    )
}

export default PageBody;