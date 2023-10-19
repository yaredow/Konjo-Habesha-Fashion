import { useParams } from "react-router-dom";
import { items } from "../../ui/AllData";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useAddToCart from "../../hook/useAddToCart";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const { id } = useParams();
  const productItem = items.find((item) => item.id === parseInt(id));
  const { handleAddToCart } = useAddToCart(productItem);

  const { name, catagory, img, description, material, price, size } =
    productItem;

  const sizeArray = String(size)
    .split(",")
    .map((siz) => siz.trim());
  console.log(sizeArray);

  function HandleSelectedMaterial(e) {
    setSelectedMaterial(e.target.value);
  }

  function HandleSelectedSize(e) {
    console.log(e.target.value);
    setSelectedSize(e.target.value);
  }
  useEffect(function () {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="md:flex md:items-center">
        <div className="h-64 md:w-1/2 lg:h-96">
          <LazyLoadImage
            className="h-full max-w-xl rounded-md object-cover  mx-auto"
            src={img}
            alt={`${name}`}
          />
        </div>

        <div className="w-full mx-auto mt-5 md:ml-8 md:mt-0  ">
          <h1 className="text-gray-700 font-custom font-semibold uppercase text-2xl dark:text-gray-200">
            {name}
          </h1>
          <span className="text-gray-800 dark:text-gray-200 font-semibold mt-3">
            {formatCurrency(price)}
          </span>
          <hr className="my-3" />

          <div className=" font-custom dark:text-gray-200 text-lg mb-4">
            <p>{description}</p>
          </div>

          <div className=" flex flex-row gap-2">
            <h4 className=" text-md  text-stone-800 dark:text-gray-100 font-semibold">
              Catagory:
            </h4>
            <h4 className=" text-md italic text-gray-900 dark:text-gray-200 font-semibold">
              {catagory}
            </h4>
          </div>

          <div className="mt-6">
            <div className=" flex md:flex-row flex-col gap-4">
              <div className=" flex-1">
                <label
                  className=" text-md text-stone-600 dark:text-gray-100 font-medium"
                  htmlFor="size"
                >
                  Size:
                </label>
                <select
                  className=" bg-gray-50 border border-gray-400 mt-2 text-gray-900 text-md font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  id="size"
                >
                  {sizeArray.map((si) => (
                    <option
                      key={si}
                      value={selectedSize}
                      onChange={HandleSelectedSize}
                    >
                      {si.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              <div className=" flex-1">
                <label
                  className=" mb-4 text-md dark:text-gray-100 font-medium text-stone-600 "
                  htmlFor="material"
                >
                  Material:
                </label>
                <select
                  className=" bg-gray-50 border border-gray-300 mt-2 text-gray-900 text-md font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full w p-2.5 "
                  id="material"
                >
                  <option
                    value={selectedMaterial}
                    onChange={HandleSelectedMaterial}
                  >
                    {material.charAt(0).toUpperCase() + material.slice(1)}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-4 mt-6">
            <div className=" flex-1">
              <button className="bg-blue-500 text-xl  items-center w-full hover:bg-blue-600 text-gray-800 font-bold py-4 px-4 rounded ">
                <span>Buy Now</span>
              </button>
            </div>
            <div className=" flex-1">
              <button
                onClick={handleAddToCart}
                className="bg-gray-300 py-4 text-xl w-full hover:bg-gray-400 text-gray-800 font-bold px-4 rounded  items-center"
              >
                <div className=" flex flex-row gap-2 justify-center">
                  <h2>Add to cart</h2>
                  <AiOutlineShoppingCart className=" text-xl mt-[6px]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
