import React from "react";
import About from "./About";
import Interests from "./Interests"
import BGImage from "../img/pexels-danny-meneses-943096.jpg";

const PageBody=(props)=>{
    return(
    <div style={{backgroundImage: {BGImage}}} className="pt-5">
        <section><About /></section>
        <section><Interests /></section>
    </div>
    )
}

export default PageBody;