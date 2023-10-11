// CreateAccount.jsx
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"; // If using React Router for navigation

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Implement your create account logic here
    console.log("Create account with:", firstName, lastName, email, password);
  };

  return (
    <div className="fixed inset-0 top-12 flex items-center justify-center h-screen bg-white">
      <div className="bg-white p-8 rounded-lg  w-96">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 text-center font-custom">
          Create Account
        </h2>
        <form>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            placeholder=" "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            placeholder=" "
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:border-blue-500"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="button"
            onClick={handleCreateAccount}
            className="w-full mt-4 p-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm mt-4 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
