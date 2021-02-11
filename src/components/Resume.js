import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
  
import ResumeImg from "../img/Resume.JPG";

const Resume = (props) => {
  return (
    <div className="secstyle mt-5" id="resume">
      <Card>
        <CardImg className="w-50 mx-auto" src={ ResumeImg } alt="Preview of My Resume" />
        <CardBody>
          <CardTitle tag="h5"><a href="">My Resume</a></CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Resume;

// secstyle w-50 mx-auto pb-5 mb-5