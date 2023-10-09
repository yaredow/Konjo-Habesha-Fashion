import React from "react";
import { Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const CarouselSlider = ({ totalSlides }) => {
  return (
    <Slider>
      <div
        id="slider"
        className={`h-full flex gap-8 md:gap-6 items-center justify-start transition ease-out duration-700`}
      >
        {[...Array(totalSlides)].map((_, index) => (
          <Slide index={index} key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={`https://i.ibb.co/rFsGfr5/carosel-${index + 1}.png`}
                alt={`Catalog ${index + 1}`}
                className="object-cover object-center w-full"
              />
            </div>
          </Slide>
        ))}
      </div>
    </Slider>
  );
};

export default CarouselSlider;
