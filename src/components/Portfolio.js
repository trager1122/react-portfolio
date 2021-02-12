import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import Soundtrackify from "../img/Soundtrackify.JPG";
import PasswordGenerator from "../img/PasswordGenerator.JPG";
import DailyPlanner from "../img/DailyPlanner.JPG";

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
    src: PasswordGenerator,
    altText: "Password Generator",
    caption: (
      <>
        <a href="https://github.com/trager1122/PWGenerator" className='mr-5'>
          Github Repository
        </a>
        <a href="https://trager1122.github.io/PWGenerator/">Deployed Website</a>
      </>
    ),
  },
  {
    src: DailyPlanner,
    altText: "Daily Planner",
    caption: (
      <>
        <a href="https://github.com/trager1122/DailyPlanner" className="mr-5">
          Github Repository
        </a>
        <a href="https://trager1122.github.io/DailyPlanner/">
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
