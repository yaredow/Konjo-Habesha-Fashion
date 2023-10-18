// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // If using React Router for navigation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex fixed inset-0 top-0 items-center justify-center h-screen bg-white dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg  w-96">
        <h2 className="text-4xl font-bold text-center mb-8 font-custom text-gray-800 dark:text-gray-200">
          Login
        </h2>
        <form>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-800 dark:text-gray-200 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm mt-4 text-gray-600 dark:text-gray-200">
          Don&apos;t have an account?{" "}
          <Link
            to="/account/register"
            className="text-blue-500 hover:underline"
          >
            Register here
          </Link>
        </p>

        <button
          onClick={() => navigate("/products")}
          className=" text-gray-600 dark:text-gray-200 hover:text-blue-600 mt-4 text-sm"
        >
          Return to store
        </button>
      </div>
    </div>
  );
};

export default Login;