import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the submitted email
    console.log("Submitted email:", email);
    // Reset the email input after submission
    setEmail("");
  };

  return (
    <div className="mx-auto border-b w-[90%]">
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center md:text-left gap-6 flex flex-col md:flex-row justify-between items-center">
          <div className="">
            <h2 className="text-2xl font-bold mb-4 text-stone-600">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-stone-600 mb-6">
              Stay updated with our latest products and promotions. Subscribe to
              our newsletter!
            </p>
          </div>
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full sm:w-auto px-4 py-2 mb-2 sm:mb-0 mr-2 border rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
