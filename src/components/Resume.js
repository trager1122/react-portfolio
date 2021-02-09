import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
  
import ResumeImg from "../img/Resume.JPG";

const Resume = (props) => {
  return (
    <div className="secstyle w-50 mx-auto pt-5 pb-5 mb-5">
      <Card>
        <CardImg top width="100%" src={ ResumeImg } alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Resume;

// secstyle w-50 mx-auto pb-5 mb-5