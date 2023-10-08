import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 my-12">
      <div className=" text-center text-md mb-6 text-stone-800 max-w-md flex justify-center flex-col mx-auto">
        <h2 className="text-3xl font-custom font-semibold mb-6 ">Contact Us</h2>
        <p>
          Contact us through a info@Konjohabesha.com for a quicker response.
          KonjoHabesha.com CC.
        </p>
      </div>
      <form className="max-w-md mx-auto">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full  px-3 py-2 mb-1 border rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 mb-1 border rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full px-3 py-2 mb-1 border rounded-md focus:outline-none focus:border-blue-500 transition-colors cursor-pointer"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
