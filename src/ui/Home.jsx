import { BiSolidPhoneCall } from "react-icons/bi";
import { items } from "./AllData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CollectionItem from "../features/product/ProductsItem";
import { useEffect } from "react";
import Carousel from "./Carousel";

function Home2() {
  const navigate = useNavigate();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  function handleShowPhoneNumber() {
    setShowPhoneNumber((phoneNumber) => !phoneNumber);
  }

  useEffect(function () {
    window.scrollTo(0, 0);

    return () => window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mx-auto ">
        <Carousel />

        <div className="mt-6 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="max-w-lg">
            <h1 className="text-2xl font-custom font-semibold text-gray-800">
              Konjo Habesha Clothing
            </h1>
            <p className="mt-2 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, alias. Quas necessitatibus exercitationem praesentium.
            </p>
          </div>
          <div className="">
            <button
              onClick={handleShowPhoneNumber}
              className="flex whitespace-nowrap rounded-lg bg-blue-500 px-6 py-2 font-bold text-white transition hover:translate-y-1"
            >
              <div className=" flex flex-row gap-2">
                <BiSolidPhoneCall className=" text-2xl" />
                <h4>Call Us</h4>
              </div>
            </button>
            {showPhoneNumber && (
              <p className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
                +1 432 923 0001
              </p>
            )}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-gray-600 text-2xl text-center font-medium">
            FEATURED COLLECTION
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {items.slice(0, 8).map((item) => (
              <CollectionItem key={item.img} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-6 flex justify-center">
        <a
          onClick={() => navigate("/products")}
          href="#"
          className=" rounded-md transition-all border border-transparent bg-blue-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-600"
        >
          Browse All
        </a>
      </div>
    </>
  );
}

export default Home2;
