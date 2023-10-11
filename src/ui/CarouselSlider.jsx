import { Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useNavigate } from "react-router-dom";

import { items } from "./AllData";
import useAddToCart from "../hook/useAddToCart";

const CarouselSlider = () => {
  const navigate = useNavigate();
  const carouselItems = items.filter((item) => item.carousel);

  return (
    <Slider>
      <div
        className={`h-full flex gap-4 md:gap-6 items-center justify-start transition ease-out duration-700`}
      >
        {carouselItems.map((item, index) => (
          <Slide
            onClick={() => navigate(`/product/${item.id}`)}
            index={index}
            key={index}
          >
            <div className="group cursor-pointer w-auto h-full flex items-center justify-center relative">
              <img
                src={item.img}
                alt={`Catalog ${index + 1}`}
                className="object-cover w-full h-full md:w-96 md:h-96 transition-opacity group-hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gray-950 bg-opacity-60">
                <div className="items-center flex flex-col gap-4">
                  <h3 className="text-white font-custom text-xl">
                    {item.name}
                  </h3>
                  <p className="text-white px-4 text-center text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </Slider>
  );
};

export default CarouselSlider;
