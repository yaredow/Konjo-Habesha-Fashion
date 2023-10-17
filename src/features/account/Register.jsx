// CreateAccount.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    reset();
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 top-12 flex items-center justify-center h-screen dark:bg-gray-800 bg-white">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg  w-96">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center font-custom">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium dark:text-gray-200 text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", {
              required: "This field required",
            })}
            className={`input ${errors.email ? "border-red-500" : ""}`}
            placeholder=" "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label
            htmlFor="lastName"
            className="block text-sm dark:text-gray-200 font-medium text-gray-700 mt-4"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: "This field required",
            })}
            className={`input ${errors.email ? "border-red-500" : ""}`}
            placeholder=" "
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label
            htmlFor="email"
            className="block text-sm dark:text-gray-200 font-medium text-gray-700 mt-4"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "This field required",
            })}
            className={`input ${errors.email ? "border-red-500" : ""}`}
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label
            htmlFor="password"
            className="block dark:text-gray-200 text-sm font-medium text-gray-700 mt-4"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "This field required",
            })}
            className={`input ${errors.email ? "border-red-500" : ""}`}
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full mt-4 p-2 bg-blue-700 text-white rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm mt-4 dark:text-gray-300 text-gray-600">
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
