import React from "react";
import { Jumbotron } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = (props) => {
  return (
    <div>
      <Jumbotron className="pb-5 pt-5 justify-content-start about">
        <h1 className="display-3 pt-5">Thomas Rager</h1>
        <h3 className="lead pt-3">4851 Gate Post Lane, Wilmington, NC 28412</h3>
        <h5>
          My experience in full stack development allows me to assist with all
          aspects of web application design and development. It has also taught
          me that team-focused approaches to design and development allow
          multiple perspectives that yield a better overall product for clients
          and users as well as providing me with opportunities for growth.
        </h5>
        <h5 className="pt-5">
        <a href="https://www.linkedin.com/in/thomas-rager/" target="_blank"><FontAwesomeIcon icon={["fab","linkedin-in"]} size="7x" className="pr-5" /></a>
        <a href="https://github.com/trager1122" target="_blank"><FontAwesomeIcon icon={["fab", "github"]} size="5x"/></a>
        </h5>
      </Jumbotron>
    </div>
  );
};

export default About;
