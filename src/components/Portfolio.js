import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselCaption,
} from "reactstrap";
import Soundtrackify from "../img/Soundtrackify.JPG";
import EmployeeDirectory from "../img/EmployeeDirectory.png";
import FitnessTracker from "../img/FitnessTracker.png";

const items = [
  {
    src: Soundtrackify,
    altText: "Soundtrackify App",
    caption: (
      <div className='bottom-0'>
        <a href="https://github.com/trager1122/Soundtrackify" className="mr-5">
          Github Repository
        </a>
        <a href="https://trager1122.github.io/Soundtrackify/">
          Deployed Website
        </a>
      </div>
    ),
  },
  {
    src: EmployeeDirectory,
    altText: "Employee Directory",
    caption: (
      <>
        <a href="https://github.com/trager1122/employeedirectory" className='mr-5'>
          Github Repository
        </a>
        <a href="https://trager1122.github.io/employeedirectory/">Deployed Website</a>
      </>
    ),
  },
  {
    src: FitnessTracker,
    altText: "Fitness Tracker",
    caption: (
      <>
        <a href="https://github.com/trager1122/FitnessTracker" className="mr-5">
          Github Repository
        </a>
        <a href="https://fitnesstracker1122.herokuapp.com/">
          Deployed Website
        </a>
      </>
    ),
  },
];

const Portfolio = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          className="text-dark"
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <div id="portfolio">
      <h1 className='mx-auto display-3'>Portfolio</h1>
      <Carousel
        className="w-75 h-100 mx-auto pt-5 pb-5"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default Portfolio;
