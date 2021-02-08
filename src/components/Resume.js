import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
  
import ResumeImg from "../img/Resume.JPG";

const Resume = (props) => {
  return (
    <div>
      <Card middle className="secstyle w-50 mx-auto pb-5 mb-5">
        <CardTitle tag="h1">Resume</CardTitle>
        <CardBody>
        <CardImg bottom className="p-5" src={ResumeImg} alt="Resume Preview" className="resume-img"/>
        </CardBody>
      </Card>
    </div>
  );
};

export default Resume;