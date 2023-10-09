import React from "react";
import { Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { carouselImages } from "./AllData";

const CarouselSlider = ({ totalSlides }) => {
  return (
    <Slider>
      <div
        className={`h-full flex gap-4 md:gap-6 items-center justify-start transition ease-out duration-700`}
      >
        {carouselImages.map((image, index) => (
          <Slide index={index} key={index}>
            <div className="w-auto h-full flex items-center justify-center">
              <img
                src={image}
                alt={`Catalog ${index + 1}`}
                className="object-cover object-center w-full h-full md:w-96 md:h-96"
              />
            </div>
          </Slide>
        ))}
      </div>
    </Slider>
  );
};

export default CarouselSlider;
