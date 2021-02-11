import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Soundtrackify from "../img/Soundtrackify.JPG";
import PasswordGenerator from "../img/PasswordGenerator.JPG"
import DailyPlanner from "../img/DailyPlanner.JPG"

const items = [
  {
    src: Soundtrackify,
    altText: 'Soundtrackify App',
    caption: 'Soundtrackify'
  },
  {
    src: PasswordGenerator,
    altText: 'Password Generator',
    caption: 'Password Generator'
  },
  {
    src: DailyPlanner,
    altText: 'Daily Planner',
    caption: 'Daily Planner'
  }
];

const Portfolio = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className="text-dark" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
  <div id="portfolio">
    <Carousel
      className="w-75 h-50 mx-auto"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  </div>
  );
}

export default Portfolio;