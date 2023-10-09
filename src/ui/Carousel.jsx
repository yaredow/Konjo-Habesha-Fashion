import { ButtonBack, ButtonNext, CarouselProvider } from "pure-react-carousel";
import CarouselSlider from "./CarouselSlider";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import CarouselForMobile from "./CarouselForMobile";
import { useMediaQuery } from "react-responsive";

function Carousel() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const visibleSlides = isDesktop ? 4 : 1;
  return (
    <>
      <CarouselProvider
        className="lg:block hidden"
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={12}
        visibleSlides={visibleSlides}
        step={1}
        infinite={true}
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
            id="prev"
          >
            <MdArrowBackIosNew className=" text-white text-2xl" />
          </ButtonBack>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <CarouselSlider totalSlides={12} />
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            id="next"
          >
            <MdArrowForwardIos className=" text-white text-2xl" />
          </ButtonNext>
        </div>
      </CarouselProvider>
      <CarouselForMobile visibleSlides={visibleSlides} />
    </>
  );
}

export default Carousel;
