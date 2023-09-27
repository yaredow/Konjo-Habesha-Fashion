import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate("");
  return (
    <div>
      <div
        className="h-64 rounded-md overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/background.jpeg')`,
        }}
      >
        <div className="bg-gray-700 bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-2xl text-white font-semibold">
              Habesha Clothes
            </h2>
            <p className="mt-2 text-stone-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              facere provident molestias ipsam sint voluptatum pariatur.
            </p>
            <button
              onClick={() => navigate("/collections")}
              className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
            >
              <span>Shop Now</span>
              <svg
                className="h-5 w-5 mx-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* male clothes */}
      <div className="md:flex mt-8 md:-mx-4">
        <div
          className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
          style={{
            backgroundImage: `url('/images/male.png')`,
          }}
        >
          <div className="bg-gray-700 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Male</h2>
              <p className="mt-2 text-gray-100">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button
                onClick={() => navigate("/collections/men")}
                className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
              >
                <span>Shop Now</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
          style={{
            backgroundImage: `url('/images/female.png')`,
          }}
        >
          <div className="bg-gray-700 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">Female</h2>
              <p className="mt-2 text-gray-100">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button
                onClick={() => navigate("/collections/women")}
                className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
              >
                <span>Shop Now</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
