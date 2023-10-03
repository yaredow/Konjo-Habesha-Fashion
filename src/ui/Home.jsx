import ShopButton from "./ShopButton";
import { items } from "./AllData";

function Home() {
  const maleItems = items
    .filter((item) => item.catagory === "male")
    .slice(0, 2);
  const femaleItems = items
    .filter((item) => item.catagory === "female")
    .slice(0, 2);
  const collectionItems = items.filter(
    (item) => item.catagory === "collection"
  );

  const homeItems = [...maleItems, ...femaleItems, ...collectionItems];

  return (
    <div>
      <div
        className="h-64 rounded-md overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/home-background/background.jpeg')`,
        }}
      >
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-2xl text-white font-semibold">
              Habesha Clothes
            </h2>
            <p className="mt-2 text-stone-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              facere provident molestias ipsam sint voluptatum pariatur.
            </p>

            <ShopButton label="Shop Now" path="/collections" />
          </div>
        </div>
      </div>

      {/* male and female clothes */}
      <div className="md:flex mt-8 md:-mx-4">
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
        <h3 className="text-gray-600 text-2xl font-medium">Collections</h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {/* Fashion items */}
          {/* {homeItems.map((fashionItem) => (
            <HabeshaFashionItem
              key={fashionItem.img}
              fashionItem={fashionItem}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Home;
