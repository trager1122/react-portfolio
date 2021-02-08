import React from "react";
import About from "./About";
import Interests from "./Interests";
import Resume from "./Resume";
import background from "../img/pexels-danny-meneses-943096.jpg";

const PageBody=(props)=>{
    return(
    <div className="page-body" style={{backgroundImage: `url(${background})`}} className="pt-5">
        <section><About /></section>
        <section><Resume/></section>
        <section><Interests /></section>
    </div>
    )
}

export default PageBody;