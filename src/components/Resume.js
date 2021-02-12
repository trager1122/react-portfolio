import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
  } from 'reactstrap';
  
import ResumeImg from "../img/Resume.JPG";
import ResumeFile from "../ThomasRager-WebDevelopmentResume.pdf"

const Resume = (props) => {
  return (
    <div className="secstyle" id="resume">
      <Card>
        <CardImg className="w-50 mx-auto" src={ ResumeImg } alt="Preview of My Resume" />
        <CardBody>
          <CardTitle tag="h5"><a href={ResumeFile}>My Resume</a></CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default Resume;