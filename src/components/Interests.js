import React from "react";
import { Jumbotron, Container } from "reactstrap";

const Interests = (props) => {
  return (
    <div className="mt-0" id="interests">
      <Jumbotron fluid className="secstyle">
        <Container fluid>
          <h1 className="display-3">Interests</h1>
          <p className="lead">
            Apart from being a full stack developer, I enjoy most of my time
            being spent with my family. I am an enthusiastic supporter of small
            businesses including local restaurants and breweries.
          </p>

          <p>
            Trends in technology, politics, economics and sports are topics of
            special interest to me beyond web development.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Interests;
