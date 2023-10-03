import { BiSolidPhoneCall } from "react-icons/bi";
import { items } from "./AllData";
import ShopButton from "./ShopButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CollectionItem from "../features/collections/CollectionItem";

function Home2() {
  const navigate = useNavigate();
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  function handleShowPhoneNumber() {
    setShowPhoneNumber((phoneNumber) => !phoneNumber);
  }

  return (
    <>
      <div className="mx-auto ">
        <div
          className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
          style={{
            backgroundImage: `url('/images/home-background/background.jpeg')`,
          }}
        >
          <div className="px-4 pt-8 pb-10">
            <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg shadow-stone-400">
              <img
                className="mx-auto h-auto w-full bg-stone-400 rounded-full"
                src="/images/logo/logo.png"
                alt=""
              />
            </div>
          </div>
        </div>

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

        <div className="md:flex md:-mx-4 md:mt-18 mt-12">
          <div
            className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style={{
              backgroundImage: `url('${"/images/home-background/men-medium.png"}')`,
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">Male</h2>
                <p className="mt-2 text-gray-100">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>

                <ShopButton path="/collections/men" label="Men" />
              </div>
            </div>
          </div>
          <div
            className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
            style={{
              backgroundImage: `url('${"/images/home-background/women-medium.png"}')`,
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">Female</h2>
                <p className="mt-2 text-gray-100">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>

                <ShopButton path="/collections/women" label="Women" />
              </div>
            </div>
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
          onClick={() => navigate("/collections")}
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
