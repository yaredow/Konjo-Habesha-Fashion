import HabeshaFashionItem from "./HabeshaFashionItem";
import ShopButton from "./ShopButton";

const fashionItems = [
  {
    name: "Female Habesha Kemis",
    label: "Women",
    imageUrl:
      "https://i.pinimg.com/564x/8a/10/85/8a1085beaeebe10277eae34f3acb2b38.jpg",
    price: "$12",
  },
  {
    name: "Female Habesha Kemis",
    label: "Women",
    imageUrl:
      "https://i.pinimg.com/564x/a8/41/fc/a841fcf0b99a1c75172ccf12d0e52295.jpg",
    price: "$12",
  },
  {
    name: "Male Habesha Tee-shirt",
    label: "Women",
    imageUrl:
      "https://i.pinimg.com/564x/b4/20/fb/b420fb95575a10193685dedbef00fce5.jpg",
    price: "$11",
  },
  {
    name: "Male Habesha Tee-shirt",
    label: "Women",
    imageUrl:
      "https://i.pinimg.com/564x/f4/21/f3/f421f36d0b5d711d8d4b0e14b0431d6b.jpg",
    price: "$10",
  },
];

function Home() {
  return (
    <div>
      <div
        className="h-64 rounded-md overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/background.jpeg')`,
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
            backgroundImage: `url('${"/images/men-medium.png"}')`,
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
            backgroundImage: `url('${"/images/women-medium.png"}')`,
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
          {fashionItems.map((fashionItem) => (
            <HabeshaFashionItem
              key={fashionItem.imageUrl}
              imageUrl={fashionItem.imageUrl}
              name={fashionItem.name}
              price={fashionItem.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
