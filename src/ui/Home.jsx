import { BiSolidPhoneCall } from "react-icons/bi";
import { items } from "./AllData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "./Carousel";
import ProductItem from "../features/product/ProductsItem";

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
      <div className="mx-auto">
        <div
          className="relative md:mb-8 mb-3 h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
          style={{
            backgroundImage: `url('background.jpeg')`,
          }}
        >
          <div className="px-4 pt-8 pb-10">
            <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg shadow-gray-400 dark:shadow-gray-800">
              <img
                className="mx-auto h-auto w-full bg-gray-400 rounded-full"
                src="/images/logo/logo.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className=" mt-12 items-center flex flex-col md:items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
          <div className="max-w-lg">
            <h1 className="text-2xl text-center md:text-left font-custom font-semibold text-gray-800 dark:text-gray-100">
              Konjo Habesha Clothing
            </h1>
            <p className="mt-6 text-center md:text-start  text-gray-600 dark:text-gray-200">
              Discover the essence of Habesha elegance at Konjo Habesha Fashion
              in Addis Ababa. Our boutique in Shiromeda unveils finely crafted
              traditional clothing, weaving together style and Ethiopian
              heritage. Immerse yourself in the cultural tapestry of Konjo
              Habesha Fashion.
            </p>
          </div>
          <div className="">
            <button
              onClick={handleShowPhoneNumber}
              className="flex whitespace-nowrap rounded-lg bg-blue-500 px-6 py-2 font-bold text-white transition hover:translate-y-1"
            >
              <div className=" flex flex-row gap-2">
                <BiSolidPhoneCall className=" text-2xl" />
                <h4>Call us</h4>
              </div>
            </button>
            {showPhoneNumber && (
              <p className="mt-4 flex items-center whitespace-nowrap text-gray-500 dark:text-gray-200 sm:justify-end">
                +251 923 0001
              </p>
            )}
          </div>
        </div>

        <div className=" w-full mt-8">
          <h3 className=" md:mb-6 text-gray-900 text-2xl dark:text-gray-100 text-start font-medium">
            TRENDING NOW
          </h3>
          <Carousel />
        </div>

        <div className="mt-28">
          <h3 className="text-gray-900 text-2xl text-start dark:text-gray-100 font-medium">
            FEATURED COLLECTION
          </h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {items.slice(0, 8).map((item) => (
              <ProductItem key={item.img} item={item} />
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-12 flex justify-center">
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
